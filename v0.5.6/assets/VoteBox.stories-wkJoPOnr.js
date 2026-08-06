import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-8ppmUcV6.js";import{t as n}from"./Label-Dg7VyKdP.js";import{t as r}from"./label-BlYTit9H.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_,v=e((()=>{i=`_voteBoxContainer_10k1d_1`,a=`_voteBoxHeader_10k1d_8`,o=`_voteBoxContent_10k1d_16`,s=`_voteBoxType_10k1d_27`,c=`_votePositionLabel_10k1d_39`,l=`_info_10k1d_45`,u=`_success_10k1d_50`,d=`_cancel_10k1d_55`,f=`_pending_10k1d_60`,p=`_neutral_10k1d_65`,m=`_voteBoxStatusContainer_10k1d_71`,h=`_voteBoxStatus_10k1d_71`,g=`_voteBoxDate_10k1d_107`,_={voteBoxContainer:i,voteBoxHeader:a,voteBoxContent:o,voteBoxType:s,votePositionLabel:c,info:l,success:u,cancel:d,pending:f,neutral:p,voteBoxStatusContainer:m,voteBoxStatus:h,voteBoxDate:g}})),y,b,x,S=e((()=>{r(),v(),y=t(),b={success:[`pour`,`adopté`],cancel:[`contre`,`rejeté`],pending:[`modéré`],info:[`en discussion`],neutral:[`tombé`,`non soutenu`,`retiré`,`abstention`],default:[]},x=({date:e,mainText:t,status:r,type:i,votePosition:a,statusHighlighted:o=!1,className:s,voteUid:c})=>(0,y.jsxs)(`a`,{className:`${s} ${_.voteBoxContainer}`,href:`/parlement/scrutins/${c}`,children:[(0,y.jsxs)(`div`,{className:_.voteBoxHeader,children:[a&&(0,y.jsx)(n,{className:_.votePositionLabel,text:a,colorType:a,variantsObject:b}),i&&(0,y.jsx)(`span`,{className:_.voteBoxType,children:i}),(0,y.jsxs)(`span`,{className:_.voteBoxDate,children:[`Réalisé le`,` `,new Date(e).toLocaleDateString(`fr-FR`,{day:`2-digit`,month:`long`,year:`numeric`})]})]}),(0,y.jsx)(`div`,{className:_.voteBoxContent,children:t}),(0,y.jsx)(`div`,{className:_.voteBoxStatusContainer,children:o?(0,y.jsx)(n,{text:r,className:_.voteBoxStatus,colorType:r,variantsObject:b}):r})]}),x.__docgenInfo={description:``,methods:[],displayName:`VoteBox`,props:{date:{required:!0,tsType:{name:`string`},description:`Date`},mainText:{required:!0,tsType:{name:`string`},description:`Main text`},status:{required:!0,tsType:{name:`string`},description:`Status of the voted item`},type:{required:!1,tsType:{name:`string`},description:`Which item the vote is on`},votePosition:{required:!1,tsType:{name:`string`},description:`What is the current vote`},statusHighlighted:{required:!1,tsType:{name:`boolean`},description:`Highlighting status of the voted item with a label for design purposes`,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Extra className`},voteUid:{required:!0,tsType:{name:`string`},description:`UID`}}}})),C,w,T,E,D,O,k;e((()=>{S(),C=t(),w={title:`Vote/VoteBox`,component:x,parameters:{docs:{description:{component:"A box for presenting the result of a vote.\n\n```tsx\nimport { VoteBox } from '@tricoteuses/react-components';\n```"}}},decorators:[e=>(0,C.jsx)(`div`,{style:{width:`300px`},children:(0,C.jsx)(e,{})})],args:{status:`Adopté`,date:`2024-10-08T00:00:00.000Z`,mainText:`Le projet de loi constitutionnelle modifiant le corps électoral en Nouvelle-Calédonie`,voteUid:`123456`}},T={args:{votePosition:`pour`}},E={args:{status:`adopté`,votePosition:`contre`}},D={args:{status:`adopté`,type:`Projet de loi`,statusHighlighted:!0}},O={args:{status:`en discussion`,type:`Projet de loi`,statusHighlighted:!0}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    votePosition: "pour"
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    status: "adopté",
    votePosition: "contre"
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    status: "adopté",
    type: "Projet de loi",
    statusHighlighted: true
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    status: "en discussion",
    type: "Projet de loi",
    statusHighlighted: true
  }
}`,...O.parameters?.docs?.source}}},k=[`PositionSuccess`,`PositionCancel`,`StatusSuccess`,`StatusInfo`]}))();export{E as PositionCancel,T as PositionSuccess,O as StatusInfo,D as StatusSuccess,k as __namedExportsOrder,w as default};