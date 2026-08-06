import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-8ppmUcV6.js";import{a as i,i as a,o,r as s,t as c}from"./MemberBox-BV1hZF-r.js";import{t as l}from"./member_box-CFkdxDVX.js";import{n as u,t as d}from"./SenatHemicycleIcon-euEjLHRi.js";var f=t((()=>{u()})),p,m,h,g,_,v=t((()=>{p=`_hemicycleContainer_1b10b_1`,m=`_svgContainer_1b10b_9`,h=`_legendContainer_1b10b_20`,g=`_legendItem_1b10b_26`,_={hemicycleContainer:p,svgContainer:m,legendContainer:h,legendItem:g}}));function y({label:e,zIndex:t=10}){return(0,x.jsx)(`div`,{style:{position:`absolute`,left:e.x,top:e.y-20,transform:`translate(-50%, -100%)`,backgroundColor:e.labelBackgroundColor||e.color,color:`white`,borderRadius:`4px`,boxShadow:`0 2px 4px rgba(0,0,0,0.2)`,backdropFilter:`blur(4px)`,zIndex:t},children:e.content})}var b,x,S,C=t((()=>{f(),b=e(n(),1),v(),x=r(),S=({highlightedSeats:e,legend:t,width:n=`90vw`,maxWidth:r=`500px`,minWidth:i=`300px`,className:a=``})=>{let o=(0,b.useRef)(null),[s,c]=(0,b.useState)(null),[l,u]=(0,b.useState)(null),[f,p]=(0,b.useState)(null);return(0,b.useEffect)(()=>{let t=[];if(e?.length>0&&o?.current){let n=o.current;e.forEach(({id:e,color:r,label:i,hoverable:a=!0,focusable:o=!0,labelBackgroundColor:s})=>{typeof e!=`string`&&(e=String(e));let l=n.querySelector(`[data-seat='${e}']`);if(l){t.push(l),l.style.fill=r;let e=i;if(e){let t=l.getBoundingClientRect(),i=n.getBoundingClientRect(),d=t.x-i.x+t.width/2,f=t.y-i.y;a&&(l.addEventListener(`mouseenter`,()=>{c({content:e,color:r,x:d,y:f,labelBackgroundColor:s})}),l.addEventListener(`mouseleave`,()=>{c(null)})),o&&(l.style.cursor=`pointer`,l.addEventListener(`click`,()=>{u({content:e,color:r,x:d,y:f,labelBackgroundColor:s})})),!o&&!a&&p({content:e,color:r,x:d,y:f,labelBackgroundColor:s})}}})}let n=e=>{t.includes(e.target)||u(null)};return document.addEventListener(`click`,n),()=>{document.removeEventListener(`click`,n)}},[e]),(0,x.jsxs)(`div`,{className:`${_.hemicycleContainer} ${a}`,children:[(0,x.jsxs)(`div`,{className:_.svgContainer,style:{width:n,maxWidth:r,minWidth:i},children:[(0,x.jsx)(d,{ref:o,highlightedSeats:e}),s&&(0,x.jsx)(y,{label:s,zIndex:100}),l&&(0,x.jsx)(y,{label:l,zIndex:10}),f&&(0,x.jsx)(y,{label:f,zIndex:1})]}),t&&t?.length>0&&(0,x.jsx)(`div`,{className:_.legendContainer,children:t.map(e=>(0,x.jsxs)(`p`,{className:_.legendItem,children:[(0,x.jsx)(`span`,{style:{backgroundColor:e.color}}),e.label]},e.label))})]})},S.__docgenInfo={description:``,methods:[],displayName:`SenatHemicycle`,props:{highlightedSeats:{required:!0,tsType:{name:`Array`,elements:[{name:`Seat`}],raw:`Seat[]`},description:`Highlighted seats objects`},legend:{required:!1,tsType:{name:`Array`,elements:[{name:`LegendItem`}],raw:`LegendItem[]`},description:`Legend`},width:{required:!1,tsType:{name:`string`},description:`Container width (percentage or px)`,defaultValue:{value:`"90vw"`,computed:!1}},maxWidth:{required:!1,tsType:{name:`string`},description:`Maximum width`,defaultValue:{value:`"500px"`,computed:!1}},minWidth:{required:!1,tsType:{name:`string`},description:`Minimum width`,defaultValue:{value:`"300px"`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Custom className for the container`,defaultValue:{value:`""`,computed:!1}}}}})),w,T,E,D,O,k,A,j,M,N,P,F;t((()=>{i(),l(),s(),C(),w=r(),T=o.person.firstName(),E=o.person.lastName(),D=[{id:`0`,color:`#ff3333`,label:`Siège 1`},{id:`1`,color:`#ce2929`,label:`Siège 2`},{id:`2`,color:`#ce2929`,label:`Siège 3`},{id:`3`,color:`#ce2929`,label:`Siège 4`},{id:`4`,color:`#23b73d`,label:`Siège 5`},{id:`5`,color:`#23b73d`,label:`Siège 6`},{id:`6`,color:`#ff668b`,label:`Siège 7`},{id:`7`,color:`#ff668b`,label:`Siège 8`},{id:`8`,color:`#ff668b`,label:`Siège 9`},{id:`9`,color:`#ff9f0e`,label:`Siège 10`},{id:`10`,color:`#ff9f0e`,label:`Siège 11`},{id:`11`,color:`#ff9f0e`,label:`Siège 12`},{id:`12`,color:`#ff9f0e`,label:`Siège 13`},{id:`13`,color:`#ffbe3f`,label:`Siège 14`},{id:`14`,color:`#ffbe3f`,label:`Siège 15`},{id:`15`,color:`#e1b000`,label:`Siège 16`},{id:`16`,color:`#e1b000`,label:`Siège 17`},{id:`17`,color:`#78668d`,label:`Siège 18`},{id:`18`,color:`#78668d`,label:`Siège 19`},{id:`19`,color:`#0890c5`,label:`Siège 20`},{id:`20`,color:`#0890c5`,label:`Siège 21`},{id:`21`,color:`#0890c5`,label:`Siège 22`},{id:`22`,color:`#0890c5`,label:`Siège 23`},{id:`23`,color:`#b5966d`,label:`Siège 24`},{id:`24`,color:`#b5966d`,label:`Siège 25`},{id:`25`,color:`#b5966d`,label:`Siège 26`},{id:`26`,color:`#8d6026`,label:`Siège 27`},{id:`27`,color:`#8d6026`,label:`Siège 28`},{id:`28`,color:`#8d6026`,label:`Siège 29`},{id:`29`,color:`#8d6026`,label:`Siège 30`},{id:`30`,color:`#8d6026`,label:`Siège 31`}],O={title:`ParliamentChamber/SenatHemicycle`,component:S,parameters:{docs:{description:{component:"An interactive SVG of the French Sénat hemicycle with seat highlighting.\n\n```tsx\nimport { SenatHemicycle } from '@tricoteuses/react-components';\n```"}}}},k={render:()=>(0,w.jsx)(S,{highlightedSeats:D})},A={decorators:[e=>(0,w.jsx)(a,{locale:`en`,children:(0,w.jsx)(e,{})})],render:()=>(0,w.jsx)(S,{highlightedSeats:[{id:125,color:`orange`,label:(0,w.jsx)(c,{firstName:T,lastName:E}),hoverable:!1,focusable:!1},{id:250,color:`#ff3333`,label:`Siège 250`}]})},j={decorators:[e=>(0,w.jsx)(a,{locale:`en`,children:(0,w.jsx)(e,{})})],render:()=>(0,w.jsx)(S,{highlightedSeats:[{id:330,color:`orange`,label:(0,w.jsx)(c,{firstName:T,lastName:E}),labelBackgroundColor:`#417ec7`}],legend:[{label:`Pour`,color:`green`},{label:`Contre`,color:`red`},{label:`Abstention`,color:`gray`}]})},M={render:()=>(0,w.jsx)(S,{highlightedSeats:[{id:`1`,color:`blue`,label:`Siège 1`},{id:`125`,color:`orange`,label:`Siège 125`},{id:`250`,color:`#ff3333`,label:`Siège 250`}],width:`50%`,maxWidth:`400px`,minWidth:`200px`})},N={render:()=>(0,w.jsx)(S,{highlightedSeats:[{id:`1`,color:`blue`,label:`Siège 1`},{id:`125`,color:`orange`,label:`Siège 125`},{id:`250`,color:`#ff3333`,label:`Siège 250`}],width:`100%`,maxWidth:`1200px`,minWidth:`600px`})},P={render:()=>(0,w.jsx)(S,{highlightedSeats:D,width:`75%`,maxWidth:`900px`,minWidth:`350px`})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <SenatHemicycle highlightedSeats={highlightedSeats} />
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <IntlProvider locale="en">
                <Story />
            </IntlProvider>],
  render: () => <SenatHemicycle highlightedSeats={[{
    id: 125,
    color: "orange",
    label: <MemberBox firstName={firstName} lastName={lastName} />,
    hoverable: false,
    focusable: false
  }, {
    id: 250,
    color: "#ff3333",
    label: "Siège 250"
  }]} />
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <IntlProvider locale="en">
                <Story />
            </IntlProvider>],
  render: () => <SenatHemicycle highlightedSeats={[{
    id: 330,
    color: "orange",
    label: <MemberBox firstName={firstName} lastName={lastName} />,
    labelBackgroundColor: "#417ec7"
  }]} legend={[{
    label: "Pour",
    color: "green"
  }, {
    label: "Contre",
    color: "red"
  }, {
    label: "Abstention",
    color: "gray"
  }]} />
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <SenatHemicycle highlightedSeats={[{
    id: "1",
    color: "blue",
    label: "Siège 1"
  }, {
    id: "125",
    color: "orange",
    label: "Siège 125"
  }, {
    id: "250",
    color: "#ff3333",
    label: "Siège 250"
  }]} width="50%" maxWidth="400px" minWidth="200px" />
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <SenatHemicycle highlightedSeats={[{
    id: "1",
    color: "blue",
    label: "Siège 1"
  }, {
    id: "125",
    color: "orange",
    label: "Siège 125"
  }, {
    id: "250",
    color: "#ff3333",
    label: "Siège 250"
  }]} width="100%" maxWidth="1200px" minWidth="600px" />
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <SenatHemicycle highlightedSeats={highlightedSeats} width="75%" maxWidth="900px" minWidth="350px" />
}`,...P.parameters?.docs?.source}}},F=[`SeatHighlighted`,`WithHtmlContentAsLabel`,`WithLegend`,`SmallSize`,`LargeSize`,`CustomSize`]}))();export{P as CustomSize,N as LargeSize,k as SeatHighlighted,M as SmallSize,A as WithHtmlContentAsLabel,j as WithLegend,F as __namedExportsOrder,O as default};