import{j as t,u as k,a as i,r as g,f,b as C,c as L,L as z}from"./index-yreY7AUn.js";import{G as T,n as o,F,L as I,C as B,N as M}from"./Navigation-s6y77ZVl.js";function S(e){return T({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0.5 8l7.5 7.5v-4.5h8v-6h-8v-4.5z"},child:[]}]})(e)}const P=o.button`
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
`,A=o.span`
  display: flex;
  align-items: center;
  margin-right: 12px;
`,E=()=>t.jsxs(P,{children:[t.jsx(A,{children:t.jsx(S,{})}),"Go Back"]}),R=e=>e.tweets.items,U=e=>e.tweets.isLoading,D=e=>e.tweets.error,N=e=>e.tweets.hasMore,G=e=>e.tweets.page,H=o.select`
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
`,W=({options:e,filter:n,onSelect:r})=>{const l=a=>{r(a.target.value)};return t.jsx("div",{children:t.jsx(H,{value:n,onChange:l,children:e.map(a=>t.jsx("option",{value:a.value,children:a.label},a.value))})})},O=[{value:"all",label:"Show all"},{value:"follow",label:"Follow"},{value:"following",label:"Following"}],q="/tweets-app/assets/picture-B77hZ4Xo.png",X="/tweets-app/assets/Rectangle-Cw4HuGmw.png",Z="/tweets-app/assets/Ellipse-DmnRR60u.png",$=o(F)`
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
`,J=o.div`
  width: 140px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`,K=o.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
`,Q=o.li`
  position: relative;
  width: 380px;
  background: var(--background-card);
  border-radius: 20px;
`,V=o.img`
  width: 100px;
  padding-top: 20px;
  padding-left: 20px;
  margin-bottom: 180px;
`,Y=o.img`
  position: absolute;
  top: 28px;
  left: 36px;
  width: 308px;
  height: 168px;
`,_=o.div`
  position: relative;
`,tt=o.img`
  display: block;
  width: 100%;
  margin-bottom: 62px;
`,ot=o.div`
  width: 130px;
  height: 130px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--background-body);
`,et=o.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 130px;
  height: 130px;
  transform: translate(-50%, -50%);
`,rt=o.img`
  position: absolute;
  top: 45%;
  left: 50%;
  width: 100px;
  height: 100px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
`,at=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  max-width: 250px;
  margin-left: auto;
  margin-right: auto;
`,nt=o.p`
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
`,it=o.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: var(--color-text);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
`,lt=o.button`
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
`,ct=o.button`
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
`,dt=o.p`
  font-size: 20px;

  font-weight: 700;
  text-align: center;
  color: var(--color-text-more);
  @media screen and (min-width: 1200px) {
    font-size: 30px;
  }
`,pt=()=>{const e=k(),n=i(R),r=i(U),l=i(D),a=i(G),c=i(N),x=g.useRef(!0),[u,h]=g.useState("all"),b=s=>{h(s)};g.useEffect(()=>{x.current&&!r&&(e(f({page:a})),x.current=!1)},[e,n.length,a,r]);const v=()=>{!r&&c&&e(f({page:a}))},w=(s,d)=>{e(C({tweetId:s,isFollowed:d}))};return t.jsxs(t.Fragment,{children:[l&&t.jsxs("p",{children:["Error: ",l]}),t.jsx(J,{children:t.jsx(W,{options:O,filter:u,onSelect:b})}),t.jsx(K,{children:r&&n.length===0?t.jsx($,{size:50,color:"aqua"}):n.map(({id:s,avatar:d,followers:j,tweets:y,user:m,isFollowed:p})=>t.jsxs(Q,{children:[t.jsx(V,{src:I,alt:"Logo Image"}),t.jsx(Y,{src:q,alt:"Promo Image"}),t.jsxs(_,{children:[t.jsx(tt,{src:X,alt:"Rectangle line"}),t.jsxs(ot,{children:[t.jsx(et,{src:Z,alt:"Ellipse png"}),t.jsx(rt,{src:d,alt:m})]})]}),t.jsxs(at,{children:[t.jsxs(st,{children:["user: ",m]}),t.jsxs(nt,{children:["tweets: ",y]}),t.jsxs(it,{children:["followers: ",j]}),t.jsx(lt,{type:"button",isFollowed:p,onClick:()=>w(s,p),children:p?"Following":"Follow"})]})]},s))}),c&&t.jsx(ct,{onClick:v,disabled:r,children:r&&n.length>0?t.jsx("p",{children:"Loading more..."}):t.jsx("p",{children:"Load more"})}),!c&&t.jsx(dt,{children:"No more tweets to load"})]})},gt=o.section`
  padding: 20px;
  min-height: 100vh;
  background: var(--background-body);
`,xt=o.h1`
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
`,mt=o.h1`
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
`,ht=()=>{var r;const n=((r=L().state)==null?void 0:r.from)??"/";return t.jsx(gt,{children:t.jsxs(B,{children:[t.jsx(M,{}),t.jsx(xt,{children:"Users Tweets"}),t.jsx(z,{to:n,children:t.jsx(E,{})}),t.jsx(mt,{children:"Tweet Cards"}),t.jsx(pt,{})]})})};export{ht as default};
