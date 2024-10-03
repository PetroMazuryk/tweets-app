import{j as t,u as y,a as s,r as d,f as m,b as k,L as C}from"./index-CUDVrd0e.js";import{G as L,n as o,F as T,L as z,C as F,N as I}from"./Navigation-j3y6ur2R.js";function B(e){return L({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0.5 8l7.5 7.5v-4.5h8v-6h-8v-4.5z"},child:[]}]})(e)}const S=o.button`
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
`,M=o.span`
  display: flex;
  align-items: center;
  margin-right: 12px;
`,P=()=>t.jsxs(S,{children:[t.jsx(M,{children:t.jsx(B,{})}),"Go Back"]}),A=e=>e.tweets.items,E=e=>e.tweets.isLoading,R=e=>e.tweets.error,U=e=>e.tweets.hasMore,D=e=>e.tweets.page,G=o.select`
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
`,N=({options:e,filter:n,onSelect:r})=>{const i=a=>{r(a.target.value)};return t.jsx("div",{children:t.jsx(G,{value:n,onChange:i,children:e.map(a=>t.jsx("option",{value:a.value,children:a.label},a.value))})})},H=[{value:"all",label:"Show all"},{value:"follow",label:"Follow"},{value:"following",label:"Following"}],W="/tweets-app/assets/picture-B77hZ4Xo.png",O="/tweets-app/assets/Rectangle-Cw4HuGmw.png",q="/tweets-app/assets/Ellipse-DmnRR60u.png",X=o(T)`
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
`,Z=o.div`
  width: 140px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`,$=o.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
`,J=o.li`
  position: relative;
  width: 380px;
  background: var(--background-card);
  border-radius: 20px;
`,K=o.img`
  width: 100px;
  padding-top: 20px;
  padding-left: 20px;
  margin-bottom: 180px;
`,Q=o.img`
  position: absolute;
  top: 28px;
  left: 36px;
  width: 308px;
  height: 168px;
`,V=o.div`
  position: relative;
`,Y=o.img`
  display: block;
  width: 100%;
  margin-bottom: 62px;
`,_=o.div`
  width: 130px;
  height: 130px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--background-body);
`,tt=o.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 130px;
  height: 130px;
  transform: translate(-50%, -50%);
`,ot=o.img`
  position: absolute;
  top: 45%;
  left: 50%;
  width: 100px;
  height: 100px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
`,et=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  max-width: 250px;
  margin-left: auto;
  margin-right: auto;
`,rt=o.p`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: var(--color-text);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
`,at=o.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: var(--color-text);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
`,nt=o.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: var(--color-text);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
`,st=o.button`
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
`,it=o.button`
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
`,lt=()=>{const e=y(),n=s(A),r=s(E),i=s(R),a=s(D),l=s(U),p=d.useRef(!0),[u,f]=d.useState("all"),h=c=>{f(c)};d.useEffect(()=>{p.current&&!r&&(e(m({page:a})),p.current=!1)},[e,n.length,a,r]);const b=()=>{!r&&l&&e(m({page:a}))};return t.jsxs(t.Fragment,{children:[i&&t.jsxs("p",{children:["Error: ",i]}),t.jsx(Z,{children:t.jsx(N,{options:H,filter:u,onSelect:h})}),t.jsx($,{children:r&&n.length===0?t.jsx(X,{size:50,color:"aqua"}):n.map(({id:c,avatar:v,followers:w,tweets:j,user:g,isFollowed:x})=>t.jsxs(J,{children:[t.jsx(K,{src:z,alt:"Logo Image"}),t.jsx(Q,{src:W,alt:"Promo Image"}),t.jsxs(V,{children:[t.jsx(Y,{src:O,alt:"Rectangle line"}),t.jsxs(_,{children:[t.jsx(tt,{src:q,alt:"Ellipse png"}),t.jsx(ot,{src:v,alt:g})]})]}),t.jsxs(et,{children:[t.jsxs(at,{children:["user: ",g]}),t.jsxs(rt,{children:["tweets: ",j]}),t.jsxs(nt,{children:["followers: ",w]}),t.jsx(st,{type:"button",isFollowed:x,children:x?"Following":"Follow"})]})]},c))}),l&&t.jsx(it,{onClick:b,disabled:r,children:r&&n.length>0?t.jsx("p",{children:"Loading more..."}):t.jsx("p",{children:"Load more"})}),!l&&t.jsx("p",{children:"No more tweets to load"})]})},ct=o.section`
  padding: 20px;
  min-height: 100vh;
  background: var(--background-body);
`,dt=o.h1`
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
`,pt=o.h1`
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
`,mt=()=>{var r;const n=((r=k().state)==null?void 0:r.from)??"/";return t.jsx(ct,{children:t.jsxs(F,{children:[t.jsx(I,{}),t.jsx(dt,{children:"Users Tweets"}),t.jsx(C,{to:n,children:t.jsx(P,{})}),t.jsx(pt,{children:"Tweet Cards"}),t.jsx(lt,{})]})})};export{mt as default};
