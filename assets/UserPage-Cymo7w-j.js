import{j as t,u as C,a as s,r as x,f as u,b as L,c as z,L as T}from"./index-tQey4HRb.js";import{G as F,n as o,F as I,L as B,C as M,N as S}from"./Navigation-RU6TESXx.js";function P(e){return F({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0.5 8l7.5 7.5v-4.5h8v-6h-8v-4.5z"},child:[]}]})(e)}const A=o.button`
  width: 140px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font-family);
  font-size: 18px;
  font-weight: 900;
  margin-left: 24px;
  background: var(--background-body);
  color: var(--color-text);
  border-radius: 30px;

  transition: background-color 0.4s;
  -webkit-transition: background-color 0.4s;
  -moz-transition: background-color 0.4s;
  -ms-transition: background-color 0.4s;
  -o-transition: background-color 0.4s;
  cursor: pointer;

  &:hover {
    background: var(--button-hover);
    color: black;
  }

  @media screen and (max-width: 530px) {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
  }
`,E=o.span`
  display: flex;
  align-items: center;
  margin-right: 12px;
`,R=()=>t.jsxs(A,{children:[t.jsx(E,{children:t.jsx(P,{})}),"Go Back"]}),U=e=>e.tweets.items,D=e=>e.tweets.isLoading,N=e=>e.tweets.error,G=e=>e.tweets.hasMore,H=e=>e.tweets.page,W=o.select`
  width: 100%;
  height: 40px;
  border-radius: var(--border-radius);
  background: var(--background-card);
  border: var(--border);
  padding: 6px;
  color: #c08cf5;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #005fa3;
  }

  &:focus {
    border-color: #004080;
  }
`,O=({options:e,filter:i,onSelect:r})=>{const l=a=>{r(a.target.value)};return t.jsx("div",{children:t.jsx(W,{value:i,onChange:l,children:e.map(a=>t.jsx("option",{value:a.value,children:a.label},a.value))})})},q=[{value:"all",label:"Show all"},{value:"follow",label:"Follow"},{value:"following",label:"Following"}],X="/tweets-app/assets/picture-B77hZ4Xo.png",Z="/tweets-app/assets/Rectangle-Cw4HuGmw.png",$="/tweets-app/assets/Ellipse-DmnRR60u.png",J=o(I)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  animation: rotate 5s infinite linear;
  -webkit-animation: rotate 5s infinite linear;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`,K=o.div`
  width: 140px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`,Q=o.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
`,V=o.li`
  position: relative;
  width: 380px;
  background: var(--background-card);
  border-radius: 20px;
`,Y=o.img`
  width: 100px;
  padding-top: 20px;
  padding-left: 20px;
  margin-bottom: 180px;
`,_=o.img`
  position: absolute;
  top: 28px;
  left: 36px;
  width: 308px;
  height: 168px;
`,tt=o.div`
  position: relative;
`,ot=o.img`
  display: block;
  width: 100%;
  margin-bottom: 62px;
`,et=o.div`
  width: 130px;
  height: 130px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--background-body);
`,rt=o.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 130px;
  height: 130px;
  transform: translate(-50%, -50%);
`,at=o.img`
  position: absolute;
  top: 45%;
  left: 50%;
  width: 100px;
  height: 100px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
`,nt=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  max-width: 250px;
  margin-left: auto;
  margin-right: auto;
`,it=o.p`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: var(--color-text);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
`,st=o.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: var(--color-text);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
`,lt=o.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: var(--color-text);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
`,ct=o.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 194px;
  font-family: var(--font-family);
  font-weight: 600;
  line-height: 22px;
  color: var(--color-text-btn);
  text-transform: uppercase;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 36px;

  background: ${({isFollowed:e})=>e?"var(--button-color-active)":"var(--background-body)"};

  border-radius: var(--border-radius);
  padding: 14px 28px;
  transition: color var(--transition);

  &.button-color-active {
    background: var(--button-color-active);
  }

  &:hover {
    background: var(--button-hover);
    color: var(--button-color-text);
  }
`,dt=o.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  font-family: var(--font-family);
  font-weight: 600;
  line-height: 22px;
  color: var(--color-text);
  text-transform: uppercase;
  background: var(--background-body);

  border-radius: var(--border-radius);
  padding: 14px 28px;
  transition: var(--transition);

  &:hover {
    background: var(--button-hover);
    color: var(--button-color-text);
  }
`,pt=o.p`
  font-size: 20px;

  font-weight: 700;
  text-align: center;
  color: var(--color-text-more);
  @media screen and (min-width: 1200px) {
    font-size: 30px;
  }
`,gt=()=>{const e=C(),i=s(U),r=s(D),l=s(N),a=s(H),c=s(G),m=x.useRef(!0),[d,h]=x.useState("all"),b=n=>{h(n)};x.useEffect(()=>{m.current&&!r&&(e(u({page:a})),m.current=!1)},[e,i.length,a,r]);const v=()=>{!r&&c&&e(u({page:a}))},w=(n,p)=>{e(L({tweetId:n,isFollowed:p}))},j=i.filter(n=>d==="follow"?!n.isFollowed:d==="following"?n.isFollowed:!0);return t.jsxs(t.Fragment,{children:[l&&t.jsxs("p",{children:["Error: ",l]}),t.jsx(K,{children:t.jsx(O,{options:q,filter:d,onSelect:b})}),t.jsx(Q,{children:r&&i.length===0?t.jsx(J,{size:50,color:"aqua"}):j.map(({id:n,avatar:p,followers:y,tweets:k,user:f,isFollowed:g})=>t.jsxs(V,{children:[t.jsx(Y,{src:B,alt:"Logo Image"}),t.jsx(_,{src:X,alt:"Promo Image"}),t.jsxs(tt,{children:[t.jsx(ot,{src:Z,alt:"Rectangle line"}),t.jsxs(et,{children:[t.jsx(rt,{src:$,alt:"Ellipse png"}),t.jsx(at,{src:p,alt:f})]})]}),t.jsxs(nt,{children:[t.jsxs(st,{children:["user: ",f]}),t.jsxs(it,{children:["tweets: ",k]}),t.jsxs(lt,{children:["followers: ",y]}),t.jsx(ct,{type:"button",isFollowed:g,onClick:()=>w(n,g),children:g?"Following":"Follow"})]})]},n))}),c&&t.jsx(dt,{onClick:v,disabled:r,children:r&&i.length>0?t.jsx("p",{children:"Loading more..."}):t.jsx("p",{children:"Load more"})}),!c&&t.jsx(pt,{children:"No more tweets to load"})]})},xt=o.section`
  padding: 20px;
  min-height: 100vh;
  background: var(--background-body);
`,mt=o.h1`
  font-family: var(--font-family);
  display: flex;
  justify-content: center;
  font-size: 61px;
  margin-bottom: 30px;
  color: var(--color-text);

  @media screen and (max-width: 475px) {
    font-size: 41px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 475px) {
    font-size: 31px;
  }
`,ft=o.h1`
  font-family: var(--font-family);
  display: flex;
  justify-content: center;
  font-size: 41px;
  margin-bottom: 20px;
  color: var(--color-text);

  @media screen and (max-width: 475px) {
    font-size: 31px;
  }

  @media screen and (max-width: 475px) {
    font-size: 21px;
  }
`,bt=()=>{var r;const i=((r=z().state)==null?void 0:r.from)??"/";return t.jsx(xt,{children:t.jsxs(M,{children:[t.jsx(S,{}),t.jsx(mt,{children:"Users Tweets"}),t.jsx(T,{to:i,children:t.jsx(R,{})}),t.jsx(ft,{children:"Tweet Cards"}),t.jsx(gt,{})]})})};export{bt as default};
