goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
goog.require('clojure.set');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___42113 = arguments.length;
var i__4790__auto___42114 = (0);
while(true){
if((i__4790__auto___42114 < len__4789__auto___42113)){
args__4795__auto__.push((arguments[i__4790__auto___42114]));

var G__42115 = (i__4790__auto___42114 + (1));
i__4790__auto___42114 = G__42115;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq41817){
var G__41818 = cljs.core.first(seq41817);
var seq41817__$1 = cljs.core.next(seq41817);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41818,seq41817__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__41830 = cljs.core.seq(sources);
var chunk__41831 = null;
var count__41832 = (0);
var i__41833 = (0);
while(true){
if((i__41833 < count__41832)){
var map__41856 = chunk__41831.cljs$core$IIndexed$_nth$arity$2(null,i__41833);
var map__41856__$1 = (((((!((map__41856 == null))))?(((((map__41856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41856):map__41856);
var src = map__41856__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41856__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41856__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41856__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41856__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e41858){var e_42127 = e41858;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_42127);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_42127.message)].join('')));
}

var G__42128 = seq__41830;
var G__42129 = chunk__41831;
var G__42130 = count__41832;
var G__42131 = (i__41833 + (1));
seq__41830 = G__42128;
chunk__41831 = G__42129;
count__41832 = G__42130;
i__41833 = G__42131;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41830);
if(temp__5735__auto__){
var seq__41830__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41830__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41830__$1);
var G__42132 = cljs.core.chunk_rest(seq__41830__$1);
var G__42133 = c__4609__auto__;
var G__42134 = cljs.core.count(c__4609__auto__);
var G__42135 = (0);
seq__41830 = G__42132;
chunk__41831 = G__42133;
count__41832 = G__42134;
i__41833 = G__42135;
continue;
} else {
var map__41862 = cljs.core.first(seq__41830__$1);
var map__41862__$1 = (((((!((map__41862 == null))))?(((((map__41862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41862):map__41862);
var src = map__41862__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41862__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41862__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41862__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41862__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e41865){var e_42141 = e41865;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_42141);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_42141.message)].join('')));
}

var G__42142 = cljs.core.next(seq__41830__$1);
var G__42143 = null;
var G__42144 = (0);
var G__42145 = (0);
seq__41830 = G__42142;
chunk__41831 = G__42143;
count__41832 = G__42144;
i__41833 = G__42145;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__41871 = cljs.core.seq(js_requires);
var chunk__41872 = null;
var count__41873 = (0);
var i__41874 = (0);
while(true){
if((i__41874 < count__41873)){
var js_ns = chunk__41872.cljs$core$IIndexed$_nth$arity$2(null,i__41874);
var require_str_42149 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_42149);


var G__42150 = seq__41871;
var G__42151 = chunk__41872;
var G__42152 = count__41873;
var G__42153 = (i__41874 + (1));
seq__41871 = G__42150;
chunk__41872 = G__42151;
count__41873 = G__42152;
i__41874 = G__42153;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41871);
if(temp__5735__auto__){
var seq__41871__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41871__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41871__$1);
var G__42159 = cljs.core.chunk_rest(seq__41871__$1);
var G__42160 = c__4609__auto__;
var G__42161 = cljs.core.count(c__4609__auto__);
var G__42162 = (0);
seq__41871 = G__42159;
chunk__41872 = G__42160;
count__41873 = G__42161;
i__41874 = G__42162;
continue;
} else {
var js_ns = cljs.core.first(seq__41871__$1);
var require_str_42164 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_42164);


var G__42165 = cljs.core.next(seq__41871__$1);
var G__42166 = null;
var G__42167 = (0);
var G__42168 = (0);
seq__41871 = G__42165;
chunk__41872 = G__42166;
count__41873 = G__42167;
i__41874 = G__42168;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__41881 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__41881) : callback.call(null,G__41881));
} else {
return goog.net.XhrIo.send(shadow.cljs.devtools.client.env.files_url(),(function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__41884){
var map__41885 = p__41884;
var map__41885__$1 = (((((!((map__41885 == null))))?(((((map__41885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41885):map__41885);
var msg = map__41885__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41885__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41885__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41891(s__41892){
return (new cljs.core.LazySeq(null,(function (){
var s__41892__$1 = s__41892;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41892__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__41899 = cljs.core.first(xs__6292__auto__);
var map__41899__$1 = (((((!((map__41899 == null))))?(((((map__41899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41899):map__41899);
var src = map__41899__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41899__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41899__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__41892__$1,map__41899,map__41899__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__41885,map__41885__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41891_$_iter__41893(s__41894){
return (new cljs.core.LazySeq(null,((function (s__41892__$1,map__41899,map__41899__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__41885,map__41885__$1,msg,info,reload_info){
return (function (){
var s__41894__$1 = s__41894;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__41894__$1);
if(temp__5735__auto____$1){
var s__41894__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__41894__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__41894__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__41896 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__41895 = (0);
while(true){
if((i__41895 < size__4581__auto__)){
var warning = cljs.core._nth(c__4580__auto__,i__41895);
cljs.core.chunk_append(b__41896,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__42177 = (i__41895 + (1));
i__41895 = G__42177;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41896),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41891_$_iter__41893(cljs.core.chunk_rest(s__41894__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41896),null);
}
} else {
var warning = cljs.core.first(s__41894__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41891_$_iter__41893(cljs.core.rest(s__41894__$2)));
}
} else {
return null;
}
break;
}
});})(s__41892__$1,map__41899,map__41899__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__41885,map__41885__$1,msg,info,reload_info))
,null,null));
});})(s__41892__$1,map__41899,map__41899__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__41885,map__41885__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41891(cljs.core.rest(s__41892__$1)));
} else {
var G__42181 = cljs.core.rest(s__41892__$1);
s__41892__$1 = G__42181;
continue;
}
} else {
var G__42182 = cljs.core.rest(s__41892__$1);
s__41892__$1 = G__42182;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__41904_42183 = cljs.core.seq(warnings);
var chunk__41905_42184 = null;
var count__41906_42185 = (0);
var i__41907_42186 = (0);
while(true){
if((i__41907_42186 < count__41906_42185)){
var map__41917_42187 = chunk__41905_42184.cljs$core$IIndexed$_nth$arity$2(null,i__41907_42186);
var map__41917_42188__$1 = (((((!((map__41917_42187 == null))))?(((((map__41917_42187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41917_42187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41917_42187):map__41917_42187);
var w_42189 = map__41917_42188__$1;
var msg_42190__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41917_42188__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_42191 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41917_42188__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_42192 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41917_42188__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_42193 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41917_42188__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_42193)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_42191),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_42192),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_42190__$1)].join(''));


var G__42197 = seq__41904_42183;
var G__42198 = chunk__41905_42184;
var G__42199 = count__41906_42185;
var G__42200 = (i__41907_42186 + (1));
seq__41904_42183 = G__42197;
chunk__41905_42184 = G__42198;
count__41906_42185 = G__42199;
i__41907_42186 = G__42200;
continue;
} else {
var temp__5735__auto___42201 = cljs.core.seq(seq__41904_42183);
if(temp__5735__auto___42201){
var seq__41904_42202__$1 = temp__5735__auto___42201;
if(cljs.core.chunked_seq_QMARK_(seq__41904_42202__$1)){
var c__4609__auto___42203 = cljs.core.chunk_first(seq__41904_42202__$1);
var G__42204 = cljs.core.chunk_rest(seq__41904_42202__$1);
var G__42205 = c__4609__auto___42203;
var G__42206 = cljs.core.count(c__4609__auto___42203);
var G__42207 = (0);
seq__41904_42183 = G__42204;
chunk__41905_42184 = G__42205;
count__41906_42185 = G__42206;
i__41907_42186 = G__42207;
continue;
} else {
var map__41921_42208 = cljs.core.first(seq__41904_42202__$1);
var map__41921_42209__$1 = (((((!((map__41921_42208 == null))))?(((((map__41921_42208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41921_42208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41921_42208):map__41921_42208);
var w_42210 = map__41921_42209__$1;
var msg_42211__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41921_42209__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_42212 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41921_42209__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_42213 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41921_42209__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_42214 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41921_42209__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_42214)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_42212),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_42213),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_42211__$1)].join(''));


var G__42215 = cljs.core.next(seq__41904_42202__$1);
var G__42216 = null;
var G__42217 = (0);
var G__42218 = (0);
seq__41904_42183 = G__42215;
chunk__41905_42184 = G__42216;
count__41906_42185 = G__42217;
i__41907_42186 = G__42218;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__41882_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__41882_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__41933){
var map__41934 = p__41933;
var map__41934__$1 = (((((!((map__41934 == null))))?(((((map__41934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41934):map__41934);
var msg = map__41934__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41934__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__41936 = cljs.core.seq(updates);
var chunk__41938 = null;
var count__41939 = (0);
var i__41940 = (0);
while(true){
if((i__41940 < count__41939)){
var path = chunk__41938.cljs$core$IIndexed$_nth$arity$2(null,i__41940);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__41987_42229 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__41990_42230 = null;
var count__41991_42231 = (0);
var i__41992_42232 = (0);
while(true){
if((i__41992_42232 < count__41991_42231)){
var node_42233 = chunk__41990_42230.cljs$core$IIndexed$_nth$arity$2(null,i__41992_42232);
var path_match_42236 = shadow.cljs.devtools.client.browser.match_paths(node_42233.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42236)){
var new_link_42237 = (function (){var G__41999 = node_42233.cloneNode(true);
G__41999.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42236),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41999;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42236], 0));

goog.dom.insertSiblingAfter(new_link_42237,node_42233);

goog.dom.removeNode(node_42233);


var G__42239 = seq__41987_42229;
var G__42240 = chunk__41990_42230;
var G__42241 = count__41991_42231;
var G__42242 = (i__41992_42232 + (1));
seq__41987_42229 = G__42239;
chunk__41990_42230 = G__42240;
count__41991_42231 = G__42241;
i__41992_42232 = G__42242;
continue;
} else {
var G__42243 = seq__41987_42229;
var G__42244 = chunk__41990_42230;
var G__42245 = count__41991_42231;
var G__42246 = (i__41992_42232 + (1));
seq__41987_42229 = G__42243;
chunk__41990_42230 = G__42244;
count__41991_42231 = G__42245;
i__41992_42232 = G__42246;
continue;
}
} else {
var temp__5735__auto___42247 = cljs.core.seq(seq__41987_42229);
if(temp__5735__auto___42247){
var seq__41987_42248__$1 = temp__5735__auto___42247;
if(cljs.core.chunked_seq_QMARK_(seq__41987_42248__$1)){
var c__4609__auto___42249 = cljs.core.chunk_first(seq__41987_42248__$1);
var G__42250 = cljs.core.chunk_rest(seq__41987_42248__$1);
var G__42251 = c__4609__auto___42249;
var G__42252 = cljs.core.count(c__4609__auto___42249);
var G__42253 = (0);
seq__41987_42229 = G__42250;
chunk__41990_42230 = G__42251;
count__41991_42231 = G__42252;
i__41992_42232 = G__42253;
continue;
} else {
var node_42254 = cljs.core.first(seq__41987_42248__$1);
var path_match_42255 = shadow.cljs.devtools.client.browser.match_paths(node_42254.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42255)){
var new_link_42256 = (function (){var G__42004 = node_42254.cloneNode(true);
G__42004.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42255),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42004;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42255], 0));

goog.dom.insertSiblingAfter(new_link_42256,node_42254);

goog.dom.removeNode(node_42254);


var G__42259 = cljs.core.next(seq__41987_42248__$1);
var G__42260 = null;
var G__42261 = (0);
var G__42262 = (0);
seq__41987_42229 = G__42259;
chunk__41990_42230 = G__42260;
count__41991_42231 = G__42261;
i__41992_42232 = G__42262;
continue;
} else {
var G__42263 = cljs.core.next(seq__41987_42248__$1);
var G__42264 = null;
var G__42265 = (0);
var G__42266 = (0);
seq__41987_42229 = G__42263;
chunk__41990_42230 = G__42264;
count__41991_42231 = G__42265;
i__41992_42232 = G__42266;
continue;
}
}
} else {
}
}
break;
}


var G__42268 = seq__41936;
var G__42269 = chunk__41938;
var G__42270 = count__41939;
var G__42271 = (i__41940 + (1));
seq__41936 = G__42268;
chunk__41938 = G__42269;
count__41939 = G__42270;
i__41940 = G__42271;
continue;
} else {
var G__42272 = seq__41936;
var G__42273 = chunk__41938;
var G__42274 = count__41939;
var G__42275 = (i__41940 + (1));
seq__41936 = G__42272;
chunk__41938 = G__42273;
count__41939 = G__42274;
i__41940 = G__42275;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41936);
if(temp__5735__auto__){
var seq__41936__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41936__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41936__$1);
var G__42276 = cljs.core.chunk_rest(seq__41936__$1);
var G__42277 = c__4609__auto__;
var G__42278 = cljs.core.count(c__4609__auto__);
var G__42279 = (0);
seq__41936 = G__42276;
chunk__41938 = G__42277;
count__41939 = G__42278;
i__41940 = G__42279;
continue;
} else {
var path = cljs.core.first(seq__41936__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__42008_42281 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__42011_42282 = null;
var count__42012_42283 = (0);
var i__42013_42284 = (0);
while(true){
if((i__42013_42284 < count__42012_42283)){
var node_42286 = chunk__42011_42282.cljs$core$IIndexed$_nth$arity$2(null,i__42013_42284);
var path_match_42287 = shadow.cljs.devtools.client.browser.match_paths(node_42286.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42287)){
var new_link_42288 = (function (){var G__42027 = node_42286.cloneNode(true);
G__42027.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42287),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42027;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42287], 0));

goog.dom.insertSiblingAfter(new_link_42288,node_42286);

goog.dom.removeNode(node_42286);


var G__42290 = seq__42008_42281;
var G__42291 = chunk__42011_42282;
var G__42292 = count__42012_42283;
var G__42293 = (i__42013_42284 + (1));
seq__42008_42281 = G__42290;
chunk__42011_42282 = G__42291;
count__42012_42283 = G__42292;
i__42013_42284 = G__42293;
continue;
} else {
var G__42299 = seq__42008_42281;
var G__42300 = chunk__42011_42282;
var G__42301 = count__42012_42283;
var G__42302 = (i__42013_42284 + (1));
seq__42008_42281 = G__42299;
chunk__42011_42282 = G__42300;
count__42012_42283 = G__42301;
i__42013_42284 = G__42302;
continue;
}
} else {
var temp__5735__auto___42303__$1 = cljs.core.seq(seq__42008_42281);
if(temp__5735__auto___42303__$1){
var seq__42008_42304__$1 = temp__5735__auto___42303__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42008_42304__$1)){
var c__4609__auto___42305 = cljs.core.chunk_first(seq__42008_42304__$1);
var G__42307 = cljs.core.chunk_rest(seq__42008_42304__$1);
var G__42308 = c__4609__auto___42305;
var G__42309 = cljs.core.count(c__4609__auto___42305);
var G__42310 = (0);
seq__42008_42281 = G__42307;
chunk__42011_42282 = G__42308;
count__42012_42283 = G__42309;
i__42013_42284 = G__42310;
continue;
} else {
var node_42313 = cljs.core.first(seq__42008_42304__$1);
var path_match_42314 = shadow.cljs.devtools.client.browser.match_paths(node_42313.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42314)){
var new_link_42315 = (function (){var G__42033 = node_42313.cloneNode(true);
G__42033.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42314),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42033;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42314], 0));

goog.dom.insertSiblingAfter(new_link_42315,node_42313);

goog.dom.removeNode(node_42313);


var G__42316 = cljs.core.next(seq__42008_42304__$1);
var G__42317 = null;
var G__42318 = (0);
var G__42319 = (0);
seq__42008_42281 = G__42316;
chunk__42011_42282 = G__42317;
count__42012_42283 = G__42318;
i__42013_42284 = G__42319;
continue;
} else {
var G__42320 = cljs.core.next(seq__42008_42304__$1);
var G__42321 = null;
var G__42322 = (0);
var G__42323 = (0);
seq__42008_42281 = G__42320;
chunk__42011_42282 = G__42321;
count__42012_42283 = G__42322;
i__42013_42284 = G__42323;
continue;
}
}
} else {
}
}
break;
}


var G__42324 = cljs.core.next(seq__41936__$1);
var G__42325 = null;
var G__42326 = (0);
var G__42327 = (0);
seq__41936 = G__42324;
chunk__41938 = G__42325;
count__41939 = G__42326;
i__41940 = G__42327;
continue;
} else {
var G__42328 = cljs.core.next(seq__41936__$1);
var G__42329 = null;
var G__42330 = (0);
var G__42331 = (0);
seq__41936 = G__42328;
chunk__41938 = G__42329;
count__41939 = G__42330;
i__41940 = G__42331;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__42038){
var map__42039 = p__42038;
var map__42039__$1 = (((((!((map__42039 == null))))?(((((map__42039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42039):map__42039);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42039__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42039__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__42043,done){
var map__42045 = p__42043;
var map__42045__$1 = (((((!((map__42045 == null))))?(((((map__42045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42045):map__42045);
var msg = map__42045__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42045__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42045__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42045__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42045__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__42048){
var map__42049 = p__42048;
var map__42049__$1 = (((((!((map__42049 == null))))?(((((map__42049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42049):map__42049);
var src = map__42049__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42049__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e42056){var e = e42056;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__42062,done){
var map__42063 = p__42062;
var map__42063__$1 = (((((!((map__42063 == null))))?(((((map__42063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42063):map__42063);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42063__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42063__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__42072){
var map__42073 = p__42072;
var map__42073__$1 = (((((!((map__42073 == null))))?(((((map__42073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42073):map__42073);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42073__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42073__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__42087,done){
var map__42089 = p__42087;
var map__42089__$1 = (((((!((map__42089 == null))))?(((((map__42089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42089):map__42089);
var msg = map__42089__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42089__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__42091_42343 = type;
var G__42091_42344__$1 = (((G__42091_42343 instanceof cljs.core.Keyword))?G__42091_42343.fqn:null);
switch (G__42091_42344__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
return goog.net.XhrIo.send(["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join(''),(function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__42101 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__42101.cljs$core$IFn$_invoke$arity$1 ? fexpr__42101.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init","init",-1875481434)) : fexpr__42101.call(null,new cljs.core.Keyword(null,"init","init",-1875481434)));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e42102){var e = e42102;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___42355 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___42355)){
var s_42356 = temp__5735__auto___42355;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_42356.onclose = (function (e){
return null;
}));

s_42356.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
