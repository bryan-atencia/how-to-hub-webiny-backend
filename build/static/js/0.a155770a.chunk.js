(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[0],{1390:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(0),i="undefined"!==typeof window?n.useLayoutEffect:n.useEffect},1396:function(e,t,r){"use strict";function n(e,t,r){var n=r.getRegistry(),i=n.addTarget(e,t);return[i,function(){return n.removeTarget(i)}]}function i(e,t,r){var n=r.getRegistry(),i=n.addSource(e,t);return[i,function(){return n.removeSource(i)}]}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return i}))},1400:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(0),i=r(77),o=r.n(i),a=r(1414);function u(){var e=Object(n.useContext)(a.a).dragDropManager;return o()(null!=e,"Expected drag drop context"),e}},1404:function(e,t,r){"use strict";function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e){return null!==e&&"object"===n(e)&&e.hasOwnProperty("current")}r.d(t,"a",(function(){return i}))},1405:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(1390),i=r(1442);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var r=[],n=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(c){i=!0,o=c}finally{try{n||null==u.return||u.return()}finally{if(i)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function a(e,t,r){var a=o(Object(i.a)(e,t,r),2),u=a[0],c=a[1];return Object(n.a)((function(){var t=e.getHandlerId();if(null!=t)return e.subscribeToStateChange(c,{handlerIds:[t]})}),[e,c]),u}},1408:function(e,t,r){"use strict";var n=r(0),i=r(77),o=r.n(i);function a(e,t){"function"===typeof e?e(t):e.current=t}function u(e,t){var r=e.ref;return o()("string"!==typeof r,"Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute"),r?Object(n.cloneElement)(e,{ref:function(e){a(r,e),a(t,e)}}):Object(n.cloneElement)(e,{ref:t})}function c(e){if("string"!==typeof e.type){var t=e.type.displayName||e.type.name||"the component";throw new Error("Only native element nodes can now be passed to React DnD connectors."+"You can either wrap ".concat(t," into a <div>, or turn it into a ")+"drag source or a drop target itself.")}}function s(e){var t={};return Object.keys(e).forEach((function(r){var i=e[r];if(r.endsWith("Ref"))t[r]=e[r];else{var o=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!Object(n.isValidElement)(t)){var i=t;return e(i,r),i}var o=t;c(o);var a=r?function(t){return e(t,r)}:e;return u(o,a)}}(i);t[r]=function(){return o}}})),t}r.d(t,"a",(function(){return s}))},1414:function(e,t,r){"use strict";var n=r(0),i=r(248),o="dnd-core/INIT_COORDS",a="dnd-core/BEGIN_DRAG",u="dnd-core/PUBLISH_DRAG_SOURCE",c="dnd-core/HOVER",s="dnd-core/DROP",l="dnd-core/END_DRAG",f=function(e,t){return e===t};function d(e,t){return!e&&!t||!(!e||!t)&&(e.x===t.x&&e.y===t.y)}function g(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:f;if(e.length!==t.length)return!1;for(var n=0;n<e.length;++n)if(!r(e[n],t[n]))return!1;return!0}function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v={initialSourceClientOffset:null,initialClientOffset:null,clientOffset:null};function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0,r=t.payload;switch(t.type){case o:case a:return{initialSourceClientOffset:r.sourceClientOffset,initialClientOffset:r.clientOffset,clientOffset:r.clientOffset};case c:return d(e.clientOffset,r.clientOffset)?e:p({},e,{clientOffset:r.clientOffset});case l:case s:return v;default:return e}}var O="dnd-core/ADD_SOURCE",S="dnd-core/ADD_TARGET",m="dnd-core/REMOVE_SOURCE",w="dnd-core/REMOVE_TARGET";function D(e){return(D="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t,r){return t.split(".").reduce((function(e,t){return e&&e[t]?e[t]:r||null}),e)}function k(e,t){return e.filter((function(e){return e!==t}))}function P(e){return"object"===D(e)}function T(e,t){var r=new Map,n=function(e){return r.set(e,r.has(e)?r.get(e)+1:1)};e.forEach(n),t.forEach(n);var i=[];return r.forEach((function(e,t){1===e&&i.push(t)})),i}function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){E(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var R={itemType:null,item:null,sourceId:null,targetIds:[],dropResult:null,didDrop:!1,isSourcePublic:null};function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0,r=t.payload;switch(t.type){case a:return C({},e,{itemType:r.itemType,item:r.item,sourceId:r.sourceId,isSourcePublic:r.isSourcePublic,dropResult:null,didDrop:!1});case u:return C({},e,{isSourcePublic:!0});case c:return C({},e,{targetIds:r.targetIds});case w:return-1===e.targetIds.indexOf(r.targetId)?e:C({},e,{targetIds:k(e.targetIds,r.targetId)});case s:return C({},e,{dropResult:r.dropResult,didDrop:!0,targetIds:[]});case l:return C({},e,{itemType:null,item:null,sourceId:null,dropResult:null,didDrop:!1,isSourcePublic:null,targetIds:[]});default:return e}}function M(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:case S:return e+1;case m:case w:return e-1;default:return e}}var A=[],U=[];function _(e,t){return e!==A&&(e===U||"undefined"===typeof t||(r=e,t.filter((function(e){return r.indexOf(e)>-1}))).length>0);var r}function H(){var e=arguments.length>1?arguments[1]:void 0;switch(e.type){case c:break;case O:case S:case w:case m:return A;case a:case u:case l:case s:default:return U}var t=e.payload,r=t.targetIds,n=void 0===r?[]:r,i=t.prevTargetIds,o=void 0===i?[]:i,f=T(n,o),d=f.length>0||!g(n,o);if(!d)return A;var h=o[o.length-1],p=n[n.length-1];return h!==p&&(h&&f.push(h),p&&f.push(p)),f}function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return e+1}function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(Object(r),!0).forEach((function(t){F(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function F(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function L(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return{dirtyHandlerIds:H(e.dirtyHandlerIds,{type:t.type,payload:B({},t.payload,{prevTargetIds:I(e,"dragOperation.targetIds",[])})}),dragOffset:b(e.dragOffset,t),refCount:M(e.refCount,t),dragOperation:x(e.dragOperation,t),stateId:N(e.stateId)}}A.__IS_NONE__=!0,U.__IS_ALL__=!0;var V=r(77),q=r.n(V);function W(e,t){return{type:o,payload:{sourceClientOffset:t||null,clientOffset:e||null}}}var Y={type:o,payload:{clientOffset:null,sourceClientOffset:null}};function J(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{publishSource:!0},n=r.publishSource,i=void 0===n||n,o=r.clientOffset,u=r.getSourceClientOffset,c=e.getMonitor(),s=e.getRegistry();e.dispatch(W(o)),X(t,c,s);var l=Q(t,c);if(null!==l){var f=null;o&&(K(u),f=u(l)),e.dispatch(W(o,f));var d=s.getSource(l),g=d.beginDrag(c,l);z(g),s.pinSource(l);var h=s.getSourceType(l);return{type:a,payload:{itemType:h,item:g,sourceId:l,clientOffset:o||null,sourceClientOffset:f||null,isSourcePublic:!!i}}}e.dispatch(Y)}}function X(e,t,r){q()(!t.isDragging(),"Cannot call beginDrag while dragging."),e.forEach((function(e){q()(r.getSource(e),"Expected sourceIds to be registered.")}))}function K(e){q()("function"===typeof e,"When clientOffset is provided, getSourceClientOffset must be a function.")}function z(e){q()(P(e),"Item must be an object.")}function Q(e,t){for(var r=null,n=e.length-1;n>=0;n--)if(t.canDragSource(e[n])){r=e[n];break}return r}function Z(e){return function(){if(e.getMonitor().isDragging())return{type:u}}}function $(e,t){return null===t?null===e:Array.isArray(e)?e.some((function(e){return e===t})):e===t}function ee(e){return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.clientOffset;te(t);var i=t.slice(0),o=e.getMonitor(),a=e.getRegistry();re(i,o,a);var u=o.getItemType();return ne(i,a,u),ie(i,o,a),{type:c,payload:{targetIds:i,clientOffset:n||null}}}}function te(e){q()(Array.isArray(e),"Expected targetIds to be an array.")}function re(e,t,r){q()(t.isDragging(),"Cannot call hover while not dragging."),q()(!t.didDrop(),"Cannot call hover after drop.");for(var n=0;n<e.length;n++){var i=e[n];q()(e.lastIndexOf(i)===n,"Expected targetIds to be unique in the passed array.");var o=r.getTarget(i);q()(o,"Expected targetIds to be registered.")}}function ne(e,t,r){for(var n=e.length-1;n>=0;n--){var i=e[n];$(t.getTargetType(i),r)||e.splice(n,1)}}function ie(e,t,r){e.forEach((function(e){r.getTarget(e).hover(t,e)}))}function oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ae(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(r),!0).forEach((function(t){ue(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):oe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ue(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ce(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.getMonitor(),n=e.getRegistry();se(r);var i=fe(r);i.forEach((function(i,o){var a=le(i,o,n,r),u={type:s,payload:{dropResult:ae({},t,{},a)}};e.dispatch(u)}))}}function se(e){q()(e.isDragging(),"Cannot call drop while not dragging."),q()(!e.didDrop(),"Cannot call drop twice during one drag operation.")}function le(e,t,r,n){var i=r.getTarget(e),o=i?i.drop(n,e):void 0;return function(e){q()("undefined"===typeof e||P(e),"Drop result must either be an object or undefined.")}(o),"undefined"===typeof o&&(o=0===t?{}:n.getDropResult()),o}function fe(e){var t=e.getTargetIds().filter(e.canDropOnTarget,e);return t.reverse(),t}function de(e){return function(){var t=e.getMonitor(),r=e.getRegistry();!function(e){q()(e.isDragging(),"Cannot call endDrag while not dragging.")}(t);var n=t.getSourceId();return r.getSource(n,!0).endDrag(t,n),r.unpinSource(),{type:l}}}function ge(e,t){return{x:e.x-t.x,y:e.y-t.y}}function he(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var pe,ye=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.store=t,this.registry=r}var t,r,n;return t=e,(r=[{key:"subscribeToStateChange",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{handlerIds:void 0},n=r.handlerIds;q()("function"===typeof e,"listener must be a function."),q()("undefined"===typeof n||Array.isArray(n),"handlerIds, when specified, must be an array of strings.");var i=this.store.getState().stateId,o=function(){var r=t.store.getState(),o=r.stateId;try{o===i||o===i+1&&!_(r.dirtyHandlerIds,n)||e()}finally{i=o}};return this.store.subscribe(o)}},{key:"subscribeToOffsetChange",value:function(e){var t=this;q()("function"===typeof e,"listener must be a function.");var r=this.store.getState().dragOffset;return this.store.subscribe((function(){var n=t.store.getState().dragOffset;n!==r&&(r=n,e())}))}},{key:"canDragSource",value:function(e){if(!e)return!1;var t=this.registry.getSource(e);return q()(t,"Expected to find a valid source."),!this.isDragging()&&t.canDrag(this,e)}},{key:"canDropOnTarget",value:function(e){if(!e)return!1;var t=this.registry.getTarget(e);return q()(t,"Expected to find a valid target."),!(!this.isDragging()||this.didDrop())&&$(this.registry.getTargetType(e),this.getItemType())&&t.canDrop(this,e)}},{key:"isDragging",value:function(){return Boolean(this.getItemType())}},{key:"isDraggingSource",value:function(e){if(!e)return!1;var t=this.registry.getSource(e,!0);return q()(t,"Expected to find a valid source."),!(!this.isDragging()||!this.isSourcePublic())&&this.registry.getSourceType(e)===this.getItemType()&&t.isDragging(this,e)}},{key:"isOverTarget",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{shallow:!1};if(!e)return!1;var r=t.shallow;if(!this.isDragging())return!1;var n=this.registry.getTargetType(e),i=this.getItemType();if(i&&!$(n,i))return!1;var o=this.getTargetIds();if(!o.length)return!1;var a=o.indexOf(e);return r?a===o.length-1:a>-1}},{key:"getItemType",value:function(){return this.store.getState().dragOperation.itemType}},{key:"getItem",value:function(){return this.store.getState().dragOperation.item}},{key:"getSourceId",value:function(){return this.store.getState().dragOperation.sourceId}},{key:"getTargetIds",value:function(){return this.store.getState().dragOperation.targetIds}},{key:"getDropResult",value:function(){return this.store.getState().dragOperation.dropResult}},{key:"didDrop",value:function(){return this.store.getState().dragOperation.didDrop}},{key:"isSourcePublic",value:function(){return this.store.getState().dragOperation.isSourcePublic}},{key:"getInitialClientOffset",value:function(){return this.store.getState().dragOffset.initialClientOffset}},{key:"getInitialSourceClientOffset",value:function(){return this.store.getState().dragOffset.initialSourceClientOffset}},{key:"getClientOffset",value:function(){return this.store.getState().dragOffset.clientOffset}},{key:"getSourceClientOffset",value:function(){return function(e){var t,r,n=e.clientOffset,i=e.initialClientOffset,o=e.initialSourceClientOffset;return n&&i&&o?ge((r=o,{x:(t=n).x+r.x,y:t.y+r.y}),i):null}(this.store.getState().dragOffset)}},{key:"getDifferenceFromInitialOffset",value:function(){return function(e){var t=e.clientOffset,r=e.initialClientOffset;return t&&r?ge(t,r):null}(this.store.getState().dragOffset)}}])&&he(t.prototype,r),n&&he(t,n),e}(),ve=r(1422),be=r.n(ve),Oe=0;function Se(e){return(Se="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function me(e,t){t&&Array.isArray(e)?e.forEach((function(e){return me(e,!1)})):q()("string"===typeof e||"symbol"===Se(e),t?"Type can only be a string, a symbol, or an array of either.":"Type can only be a string or a symbol.")}function we(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function De(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var r=[],n=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(c){i=!0,o=c}finally{try{n||null==u.return||u.return()}finally{if(i)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function Ie(e){var t=(Oe++).toString();switch(e){case pe.SOURCE:return"S".concat(t);case pe.TARGET:return"T".concat(t);default:throw new Error("Unknown Handler Role: ".concat(e))}}function ke(e){switch(e[0]){case"S":return pe.SOURCE;case"T":return pe.TARGET;default:q()(!1,"Cannot parse handler ID: ".concat(e))}}function Pe(e,t){var r=e.entries(),n=!1;do{var i=r.next(),o=i.done;if(De(i.value,2)[1]===t)return!0;n=!!o}while(!n);return!1}!function(e){e.SOURCE="SOURCE",e.TARGET="TARGET"}(pe||(pe={}));var Te=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.types=new Map,this.dragSources=new Map,this.dropTargets=new Map,this.pinnedSourceId=null,this.pinnedSource=null,this.store=t}var t,r,n;return t=e,(r=[{key:"addSource",value:function(e,t){me(e),function(e){q()("function"===typeof e.canDrag,"Expected canDrag to be a function."),q()("function"===typeof e.beginDrag,"Expected beginDrag to be a function."),q()("function"===typeof e.endDrag,"Expected endDrag to be a function.")}(t);var r=this.addHandler(pe.SOURCE,e,t);return this.store.dispatch(function(e){return{type:O,payload:{sourceId:e}}}(r)),r}},{key:"addTarget",value:function(e,t){me(e,!0),function(e){q()("function"===typeof e.canDrop,"Expected canDrop to be a function."),q()("function"===typeof e.hover,"Expected hover to be a function."),q()("function"===typeof e.drop,"Expected beginDrag to be a function.")}(t);var r=this.addHandler(pe.TARGET,e,t);return this.store.dispatch(function(e){return{type:S,payload:{targetId:e}}}(r)),r}},{key:"containsHandler",value:function(e){return Pe(this.dragSources,e)||Pe(this.dropTargets,e)}},{key:"getSource",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];q()(this.isSourceId(e),"Expected a valid source ID.");var r=t&&e===this.pinnedSourceId,n=r?this.pinnedSource:this.dragSources.get(e);return n}},{key:"getTarget",value:function(e){return q()(this.isTargetId(e),"Expected a valid target ID."),this.dropTargets.get(e)}},{key:"getSourceType",value:function(e){return q()(this.isSourceId(e),"Expected a valid source ID."),this.types.get(e)}},{key:"getTargetType",value:function(e){return q()(this.isTargetId(e),"Expected a valid target ID."),this.types.get(e)}},{key:"isSourceId",value:function(e){return ke(e)===pe.SOURCE}},{key:"isTargetId",value:function(e){return ke(e)===pe.TARGET}},{key:"removeSource",value:function(e){var t=this;q()(this.getSource(e),"Expected an existing source."),this.store.dispatch(function(e){return{type:m,payload:{sourceId:e}}}(e)),be()((function(){t.dragSources.delete(e),t.types.delete(e)}))}},{key:"removeTarget",value:function(e){q()(this.getTarget(e),"Expected an existing target."),this.store.dispatch(function(e){return{type:w,payload:{targetId:e}}}(e)),this.dropTargets.delete(e),this.types.delete(e)}},{key:"pinSource",value:function(e){var t=this.getSource(e);q()(t,"Expected an existing source."),this.pinnedSourceId=e,this.pinnedSource=t}},{key:"unpinSource",value:function(){q()(this.pinnedSource,"No source is pinned at the time."),this.pinnedSourceId=null,this.pinnedSource=null}},{key:"addHandler",value:function(e,t,r){var n=Ie(e);return this.types.set(n,t),e===pe.SOURCE?this.dragSources.set(n,r):e===pe.TARGET&&this.dropTargets.set(n,r),n}}])&&we(t.prototype,r),n&&we(t,n),e}();function je(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ce(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Ee(e){var t="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__;return Object(i.d)(L,e&&t&&t({name:"dnd-core",instanceId:"dnd-core"}))}var Re=function(){function e(){var t=this,r=arguments.length>0&&void 0!==arguments[0]&&arguments[0];je(this,e),this.isSetUp=!1,this.handleRefCountChange=function(){var e=t.store.getState().refCount>0;t.backend&&(e&&!t.isSetUp?(t.backend.setup(),t.isSetUp=!0):!e&&t.isSetUp&&(t.backend.teardown(),t.isSetUp=!1))};var n=Ee(r);this.store=n,this.monitor=new ye(n,new Te(n)),n.subscribe(this.handleRefCountChange)}var t,r,n;return t=e,(r=[{key:"receiveBackend",value:function(e){this.backend=e}},{key:"getMonitor",value:function(){return this.monitor}},{key:"getBackend",value:function(){return this.backend}},{key:"getRegistry",value:function(){return this.monitor.registry}},{key:"getActions",value:function(){var e=this,t=this.store.dispatch,r=function(e){return{beginDrag:J(e),publishDragSource:Z(e),hover:ee(e),drop:ce(e),endDrag:de(e)}}(this);return Object.keys(r).reduce((function(n,i){var o,a=r[i];return n[i]=(o=a,function(){for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];var a=o.apply(e,n);"undefined"!==typeof a&&t(a)}),n}),{})}},{key:"dispatch",value:function(e){this.store.dispatch(e)}}])&&Ce(t.prototype,r),n&&Ce(t,n),e}();function xe(e,t,r,n){var i=new Re(n),o=e(i,t,r);return i.receiveBackend(o),i}r.d(t,"a",(function(){return Me})),r.d(t,"b",(function(){return Ae}));var Me=n.createContext({dragDropManager:void 0});function Ae(e,t,r,n){return{dragDropManager:xe(e,t,r,n)}}},1422:function(e,t,r){"use strict";var n=r(1423),i=[],o=[],a=n.makeRequestCallFromTimer((function(){if(o.length)throw o.shift()}));function u(e){var t;(t=i.length?i.pop():new c).task=e,n(t)}function c(){this.task=null}e.exports=u,c.prototype.call=function(){try{this.task.call()}catch(e){u.onerror?u.onerror(e):(o.push(e),a())}finally{this.task=null,i[i.length]=this}}},1423:function(e,t,r){"use strict";(function(t){function r(e){i.length||(n(),!0),i[i.length]=e}e.exports=r;var n,i=[],o=0;function a(){for(;o<i.length;){var e=o;if(o+=1,i[e].call(),o>1024){for(var t=0,r=i.length-o;t<r;t++)i[t]=i[t+o];i.length-=o,o=0}}i.length=0,o=0,!1}var u="undefined"!==typeof t?t:self,c=u.MutationObserver||u.WebKitMutationObserver;function s(e){return function(){var t=setTimeout(n,0),r=setInterval(n,50);function n(){clearTimeout(t),clearInterval(r),e()}}}n="function"===typeof c?function(e){var t=1,r=new c(e),n=document.createTextNode("");return r.observe(n,{characterData:!0}),function(){t=-t,n.data=t}}(a):s(a),r.requestFlush=n,r.makeRequestCallFromTimer=s}).call(this,r(99))},1439:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(0),i=n.memo((function(e){var t=e.connect,r=e.src;if("undefined"!==typeof Image){var n=new Image;n.src=r,n.onload=function(){return t(n)}}return null}));i.displayName="DragPreviewImage"},1440:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(77),i=r.n(n);function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=!1,u=!1,c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.sourceId=null,this.internalMonitor=t.getMonitor()}var t,r,n;return t=e,(r=[{key:"receiveHandlerId",value:function(e){this.sourceId=e}},{key:"getHandlerId",value:function(){return this.sourceId}},{key:"canDrag",value:function(){i()(!a,"You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return a=!0,this.internalMonitor.canDragSource(this.sourceId)}finally{a=!1}}},{key:"isDragging",value:function(){if(!this.sourceId)return!1;i()(!u,"You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return u=!0,this.internalMonitor.isDraggingSource(this.sourceId)}finally{u=!1}}},{key:"subscribeToStateChange",value:function(e,t){return this.internalMonitor.subscribeToStateChange(e,t)}},{key:"isDraggingSource",value:function(e){return this.internalMonitor.isDraggingSource(e)}},{key:"isOverTarget",value:function(e,t){return this.internalMonitor.isOverTarget(e,t)}},{key:"getTargetIds",value:function(){return this.internalMonitor.getTargetIds()}},{key:"isSourcePublic",value:function(){return this.internalMonitor.isSourcePublic()}},{key:"getSourceId",value:function(){return this.internalMonitor.getSourceId()}},{key:"subscribeToOffsetChange",value:function(e){return this.internalMonitor.subscribeToOffsetChange(e)}},{key:"canDragSource",value:function(e){return this.internalMonitor.canDragSource(e)}},{key:"canDropOnTarget",value:function(e){return this.internalMonitor.canDropOnTarget(e)}},{key:"getItemType",value:function(){return this.internalMonitor.getItemType()}},{key:"getItem",value:function(){return this.internalMonitor.getItem()}},{key:"getDropResult",value:function(){return this.internalMonitor.getDropResult()}},{key:"didDrop",value:function(){return this.internalMonitor.didDrop()}},{key:"getInitialClientOffset",value:function(){return this.internalMonitor.getInitialClientOffset()}},{key:"getInitialSourceClientOffset",value:function(){return this.internalMonitor.getInitialSourceClientOffset()}},{key:"getSourceClientOffset",value:function(){return this.internalMonitor.getSourceClientOffset()}},{key:"getClientOffset",value:function(){return this.internalMonitor.getClientOffset()}},{key:"getDifferenceFromInitialOffset",value:function(){return this.internalMonitor.getDifferenceFromInitialOffset()}}])&&o(t.prototype,r),n&&o(t,n),e}()},1441:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(1408),i=r(1404),o=r(692),a=r.n(o);function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var c=function(){function e(t){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.hooks=Object(n.a)({dragSource:function(e,t){r.clearDragSource(),r.dragSourceOptions=t||null,Object(i.a)(e)?r.dragSourceRef=e:r.dragSourceNode=e,r.reconnectDragSource()},dragPreview:function(e,t){r.clearDragPreview(),r.dragPreviewOptions=t||null,Object(i.a)(e)?r.dragPreviewRef=e:r.dragPreviewNode=e,r.reconnectDragPreview()}}),this.handlerId=null,this.dragSourceRef=null,this.dragSourceOptionsInternal=null,this.dragPreviewRef=null,this.dragPreviewOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDragSource=null,this.lastConnectedDragSourceOptions=null,this.lastConnectedDragPreview=null,this.lastConnectedDragPreviewOptions=null,this.backend=t}var t,r,o;return t=e,(r=[{key:"receiveHandlerId",value:function(e){this.handlerId!==e&&(this.handlerId=e,this.reconnect())}},{key:"reconnect",value:function(){this.reconnectDragSource(),this.reconnectDragPreview()}},{key:"reconnectDragSource",value:function(){var e=this.dragSource,t=this.didHandlerIdChange()||this.didConnectedDragSourceChange()||this.didDragSourceOptionsChange();t&&this.disconnectDragSource(),this.handlerId&&(e?t&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragSource=e,this.lastConnectedDragSourceOptions=this.dragSourceOptions,this.dragSourceUnsubscribe=this.backend.connectDragSource(this.handlerId,e,this.dragSourceOptions)):this.lastConnectedDragSource=e)}},{key:"reconnectDragPreview",value:function(){var e=this.dragPreview,t=this.didHandlerIdChange()||this.didConnectedDragPreviewChange()||this.didDragPreviewOptionsChange();this.handlerId?this.dragPreview&&t&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragPreview=e,this.lastConnectedDragPreviewOptions=this.dragPreviewOptions,this.disconnectDragPreview(),this.dragPreviewUnsubscribe=this.backend.connectDragPreview(this.handlerId,e,this.dragPreviewOptions)):this.disconnectDragPreview()}},{key:"didHandlerIdChange",value:function(){return this.lastConnectedHandlerId!==this.handlerId}},{key:"didConnectedDragSourceChange",value:function(){return this.lastConnectedDragSource!==this.dragSource}},{key:"didConnectedDragPreviewChange",value:function(){return this.lastConnectedDragPreview!==this.dragPreview}},{key:"didDragSourceOptionsChange",value:function(){return!a()(this.lastConnectedDragSourceOptions,this.dragSourceOptions)}},{key:"didDragPreviewOptionsChange",value:function(){return!a()(this.lastConnectedDragPreviewOptions,this.dragPreviewOptions)}},{key:"disconnectDragSource",value:function(){this.dragSourceUnsubscribe&&(this.dragSourceUnsubscribe(),this.dragSourceUnsubscribe=void 0)}},{key:"disconnectDragPreview",value:function(){this.dragPreviewUnsubscribe&&(this.dragPreviewUnsubscribe(),this.dragPreviewUnsubscribe=void 0,this.dragPreviewNode=null,this.dragPreviewRef=null)}},{key:"clearDragSource",value:function(){this.dragSourceNode=null,this.dragSourceRef=null}},{key:"clearDragPreview",value:function(){this.dragPreviewNode=null,this.dragPreviewRef=null}},{key:"connectTarget",get:function(){return this.dragSource}},{key:"dragSourceOptions",get:function(){return this.dragSourceOptionsInternal},set:function(e){this.dragSourceOptionsInternal=e}},{key:"dragPreviewOptions",get:function(){return this.dragPreviewOptionsInternal},set:function(e){this.dragPreviewOptionsInternal=e}},{key:"dragSource",get:function(){return this.dragSourceNode||this.dragSourceRef&&this.dragSourceRef.current}},{key:"dragPreview",get:function(){return this.dragPreviewNode||this.dragPreviewRef&&this.dragPreviewRef.current}}])&&u(t.prototype,r),o&&u(t,o),e}()},1442:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(692),i=r.n(n),o=r(0),a=r(1390);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var r=[],n=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(c){i=!0,o=c}finally{try{n||null==u.return||u.return()}finally{if(i)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function c(e,t,r){var n=u(Object(o.useState)((function(){return t(e)})),2),c=n[0],s=n[1],l=Object(o.useCallback)((function(){var n=t(e);i()(c,n)||(s(n),r&&r())}),[c,e,r]);return Object(a.a)(l,[]),[c,l]}},1466:function(e,t,r){"use strict";var n=r(0),i=r(77),o=r.n(i),a=r(1405),u=r(1390),c=r(1396),s=r(1400),l=r(1440),f=r(1441);function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var r=[],n=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(c){i=!0,o=c}finally{try{n||null==u.return||u.return()}finally{if(i)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function g(e){return(g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var r=[],n=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(c){i=!0,o=c}finally{try{n||null==u.return||u.return()}finally{if(i)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function p(e){var t=Object(n.useRef)(e);t.current=e,o()(null!=e.item,"item must be defined"),o()(null!=e.item.type,"item type must be defined");var r=h(function(){var e=Object(s.a)();return[Object(n.useMemo)((function(){return new l.a(e)}),[e]),Object(n.useMemo)((function(){return new f.a(e.getBackend())}),[e])]}(),2),i=r[0],p=r[1];!function(e,t,r){var i=Object(s.a)(),a=Object(n.useMemo)((function(){return{beginDrag:function(){var r=e.current,n=r.begin,i=r.item;if(n){var a=n(t);return o()(null==a||"object"===g(a),"dragSpec.begin() must either return an object, undefined, or null"),a||i||{}}return i||{}},canDrag:function(){return"boolean"===typeof e.current.canDrag?e.current.canDrag:"function"!==typeof e.current.canDrag||e.current.canDrag(t)},isDragging:function(r,n){var i=e.current.isDragging;return i?i(t):n===r.getSourceId()},endDrag:function(){var n=e.current.end;n&&n(t.getItem(),t),r.reconnect()}}}),[]);Object(u.a)((function(){var n=d(Object(c.a)(e.current.item.type,a,i),2),o=n[0],u=n[1];return t.receiveHandlerId(o),r.receiveHandlerId(o),u}),[])}(t,i,p);var y=Object(a.a)(i,t.current.collect||function(){return{}},(function(){return p.reconnect()})),v=Object(n.useMemo)((function(){return p.hooks.dragSource()}),[p]),b=Object(n.useMemo)((function(){return p.hooks.dragPreview()}),[p]);return Object(u.a)((function(){p.dragSourceOptions=t.current.options||null,p.reconnect()}),[p]),Object(u.a)((function(){p.dragPreviewOptions=t.current.previewOptions||null,p.reconnect()}),[p]),[y,v,b]}r.d(t,"a",(function(){return p}))}}]);