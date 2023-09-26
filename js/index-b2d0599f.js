import{a as Z,b as v,R as b,o as z,u as Q,r as u,m as j,M,e as _,d as Y,c as q,j as n,C as D,f as J,L as V,I as R,E as $}from"./index-a2758582.js";import{s as t,a as H,b as w,c as h,d as i,B as k}from"./index-30ad9643.js";/*!
 * sc2-bank-generator v.1.0.8
 *
 * Compiled from:
 *
 * sc2-bank-generator/src/components/maps/mineralz-evolution/store.ts
 * sc2-bank-generator/src/components/maps/mineralz-evolution/functions.ts
 * sc2-bank-generator/src/components/maps/mineralz-evolution/index.tsx
 *
 * Сompiled on Tue, 26 Sep 2023 07:56:36 UTC
 */class ee{constructor(){this.init(),Z(this)}setFields(e){this.params=e?[...e]:[]}updateAt(e,o,l){if(l){this.params[e].value=o;return}const c=[...this.params];c[e].value=o,this.params=c}reset(){this.init()}init(){const e=v(1,40);let o=e*20;const l=Math.floor(v(o*.3,o*.5));o-=l;const c=Math.floor(v(o*.2,o*.4));o-=c;const p=Math.floor(v(o*.1,o*.3));o-=p;const d=Math.floor(v(o*.2,o*.5));o-=d;const S=o;this.params=[{type:"number",value:e,description:"Prestige",min:0,max:40,tip:"0 - 40"},{type:"number",value:v(25,175),description:"Level",min:1,max:200,tip:"1 - 200"},{type:"number",value:v(25,125),description:"Wins",min:0,max:999999},{type:"number",value:35,description:"Nights",min:0,max:35,tip:"0 - 35"},{type:"number",value:35,description:"Elite",min:0,max:35,tip:"0 - 35"},{type:"number",value:35,description:"Nightmare",min:0,max:35,tip:"0 - 35"},{type:"number",value:35,description:"Hell",min:0,max:35,tip:"0 - 35"},{type:"number",value:v(0,35),description:"Impossible",min:0,max:35,tip:"0 - 35"},{type:"number",value:c,description:"Wall",min:0,max:999999},{type:"number",value:p,description:"Cannons",min:0,max:999999},{type:"number",value:d,description:"Healer",min:0,max:999999},{type:"number",value:S,description:"Generator",min:0,max:999999},{type:"number",value:l,description:"Economy",min:0,max:999999}]}}const r=new ee;class te{generateXML(e){const o=58.70751953125,l=12,c=22,p=2,d=26,S=18,g=40,y=662,I=1,m=parseInt(e.info.playerID.substring(8)),x=r.params[0].value;if(x>0){e.addKey("PHR","INT",x,"Sec");let K=0;for(let X=0;X<x;X++)K=(K+39)*1.2;e.addKey("PR","FIXED",K,"Sec")}else e.removeKey("PR","Sec"),e.removeKey("PHR","Sec");const s=r.params[1].value;e.addKey("NIVO","FIXED",s,"Sec"),e.addKey("NIVEXP","FIXED",s*1224,"Sec");const a=r.params[2].value;e.addKey("WINS","FIXED",a,"Sec");const f=r.params[3].value;f>0?(e.addKey("NIGHTMNHD","FIXED",f,"Sec"),e.addKey("KILLED","FIXED",f*4788,"Sec"),f>=35?e.addKey("ZUHIB","FIXED",121186,"Sec"):e.removeKey("ZUHIB","Sec")):(e.removeKey("NIGHTMNHD","Sec"),e.removeKey("KILLED","Sec"),e.removeKey("ZUHIB","Sec"));const L=r.params[4].value;L>0?(e.addKey("NIGHTELITE","FIXED",L,"Sec"),L>=35&&e.addKey("HEAL","FIXED",21634,"Sec")):(e.removeKey("NIGHTELITE","Sec"),e.removeKey("HEAL","Sec"));const C=r.params[5].value;C>0?(e.addKey("NIGHTNMAR","FIXED",C,"Sec"),e.addKey("XPNB","FIXED",C*1655,"Sec"),C>=35&&e.addKey("XPNQ","FIXED",59120,"Sec")):(e.removeKey("NIGHTNMAR","Sec"),e.removeKey("XPNB","Sec"),e.removeKey("XPNQ","Sec"));const F=r.params[6].value;F>0?(e.addKey("HL","FIXED",F,"Sec"),e.addKey("HAL","FIXED",F*1631,"Sec"),F>=35&&e.addKey("HLO","FIXED",25265,"Sec")):(e.removeKey("HL","Sec"),e.removeKey("HAL","Sec"),e.removeKey("HLO","Sec"));const E=r.params[7].value;if(E>0){e.addKey("ims","INT",E,"Sec");const K=Math.abs(t(h(E,10),Math.abs(t(H(w(h(t(h(t(o,i(5)),t(86,i(8)),t(l,i(3)),t(c,i(2)),t(p,i(7)),t(d,i(3)),t(S,i(6)),t(g,i(7)),t(y,i(5)),t(I,i(3)),t(m,65537)),i(3)),1e4)),1e3),10))));if(e.addKey("im","FIXED",h(K+E,10),"Sec"),E>=35){const X=H(w(h(t(h(t(o,i(3)),t(86,i(2)),t(l,i(7)),t(c,i(8)),t(p,i(17)),t(d,i(3)),t(S,i(2)),t(g,i(5)),t(y,i(11)),t(I,i(5)),t(m,65537)),i(10)),1e4)),1e3);e.addKey("is","FIXED",h(H(K,X),3.4),"Sec");const U=H(w(h(t(h(t(o,i(2)),t(86,i(3)),t(l,i(6)),t(c,i(5)),t(p,i(7)),t(d,i(3)),t(S,i(2)),t(g,i(5)),t(y,i(11)),t(I,i(5)),t(m,65537)),i(10)),1e4)),1e3);e.addKey("imval","FIXED",U,"Sec")}else e.removeKey("is","Sec"),e.removeKey("imval","Sec")}else e.removeKey("ims","Sec"),e.removeKey("im","Sec"),e.removeKey("is","Sec"),e.removeKey("imval","Sec");const P=r.params[8].value;P>0?e.addKey("a","INT",P*4,"Sec"):e.removeKey("a","Sec");const O=r.params[9].value;O>0?e.addKey("e","INT",O*7,"Sec"):e.removeKey("e","Sec");const B=r.params[10].value;B>0?e.addKey("i","INT",B*9,"Sec"):e.removeKey("i","Sec");const G=r.params[11].value;G>0?e.addKey("f","INT",G*5,"Sec"):e.removeKey("f","Sec");const W=r.params[12].value;W>0?e.addKey("o","INT",W*13,"Sec"):e.removeKey("o","Sec"),e.addKey("EASY","FIXED",35,"Sec"),e.addKey("VERSION","FIXED",6,"Sec");const T=v(1e5,5e5);return e.addKey("CODID","FIXED",T,"Sec"),e.addKey("DMGX","FIXED",T-44444,"Sec"),e.addKey("NRJY","FIXED",T-79999,"Sec"),e.addKey("EXPP","FIXED",100,"Sec"),e.updateSignature(),e.getAsString()}parse(e,o){return e.parse(o),e.sections.size!=1||e.sections.get("Sec")==null?(console.error("Wrong bank file!"),null):[{type:"number",value:this.getKey(e,"PHR"),description:"Prestige",min:0,max:40,tip:"0 - 40"},{type:"number",value:this.getKey(e,"NIVO"),description:"Level",min:1,max:200,tip:"1 - 200"},{type:"number",value:this.getKey(e,"WINS"),description:"Wins",min:0,max:999999},{type:"number",value:this.getKey(e,"NIGHTMNHD"),description:"Nights",min:0,max:35,tip:"0 - 35"},{type:"number",value:this.getKey(e,"NIGHTELITE"),description:"Elite",min:0,max:35,tip:"0 - 35"},{type:"number",value:this.getKey(e,"NIGHTNMAR"),description:"Nightmare",min:0,max:35,tip:"0 - 35"},{type:"number",value:this.getKey(e,"HL"),description:"Hell",min:0,max:35,tip:"0 - 35"},{type:"number",value:this.getKey(e,"ims"),description:"Impossible",min:0,max:35,tip:"0 - 35"},{type:"number",value:this.getKey(e,"a")/4,description:"Wall",min:0,max:999999},{type:"number",value:this.getKey(e,"e")/7,description:"Cannons",min:0,max:999999},{type:"number",value:this.getKey(e,"i")/9,description:"Healer",min:0,max:999999},{type:"number",value:this.getKey(e,"f")/5,description:"Generator",min:0,max:999999},{type:"number",value:this.getKey(e,"o")/13,description:"Economy",min:0,max:999999}]}getKey(e,o){const l=e.getKey(o,"Sec");return l?parseInt(l.value):0}}const A=new te,se=z(N=>{const{accountStore:e,menuStore:o,mapStore:l}=Q(),[c,p]=u.useState(N.bankName),[d,S]=u.useState(j.get(M.MINERALZ_EVOLUTION).authorID),g=j.get(M.MINERALZ_EVOLUTION).title,y=u.useMemo(()=>new k(c,d,o.playerID,"1"),[e.current,o.playerID,c,d]),I=()=>{l.setMapData(e.current,g,r.params)};u.useEffect(()=>{var a;const s=(a=l.list[e.current])==null?void 0:a[g];s?r.setFields(s):setTimeout(m.onResetClick)},[e.current]);const m={onBankNameChange:u.useCallback(s=>{p(s)},[]),onAuthorIdChange:u.useCallback(s=>{S(s)},[]),onFileDrop:u.useCallback((s,a)=>{const f=A.parse(y,a);f&&(_.flushSync(()=>r.setFields()),r.setFields(f))},[]),onDownloadClick:u.useCallback(()=>{Y(A.generateXML(y),c+".SC2Bank",!0),o.autoSave||I()},[y]),onCopyCodeClick:u.useCallback(()=>{q(A.generateXML(y),!0),o.autoSave||I()},[y]),onResetClick:u.useCallback(()=>{p(N.bankName),S(j.get(M.MINERALZ_EVOLUTION).authorID),_.flushSync(()=>r.setFields()),r.reset()},[]),onFieldChange:u.useCallback((s,a)=>{r.updateAt(a,parseInt(s),!0),o.autoSave&&I()},[])},x=u.useMemo(()=>n.jsxs(D,{style:{flexDirection:"column"},children:[n.jsxs(J,{style:{width:"500px"},children:["Note: the community of this map closely monitors the statistics of the players, their skills and match history, so ",n.jsx("b",{children:"use the hack wisely!"}),n.jsx("br",{}),n.jsx("br",{}),"The ",n.jsx("b",{children:"Reset"})," button generates random real stats, but avoid using it with more than ",n.jsx("b",{children:"5 Prestige"})," / ",n.jsx("b",{children:"5 Impossible"}),".",n.jsx("br",{}),"Or add ",n.jsx("b",{children:"+20 levels"})," / ",n.jsx("b",{children:"+5 wins"})," / ",n.jsx("b",{children:"+2 role wins"})," after every game to looks legit.",n.jsx("br",{})]}),n.jsx(V,{children:"Main stats:"}),n.jsx(D,{style:{flexDirection:"row",border:"1px solid #ffffff40",padding:"10px",justifyContent:"space-around"},alignInputs:!0,children:r.params.map((s,a)=>a<3?n.jsx(R,{index:a,type:"number",style:{width:"50px"},label:s.description+":",onChange:m.onFieldChange,min:s.min.toString(),max:s.max.toString(),value:s.value.toString(),tip:s.tip?s.tip:null},a):null)}),n.jsx(V,{children:"Survived nights and roles:"}),n.jsxs(D,{style:{flexDirection:"row"},children:[n.jsx(D,{style:{flexDirection:"column",border:"1px solid #ffffff40",padding:"10px"},alignInputs:!0,children:r.params.map((s,a)=>a>=3&&a<8?n.jsx(R,{index:a,type:"number",style:{width:"30px"},label:s.description+":",onChange:m.onFieldChange,min:s.min.toString(),max:s.max.toString(),value:s.value.toString(),tip:s.tip?s.tip:null},a):null)}),n.jsx(D,{style:{flexDirection:"column",border:"1px solid #ffffff40",padding:"10px"},alignInputs:!0,children:r.params.map((s,a)=>a>=8?n.jsx(R,{index:a,type:"number",style:{width:"50px"},label:s.description+":",onChange:m.onFieldChange,min:s.min.toString(),max:s.max.toString(),value:s.value.toString(),tip:s.tip?s.tip:null},a):null)})]})]}),[r.params]);return n.jsx($,{bankName:c,authorID:d,onBankNameChange:m.onBankNameChange,onAuthorIdChange:m.onAuthorIdChange,onFileDrop:m.onFileDrop,onDownload:m.onDownloadClick,onCopy:m.onCopyCodeClick,onReset:m.onResetClick,children:x})}),re=b.memo(se);export{re as default};
