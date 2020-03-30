goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34762){
var map__34763 = p__34762;
var map__34763__$1 = (((((!((map__34763 == null))))?(((((map__34763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34763):map__34763);
var m = map__34763__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34763__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34763__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__34765_35089 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34766_35090 = null;
var count__34767_35091 = (0);
var i__34768_35092 = (0);
while(true){
if((i__34768_35092 < count__34767_35091)){
var f_35094 = chunk__34766_35090.cljs$core$IIndexed$_nth$arity$2(null,i__34768_35092);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35094], 0));


var G__35096 = seq__34765_35089;
var G__35097 = chunk__34766_35090;
var G__35098 = count__34767_35091;
var G__35099 = (i__34768_35092 + (1));
seq__34765_35089 = G__35096;
chunk__34766_35090 = G__35097;
count__34767_35091 = G__35098;
i__34768_35092 = G__35099;
continue;
} else {
var temp__5735__auto___35100 = cljs.core.seq(seq__34765_35089);
if(temp__5735__auto___35100){
var seq__34765_35102__$1 = temp__5735__auto___35100;
if(cljs.core.chunked_seq_QMARK_(seq__34765_35102__$1)){
var c__4609__auto___35104 = cljs.core.chunk_first(seq__34765_35102__$1);
var G__35105 = cljs.core.chunk_rest(seq__34765_35102__$1);
var G__35106 = c__4609__auto___35104;
var G__35107 = cljs.core.count(c__4609__auto___35104);
var G__35108 = (0);
seq__34765_35089 = G__35105;
chunk__34766_35090 = G__35106;
count__34767_35091 = G__35107;
i__34768_35092 = G__35108;
continue;
} else {
var f_35111 = cljs.core.first(seq__34765_35102__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35111], 0));


var G__35112 = cljs.core.next(seq__34765_35102__$1);
var G__35113 = null;
var G__35114 = (0);
var G__35115 = (0);
seq__34765_35089 = G__35112;
chunk__34766_35090 = G__35113;
count__34767_35091 = G__35114;
i__34768_35092 = G__35115;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35118 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35118], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35118)))?cljs.core.second(arglists_35118):arglists_35118)], 0));
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
var seq__34770_35123 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34771_35124 = null;
var count__34772_35125 = (0);
var i__34773_35126 = (0);
while(true){
if((i__34773_35126 < count__34772_35125)){
var vec__34786_35127 = chunk__34771_35124.cljs$core$IIndexed$_nth$arity$2(null,i__34773_35126);
var name_35128 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34786_35127,(0),null);
var map__34789_35129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34786_35127,(1),null);
var map__34789_35130__$1 = (((((!((map__34789_35129 == null))))?(((((map__34789_35129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34789_35129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34789_35129):map__34789_35129);
var doc_35131 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34789_35130__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35132 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34789_35130__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35128], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35132], 0));

if(cljs.core.truth_(doc_35131)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35131], 0));
} else {
}


var G__35140 = seq__34770_35123;
var G__35141 = chunk__34771_35124;
var G__35142 = count__34772_35125;
var G__35143 = (i__34773_35126 + (1));
seq__34770_35123 = G__35140;
chunk__34771_35124 = G__35141;
count__34772_35125 = G__35142;
i__34773_35126 = G__35143;
continue;
} else {
var temp__5735__auto___35144 = cljs.core.seq(seq__34770_35123);
if(temp__5735__auto___35144){
var seq__34770_35145__$1 = temp__5735__auto___35144;
if(cljs.core.chunked_seq_QMARK_(seq__34770_35145__$1)){
var c__4609__auto___35146 = cljs.core.chunk_first(seq__34770_35145__$1);
var G__35147 = cljs.core.chunk_rest(seq__34770_35145__$1);
var G__35148 = c__4609__auto___35146;
var G__35149 = cljs.core.count(c__4609__auto___35146);
var G__35150 = (0);
seq__34770_35123 = G__35147;
chunk__34771_35124 = G__35148;
count__34772_35125 = G__35149;
i__34773_35126 = G__35150;
continue;
} else {
var vec__34792_35151 = cljs.core.first(seq__34770_35145__$1);
var name_35152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34792_35151,(0),null);
var map__34795_35153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34792_35151,(1),null);
var map__34795_35154__$1 = (((((!((map__34795_35153 == null))))?(((((map__34795_35153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34795_35153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34795_35153):map__34795_35153);
var doc_35155 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34795_35154__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35156 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34795_35154__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35152], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35156], 0));

if(cljs.core.truth_(doc_35155)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35155], 0));
} else {
}


var G__35159 = cljs.core.next(seq__34770_35145__$1);
var G__35160 = null;
var G__35161 = (0);
var G__35162 = (0);
seq__34770_35123 = G__35159;
chunk__34771_35124 = G__35160;
count__34772_35125 = G__35161;
i__34773_35126 = G__35162;
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

var seq__34797 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34798 = null;
var count__34799 = (0);
var i__34800 = (0);
while(true){
if((i__34800 < count__34799)){
var role = chunk__34798.cljs$core$IIndexed$_nth$arity$2(null,i__34800);
var temp__5735__auto___35167__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___35167__$1)){
var spec_35168 = temp__5735__auto___35167__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35168)], 0));
} else {
}


var G__35169 = seq__34797;
var G__35170 = chunk__34798;
var G__35171 = count__34799;
var G__35172 = (i__34800 + (1));
seq__34797 = G__35169;
chunk__34798 = G__35170;
count__34799 = G__35171;
i__34800 = G__35172;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__34797);
if(temp__5735__auto____$1){
var seq__34797__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34797__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34797__$1);
var G__35174 = cljs.core.chunk_rest(seq__34797__$1);
var G__35175 = c__4609__auto__;
var G__35176 = cljs.core.count(c__4609__auto__);
var G__35177 = (0);
seq__34797 = G__35174;
chunk__34798 = G__35175;
count__34799 = G__35176;
i__34800 = G__35177;
continue;
} else {
var role = cljs.core.first(seq__34797__$1);
var temp__5735__auto___35180__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___35180__$2)){
var spec_35181 = temp__5735__auto___35180__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35181)], 0));
} else {
}


var G__35182 = cljs.core.next(seq__34797__$1);
var G__35183 = null;
var G__35184 = (0);
var G__35185 = (0);
seq__34797 = G__35182;
chunk__34798 = G__35183;
count__34799 = G__35184;
i__34800 = G__35185;
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
var G__35189 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35190 = cljs.core.ex_cause(t);
via = G__35189;
t = G__35190;
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
var map__34843 = datafied_throwable;
var map__34843__$1 = (((((!((map__34843 == null))))?(((((map__34843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34843):map__34843);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34843__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34843__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34843__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34844 = cljs.core.last(via);
var map__34844__$1 = (((((!((map__34844 == null))))?(((((map__34844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34844):map__34844);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34844__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34844__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34844__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34845 = data;
var map__34845__$1 = (((((!((map__34845 == null))))?(((((map__34845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34845):map__34845);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34845__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34845__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34845__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34846 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__34846__$1 = (((((!((map__34846 == null))))?(((((map__34846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34846):map__34846);
var top_data = map__34846__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34846__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__34871 = phase;
var G__34871__$1 = (((G__34871 instanceof cljs.core.Keyword))?G__34871.fqn:null);
switch (G__34871__$1) {
case "read-source":
var map__34872 = data;
var map__34872__$1 = (((((!((map__34872 == null))))?(((((map__34872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34872):map__34872);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34872__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34872__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34874 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__34874__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34874,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34874);
var G__34874__$2 = (cljs.core.truth_((function (){var fexpr__34875 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34875.cljs$core$IFn$_invoke$arity$1 ? fexpr__34875.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34875.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34874__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34874__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34874__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34874__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34876 = top_data;
var G__34876__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34876,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34876);
var G__34876__$2 = (cljs.core.truth_((function (){var fexpr__34877 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34877.cljs$core$IFn$_invoke$arity$1 ? fexpr__34877.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34877.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34876__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34876__$1);
var G__34876__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34876__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34876__$2);
var G__34876__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34876__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34876__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34876__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34876__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34882 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34882,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34882,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34882,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34882,(3),null);
var G__34892 = top_data;
var G__34892__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34892,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34892);
var G__34892__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34892__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34892__$1);
var G__34892__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34892__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34892__$2);
var G__34892__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34892__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34892__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34892__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34892__$4;
}

break;
case "execution":
var vec__34900 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34900,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34900,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34900,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34900,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34838_SHARP_){
var or__4185__auto__ = (p1__34838_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__34926 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34926.cljs$core$IFn$_invoke$arity$1 ? fexpr__34926.cljs$core$IFn$_invoke$arity$1(p1__34838_SHARP_) : fexpr__34926.call(null,p1__34838_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__34927 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34927__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34927,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34927);
var G__34927__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34927__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34927__$1);
var G__34927__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34927__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34927__$2);
var G__34927__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34927__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34927__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34927__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34927__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34871__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34994){
var map__34996 = p__34994;
var map__34996__$1 = (((((!((map__34996 == null))))?(((((map__34996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34996):map__34996);
var triage_data = map__34996__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34996__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34996__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34996__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34996__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34996__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34996__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34996__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34996__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__35017 = phase;
var G__35017__$1 = (((G__35017 instanceof cljs.core.Keyword))?G__35017.fqn:null);
switch (G__35017__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35019 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35020 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35021 = loc;
var G__35022 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35025_35246 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35026_35247 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35027_35248 = true;
var _STAR_print_fn_STAR__temp_val__35028_35249 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35027_35248);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35028_35249);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34973_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34973_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35026_35247);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35025_35246);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35019,G__35020,G__35021,G__35022) : format.call(null,G__35019,G__35020,G__35021,G__35022));

break;
case "macroexpansion":
var G__35037 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35038 = cause_type;
var G__35039 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35040 = loc;
var G__35041 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35037,G__35038,G__35039,G__35040,G__35041) : format.call(null,G__35037,G__35038,G__35039,G__35040,G__35041));

break;
case "compile-syntax-check":
var G__35042 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35043 = cause_type;
var G__35044 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35045 = loc;
var G__35046 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35042,G__35043,G__35044,G__35045,G__35046) : format.call(null,G__35042,G__35043,G__35044,G__35045,G__35046));

break;
case "compilation":
var G__35049 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35050 = cause_type;
var G__35051 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35052 = loc;
var G__35053 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35049,G__35050,G__35051,G__35052,G__35053) : format.call(null,G__35049,G__35050,G__35051,G__35052,G__35053));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35055 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35056 = symbol;
var G__35057 = loc;
var G__35058 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35061_35251 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35062_35252 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35063_35253 = true;
var _STAR_print_fn_STAR__temp_val__35064_35254 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35063_35253);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35064_35254);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34982_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34982_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35062_35252);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35061_35251);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35055,G__35056,G__35057,G__35058) : format.call(null,G__35055,G__35056,G__35057,G__35058));
} else {
var G__35073 = "Execution error%s at %s(%s).\n%s\n";
var G__35074 = cause_type;
var G__35075 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35076 = loc;
var G__35077 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35073,G__35074,G__35075,G__35076,G__35077) : format.call(null,G__35073,G__35074,G__35075,G__35076,G__35077));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35017__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
