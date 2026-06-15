import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-8ppmUcV6.js";import{a as i,i as a,o,s,t as c}from"./MemberBox-KiXiu3-f.js";import{t as l}from"./member_box-CJ437Wd4.js";import{n as u,t as d}from"./AssembleeHemicycleGraphIcon-CPaY8EKQ.js";import{n as f,t as p}from"./AssembleeHemicycleIcon-CTR4e9gn.js";import{t as m}from"./Box-iVCsHr6y.js";import{t as h}from"./box-BdVx891f.js";var g=t((()=>{u()})),_=t((()=>{f()})),v,y,b,x,S,C=t((()=>{v=`_hemicycleContainer_1s4bo_1`,y=`_svgContainer_1s4bo_8`,b=`_legendContainer_1s4bo_19`,x=`_legendItem_1s4bo_25`,S={hemicycleContainer:v,svgContainer:y,legendContainer:b,legendItem:x}}));function w({label:e,zIndex:t=10}){return(0,E.jsx)(`div`,{style:{position:`absolute`,left:e.x,top:e.y-20,transform:`translate(-50%, -100%)`,backgroundColor:e.labelBackgroundColor||e.color,color:`white`,borderRadius:`8px`,boxShadow:`0 2px 4px rgba(0,0,0,0.2)`,backdropFilter:`blur(4px)`,zIndex:t},children:e.content})}var T,E,D,O=t((()=>{g(),_(),T=e(n(),1),C(),E=r(),D=({type:e=`default`,highlightedSeats:t,legend:n,width:r=`90vw`,maxWidth:i=`500px`,minWidth:a=`300px`,className:o=``})=>{let s=(0,T.useRef)(null),[c,l]=(0,T.useState)(null),[u,f]=(0,T.useState)(null),[m,h]=(0,T.useState)(null);return(0,T.useEffect)(()=>{let e=[];if(t?.length>0&&s?.current){let n=s.current;t.forEach(({id:t,color:r,label:i,hoverable:a=!0,focusable:o=!0,labelBackgroundColor:s})=>{typeof t!=`string`&&(t=String(t));let c=null;try{c=n.querySelector(`#p${t}`)||n.querySelector(`#${t.replace(/_/g,`\\_`)}`)}catch{c=null}if(c){e.push(c),c.style.fill=r;let t=i;if(t){let e=c.getBoundingClientRect(),i=n.getBoundingClientRect(),u=e.x-i.x+e.width/2,d=e.y-i.y;a&&(c.addEventListener(`mouseenter`,()=>{l({content:t,color:r,x:u,y:d,labelBackgroundColor:s})}),c.addEventListener(`mouseleave`,()=>{l(null)})),o&&(c.style.cursor=`pointer`,c.addEventListener(`click`,()=>{f({content:t,color:r,x:u,y:d,labelBackgroundColor:s})})),!o&&!a&&h({content:t,color:r,x:u,y:d,labelBackgroundColor:s})}}})}let n=t=>{e.includes(t.target)||f(null)};return document.addEventListener(`click`,n),()=>{document.removeEventListener(`click`,n)}},[t]),(0,E.jsxs)(`div`,{className:`${S.hemicycleContainer} ${o}`,children:[(0,E.jsxs)(`div`,{className:S.svgContainer,style:{width:r,maxWidth:i,minWidth:a},children:[e===`default`&&(0,E.jsx)(p,{ref:s}),e===`graph`&&(0,E.jsx)(d,{ref:s}),c&&(0,E.jsx)(w,{label:c,zIndex:100}),u&&(0,E.jsx)(w,{label:u,zIndex:10}),m&&(0,E.jsx)(w,{label:m,zIndex:1})]}),n&&n?.length>0&&(0,E.jsx)(`div`,{className:S.legendContainer,children:n.map(e=>(0,E.jsxs)(`p`,{className:S.legendItem,children:[(0,E.jsx)(`span`,{style:{backgroundColor:e.color}}),e.label]},e.label))})]})},D.__docgenInfo={description:``,methods:[],displayName:`AssembleeHemicycle`,props:{type:{required:!1,tsType:{name:`union`,raw:`"default" | "graph"`,elements:[{name:`literal`,value:`"default"`},{name:`literal`,value:`"graph"`}]},description:`Svg type`,defaultValue:{value:`"default"`,computed:!1}},highlightedSeats:{required:!0,tsType:{name:`Array`,elements:[{name:`Seat`}],raw:`Seat[]`},description:`Highlighted seats objects`},legend:{required:!1,tsType:{name:`Array`,elements:[{name:`LegendItem`}],raw:`LegendItem[]`},description:`Legend`},width:{required:!1,tsType:{name:`string`},description:`Container width (percentage or px) - default: 500px`,defaultValue:{value:`"90vw"`,computed:!1}},maxWidth:{required:!1,tsType:{name:`string`},description:`Maximum width - default: 800px`,defaultValue:{value:`"500px"`,computed:!1}},minWidth:{required:!1,tsType:{name:`string`},description:`Minimum width - default: 300px`,defaultValue:{value:`"300px"`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Custom className for the container`,defaultValue:{value:`""`,computed:!1}}}}})),k,A,j,M,N,P,F,I,L,R,z,B,V,H;t((()=>{o(),l(),h(),a(),O(),k=r(),A=s.person.firstName(),j=s.person.lastName(),M=[{id:`s_0_0`,color:`#ff3333`,label:`Siège 1`},{id:`s_0_1`,color:`#ce2929`,label:`Siège 2`},{id:`s_0_2`,color:`#ce2929`,label:`Siège 3`},{id:`s_0_3`,color:`#ce2929`,label:`Siège 4`},{id:`s_0_4`,color:`#23b73d`,label:`Siège 5`},{id:`s_0_5`,color:`#23b73d`,label:`Siège 6`},{id:`s_0_6`,color:`#ff668b`,label:`Siège 7`},{id:`s_0_7`,color:`#ff668b`,label:`Siège 8`},{id:`s_0_8`,color:`#ff668b`,label:`Siège 9`},{id:`s_0_9`,color:`#ff9f0e`,label:`Siège 10`},{id:`s_0_10`,color:`#ff9f0e`,label:`Siège 11`},{id:`s_0_11`,color:`#ff9f0e`,label:`Siège 12`},{id:`s_0_12`,color:`#ff9f0e`,label:`Siège 13`},{id:`s_0_13`,color:`#ffbe3f`,label:`Siège 14`},{id:`s_0_14`,color:`#ffbe3f`,label:`Siège 15`},{id:`s_0_15`,color:`#e1b000`,label:`Siège 16`},{id:`s_0_16`,color:`#e1b000`,label:`Siège 17`},{id:`s_0_17`,color:`#78668d`,label:`Siège 18`},{id:`s_0_18`,color:`#78668d`,label:`Siège 19`},{id:`s_0_19`,color:`#0890c5`,label:`Siège 20`},{id:`s_0_20`,color:`#0890c5`,label:`Siège 21`},{id:`s_0_21`,color:`#0890c5`,label:`Siège 22`},{id:`s_0_22`,color:`#0890c5`,label:`Siège 23`},{id:`s_0_23`,color:`#b5966d`,label:`Siège 24`},{id:`s_0_24`,color:`#b5966d`,label:`Siège 25`},{id:`s_0_25`,color:`#b5966d`,label:`Siège 26`},{id:`s_0_26`,color:`#8d6026`,label:`Siège 27`},{id:`s_0_27`,color:`#8d6026`,label:`Siège 28`},{id:`s_0_28`,color:`#8d6026`,label:`Siège 29`},{id:`s_0_29`,color:`#8d6026`,label:`Siège 30`},{id:`s_0_30`,color:`#8d6026`,label:`Siège 31`}],N={title:`ParliamentChamber/AssembleeHemicycle`,component:D,parameters:{docs:{description:{component:"An interactive SVG of the French Assemblée Nationale hemicycle with seat highlighting.\n\n```tsx\nimport { AssembleeHemicycle } from '@tricoteuses/react-components';\n```"}}}},P={render:()=>(0,k.jsx)(D,{type:`default`,highlightedSeats:[]})},F={render:()=>(0,k.jsx)(D,{type:`graph`,highlightedSeats:M})},I={render:()=>(0,k.jsx)(D,{type:`default`,highlightedSeats:[{id:1,color:`blue`,label:`Siège 1`},{id:2,color:`blue`,label:`Siège 2`},{id:3,color:`blue`,label:`Siège 3`},{id:5,color:`blue`,label:`Siège 5`},{id:320,color:`orange`,label:`Siège 320`},{id:321,color:`orange`,label:`Siège 321`},{id:322,color:`orange`,label:`Siège 322`},{id:329,color:`orange`,label:`Siège 329`},{id:330,color:`orange`,label:`Siège 330`},{id:331,color:`orange`,label:`Siège 331`},{id:332,color:`orange`,label:`Siège 332`},{id:648,color:`#ff3333`,label:`Siège 648`},{id:649,color:`#ff3333`,label:`Siège 649`},{id:650,color:`#ff3333`,label:`Siège 650`}]})},L={decorators:[e=>(0,k.jsx)(i,{locale:`en`,children:(0,k.jsx)(e,{})})],render:()=>(0,k.jsx)(D,{type:`default`,highlightedSeats:[{id:330,color:`orange`,label:(0,k.jsx)(c,{firstName:A,lastName:j}),hoverable:!1},{id:650,color:`#ff3333`,label:`Siège 650`}]})},R={decorators:[e=>(0,k.jsx)(i,{locale:`en`,children:(0,k.jsx)(e,{})})],render:()=>(0,k.jsx)(m,{title:`Hémicycle avec légende`,children:(0,k.jsx)(D,{type:`default`,highlightedSeats:[{id:330,color:`orange`,label:(0,k.jsx)(c,{firstName:A,lastName:j}),labelBackgroundColor:`#417ec7`}],legend:[{label:`Pour`,color:`green`},{label:`Contre`,color:`red`},{label:`Abstention`,color:`gray`}]})})},z={render:()=>(0,k.jsx)(D,{type:`default`,highlightedSeats:[{id:1,color:`blue`,label:`Siège 1`},{id:330,color:`orange`,label:`Siège 330`},{id:650,color:`#ff3333`,label:`Siège 650`}],width:`50%`,maxWidth:`400px`,minWidth:`200px`})},B={render:()=>(0,k.jsx)(D,{type:`default`,highlightedSeats:[{id:1,color:`blue`,label:`Siège 1`},{id:330,color:`orange`,label:`Siège 330`},{id:650,color:`#ff3333`,label:`Siège 650`}],width:`100%`,maxWidth:`1200px`,minWidth:`600px`})},V={render:()=>(0,k.jsx)(D,{type:`graph`,highlightedSeats:M,width:`75%`,maxWidth:`900px`,minWidth:`350px`})},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <AssembleeHemicycle type="default" highlightedSeats={[]} />
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <AssembleeHemicycle type="graph" highlightedSeats={highlightedSeats} />
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <AssembleeHemicycle type="default" highlightedSeats={[{
    id: 1,
    color: "blue",
    label: "Siège 1"
  }, {
    id: 2,
    color: "blue",
    label: "Siège 2"
  }, {
    id: 3,
    color: "blue",
    label: "Siège 3"
  }, {
    id: 5,
    color: "blue",
    label: "Siège 5"
  }, {
    id: 320,
    color: "orange",
    label: "Siège 320"
  }, {
    id: 321,
    color: "orange",
    label: "Siège 321"
  }, {
    id: 322,
    color: "orange",
    label: "Siège 322"
  }, {
    id: 329,
    color: "orange",
    label: "Siège 329"
  }, {
    id: 330,
    color: "orange",
    label: "Siège 330"
  }, {
    id: 331,
    color: "orange",
    label: "Siège 331"
  }, {
    id: 332,
    color: "orange",
    label: "Siège 332"
  }, {
    id: 648,
    color: "#ff3333",
    label: "Siège 648"
  }, {
    id: 649,
    color: "#ff3333",
    label: "Siège 649"
  }, {
    id: 650,
    color: "#ff3333",
    label: "Siège 650"
  }]} />
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <IntlProvider locale="en">
                <Story />
            </IntlProvider>],
  render: () => <AssembleeHemicycle type="default" highlightedSeats={[{
    id: 330,
    color: "orange",
    label: <MemberBox firstName={firstName} lastName={lastName} />,
    hoverable: false
  }, {
    id: 650,
    color: "#ff3333",
    label: "Siège 650"
  }]} />
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <IntlProvider locale="en">
                <Story />
            </IntlProvider>],
  render: () => <Box title="Hémicycle avec légende">
            <AssembleeHemicycle type="default" highlightedSeats={[{
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
        </Box>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <AssembleeHemicycle type="default" highlightedSeats={[{
    id: 1,
    color: "blue",
    label: "Siège 1"
  }, {
    id: 330,
    color: "orange",
    label: "Siège 330"
  }, {
    id: 650,
    color: "#ff3333",
    label: "Siège 650"
  }]} width="50%" maxWidth="400px" minWidth="200px" />
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <AssembleeHemicycle type="default" highlightedSeats={[{
    id: 1,
    color: "blue",
    label: "Siège 1"
  }, {
    id: 330,
    color: "orange",
    label: "Siège 330"
  }, {
    id: 650,
    color: "#ff3333",
    label: "Siège 650"
  }]} width="100%" maxWidth="1200px" minWidth="600px" />
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <AssembleeHemicycle type="graph" highlightedSeats={highlightedSeats} width="75%" maxWidth="900px" minWidth="350px" />
}`,...V.parameters?.docs?.source}}},H=[`Default`,`Graph`,`SeatHighlighted`,`WithHtmlContentAsLabel`,`WithLegend`,`SmallSize`,`LargeSize`,`CustomSize`]}))();export{V as CustomSize,P as Default,F as Graph,B as LargeSize,I as SeatHighlighted,z as SmallSize,L as WithHtmlContentAsLabel,R as WithLegend,H as __namedExportsOrder,N as default};