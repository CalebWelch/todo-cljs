goog.provide('main');
goog.require('cljs.core');
goog.require('reagent.dom');
goog.require('reagent.core');
goog.require('cljs.core.async');
main.itemAdd = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
main.event_queue = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
main.valueAdd = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
main.counter = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var c__30331__auto___37508 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30332__auto__ = (function (){var switch__30199__auto__ = (function (state_37487){
var state_val_37488 = (state_37487[(1)]);
if((state_val_37488 === (1))){
var state_37487__$1 = state_37487;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37487__$1,(2),main.event_queue);
} else {
if((state_val_37488 === (2))){
var inst_37472 = (state_37487[(2)]);
var inst_37473 = inst_37472;
var state_37487__$1 = (function (){var statearr_37489 = state_37487;
(statearr_37489[(7)] = inst_37473);

return statearr_37489;
})();
var statearr_37490_37509 = state_37487__$1;
(statearr_37490_37509[(2)] = null);

(statearr_37490_37509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37488 === (3))){
var inst_37473 = (state_37487[(7)]);
var state_37487__$1 = state_37487;
var G__37491_37510 = inst_37473;
var G__37491_37511__$1 = (((G__37491_37510 instanceof cljs.core.Keyword))?G__37491_37510.fqn:null);
switch (G__37491_37511__$1) {
case "inc":
var statearr_37492_37513 = state_37487__$1;
(statearr_37492_37513[(1)] = (6));


break;
case "dec":
var statearr_37493_37514 = state_37487__$1;
(statearr_37493_37514[(1)] = (7));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37491_37511__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37488 === (4))){
var inst_37485 = (state_37487[(2)]);
var state_37487__$1 = state_37487;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37487__$1,inst_37485);
} else {
if((state_val_37488 === (5))){
var inst_37480 = (state_37487[(2)]);
var state_37487__$1 = (function (){var statearr_37494 = state_37487;
(statearr_37494[(8)] = inst_37480);

return statearr_37494;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37487__$1,(8),main.event_queue);
} else {
if((state_val_37488 === (6))){
var inst_37475 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(main.counter,cljs.core.inc);
var state_37487__$1 = state_37487;
var statearr_37495_37515 = state_37487__$1;
(statearr_37495_37515[(2)] = inst_37475);

(statearr_37495_37515[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37488 === (7))){
var inst_37477 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(main.counter,cljs.core.dec);
var state_37487__$1 = state_37487;
var statearr_37496_37516 = state_37487__$1;
(statearr_37496_37516[(2)] = inst_37477);

(statearr_37496_37516[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37488 === (8))){
var inst_37482 = (state_37487[(2)]);
var inst_37473 = inst_37482;
var state_37487__$1 = (function (){var statearr_37497 = state_37487;
(statearr_37497[(7)] = inst_37473);

return statearr_37497;
})();
var statearr_37498_37517 = state_37487__$1;
(statearr_37498_37517[(2)] = null);

(statearr_37498_37517[(1)] = (3));


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
});
return (function() {
var main$state_machine__30200__auto__ = null;
var main$state_machine__30200__auto____0 = (function (){
var statearr_37499 = [null,null,null,null,null,null,null,null,null];
(statearr_37499[(0)] = main$state_machine__30200__auto__);

(statearr_37499[(1)] = (1));

return statearr_37499;
});
var main$state_machine__30200__auto____1 = (function (state_37487){
while(true){
var ret_value__30201__auto__ = (function (){try{while(true){
var result__30202__auto__ = switch__30199__auto__(state_37487);
if(cljs.core.keyword_identical_QMARK_(result__30202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30202__auto__;
}
break;
}
}catch (e37500){if((e37500 instanceof Object)){
var ex__30203__auto__ = e37500;
var statearr_37501_37518 = state_37487;
(statearr_37501_37518[(5)] = ex__30203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37500;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37519 = state_37487;
state_37487 = G__37519;
continue;
} else {
return ret_value__30201__auto__;
}
break;
}
});
main$state_machine__30200__auto__ = function(state_37487){
switch(arguments.length){
case 0:
return main$state_machine__30200__auto____0.call(this);
case 1:
return main$state_machine__30200__auto____1.call(this,state_37487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
main$state_machine__30200__auto__.cljs$core$IFn$_invoke$arity$0 = main$state_machine__30200__auto____0;
main$state_machine__30200__auto__.cljs$core$IFn$_invoke$arity$1 = main$state_machine__30200__auto____1;
return main$state_machine__30200__auto__;
})()
})();
var state__30333__auto__ = (function (){var statearr_37502 = f__30332__auto__();
(statearr_37502[(6)] = c__30331__auto___37508);

return statearr_37502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30333__auto__);
}));

main.input_box = (function main$input_box(type,label,var$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-box","div.input-box",-1300611342),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__37503_SHARP_){
return cljs.core.reset_BANG_(var$,p1__37503_SHARP_.target.value);
}),new cljs.core.Keyword(null,"type","type",1174270348),type], null)], null)], null);
});
main.ordered_list = (function main$ordered_list(val){
var newItems = cljs.core.deref(val);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col","div.flex.flex-col",255067761),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items List"], null),(((cljs.core.count(newItems) < (1)))?"":(function (){var iter__4582__auto__ = (function main$ordered_list_$_iter__37504(s__37505){
return (new cljs.core.LazySeq(null,(function (){
var s__37505__$1 = s__37505;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37505__$1);
if(temp__5735__auto__){
var s__37505__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37505__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37505__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37507 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37506 = (0);
while(true){
if((i__37506 < size__4581__auto__)){
var x = cljs.core._nth(c__4580__auto__,i__37506);
cljs.core.chunk_append(b__37507,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(newItems,x)], null));

var G__37520 = (i__37506 + (1));
i__37506 = G__37520;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37507),main$ordered_list_$_iter__37504(cljs.core.chunk_rest(s__37505__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37507),null);
}
} else {
var x = cljs.core.first(s__37505__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(newItems,x)], null),main$ordered_list_$_iter__37504(cljs.core.rest(s__37505__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(newItems)));
})())], null);
});
main.main_component = (function main$main_component(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.p-20","div.flex.flex-col.p-20",2000275325),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.flex.text-3xl","h1.flex.text-3xl",498683540),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null),"Thing to do"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-center","div.flex.justify-center",-491420122),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.input_box,"text ","",main.itemAdd], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-blue.hover:bg-teal-300","button.btn-blue.hover:bg-teal-300",-712926664),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(main.counter,cljs.core.inc);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(main.valueAdd,cljs.core.conj,cljs.core.deref(main.itemAdd));
})], null),"press-me"], null)], null),main.ordered_list(main.valueAdd)], null);
});
main.mount = (function main$mount(c){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null),document.getElementById("app"));
});
main.reload_BANG_ = (function main$reload_BANG_(){
main.mount(main.main_component);

return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["reloaded"], 0));
});
main.main_BANG_ = (function main$main_BANG_(){
main.mount(main.main_component);

return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["main"], 0));
});

//# sourceMappingURL=main.js.map
