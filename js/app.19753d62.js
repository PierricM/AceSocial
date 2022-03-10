(function(){var e={6836:function(e,t,n){"use strict";n.d(t,{Ac:function(){return d},u_:function(){return c},Z3:function(){return p},y7:function(){return y},R:function(){return m},am:function(){return v}});var a=n(635),l=n(5743),o=n.n(l);class r{constructor(e,t){this.publicKey=e,this.author=t.author,this.timestamp=t.timestamp.toString(),this.topic=t.topic,this.content=t.content}get key(){return this.publicKey.toBase58()}get author_display(){const e=this.author.toBase58();return e.slice(0,4)+".."+e.slice(-4)}get created_at(){return o().unix(this.timestamp).format("lll")}get created_ago(){return o().unix(this.timestamp).fromNow()}}var s=n(7575),i=n.n(s),u=n(5361)["Buffer"];const c=async(e=[])=>{const{program:t}=(0,a.cF)(),n=await t.value.account.tweet.all(e);return n.map((e=>new r(e.publicKey,e.account)))},d=e=>({memcmp:{offset:8,bytes:e}}),v=e=>({memcmp:{offset:52,bytes:i().encode(u.from(e))}}),p=async e=>{const{program:t}=(0,a.cF)(),n=await t.value.account.tweet.fetch(e);return new r(e,n)};var f=n(53);const m=async(e,t)=>{const{wallet:n,program:l}=(0,a.cF)(),o=f.rV.Keypair.generate();await l.value.rpc.sendTweet(e,t,{accounts:{author:n.value.publicKey,tweet:o.publicKey,systemProgram:f.rV.SystemProgram.programId},signers:[o]});const s=await l.value.account.tweet.fetch(o.publicKey);return new r(o.publicKey,s)};var w=n(4911);const h="https://api.devnet.solana.com",g="confirmed",y=async e=>{console.log("amount"),console.log(e);const{wallet:t}=(0,a.cF)();console.log("this was called");const n=new w.Connection(h,g),l=t.value,o=i().decode("BKTStFYc813Drfj7h3LovRPEkQGWpPaRZK19qKfLsuie"),r=new f.rV.PublicKey("BKTStFYc813Drfj7h3LovRPEkQGWpPaRZK19qKfLsuie");console.log(l.publicKey),console.log(o),console.log(r);const s=(new f.rV.Transaction).add(f.rV.SystemProgram.transfer({fromPubkey:t.value.publicKey,toPubkey:r,lamports:e}));let{blockhash:u}=await n.getLatestBlockhash();s.recentBlockhash=u,s.feePayer=t.value.publicKey;let c=await t.value.signTransaction(s),d=await n.sendRawTransaction(c.serialize());await n.confirmTransaction(d)}},635:function(e,t,n){"use strict";n.d(t,{Ev:function(){return b},dN:function(){return l},T8:function(){return r},c3:function(){return i},f2:function(){return u},cF:function(){return y}});var a=n(3396);const l=e=>{const t=()=>{e.value.style.height="auto",e.value.style.height=e.value.scrollHeight+"px"};(0,a.m0)((n=>{e.value&&(t(),e.value.addEventListener("input",t),n((()=>e.value?.removeEventListener("input",t))))}))};var o=n(4870);const r=(e,t)=>{const n=(0,o.iH)(0);return(0,a.m0)((()=>n.value=t-e.value?.length)),n};var s=n(678);const i=e=>{e((0,s.yj)(),null),(0,s.ao)(((t,n,a)=>{e(t,n),a()}))},u=e=>(0,a.Fl)((()=>(e.value||"").toLowerCase().replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")));var c=n(9844),d=n(4911),v=n(53),p=JSON.parse('{"version":"0.1.0","name":"solana_twitter","instructions":[{"name":"sendTweet","accounts":[{"name":"tweet","isMut":true,"isSigner":true},{"name":"author","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[{"name":"topic","type":"string"},{"name":"content","type":"string"}]}],"accounts":[{"name":"Tweet","type":{"kind":"struct","fields":[{"name":"author","type":"publicKey"},{"name":"timestamp","type":"i64"},{"name":"topic","type":"string"},{"name":"content","type":"string"}]}}],"errors":[{"code":6000,"name":"TopicTooLong","msg":"The provided topic should be 50 characters long maximum."},{"code":6001,"name":"ContentTooLong","msg":"The provided content should be 280 characters long maximum."}],"metadata":{"address":"3szbwoWw7AMyT6n1NqojRkFsXjGghicFFz66GNi5nJxs"}}');const f="https://api.devnet.solana.com",m="processed",w="processed",h=new d.PublicKey(p.metadata.address);let g=null;const y=()=>g,b=()=>{const e=(0,c.zs)(),t=new d.Connection(f,w),n=(0,a.Fl)((()=>new v.zt(t,e.value,{preflightCommitment:m,commitment:w}))),l=(0,a.Fl)((()=>new v.$r(p,h,n.value)));g={wallet:e,connection:t,provider:n,program:l}}},5250:function(e,t,n){"use strict";var a=n(5743),l=n.n(a),o=n(8263),r=n.n(o),s=n(893),i=n.n(s),u=n(678),c=[{name:"Home",path:"/",component:n(1260).Z},{name:"Topics",path:"/topics/:topic?",component:n(4168).Z},{name:"Users",path:"/users/:author?",component:n(2679).Z},{name:"Profile",path:"/profile",component:n(5196).Z},{name:"Tweet",path:"/tweet/:tweet",component:n(3669).Z},{name:"NotFound",path:"/:pathMatch(.*)*",component:n(1593).Z}],d=n(9242),v=n(3396),p=n(4870),f=n(7139),m=n(9844);const w={class:"flex flex-col items-center md:items-stretch space-y-2 md:space-y-4"},h=(0,v._)("div",{class:"text-xl hidden md:block text-blue-700"},[(0,v._)("b",null,"AceSocial")],-1),g=(0,v._)("br",null,null,-1),y=(0,v._)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-8 md:h-10 w-8 md:w-10 text-blue-700",viewBox:"0 0 20 20",fill:"currentColor"},[(0,v._)("path",{d:"M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"}),(0,v._)("path",{d:"M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"})],-1),b={class:"flex flex-col items-center md:items-stretch space-y-2"},x={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8 text-gray-700",viewBox:"0 0 20 20",fill:"currentColor"},_=(0,v._)("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"},null,-1),k=[_],S={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8 text-gray-700",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},H=(0,v._)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"},null,-1),U=[H],C=(0,v._)("div",{class:"text-xl hidden md:block"},"Home",-1),z={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8 text-gray-700",viewBox:"0 0 20 20",fill:"currentColor"},M=(0,v._)("path",{d:"M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"},null,-1),j=(0,v._)("path",{d:"M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"},null,-1),T=[M,j],D={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8 text-gray-700",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},B=(0,v._)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"},null,-1),Z=[B],L=(0,v._)("div",{class:"text-xl hidden md:block"},"Topics",-1),K={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8 text-gray-700",viewBox:"0 0 20 20",fill:"currentColor"},O=(0,v._)("path",{d:"M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"},null,-1),P=[O],W={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8 text-gray-700",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},F=(0,v._)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"},null,-1),V=[F],A=(0,v._)("div",{class:"text-xl hidden md:block"},"Users",-1),E={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8 text-gray-700",viewBox:"0 0 20 20",fill:"currentColor"},N=(0,v._)("path",{"fill-rule":"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z","clip-rule":"evenodd"},null,-1),q=[N],R={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8 text-gray-700",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Y=(0,v._)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"},null,-1),I=[Y],G=(0,v._)("div",{class:"text-xl hidden md:block"},"Profile",-1),$={class:"fixed bottom-8 right-8 md:static w-48 md:w-full"},J=(0,v._)("br",null,null,-1),Q=(0,v._)("br",null,null,-1),X=(0,v._)("br",null,null,-1);var ee={setup(e){const{connected:t}=(0,m.Os)();return(e,n)=>{const a=(0,v.up)("router-link");return(0,v.wg)(),(0,v.iD)("aside",w,[h,g,(0,v.Wm)(a,{to:{name:"Home"},class:"inline-block rounded-full hover:bg-gray-100 p-3 md:self-start"},{default:(0,v.w5)((()=>[y])),_:1}),(0,v._)("div",b,[(0,v.Wm)(a,{to:{name:"Home"},class:"rounded-full hover:bg-gray-100 p-3 md:w-full inline-flex items-center space-x-4","active-class":"font-bold text-blue-700"},{default:(0,v.w5)((({isActive:e})=>[e?((0,v.wg)(),(0,v.iD)("svg",x,k)):((0,v.wg)(),(0,v.iD)("svg",S,U)),C])),_:1}),(0,v.Wm)(a,{to:{name:"Topics"},class:"rounded-full hover:bg-gray-100 p-3 md:w-full inline-flex items-center space-x-4","active-class":"font-bold text-blue-700"},{default:(0,v.w5)((({isActive:e})=>[e?((0,v.wg)(),(0,v.iD)("svg",z,T)):((0,v.wg)(),(0,v.iD)("svg",D,Z)),L])),_:1}),(0,v.Wm)(a,{to:{name:"Users"},class:"rounded-full hover:bg-gray-100 p-3 md:w-full inline-flex items-center space-x-4","active-class":"font-bold text-blue-700"},{default:(0,v.w5)((({isActive:e})=>[e?((0,v.wg)(),(0,v.iD)("svg",K,P)):((0,v.wg)(),(0,v.iD)("svg",W,V)),A])),_:1}),(0,p.SU)(t)?((0,v.wg)(),(0,v.j4)(a,{key:0,to:{name:"Profile"},class:"rounded-full hover:bg-gray-100 p-3 md:w-full inline-flex items-center space-x-4","active-class":"font-bold text-blue-700"},{default:(0,v.w5)((({isActive:e})=>[e?((0,v.wg)(),(0,v.iD)("svg",E,q)):((0,v.wg)(),(0,v.iD)("svg",R,I)),G])),_:1})):(0,v.kq)("",!0)]),(0,v._)("div",$,[(0,v.Wm)((0,p.SU)(m.aD))]),J,Q,X])}}};const te=ee;var ne=te,ae=n(6836);const le={class:"items-stretch space-y-4"},oe={class:"items-center justify-between -m-2"},re={class:"relative m-2 mr-4"},se=["value","disabled"],ie={class:"absolute left-0 inset-y-0 pl-3 pr-2"},ue=(0,v._)("path",{"fill-rule":"evenodd",d:"M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z","clip-rule":"evenodd"},null,-1),ce=[ue];var de={setup(e){const t=(0,p.iH)(""),n=async()=>{console.log("donating");const e=parseInt(1e9*t.value),n=await(0,ae.y7)(e);console.log(n)};return(e,a)=>((0,v.wg)(),(0,v.iD)("aside",le,[(0,v._)("div",oe,[(0,v._)("div",re,[(0,v._)("input",{type:"number",oninput:"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);",onkeypress:"return (event.charCode >= 48 && event.charCode <= 57) || event.charCode == 46 || event.charCode == 0 ",maxlength:"6",step:"0.1",placeholder:"amount in SOL",class:"text-blue-700 rounded-full pl-4 pr-4 py-2 bg-gray-100",value:e.effectiveTopic,disabled:e.forcedTopic,onInput:a[0]||(a[0]=e=>t.value=e.target.value)},null,40,se),(0,v._)("div",ie,[((0,v.wg)(),(0,v.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",class:(0,f.C_)(["h-5 w-5 m-auto",e.effectiveTopic?"text-blue-700":"text-gray-400"]),viewBox:"0 0 0 0",fill:"currentColor"},ce,2))])]),(0,v._)("div",{class:"flex items-center space-x-6 m-2 ml-auto"},[(0,v._)("button",{class:"text-white px-4 py-2 rounded-full font-semibold bg-blue-700",onClick:n},"Support AceSocial by Making a Donation")])])]))}};const ve=de;var pe=ve,fe=n(8541),me=n(635);const we={class:"w-full max-w-3xl lg:max-w-4xl mx-auto"},he=(0,v._)("a",{target:"_blank",href:"https://trade.dexlab.space/#/market/5rc3qjJTh8y5ZsES3eMyTDpxtzk1ncvS6rrfp7Vg3w1x",class:"absolute top-5 right-5 text-white px-4 py-2 rounded-full font-semibold bg-blue-700"},"Buy $ACE",-1),ge={class:"flex-1 border-r border-l ml-20 md:ml-64 min-h-screen"},ye={class:"flex space-x-6 items-center justify-between px-8 py-4 border-b"},be=["textContent"];var xe={setup(e){const t=(0,u.yj)(),n=[new fe.Ox,new fe.eV];return(0,m.y2)({wallets:n,autoConnect:!0}),(0,me.Ev)(),(e,n)=>{const a=(0,v.up)("router-view");return(0,v.wg)(),(0,v.iD)("div",we,[(0,v.Wm)((0,p.SU)(ne),{class:"py-4 md:py-8 md:pl-4 md:pr-8 fixed w-20 md:w-64"}),(0,v.Wm)((0,p.SU)(pe),{class:"absolute bottom-5 left-5"}),he,(0,v._)("main",ge,[(0,v._)("header",ye,[(0,v._)("div",{class:"text-xl font-bold",textContent:(0,f.zw)((0,p.SU)(t).name)},null,8,be)]),(0,v.Wm)(a)])])}}};const _e=xe;var ke=_e;l().extend(r()),l().extend(i());const Se=(0,u.p7)({history:(0,u.r5)(),routes:c});(0,d.ri)(ke).use(Se).mount("#app")},1260:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(3396),l=n(4870),o=n(6836),r=n(9375),s=n(7792),i={setup(e){const t=(0,l.iH)([]),n=(0,l.iH)(!0);(0,o.u_)().then((e=>t.value=e)).finally((()=>n.value=!1));const i=e=>t.value.push(e);return(e,o)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)((0,l.SU)(r.Z),{onAdded:i}),(0,a.Wm)((0,l.SU)(s.Z),{tweets:t.value,loading:n.value},null,8,["tweets","loading"])],64))}};const u=i;var c=u},1593:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var a=n(3396);const l={class:"p-8 text-gray-500 text-center"},o=(0,a._)("p",null,"404 — Not Found",-1),r=(0,a.Uk)(" Go back home ");function s(e,t){const n=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",l,[o,(0,a.Wm)(n,{to:{name:"Home"},class:"block text-blue-700 hover:underline mt-2"},{default:(0,a.w5)((()=>[r])),_:1})])}var i=n(89);const u={},c=(0,i.Z)(u,[["render",s]]);var d=c},5196:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(3396),l=n(7139),o=n(4870),r=n(6836),s=n(9375),i=n(7792),u=n(635);const c={key:0,class:"border-b px-8 py-4 bg-gray-50"};var d={setup(e){const t=(0,o.iH)([]),n=(0,o.iH)(!0),{wallet:d}=(0,u.cF)();(0,a.m0)((()=>{d.value&&(0,r.u_)([(0,r.Ac)(d.value.publicKey.toBase58())]).then((e=>t.value=e)).finally((()=>n.value=!1))}));const v=e=>t.value.push(e);return(e,r)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[((0,a.wg)(),(0,a.iD)("div",c,(0,l.zw)((0,o.SU)(d).publicKey.toBase58()),1)),(0,a.Wm)((0,o.SU)(s.Z),{onAdded:v}),(0,a.Wm)((0,o.SU)(i.Z),{tweets:t.value,loading:n.value},null,8,["tweets","loading"])],64))}};const v=d;var p=v},4168:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var a=n(3396),l=n(4870),o=n(678),r=n(6836),s=n(635),i=n(9375),u=n(7792),c=n(7632);const d=(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[(0,a._)("path",{"fill-rule":"evenodd",d:"M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z","clip-rule":"evenodd"})],-1),v={key:0},p={key:0,class:"p-8 text-gray-500 text-center"};var f={setup(e){const t=(0,o.tv)(),n=(0,l.iH)([]),f=(0,l.iH)(!0),m=(0,l.iH)(""),w=(0,s.f2)(m),h=(0,l.iH)(""),g=()=>{t.push(`/topics/${w.value}`)},y=async()=>{if(w.value!==h.value)try{f.value=!0;const e=await(0,r.u_)([(0,r.am)(w.value)]);n.value=e,h.value=w.value}finally{f.value=!1}},b=e=>n.value.push(e);return(0,s.c3)((e=>{m.value=e.params.topic,m.value?y():(n.value=[],h.value="")})),(e,t)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)((0,l.SU)(c.Z),{placeholder:"topic",disabled:!(0,l.SU)(w),modelValue:(0,l.SU)(w),"onUpdate:modelValue":t[0]||(t[0]=e=>m.value=e),onSearch:g},{icon:(0,a.w5)((()=>[d])),_:1},8,["disabled","modelValue"]),h.value?((0,a.wg)(),(0,a.iD)("div",v,[(0,a.Wm)((0,l.SU)(i.Z),{onAdded:b,"forced-topic":h.value},null,8,["forced-topic"]),(0,a.Wm)((0,l.SU)(u.Z),{tweets:n.value,loading:f.value},null,8,["tweets","loading"]),0===n.value.length?((0,a.wg)(),(0,a.iD)("div",p," No tweets were found in this topic... ")):(0,a.kq)("",!0)])):(0,a.kq)("",!0)],64))}};const m=f;var w=m},3669:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(3396),l=n(4870),o=n(4911),r=n(6836),s=n(635),i=n(1549);const u={key:0,class:"p-8 text-gray-500 text-center"},c={key:1,class:"p-8 text-gray-500 text-center"};var d={setup(e){const t=(0,l.iH)(null);(0,s.c3)((e=>t.value=e.params.tweet));const n=(0,l.iH)(!1),d=(0,l.iH)(null);return(0,a.m0)((async()=>{try{n.value=!0,d.value=await(0,r.Z3)(new o.PublicKey(t.value))}catch(e){d.value=null}finally{n.value=!1}})),(e,t)=>n.value?((0,a.wg)(),(0,a.iD)("div",u," Loading... ")):d.value?((0,a.wg)(),(0,a.j4)((0,l.SU)(i.Z),{key:2,tweet:d.value},null,8,["tweet"])):((0,a.wg)(),(0,a.iD)("div",c," Tweet not found "))}};const v=d;var p=v},2679:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var a=n(3396),l=n(4870),o=n(678),r=n(6836),s=n(635),i=n(7792),u=n(7632);const c=(0,a._)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[(0,a._)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"})],-1),d={key:0},v={key:0,class:"p-8 text-gray-500 text-center"};var p={setup(e){const t=(0,o.tv)(),n=(0,l.iH)([]),p=(0,l.iH)(!0),f=(0,l.iH)(""),m=(0,l.iH)(""),w=()=>{t.push(`/users/${f.value}`)},h=async()=>{if(f.value!==m.value)try{p.value=!0;const e=await(0,r.u_)([(0,r.Ac)(f.value)]);n.value=e,m.value=f.value}finally{p.value=!1}};return(0,s.c3)((e=>{f.value=e.params.author,f.value?h():(n.value=[],m.value="")})),(e,t)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)((0,l.SU)(u.Z),{placeholder:"public key",disabled:!f.value,modelValue:f.value,"onUpdate:modelValue":t[0]||(t[0]=e=>f.value=e),onSearch:w},{icon:(0,a.w5)((()=>[c])),_:1},8,["disabled","modelValue"]),m.value?((0,a.wg)(),(0,a.iD)("div",d,[(0,a.Wm)((0,l.SU)(i.Z),{tweets:n.value,loading:p.value},null,8,["tweets","loading"]),0===n.value.length?((0,a.wg)(),(0,a.iD)("div",v," User not found... ")):(0,a.kq)("",!0)])):(0,a.kq)("",!0)],64))}};const f=p;var m=f},1549:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var a=n(3396),l=n(4870),o=n(7139),r=n(635);const s={class:"px-8 py-4"},i=["title"],u=(0,a._)("span",{class:"text-gray-500"}," • ",-1),c=["title"],d=["textContent"];var v={props:{tweet:Object},setup(e){const t=e,{tweet:n}=(0,l.BK)(t),{wallet:v}=(0,r.cF)(),p=(0,a.Fl)((()=>v.value&&v.value.publicKey.toBase58()===n.value.author.toBase58()?{name:"Profile"}:{name:"Users",params:{author:n.value.author.toBase58()}}));return(e,t)=>{const r=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",s,[(0,a._)("div",null,[(0,a._)("h3",{class:"inline font-semibold",title:(0,l.SU)(n).author},[(0,a.Wm)(r,{to:(0,l.SU)(p),class:"hover:underline"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)((0,l.SU)(n).author_display),1)])),_:1},8,["to"])],8,i),u,(0,a._)("time",{class:"text-gray-500 text-sm",title:(0,l.SU)(n).created_at},[(0,a.Wm)(r,{to:{name:"Tweet",params:{tweet:(0,l.SU)(n).publicKey.toBase58()}},class:"hover:underline"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)((0,l.SU)(n).created_ago),1)])),_:1},8,["to"])],8,c)]),(0,a._)("p",{class:"whitespace-pre-wrap",textContent:(0,o.zw)((0,l.SU)(n).content)},null,8,d),(0,l.SU)(n).topic?((0,a.wg)(),(0,a.j4)(r,{key:0,to:{name:"Topics",params:{topic:(0,l.SU)(n).topic}},class:"inline-block mt-2 text-blue-700 hover:underline"},{default:(0,a.w5)((()=>[(0,a.Uk)(" #"+(0,o.zw)((0,l.SU)(n).topic),1)])),_:1},8,["to"])):(0,a.kq)("",!0)])}}};const p=v;var f=p},9375:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var a=n(3396),l=n(4870),o=n(9242),r=n(7139),s=n(635),i=n(6836),u=n(9844);const c={key:0,class:"px-8 py-4 border-b"},d={class:"flex flex-wrap items-center justify-between -m-2"},v={class:"relative m-2 mr-4"},p=["value","disabled"],f={class:"absolute left-0 inset-y-0 flex pl-3 pr-2"},m=(0,a._)("path",{"fill-rule":"evenodd",d:"M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z","clip-rule":"evenodd"},null,-1),w=[m],h={class:"flex items-center space-x-6 m-2 ml-auto"},g=["disabled"],y={key:1,class:"px-8 py-4 bg-gray-50 text-gray-500 text-center border-b"};var b={props:{forcedTopic:String},emits:["added"],setup(e,{emit:t}){const n=e,{forcedTopic:m}=(0,l.BK)(n),b=(0,l.iH)(""),x=(0,l.iH)(""),_=(0,s.f2)(x),k=(0,a.Fl)((()=>m.value??_.value)),S=(0,l.iH)();(0,s.dN)(S);const H=(0,s.T8)(b,280),U=(0,a.Fl)((()=>H.value<0?"text-red-500":H.value<=10?"text-yellow-500":"text-gray-400")),{connected:C}=(0,u.Os)(),z=(0,a.Fl)((()=>b.value&&H.value>0)),M=async()=>{if(!z.value)return;const e=await(0,i.R)(k.value,b.value);t("added",e),x.value="",b.value=""};return(e,t)=>(0,l.SU)(C)?((0,a.wg)(),(0,a.iD)("div",c,[(0,a.wy)((0,a._)("textarea",{ref_key:"textarea",ref:S,rows:"1",class:"text-xl w-full focus:outline-none resize-none mb-3",placeholder:"What's happening?","onUpdate:modelValue":t[0]||(t[0]=e=>b.value=e)},null,512),[[o.nr,b.value]]),(0,a._)("div",d,[(0,a._)("div",v,[(0,a._)("input",{type:"text",placeholder:"topic",class:"text-blue-700 rounded-full pl-10 pr-4 py-2 bg-gray-100",value:(0,l.SU)(k),disabled:(0,l.SU)(m),onInput:t[1]||(t[1]=e=>x.value=e.target.value)},null,40,p),(0,a._)("div",f,[((0,a.wg)(),(0,a.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",class:(0,r.C_)(["h-5 w-5 m-auto",(0,l.SU)(k)?"text-blue-700":"text-gray-400"]),viewBox:"0 0 20 20",fill:"currentColor"},w,2))])]),(0,a._)("div",h,[(0,a._)("div",{class:(0,r.C_)((0,l.SU)(U))},(0,r.zw)((0,l.SU)(H))+" left ",3),(0,a._)("button",{class:(0,r.C_)(["text-white px-4 py-2 rounded-full font-semibold",(0,l.SU)(z)?"bg-blue-700":"bg-blue-500 cursor-not-allowed"]),disabled:!(0,l.SU)(z),onClick:M}," Tweet ",10,g)])])])):((0,a.wg)(),(0,a.iD)("div",y," Connect your wallet to start tweeting... "))}};const x=b;var _=x},7792:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(4870),l=n(3396),o=n(1549);const r={key:0,class:"p-8 text-gray-500 text-center"},s={key:1,class:"divide-y"};var i={props:{tweets:Array,loading:Boolean},setup(e){const t=e,{tweets:n,loading:i}=(0,a.BK)(t),u=(0,l.Fl)((()=>n.value.slice().sort(((e,t)=>t.timestamp-e.timestamp))));return(e,t)=>(0,a.SU)(i)?((0,l.wg)(),(0,l.iD)("div",r," Loading... ")):((0,l.wg)(),(0,l.iD)("div",s,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)((0,a.SU)(u),(e=>((0,l.wg)(),(0,l.j4)((0,a.SU)(o.Z),{key:e.key,tweet:e},null,8,["tweet"])))),128))]))}};const u=i;var c=u},7632:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(3396),l=n(4870),o=n(9242),r=n(7139);const s={class:"relative border-b"},i=["placeholder","value"],u={class:"absolute right-0 inset-y-0 flex items-center pr-8"},c=["disabled"];var d={props:{modelValue:String,placeholder:String,disabled:Boolean},emits:["search","update:modelValue"],setup(e,{emit:t}){const n=e,{modelValue:d,placeholder:v,disabled:p}=(0,l.BK)(n);return(e,n)=>((0,a.wg)(),(0,a.iD)("div",s,[(0,a._)("input",{type:"text",class:"text-gray-700 w-full pl-16 pr-32 py-4 bg-gray-50",placeholder:(0,l.SU)(v),value:(0,l.SU)(d),onInput:n[0]||(n[0]=e=>t("update:modelValue",e.target.value)),onKeydown:n[1]||(n[1]=(0,o.D2)((e=>t("search")),["enter"]))},null,40,i),(0,a._)("div",{class:(0,r.C_)(["absolute left-0 inset-y-0 flex items-center justify-center pl-8 pr-2",(0,l.SU)(d)?"text-gray-700":"text-gray-400"])},[(0,a.WI)(e.$slots,"icon")],2),(0,a._)("div",u,[(0,a._)("button",{class:(0,r.C_)(["rounded-full px-4 py-1 font-semibold",(0,l.SU)(p)?"text-gray-400 bg-gray-200 cursor-not-allowed":"text-gray-700 bg-gray-300 hover:bg-gray-400 hover:text-white"]),disabled:(0,l.SU)(p),onClick:n[2]||(n[2]=e=>t("search"))}," Search ",10,c)])]))}};const v=d;var p=v},6601:function(){},9214:function(){},5568:function(){},5024:function(){}},t={};function n(a){var l=t[a];if(void 0!==l)return l.exports;var o=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,a,l,o){if(!a){var r=1/0;for(c=0;c<e.length;c++){a=e[c][0],l=e[c][1],o=e[c][2];for(var s=!0,i=0;i<a.length;i++)(!1&o||r>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[i])}))?a.splice(i--,1):(s=!1,o<r&&(r=o));if(s){e.splice(c--,1);var u=l();void 0!==u&&(t=u)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[a,l,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(a,l){if(1&l&&(a=this(a)),8&l)return a;if("object"===typeof a&&a){if(4&l&&a.__esModule)return a;if(16&l&&"function"===typeof a.then)return a}var o=Object.create(null);n.r(o);var r={};e=e||[null,t({}),t([]),t(t)];for(var s=2&l&&a;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((function(e){r[e]=function(){return a[e]}}));return r["default"]=function(){return a},n.d(o,r),o}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{138:"a08724e3",211:"d6fef99c",321:"f5c45ac8",550:"6164fbec",700:"5154ea1b"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="app:";n.l=function(a,l,o,r){if(e[a])e[a].push(l);else{var s,i;if(void 0!==o)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+o){s=d;break}}s||(i=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+o),s.src=a),e[a]=[l];var v=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var l=e[a];if(delete e[a],s.parentNode&&s.parentNode.removeChild(s),l&&l.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(v.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=v.bind(null,s.onerror),s.onload=v.bind(null,s.onload),i&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/AceSocial/"}(),function(){var e={143:0};n.f.j=function(t,a){var l=n.o(e,t)?e[t]:void 0;if(0!==l)if(l)a.push(l[2]);else{var o=new Promise((function(n,a){l=e[t]=[n,a]}));a.push(l[2]=o);var r=n.p+n.u(t),s=new Error,i=function(a){if(n.o(e,t)&&(l=e[t],0!==l&&(e[t]=void 0),l)){var o=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",s.name="ChunkLoadError",s.type=o,s.request=r,l[1](s)}};n.l(r,i,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var l,o,r=a[0],s=a[1],i=a[2],u=0;if(r.some((function(t){return 0!==e[t]}))){for(l in s)n.o(s,l)&&(n.m[l]=s[l]);if(i)var c=i(n)}for(t&&t(a);u<r.length;u++)o=r[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},a=self["webpackChunkapp"]=self["webpackChunkapp"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(5250)}));a=n.O(a)})();
//# sourceMappingURL=app.19753d62.js.map