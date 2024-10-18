"use strict";(self.webpackChunkztassess=self.webpackChunkztassess||[]).push([[697],{74831:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var s=t(74848),i=t(28453);const r={},o="074: Integrate all Entra logs into SIEM",l={id:"workshop-guidance/identity/RMI_074",title:"074: Integrate all Entra logs into SIEM",description:"Overview",source:"@site/docs/workshop-guidance/identity/RMI_074.md",sourceDirName:"workshop-guidance/identity",slug:"/workshop-guidance/identity/RMI_074",permalink:"/zerotrustassessment/docs/workshop-guidance/identity/RMI_074",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/zerotrustassessment/tree/main/src/react/docs/workshop-guidance/identity/RMI_074.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"073: Deploy Cloud Privileged Access Workstations",permalink:"/zerotrustassessment/docs/workshop-guidance/identity/RMI_073"},next:{title:"075: Develop security playbooks based on Entra logs",permalink:"/zerotrustassessment/docs/workshop-guidance/identity/RMI_075"}},c={},a=[{value:"Overview",id:"overview",level:2},{value:"Reference",id:"reference",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"074-integrate-all-entra-logs-into-siem",children:"074: Integrate all Entra logs into SIEM"})}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"Ingest all data signal from Azure AD to SIEM systems. There are several types of logs that should always be exported to a SIEM:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"AuditLogs"}),"\n",(0,s.jsx)(n.li,{children:"SignInLogs"}),"\n",(0,s.jsx)(n.li,{children:"ServicePrincipalSignInLogs"}),"\n",(0,s.jsx)(n.li,{children:"ManagedIdentitySignInLogs"}),"\n",(0,s.jsx)(n.li,{children:"ADFSSignInLogs"}),"\n",(0,s.jsx)(n.li,{children:"RiskyUsers"}),"\n",(0,s.jsx)(n.li,{children:"UserRiskEvents"}),"\n",(0,s.jsx)(n.li,{children:"RiskyServicePrincipals"}),"\n",(0,s.jsx)(n.li,{children:"ServicePrincipalRiskEvents"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Consider exporting other log types as well, to aid investigations. Some of these log sources can generate a large volume of logs, so ensure that you have a strategy for log retention to control storage costs:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"NonInteractiveUserSignInLogs"}),"\n",(0,s.jsx)(n.li,{children:"ProvisioningLogs"}),"\n",(0,s.jsx)(n.li,{children:"NetworkAccessTrafficLogs"}),"\n",(0,s.jsx)(n.li,{children:"EnrichedOffice365AuditLogs"}),"\n",(0,s.jsx)(n.li,{children:"MicrosoftGraphActivityLogs"}),"\n",(0,s.jsx)(n.li,{children:"RemoteNetworkHealthLogs"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/entra/identity/monitoring-health/concept-log-monitoring-integration-options-considerations",children:"Microsoft Entra activity log integration options - Microsoft Entra ID | Microsoft Learn"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(96540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);