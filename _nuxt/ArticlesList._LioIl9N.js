import w from"./ArticlesListItem.cwYrFJuM.js";import k from"./ProseA.cgIu3brv.js";import v from"./ProseCodeInline.XJrgZKdk.js";import{u as I}from"./asyncData.QgNYMlIw.js";import{d as g,Y as A,I as S,M as n,b as a,c as r,e as o,g as i,F as C,Z as B,j as e,w as d,p as L,i as N,s as V,$ as b,X as F,l as P}from"./entry.XTkC4UnS.js";import"./date.3uOv5BcS.js";const T=t=>(L("data-v-6d4225fd"),t=t(),N(),t),Y={key:0,class:"articles-list"},j={class:"featured"},q={class:"layout"},D={key:1,class:"tour"},E=T(()=>o("p",null,"Seems like there are no articles yet.",-1)),M=g({__name:"ArticlesList",props:{path:{type:String,default:"articles"}},async setup(t){let s,l;const u=t,{data:m}=([s,l]=A(async()=>I("articles",async()=>await V(b(u.path)).sort({date:-1}).find())),s=await s,l(),s),c=S(()=>m.value||[]);return(X,Z)=>{var p;const _=w,f=k,h=v;return(p=n(c))!=null&&p.length?(a(),r("div",Y,[o("div",j,[i(_,{article:n(c)[0],featured:!0},null,8,["article"])]),o("div",q,[(a(!0),r(C,null,B(n(c).slice(1),(y,x)=>(a(),F(_,{key:x,article:y},null,8,["article"]))),128))])])):(a(),r("div",D,[E,o("p",null,[e(" You can start by "),i(f,{href:"https://alpine.nuxt.space/articles/write-articles"},{default:d(()=>[e("creating")]),_:1}),e(" one in the "),i(h,null,{default:d(()=>[e("articles")]),_:1}),e(" folder. ")])]))}}}),O=P(M,[["__scopeId","data-v-6d4225fd"]]);export{O as default};
