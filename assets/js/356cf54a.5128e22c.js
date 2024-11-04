"use strict";(self.webpackChunkztassess=self.webpackChunkztassess||[]).push([[8536],{36895:(e,t,s)=>{s.d(t,{$8:()=>o,DR:()=>n,wO:()=>r});const n={apiEndPoint:"https://ztassess.azurewebsites.net"},r={auth:{clientId:"e7dfcbb6-fe86-44a2-b512-8d361dcc3d30"}},o={scopes:["Agreement.Read.All","CrossTenantInformation.ReadBasic.All","Directory.Read.All","Policy.Read.All","User.Read","DeviceManagementServiceConfig.Read.All","DeviceManagementConfiguration.Read.All","DeviceManagementRBAC.Read.All","DeviceManagementConfiguration.Read.All","DeviceManagementApps.Read.All","RoleAssignmentSchedule.Read.Directory","RoleEligibilitySchedule.Read.Directory","PrivilegedEligibilitySchedule.Read.AzureADGroup"]}},59527:(e,t,s)=>{s.d(t,{A:()=>l});var n=s(51107);const r={features:"features_t9lD",featureBtn:"featureBtn_vC3x",featureSvg:"featureSvg_GfXr"};var o=s(28774),i=s(74848);const a=[{title:"What is Zero Trust?",Svg:s(40523).A,description:(0,i.jsxs)(i.Fragment,{children:["Navigating the complexities of modern security is challenging, but a Zero Trust strategy can provide clarity and direction. By adopting Zero Trust, your organization can enhance its security posture, reducing risk and complexity while improving compliance and governance.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"This workshop helps you apply the Zero Trust principles across the Microsoft Security landscape:",(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Verify Explicitly"}),(0,i.jsx)("li",{children:"Use Least Privilege Access"}),(0,i.jsx)("li",{children:"Assume Compromise"})]}),(0,i.jsx)("br",{})]}),buttonText:"Learn more",buttonDest:"https://aka.ms/zerotrust"},{title:"Why run the workshop",Svg:s(80448).A,description:(0,i.jsxs)(i.Fragment,{children:["The Zero Trust Workshop is a guided framework from Microsoft to help you translate Zero Trust Strategy into a deployment reality.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Using our learnings from thousands of customer deployments, we help you evaluate your current environment and provide concrete steps in a first-then-next structure to help you arrive at an improved end-to-end security posture."]}),buttonText:"Learn about our workshop",buttonDest:"workshop"},{title:"How do I run the workshop?",Svg:s(61639).A,description:(0,i.jsxs)(i.Fragment,{children:["For step-by-step guidance on delivering the strategy session and running the assessment, refer to our ",(0,i.jsx)("a",{href:"guide",title:"Zero Trust Workshop Plan",children:"step-by-step plan"}),". If you are unsure how to get started, watch our Zero Trust Workshop Introductory video.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("iframe",{width:"100%",height:"315",src:" https://www.youtube.com/embed/0-IYLWMHxGg?si=JyV0MuwIUBDKoFpN ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0})]}),buttonText:"",buttonDest:""}];function c(e){let t,{Svg:s,title:a,description:c,buttonText:l,buttonDest:d}=e;return""!==d&&(t=(0,i.jsx)("div",{className:"text--center featureBtn action-button",children:(0,i.jsx)(o.A,{className:"text--center button button--primary button--lg",href:d,children:l})})),(0,i.jsxs)("div",{className:"sub-section",children:[(0,i.jsx)("img",{src:s,className:r.featureSvg,role:"img",title:a}),(0,i.jsxs)("div",{className:"content",children:[(0,i.jsx)(n.A,{as:"h2",children:a}),(0,i.jsx)("p",{className:"text--left",children:c})]}),t]})}function l(){return(0,i.jsx)("section",{className:r.features,children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"section",children:a.map(((e,t)=>(0,i.jsx)(c,{...e},t)))})})})}},32812:(e,t,s)=>{s.r(t),s.d(t,{default:()=>k});var n=s(34164),r=s(96540),o=s(28774),i=s(44586),a=s(10781),c=s(59527),l=s(51107),d=s(65648),u=s(36895),h=s(50010),m=s(43111),p=s(58252),g=s(63811),b=s(36796),x=s(26582),f=s(78238),y=s(43108),j=s(80884),A=s(74848);const v=new j.v(u.wO);function w(){const{siteConfig:e}=(0,i.A)(),{instance:t,accounts:s,inProgress:a}=(0,y.dk)(),[c,h]=(0,r.useState)(!1),[m,j]=(0,r.useState)(!1);return(0,A.jsx)("header",{className:(0,n.A)("hero hero--primary",d.A.heroBanner),children:(0,A.jsxs)("div",{className:"container",children:[(0,A.jsx)(l.A,{as:"h1",className:"hero__title",children:e.title}),(0,A.jsx)("p",{className:"hero__subtitle",children:e.tagline}),(0,A.jsxs)(y.e7,{children:[(0,A.jsxs)("div",{className:d.A.buttons,children:[!c&&(0,A.jsx)(o.A,{className:"button button--secondary button--lg",onClick:async()=>{h(!0),j(!1);!t.getActiveAccount()&&t.getAllAccounts().length>0&&t.setActiveAccount(t.getAllAccounts()[0]);const e={method:"POST",headers:{"Content-type":"application/json","X-DocumentGeneration-Token":(await t.acquireTokenSilent({...u.$8})).accessToken},body:JSON.stringify({isMaskUser:!1})};fetch(u.DR.apiEndPoint+"/document",e).then((e=>e.ok?e.blob():null)).then((e=>{if(null===e)j(!0);else{const t=window.URL.createObjectURL(new Blob([e])),s=document.createElement("a");s.href=t,s.setAttribute("download","Zero Trust Assessment.xlsx"),document.body.appendChild(s),s.click(),s.parentNode.removeChild(s)}h(!1)})).catch((e=>{j(!0),h(!1)}))},children:"Start Zero Trust Assessment \ud83d\ude80"}),c&&(0,A.jsx)(o.A,{className:"button button--secondary button--lg disabled",children:"Start Zero Trust Assessment \ud83d\ude80"}),(0,A.jsx)(o.A,{className:"button button--secondary button--sm",onClick:()=>{t.logoutRedirect()},children:"Sign out \u2192"})]}),m&&(0,A.jsx)("div",{class:"alert alert--danger",role:"alert",children:"Sorry something went wrong. Please try again."}),c&&(0,A.jsx)(p.l,{defaultOpen:!0,modalType:"alert",children:(0,A.jsx)(g.E,{children:(0,A.jsx)(b.R,{children:(0,A.jsx)(x.C,{children:(0,A.jsx)(f.y,{label:"Running assessment. Please wait, this can take a few minutes..."})})})})})]}),(0,A.jsx)(y.hj,{children:(0,A.jsx)("div",{className:d.A.buttons,children:(0,A.jsx)(o.A,{className:"button button--secondary button--lg",onClick:()=>{t.loginRedirect(u.$8)},children:"Sign in to run assessment \u2192"})})})]})})}function k(){const{siteConfig:e}=(0,i.A)();return(0,A.jsxs)(a.A,{title:"Microsoft Zero Trust Assessment",description:"Check your Microsoft tenant configuration for zero trust readiness",children:[(0,A.jsx)(y.r7,{instance:v,children:(0,A.jsx)(h.q,{theme:m.k,children:(0,A.jsx)(w,{})})}),(0,A.jsx)("main",{children:(0,A.jsx)(c.A,{})})]})}},65648:(e,t,s)=>{s.d(t,{A:()=>n});const n={heroBanner:"heroBanner_qdFl","hero-content":"hero-content_cHqH","hero-text":"hero-text_SXIl","hero-image":"hero-image_kJuk",buttons:"buttons_AeoN"}},80448:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/what-does-workshop-cover-21b84b952083b3af5346a8fbf103c9d3.png"},40523:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/what-is-zero-trust-35f6bdeb8f6a911b3c44ae9084a655bf.png"},61639:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/workshop-run-815c37fa93ba895b73cdab6f843bfb2e.png"}}]);