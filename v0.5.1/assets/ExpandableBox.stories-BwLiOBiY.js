import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-8ppmUcV6.js";import{t as i}from"./classnames-vkYym6_m.js";var a,o,s,c=t((()=>{a=`_expandableBox_1fyrp_1`,o=`_disabled_1fyrp_1`,s={expandableBox:a,disabled:o}}));function l({className:e,children:t,previewHeight:n=100,revealHeight:r=40,overlayColor:i=`white`,style:a,activationThreshold:o=0,delaySeconds:c=0}){let[l,p]=d.useState(`collapsed`),[m,h]=d.useState(0),g=d.useRef(null),_=m<n+o,v=()=>{_||l===`collapsed`&&p(`reveal`)},y=()=>{_||l===`reveal`&&p(`collapsed`)},b=()=>{_||p(l===`expanded`?`collapsed`:`expanded`)};return(0,d.useEffect)(()=>{g.current&&h(g.current.offsetHeight)},[]),(0,f.jsx)(`div`,{ref:g,className:(0,u.default)(s.expandableBox,e,{[s.disabled]:_}),"data-status":l,onClick:b,onMouseEnter:v,onMouseLeave:y,style:{...a,"--preview-height":`${n}px`,"--reveal-height":`${r}px`,"--overlay-color":i,"--transition-delay":`${c}s`},children:t})}var u,d,f,p=t((()=>{u=e(i(),1),d=e(n(),1),c(),f=r(),l.__docgenInfo={description:``,methods:[],displayName:`ExpandableBox`,props:{className:{required:!1,tsType:{name:`string`},description:``},previewHeight:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`100`,computed:!1}},revealHeight:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`40`,computed:!1}},overlayColor:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"white"`,computed:!1}},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},style:{required:!1,tsType:{name:`ReactCSSProperties`,raw:`React.CSSProperties`},description:``},activationThreshold:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},delaySeconds:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}}}}})),m,h,g,_,v,y,b,x,S;t((()=>{p(),m=r(),h=[`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,`Sed id eleifend justo, sed tincidunt nulla.`,`Nullam velit nisi, pretium ut lacinia in, elementum id enim.`,`Donec non nisi eget nisl ultrices aliquet.`,`Aliquam erat volutpat.`,`Nunc id nisi eu nisl ultrices aliquet.`,`Vivamus ac nisi eget nisl ultrices aliquet.`,`Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec non nisi eget nisl ultrices aliquet.`,`Aliquam erat volutpat.`,`Nunc id nisi eu nisl ultrices aliquet.`,`Vivamus ac nisi eget nisl ultrices aliquet.`,`Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec non nisi eget nisl ultrices aliquet.`,`Aliquam erat volutpat.`,`Nunc id nisi eu nisl ul`,`ultrices aliquet.`,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,`Sed id eleifend justo, sed tincidunt nulla.`,`Nullam velit nisi, pretium ut lacinia in, elementum id enim.`,`Donec non nisi eget nisl ultrices aliquet.`,`Aliquam erat volutpat.`,`Nunc id nisi eu nisl ultrices aliquet.`],g={title:`UI/ExpandableBox`,component:l,parameters:{docs:{description:{component:"An expandable box that clips its children content and reveals it on hover.\n\n```tsx\nimport { ExpandableBox } from '@tricoteuses/react-components';\n```"}}}},_={render:()=>(0,m.jsx)(l,{children:(0,m.jsx)(`ul`,{children:h.map((e,t)=>(0,m.jsx)(`li`,{children:e},`item-${t}`))})})},v={render:()=>(0,m.jsx)(l,{previewHeight:200,children:(0,m.jsx)(`ul`,{children:h.map((e,t)=>(0,m.jsx)(`li`,{children:e},`item-${t}`))})})},y={render:()=>(0,m.jsx)(l,{delaySeconds:.8,children:(0,m.jsx)(`ul`,{children:h.map((e,t)=>(0,m.jsx)(`li`,{children:e},`item-${t}`))})})},b={render:()=>(0,m.jsxs)(l,{children:[(0,m.jsx)(`ul`,{children:h.slice(0,10).map((e,t)=>(0,m.jsx)(`li`,{children:e},`item-${t}`))}),(0,m.jsx)(`button`,{onClick:e=>{e.stopPropagation(),alert(`Clicked!`)},children:`Click me!`})]})},x={render:()=>(0,m.jsx)(l,{activationThreshold:50,children:(0,m.jsx)(`ul`,{children:h.slice(0,6).map((e,t)=>(0,m.jsx)(`li`,{children:e},`item-${t}`))})})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <ExpandableBox>
            <ul>
                {listItems.map((item, index) => <li key={\`item-\${index}\`}>{item}</li>)}
            </ul>
        </ExpandableBox>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <ExpandableBox previewHeight={200}>
            <ul>
                {listItems.map((item, index) => <li key={\`item-\${index}\`}>{item}</li>)}
            </ul>
        </ExpandableBox>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <ExpandableBox delaySeconds={0.8}>
            <ul>
                {listItems.map((item, index) => <li key={\`item-\${index}\`}>{item}</li>)}
            </ul>
        </ExpandableBox>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <ExpandableBox>
            <ul>
                {listItems.slice(0, 10).map((item, index) => <li key={\`item-\${index}\`}>{item}</li>)}
            </ul>

            <button onClick={e => {
      e.stopPropagation();
      alert("Clicked!");
    }}>
                Click me!
            </button>
        </ExpandableBox>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <ExpandableBox activationThreshold={50}>
            <ul>
                {listItems.slice(0, 6).map((item, index) => <li key={\`item-\${index}\`}>{item}</li>)}
            </ul>
        </ExpandableBox>
}`,...x.parameters?.docs?.source}}},S=[`Basic`,`WithCustomPreviewHeight`,`WithTransitionDelayOnHover`,`WithClickableContent`,`WithNotEnoughContent`]}))();export{_ as Basic,b as WithClickableContent,v as WithCustomPreviewHeight,x as WithNotEnoughContent,y as WithTransitionDelayOnHover,S as __namedExportsOrder,g as default};