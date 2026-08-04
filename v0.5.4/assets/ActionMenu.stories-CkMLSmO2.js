import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-8ppmUcV6.js";import{n,t as r}from"./ActionMenu-TLNufUkv.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{n(),i=t(),a=()=>(0,i.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,i.jsx)(`path`,{d:`M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z`})}),o=()=>(0,i.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,i.jsx)(`path`,{d:`M18 16c-.8 0-1.4.3-1.9.8L8.9 12.7c0-.2.1-.5.1-.7s0-.5-.1-.7l7.1-4.1c.5.5 1.2.8 2 .8 1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3c0 .2 0 .5.1.7L7.9 9.8C7.4 9.3 6.7 9 6 9c-1.7 0-3 1.3-3 3s1.3 3 3 3c.7 0 1.4-.3 1.9-.8l7.2 4.1c-.1.2-.1.4-.1.7 0 1.6 1.3 2.9 2.9 2.9s2.9-1.3 2.9-2.9S19.6 16 18 16z`})}),s=()=>(0,i.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,i.jsx)(`path`,{d:`M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z`})}),c=()=>(0,i.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,i.jsx)(`path`,{d:`M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z`})}),l=()=>(0,i.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,i.jsx)(`path`,{d:`M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z`})}),u=()=>(0,i.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,i.jsx)(`path`,{d:`M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z`})}),d=[{label:`Copier le texte`,icon:(0,i.jsx)(s,{}),onClick:()=>navigator.clipboard.writeText(document.title),feedbackLabel:`Copié !`},{label:`Copier le lien`,icon:(0,i.jsx)(c,{}),onClick:()=>navigator.clipboard.writeText(window.location.href),feedbackLabel:`Copié !`},{label:`Copier le code d'intégration`,icon:(0,i.jsx)(l,{}),onClick:()=>navigator.clipboard.writeText(`<iframe src="${window.location.href}"></iframe>`),feedbackLabel:`Copié !`},{label:`Partager par email`,icon:(0,i.jsx)(u,{}),onClick:()=>window.open(`mailto:?subject=${encodeURIComponent(document.title)}&body=${encodeURIComponent(window.location.href)}`)}],f=[{label:`Modifier`,onClick:()=>console.log(`Modifier`),feedbackLabel:`Modification lancée`},{label:`Dupliquer`,onClick:()=>console.log(`Dupliquer`),feedbackLabel:`Dupliqué !`},{label:`Archiver`,onClick:()=>console.log(`Archiver`),disabled:!0},{label:`Supprimer`,onClick:()=>console.log(`Supprimer`)}],p=[{label:`Assemblée nationale`,href:`https://www.assemblee-nationale.fr`},{label:`Sénat`,href:`https://www.senat.fr`},{label:`Legifrance`,href:`https://www.legifrance.gouv.fr`}],m={title:`UI/ActionMenu`,component:r,parameters:{docs:{description:{component:"A button with a built-in dropdown of actions. Each action closes the menu and triggers its handler. Supports callbacks, external links, disabled items, and optional temporary feedback in the button label.\n\n```tsx\nimport { ActionMenu } from '@tricoteuses/react-components';\n```"},story:{height:`220px`}}},argTypes:{icon:{options:[`none`,`more`,`share`],mapping:{none:void 0,more:(0,i.jsx)(a,{}),share:(0,i.jsx)(o,{})},control:{type:`select`},description:`Icône affichée à gauche du label`},label:{control:{type:`text`},description:`Label du bouton`},size:{control:{type:`select`},options:[`small`,`medium`,`large`],description:`Taille du bouton`},variant:{control:{type:`select`},options:[`default`,`outlined`,`ghost`],description:`Variant visuel`},disabled:{control:{type:`boolean`},description:`Désactive le bouton`},className:{control:{type:`text`},description:`Classe CSS additionnelle`},ariaLabel:{control:{type:`text`},description:`Label d'accessibilité (aria-label)`},id:{control:{type:`text`},description:`Attribut id du bouton`},actions:{control:!1,description:`Liste des actions du dropdown (ActionMenuItem[])`}},args:{label:`Actions`,icon:`more`,size:`medium`,variant:`default`,disabled:!1,actions:f}},h={},g={name:`Menu de partage`,args:{label:`Partager`,icon:`share`,actions:d}},_={name:`Liens externes`,args:{label:`Ressources`,icon:`none`,actions:p}},v={name:`Désactivé`,args:{disabled:!0}},y={name:`Taille — Small`,args:{size:`small`}},b={name:`Taille — Large`,args:{size:`large`}},x={name:`Variant — Outlined`,args:{variant:`outlined`}},S={name:`Variant — Ghost`,args:{variant:`ghost`}},C={name:`Position — Aligné à droite`,decorators:[e=>(0,i.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,width:`100%`},children:(0,i.jsx)(e,{})})],parameters:{layout:`fullscreen`,docs:{story:{height:`220px`}}}},w={name:`Icon only (no label, no caret)`,args:{label:``,ariaLabel:`Partager`,icon:`share`,hideCaret:!0,variant:`ghost`,size:`small`,actions:d}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Menu de partage",
  args: {
    label: "Partager",
    icon: "share" as unknown as React.ReactNode,
    actions: SHARE_ACTIONS
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Liens externes",
  args: {
    label: "Ressources",
    icon: "none" as unknown as React.ReactNode,
    actions: LINK_ACTIONS
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Désactivé",
  args: {
    disabled: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Taille — Small",
  args: {
    size: "small"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Taille — Large",
  args: {
    size: "large"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Variant — Outlined",
  args: {
    variant: "outlined"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Variant — Ghost",
  args: {
    variant: "ghost"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Position — Aligné à droite",
  decorators: [Story => <div style={{
    display: "flex",
    justifyContent: "flex-end",
    width: "100%"
  }}>
                <Story />
            </div>],
  parameters: {
    layout: "fullscreen",
    docs: {
      story: {
        height: "220px"
      }
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Icon only (no label, no caret)",
  args: {
    label: "",
    ariaLabel: "Partager",
    icon: "share" as unknown as React.ReactNode,
    hideCaret: true,
    variant: "ghost",
    size: "small",
    actions: SHARE_ACTIONS
  }
}`,...w.parameters?.docs?.source}}},T=[`Default`,`ShareMenu`,`WithLinks`,`Disabled`,`Small`,`Large`,`VariantOutlined`,`VariantGhost`,`AlignedRight`,`IconOnly`]}))();export{C as AlignedRight,h as Default,v as Disabled,w as IconOnly,b as Large,g as ShareMenu,y as Small,S as VariantGhost,x as VariantOutlined,_ as WithLinks,T as __namedExportsOrder,m as default};