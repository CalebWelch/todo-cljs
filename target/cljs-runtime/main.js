goog.provide('main');
goog.require('cljs.core');
goog.require('reagent.dom');
goog.require('reagent.core');
main.itemAdd = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
main.valueAdd = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
main.counter = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
main.input_box = (function main$input_box(type,label,var$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-box","div.input-box",-1300611342),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__35632_SHARP_){
return cljs.core.reset_BANG_(var$,p1__35632_SHARP_.target.value);
}),new cljs.core.Keyword(null,"type","type",1174270348),type], null)], null)], null);
});
main.toggle_class = (function main$toggle_class(a,k,class1,class2){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__35633 = cljs.core.deref(a);
return (fexpr__35633.cljs$core$IFn$_invoke$arity$1 ? fexpr__35633.cljs$core$IFn$_invoke$arity$1(k) : fexpr__35633.call(null,k));
})(),class1,class2], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__35634 = cljs.core.deref(a);
return (fexpr__35634.cljs$core$IFn$_invoke$arity$1 ? fexpr__35634.cljs$core$IFn$_invoke$arity$1(k) : fexpr__35634.call(null,k));
})(),class1)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,cljs.core.assoc,k,class2);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,cljs.core.assoc,k,class1);
}
});
main.card = (function main$card(item,a){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"card-state","card-state",368265406).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(a))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.ba","ul.ba",1275204424),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.switch","label.switch",-1704148526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.slider.round","span.slider.round",1216328202),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return main.toggle_class(a,new cljs.core.Keyword(null,"card-state","card-state",368265406),"incomplete","complete");
})], null)], null)], null),item], null)], null)], null);
});
main.ordered_list = (function main$ordered_list(val){
var newItems = cljs.core.deref(val);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col","div.flex.flex-col",255067761),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items List"], null),(function (){var iter__4582__auto__ = (function main$ordered_list_$_iter__35635(s__35636){
return (new cljs.core.LazySeq(null,(function (){
var s__35636__$1 = s__35636;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35636__$1);
if(temp__5735__auto__){
var s__35636__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35636__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__35636__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__35638 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__35637 = (0);
while(true){
if((i__35637 < size__4581__auto__)){
var x = cljs.core._nth(c__4580__auto__,i__35637);
cljs.core.chunk_append(b__35638,(function (){var local_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"card-state","card-state",368265406),"incomplete"], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.card,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(newItems,x),local_state], null);
})());

var G__35639 = (i__35637 + (1));
i__35637 = G__35639;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35638),main$ordered_list_$_iter__35635(cljs.core.chunk_rest(s__35636__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35638),null);
}
} else {
var x = cljs.core.first(s__35636__$2);
return cljs.core.cons((function (){var local_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"card-state","card-state",368265406),"incomplete"], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.card,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(newItems,x),local_state], null);
})(),main$ordered_list_$_iter__35635(cljs.core.rest(s__35636__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(newItems)));
})()], null);
});
main.main_component = (function main$main_component(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.p-20","div.flex.flex-col.p-20",2000275325),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.flex.text-3xl","h1.flex.text-3xl",498683540),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null),"Thing to do"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-center","div.flex.justify-center",-491420122),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.input_box,"text","",main.itemAdd], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-blue.hover:bg-teal-300","button.btn-blue.hover:bg-teal-300",-712926664),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
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
