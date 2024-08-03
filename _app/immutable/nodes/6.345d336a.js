import{S as gn,i as vn,s as xn,k as c,q as o,a as b,y as mn,l,m as k,r as t,h as s,c as h,z as yn,n as q,b as r,G as a,A as bn,g as hn,d as _n,B as In,J as $n}from"../chunks/index.122030ca.js";import{C as En}from"../chunks/CodeBlock.67aad938.js";import{I as Pn}from"../chunks/Image.6cb6d0b5.js";function Cn(J){let e,$=`<code class="language-lua"><span class="token comment">-- sunflower generator</span>
<span class="token keyword">function</span> <span class="token function">sunfl</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">-- petal vars</span>
	<span class="token keyword">local</span> n<span class="token operator">=</span><span class="token number">0</span>
	<span class="token keyword">local</span> const<span class="token operator">=</span><span class="token function">rnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">0.5</span>
	<span class="token keyword">local</span> ang<span class="token operator">=</span><span class="token number">360</span><span class="token operator">/</span><span class="token number">137.5</span>
	<span class="token keyword">local</span> maxrad <span class="token operator">=</span> <span class="token function">rnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">3</span><span class="token operator">+</span><span class="token number">3</span>
	<span class="token keyword">local</span> r<span class="token operator">=</span><span class="token number">0</span>
	<span class="token keyword">local</span> a<span class="token operator">=</span><span class="token number">0</span>
	<span class="token keyword">local</span> pet <span class="token operator">=</span><span class="token number">0.5</span><span class="token operator">+</span><span class="token function">rnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span>
	<span class="token keyword">local</span> npets <span class="token operator">=</span> <span class="token function">flr</span><span class="token punctuation">(</span><span class="token function">rnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">15</span>
	<span class="token keyword">local</span> madecenter<span class="token operator">=</span><span class="token keyword">false</span>
	
	<span class="token comment">-- root vars</span>
	<span class="token keyword">local</span> root <span class="token operator">=</span> <span class="token punctuation">&#123;</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">&#125;</span>
	<span class="token keyword">local</span> miny <span class="token operator">=</span> <span class="token function">rnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">80</span><span class="token operator">+</span><span class="token number">10</span> 
	<span class="token keyword">local</span> cx<span class="token punctuation">,</span>cy <span class="token operator">=</span> 
	<span class="token punctuation">(</span><span class="token function">rnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">0.5</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">128</span><span class="token operator">+</span><span class="token number">64</span><span class="token punctuation">,</span><span class="token number">128</span><span class="token operator">-</span><span class="token number">8</span>

	<span class="token keyword">local</span> rooti<span class="token operator">=</span> <span class="token number">0</span>
	<span class="token keyword">local</span> growspd <span class="token operator">=</span> <span class="token number">0.001</span>
	
	<span class="token keyword">local</span> <span class="token keyword">function</span> <span class="token function">makeroot</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">for</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">50</span> <span class="token keyword">do</span>
			<span class="token keyword">if</span> <span class="token function">rnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0.999</span> <span class="token keyword">then</span>
				rooti<span class="token operator">+</span><span class="token operator">=</span><span class="token number">1</span>
			<span class="token keyword">end</span>
			<span class="token keyword">local</span> r <span class="token operator">=</span> <span class="token operator">-</span><span class="token function">flr</span><span class="token punctuation">(</span><span class="token function">rnd</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">3</span><span class="token operator">+</span>rooti
			<span class="token keyword">if</span> r <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token keyword">then</span>
				r <span class="token operator">=</span> <span class="token number">1</span>
			<span class="token keyword">end</span> 
			<span class="token keyword">if</span> r <span class="token operator">></span> <span class="token operator">#</span>root <span class="token keyword">then</span>
				r <span class="token operator">=</span> <span class="token operator">#</span>root
			<span class="token keyword">end</span>
			
			
			cy<span class="token operator">-</span><span class="token operator">=</span>growspd
			cx <span class="token operator">=</span>cx<span class="token operator">+</span><span class="token punctuation">(</span><span class="token function">rnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">0.5</span><span class="token punctuation">)</span>
			<span class="token function">pset</span><span class="token punctuation">(</span>cx<span class="token punctuation">,</span>cy<span class="token punctuation">,</span>root<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">)</span>
			growspd <span class="token operator">+</span><span class="token operator">=</span> <span class="token number">0.0001</span>
			<span class="token keyword">if</span> growspd <span class="token operator">></span> <span class="token number">0.1</span> <span class="token keyword">then</span>
				gridspd <span class="token operator">=</span> <span class="token number">0.1</span>
			<span class="token keyword">end</span>
			
			<span class="token keyword">if</span> cy <span class="token operator">&lt;</span> <span class="token number">120</span> <span class="token keyword">and</span> <span class="token function">rnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token number">0.01</span> <span class="token keyword">then</span>
				d <span class="token operator">=</span> <span class="token function">sgn</span><span class="token punctuation">(</span><span class="token function">rnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">0.5</span><span class="token punctuation">)</span>
				<span class="token keyword">local</span> x<span class="token punctuation">,</span>y <span class="token operator">=</span> cx<span class="token punctuation">,</span>cy
				<span class="token keyword">for</span> j<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token function">rnd</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">5</span> <span class="token keyword">do</span>
					 x<span class="token operator">+</span><span class="token operator">=</span><span class="token function">rnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">*</span>d
					 y<span class="token operator">+</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token function">rnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">0.8</span><span class="token punctuation">)</span>
					 <span class="token function">pset</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">)</span>
				<span class="token keyword">end</span>
			<span class="token keyword">end</span>
		<span class="token keyword">end</span>
	<span class="token keyword">end</span>
	
	<span class="token keyword">local</span> <span class="token keyword">function</span> <span class="token function">inner</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> <span class="token keyword">not</span> madecenter <span class="token keyword">then</span>
			<span class="token function">circfill</span><span class="token punctuation">(</span>cx<span class="token punctuation">,</span>cy<span class="token punctuation">,</span>maxrad<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>
			madecenter<span class="token operator">=</span><span class="token keyword">true</span>
		<span class="token keyword">end</span>
		a<span class="token operator">=</span><span class="token punctuation">(</span>n<span class="token operator">*</span>ang<span class="token punctuation">)</span><span class="token operator">%</span><span class="token number">1</span>
		r<span class="token operator">=</span>const<span class="token operator">*</span><span class="token function">sqrt</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
		
		<span class="token keyword">local</span> x<span class="token punctuation">,</span>y<span class="token operator">=</span>
		<span class="token function">cos</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token operator">*</span>r<span class="token operator">+</span>cx<span class="token punctuation">,</span>
		<span class="token function">sin</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token operator">*</span>r<span class="token operator">+</span>cy
		
		<span class="token function">pset</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span>
		
		n<span class="token operator">+</span><span class="token operator">=</span><span class="token number">1</span>
	<span class="token keyword">end</span>
	
	<span class="token keyword">local</span> <span class="token keyword">function</span> <span class="token function">outer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
		<span class="token keyword">local</span> ps<span class="token operator">=</span>pet<span class="token operator">*</span><span class="token function">rnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">local</span> osc<span class="token operator">=</span><span class="token punctuation">(</span><span class="token function">sin</span><span class="token punctuation">(</span>a<span class="token operator">*</span>npets<span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token operator">*</span>ps
		<span class="token keyword">if</span><span class="token punctuation">(</span>osc<span class="token operator">&lt;</span><span class="token number">1</span><span class="token punctuation">)</span>osc<span class="token operator">=</span><span class="token number">1</span>
		<span class="token keyword">local</span> x<span class="token punctuation">,</span>y<span class="token operator">=</span>
		<span class="token function">cos</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token operator">*</span>maxrad<span class="token operator">*</span>osc<span class="token punctuation">,</span>
		<span class="token function">sin</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token operator">*</span>maxrad<span class="token operator">*</span>osc
		
		<span class="token keyword">local</span> c <span class="token operator">=</span> <span class="token number">9</span>
		<span class="token keyword">if</span> <span class="token function">rnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">></span><span class="token number">0.6</span> <span class="token keyword">then</span>
			c<span class="token operator">=</span><span class="token number">10</span>
		<span class="token keyword">end</span>
		
		<span class="token function">pset</span><span class="token punctuation">(</span>x<span class="token operator">+</span>cx<span class="token punctuation">,</span>y<span class="token operator">+</span>cy<span class="token punctuation">,</span>c<span class="token punctuation">)</span>
		a<span class="token operator">+</span><span class="token operator">=</span> <span class="token number">0.01</span>
	<span class="token keyword">end</span> 
	
	<span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">local</span> fn <span class="token operator">=</span> <span class="token keyword">nil</span>
		<span class="token keyword">if</span> cy <span class="token operator">></span> miny <span class="token keyword">then</span>
			<span class="token function">makeroot</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">else</span>
			<span class="token keyword">for</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">50</span> <span class="token keyword">do</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>r<span class="token operator">&lt;</span>maxrad<span class="token punctuation">)</span><span class="token keyword">then</span>
          <span class="token function">inner</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">else</span>
          <span class="token function">outer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">end</span>
			<span class="token keyword">end</span>
		<span class="token keyword">end</span>
	<span class="token keyword">end</span>
<span class="token keyword">end</span>


<span class="token keyword">function</span> <span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
	fls <span class="token operator">=</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span>
	<span class="token keyword">for</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">10</span> <span class="token keyword">do</span>
		fls<span class="token punctuation">[</span><span class="token operator">#</span>fls<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token function">sunfl</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">end</span>
<span class="token keyword">end</span>

started<span class="token operator">=</span><span class="token keyword">false</span>


<span class="token function">map</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">16</span><span class="token punctuation">,</span><span class="token number">16</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">_draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> <span class="token function">btn</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token keyword">then</span> 
		<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">not</span> started<span class="token punctuation">)</span>started<span class="token operator">=</span><span class="token keyword">true</span>
		<span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">end</span>
	<span class="token keyword">if</span> <span class="token function">btn</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token keyword">then</span>
		<span class="token function">map</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">16</span><span class="token punctuation">,</span><span class="token number">16</span><span class="token punctuation">)</span>
		fls<span class="token operator">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span>
	<span class="token keyword">end</span>
	
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">not</span> started<span class="token punctuation">)</span><span class="token keyword">return</span>
	
	<span class="token keyword">for</span> f <span class="token keyword">in</span> <span class="token function">all</span><span class="token punctuation">(</span>fls<span class="token punctuation">)</span> <span class="token keyword">do</span>
		<span class="token comment">-- vary the speed of flowers</span>
		<span class="token keyword">if</span> <span class="token function">rnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">></span><span class="token number">0.2</span> <span class="token keyword">then</span>
			<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">end</span>
	<span class="token keyword">end</span> 
<span class="token keyword">end</span></code>`;return{c(){e=c("pre"),this.h()},l(i){e=l(i,"PRE",{class:!0});var d=k(e);d.forEach(s),this.h()},h(){q(e,"class","language-lua")},m(i,d){r(i,e,d),e.innerHTML=$},p:$n,d(i){i&&s(e)}}}function Sn(J){let e,$,i,d,E,R,O,f,F,_,K,N,L,I,z,u,Q,g,V,W,P,X,Y,C,Z,nn,A,w,v,sn,S,an,pn,on,B,tn,D,x,en,G,m,H;return I=new Pn({props:{src:"/images/posts/sunflowers_0.gif"}}),m=new En({props:{lang:"lua",$$slots:{default:[Cn]},$$scope:{ctx:J}}}),{c(){e=c("p"),$=o("I have always loved sunflowers. So when I announced this to one of my friends he replied,"),i=b(),d=c("p"),E=c("em"),R=o("“I’m scared of sunflowers, they are tall and disgusting and it looks like they will fall down and attack you from above”."),O=b(),f=c("p"),F=o("I thought he was joking. So I went home and made him a little program of procedurally generated sunflowers using "),_=c("a"),K=o("PICO-8"),N=o("."),L=b(),mn(I.$$.fragment),z=b(),u=c("p"),Q=o("Unfortunately not even digital sunflowers could convince him that these flowers are amazing. I quite like them, so now I’m using them as my profile picture on Github. If you want to run this little program you can find it on "),g=c("a"),V=o("BBS"),W=o(". It’s written using closures. That is, the "),P=c("code"),X=o("sunfl"),Y=o(" function returns a function "),C=c("code"),Z=o("f"),nn=o(" which when called has two effects:"),A=b(),w=c("ul"),v=c("li"),sn=o("It updates the state within "),S=c("code"),an=o("f"),pn=o(" (this is what makes the sunflower grow)"),on=b(),B=c("li"),tn=o("It renders the sunflower."),D=b(),x=c("p"),en=o("It would probably be easier to just use tables instead but I wanted to try out something different. Here is the code."),G=b(),mn(m.$$.fragment),this.h()},l(n){e=l(n,"P",{});var p=k(e);$=t(p,"I have always loved sunflowers. So when I announced this to one of my friends he replied,"),p.forEach(s),i=h(n),d=l(n,"P",{});var j=k(d);E=l(j,"EM",{});var cn=k(E);R=t(cn,"“I’m scared of sunflowers, they are tall and disgusting and it looks like they will fall down and attack you from above”."),cn.forEach(s),j.forEach(s),O=h(n),f=l(n,"P",{});var T=k(f);F=t(T,"I thought he was joking. So I went home and made him a little program of procedurally generated sunflowers using "),_=l(T,"A",{href:!0,rel:!0});var ln=k(_);K=t(ln,"PICO-8"),ln.forEach(s),N=t(T,"."),T.forEach(s),L=h(n),yn(I.$$.fragment,n),z=h(n),u=l(n,"P",{});var y=k(u);Q=t(y,"Unfortunately not even digital sunflowers could convince him that these flowers are amazing. I quite like them, so now I’m using them as my profile picture on Github. If you want to run this little program you can find it on "),g=l(y,"A",{href:!0,rel:!0});var kn=k(g);V=t(kn,"BBS"),kn.forEach(s),W=t(y,". It’s written using closures. That is, the "),P=l(y,"CODE",{});var rn=k(P);X=t(rn,"sunfl"),rn.forEach(s),Y=t(y," function returns a function "),C=l(y,"CODE",{});var un=k(C);Z=t(un,"f"),un.forEach(s),nn=t(y," which when called has two effects:"),y.forEach(s),A=h(n),w=l(n,"UL",{});var U=k(w);v=l(U,"LI",{});var M=k(v);sn=t(M,"It updates the state within "),S=l(M,"CODE",{});var dn=k(S);an=t(dn,"f"),dn.forEach(s),pn=t(M," (this is what makes the sunflower grow)"),M.forEach(s),on=h(U),B=l(U,"LI",{});var fn=k(B);tn=t(fn,"It renders the sunflower."),fn.forEach(s),U.forEach(s),D=h(n),x=l(n,"P",{});var wn=k(x);en=t(wn,"It would probably be easier to just use tables instead but I wanted to try out something different. Here is the code."),wn.forEach(s),G=h(n),yn(m.$$.fragment,n),this.h()},h(){q(_,"href","https://www.lexaloffle.com/pico-8.php"),q(_,"rel","nofollow"),q(g,"href","https://www.lexaloffle.com/bbs/?pid=45641"),q(g,"rel","nofollow")},m(n,p){r(n,e,p),a(e,$),r(n,i,p),r(n,d,p),a(d,E),a(E,R),r(n,O,p),r(n,f,p),a(f,F),a(f,_),a(_,K),a(f,N),r(n,L,p),bn(I,n,p),r(n,z,p),r(n,u,p),a(u,Q),a(u,g),a(g,V),a(u,W),a(u,P),a(P,X),a(u,Y),a(u,C),a(C,Z),a(u,nn),r(n,A,p),r(n,w,p),a(w,v),a(v,sn),a(v,S),a(S,an),a(v,pn),a(w,on),a(w,B),a(B,tn),r(n,D,p),r(n,x,p),a(x,en),r(n,G,p),bn(m,n,p),H=!0},p(n,[p]){const j={};p&1&&(j.$$scope={dirty:p,ctx:n}),m.$set(j)},i(n){H||(hn(I.$$.fragment,n),hn(m.$$.fragment,n),H=!0)},o(n){_n(I.$$.fragment,n),_n(m.$$.fragment,n),H=!1},d(n){n&&s(e),n&&s(i),n&&s(d),n&&s(O),n&&s(f),n&&s(L),In(I,n),n&&s(z),n&&s(u),n&&s(A),n&&s(w),n&&s(D),n&&s(x),n&&s(G),In(m,n)}}}class On extends gn{constructor(e){super(),vn(this,e,null,Sn,xn,{})}}export{On as component};
