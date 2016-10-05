// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.EventType');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('goog.net.Jsonp');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__4657__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__4657__auto__)){
var req = temp__4657__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)),cljs.core.vals.call(null,headers));
return cljs.core.dorun.call(null,cljs.core.map.call(null,((function (formatted_h){
return (function (p__16288){
var vec__16289 = p__16288;
var k = cljs.core.nth.call(null,vec__16289,(0),null);
var v = cljs.core.nth.call(null,vec__16289,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__16293 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__16293)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__16293)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__16293)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__16293)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__16293)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__16293)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(response_type)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__16294){
var map__16298 = p__16294;
var map__16298__$1 = ((((!((map__16298 == null)))?((((map__16298.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16298.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16298):map__16298);
var request = map__16298__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__16298__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__16298__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__16298__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__6409__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__16300 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__16300,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__16300,response_type);

G__16300.setTimeoutInterval(timeout);

G__16300.setWithCredentials(send_credentials);

return G__16300;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__16301){
var map__16329 = p__16301;
var map__16329__$1 = ((((!((map__16329 == null)))?((((map__16329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16329):map__16329);
var request = map__16329__$1;
var request_method = cljs.core.get.call(null,map__16329__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__16329__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__16329__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__16329__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__16329__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.call(null,map__16329__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__6409__auto__ = request_method;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr__$1 = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr__$1);

xhr__$1.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr__$1,map__16329,map__16329__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if(cljs.core.not.call(null,cljs_http.core.aborted_QMARK_.call(null,xhr__$1))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,request_url,method,headers__$1,xhr__$1,map__16329,map__16329__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_16356 = ((function (channel,request_url,method,headers__$1,xhr__$1,map__16329,map__16329__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.call(null,progress,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)));
});})(channel,request_url,method,headers__$1,xhr__$1,map__16329,map__16329__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__16331_16357 = xhr__$1;
G__16331_16357.setProgressEventsEnabled(true);

G__16331_16357.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.call(null,listener_16356,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__16331_16357.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.call(null,listener_16356,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr__$1.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__13488__auto___16358 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13488__auto___16358,channel,request_url,method,headers__$1,xhr__$1,map__16329,map__16329__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__13489__auto__ = (function (){var switch__13376__auto__ = ((function (c__13488__auto___16358,channel,request_url,method,headers__$1,xhr__$1,map__16329,map__16329__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_16342){
var state_val_16343 = (state_16342[(1)]);
if((state_val_16343 === (1))){
var state_16342__$1 = state_16342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16342__$1,(2),cancel);
} else {
if((state_val_16343 === (2))){
var inst_16333 = (state_16342[(2)]);
var inst_16334 = xhr__$1.isComplete();
var inst_16335 = cljs.core.not.call(null,inst_16334);
var state_16342__$1 = (function (){var statearr_16344 = state_16342;
(statearr_16344[(7)] = inst_16333);

return statearr_16344;
})();
if(inst_16335){
var statearr_16345_16359 = state_16342__$1;
(statearr_16345_16359[(1)] = (3));

} else {
var statearr_16346_16360 = state_16342__$1;
(statearr_16346_16360[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16343 === (3))){
var inst_16337 = xhr__$1.abort();
var state_16342__$1 = state_16342;
var statearr_16347_16361 = state_16342__$1;
(statearr_16347_16361[(2)] = inst_16337);

(statearr_16347_16361[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16343 === (4))){
var state_16342__$1 = state_16342;
var statearr_16348_16362 = state_16342__$1;
(statearr_16348_16362[(2)] = null);

(statearr_16348_16362[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16343 === (5))){
var inst_16340 = (state_16342[(2)]);
var state_16342__$1 = state_16342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16342__$1,inst_16340);
} else {
return null;
}
}
}
}
}
});})(c__13488__auto___16358,channel,request_url,method,headers__$1,xhr__$1,map__16329,map__16329__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__13376__auto__,c__13488__auto___16358,channel,request_url,method,headers__$1,xhr__$1,map__16329,map__16329__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__13377__auto__ = null;
var cljs_http$core$xhr_$_state_machine__13377__auto____0 = (function (){
var statearr_16352 = [null,null,null,null,null,null,null,null];
(statearr_16352[(0)] = cljs_http$core$xhr_$_state_machine__13377__auto__);

(statearr_16352[(1)] = (1));

return statearr_16352;
});
var cljs_http$core$xhr_$_state_machine__13377__auto____1 = (function (state_16342){
while(true){
var ret_value__13378__auto__ = (function (){try{while(true){
var result__13379__auto__ = switch__13376__auto__.call(null,state_16342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13379__auto__;
}
break;
}
}catch (e16353){if((e16353 instanceof Object)){
var ex__13380__auto__ = e16353;
var statearr_16354_16363 = state_16342;
(statearr_16354_16363[(5)] = ex__13380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16364 = state_16342;
state_16342 = G__16364;
continue;
} else {
return ret_value__13378__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__13377__auto__ = function(state_16342){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__13377__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__13377__auto____1.call(this,state_16342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__13377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__13377__auto____0;
cljs_http$core$xhr_$_state_machine__13377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__13377__auto____1;
return cljs_http$core$xhr_$_state_machine__13377__auto__;
})()
;})(switch__13376__auto__,c__13488__auto___16358,channel,request_url,method,headers__$1,xhr__$1,map__16329,map__16329__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__13490__auto__ = (function (){var statearr_16355 = f__13489__auto__.call(null);
(statearr_16355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13488__auto___16358);

return statearr_16355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13490__auto__);
});})(c__13488__auto___16358,channel,request_url,method,headers__$1,xhr__$1,map__16329,map__16329__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__16365){
var map__16382 = p__16365;
var map__16382__$1 = ((((!((map__16382 == null)))?((((map__16382.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16382.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16382):map__16382);
var request = map__16382__$1;
var timeout = cljs.core.get.call(null,map__16382__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__16382__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__16382__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.call(null,map__16382__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.call(null);
var jsonp__$1 = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp__$1.setRequestTimeout(timeout);

var req_16398 = jsonp__$1.send(null,((function (channel,jsonp__$1,map__16382,map__16382__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__16382,map__16382__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp__$1,map__16382,map__16382__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__16382,map__16382__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp__$1,new cljs.core.Keyword(null,"request","request",1772954723),req_16398], null));

if(cljs.core.truth_(cancel)){
var c__13488__auto___16399 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13488__auto___16399,req_16398,channel,jsonp__$1,map__16382,map__16382__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__13489__auto__ = (function (){var switch__13376__auto__ = ((function (c__13488__auto___16399,req_16398,channel,jsonp__$1,map__16382,map__16382__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_16388){
var state_val_16389 = (state_16388[(1)]);
if((state_val_16389 === (1))){
var state_16388__$1 = state_16388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16388__$1,(2),cancel);
} else {
if((state_val_16389 === (2))){
var inst_16385 = (state_16388[(2)]);
var inst_16386 = jsonp__$1.cancel(req_16398);
var state_16388__$1 = (function (){var statearr_16390 = state_16388;
(statearr_16390[(7)] = inst_16385);

return statearr_16390;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16388__$1,inst_16386);
} else {
return null;
}
}
});})(c__13488__auto___16399,req_16398,channel,jsonp__$1,map__16382,map__16382__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__13376__auto__,c__13488__auto___16399,req_16398,channel,jsonp__$1,map__16382,map__16382__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__13377__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__13377__auto____0 = (function (){
var statearr_16394 = [null,null,null,null,null,null,null,null];
(statearr_16394[(0)] = cljs_http$core$jsonp_$_state_machine__13377__auto__);

(statearr_16394[(1)] = (1));

return statearr_16394;
});
var cljs_http$core$jsonp_$_state_machine__13377__auto____1 = (function (state_16388){
while(true){
var ret_value__13378__auto__ = (function (){try{while(true){
var result__13379__auto__ = switch__13376__auto__.call(null,state_16388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13379__auto__;
}
break;
}
}catch (e16395){if((e16395 instanceof Object)){
var ex__13380__auto__ = e16395;
var statearr_16396_16400 = state_16388;
(statearr_16396_16400[(5)] = ex__13380__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13378__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16401 = state_16388;
state_16388 = G__16401;
continue;
} else {
return ret_value__13378__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__13377__auto__ = function(state_16388){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__13377__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__13377__auto____1.call(this,state_16388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__13377__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__13377__auto____0;
cljs_http$core$jsonp_$_state_machine__13377__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__13377__auto____1;
return cljs_http$core$jsonp_$_state_machine__13377__auto__;
})()
;})(switch__13376__auto__,c__13488__auto___16399,req_16398,channel,jsonp__$1,map__16382,map__16382__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__13490__auto__ = (function (){var statearr_16397 = f__13489__auto__.call(null);
(statearr_16397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13488__auto___16399);

return statearr_16397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13490__auto__);
});})(c__13488__auto___16399,req_16398,channel,jsonp__$1,map__16382,map__16382__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__16402){
var map__16405 = p__16402;
var map__16405__$1 = ((((!((map__16405 == null)))?((((map__16405.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16405.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16405):map__16405);
var request__$1 = map__16405__$1;
var request_method = cljs.core.get.call(null,map__16405__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request__$1);
} else {
return cljs_http.core.xhr.call(null,request__$1);
}
});
