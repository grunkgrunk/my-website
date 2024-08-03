import{S as Se,i as He,s as Ce,k as i,q as n,a as _,y as me,l,m as h,r,h as t,c as b,z as fe,n as c,b as p,G as a,A as ue,g as ge,d as we,B as _e,J as xe}from"../chunks/index.122030ca.js";import{C as qe}from"../chunks/CodeBlock.67aad938.js";import{I as Le}from"../chunks/Image.6cb6d0b5.js";function Ne(S){let s,E=`<code class="language-bash"><span class="token assign-left variable">URL</span><span class="token operator">=</span><span class="token string">'https://www.gstatic.com/android/keyboard/emojikitchen/[^"]*'</span>
<span class="token function">grep</span> <span class="token parameter variable">-o</span> <span class="token string">"<span class="token variable">$URL</span>"</span> filename <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-n</span> <span class="token number">1</span> <span class="token function">curl</span> <span class="token parameter variable">-O</span></code>`;return{c(){s=i("pre"),this.h()},l(d){s=l(d,"PRE",{class:!0});var m=h(s);m.forEach(t),this.h()},h(){c(s,"class","language-bash")},m(d,m){p(d,s,m),s.innerHTML=E},p:xe,d(d){d&&t(s)}}}function Te(S){let s,E=`<code class="language-undefined">squares = []
while len(squares) &lt; 290:
  generate a random square, S
  if S does not collide with any square in squares:
    append S to squares</code>`;return{c(){s=i("pre"),this.h()},l(d){s=l(d,"PRE",{class:!0});var m=h(s);m.forEach(t),this.h()},h(){c(s,"class","language-undefined")},m(d,m){p(d,s,m),s.innerHTML=E},p:xe,d(d){d&&t(s)}}}function Me(S){let s,E,d,m,O,y,K,I,Q,V,R,$,g,H,W,X,D,f,Y,A,Z,ee,C,te,ae,L,oe,se,N,ne,re,G,k,B,v,w,T,ie,le,F,q,he,U,j,z,x,pe,J;return m=new Le({props:{src:"/images/posts/turtle_collage.png"}}),k=new qe({props:{lang:"bash",$$slots:{default:[Ne]},$$scope:{ctx:S}}}),j=new qe({props:{$$slots:{default:[Te]},$$scope:{ctx:S}}}),{c(){s=i("p"),E=n("I recently found out that the keyboard on my Android phone can generate combinations of emojis. If you open up the emoji keyboard and type ”🐢✂️” you get an emoji of a turtle being cut into two by a pair of scissors. I have had way more fun with this feature than I like to admit and for some reason I absolute love the emojis where the turle is combined with something else. So I got the idea of finding all of them and putting them on a poster. Here it is:"),d=_(),me(m.$$.fragment),O=_(),y=i("p"),K=n("The above was generated by a little program I made written in Python, which you can find "),I=i("a"),Q=n("here"),V=n("."),R=_(),$=i("h2"),g=i("a"),H=i("span"),W=n("#"),X=n("Fetching the emojis"),D=_(),f=i("p"),Y=n("Someone has made an "),A=i("a"),Z=n("app"),ee=n(" that can display all emojis that combines with the turtle emoji. Instructing it to do this and downloading the HTML of this page under the name "),C=i("code"),te=n("file.html"),ae=n(" we can extract all the links on the page that point to a turtle emoji using "),L=i("code"),oe=n("grep"),se=n(" and then pipe this to "),N=i("code"),ne=n("curl"),re=n(" to download all the turtle images."),G=_(),me(k.$$.fragment),B=_(),v=i("h2"),w=i("a"),T=i("span"),ie=n("#"),le=n("Generating the poster"),F=_(),q=i("p"),he=n("Next, let’s place the images that we just downloaded randomly on some A2 paper. In total there are 290 turtle emojis so let us generate that many squares that do not collide. Here is some very naive pseudo code for doing this"),U=_(),me(j.$$.fragment),z=_(),x=i("p"),pe=n("Now we can load all the images that we downloaded and place them inside the squares. After that we can find a nice background color for our poster and a nice font to display some text at the top. And that is basically it!"),this.h()},l(e){s=l(e,"P",{});var o=h(s);E=r(o,"I recently found out that the keyboard on my Android phone can generate combinations of emojis. If you open up the emoji keyboard and type ”🐢✂️” you get an emoji of a turtle being cut into two by a pair of scissors. I have had way more fun with this feature than I like to admit and for some reason I absolute love the emojis where the turle is combined with something else. So I got the idea of finding all of them and putting them on a poster. Here it is:"),o.forEach(t),d=b(e),fe(m.$$.fragment,e),O=b(e),y=l(e,"P",{});var P=h(y);K=r(P,"The above was generated by a little program I made written in Python, which you can find "),I=l(P,"A",{href:!0,rel:!0});var M=h(I);Q=r(M,"here"),M.forEach(t),V=r(P,"."),P.forEach(t),R=b(e),$=l(e,"H2",{id:!0});var de=h($);g=l(de,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var be=h(g);H=l(be,"SPAN",{});var ye=h(H);W=r(ye,"#"),ye.forEach(t),be.forEach(t),X=r(de,"Fetching the emojis"),de.forEach(t),D=b(e),f=l(e,"P",{});var u=h(f);Y=r(u,"Someone has made an "),A=l(u,"A",{href:!0,rel:!0});var $e=h(A);Z=r($e,"app"),$e.forEach(t),ee=r(u," that can display all emojis that combines with the turtle emoji. Instructing it to do this and downloading the HTML of this page under the name "),C=l(u,"CODE",{});var ke=h(C);te=r(ke,"file.html"),ke.forEach(t),ae=r(u," we can extract all the links on the page that point to a turtle emoji using "),L=l(u,"CODE",{});var ve=h(L);oe=r(ve,"grep"),ve.forEach(t),se=r(u," and then pipe this to "),N=l(u,"CODE",{});var je=h(N);ne=r(je,"curl"),je.forEach(t),re=r(u," to download all the turtle images."),u.forEach(t),G=b(e),fe(k.$$.fragment,e),B=b(e),v=l(e,"H2",{id:!0});var ce=h(v);w=l(ce,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var Ee=h(w);T=l(Ee,"SPAN",{});var Ie=h(T);ie=r(Ie,"#"),Ie.forEach(t),Ee.forEach(t),le=r(ce,"Generating the poster"),ce.forEach(t),F=b(e),q=l(e,"P",{});var Ae=h(q);he=r(Ae,"Next, let’s place the images that we just downloaded randomly on some A2 paper. In total there are 290 turtle emojis so let us generate that many squares that do not collide. Here is some very naive pseudo code for doing this"),Ae.forEach(t),U=b(e),fe(j.$$.fragment,e),z=b(e),x=l(e,"P",{});var Pe=h(x);pe=r(Pe,"Now we can load all the images that we downloaded and place them inside the squares. After that we can find a nice background color for our poster and a nice font to display some text at the top. And that is basically it!"),Pe.forEach(t),this.h()},h(){c(I,"href","https://github.com/grunkgrunk/EmojiPosters/tree/main"),c(I,"rel","nofollow"),c(g,"class","heading-link"),c(g,"title","Permalink"),c(g,"aria-hidden","true"),c(g,"href","#fetching-the-emojis"),c($,"id","fetching-the-emojis"),c(A,"href","https://emojikitchen.dev/"),c(A,"rel","nofollow"),c(w,"class","heading-link"),c(w,"title","Permalink"),c(w,"aria-hidden","true"),c(w,"href","#generating-the-poster"),c(v,"id","generating-the-poster")},m(e,o){p(e,s,o),a(s,E),p(e,d,o),ue(m,e,o),p(e,O,o),p(e,y,o),a(y,K),a(y,I),a(I,Q),a(y,V),p(e,R,o),p(e,$,o),a($,g),a(g,H),a(H,W),a($,X),p(e,D,o),p(e,f,o),a(f,Y),a(f,A),a(A,Z),a(f,ee),a(f,C),a(C,te),a(f,ae),a(f,L),a(L,oe),a(f,se),a(f,N),a(N,ne),a(f,re),p(e,G,o),ue(k,e,o),p(e,B,o),p(e,v,o),a(v,w),a(w,T),a(T,ie),a(v,le),p(e,F,o),p(e,q,o),a(q,he),p(e,U,o),ue(j,e,o),p(e,z,o),p(e,x,o),a(x,pe),J=!0},p(e,[o]){const P={};o&1&&(P.$$scope={dirty:o,ctx:e}),k.$set(P);const M={};o&1&&(M.$$scope={dirty:o,ctx:e}),j.$set(M)},i(e){J||(ge(m.$$.fragment,e),ge(k.$$.fragment,e),ge(j.$$.fragment,e),J=!0)},o(e){we(m.$$.fragment,e),we(k.$$.fragment,e),we(j.$$.fragment,e),J=!1},d(e){e&&t(s),e&&t(d),_e(m,e),e&&t(O),e&&t(y),e&&t(R),e&&t($),e&&t(D),e&&t(f),e&&t(G),_e(k,e),e&&t(B),e&&t(v),e&&t(F),e&&t(q),e&&t(U),_e(j,e),e&&t(z),e&&t(x)}}}class Ge extends Se{constructor(s){super(),He(this,s,null,Me,Ce,{})}}export{Ge as component};