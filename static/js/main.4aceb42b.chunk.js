(this["webpackJsonpreact-movies-app-with-redux"]=this["webpackJsonpreact-movies-app-with-redux"]||[]).push([[0],{25:function(e,t,i){},26:function(e,t,i){},52:function(e,t,i){"use strict";i.r(t);var a,n=i(1),c=i.n(n),s=i(4),o=i.n(s),r=(i(25),i.p,i(26),i(0)),l=function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("h1",{className:"heading",children:e.name})})},d=(i(7),function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("input",{className:"inputele",onChange:e.updateInputName,placeholder:" Seach for movies"})})}),v=i(3),u=(i(32),i(20)),j=i(5),m=i(19),f=i.n(m);localStorage.getItem("favo-movies-list")?(a=JSON.parse(localStorage.getItem("favo-movies-list")),console.log(a,"in halallal")):a=[];var b={movieList:[],inputVal:"",favMovieList:a},h=Object(j.b)({name:"counter",initialState:b,reducers:{addMovies:function(e,t){e.movieList=t.payload},updateInputVal:function(e,t){e.inputVal=t.payload},addToFavMovieList:function(e,t){console.log(t.payload,"in reducer"),e.favMovieList=[].concat(Object(u.a)(e.favMovieList),[t.payload])},removeMovieFromFavList:function(e,t){console.log(t.payload,"ggg");var i=e.favMovieList.filter((function(e){return e.imdbID!==t.payload.imdbID}));console.log(i,"in reducer remove"),e.favMovieList=i}}}),x=h.actions,p=x.addMovies,g=x.updateInputVal,O=x.addToFavMovieList,w=x.removeMovieFromFavList,L=h.reducer,F=function(e){var t=e.Favourite;return Object(r.jsx)(r.Fragment,{children:e.movieList.map((function(i,a,n){return Object(r.jsxs)("div",{className:"movie-card m-3",children:[Object(r.jsx)("img",{src:i.Poster,alt:"movie",className:"movie-card"}),Object(r.jsx)("div",{className:"overlay d-flex flex-row align-items-center justify-content-center",onClick:function(){return e.renderToFavourite(i)},children:Object(r.jsx)(t,{})})]})}))})},N=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{className:"para",children:"Add to Favourites"}),Object(r.jsxs)("span",{children:[Object(r.jsx)("i",{class:"bi bi-heart-fill"}),Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"red",className:"bi bi-heart-fill",viewBox:"0 0 16 16",children:Object(r.jsx)("path",{fillRule:"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"})})]})]})},M=function(){return Object(r.jsxs)("div",{className:"d-flex flex-row justify-content-center align-items-center",children:[Object(r.jsx)("p",{className:"para",children:"Remove from Favourites"}),Object(r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"white",class:"bi bi-x-square",viewBox:"0 0 16 16",children:[Object(r.jsx)("path",{d:"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}),Object(r.jsx)("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})]})]})},y=function(){var e=Object(v.c)((function(e){return e.movieList})),t=e.movieList,i=e.inputVal,a=e.favMovieList,c=Object(v.b)();console.log(t,i,a,"in main page");var s="http://www.omdbapi.com/?s=".concat(i,"&apikey=c5ea1517");Object(n.useEffect)((function(){c(function(e){return function(t){f.a.get(e).then((function(e){console.log(e,"IN fetch"),e.data.Search&&t(p(e.data.Search))})).catch((function(e){console.log(e)}))}}(s))}),[i]);return Object(r.jsxs)("div",{className:"container-fluid main-app",children:[Object(r.jsxs)("div",{className:"d-flex flex-row justify-content-between align-items-center ",children:[Object(r.jsx)(l,{name:"Movies"}),Object(r.jsx)(d,{updateInputName:function(e){c(g(e.target.value))}})]}),Object(r.jsx)("div",{className:"row ",children:Object(r.jsx)("div",{className:"d-flex flex-row justify-content-start align-items-center movie-list ",children:Object(r.jsx)(F,{movieList:t,Favourite:N,renderToFavourite:function(e){c(O(e)),localStorage.setItem("favo-movies-list",JSON.stringify(a))}})})}),Object(r.jsx)("div",{className:"d-flex flex-column align-items-start ml-4",children:Object(r.jsx)(l,{name:"Favourite Movies"})}),Object(r.jsx)("div",{className:"row ",children:Object(r.jsx)("div",{className:" d-flex flex-row justify-content-start align-items-center movie-list",children:Object(r.jsx)(F,{movieList:a,Favourite:M,renderToFavourite:function(e){c(w(e));var t=a.filter((function(t){return t.imdbID!==e.imdbID}));localStorage.setItem("favo-movies-list",JSON.stringify(t))}})})})]})};var I=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(y,{})})},S=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,53)).then((function(t){var i=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;i(e),a(e),n(e),c(e),s(e)}))},T=Object(j.a)({reducer:{movieList:L}});o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(v.a,{store:T,children:Object(r.jsx)(I,{})})}),document.getElementById("root")),S()},7:function(e,t,i){}},[[52,1,2]]]);
//# sourceMappingURL=main.4aceb42b.chunk.js.map