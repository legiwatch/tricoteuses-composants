import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-8ppmUcV6.js";import{d as n,q as r}from"./VoteIcon-BpFcpvls.js";import{n as i,t as a}from"./regular_icons-Dps0XlUj.js";import{t as o}from"./Label-Bcf1zPnP.js";import{t as s}from"./label-CnBqfoBF.js";var c,l,u=e((()=>{a(),s(),c=t(),l=({chamber:e,short:t=!1,className:a=void 0})=>{let s=e.toLowerCase();return(0,c.jsx)(c.Fragment,{children:s===`assemblee`||s===`an`?(0,c.jsx)(o,{className:a,text:t?`AN`:`Assemblée`,leftIcon:(0,c.jsx)(r,{height:20,width:20})}):s===`senat`||s===`sn`?(0,c.jsx)(o,{className:a,text:t?`SN`:`Sénat`,leftIcon:(0,c.jsx)(n,{height:20,width:20})}):s===`gvt`||s===`gouvernement`?(0,c.jsx)(o,{className:a,text:t?`GVT`:`Gouvernement`,leftIcon:(0,c.jsx)(i,{height:20,width:20})}):null})},l.__docgenInfo={description:``,methods:[],displayName:`ChamberLabel`,props:{chamber:{required:!0,tsType:{name:`string`},description:`Chamber name`},short:{required:!1,tsType:{name:`boolean`},description:`Whether to show the short text of the chamber or not`,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`union`,raw:`string | undefined`,elements:[{name:`string`},{name:`undefined`}]},description:`Extra classname`,defaultValue:{value:`undefined`,computed:!0}}}}})),d,f,p,m,h,g,_,v;e((()=>{u(),d={title:`ParliamentChamber/ChamberLabel`,component:l,parameters:{docs:{description:{component:"A label component to display a parliamentary chamber name.\n\n```tsx\nimport { ChamberLabel } from '@tricoteuses/react-components';\n```"}}},args:{chamber:`AN`}},f={},p={args:{short:!0}},m={args:{chamber:`SN`}},h={args:{chamber:`SN`,short:!0}},g={args:{chamber:`GVT`}},_={args:{chamber:`GVT`,short:!0}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    short: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    chamber: "SN"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    chamber: "SN",
    short: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    chamber: "GVT"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    chamber: "GVT",
    short: true
  }
}`,..._.parameters?.docs?.source}}},v=[`AssembleeLabel`,`AssembleeShortLabel`,`SenatLabel`,`SenatShortLabel`,`GouvernementLabel`,`GouvernementShortLabel`]}))();export{f as AssembleeLabel,p as AssembleeShortLabel,g as GouvernementLabel,_ as GouvernementShortLabel,m as SenatLabel,h as SenatShortLabel,v as __namedExportsOrder,d as default};