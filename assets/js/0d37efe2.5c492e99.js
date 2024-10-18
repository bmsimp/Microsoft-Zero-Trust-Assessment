"use strict";(self.webpackChunkztassess=self.webpackChunkztassess||[]).push([[7761],{62171:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=t(74848),r=t(28453);const o={},i="020: Set RBAC for DLP/MIP/IRM Admins",a={id:"workshop-guidance/data/RMT_020",title:"020: Set RBAC for DLP/MIP/IRM Admins",description:"Overview",source:"@site/docs/workshop-guidance/data/RMT_020.md",sourceDirName:"workshop-guidance/data",slug:"/workshop-guidance/data/RMT_020",permalink:"/zerotrustassessment/docs/workshop-guidance/data/RMT_020",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/zerotrustassessment/tree/main/src/react/docs/workshop-guidance/data/RMT_020.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"019: Privileged Access Management for DLP/MIP/IRM Admins",permalink:"/zerotrustassessment/docs/workshop-guidance/data/RMT_019"},next:{title:"021: Set minimum standards for trusted devices / accounts",permalink:"/zerotrustassessment/docs/workshop-guidance/data/RMT_021"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Reference",id:"reference",level:2}];function l(e){const n={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"020-set-rbac-for-dlpmipirm-admins",children:"020: Set RBAC for DLP/MIP/IRM Admins"})}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"Review the Role-Based Access control options available for administrators of Data Loss Prevention, Microsoft Information Protection and Insider Risk Management, and make the configurations needed for your organization's needed."}),"\n",(0,s.jsx)(n.p,{children:"In particular, consider restricting the use of the following roles and privileges which offer company-wide access to content:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Content Explorer content viewer role group. This role group allows an administrator to view any content in the tenant, regardless of the content's access restrictions. This role is by default only assigned to global administrators and compliance administrators, and should be granted only to personnel involved in data investigations."}),"\n",(0,s.jsx)(n.li,{children:"Content Explorer list viewer role group. This role group allows an administrator to enumerate any content in the tenant, and view matches to sensitive information in it, regardless of the content's access restrictions. This role is by default only assigned to global administrators and compliance administrators, and should be granted only to personnel involved in data investigations and alert processing."}),"\n",(0,s.jsx)(n.li,{children:"AIP SuperUser. This role (assigned via the Add-AIPServiceSuperUser and Set-AIPServiceSuperUserGroup PowerShell commandlets) allows a user to decrypt any MIP-encrypted content protected in the tenant (other than content protected with Dual Key Encryption) regardless of the policy on the label assigned to the content."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Roles and role groups in Microsoft Defender for Office 365 and Microsoft Purview ",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/defender-office-365/scc-permissions",children:"https://learn.microsoft.com/en-us/defender-office-365/scc-permissions"})]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var s=t(96540);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);