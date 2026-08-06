import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-8ppmUcV6.js";import{t as i}from"./classnames-vkYym6_m.js";import{i as a,n as o,r as s,t as c}from"./useDropdown-uXbceHsO.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T=t((()=>{l=`_selectButton_12l1b_1`,u=`_disabled_12l1b_28`,d=`_icon_12l1b_33`,f=`_label_12l1b_45`,p=`_expandIcon_12l1b_50`,m=`_rotated_12l1b_63`,h=`_expanded_12l1b_67`,g=`_active_12l1b_77`,_=`_small_12l1b_94`,v=`_medium_12l1b_107`,y=`_large_12l1b_111`,b=`_outlined_12l1b_128`,x=`_ghost_12l1b_141`,S=`_dropdownItem_12l1b_151`,C=`_dropdownItemActive_12l1b_166`,w={selectButton:l,disabled:u,icon:d,label:f,expandIcon:p,rotated:m,expanded:h,active:g,small:_,medium:v,large:y,default:`_default_12l1b_124`,outlined:b,ghost:x,dropdownItem:S,dropdownItemActive:C}})),E,D,O,k,A,j=t((()=>{E=e(i(),1),D=e(n(),1),a(),c(),T(),O=r(),k=30,A=({items:e,defaultLabel:t,icon:n,multiSelect:r=!1,onSelectionChange:i,disabled:a=!1,size:c=`medium`,variant:l=`default`,className:u,ariaLabel:d,id:f})=>{let p=(0,D.useId)(),m=f??p,[h,g]=(0,D.useState)([]),{expanded:_,toggle:v,close:y,anchorRef:b,portalRef:x}=o(),S=()=>{if(h.length===0)return t;let e=h.join(`, `);return e.length>k?`${e.slice(0,k)}…`:e},C=(0,D.useCallback)(e=>{if(e.isReset){g([]),i?.([]),y();return}let t=e.value??e.label,n=r?h.includes(t)?h.filter(e=>e!==t):[...h,t]:[t];g(n),i?.(n),r||y()},[h,r,i,y]),T=h.length>0,A=S();return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(`button`,{ref:b,id:m,type:`button`,disabled:a,onClick:v,"aria-expanded":_,"aria-haspopup":`listbox`,"aria-label":d??A,className:(0,E.default)(w.selectButton,w[c],w[l],{[w.expanded]:_,[w.active]:T,[w.disabled]:a,[w.withIcon]:!!n},u),children:[n&&(0,O.jsx)(`span`,{className:w.icon,children:n}),(0,O.jsx)(`span`,{className:w.label,children:A}),(0,O.jsx)(`span`,{className:(0,E.default)(w.expandIcon,{[w.rotated]:_}),"aria-hidden":`true`,children:(0,O.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`,focusable:`false`,children:(0,O.jsx)(`path`,{d:`M7 10l5 5 5-5z`})})})]}),_&&(0,O.jsx)(s,{anchorRef:b,portalRef:x,children:(0,O.jsx)(`ul`,{role:`listbox`,"aria-multiselectable":r,style:{margin:0,padding:0,listStyle:`none`},children:e.map(e=>{let t=e.value??e.label,n=!e.isReset&&h.includes(t);return(0,O.jsx)(`li`,{role:`option`,"aria-selected":n,className:(0,E.default)(w.dropdownItem,{[w.dropdownItemActive]:n}),onClick:()=>C(e),children:e.label},t)})})})]})},A.displayName=`SelectButton`,A.__docgenInfo={description:``,methods:[],displayName:`SelectButton`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`SelectButtonItem`}],raw:`SelectButtonItem[]`},description:`List of items displayed in the dropdown`},defaultLabel:{required:!0,tsType:{name:`string`},description:`Label displayed when no item is selected`},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Optional icon displayed on the left side of the label`},multiSelect:{required:!1,tsType:{name:`boolean`},description:`Allow selecting multiple values`,defaultValue:{value:`false`,computed:!1}},onSelectionChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(values: string[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},name:`values`}],return:{name:`void`}}},description:`Callback fired when selection changes — receives selected values`},disabled:{required:!1,tsType:{name:`boolean`},description:`Whether the button is disabled`,defaultValue:{value:`false`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`"small" | "medium" | "large"`,elements:[{name:`literal`,value:`"small"`},{name:`literal`,value:`"medium"`},{name:`literal`,value:`"large"`}]},description:`Visual size variant`,defaultValue:{value:`"medium"`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`"default" | "outlined" | "ghost"`,elements:[{name:`literal`,value:`"default"`},{name:`literal`,value:`"outlined"`},{name:`literal`,value:`"ghost"`}]},description:`Visual style variant`,defaultValue:{value:`"default"`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Additional CSS class name`},ariaLabel:{required:!1,tsType:{name:`string`},description:`aria-label for accessibility — falls back to the current label`},id:{required:!1,tsType:{name:`string`},description:`Optional id attribute`}}}})),M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q;t((()=>{j(),M=r(),N=()=>(0,M.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,M.jsx)(`path`,{d:`M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z`})}),P=()=>(0,M.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,M.jsx)(`path`,{d:`M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z`})}),F=[{label:`Tous les dossiers`,isReset:!0},{label:`Lois`},{label:`Ordonnances`},{label:`Décrets`},{label:`Amendements`}],I=[{label:`Économie`},{label:`Santé`},{label:`Justice`},{label:`Éducation`},{label:`Environnement`},{label:`Défense`}],L={title:`UI/SelectButton`,component:A,parameters:{docs:{description:{component:"A select-style button with a built-in dropdown. Supports single and multiple selection. Clicking an item with `isReset: true` clears the selection.\n\n```tsx\nimport { SelectButton } from '@tricoteuses/react-components';\n```"},story:{height:`240px`}}},argTypes:{icon:{options:[`none`,`star`,`filter`],mapping:{none:void 0,star:(0,M.jsx)(N,{}),filter:(0,M.jsx)(P,{})},control:{type:`select`},description:`Icône affichée à gauche du label`},multiSelect:{control:{type:`boolean`},description:`Permet la sélection de plusieurs valeurs`},defaultLabel:{control:{type:`text`},description:`Label affiché quand aucune valeur n'est sélectionnée`},size:{control:{type:`select`},options:[`small`,`medium`,`large`],description:`Taille du bouton`},variant:{control:{type:`select`},options:[`default`,`outlined`,`ghost`],description:`Variant visuel`},disabled:{control:{type:`boolean`},description:`Désactive le bouton`},className:{control:{type:`text`},description:`Classe CSS additionnelle`},ariaLabel:{control:{type:`text`},description:`Label d'accessibilité (aria-label)`},id:{control:{type:`text`},description:`Attribut id du bouton`},items:{control:!1,description:`Liste des options du dropdown (SelectButtonItem[])`},onSelectionChange:{control:!1,description:`Callback déclenché à chaque changement de sélection — reçoit les valeurs sélectionnées`}},args:{defaultLabel:`Catégorie`,icon:`filter`,multiSelect:!1,size:`medium`,variant:`default`,disabled:!1,items:F,onSelectionChange:e=>console.log(`Selection:`,e)}},R={},z={name:`Avec icône étoile`,args:{icon:`star`,defaultLabel:`Favoris`}},B={name:`Sélection multiple`,args:{multiSelect:!0,defaultLabel:`Thèmes`,icon:`star`,items:I}},V={name:`Désactivé`,args:{disabled:!0}},H={name:`Taille — Small`,args:{size:`small`}},U={name:`Taille — Large`,args:{size:`large`}},W={name:`Variant — Outlined`,args:{variant:`outlined`}},G={name:`Variant — Ghost`,args:{variant:`ghost`}},K={name:`Position — Aligné à droite`,decorators:[e=>(0,M.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,width:`100%`},children:(0,M.jsx)(e,{})})],parameters:{layout:`fullscreen`,docs:{story:{height:`240px`}}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "Avec icône étoile",
  args: {
    icon: "star" as unknown as React.ReactNode,
    defaultLabel: "Favoris"
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: "Sélection multiple",
  args: {
    multiSelect: true,
    defaultLabel: "Thèmes",
    icon: "star" as unknown as React.ReactNode,
    items: THEMES
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "Désactivé",
  args: {
    disabled: true
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: "Taille — Small",
  args: {
    size: "small"
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: "Taille — Large",
  args: {
    size: "large"
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: "Variant — Outlined",
  args: {
    variant: "outlined"
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: "Variant — Ghost",
  args: {
    variant: "ghost"
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
        height: "240px"
      }
    }
  }
}`,...K.parameters?.docs?.source}}},q=[`Default`,`WithStarIcon`,`MultiSelect`,`Disabled`,`Small`,`Large`,`VariantOutlined`,`VariantGhost`,`AlignedRight`]}))();export{K as AlignedRight,R as Default,V as Disabled,U as Large,B as MultiSelect,H as Small,G as VariantGhost,W as VariantOutlined,z as WithStarIcon,q as __namedExportsOrder,L as default};