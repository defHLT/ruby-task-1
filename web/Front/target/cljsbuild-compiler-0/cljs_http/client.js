// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__6397__auto__ = v;
if(cljs.core.truth_(and__6397__auto__)){
return (v > (0));
} else {
return and__6397__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(!(clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__16440_SHARP_,p2__16439_SHARP_){
var vec__16444 = clojure.string.split.call(null,p2__16439_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__16444,(0),null);
var v = cljs.core.nth.call(null,vec__16444,(1),null);
return cljs.core.assoc.call(null,p1__16440_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode.call(null,[cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__16447_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__16447_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__16448){
var vec__16452 = p__16448;
var k = cljs.core.nth.call(null,vec__16452,(0),null);
var v = cljs.core.nth.call(null,vec__16452,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__16455_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__16455_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__6397__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__6397__auto__){
var and__6397__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__6397__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__16456_SHARP_){
return cljs_http.client.decode_body.call(null,p1__16456_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__7491__auto__ = [];
var len__7484__auto___16463 = arguments.length;
var i__7485__auto___16464 = (0);
while(true){
if((i__7485__auto___16464 < len__7484__auto___16463)){
args__7491__auto__.push((arguments[i__7485__auto___16464]));

var G__16465 = (i__7485__auto___16464 + (1));
i__7485__auto___16464 = G__16465;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__16459){
var vec__16460 = p__16459;
var default_headers = cljs.core.nth.call(null,vec__16460,(0),null);
return ((function (vec__16460,default_headers){
return (function (request){
var temp__4655__auto__ = (function (){var or__6409__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var default_headers__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__16460,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq16457){
var G__16458 = cljs.core.first.call(null,seq16457);
var seq16457__$1 = cljs.core.next.call(null,seq16457);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__16458,seq16457__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__7491__auto__ = [];
var len__7484__auto___16472 = arguments.length;
var i__7485__auto___16473 = (0);
while(true){
if((i__7485__auto___16473 < len__7484__auto___16472)){
args__7491__auto__.push((arguments[i__7485__auto___16473]));

var G__16474 = (i__7485__auto___16473 + (1));
i__7485__auto___16473 = G__16474;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__16468){
var vec__16469 = p__16468;
var accept = cljs.core.nth.call(null,vec__16469,(0),null);
return ((function (vec__16469,accept){
return (function (request){
var temp__4655__auto__ = (function (){var or__6409__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var accept__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__16469,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq16466){
var G__16467 = cljs.core.first.call(null,seq16466);
var seq16466__$1 = cljs.core.next.call(null,seq16466);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__16467,seq16466__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__7491__auto__ = [];
var len__7484__auto___16481 = arguments.length;
var i__7485__auto___16482 = (0);
while(true){
if((i__7485__auto___16482 < len__7484__auto___16481)){
args__7491__auto__.push((arguments[i__7485__auto___16482]));

var G__16483 = (i__7485__auto___16482 + (1));
i__7485__auto___16482 = G__16483;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__16477){
var vec__16478 = p__16477;
var content_type = cljs.core.nth.call(null,vec__16478,(0),null);
return ((function (vec__16478,content_type){
return (function (request){
var temp__4655__auto__ = (function (){var or__6409__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var content_type__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__16478,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq16475){
var G__16476 = cljs.core.first.call(null,seq16475);
var seq16475__$1 = cljs.core.next.call(null,seq16475);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__16476,seq16475__$1);
});

cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var map__16486 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__16486__$1 = ((((!((map__16486 == null)))?((((map__16486.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16486.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16486):map__16486);
var encoding = cljs.core.get.call(null,map__16486__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__16486__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__16492 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__16492__$1 = ((((!((map__16492 == null)))?((((map__16492.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16492.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16492):map__16492);
var decoding = cljs.core.get.call(null,map__16492__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__16492__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__16492,map__16492__$1,decoding,decoding_opts){
return (function (p1__16488_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__16488_SHARP_,decoding,decoding_opts);
});})(map__16492,map__16492__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__16492,map__16492__$1,decoding,decoding_opts,transit_decode){
return (function (p1__16489_SHARP_){
return cljs_http.client.decode_body.call(null,p1__16489_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__16492,map__16492__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__16494_SHARP_){
return cljs_http.client.decode_body.call(null,p1__16494_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__16498){
var map__16499 = p__16498;
var map__16499__$1 = ((((!((map__16499 == null)))?((((map__16499.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16499.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16499):map__16499);
var req = map__16499__$1;
var query_params = cljs.core.get.call(null,map__16499__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__16504){
var map__16505 = p__16504;
var map__16505__$1 = ((((!((map__16505 == null)))?((((map__16505.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16505.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16505):map__16505);
var request = map__16505__$1;
var form_params = cljs.core.get.call(null,map__16505__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__16505__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__16505__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__6397__auto__ = form_params;
if(cljs.core.truth_(and__6397__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__6397__auto__;
}
})())){
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers);
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__16517_16527 = cljs.core.seq.call(null,params);
var chunk__16518_16528 = null;
var count__16519_16529 = (0);
var i__16520_16530 = (0);
while(true){
if((i__16520_16530 < count__16519_16529)){
var vec__16521_16531 = cljs.core._nth.call(null,chunk__16518_16528,i__16520_16530);
var k_16532 = cljs.core.nth.call(null,vec__16521_16531,(0),null);
var v_16533 = cljs.core.nth.call(null,vec__16521_16531,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_16533)){
form_data.append(cljs.core.name.call(null,k_16532),cljs.core.first.call(null,v_16533),cljs.core.second.call(null,v_16533));
} else {
form_data.append(cljs.core.name.call(null,k_16532),v_16533);
}

var G__16534 = seq__16517_16527;
var G__16535 = chunk__16518_16528;
var G__16536 = count__16519_16529;
var G__16537 = (i__16520_16530 + (1));
seq__16517_16527 = G__16534;
chunk__16518_16528 = G__16535;
count__16519_16529 = G__16536;
i__16520_16530 = G__16537;
continue;
} else {
var temp__4657__auto___16538 = cljs.core.seq.call(null,seq__16517_16527);
if(temp__4657__auto___16538){
var seq__16517_16539__$1 = temp__4657__auto___16538;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16517_16539__$1)){
var c__7220__auto___16540 = cljs.core.chunk_first.call(null,seq__16517_16539__$1);
var G__16541 = cljs.core.chunk_rest.call(null,seq__16517_16539__$1);
var G__16542 = c__7220__auto___16540;
var G__16543 = cljs.core.count.call(null,c__7220__auto___16540);
var G__16544 = (0);
seq__16517_16527 = G__16541;
chunk__16518_16528 = G__16542;
count__16519_16529 = G__16543;
i__16520_16530 = G__16544;
continue;
} else {
var vec__16524_16545 = cljs.core.first.call(null,seq__16517_16539__$1);
var k_16546 = cljs.core.nth.call(null,vec__16524_16545,(0),null);
var v_16547 = cljs.core.nth.call(null,vec__16524_16545,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_16547)){
form_data.append(cljs.core.name.call(null,k_16546),cljs.core.first.call(null,v_16547),cljs.core.second.call(null,v_16547));
} else {
form_data.append(cljs.core.name.call(null,k_16546),v_16547);
}

var G__16548 = cljs.core.next.call(null,seq__16517_16539__$1);
var G__16549 = null;
var G__16550 = (0);
var G__16551 = (0);
seq__16517_16527 = G__16548;
chunk__16518_16528 = G__16549;
count__16519_16529 = G__16550;
i__16520_16530 = G__16551;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__16555){
var map__16556 = p__16555;
var map__16556__$1 = ((((!((map__16556 == null)))?((((map__16556.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16556.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16556):map__16556);
var request = map__16556__$1;
var multipart_params = cljs.core.get.call(null,map__16556__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__16556__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__6397__auto__ = multipart_params;
if(cljs.core.truth_(and__6397__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__6397__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4655__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var m = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__16558_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__16558_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__16563){
var map__16564 = p__16563;
var map__16564__$1 = ((((!((map__16564 == null)))?((((map__16564.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16564.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16564):map__16564);
var req = map__16564__$1;
var query_params = cljs.core.get.call(null,map__16564__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4655__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4655__auto__,map__16564,map__16564__$1,req,query_params){
return (function (p1__16559_SHARP_){
return cljs.core.merge.call(null,p1__16559_SHARP_,query_params);
});})(spec,temp__4655__auto__,map__16564,map__16564__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__7491__auto__ = [];
var len__7484__auto___16572 = arguments.length;
var i__7485__auto___16573 = (0);
while(true){
if((i__7485__auto___16573 < len__7484__auto___16572)){
args__7491__auto__.push((arguments[i__7485__auto___16573]));

var G__16574 = (i__7485__auto___16573 + (1));
i__7485__auto___16573 = G__16574;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__16568){
var vec__16569 = p__16568;
var credentials = cljs.core.nth.call(null,vec__16569,(0),null);
return ((function (vec__16569,credentials){
return (function (req){
var credentials__$1 = (function (){var or__6409__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__16569,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq16566){
var G__16567 = cljs.core.first.call(null,seq16566);
var seq16566__$1 = cljs.core.next.call(null,seq16566);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__16567,seq16566__$1);
});

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4655__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var oauth_token = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var custom_channel = temp__4655__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__7491__auto__ = [];
var len__7484__auto___16581 = arguments.length;
var i__7485__auto___16582 = (0);
while(true){
if((i__7485__auto___16582 < len__7484__auto___16581)){
args__7491__auto__.push((arguments[i__7485__auto___16582]));

var G__16583 = (i__7485__auto___16582 + (1));
i__7485__auto___16582 = G__16583;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__16577){
var vec__16578 = p__16577;
var req = cljs.core.nth.call(null,vec__16578,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq16575){
var G__16576 = cljs.core.first.call(null,seq16575);
var seq16575__$1 = cljs.core.next.call(null,seq16575);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__16576,seq16575__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__7491__auto__ = [];
var len__7484__auto___16590 = arguments.length;
var i__7485__auto___16591 = (0);
while(true){
if((i__7485__auto___16591 < len__7484__auto___16590)){
args__7491__auto__.push((arguments[i__7485__auto___16591]));

var G__16592 = (i__7485__auto___16591 + (1));
i__7485__auto___16591 = G__16592;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__16586){
var vec__16587 = p__16586;
var req = cljs.core.nth.call(null,vec__16587,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq16584){
var G__16585 = cljs.core.first.call(null,seq16584);
var seq16584__$1 = cljs.core.next.call(null,seq16584);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__16585,seq16584__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__7491__auto__ = [];
var len__7484__auto___16599 = arguments.length;
var i__7485__auto___16600 = (0);
while(true){
if((i__7485__auto___16600 < len__7484__auto___16599)){
args__7491__auto__.push((arguments[i__7485__auto___16600]));

var G__16601 = (i__7485__auto___16600 + (1));
i__7485__auto___16600 = G__16601;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__16595){
var vec__16596 = p__16595;
var req = cljs.core.nth.call(null,vec__16596,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq16593){
var G__16594 = cljs.core.first.call(null,seq16593);
var seq16593__$1 = cljs.core.next.call(null,seq16593);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__16594,seq16593__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__7491__auto__ = [];
var len__7484__auto___16608 = arguments.length;
var i__7485__auto___16609 = (0);
while(true){
if((i__7485__auto___16609 < len__7484__auto___16608)){
args__7491__auto__.push((arguments[i__7485__auto___16609]));

var G__16610 = (i__7485__auto___16609 + (1));
i__7485__auto___16609 = G__16610;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__16604){
var vec__16605 = p__16604;
var req = cljs.core.nth.call(null,vec__16605,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq16602){
var G__16603 = cljs.core.first.call(null,seq16602);
var seq16602__$1 = cljs.core.next.call(null,seq16602);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__16603,seq16602__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__7491__auto__ = [];
var len__7484__auto___16617 = arguments.length;
var i__7485__auto___16618 = (0);
while(true){
if((i__7485__auto___16618 < len__7484__auto___16617)){
args__7491__auto__.push((arguments[i__7485__auto___16618]));

var G__16619 = (i__7485__auto___16618 + (1));
i__7485__auto___16618 = G__16619;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__16613){
var vec__16614 = p__16613;
var req = cljs.core.nth.call(null,vec__16614,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq16611){
var G__16612 = cljs.core.first.call(null,seq16611);
var seq16611__$1 = cljs.core.next.call(null,seq16611);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__16612,seq16611__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__7491__auto__ = [];
var len__7484__auto___16626 = arguments.length;
var i__7485__auto___16627 = (0);
while(true){
if((i__7485__auto___16627 < len__7484__auto___16626)){
args__7491__auto__.push((arguments[i__7485__auto___16627]));

var G__16628 = (i__7485__auto___16627 + (1));
i__7485__auto___16627 = G__16628;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__16622){
var vec__16623 = p__16622;
var req = cljs.core.nth.call(null,vec__16623,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq16620){
var G__16621 = cljs.core.first.call(null,seq16620);
var seq16620__$1 = cljs.core.next.call(null,seq16620);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__16621,seq16620__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__7491__auto__ = [];
var len__7484__auto___16635 = arguments.length;
var i__7485__auto___16636 = (0);
while(true){
if((i__7485__auto___16636 < len__7484__auto___16635)){
args__7491__auto__.push((arguments[i__7485__auto___16636]));

var G__16637 = (i__7485__auto___16636 + (1));
i__7485__auto___16636 = G__16637;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__16631){
var vec__16632 = p__16631;
var req = cljs.core.nth.call(null,vec__16632,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq16629){
var G__16630 = cljs.core.first.call(null,seq16629);
var seq16629__$1 = cljs.core.next.call(null,seq16629);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__16630,seq16629__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__7491__auto__ = [];
var len__7484__auto___16644 = arguments.length;
var i__7485__auto___16645 = (0);
while(true){
if((i__7485__auto___16645 < len__7484__auto___16644)){
args__7491__auto__.push((arguments[i__7485__auto___16645]));

var G__16646 = (i__7485__auto___16645 + (1));
i__7485__auto___16645 = G__16646;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__16640){
var vec__16641 = p__16640;
var req = cljs.core.nth.call(null,vec__16641,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq16638){
var G__16639 = cljs.core.first.call(null,seq16638);
var seq16638__$1 = cljs.core.next.call(null,seq16638);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__16639,seq16638__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__7491__auto__ = [];
var len__7484__auto___16653 = arguments.length;
var i__7485__auto___16654 = (0);
while(true){
if((i__7485__auto___16654 < len__7484__auto___16653)){
args__7491__auto__.push((arguments[i__7485__auto___16654]));

var G__16655 = (i__7485__auto___16654 + (1));
i__7485__auto___16654 = G__16655;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__16649){
var vec__16650 = p__16649;
var req = cljs.core.nth.call(null,vec__16650,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq16647){
var G__16648 = cljs.core.first.call(null,seq16647);
var seq16647__$1 = cljs.core.next.call(null,seq16647);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__16648,seq16647__$1);
});

