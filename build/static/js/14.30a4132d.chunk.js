(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[14],{1406:function(e,t,n){"use strict";var a=n(16),r=n.n(a),c=n(0),l=n.n(c),o=n(178),i=n(479),d=n(69),s=n(481);t.a=function(e){var t=Object(d.b)().environments.currentEnvironment,n=Object(c.useState)(!1),a=r()(n,2),u=a[0],m=a[1];return t?l.a.createElement(l.a.Fragment,null,l.a.createElement(o.c,Object.assign({},e,{onClick:function(){return m(!0)}}),l.a.createElement(o.a,null,t.name,l.a.createElement(o.b,{trailing:!0,icon:l.a.createElement(i.a,null)}))),l.a.createElement(s.a,{open:u,onClose:function(){m(!1)}})):null}},1622:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(16),l=n.n(c),o=n(7),i=n.n(o),d=n(0),s=n.n(d),u=n(65),m=n(227),b=n(4),f=n.n(b),v=n(106),g=n.n(v),O=n(11),E=n(1406),j=n(163),h=n.n(j),p=n(21),I=n(8),S=n(18),C=n(38);function L(){var e=r()(["Last modified: {time}."]);return L=function(){return e},e}function y(){var e=r()(["Created by: {user}."]);return y=function(){return e},e}var k=O.a.ns("app-headless-cms/admin/contents/data-list"),M=Object(I.a)({alignItems:"flex-end !important",justifyContent:"center !important"},"label:rightAlign;"),N=Object(I.a)({minHeight:"66px !important"},"label:listItemMinHeight;"),w=function(e){return e.value?e:f()(f()({},e),{},{value:"Untitled"})},R=function(e){var t=e.contentModel,n=e.dataList;return s.a.createElement(S.a,Object.assign({},n,{title:t.pluralizedName,actions:s.a.createElement(E.a,{style:{justifyContent:"flex-end"}})}),(function(e){var t=e.data,n=e.isSelected,a=e.select;return s.a.createElement(S.b,{"data-testid":"default-data-list"},t.map((function(e){return s.a.createElement(S.d,{key:e.id,className:N,selected:n(e)},s.a.createElement(S.g,{onClick:function(){return a(e)}},s.a.createElement(C.a,{value:w(e.meta.title)}),s.a.createElement(S.i,null,e.createdBy&&e.createdBy.firstName&&s.a.createElement(s.a.Fragment,null,k(y())({user:e.createdBy.firstName})," "),k(L())({time:s.a.createElement(h.a,{datetime:e.savedOn})}))),s.a.createElement(S.f,{className:M},s.a.createElement(p.a,{use:"subtitle2"},g()(e.meta.status)," (v",e.meta.version,")")))})))}))},T=n(9),F=n.n(T),_=n(26),z=n(15),B=n(72),D=n(41),U=n(69),x=n(140),A=n(104),P=Object(z.a)("div",{target:"e46f7jz0",label:"DetailsContainer"})({overflow:"hidden",position:"relative",nav:{backgroundColor:"var(--mdc-theme-surface)"}}),q=function(e){var t=e.contentModel,n=e.dataList,a=Object(_.e)(),r=a.history,c=a.location,o=Object(D.a)().showSnackbar,i=Object(d.useState)({}),u=l()(i,2),m=u[0],b=u[1],f=Object(A.a)(),v=Object(d.useState)(f.getLocale().id),g=l()(v,2),O=g[0],E=g[1],j=Object(d.useState)(!1),h=l()(j,2),p=h[0],I=h[1],S=new URLSearchParams(c.search),C=S.get("id"),L=Object(d.useMemo)((function(){return{READ_CONTENT:Object(x.g)(t),LIST_REVISIONS:Object(x.e)(t)}}),[t.modelId]),y=L.READ_CONTENT,k=L.LIST_REVISIONS,M=Object(U.d)(y,{variables:{id:C},skip:!C,onCompleted:function(e){var t=F()(e,"content.error.message");t&&(S.delete("id"),r.push({search:S.toString()}),o(t))}}),N=M.data,w=M.loading,R=Object(d.useCallback)((function(){return O}),[O]),T=Object(d.useCallback)((function(){return w||p}),[p,w]),z=F()(N,"content.data")||{},q=F()(z,"meta.parent"),H=Object(U.d)(k,{skip:!q,variables:{id:q}});return s.a.createElement(P,null,s.a.createElement("test-id",{"data-testid":"cms-content-details"},Object(B.d)("cms-content-details",{getLocale:R,setLocale:E,setLoading:I,getLoading:T,dataList:n,content:z,contentModel:t,revisionsList:H,state:m,setState:b})))},H=n(80),J=n.n(H),V=n(14),$=n.n(V),G=n(466);function K(){var e=r()(["\n    query getContentByModelId($modelId: String) {\n        getContentModel(where: { modelId: $modelId }) {\n            data {\n                id\n                modelId\n                titleFieldId\n                pluralizedModelId\n                name\n                pluralizedName\n                fields {\n                    ","\n                }\n                layout\n            }\n            error {\n                code\n                message\n                data\n            }\n        }\n    }\n"]);return K=function(){return e},e}var Q=$()(K(),G.a),W=n(188);function X(){var e=r()(['Could not load content for "{modelId}" model. Redirecting...']);return X=function(){return e},e}var Y=O.a.ns("app-headless-cms/admin/content"),Z=function(e){var t=e.contentModel,n=Object(U.a)(),a=Object(_.e)().history,r=Object(d.useMemo)((function(){return Object(x.d)(t)}),[t.modelId]),c=new URLSearchParams(location.search),l={};if(c.get("search")){var o=t.titleFieldId+"_contains";l={where:i()({},o,c.get("search"))}}var b=Object(m.a)({client:n,query:r,variables:l,getData:function(e){return J()(e,"content.data")},getMeta:function(e){return J()(e,"content.meta")},getError:function(e){return J()(e,"content.error")}});return s.a.createElement(s.a.Fragment,null,s.a.createElement(u.c,null,s.a.createElement(u.a,{span:4},s.a.createElement(R,{dataList:b,contentModel:t})),s.a.createElement(u.b,{span:8},s.a.createElement(q,{dataList:b,contentModel:t}))),s.a.createElement(W.a,{"data-testid":"new-record-button",onClick:function(){var e=new URLSearchParams(location.search);e.delete("id"),a.push({search:e.toString()})}}))};t.default=function(){var e=Object(_.e)().match,t=Object(d.useState)(),n=l()(t,2),a=n[0],r=n[1],c=Object(_.e)().history,o=J()(e,"params.modelId"),i=Object(D.a)().showSnackbar;return Object(U.d)(Q,{skip:!o,variables:{modelId:o},onCompleted:function(e){var t=J()(e,"getContentModel.data");if(t)return r(t);c.push("/cms/content-models"),i(Y(X())({modelId:o}))}}),a?s.a.createElement(Z,{contentModel:a,key:a.modelId}):null}}}]);