(this["webpackJsonpmemory-card-game"]=this["webpackJsonpmemory-card-game"]||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){"use strict";t.r(n);var c=t(1),i=t.n(c),a=t(6),r=t.n(a),o=t(7),d=t(2),s=[{name:t.p+"static/media/001-unicorn.551bafb9.png",id:0,text:"mischievous unicorn"},{name:t.p+"static/media/002-unicorn-1.22224fe1.png",id:1,text:"sleeping unicorn"},{name:t.p+"static/media/003-unicorn-2.5d34bf85.png",id:2,text:"winking unicorn"},{name:t.p+"static/media/004-unicorn-3.d51d2456.png",id:3,text:"crying unicorn"},{name:t.p+"static/media/005-unicorn-4.0e4c040b.png",id:4,text:"unicorn mermaid"},{name:t.p+"static/media/006-unicorn-5.f8f59cc0.png",id:5,text:"dancing unicorn"},{name:t.p+"static/media/007-unicorn-6.487e8f24.png",id:6,text:"rich unicorn"},{name:t.p+"static/media/008-unicorn-7.538450fd.png",id:7,text:"sweaty unicorn"},{name:t.p+"static/media/009-unicorn-8.8781dcb4.png",id:8,text:"shocked unicorn"},{name:t.p+"static/media/010-unicorn-9.6f672a5a.png",id:9,text:"fancy unicorn"},{name:t.p+"static/media/011-unicorn-11.6db794ec.png",id:10,text:"curious unicorn"},{name:t.p+"static/media/012-unicorn-12.0550d617.png",id:11,text:"joyful unicorn"},{name:t.p+"static/media/013-unicorn-13.e2b490b9.png",id:12,text:"athletic unicorn"},{name:t.p+"static/media/014-unicorn-14.0bc0d2b9.png",id:13,text:"sick unicorn"},{name:t.p+"static/media/015-unicorn-15.7a2d4492.png",id:14,text:"cool unicorn"},{name:t.p+"static/media/016-unicorn-16.9e4eaa63.png",id:15,text:"unicorn in love"},{name:t.p+"static/media/017-unicorn-17.36d64d4b.png",id:16,text:"angry unicorn"},{name:t.p+"static/media/018-unicorn-10.be887135.png",id:17,text:"haunted unicorn"},{name:t.p+"static/media/019-unicorn-18.4e630adb.png",id:18,text:"annoyed unicorn"},{name:t.p+"static/media/020-unicorn-19.53ee8757.png",id:19,text:"unicorn eating pizza"}],u=t(0),m=function(e){var n=e.currentScore,t=e.bestScore,c=e.gameOver;return Object(u.jsxs)("div",{className:"Scoreboard",children:[Object(u.jsxs)("div",{className:"score",children:["Current Score: ",n]}),Object(u.jsxs)("div",{className:"score",children:["Best Score: ",t]}),Object(u.jsx)("div",{className:"announcement",children:c})]})},p=function(){var e=Object(c.useState)(s),n=Object(d.a)(e,2),t=n[0],i=n[1],a=Object(c.useState)([]),r=Object(d.a)(a,2),p=r[0],b=r[1],j=Object(c.useState)(0),l=Object(d.a)(j,2),x=l[0],h=l[1],g=Object(c.useState)(0),O=Object(d.a)(g,2),f=O[0],v=O[1],w=Object(c.useState)(""),y=Object(d.a)(w,2),S=y[0],k=y[1],N=function(){for(var e=t.length-1;e>0;e--){var n=Math.floor(Math.random()*(e+1)),c=t[e];t[e]=t[n],t[n]=c}i(t)};return Object(u.jsxs)("div",{className:"Game",children:[Object(u.jsx)(m,{currentScore:x,bestScore:f,gameOver:S}),Object(u.jsx)("div",{className:"cardDisplay",children:t.map((function(e,n){return Object(u.jsx)("div",{className:"card",onClick:function(){return e=n,b([].concat(Object(o.a)(p),[t[e].id])),void(p.includes(t[e].id)?(k("Game Over! You chose the ".concat(t[e].text," twice!")),x>f&&v(x),h(0),b([])):(k("Keep playing to beat your best score!"),N(),h(x+1)));var e},children:Object(u.jsx)("img",{src:e.name,alt:e.text})},"unicorn-".concat(e.id))}))})]})};t(13);var b=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Memory Card Game"}),Object(u.jsx)("h3",{children:"Can you choose all 20 unicorns without choosing the same unicorn twice?"}),Object(u.jsx)(p,{}),Object(u.jsx)("footer",{children:Object(u.jsxs)("div",{id:"icon",children:["Icons made by"," ",Object(u.jsx)("a",{href:"https://www.flaticon.com/authors/freepik",title:"Freepik",children:"Freepik"})," ","from"," ",Object(u.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:"www.flaticon.com"})]})})]})};r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.65b201b9.chunk.js.map