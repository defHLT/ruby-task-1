// Compiled by ClojureScript 1.9.229 {}
goog.provide('Front.core');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('hiccups.runtime');
goog.require('goog.dom');
goog.require('goog.events');
Front.core.main = [cljs.core.str("<form><input id=\"url\" name=\"image\" type=\"url\" /><input id=\"upload-btn\" type=\"submit\" value=\"add task\" /></form>"),cljs.core.str("<ul id=\"task-list\"></ul>")].join('');
Front.core.task_list = (function Front$core$task_list(){
return goog.dom.getElement("task-list");
});
Front.core.render_initial = (function Front$core$render_initial(){
var body = cljs.core.first.call(null,cljs.core.array_seq.call(null,document.getElementsByTagName("body")));
return body.innerHTML = Front.core.main;
});
Front.core.listen = (function Front$core$listen(el,type){
var out = cljs.core.async.chan.call(null);
goog.events.listen(el,type,((function (out){
return (function (e){
e.preventDefault();

return cljs.core.async.put_BANG_.call(null,out,e);
});})(out))
);

return out;
});
Front.core.init = (function Front$core$init(){
Front.core.render_initial.call(null);

var adds = Front.core.listen.call(null,goog.dom.getElement("upload-btn"),"click");
var dels = Front.core.listen.call(null,Front.core.task_list.call(null),"click");
var c__10137__auto___13025 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10137__auto___13025,adds,dels){
return (function (){
var f__10138__auto__ = (function (){var switch__10072__auto__ = ((function (c__10137__auto___13025,adds,dels){
return (function (state_12968){
var state_val_12969 = (state_12968[(1)]);
if((state_val_12969 === (1))){
var state_12968__$1 = state_12968;
var statearr_12970_13026 = state_12968__$1;
(statearr_12970_13026[(2)] = null);

(statearr_12970_13026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12969 === (2))){
var state_12968__$1 = state_12968;
var statearr_12971_13027 = state_12968__$1;
(statearr_12971_13027[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12969 === (3))){
var inst_12966 = (state_12968[(2)]);
var state_12968__$1 = state_12968;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12968__$1,inst_12966);
} else {
if((state_val_12969 === (4))){
var state_12968__$1 = state_12968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12968__$1,(7),adds);
} else {
if((state_val_12969 === (5))){
var state_12968__$1 = state_12968;
var statearr_12973_13028 = state_12968__$1;
(statearr_12973_13028[(2)] = null);

(statearr_12973_13028[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12969 === (6))){
var inst_12964 = (state_12968[(2)]);
var state_12968__$1 = state_12968;
var statearr_12974_13029 = state_12968__$1;
(statearr_12974_13029[(2)] = inst_12964);

(statearr_12974_13029[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12969 === (7))){
var inst_12959 = (state_12968[(2)]);
var inst_12960 = Front.core.add_task.call(null);
var state_12968__$1 = (function (){var statearr_12975 = state_12968;
(statearr_12975[(7)] = inst_12960);

(statearr_12975[(8)] = inst_12959);

return statearr_12975;
})();
var statearr_12976_13030 = state_12968__$1;
(statearr_12976_13030[(2)] = null);

(statearr_12976_13030[(1)] = (2));


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
});})(c__10137__auto___13025,adds,dels))
;
return ((function (switch__10072__auto__,c__10137__auto___13025,adds,dels){
return (function() {
var Front$core$init_$_state_machine__10073__auto__ = null;
var Front$core$init_$_state_machine__10073__auto____0 = (function (){
var statearr_12980 = [null,null,null,null,null,null,null,null,null];
(statearr_12980[(0)] = Front$core$init_$_state_machine__10073__auto__);

(statearr_12980[(1)] = (1));

return statearr_12980;
});
var Front$core$init_$_state_machine__10073__auto____1 = (function (state_12968){
while(true){
var ret_value__10074__auto__ = (function (){try{while(true){
var result__10075__auto__ = switch__10072__auto__.call(null,state_12968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10075__auto__;
}
break;
}
}catch (e12981){if((e12981 instanceof Object)){
var ex__10076__auto__ = e12981;
var statearr_12982_13031 = state_12968;
(statearr_12982_13031[(5)] = ex__10076__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12981;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13032 = state_12968;
state_12968 = G__13032;
continue;
} else {
return ret_value__10074__auto__;
}
break;
}
});
Front$core$init_$_state_machine__10073__auto__ = function(state_12968){
switch(arguments.length){
case 0:
return Front$core$init_$_state_machine__10073__auto____0.call(this);
case 1:
return Front$core$init_$_state_machine__10073__auto____1.call(this,state_12968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
Front$core$init_$_state_machine__10073__auto__.cljs$core$IFn$_invoke$arity$0 = Front$core$init_$_state_machine__10073__auto____0;
Front$core$init_$_state_machine__10073__auto__.cljs$core$IFn$_invoke$arity$1 = Front$core$init_$_state_machine__10073__auto____1;
return Front$core$init_$_state_machine__10073__auto__;
})()
;})(switch__10072__auto__,c__10137__auto___13025,adds,dels))
})();
var state__10139__auto__ = (function (){var statearr_12983 = f__10138__auto__.call(null);
(statearr_12983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10137__auto___13025);

return statearr_12983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10139__auto__);
});})(c__10137__auto___13025,adds,dels))
);


var c__10137__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10137__auto__,adds,dels){
return (function (){
var f__10138__auto__ = (function (){var switch__10072__auto__ = ((function (c__10137__auto__,adds,dels){
return (function (state_13004){
var state_val_13005 = (state_13004[(1)]);
if((state_val_13005 === (7))){
var inst_12988 = (state_13004[(7)]);
var inst_12987 = (state_13004[(2)]);
var inst_12988__$1 = inst_12987.target;
var inst_12989 = inst_12988__$1.classList;
var inst_12990 = inst_12989.contains("remove-task");
var state_13004__$1 = (function (){var statearr_13006 = state_13004;
(statearr_13006[(7)] = inst_12988__$1);

return statearr_13006;
})();
if(cljs.core.truth_(inst_12990)){
var statearr_13007_13033 = state_13004__$1;
(statearr_13007_13033[(1)] = (8));

} else {
var statearr_13008_13034 = state_13004__$1;
(statearr_13008_13034[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13005 === (1))){
var state_13004__$1 = state_13004;
var statearr_13009_13035 = state_13004__$1;
(statearr_13009_13035[(2)] = null);

(statearr_13009_13035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13005 === (4))){
var state_13004__$1 = state_13004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13004__$1,(7),dels);
} else {
if((state_val_13005 === (6))){
var inst_13000 = (state_13004[(2)]);
var state_13004__$1 = state_13004;
var statearr_13010_13036 = state_13004__$1;
(statearr_13010_13036[(2)] = inst_13000);

(statearr_13010_13036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13005 === (3))){
var inst_13002 = (state_13004[(2)]);
var state_13004__$1 = state_13004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13004__$1,inst_13002);
} else {
if((state_val_13005 === (2))){
var state_13004__$1 = state_13004;
var statearr_13011_13037 = state_13004__$1;
(statearr_13011_13037[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13005 === (9))){
var state_13004__$1 = state_13004;
var statearr_13013_13038 = state_13004__$1;
(statearr_13013_13038[(2)] = null);

(statearr_13013_13038[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13005 === (5))){
var state_13004__$1 = state_13004;
var statearr_13014_13039 = state_13004__$1;
(statearr_13014_13039[(2)] = null);

(statearr_13014_13039[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13005 === (10))){
var inst_12996 = (state_13004[(2)]);
var state_13004__$1 = (function (){var statearr_13015 = state_13004;
(statearr_13015[(8)] = inst_12996);

return statearr_13015;
})();
var statearr_13016_13040 = state_13004__$1;
(statearr_13016_13040[(2)] = null);

(statearr_13016_13040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13005 === (8))){
var inst_12988 = (state_13004[(7)]);
var inst_12992 = inst_12988.getAttribute("data-id");
var inst_12993 = Front.core.delete_task.call(null,inst_12992);
var state_13004__$1 = state_13004;
var statearr_13017_13041 = state_13004__$1;
(statearr_13017_13041[(2)] = inst_12993);

(statearr_13017_13041[(1)] = (10));


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
});})(c__10137__auto__,adds,dels))
;
return ((function (switch__10072__auto__,c__10137__auto__,adds,dels){
return (function() {
var Front$core$init_$_state_machine__10073__auto__ = null;
var Front$core$init_$_state_machine__10073__auto____0 = (function (){
var statearr_13021 = [null,null,null,null,null,null,null,null,null];
(statearr_13021[(0)] = Front$core$init_$_state_machine__10073__auto__);

(statearr_13021[(1)] = (1));

return statearr_13021;
});
var Front$core$init_$_state_machine__10073__auto____1 = (function (state_13004){
while(true){
var ret_value__10074__auto__ = (function (){try{while(true){
var result__10075__auto__ = switch__10072__auto__.call(null,state_13004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10075__auto__;
}
break;
}
}catch (e13022){if((e13022 instanceof Object)){
var ex__10076__auto__ = e13022;
var statearr_13023_13042 = state_13004;
(statearr_13023_13042[(5)] = ex__10076__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13043 = state_13004;
state_13004 = G__13043;
continue;
} else {
return ret_value__10074__auto__;
}
break;
}
});
Front$core$init_$_state_machine__10073__auto__ = function(state_13004){
switch(arguments.length){
case 0:
return Front$core$init_$_state_machine__10073__auto____0.call(this);
case 1:
return Front$core$init_$_state_machine__10073__auto____1.call(this,state_13004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
Front$core$init_$_state_machine__10073__auto__.cljs$core$IFn$_invoke$arity$0 = Front$core$init_$_state_machine__10073__auto____0;
Front$core$init_$_state_machine__10073__auto__.cljs$core$IFn$_invoke$arity$1 = Front$core$init_$_state_machine__10073__auto____1;
return Front$core$init_$_state_machine__10073__auto__;
})()
;})(switch__10072__auto__,c__10137__auto__,adds,dels))
})();
var state__10139__auto__ = (function (){var statearr_13024 = f__10138__auto__.call(null);
(statearr_13024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10137__auto__);

return statearr_13024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10139__auto__);
});})(c__10137__auto__,adds,dels))
);

return c__10137__auto__;
});
Front.core.add_task = (function Front$core$add_task(){
var c__10137__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10137__auto__){
return (function (){
var f__10138__auto__ = (function (){var switch__10072__auto__ = ((function (c__10137__auto__){
return (function (state_13080){
var state_val_13081 = (state_13080[(1)]);
if((state_val_13081 === (1))){
var inst_13067 = goog.dom.getElement("url");
var inst_13068 = inst_13067.value;
var inst_13069 = [new cljs.core.Keyword(null,"form-params","form-params",1884296467)];
var inst_13070 = [new cljs.core.Keyword(null,"image","image",-58725096)];
var inst_13071 = [inst_13068];
var inst_13072 = cljs.core.PersistentHashMap.fromArrays(inst_13070,inst_13071);
var inst_13073 = [inst_13072];
var inst_13074 = cljs.core.PersistentHashMap.fromArrays(inst_13069,inst_13073);
var inst_13075 = cljs_http.client.post.call(null,"/tasks",inst_13074);
var state_13080__$1 = state_13080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13080__$1,(2),inst_13075);
} else {
if((state_val_13081 === (2))){
var inst_13077 = (state_13080[(2)]);
var inst_13078 = Front.core.fetch_tasks.call(null);
var state_13080__$1 = (function (){var statearr_13082 = state_13080;
(statearr_13082[(7)] = inst_13077);

return statearr_13082;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13080__$1,inst_13078);
} else {
return null;
}
}
});})(c__10137__auto__))
;
return ((function (switch__10072__auto__,c__10137__auto__){
return (function() {
var Front$core$add_task_$_state_machine__10073__auto__ = null;
var Front$core$add_task_$_state_machine__10073__auto____0 = (function (){
var statearr_13086 = [null,null,null,null,null,null,null,null];
(statearr_13086[(0)] = Front$core$add_task_$_state_machine__10073__auto__);

(statearr_13086[(1)] = (1));

return statearr_13086;
});
var Front$core$add_task_$_state_machine__10073__auto____1 = (function (state_13080){
while(true){
var ret_value__10074__auto__ = (function (){try{while(true){
var result__10075__auto__ = switch__10072__auto__.call(null,state_13080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10075__auto__;
}
break;
}
}catch (e13087){if((e13087 instanceof Object)){
var ex__10076__auto__ = e13087;
var statearr_13088_13090 = state_13080;
(statearr_13088_13090[(5)] = ex__10076__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13091 = state_13080;
state_13080 = G__13091;
continue;
} else {
return ret_value__10074__auto__;
}
break;
}
});
Front$core$add_task_$_state_machine__10073__auto__ = function(state_13080){
switch(arguments.length){
case 0:
return Front$core$add_task_$_state_machine__10073__auto____0.call(this);
case 1:
return Front$core$add_task_$_state_machine__10073__auto____1.call(this,state_13080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
Front$core$add_task_$_state_machine__10073__auto__.cljs$core$IFn$_invoke$arity$0 = Front$core$add_task_$_state_machine__10073__auto____0;
Front$core$add_task_$_state_machine__10073__auto__.cljs$core$IFn$_invoke$arity$1 = Front$core$add_task_$_state_machine__10073__auto____1;
return Front$core$add_task_$_state_machine__10073__auto__;
})()
;})(switch__10072__auto__,c__10137__auto__))
})();
var state__10139__auto__ = (function (){var statearr_13089 = f__10138__auto__.call(null);
(statearr_13089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10137__auto__);

return statearr_13089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10139__auto__);
});})(c__10137__auto__))
);

return c__10137__auto__;
});
Front.core.delete_task = (function Front$core$delete_task(id){
var c__10137__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10137__auto__){
return (function (){
var f__10138__auto__ = (function (){var switch__10072__auto__ = ((function (c__10137__auto__){
return (function (state_13114){
var state_val_13115 = (state_13114[(1)]);
if((state_val_13115 === (1))){
var inst_13108 = [cljs.core.str("task/"),cljs.core.str(id)].join('');
var inst_13109 = cljs_http.client.delete$.call(null,inst_13108);
var state_13114__$1 = state_13114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13114__$1,(2),inst_13109);
} else {
if((state_val_13115 === (2))){
var inst_13111 = (state_13114[(2)]);
var inst_13112 = Front.core.fetch_tasks.call(null);
var state_13114__$1 = (function (){var statearr_13116 = state_13114;
(statearr_13116[(7)] = inst_13111);

return statearr_13116;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13114__$1,inst_13112);
} else {
return null;
}
}
});})(c__10137__auto__))
;
return ((function (switch__10072__auto__,c__10137__auto__){
return (function() {
var Front$core$delete_task_$_state_machine__10073__auto__ = null;
var Front$core$delete_task_$_state_machine__10073__auto____0 = (function (){
var statearr_13120 = [null,null,null,null,null,null,null,null];
(statearr_13120[(0)] = Front$core$delete_task_$_state_machine__10073__auto__);

(statearr_13120[(1)] = (1));

return statearr_13120;
});
var Front$core$delete_task_$_state_machine__10073__auto____1 = (function (state_13114){
while(true){
var ret_value__10074__auto__ = (function (){try{while(true){
var result__10075__auto__ = switch__10072__auto__.call(null,state_13114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10075__auto__;
}
break;
}
}catch (e13121){if((e13121 instanceof Object)){
var ex__10076__auto__ = e13121;
var statearr_13122_13124 = state_13114;
(statearr_13122_13124[(5)] = ex__10076__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13125 = state_13114;
state_13114 = G__13125;
continue;
} else {
return ret_value__10074__auto__;
}
break;
}
});
Front$core$delete_task_$_state_machine__10073__auto__ = function(state_13114){
switch(arguments.length){
case 0:
return Front$core$delete_task_$_state_machine__10073__auto____0.call(this);
case 1:
return Front$core$delete_task_$_state_machine__10073__auto____1.call(this,state_13114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
Front$core$delete_task_$_state_machine__10073__auto__.cljs$core$IFn$_invoke$arity$0 = Front$core$delete_task_$_state_machine__10073__auto____0;
Front$core$delete_task_$_state_machine__10073__auto__.cljs$core$IFn$_invoke$arity$1 = Front$core$delete_task_$_state_machine__10073__auto____1;
return Front$core$delete_task_$_state_machine__10073__auto__;
})()
;})(switch__10072__auto__,c__10137__auto__))
})();
var state__10139__auto__ = (function (){var statearr_13123 = f__10138__auto__.call(null);
(statearr_13123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10137__auto__);

return statearr_13123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10139__auto__);
});})(c__10137__auto__))
);

return c__10137__auto__;
});
Front.core.render_task = (function Front$core$render_task(task){
var id = cljs.core.get.call(null,task,new cljs.core.Keyword(null,"id","id",-1388402092));
var _ = cljs.core.get.call(null,task,new cljs.core.Keyword(null,"image","image",-58725096));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"",new cljs.core.Keyword(null,"class","class",-2030961996),"remove-task",new cljs.core.Keyword(null,"data-id","data-id",1023855591),id], null),"[X]"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("task/"),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),id], null)], null);
});
Front.core.fetch_tasks = (function Front$core$fetch_tasks(){
var c__10137__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10137__auto__){
return (function (){
var f__10138__auto__ = (function (){var switch__10072__auto__ = ((function (c__10137__auto__){
return (function (state_13155){
var state_val_13156 = (state_13155[(1)]);
if((state_val_13156 === (1))){
var inst_13145 = cljs_http.client.get.call(null,"/tasks");
var state_13155__$1 = state_13155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13155__$1,(2),inst_13145);
} else {
if((state_val_13156 === (2))){
var inst_13147 = (state_13155[(2)]);
var inst_13148 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_13147);
var inst_13149 = cljs.core.map.call(null,Front.core.render_task,inst_13148);
var inst_13150 = hiccups.runtime.render_html.call(null,inst_13149);
var inst_13151 = [cljs.core.str(inst_13150)].join('');
var inst_13152 = Front.core.task_list.call(null);
var inst_13153 = inst_13152.innerHTML = inst_13151;
var state_13155__$1 = state_13155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13155__$1,inst_13153);
} else {
return null;
}
}
});})(c__10137__auto__))
;
return ((function (switch__10072__auto__,c__10137__auto__){
return (function() {
var Front$core$fetch_tasks_$_state_machine__10073__auto__ = null;
var Front$core$fetch_tasks_$_state_machine__10073__auto____0 = (function (){
var statearr_13160 = [null,null,null,null,null,null,null];
(statearr_13160[(0)] = Front$core$fetch_tasks_$_state_machine__10073__auto__);

(statearr_13160[(1)] = (1));

return statearr_13160;
});
var Front$core$fetch_tasks_$_state_machine__10073__auto____1 = (function (state_13155){
while(true){
var ret_value__10074__auto__ = (function (){try{while(true){
var result__10075__auto__ = switch__10072__auto__.call(null,state_13155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10075__auto__;
}
break;
}
}catch (e13161){if((e13161 instanceof Object)){
var ex__10076__auto__ = e13161;
var statearr_13162_13164 = state_13155;
(statearr_13162_13164[(5)] = ex__10076__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13165 = state_13155;
state_13155 = G__13165;
continue;
} else {
return ret_value__10074__auto__;
}
break;
}
});
Front$core$fetch_tasks_$_state_machine__10073__auto__ = function(state_13155){
switch(arguments.length){
case 0:
return Front$core$fetch_tasks_$_state_machine__10073__auto____0.call(this);
case 1:
return Front$core$fetch_tasks_$_state_machine__10073__auto____1.call(this,state_13155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
Front$core$fetch_tasks_$_state_machine__10073__auto__.cljs$core$IFn$_invoke$arity$0 = Front$core$fetch_tasks_$_state_machine__10073__auto____0;
Front$core$fetch_tasks_$_state_machine__10073__auto__.cljs$core$IFn$_invoke$arity$1 = Front$core$fetch_tasks_$_state_machine__10073__auto____1;
return Front$core$fetch_tasks_$_state_machine__10073__auto__;
})()
;})(switch__10072__auto__,c__10137__auto__))
})();
var state__10139__auto__ = (function (){var statearr_13163 = f__10138__auto__.call(null);
(statearr_13163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10137__auto__);

return statearr_13163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10139__auto__);
});})(c__10137__auto__))
);

return c__10137__auto__;
});
window.onload = (function (){
Front.core.init.call(null);

return Front.core.fetch_tasks.call(null);
});
