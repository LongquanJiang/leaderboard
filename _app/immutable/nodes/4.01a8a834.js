import{s as Pe,m as be,r as Me,c as ce,o as Oe,d as X,b as $e,h as Ee,n as re}from"../chunks/scheduler.2739a3c5.js";import{S as qe,i as ze,s as T,g as D,r as x,c as V,h as $,j,f as r,x as oe,G as Ge,u as ee,k as b,D as le,a as k,y as E,v as te,z as pe,t as Q,b as Ke,d as W,w as ae,H as Se,e as ge,F as Fe,p as Ye,C as _e,m as se,n as ne,o as Je}from"../chunks/index.2bd5a6d6.js";import{A as Qe,a as We,b as Xe,c as Ze,S as xe,l as et,e as we,s as ke,p as Le,d as tt,g as at,T as lt,f as ye,h as st,D as nt,t as Ie,i as Ne}from"../chunks/tabulator_esm.c0f78d75.js";import{p as rt}from"../chunks/stores.3b0ea2a8.js";import{a as Y,c as Te,t as he,b as ot}from"../chunks/lastParsedTable.42dbd126.js";import{m as Ve}from"../chunks/marked.esm.ed0f3e9f.js";import{f as ve}from"../chunks/index.9075ae21.js";const{document:Be}=at;function it(s){let e,t,l,o,y,d,u,v,m,A,R,c,p,I,H=s[9]&&s[9].newLeaderboards.find(s[13])!=null,F,B,P,G=s[9]&&s[9].newColumns.find(s[12])!=null,U,M,q,K;t=new nt({props:{datasetName:s[8].params.db}});let C=s[1]&&s[0]&&je(s),L=s[2]&&Re(s);function i(n,_){return n[0]==null?ut:ft}let N=i(s),g=N(s),w=H&&Ue(s),h=G&&Ae();return{c(){e=D("div"),x(t.$$.fragment),l=T(),C&&C.c(),o=T(),y=D("div"),d=T(),u=D("div"),L&&L.c(),m=T(),A=D("div"),R=T(),c=D("div"),p=D("div"),g.c(),I=T(),w&&w.c(),F=T(),B=D("input"),P=T(),h&&h.c(),this.h()},l(n){e=$(n,"DIV",{class:!0});var _=j(e);ee(t.$$.fragment,_),l=V(_),C&&C.l(_),o=V(_),y=$(_,"DIV",{class:!0}),j(y).forEach(r),d=V(_),u=$(_,"DIV",{class:!0});var O=j(u);L&&L.l(O),O.forEach(r),_.forEach(r),m=V(n),A=$(n,"DIV",{class:!0}),j(A).forEach(r),R=V(n),c=$(n,"DIV",{id:!0,class:!0});var z=j(c);p=$(z,"DIV",{class:!0});var ie=j(p);g.l(ie),ie.forEach(r),I=V(z),w&&w.l(z),F=V(z),B=$(z,"INPUT",{type:!0,class:!0,placeholder:!0,name:!0,id:!0}),P=V(z),h&&h.l(z),z.forEach(r),this.h()},h(){b(y,"class","divider w-[50%] mx-auto"),b(u,"class","prose text-justify mx-auto"),b(e,"class",""),b(A,"class","divider w-[50%] mx-auto"),b(p,"class","font-bold my-auto mx-20 text-2xl"),b(B,"type","text"),b(B,"class","input input-primary input-sm w-60 my-auto"),b(B,"placeholder","Filter 🔎"),b(B,"name","filter"),b(B,"id","filter"),le(B,"hidden",s[0]==null),b(c,"id","leaderboard-header"),b(c,"class","flex justify-center my-4")},m(n,_){k(n,e,_),te(t,e,null),E(e,l),C&&C.m(e,null),E(e,o),E(e,y),E(e,d),E(e,u),L&&L.m(u,null),k(n,m,_),k(n,A,_),k(n,R,_),k(n,c,_),E(c,p),g.m(p,null),E(c,I),w&&w.m(c,null),E(c,F),E(c,B),s[16](B),E(c,P),h&&h.m(c,null),M=!0,q||(K=pe(B,"input",s[17]),q=!0)},p(n,_){const O={};_&256&&(O.datasetName=n[8].params.db),t.$set(O),n[1]&&n[0]?C?C.p(n,_):(C=je(n),C.c(),C.m(e,o)):C&&(C.d(1),C=null),n[2]?L?L.p(n,_):(L=Re(n),L.c(),L.m(u,null)):L&&(L.d(1),L=null),N===(N=i(n))&&g?g.p(n,_):(g.d(1),g=N(n),g&&(g.c(),g.m(p,null))),_&768&&(H=n[9]&&n[9].newLeaderboards.find(n[13])!=null),H?w?w.p(n,_):(w=Ue(n),w.c(),w.m(c,F)):w&&(w.d(1),w=null),(!M||_&1)&&le(B,"hidden",n[0]==null),_&768&&(G=n[9]&&n[9].newColumns.find(n[12])!=null),G?h||(h=Ae(),h.c(),h.m(c,null)):h&&(h.d(1),h=null)},i(n){M||(W(t.$$.fragment,n),n&&Ee(()=>{M&&(v||(v=_e(e,ve,{},!0)),v.run(1))}),n&&Ee(()=>{M&&(U||(U=_e(c,ve,{},!0)),U.run(1))}),M=!0)},o(n){Q(t.$$.fragment,n),n&&(v||(v=_e(e,ve,{},!1)),v.run(0)),n&&(U||(U=_e(c,ve,{},!1)),U.run(0)),M=!1},d(n){n&&(r(e),r(m),r(A),r(R),r(c)),ae(t),C&&C.d(),L&&L.d(),n&&v&&v.end(),g.d(),w&&w.d(),s[16](null),h&&h.d(),n&&U&&U.end(),q=!1,K()}}}function dt(s){let e,t='<div class="flex justify-center"><span class="loading loading-infinity loading-lg text-primary"></span></div>';return{c(){e=D("div"),e.innerHTML=t,this.h()},l(l){e=$(l,"DIV",{class:!0,"data-svelte-h":!0}),oe(e)!=="svelte-rhkr8p"&&(e.innerHTML=t),this.h()},h(){b(e,"class","h-screen w-screen flex flex-col justify-center")},m(l,o){k(l,e,o)},p:re,i:re,o:re,d(l){l&&r(e)}}}function je(s){let e,t,l,o=s[1].name+"",y,d,u,v,m,A,R;return{c(){e=D("main"),t=D("h1"),l=se("Dataset: "),y=se(o),d=T(),u=D("h5"),v=se("Dataset URL: "),m=D("a"),A=se("Link"),this.h()},l(c){e=$(c,"MAIN",{class:!0});var p=j(e);t=$(p,"H1",{});var I=j(t);l=ne(I,"Dataset: "),y=ne(I,o),I.forEach(r),d=V(p),u=$(p,"H5",{});var H=j(u);v=ne(H,"Dataset URL: "),m=$(H,"A",{href:!0});var F=j(m);A=ne(F,"Link"),F.forEach(r),H.forEach(r),p.forEach(r),this.h()},h(){b(m,"href",R=s[1].datasetUrl),b(e,"class","prose text-justify mx-auto mt-16")},m(c,p){k(c,e,p),E(e,t),E(t,l),E(t,y),E(e,d),E(e,u),E(u,v),E(u,m),E(m,A)},p(c,p){p&2&&o!==(o=c[1].name+"")&&Je(y,o),p&2&&R!==(R=c[1].datasetUrl)&&b(m,"href",R)},d(c){c&&r(e)}}}function Re(s){let e,t;return{c(){e=new Se(!1),t=ge(),this.h()},l(l){e=Fe(l,!1),t=ge(),this.h()},h(){e.a=t},m(l,o){e.m(s[2],l,o),k(l,t,o)},p(l,o){o&4&&e.p(l[2])},d(l){l&&(r(t),e.d())}}}function ft(s){let e;return{c(){e=se("Leaderboard")},l(t){e=ne(t,"Leaderboard")},m(t,l){k(t,e,l)},p:re,d(t){t&&r(e)}}}function ut(s){let e,t,l,o="Submit a new leaderboard",y,d;return{c(){e=se(`No Leaderboard for this dataset yet

				`),t=D("div"),l=D("button"),l.textContent=o,this.h()},l(u){e=ne(u,`No Leaderboard for this dataset yet

				`),t=$(u,"DIV",{class:!0});var v=j(t);l=$(v,"BUTTON",{class:!0,"data-svelte-h":!0}),oe(l)!=="svelte-o9blqd"&&(l.textContent=o),v.forEach(r),this.h()},h(){b(l,"class","btn btn-accent btn-wide"),b(t,"class","flex justify-center")},m(u,v){k(u,e,v),k(u,t,v),E(t,l),y||(d=pe(l,"click",s[14]),y=!0)},p:re,d(u){u&&(r(e),r(t)),y=!1,d()}}}function Ue(s){let e,t,l="Delete",o,y;return{c(){e=D("div"),t=D("button"),t.textContent=l,this.h()},l(d){e=$(d,"DIV",{class:!0});var u=j(e);t=$(u,"BUTTON",{class:!0,"data-svelte-h":!0}),oe(t)!=="svelte-ive5qc"&&(t.textContent=l),u.forEach(r),this.h()},h(){b(t,"class","btn btn-warning"),b(e,"class","my-auto mx-4")},m(d,u){k(d,e,u),E(e,t),o||(y=pe(t,"click",s[15]),o=!0)},p:re,d(d){d&&r(e),o=!1,y()}}}function Ae(s){let e,t="Right click on your new column to delete it";return{c(){e=D("div"),e.textContent=t,this.h()},l(l){e=$(l,"DIV",{class:!0,"data-svelte-h":!0}),oe(e)!=="svelte-t5lca8"&&(e.textContent=t),this.h()},h(){b(e,"class","mx-4 italic text-xs my-auto text-gray-400")},m(l,o){k(l,e,o)},d(l){l&&r(e)}}}function He(s){let e,t;return{c(){e=new Se(!1),t=ge(),this.h()},l(l){e=Fe(l,!1),t=ge(),this.h()},h(){e.a=t},m(l,o){e.m(s[3],l,o),k(l,t,o)},p(l,o){o&8&&e.p(l[3])},d(l){l&&(r(t),e.d())}}}function mt(s){let e,t,l,o,y,d,u,v,m,A="+",R,c,p,I,H="+",F,B,P,G,U,M,q,K,C,L,i,N,g,w,h,n,_,O,z,ie;const Ce=[dt,it],J=[];function De(a,f){return a[6]?0:1}e=De(s),t=J[e]=Ce[e](s);let S=s[3]&&He(s);return C=new Qe({props:{dataset:s[8].params.db+"/"+s[8].params.dataset}}),i=new We({props:{dataset:s[8].params.db+"/"+s[8].params.dataset}}),g=new Xe({props:{dataset:s[8].params.db+"/"+s[8].params.dataset}}),h=new Ze({props:{dataset:s[8].params.db+"/"+s[8].params.dataset}}),_=new xe({}),{c(){t.c(),l=T(),o=D("div"),y=D("div"),d=D("div"),u=T(),v=D("div"),m=D("button"),m.textContent=A,c=T(),p=D("div"),I=D("button"),I.textContent=H,B=T(),P=D("div"),S&&S.c(),G=T(),U=D("div"),M=T(),q=D("link"),K=T(),x(C.$$.fragment),L=T(),x(i.$$.fragment),N=T(),x(g.$$.fragment),w=T(),x(h.$$.fragment),n=T(),x(_.$$.fragment),this.h()},l(a){t.l(a),l=V(a),o=$(a,"DIV",{id:!0,class:!0});var f=j(o);y=$(f,"DIV",{class:!0});var Z=j(y);d=$(Z,"DIV",{}),j(d).forEach(r),Z.forEach(r),u=V(f),v=$(f,"DIV",{class:!0});var de=j(v);m=$(de,"BUTTON",{class:!0,"data-svelte-h":!0}),oe(m)!=="svelte-9l0pn5"&&(m.textContent=A),de.forEach(r),f.forEach(r),c=V(a),p=$(a,"DIV",{class:!0});var fe=j(p);I=$(fe,"BUTTON",{class:!0,"data-svelte-h":!0}),oe(I)!=="svelte-11yytkm"&&(I.textContent=H),fe.forEach(r),B=V(a),P=$(a,"DIV",{class:!0});var ue=j(P);S&&S.l(ue),ue.forEach(r),G=V(a),U=$(a,"DIV",{class:!0}),j(U).forEach(r),M=V(a);const me=Ge("svelte-1256386",Be.head);q=$(me,"LINK",{href:!0,rel:!0}),me.forEach(r),K=V(a),ee(C.$$.fragment,a),L=V(a),ee(i.$$.fragment,a),N=V(a),ee(g.$$.fragment,a),w=V(a),ee(h.$$.fragment,a),n=V(a),ee(_.$$.fragment,a),this.h()},h(){b(y,"class","overflow-x-scroll w-full"),b(m,"class","btn btn-secondary h-full"),b(v,"class","mx-2 flex items-center justify-center bg-reg-400"),b(o,"id","leaderboard-wrapper"),b(o,"class",R=be(`w-[80%] mx-auto ${s[7]} flex`)+" svelte-1w85bai"),le(o,"hidden",s[0]==null),b(I,"class","btn btn-primary w-full"),b(p,"class",F=be(`my-2 w-[80%] mx-auto ${s[7]}`)+" svelte-1w85bai"),le(p,"hidden",s[0]==null),b(P,"class","prose text-justify mx-auto"),b(U,"class","my-20"),b(q,"href","https://unpkg.com/tabulator-tables@5.5.0/dist/css/tabulator_bootstrap5.min.css"),b(q,"rel","stylesheet")},m(a,f){J[e].m(a,f),k(a,l,f),k(a,o,f),E(o,y),E(y,d),s[18](d),E(o,u),E(o,v),E(v,m),k(a,c,f),k(a,p,f),E(p,I),k(a,B,f),k(a,P,f),S&&S.m(P,null),k(a,G,f),k(a,U,f),k(a,M,f),E(Be.head,q),k(a,K,f),te(C,a,f),k(a,L,f),te(i,a,f),k(a,N,f),te(g,a,f),k(a,w,f),te(h,a,f),k(a,n,f),te(_,a,f),O=!0,z||(ie=[pe(m,"click",s[10]),pe(I,"click",s[11])],z=!0)},p(a,[f]){let Z=e;e=De(a),e===Z?J[e].p(a,f):(Ye(),Q(J[Z],1,1,()=>{J[Z]=null}),Ke(),t=J[e],t?t.p(a,f):(t=J[e]=Ce[e](a),t.c()),W(t,1),t.m(l.parentNode,l)),(!O||f&128&&R!==(R=be(`w-[80%] mx-auto ${a[7]} flex`)+" svelte-1w85bai"))&&b(o,"class",R),(!O||f&129)&&le(o,"hidden",a[0]==null),(!O||f&128&&F!==(F=be(`my-2 w-[80%] mx-auto ${a[7]}`)+" svelte-1w85bai"))&&b(p,"class",F),(!O||f&129)&&le(p,"hidden",a[0]==null),a[3]?S?S.p(a,f):(S=He(a),S.c(),S.m(P,null)):S&&(S.d(1),S=null);const de={};f&256&&(de.dataset=a[8].params.db+"/"+a[8].params.dataset),C.$set(de);const fe={};f&256&&(fe.dataset=a[8].params.db+"/"+a[8].params.dataset),i.$set(fe);const ue={};f&256&&(ue.dataset=a[8].params.db+"/"+a[8].params.dataset),g.$set(ue);const me={};f&256&&(me.dataset=a[8].params.db+"/"+a[8].params.dataset),h.$set(me)},i(a){O||(W(t),W(C.$$.fragment,a),W(i.$$.fragment,a),W(g.$$.fragment,a),W(h.$$.fragment,a),W(_.$$.fragment,a),O=!0)},o(a){Q(t),Q(C.$$.fragment,a),Q(i.$$.fragment,a),Q(g.$$.fragment,a),Q(h.$$.fragment,a),Q(_.$$.fragment,a),O=!1},d(a){a&&(r(l),r(o),r(c),r(p),r(B),r(P),r(G),r(U),r(M),r(K),r(L),r(N),r(w),r(n)),J[e].d(a),s[18](null),S&&S.d(),r(q),ae(C,a),ae(i,a),ae(g,a),ae(h,a),ae(_,a),z=!1,Me(ie)}}}function ct(s,e,t){let l,o,y,d,u;ce(s,Y,i=>t(19,l=i)),ce(s,Ie,i=>t(20,o=i)),ce(s,Ne,i=>t(21,y=i)),ce(s,rt,i=>t(8,d=i)),ce(s,Te,i=>t(9,u=i));const v=lt;let m,A,R,c,p,I,H=!0,F="";Oe(async()=>{document.body.onclick=N=>{let g=document.getElementsByClassName("delete-column-button");for(let w=0;w<g.length;w++)g[w].remove()},X(Y,l=null,l);const i=await et(d.params);if(t(0,m=i.parsedTable),t(1,A=i.prefaceData),t(2,R=i.parsedInfo),t(3,c=i.parsedFooter),t(7,F="fade-in"),m){let N=ye();N=we(m,N);try{X(Y,l=new v(p,{data:m,layout:"fitColumns",height:"500",reactiveData:!0,columns:N,movableColumns:!0}),l),ke(d)}catch{console.log("some error occured while loading table's data; likely got cancelled"),X(Y,l=null,l)}}else if(u){let N=u;if(N.newLeaderboards.find(h=>h.dataset==d.params.db+"/"+d.params.dataset))console.log("Leaderboard found in pr changes cookie");else{ot("No leaderboard found","There is no leaderboard for this dataset"),t(6,H=!1),Ie.set(!1),Ne.set(!1);return}const w=Ve.parse(N.newLeaderboards[N.newLeaderboards.length-1].data,{mangle:!1,headerIds:!1});if(t(0,m=Le(w).results[0]),m!=null){console.log("Table found in pr changes cookie");let h=ye();h=we(m,h);try{X(Y,l=new v(p,{data:m,layout:"fitColumns",height:"500",reactiveData:!0,columns:h,movableColumns:!0}),l),ke(d)}catch{console.log("some error occured while loading table's data; likely got cancelled"),X(Y,l=null,l)}}else console.log("No table found");t(6,H=!1)}else console.log("No table found");t(6,H=!1)});function B(){he(`add-new-column-${d.params.db}/${d.params.dataset}`)}function P(){he(`add-new-row-${d.params.db}/${d.params.dataset}`)}Te.subscribe(i=>{if(i){if(console.log("Changes detected",i),i.lastChange==="leaderboard added"){const N=Ve.parse(i.newLeaderboards[i.newLeaderboards.length-1].data,{mangle:!1,headerIds:!1});if(t(0,m=Le(N).results[0]),m){let g=ye();g=we(m,g);try{X(Y,l=new v(p,{data:m,layout:"fitColumns",height:"500",reactiveData:!0,columns:g,movableColumns:!0}),l),ke(d)}catch{console.log("some error occured while loading table's data; likely got cancelled"),X(Y,l=null,l)}}else console.log("No table found - from currentPRChanges subscription");t(6,H=!1)}tt(i),y&&!o&&(l==null||l.redraw(!0)),Y.set(l)}});const G=i=>i.dataset===`${d.params.db}/${d.params.dataset}`,U=i=>i.dataset===`${d.params.db}/${d.params.dataset}`,M=()=>{he(`add-new-leaderboard-${d.params.db}/${d.params.dataset}`)},q=()=>{he("delete-new-leaderboard-"+d.params.db+"/"+d.params.dataset)};function K(i){$e[i?"unshift":"push"](()=>{I=i,t(5,I)})}const C=i=>{st(i)};function L(i){$e[i?"unshift":"push"](()=>{p=i,t(4,p)})}return[m,A,R,c,p,I,H,F,d,u,B,P,G,U,M,q,K,C,L]}class kt extends qe{constructor(e){super(),ze(this,e,ct,mt,Pe,{})}}export{kt as component};
