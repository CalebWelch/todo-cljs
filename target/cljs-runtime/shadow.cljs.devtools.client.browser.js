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
var len__4789__auto___34450 = arguments.length;
var i__4790__auto___34451 = (0);
while(true){
if((i__4790__auto___34451 < len__4789__auto___34450)){
args__4795__auto__.push((arguments[i__4790__auto___34451]));

var G__34452 = (i__4790__auto___34451 + (1));
i__4790__auto___34451 = G__34452;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq34027){
var G__34028 = cljs.core.first(seq34027);
var seq34027__$1 = cljs.core.next(seq34027);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34028,seq34027__$1);
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
var seq__34044 = cljs.core.seq(sources);
var chunk__34045 = null;
var count__34046 = (0);
var i__34047 = (0);
while(true){
if((i__34047 < count__34046)){
var map__34067 = chunk__34045.cljs$core$IIndexed$_nth$arity$2(null,i__34047);
var map__34067__$1 = (((((!((map__34067 == null))))?(((((map__34067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34067):map__34067);
var src = map__34067__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34067__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34067__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34067__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34067__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e34072){var e_34459 = e34072;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_34459);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_34459.message)].join('')));
}

var G__34460 = seq__34044;
var G__34461 = chunk__34045;
var G__34462 = count__34046;
var G__34463 = (i__34047 + (1));
seq__34044 = G__34460;
chunk__34045 = G__34461;
count__34046 = G__34462;
i__34047 = G__34463;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34044);
if(temp__5735__auto__){
var seq__34044__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34044__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34044__$1);
var G__34464 = cljs.core.chunk_rest(seq__34044__$1);
var G__34465 = c__4609__auto__;
var G__34466 = cljs.core.count(c__4609__auto__);
var G__34467 = (0);
seq__34044 = G__34464;
chunk__34045 = G__34465;
count__34046 = G__34466;
i__34047 = G__34467;
continue;
} else {
var map__34077 = cljs.core.first(seq__34044__$1);
var map__34077__$1 = (((((!((map__34077 == null))))?(((((map__34077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34077):map__34077);
var src = map__34077__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34077__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34077__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34077__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34077__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e34080){var e_34477 = e34080;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_34477);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_34477.message)].join('')));
}

var G__34478 = cljs.core.next(seq__34044__$1);
var G__34479 = null;
var G__34480 = (0);
var G__34481 = (0);
seq__34044 = G__34478;
chunk__34045 = G__34479;
count__34046 = G__34480;
i__34047 = G__34481;
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
var seq__34094 = cljs.core.seq(js_requires);
var chunk__34095 = null;
var count__34096 = (0);
var i__34097 = (0);
while(true){
if((i__34097 < count__34096)){
var js_ns = chunk__34095.cljs$core$IIndexed$_nth$arity$2(null,i__34097);
var require_str_34486 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_34486);


var G__34487 = seq__34094;
var G__34488 = chunk__34095;
var G__34489 = count__34096;
var G__34490 = (i__34097 + (1));
seq__34094 = G__34487;
chunk__34095 = G__34488;
count__34096 = G__34489;
i__34097 = G__34490;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34094);
if(temp__5735__auto__){
var seq__34094__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34094__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34094__$1);
var G__34491 = cljs.core.chunk_rest(seq__34094__$1);
var G__34492 = c__4609__auto__;
var G__34493 = cljs.core.count(c__4609__auto__);
var G__34494 = (0);
seq__34094 = G__34491;
chunk__34095 = G__34492;
count__34096 = G__34493;
i__34097 = G__34494;
continue;
} else {
var js_ns = cljs.core.first(seq__34094__$1);
var require_str_34495 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_34495);


var G__34496 = cljs.core.next(seq__34094__$1);
var G__34497 = null;
var G__34498 = (0);
var G__34499 = (0);
seq__34094 = G__34496;
chunk__34095 = G__34497;
count__34096 = G__34498;
i__34097 = G__34499;
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
var G__34107 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__34107) : callback.call(null,G__34107));
} else {
return goog.net.XhrIo.send(shadow.cljs.devtools.client.env.files_url(),(function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__34113){
var map__34114 = p__34113;
var map__34114__$1 = (((((!((map__34114 == null))))?(((((map__34114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34114):map__34114);
var msg = map__34114__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34114__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34114__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34118(s__34119){
return (new cljs.core.LazySeq(null,(function (){
var s__34119__$1 = s__34119;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34119__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__34124 = cljs.core.first(xs__6292__auto__);
var map__34124__$1 = (((((!((map__34124 == null))))?(((((map__34124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34124):map__34124);
var src = map__34124__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34124__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34124__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__34119__$1,map__34124,map__34124__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34114,map__34114__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34118_$_iter__34120(s__34121){
return (new cljs.core.LazySeq(null,((function (s__34119__$1,map__34124,map__34124__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34114,map__34114__$1,msg,info,reload_info){
return (function (){
var s__34121__$1 = s__34121;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__34121__$1);
if(temp__5735__auto____$1){
var s__34121__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34121__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__34121__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__34123 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__34122 = (0);
while(true){
if((i__34122 < size__4581__auto__)){
var warning = cljs.core._nth(c__4580__auto__,i__34122);
cljs.core.chunk_append(b__34123,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__34513 = (i__34122 + (1));
i__34122 = G__34513;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34123),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34118_$_iter__34120(cljs.core.chunk_rest(s__34121__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34123),null);
}
} else {
var warning = cljs.core.first(s__34121__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34118_$_iter__34120(cljs.core.rest(s__34121__$2)));
}
} else {
return null;
}
break;
}
});})(s__34119__$1,map__34124,map__34124__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34114,map__34114__$1,msg,info,reload_info))
,null,null));
});})(s__34119__$1,map__34124,map__34124__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34114,map__34114__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34118(cljs.core.rest(s__34119__$1)));
} else {
var G__34517 = cljs.core.rest(s__34119__$1);
s__34119__$1 = G__34517;
continue;
}
} else {
var G__34518 = cljs.core.rest(s__34119__$1);
s__34119__$1 = G__34518;
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
var seq__34152_34520 = cljs.core.seq(warnings);
var chunk__34153_34521 = null;
var count__34154_34522 = (0);
var i__34155_34523 = (0);
while(true){
if((i__34155_34523 < count__34154_34522)){
var map__34182_34525 = chunk__34153_34521.cljs$core$IIndexed$_nth$arity$2(null,i__34155_34523);
var map__34182_34526__$1 = (((((!((map__34182_34525 == null))))?(((((map__34182_34525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34182_34525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34182_34525):map__34182_34525);
var w_34527 = map__34182_34526__$1;
var msg_34528__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34182_34526__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_34529 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34182_34526__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_34530 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34182_34526__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_34531 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34182_34526__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_34531)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_34529),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_34530),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_34528__$1)].join(''));


var G__34532 = seq__34152_34520;
var G__34533 = chunk__34153_34521;
var G__34534 = count__34154_34522;
var G__34535 = (i__34155_34523 + (1));
seq__34152_34520 = G__34532;
chunk__34153_34521 = G__34533;
count__34154_34522 = G__34534;
i__34155_34523 = G__34535;
continue;
} else {
var temp__5735__auto___34536 = cljs.core.seq(seq__34152_34520);
if(temp__5735__auto___34536){
var seq__34152_34537__$1 = temp__5735__auto___34536;
if(cljs.core.chunked_seq_QMARK_(seq__34152_34537__$1)){
var c__4609__auto___34538 = cljs.core.chunk_first(seq__34152_34537__$1);
var G__34539 = cljs.core.chunk_rest(seq__34152_34537__$1);
var G__34540 = c__4609__auto___34538;
var G__34541 = cljs.core.count(c__4609__auto___34538);
var G__34542 = (0);
seq__34152_34520 = G__34539;
chunk__34153_34521 = G__34540;
count__34154_34522 = G__34541;
i__34155_34523 = G__34542;
continue;
} else {
var map__34184_34543 = cljs.core.first(seq__34152_34537__$1);
var map__34184_34544__$1 = (((((!((map__34184_34543 == null))))?(((((map__34184_34543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34184_34543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34184_34543):map__34184_34543);
var w_34545 = map__34184_34544__$1;
var msg_34546__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34184_34544__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_34547 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34184_34544__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_34548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34184_34544__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_34549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34184_34544__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_34549)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_34547),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_34548),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_34546__$1)].join(''));


var G__34552 = cljs.core.next(seq__34152_34537__$1);
var G__34553 = null;
var G__34554 = (0);
var G__34555 = (0);
seq__34152_34520 = G__34552;
chunk__34153_34521 = G__34553;
count__34154_34522 = G__34554;
i__34155_34523 = G__34555;
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

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__34112_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__34112_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__34189){
var map__34190 = p__34189;
var map__34190__$1 = (((((!((map__34190 == null))))?(((((map__34190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34190):map__34190);
var msg = map__34190__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34190__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__34192 = cljs.core.seq(updates);
var chunk__34194 = null;
var count__34195 = (0);
var i__34196 = (0);
while(true){
if((i__34196 < count__34195)){
var path = chunk__34194.cljs$core$IIndexed$_nth$arity$2(null,i__34196);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__34237_34570 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__34240_34571 = null;
var count__34241_34572 = (0);
var i__34242_34573 = (0);
while(true){
if((i__34242_34573 < count__34241_34572)){
var node_34574 = chunk__34240_34571.cljs$core$IIndexed$_nth$arity$2(null,i__34242_34573);
var path_match_34576 = shadow.cljs.devtools.client.browser.match_paths(node_34574.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34576)){
var new_link_34577 = (function (){var G__34250 = node_34574.cloneNode(true);
G__34250.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34576),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34250;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34576], 0));

goog.dom.insertSiblingAfter(new_link_34577,node_34574);

goog.dom.removeNode(node_34574);


var G__34578 = seq__34237_34570;
var G__34579 = chunk__34240_34571;
var G__34580 = count__34241_34572;
var G__34581 = (i__34242_34573 + (1));
seq__34237_34570 = G__34578;
chunk__34240_34571 = G__34579;
count__34241_34572 = G__34580;
i__34242_34573 = G__34581;
continue;
} else {
var G__34583 = seq__34237_34570;
var G__34584 = chunk__34240_34571;
var G__34585 = count__34241_34572;
var G__34586 = (i__34242_34573 + (1));
seq__34237_34570 = G__34583;
chunk__34240_34571 = G__34584;
count__34241_34572 = G__34585;
i__34242_34573 = G__34586;
continue;
}
} else {
var temp__5735__auto___34587 = cljs.core.seq(seq__34237_34570);
if(temp__5735__auto___34587){
var seq__34237_34588__$1 = temp__5735__auto___34587;
if(cljs.core.chunked_seq_QMARK_(seq__34237_34588__$1)){
var c__4609__auto___34589 = cljs.core.chunk_first(seq__34237_34588__$1);
var G__34590 = cljs.core.chunk_rest(seq__34237_34588__$1);
var G__34591 = c__4609__auto___34589;
var G__34592 = cljs.core.count(c__4609__auto___34589);
var G__34593 = (0);
seq__34237_34570 = G__34590;
chunk__34240_34571 = G__34591;
count__34241_34572 = G__34592;
i__34242_34573 = G__34593;
continue;
} else {
var node_34594 = cljs.core.first(seq__34237_34588__$1);
var path_match_34595 = shadow.cljs.devtools.client.browser.match_paths(node_34594.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34595)){
var new_link_34596 = (function (){var G__34257 = node_34594.cloneNode(true);
G__34257.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34595),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34257;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34595], 0));

goog.dom.insertSiblingAfter(new_link_34596,node_34594);

goog.dom.removeNode(node_34594);


var G__34599 = cljs.core.next(seq__34237_34588__$1);
var G__34600 = null;
var G__34601 = (0);
var G__34602 = (0);
seq__34237_34570 = G__34599;
chunk__34240_34571 = G__34600;
count__34241_34572 = G__34601;
i__34242_34573 = G__34602;
continue;
} else {
var G__34608 = cljs.core.next(seq__34237_34588__$1);
var G__34609 = null;
var G__34610 = (0);
var G__34611 = (0);
seq__34237_34570 = G__34608;
chunk__34240_34571 = G__34609;
count__34241_34572 = G__34610;
i__34242_34573 = G__34611;
continue;
}
}
} else {
}
}
break;
}


var G__34612 = seq__34192;
var G__34613 = chunk__34194;
var G__34614 = count__34195;
var G__34615 = (i__34196 + (1));
seq__34192 = G__34612;
chunk__34194 = G__34613;
count__34195 = G__34614;
i__34196 = G__34615;
continue;
} else {
var G__34616 = seq__34192;
var G__34617 = chunk__34194;
var G__34618 = count__34195;
var G__34619 = (i__34196 + (1));
seq__34192 = G__34616;
chunk__34194 = G__34617;
count__34195 = G__34618;
i__34196 = G__34619;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34192);
if(temp__5735__auto__){
var seq__34192__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34192__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34192__$1);
var G__34620 = cljs.core.chunk_rest(seq__34192__$1);
var G__34621 = c__4609__auto__;
var G__34622 = cljs.core.count(c__4609__auto__);
var G__34623 = (0);
seq__34192 = G__34620;
chunk__34194 = G__34621;
count__34195 = G__34622;
i__34196 = G__34623;
continue;
} else {
var path = cljs.core.first(seq__34192__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__34267_34624 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__34270_34625 = null;
var count__34271_34626 = (0);
var i__34272_34627 = (0);
while(true){
if((i__34272_34627 < count__34271_34626)){
var node_34628 = chunk__34270_34625.cljs$core$IIndexed$_nth$arity$2(null,i__34272_34627);
var path_match_34629 = shadow.cljs.devtools.client.browser.match_paths(node_34628.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34629)){
var new_link_34630 = (function (){var G__34278 = node_34628.cloneNode(true);
G__34278.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34629),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34278;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34629], 0));

goog.dom.insertSiblingAfter(new_link_34630,node_34628);

goog.dom.removeNode(node_34628);


var G__34631 = seq__34267_34624;
var G__34632 = chunk__34270_34625;
var G__34633 = count__34271_34626;
var G__34634 = (i__34272_34627 + (1));
seq__34267_34624 = G__34631;
chunk__34270_34625 = G__34632;
count__34271_34626 = G__34633;
i__34272_34627 = G__34634;
continue;
} else {
var G__34635 = seq__34267_34624;
var G__34636 = chunk__34270_34625;
var G__34637 = count__34271_34626;
var G__34638 = (i__34272_34627 + (1));
seq__34267_34624 = G__34635;
chunk__34270_34625 = G__34636;
count__34271_34626 = G__34637;
i__34272_34627 = G__34638;
continue;
}
} else {
var temp__5735__auto___34642__$1 = cljs.core.seq(seq__34267_34624);
if(temp__5735__auto___34642__$1){
var seq__34267_34643__$1 = temp__5735__auto___34642__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34267_34643__$1)){
var c__4609__auto___34644 = cljs.core.chunk_first(seq__34267_34643__$1);
var G__34645 = cljs.core.chunk_rest(seq__34267_34643__$1);
var G__34646 = c__4609__auto___34644;
var G__34647 = cljs.core.count(c__4609__auto___34644);
var G__34648 = (0);
seq__34267_34624 = G__34645;
chunk__34270_34625 = G__34646;
count__34271_34626 = G__34647;
i__34272_34627 = G__34648;
continue;
} else {
var node_34649 = cljs.core.first(seq__34267_34643__$1);
var path_match_34650 = shadow.cljs.devtools.client.browser.match_paths(node_34649.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34650)){
var new_link_34651 = (function (){var G__34285 = node_34649.cloneNode(true);
G__34285.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34650),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34285;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34650], 0));

goog.dom.insertSiblingAfter(new_link_34651,node_34649);

goog.dom.removeNode(node_34649);


var G__34652 = cljs.core.next(seq__34267_34643__$1);
var G__34653 = null;
var G__34654 = (0);
var G__34655 = (0);
seq__34267_34624 = G__34652;
chunk__34270_34625 = G__34653;
count__34271_34626 = G__34654;
i__34272_34627 = G__34655;
continue;
} else {
var G__34656 = cljs.core.next(seq__34267_34643__$1);
var G__34657 = null;
var G__34658 = (0);
var G__34659 = (0);
seq__34267_34624 = G__34656;
chunk__34270_34625 = G__34657;
count__34271_34626 = G__34658;
i__34272_34627 = G__34659;
continue;
}
}
} else {
}
}
break;
}


var G__34660 = cljs.core.next(seq__34192__$1);
var G__34661 = null;
var G__34662 = (0);
var G__34663 = (0);
seq__34192 = G__34660;
chunk__34194 = G__34661;
count__34195 = G__34662;
i__34196 = G__34663;
continue;
} else {
var G__34665 = cljs.core.next(seq__34192__$1);
var G__34666 = null;
var G__34667 = (0);
var G__34668 = (0);
seq__34192 = G__34665;
chunk__34194 = G__34666;
count__34195 = G__34667;
i__34196 = G__34668;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__34311){
var map__34312 = p__34311;
var map__34312__$1 = (((((!((map__34312 == null))))?(((((map__34312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34312):map__34312);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34312__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34312__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__34319,done){
var map__34320 = p__34319;
var map__34320__$1 = (((((!((map__34320 == null))))?(((((map__34320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34320):map__34320);
var msg = map__34320__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34320__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34320__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34320__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34320__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__34331){
var map__34332 = p__34331;
var map__34332__$1 = (((((!((map__34332 == null))))?(((((map__34332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34332):map__34332);
var src = map__34332__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34332__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
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
}catch (e34334){var e = e34334;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__34335,done){
var map__34339 = p__34335;
var map__34339__$1 = (((((!((map__34339 == null))))?(((((map__34339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34339):map__34339);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34339__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34339__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__34349){
var map__34350 = p__34349;
var map__34350__$1 = (((((!((map__34350 == null))))?(((((map__34350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34350):map__34350);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34350__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34350__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__34365,done){
var map__34373 = p__34365;
var map__34373__$1 = (((((!((map__34373 == null))))?(((((map__34373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34373):map__34373);
var msg = map__34373__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34373__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__34376_34693 = type;
var G__34376_34694__$1 = (((G__34376_34693 instanceof cljs.core.Keyword))?G__34376_34693.fqn:null);
switch (G__34376_34694__$1) {
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__34392 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__34392.cljs$core$IFn$_invoke$arity$1 ? fexpr__34392.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init","init",-1875481434)) : fexpr__34392.call(null,new cljs.core.Keyword(null,"init","init",-1875481434)));
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
}catch (e34402){var e = e34402;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___34700 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___34700)){
var s_34701 = temp__5735__auto___34700;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_34701.onclose = (function (e){
return null;
}));

s_34701.close();

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
