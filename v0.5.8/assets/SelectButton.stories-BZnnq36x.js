import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{t as r}from"./jsx-runtime-8ppmUcV6.js";import{t as i}from"./classnames-vkYym6_m.js";import{i as a,n as o,r as s,t as c}from"./useDropdown-DNvj3b03.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E=t((()=>{l=`_selectButton_c3rbf_1`,u=`_disabled_c3rbf_28`,d=`_icon_c3rbf_33`,f=`_label_c3rbf_45`,p=`_expandIcon_c3rbf_50`,m=`_rotated_c3rbf_63`,h=`_expanded_c3rbf_67`,g=`_active_c3rbf_77`,_=`_small_c3rbf_94`,v=`_medium_c3rbf_107`,y=`_large_c3rbf_111`,b=`_outlined_c3rbf_128`,x=`_ghost_c3rbf_141`,S=`_menuTitle_c3rbf_151`,C=`_dropdownItem_c3rbf_160`,w=`_dropdownItemActive_c3rbf_175`,T={selectButton:l,disabled:u,icon:d,label:f,expandIcon:p,rotated:m,expanded:h,active:g,small:_,medium:v,large:y,default:`_default_c3rbf_124`,outlined:b,ghost:x,menuTitle:S,dropdownItem:C,dropdownItemActive:w}})),D,O,k,A,j,M=t((()=>{D=e(i(),1),O=e(n(),1),a(),c(),E(),k=r(),A=30,j=({items:e,defaultLabel:t,icon:n,multiSelect:r=!1,onSelectionChange:i,selectedValues:a,disabled:c=!1,size:l=`medium`,variant:u=`default`,className:d,ariaLabel:f,id:p,menuMaxWidth:m,maxLabelLength:h=A,menuTitle:g})=>{let _=(0,O.useId)(),v=p??_,y=`${v}-menu-title`,[b,x]=(0,O.useState)([]),S=a??b,{expanded:C,toggle:w,close:E,anchorRef:j,portalRef:M}=o(),N=()=>{if(S.length===0)return t;let n=S.map(t=>e.find(e=>(e.value??e.label)===t)?.label??t).join(`, `);return h!==null&&n.length>h?`${n.slice(0,h)}…`:n},P=(0,O.useCallback)(e=>{if(e.isReset){a===void 0&&x([]),i?.([]),E();return}let t=e.value??e.label,n=r?S.includes(t)?S.filter(e=>e!==t):[...S,t]:[t];a===void 0&&x(n),i?.(n),r||E()},[S,a,r,i,E]),F=S.length>0,I=N();return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(`button`,{ref:j,id:v,type:`button`,disabled:c,onClick:w,"aria-expanded":C,"aria-haspopup":`listbox`,"aria-label":f??I,className:(0,D.default)(T.selectButton,T[l],T[u],{[T.expanded]:C,[T.active]:F,[T.disabled]:c,[T.withIcon]:!!n},d),children:[n&&(0,k.jsx)(`span`,{className:T.icon,children:n}),(0,k.jsx)(`span`,{className:T.label,children:I}),(0,k.jsx)(`span`,{className:(0,D.default)(T.expandIcon,{[T.rotated]:C}),"aria-hidden":`true`,children:(0,k.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`,focusable:`false`,children:(0,k.jsx)(`path`,{d:`M7 10l5 5 5-5z`})})})]}),C&&(0,k.jsxs)(s,{anchorRef:j,portalRef:M,maxWidth:m,children:[g&&(0,k.jsx)(`div`,{id:y,className:T.menuTitle,children:g}),(0,k.jsx)(`ul`,{role:`listbox`,"aria-multiselectable":r,"aria-labelledby":g?y:void 0,style:{margin:0,padding:0,listStyle:`none`},children:e.map(e=>{let t=e.value??e.label,n=!e.isReset&&S.includes(t);return(0,k.jsx)(`li`,{role:`option`,"aria-selected":n,className:(0,D.default)(T.dropdownItem,{[T.dropdownItemActive]:n}),onClick:()=>P(e),children:e.label},t)})})]})]})},j.displayName=`SelectButton`,j.__docgenInfo={description:``,methods:[],displayName:`SelectButton`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`SelectButtonItem`}],raw:`SelectButtonItem[]`},description:`List of items displayed in the dropdown`},defaultLabel:{required:!0,tsType:{name:`string`},description:`Label displayed when no item is selected`},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Optional icon displayed on the left side of the label`},multiSelect:{required:!1,tsType:{name:`boolean`},description:`Allow selecting multiple values`,defaultValue:{value:`false`,computed:!1}},onSelectionChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(values: string[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},name:`values`}],return:{name:`void`}}},description:`Callback fired when selection changes — receives selected values`},selectedValues:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`Controlled selected values`},disabled:{required:!1,tsType:{name:`boolean`},description:`Whether the button is disabled`,defaultValue:{value:`false`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`"small" | "medium" | "large"`,elements:[{name:`literal`,value:`"small"`},{name:`literal`,value:`"medium"`},{name:`literal`,value:`"large"`}]},description:`Visual size variant`,defaultValue:{value:`"medium"`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`"default" | "outlined" | "ghost"`,elements:[{name:`literal`,value:`"default"`},{name:`literal`,value:`"outlined"`},{name:`literal`,value:`"ghost"`}]},description:`Visual style variant`,defaultValue:{value:`"default"`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Additional CSS class name`},ariaLabel:{required:!1,tsType:{name:`string`},description:`aria-label for accessibility — falls back to the current label`},id:{required:!1,tsType:{name:`string`},description:`Optional id attribute`},menuMaxWidth:{required:!1,tsType:{name:`ReactCSSProperties["maxWidth"]`,raw:`React.CSSProperties["maxWidth"]`},description:`Maximum width of the dropdown menu`},maxLabelLength:{required:!1,tsType:{name:`union`,raw:`number | null`,elements:[{name:`number`},{name:`null`}]},description:`Maximum trigger label length. Set to null to disable truncation.`,defaultValue:{value:`30`,computed:!1}},menuTitle:{required:!1,tsType:{name:`string`},description:`Optional non-interactive title displayed above the dropdown options`}}}})),N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J;t((()=>{M(),N=r(),P=()=>(0,N.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,N.jsx)(`path`,{d:`M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z`})}),F=()=>(0,N.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,N.jsx)(`path`,{d:`M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z`})}),I=[{label:`Tous les dossiers`,isReset:!0},{label:`Lois`},{label:`Ordonnances`},{label:`Décrets`},{label:`Amendements`}],L=[{label:`Économie`},{label:`Santé`},{label:`Justice`},{label:`Éducation`},{label:`Environnement`},{label:`Défense`}],R={title:`UI/SelectButton`,component:j,parameters:{docs:{description:{component:"A select-style button with a built-in dropdown. Supports single and multiple selection. Clicking an item with `isReset: true` clears the selection.\n\n```tsx\nimport { SelectButton } from '@tricoteuses/react-components';\n```"},story:{height:`240px`}}},argTypes:{icon:{options:[`none`,`star`,`filter`],mapping:{none:void 0,star:(0,N.jsx)(P,{}),filter:(0,N.jsx)(F,{})},control:{type:`select`},description:`Icône affichée à gauche du label`},multiSelect:{control:{type:`boolean`},description:`Permet la sélection de plusieurs valeurs`},defaultLabel:{control:{type:`text`},description:`Label affiché quand aucune valeur n'est sélectionnée`},size:{control:{type:`select`},options:[`small`,`medium`,`large`],description:`Taille du bouton`},variant:{control:{type:`select`},options:[`default`,`outlined`,`ghost`],description:`Variant visuel`},disabled:{control:{type:`boolean`},description:`Désactive le bouton`},className:{control:{type:`text`},description:`Classe CSS additionnelle`},ariaLabel:{control:{type:`text`},description:`Label d'accessibilité (aria-label)`},id:{control:{type:`text`},description:`Attribut id du bouton`},items:{control:!1,description:`Liste des options du dropdown (SelectButtonItem[])`},onSelectionChange:{control:!1,description:`Callback déclenché à chaque changement de sélection — reçoit les valeurs sélectionnées`}},args:{defaultLabel:`Catégorie`,icon:`filter`,multiSelect:!1,size:`medium`,variant:`default`,disabled:!1,items:I,onSelectionChange:e=>console.log(`Selection:`,e)}},z={},B={name:`Avec icône étoile`,args:{icon:`star`,defaultLabel:`Favoris`}},V={name:`Sélection multiple`,args:{multiSelect:!0,defaultLabel:`Thèmes`,icon:`star`,items:L}},H={name:`Désactivé`,args:{disabled:!0}},U={name:`Taille — Small`,args:{size:`small`}},W={name:`Taille — Large`,args:{size:`large`}},G={name:`Variant — Outlined`,args:{variant:`outlined`}},K={name:`Variant — Ghost`,args:{variant:`ghost`}},q={name:`Position — Aligné à droite`,decorators:[e=>(0,N.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,width:`100%`},children:(0,N.jsx)(e,{})})],parameters:{layout:`fullscreen`,docs:{story:{height:`240px`}}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: "Avec icône étoile",
  args: {
    icon: "star" as unknown as React.ReactNode,
    defaultLabel: "Favoris"
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "Sélection multiple",
  args: {
    multiSelect: true,
    defaultLabel: "Thèmes",
    icon: "star" as unknown as React.ReactNode,
    items: THEMES
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: "Désactivé",
  args: {
    disabled: true
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: "Taille — Small",
  args: {
    size: "small"
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: "Taille — Large",
  args: {
    size: "large"
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: "Variant — Outlined",
  args: {
    variant: "outlined"
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: "Variant — Ghost",
  args: {
    variant: "ghost"
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J=[`Default`,`WithStarIcon`,`MultiSelect`,`Disabled`,`Small`,`Large`,`VariantOutlined`,`VariantGhost`,`AlignedRight`]}))();export{q as AlignedRight,z as Default,H as Disabled,W as Large,V as MultiSelect,U as Small,K as VariantGhost,G as VariantOutlined,B as WithStarIcon,J as __namedExportsOrder,R as default};