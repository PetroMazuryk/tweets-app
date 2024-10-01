import{j as t,u as j,a as s,r as d,f as x,b as y,L as k}from"./index-OxkRoSP_.js";import{G as C,n as o,F as L,L as T,C as z,N as F}from"./Navigation-AF7nQTDL.js";function I(e){return C({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0.5 8l7.5 7.5v-4.5h8v-6h-8v-4.5z"},child:[]}]})(e)}const B=o.button`
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
`,S=o.span`
  display: flex;
  align-items: center;
  margin-right: 12px;
`,M=()=>t.jsxs(B,{children:[t.jsx(S,{children:t.jsx(I,{})}),"Go Back"]}),P=e=>e.tweets.items,A=e=>e.tweets.isLoading,E=e=>e.tweets.error,R=e=>e.tweets.hasMore,U=e=>e.tweets.page,D=o.select`
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
`,G=({options:e,filter:n,onSelect:r})=>{const i=a=>{r(a.target.value)};return t.jsx("div",{children:t.jsx(D,{value:n,onChange:i,children:e.map(a=>t.jsx("option",{value:a.value,children:a.label},a.value))})})},N=[{value:"all",label:"Show all"},{value:"follow",label:"Follow"},{value:"following",label:"Following"}],H="/tweets-app/assets/picture-B77hZ4Xo.png",W="/tweets-app/assets/Rectangle-Cw4HuGmw.png",O="/tweets-app/assets/Ellipse-DmnRR60u.png",q=o(L)`
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
`,X=o.div`
  width: 140px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`,Z=o.ul`
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
`,$=o.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 130px;
  height: 130px;
  transform: translate(-50%, -50%);
`,tt=o.img`
  position: absolute;
  top: 45%;
  left: 50%;
  width: 100px;
  height: 100px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
`,ot=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  max-width: 250px;
  margin-left: auto;
  margin-right: auto;
`,et=o.p`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: var(--color-text);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
`,rt=o.p`
  font-family: var(--font-family);
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
`,nt=o.button`
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
  background: var(--background-body);

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
`,st=o.button`
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
`,it=()=>{const e=j(),n=s(P),r=s(A),i=s(E),a=s(U),l=s(R),p=d.useRef(!0),[m,f]=d.useState("all"),u=c=>{f(c)};d.useEffect(()=>{p.current&&!r&&(e(x({page:a})),p.current=!1)},[e,n.length,a,r]);const h=()=>{!r&&l&&e(x({page:a}))};return t.jsxs(t.Fragment,{children:[i&&t.jsxs("p",{children:["Error: ",i]}),t.jsxs(X,{children:[" ",t.jsx(G,{options:N,filter:m,onSelect:u})]}),t.jsx(Z,{children:r&&n.length===0?t.jsx(q,{size:50,color:"aqua"}):n.map(({id:c,avatar:b,followers:v,tweets:w,user:g})=>t.jsxs(J,{children:[t.jsx(K,{src:T,alt:"Logo Image"}),t.jsx(Q,{src:H,alt:"Promo Image"}),t.jsxs(V,{children:[t.jsx(Y,{src:W,alt:"Rectangle line"}),t.jsxs(_,{children:[t.jsx($,{src:O,alt:"Ellipse png"}),t.jsx(tt,{src:b,alt:g})]})]}),t.jsxs(ot,{children:[t.jsxs(rt,{children:["user: ",g]}),t.jsxs(et,{children:["tweets: ",w]}),t.jsxs(at,{children:["followers: ",v]}),t.jsx(nt,{type:"button",children:"Following"})]})]},c))}),l&&t.jsx(st,{onClick:h,disabled:r,children:r&&n.length>0?t.jsx("p",{children:"Loading more..."}):t.jsx("p",{children:"Load more"})}),!l&&t.jsx("p",{children:"No more tweets to load"})]})},lt=o.section`
  padding: 20px;
  min-height: 100vh;
  background: var(--background-body);
`,ct=o.h1`
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
`,dt=o.h1`
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
`,xt=()=>{var r;const n=((r=y().state)==null?void 0:r.from)??"/";return t.jsx(lt,{children:t.jsxs(z,{children:[t.jsx(F,{}),t.jsx(ct,{children:"Users Tweets"}),t.jsx(k,{to:n,children:t.jsx(M,{})}),t.jsx(dt,{children:"Tweet Cards"}),t.jsx(it,{})]})})};export{xt as default};
