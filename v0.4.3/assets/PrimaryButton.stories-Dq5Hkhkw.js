import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-8ppmUcV6.js";import{d as i}from"./VoteIcon-BpFcpvls.js";import{t as a}from"./regular_icons-Dps0XlUj.js";var o,s,c,l,u=t((()=>{o=`_button_eum31_1`,s=`_flat_eum31_29`,c=`_link_eum31_35`,l={button:o,default:`_default_eum31_18`,flat:s,link:c}}));function d({children:e,as:t,className:n,variant:r=`default`,...i}){let a=`${l.button} ${l[r]} ${n}`;return t?f.createElement(t,{className:a,...i},e):(0,p.jsx)(`button`,{className:a,...i,children:e})}var f,p,m=t((()=>{f=e(n(),1),u(),p=r(),d.__docgenInfo={description:``,methods:[],displayName:`PrimaryButton`,props:{as:{required:!1,tsType:{name:`ReactElementType`,raw:`React.ElementType`},description:``},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`"default" | "flat" | "link"`,elements:[{name:`literal`,value:`"default"`},{name:`literal`,value:`"flat"`},{name:`literal`,value:`"link"`}]},description:``,defaultValue:{value:`"default"`,computed:!1}}}}})),h,g,_,v,y,b,x,S;t((()=>{a(),m(),h=r(),g={title:`UI/PrimaryButton`,component:d,parameters:{docs:{description:{component:"A polymorphic primary button component supporting variants (default, flat, link).\n\n```tsx\nimport { PrimaryButton } from '@tricoteuses/react-components';\n```"}}}},_={render:()=>(0,h.jsx)(d,{children:`Click me`})},v={render:()=>(0,h.jsx)(d,{as:`a`,href:`https://app.legiwatch.fr`,target:`_blank`,children:`Click me`})},y={render:()=>(0,h.jsxs)(d,{children:[(0,h.jsx)(i,{height:20,width:20}),`Click me`]})},b={render:()=>(0,h.jsxs)(d,{variant:`flat`,as:`a`,href:`https://app.legiwatch.fr`,target:`_blank`,children:[(0,h.jsx)(i,{height:20,width:20}),`Click me`]})},x={render:()=>(0,h.jsx)(d,{variant:`link`,as:`a`,href:`https://app.legiwatch.fr`,target:`_blank`,children:`Click me`})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <PrimaryButton>Click me</PrimaryButton>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <PrimaryButton as="a" href="https://app.legiwatch.fr" target="_blank">
            Click me
        </PrimaryButton>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <PrimaryButton>
            <SenateIcon height={20} width={20} />
            Click me
        </PrimaryButton>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <PrimaryButton variant="flat" as="a" href="https://app.legiwatch.fr" target="_blank">
            <SenateIcon height={20} width={20} />
            Click me
        </PrimaryButton>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <PrimaryButton variant="link" as="a" href="https://app.legiwatch.fr" target="_blank">
            Click me
        </PrimaryButton>
}`,...x.parameters?.docs?.source}}},S=[`Default`,`AsLink`,`WithIcon`,`FlatVariant`,`LinkVariant`]}))();export{v as AsLink,_ as Default,b as FlatVariant,x as LinkVariant,y as WithIcon,S as __namedExportsOrder,g as default};