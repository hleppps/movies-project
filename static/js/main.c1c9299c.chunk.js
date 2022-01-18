(this["webpackJsonpmovies-project"]=this["webpackJsonpmovies-project"]||[]).push([[0],{36:function(e,t,n){e.exports={pagination:"Pagination_pagination__1qVQW",buttons:"Pagination_buttons__Xe9rV",pages:"Pagination_pages__2bueq"}},40:function(e,t,n){e.exports={card:"FilmsListItem_card__2bnJZ",body:"FilmsListItem_body__3F3BM"}},42:function(e,t,n){e.exports={footer:"AuthModal_footer__1_RBC"}},50:function(e,t,n){e.exports={spinner:"LoadingSpinner_spinner__2ZLhv"}},51:function(e,t,n){e.exports={filmsList:"FilmsList_filmsList__1DoDb"}},52:function(e,t,n){e.exports={filters:"Filters_filters__3jkRI"}},53:function(e,t,n){e.exports={layout:"Layout_layout__2Xkal"}},59:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(13),c=n.n(s),i=(n(59),n(7)),o=n.n(i),u=n(10),l=n(8),d=(n(61),n(71)),j=n(46),p=n(73),b=n(74),f=n(77),O=n(70),h=n(42),m=n.n(h),x=n(1),g=function(e){var t=Object(a.useState)(!1),n=Object(l.a)(t,2),r=n[0],s=n[1],c=Object(a.useState)(!1),i=Object(l.a)(c,2),d=i[0],j=i[1],h=Object(a.useRef)(),g=Object(a.useRef)(),v=function(){var t=Object(u.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),j(!1),s(!0),t.next=5,e.authenticationHandler(h,g,j,s);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(p.a,{show:e.modalIsShown,onHide:e.onHideModal,children:[Object(x.jsx)(p.a.Header,{closeButton:!0,children:Object(x.jsx)(p.a.Title,{children:"Authorization"})}),Object(x.jsx)(p.a.Body,{children:Object(x.jsxs)(b.a,{"data-testid":"login-form",onSubmit:v,children:[Object(x.jsxs)(b.a.Group,{className:"mb-3",controlId:"formUsername",children:[Object(x.jsx)(b.a.Label,{children:"Username"}),Object(x.jsx)(b.a.Control,{type:"text",defaultValue:"hlep",required:!0,ref:h})]}),Object(x.jsxs)(b.a.Group,{className:"mb-3",controlId:"formPassword",children:[Object(x.jsx)(b.a.Label,{children:"Password"}),Object(x.jsx)(b.a.Control,{type:"password",defaultValue:"121212",required:!0,ref:g})]}),Object(x.jsxs)(b.a.Group,{className:m.a.footer,children:[!r&&Object(x.jsx)(f.a,{className:"w-100",type:"submit",variant:"outline-dark",children:"Sign in"}),r&&Object(x.jsx)(O.a,{className:"mx-10",animation:"grow"}),!r&&d&&Object(x.jsx)("p",{children:"Invalid username and/or password"})]})]})})]})})},v=g,y=n(22),k="https://api.themoviedb.org/3",_="a61e6e15f8aa4e533051cb627eaa2dd5",w="SEND",S="SUCCESS",F="ERROR",N="INCREASE",C="DECREASE";function P(e){return L.apply(this,arguments)}function L(){return L=Object(u.a)(o.a.mark((function e(t){var n,a,r,s=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:{},e.next=3,fetch(t,n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)}))),L.apply(this,arguments)}function I(e,t,n,a){return E.apply(this,arguments)}function E(){return(E=Object(u.a)(o.a.mark((function e(t,n,a,r){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s="".concat(k,"/discover/movie?api_key=").concat(_,"&include_video=false&page=").concat(t,"&sort_by=").concat(a,"&year=").concat(n,"&with_genres=").concat(r),e.abrupt("return",P(s));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(){return G.apply(this,arguments)}function G(){return(G=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(k,"/genre/movie/list?api_key=").concat(_),e.abrupt("return",P(t));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(){return A.apply(this,arguments)}function A(){return(A=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(k,"/authentication/token/new?api_key=").concat(_),e.next=3,P(t);case 3:return n=e.sent,e.abrupt("return",n.request_token);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e,t,n){return q.apply(this,arguments)}function q(){return(q=Object(u.a)(o.a.mark((function e(t,n,a){var r,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(k,"/authentication/token/validate_with_login?api_key=").concat(_),s={headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({username:t,password:n,request_token:a})},e.abrupt("return",P(r,s));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e){return B.apply(this,arguments)}function B(){return(B=Object(u.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(k,"/authentication/session/new?api_key=").concat(_),a={headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({request_token:t})},e.abrupt("return",P(n,a));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(e){return J.apply(this,arguments)}function J(){return(J=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(k,"/account?api_key=").concat(_,"&session_id=").concat(t),e.abrupt("return",P(n));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(e){return Y.apply(this,arguments)}function Y(){return(Y=Object(u.a)(o.a.mark((function e(t){var n,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(k,"/account/{account_id}/favorite/movies?api_key=").concat(_,"&session_id=").concat(t),e.next=3,P(n);case 3:return a=e.sent,r=a.results.map((function(e){return e.id})),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e,t,n){return W.apply(this,arguments)}function W(){return(W=Object(u.a)(o.a.mark((function e(t,n,a){var r,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r="".concat(k,"/account/{account_id}/favorite?api_key=").concat(_,"&session_id=").concat(a),s={headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({media_type:"movie",media_id:n,favorite:t})},P(r,s);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var X=n(21),Z=n.n(X),z=r.a.createContext({token:"",isLoggedIn:!1,login:function(e){},logout:function(){},userName:"",setUserName:function(e){},favoriteFilms:[],setFavoriteFilms:function(e){}}),K=function(e){var t,n,r={token:Z.a.get("token"),userName:Z.a.get("userName")};r&&(t=r.token,n=r.userName);var s=Object(a.useState)(t),c=Object(l.a)(s,2),i=c[0],d=c[1],j=Object(a.useState)(n),p=Object(l.a)(j,2),b=p[0],f=p[1],O=Object(a.useState)([]),h=Object(l.a)(O,2),m=h[0],g=h[1],v=Object(a.useCallback)(Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i){e.next=5;break}return e.next=3,U(i);case 3:t=e.sent,g(t);case 5:case"end":return e.stop()}}),e)}))),[i]);Object(a.useEffect)((function(){v()}),[v]);var y=!!i,k=Object(a.useCallback)((function(){d(null),Z.a.remove("token"),Z.a.remove("userName")}),[]),_={token:i,isLoggedIn:y,login:function(e,t){d(e),Z.a.set("token",e),Z.a.set("userName",t)},logout:k,userName:b,setUserName:f,favoriteFilms:m,setFavoriteFilms:g};return Object(x.jsx)(z.Provider,{value:_,children:e.children})},Q=z,$=n(76),ee=n(47),te=n(40),ne=n.n(te),ae=n(20),re=n(48),se=n(49);ae.b.add(re.a,se.a);var ce=function(e){var t=Object(a.useContext)(Q).isLoggedIn,n=e.isFavorite?"fas":"far";return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)($.a,{className:ne.a.card,children:[e.backdropPath&&Object(x.jsx)($.a.Img,{variant:"top",src:"".concat("https://image.tmdb.org/t/p/w500").concat(e.backdropPath),alt:e.backdropPath}),!e.backdropPath&&Object(x.jsx)($.a.Img,{variant:"top",src:"https://i.imgur.com/GIeKF0n.png"}),Object(x.jsxs)($.a.Body,{className:ne.a.body,children:[Object(x.jsx)($.a.Title,{"data-testid":"title",children:e.title}),Object(x.jsxs)($.a.Text,{"data-testid":"subtitle",children:["Rating: ",e.rating]})]}),t&&Object(x.jsx)($.a.Footer,{children:Object(x.jsx)(ee.a,{"data-testid":"favorite-icon",icon:[n,"star"],onClick:function(){e.setFavoriteFilm(e.filmId,e.isFavorite)}})})]})})},ie=n(50),oe=n.n(ie),ue=function(){return Object(x.jsx)("div",{className:oe.a.spinner})},le=n(51),de=n.n(le),je=r.a.memo((function(e){var t,n=Object(a.useContext)(Q),r=function(e,t){t?function(e){n.setFavoriteFilms((function(t){return t.filter((function(t){return t!==e}))})),V(!1,e,n.token)}(e):function(e){n.setFavoriteFilms((function(t){return[].concat(Object(y.a)(t),[e])})),V(!0,e,n.token)}(e)};return t="completed"===e.status&&e.films.length?Object(x.jsx)(d.a,{xs:1,md:2,xl:4,className:"g-4",children:e.films.map((function(e){return Object(x.jsx)(j.a,{className:"g-4",children:Object(x.jsx)(ce,{setFavoriteFilm:r,isFavorite:n.favoriteFilms.includes(e.id),filmId:e.id,backdropPath:e.backdrop_path,title:e.title,rating:e.vote_average})},e.id)}))}):"completed"!==e.status||e.films.length?Object(x.jsx)(ue,{}):Object(x.jsx)("p",{children:"No movies found by these search criteria..."}),Object(x.jsx)("div",{"data-testid":"films-list",className:de.a.filmsList,children:t})})),pe=n(2),be=n(3),fe=n(52),Oe=n.n(fe),he=["isSelected"],me=function(e){var t=e.isSelected,n=Object(be.a)(e,he);return Object(x.jsx)(b.a.Check,{"data-testid":"checkbox",id:n.id,type:"checkbox",label:n.name,checked:t,onChange:function(){n.onSelect(!t,n.id)}})},xe=function(e){var t=e.allGenresList,n=e.selectedGenresList,a=e.setGenresFilter,r=function(e,t){e&&a([].concat(Object(y.a)(n),[t])),e||a(n.filter((function(e){return e!==t})))};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(f.a,{"data-testid":"reset-genres",onClick:function(){a([])},className:"my-2 w-100",variant:"outline-secondary",children:"Show All Genres"}),Object(x.jsxs)(b.a.Group,{className:"my-2","data-testid":"genres-list",children:[!t&&Object(x.jsx)(O.a,{animation:"grow"}),t&&t.map((function(e){return Object(x.jsx)(me,{isSelected:n.includes(e.id),onSelect:r,id:e.id,name:e.name},e.id)}))]})]})},ge=n(36),ve=n.n(ge),ye=function(e){var t=function(t){e.setPageFilter(t,e.filteredPage)};return Object(x.jsxs)("div",{className:ve.a.pagination,children:[Object(x.jsxs)("div",{className:ve.a.buttons,children:[Object(x.jsx)(f.a,{"data-testid":"decrease-button",variant:"outline-secondary",className:"m-1 w-100",onClick:function(){t(C)},children:"\xab"}),Object(x.jsx)(f.a,{"data-testid":"increase-button",variant:"outline-secondary",className:"m-1 w-100",onClick:function(){t(N)},children:"\xbb"})]}),Object(x.jsxs)("p",{className:ve.a.pages,children:[Object(x.jsx)("span",{children:"Page:"})," ",e.filteredPage," of ",e.totalPages]})]})},ke=r.a.memo((function(e){return Object(x.jsxs)(b.a.Group,{className:"my-3",children:[Object(x.jsx)(b.a.Label,{children:"Release year:"}),Object(x.jsxs)(b.a.Select,{"data-testid":"year-select","aria-label":"Default select example",onChange:function(t){e.setYearFilter(t.target.value)},value:e.filteredYear,children:[Object(x.jsx)("option",{value:"2021",children:"2021"}),Object(x.jsx)("option",{value:"2020",children:"2020"}),Object(x.jsx)("option",{value:"2019",children:"2019"}),Object(x.jsx)("option",{value:"2018",children:"2018"})]})]})})),_e=function(e){return Object(x.jsx)(f.a,{"data-testid":"reset-button",className:"w-100",variant:"outline-secondary",onClick:function(){e.resetFilters()},children:"Reset Filters"})},we=r.a.memo((function(e){return Object(x.jsxs)(b.a.Group,{className:"my-3",children:[Object(x.jsx)(b.a.Label,{children:"Sort by:"}),Object(x.jsxs)(b.a.Select,{"data-testid":"sort-select","aria-label":"Default select example",onChange:function(t){e.setSortingFilter(t.target.value)},value:e.filteredSorting,children:[Object(x.jsx)("option",{value:"popularity.desc",children:"Most Popular"}),Object(x.jsx)("option",{value:"popularity.asc",children:"Least Popular"}),Object(x.jsx)("option",{value:"vote_average.desc",children:"Most Wanted"}),Object(x.jsx)("option",{value:"vote_average.asc",children:"Least Wanted"})]})]})})),Se=["totalPages","defaultFiltersState","setFilters","filters"],Fe=r.a.memo((function(e){var t=e.totalPages,n=e.defaultFiltersState,r=e.setFilters,s=e.filters,c=Object(be.a)(e,Se),i=Object(a.useCallback)((function(e,n){var a;return e===N&&(a=n===t?t:++n),e===C&&(a=1===n?1:--n),{page:a}}),[t]),o=Object(a.useCallback)((function(e){return{year:e,page:1}}),[]),u=Object(a.useCallback)((function(e){return{sorting:e,page:1}}),[]),l=Object(a.useCallback)((function(e){return{genres:e,page:1}}),[]),d=Object(a.useCallback)((function(){return n}),[n]),j=Object(a.useMemo)((function(){return{PAGE:i,YEAR:o,SORT:u,GENRES:l,RESET:d}}),[d,l,u,o,i]),p=Object(a.useCallback)((function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var s=j[e].apply(j,n);r((function(e){return Object(pe.a)(Object(pe.a)({},e),s)}))}),[r,j]),b=Object(a.useCallback)((function(e){p("GENRES",e)}),[p]);return Object(x.jsxs)("div",{"data-testid":"filters",className:Oe.a.filters,children:[Object(x.jsx)("h2",{children:"Filters:"}),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(_e,{resetFilters:function(){p("RESET")}}),Object(x.jsx)(we,{setSortingFilter:function(e){p("SORT",e)},filteredSorting:s.sorting}),Object(x.jsx)(ke,{setYearFilter:function(e){p("YEAR",e)},filteredYear:s.year}),Object(x.jsx)(xe,{allGenresList:c.allGenresList.genres,selectedGenresList:s.genres,setGenresFilter:b}),Object(x.jsx)(ye,{totalPages:t,setPageFilter:function(e,t){p("PAGE",e,t)},filteredPage:s.page})]})]})})),Ne=Fe,Ce=n(75),Pe=n(72),Le=function(e){var t=e.onShowModal,n=Object(a.useContext)(Q),r=n.isLoggedIn,s=n.logout,c=n.userName;return Object(x.jsx)(Ce.a,{bg:"dark",variant:"dark",children:Object(x.jsxs)(Pe.a,{children:[Object(x.jsx)(Ce.a.Brand,{className:"user-select-none",children:"Movies Project"}),!r&&Object(x.jsx)(f.a,{"data-testid":"login-button",variant:"outline-light",onClick:t,children:"Login"}),r&&Object(x.jsxs)(f.a,{"data-testid":"logout-button",variant:"outline-light",onClick:function(){s(!1)},children:[Object(x.jsx)("span",{children:"Hello, "}),Object(x.jsx)("span",{className:"text-decoration-underline",children:c}),Object(x.jsx)("span",{children:"!"})]})]})})},Ie=n(53),Ee=n.n(Ie),Re=function(e){return Object(x.jsxs)("div",{className:Ee.a.layout,children:[Object(x.jsx)(Le,{onShowModal:e.onShowModal,isLoggedIn:e.isLoggedIn,setIsLoggedIn:e.setIsLoggedIn}),Object(x.jsx)("main",{children:Object(x.jsx)(Pe.a,{children:e.children})})]})},Ge={data:{results:[],total_pages:0},error:null,status:"pending"},Me=function(e,t){return t.type===w?Object(pe.a)(Object(pe.a)({},Ge),{},{data:Object(pe.a)({},e.data)}):t.type===S?{data:Object(pe.a)(Object(pe.a)({},e.data),t.responseData),error:null,status:"completed"}:t.type===F?Object(pe.a)(Object(pe.a)({},Ge),{},{error:t.errorMessage,status:"completed"}):e},Ae=function(e,t){var n=Object(a.useReducer)(Me,Ge),r=Object(l.a)(n,2),s=r[0],c=r[1],i=t.page,d=t.year,j=t.sorting,p=t.genres,b=Object(a.useCallback)(Object(u.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c({type:w}),t.prev=1,t.next=4,e(i,d,j,p);case 4:n=t.sent,c({type:S,responseData:{results:n.results,total_pages:n.total_pages}}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),c({type:F,errorMessage:t.t0.message||"Something went wrong!"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),[e,i,d,j,p]);return Object(pe.a)({sendRequest:b},s)},Te={page:1,sorting:"popularity.desc",year:2021,genres:[]},qe=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(Te),i=Object(l.a)(s,2),p=i[0],b=i[1],f=Ae(I,p),O=f.sendRequest,h=f.status,m=f.data,g=Object(a.useState)(!1),y=Object(l.a)(g,2),k=y[0],_=y[1],w=Object(a.useContext)(Q),S=function(){return _(!1)},F=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(u.a)(o.a.mark((function e(t,n,a,r){var s,c,i,u,l,d,j;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.current.value,c=n.current.value,e.next=4,M();case 4:return i=e.sent,e.next=7,T(s,c,i);case 7:if(!e.sent.success){e.next=27;break}return e.next=11,D(i);case 11:if(!(u=e.sent).success){e.next=25;break}return l=u.session_id,e.next=16,H(l);case 16:return d=e.sent,e.next=19,U(l);case 19:j=e.sent,w.setUserName(d.username),w.setFavoriteFilms(j),w.login(l,d.username,j),r(!1),S();case 25:e.next=29;break;case 27:r(!1),a(!0);case 29:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){F()}),[]),Object(a.useEffect)((function(){O()}),[O]);var C=document.getElementById("overlays");return Object(x.jsxs)(x.Fragment,{children:[c.a.createPortal(Object(x.jsx)(v,{modalIsShown:k,onHideModal:S,authenticationHandler:N}),C),Object(x.jsx)(Re,{onShowModal:function(){return _(!0)},children:Object(x.jsxs)(d.a,{children:[Object(x.jsx)(j.a,{xs:"5",md:"4",lg:"3",children:Object(x.jsx)(Ne,{status:h,allGenresList:n,totalPages:m.total_pages,filters:p,setFilters:b,defaultFiltersState:Te})}),Object(x.jsx)(j.a,{children:Object(x.jsx)(je,{status:h,films:m.results})})]})})]})};c.a.render(Object(x.jsx)(K,{children:Object(x.jsx)(qe,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.c1c9299c.chunk.js.map