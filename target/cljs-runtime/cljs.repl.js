goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__40427){
var map__40431 = p__40427;
var map__40431__$1 = (((((!((map__40431 == null))))?(((((map__40431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40431):map__40431);
var m = map__40431__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40431__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40431__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__40435_40746 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40436_40747 = null;
var count__40437_40748 = (0);
var i__40438_40749 = (0);
while(true){
if((i__40438_40749 < count__40437_40748)){
var f_40755 = chunk__40436_40747.cljs$core$IIndexed$_nth$arity$2(null,i__40438_40749);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40755], 0));


var G__40756 = seq__40435_40746;
var G__40757 = chunk__40436_40747;
var G__40758 = count__40437_40748;
var G__40759 = (i__40438_40749 + (1));
seq__40435_40746 = G__40756;
chunk__40436_40747 = G__40757;
count__40437_40748 = G__40758;
i__40438_40749 = G__40759;
continue;
} else {
var temp__5735__auto___40760 = cljs.core.seq(seq__40435_40746);
if(temp__5735__auto___40760){
var seq__40435_40761__$1 = temp__5735__auto___40760;
if(cljs.core.chunked_seq_QMARK_(seq__40435_40761__$1)){
var c__4609__auto___40762 = cljs.core.chunk_first(seq__40435_40761__$1);
var G__40763 = cljs.core.chunk_rest(seq__40435_40761__$1);
var G__40764 = c__4609__auto___40762;
var G__40765 = cljs.core.count(c__4609__auto___40762);
var G__40766 = (0);
seq__40435_40746 = G__40763;
chunk__40436_40747 = G__40764;
count__40437_40748 = G__40765;
i__40438_40749 = G__40766;
continue;
} else {
var f_40767 = cljs.core.first(seq__40435_40761__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40767], 0));


var G__40768 = cljs.core.next(seq__40435_40761__$1);
var G__40769 = null;
var G__40770 = (0);
var G__40771 = (0);
seq__40435_40746 = G__40768;
chunk__40436_40747 = G__40769;
count__40437_40748 = G__40770;
i__40438_40749 = G__40771;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_40772 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_40772], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_40772)))?cljs.core.second(arglists_40772):arglists_40772)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__40455_40774 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40456_40775 = null;
var count__40457_40776 = (0);
var i__40458_40777 = (0);
while(true){
if((i__40458_40777 < count__40457_40776)){
var vec__40483_40778 = chunk__40456_40775.cljs$core$IIndexed$_nth$arity$2(null,i__40458_40777);
var name_40779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40483_40778,(0),null);
var map__40486_40780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40483_40778,(1),null);
var map__40486_40781__$1 = (((((!((map__40486_40780 == null))))?(((((map__40486_40780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40486_40780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40486_40780):map__40486_40780);
var doc_40782 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40486_40781__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40783 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40486_40781__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40779], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40783], 0));

if(cljs.core.truth_(doc_40782)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40782], 0));
} else {
}


var G__40786 = seq__40455_40774;
var G__40787 = chunk__40456_40775;
var G__40788 = count__40457_40776;
var G__40789 = (i__40458_40777 + (1));
seq__40455_40774 = G__40786;
chunk__40456_40775 = G__40787;
count__40457_40776 = G__40788;
i__40458_40777 = G__40789;
continue;
} else {
var temp__5735__auto___40790 = cljs.core.seq(seq__40455_40774);
if(temp__5735__auto___40790){
var seq__40455_40791__$1 = temp__5735__auto___40790;
if(cljs.core.chunked_seq_QMARK_(seq__40455_40791__$1)){
var c__4609__auto___40792 = cljs.core.chunk_first(seq__40455_40791__$1);
var G__40793 = cljs.core.chunk_rest(seq__40455_40791__$1);
var G__40794 = c__4609__auto___40792;
var G__40795 = cljs.core.count(c__4609__auto___40792);
var G__40796 = (0);
seq__40455_40774 = G__40793;
chunk__40456_40775 = G__40794;
count__40457_40776 = G__40795;
i__40458_40777 = G__40796;
continue;
} else {
var vec__40494_40797 = cljs.core.first(seq__40455_40791__$1);
var name_40798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40494_40797,(0),null);
var map__40497_40799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40494_40797,(1),null);
var map__40497_40800__$1 = (((((!((map__40497_40799 == null))))?(((((map__40497_40799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40497_40799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40497_40799):map__40497_40799);
var doc_40801 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40497_40800__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40802 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40497_40800__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40798], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40802], 0));

if(cljs.core.truth_(doc_40801)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40801], 0));
} else {
}


var G__40803 = cljs.core.next(seq__40455_40791__$1);
var G__40804 = null;
var G__40805 = (0);
var G__40806 = (0);
seq__40455_40774 = G__40803;
chunk__40456_40775 = G__40804;
count__40457_40776 = G__40805;
i__40458_40777 = G__40806;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__40504 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__40505 = null;
var count__40506 = (0);
var i__40507 = (0);
while(true){
if((i__40507 < count__40506)){
var role = chunk__40505.cljs$core$IIndexed$_nth$arity$2(null,i__40507);
var temp__5735__auto___40808__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___40808__$1)){
var spec_40809 = temp__5735__auto___40808__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40809)], 0));
} else {
}


var G__40813 = seq__40504;
var G__40814 = chunk__40505;
var G__40815 = count__40506;
var G__40816 = (i__40507 + (1));
seq__40504 = G__40813;
chunk__40505 = G__40814;
count__40506 = G__40815;
i__40507 = G__40816;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__40504);
if(temp__5735__auto____$1){
var seq__40504__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__40504__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__40504__$1);
var G__40818 = cljs.core.chunk_rest(seq__40504__$1);
var G__40819 = c__4609__auto__;
var G__40820 = cljs.core.count(c__4609__auto__);
var G__40821 = (0);
seq__40504 = G__40818;
chunk__40505 = G__40819;
count__40506 = G__40820;
i__40507 = G__40821;
continue;
} else {
var role = cljs.core.first(seq__40504__$1);
var temp__5735__auto___40823__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___40823__$2)){
var spec_40824 = temp__5735__auto___40823__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40824)], 0));
} else {
}


var G__40828 = cljs.core.next(seq__40504__$1);
var G__40829 = null;
var G__40830 = (0);
var G__40831 = (0);
seq__40504 = G__40828;
chunk__40505 = G__40829;
count__40506 = G__40830;
i__40507 = G__40831;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__40833 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__40834 = cljs.core.ex_cause(t);
via = G__40833;
t = G__40834;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__40522 = datafied_throwable;
var map__40522__$1 = (((((!((map__40522 == null))))?(((((map__40522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40522):map__40522);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40522__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40522__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40522__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__40523 = cljs.core.last(via);
var map__40523__$1 = (((((!((map__40523 == null))))?(((((map__40523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40523):map__40523);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40523__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40523__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40523__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__40524 = data;
var map__40524__$1 = (((((!((map__40524 == null))))?(((((map__40524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40524):map__40524);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40524__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40524__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40524__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__40525 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__40525__$1 = (((((!((map__40525 == null))))?(((((map__40525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40525):map__40525);
var top_data = map__40525__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40525__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__40539 = phase;
var G__40539__$1 = (((G__40539 instanceof cljs.core.Keyword))?G__40539.fqn:null);
switch (G__40539__$1) {
case "read-source":
var map__40544 = data;
var map__40544__$1 = (((((!((map__40544 == null))))?(((((map__40544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40544):map__40544);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40544__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40544__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__40552 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__40552__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40552,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40552);
var G__40552__$2 = (cljs.core.truth_((function (){var fexpr__40562 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40562.cljs$core$IFn$_invoke$arity$1 ? fexpr__40562.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40562.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40552__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40552__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40552__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40552__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__40563 = top_data;
var G__40563__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40563,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40563);
var G__40563__$2 = (cljs.core.truth_((function (){var fexpr__40564 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40564.cljs$core$IFn$_invoke$arity$1 ? fexpr__40564.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40564.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40563__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40563__$1);
var G__40563__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40563__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40563__$2);
var G__40563__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40563__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40563__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40563__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40563__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__40565 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40565,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40565,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40565,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40565,(3),null);
var G__40568 = top_data;
var G__40568__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40568,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__40568);
var G__40568__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40568__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__40568__$1);
var G__40568__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40568__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__40568__$2);
var G__40568__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40568__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40568__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40568__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40568__$4;
}

break;
case "execution":
var vec__40579 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40579,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40579,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40579,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40579,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__40521_SHARP_){
var or__4185__auto__ = (p1__40521_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__40587 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40587.cljs$core$IFn$_invoke$arity$1 ? fexpr__40587.cljs$core$IFn$_invoke$arity$1(p1__40521_SHARP_) : fexpr__40587.call(null,p1__40521_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__40588 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__40588__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40588,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__40588);
var G__40588__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40588__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40588__$1);
var G__40588__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40588__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__40588__$2);
var G__40588__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40588__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__40588__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40588__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40588__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40539__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__40613){
var map__40615 = p__40613;
var map__40615__$1 = (((((!((map__40615 == null))))?(((((map__40615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40615):map__40615);
var triage_data = map__40615__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40615__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40615__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40615__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40615__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40615__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40615__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40615__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40615__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__40640 = phase;
var G__40640__$1 = (((G__40640 instanceof cljs.core.Keyword))?G__40640.fqn:null);
switch (G__40640__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__40644 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__40646 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40647 = loc;
var G__40648 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40659_40966 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40660_40967 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40661_40968 = true;
var _STAR_print_fn_STAR__temp_val__40662_40969 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40661_40968);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40662_40969);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40603_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40603_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40660_40967);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40659_40966);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40644,G__40646,G__40647,G__40648) : format.call(null,G__40644,G__40646,G__40647,G__40648));

break;
case "macroexpansion":
var G__40670 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__40671 = cause_type;
var G__40672 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40673 = loc;
var G__40674 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40670,G__40671,G__40672,G__40673,G__40674) : format.call(null,G__40670,G__40671,G__40672,G__40673,G__40674));

break;
case "compile-syntax-check":
var G__40675 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__40676 = cause_type;
var G__40677 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40678 = loc;
var G__40679 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40675,G__40676,G__40677,G__40678,G__40679) : format.call(null,G__40675,G__40676,G__40677,G__40678,G__40679));

break;
case "compilation":
var G__40685 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__40686 = cause_type;
var G__40687 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40688 = loc;
var G__40689 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40685,G__40686,G__40687,G__40688,G__40689) : format.call(null,G__40685,G__40686,G__40687,G__40688,G__40689));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__40695 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__40696 = symbol;
var G__40697 = loc;
var G__40699 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40710_40993 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40711_40994 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40712_40995 = true;
var _STAR_print_fn_STAR__temp_val__40713_40996 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40712_40995);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40713_40996);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40604_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40604_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40711_40994);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40710_40993);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40695,G__40696,G__40697,G__40699) : format.call(null,G__40695,G__40696,G__40697,G__40699));
} else {
var G__40725 = "Execution error%s at %s(%s).\n%s\n";
var G__40726 = cause_type;
var G__40727 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40728 = loc;
var G__40729 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40725,G__40726,G__40727,G__40728,G__40729) : format.call(null,G__40725,G__40726,G__40727,G__40728,G__40729));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40640__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
