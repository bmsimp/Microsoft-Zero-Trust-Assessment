"use strict";(self.webpackChunkztassess=self.webpackChunkztassess||[]).push([[794],{61446:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=i(74848),s=i(28453);const r={},o="082: Review security, compliance, resource access requirements (Certs/Wi-Fi/VPN)",c={id:"workshop-guidance/devices/RMD_082",title:"082: Review security, compliance, resource access requirements (Certs/Wi-Fi/VPN)",description:"Overview",source:"@site/docs/workshop-guidance/devices/RMD_082.md",sourceDirName:"workshop-guidance/devices",slug:"/workshop-guidance/devices/RMD_082",permalink:"/zerotrustassessment/docs/workshop-guidance/devices/RMD_082",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/zerotrustassessment/tree/main/src/react/docs/workshop-guidance/devices/RMD_082.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"081: Review enrolled vs unenrolled for BYOD/Corporate",permalink:"/zerotrustassessment/docs/workshop-guidance/devices/RMD_081"},next:{title:"083: Review app provisioning strategy",permalink:"/zerotrustassessment/docs/workshop-guidance/devices/RMD_083"}},a={},d=[{value:"Overview",id:"overview",level:2},{value:"1. <strong>Enrollment Method</strong>",id:"1-enrollment-method",level:3},{value:"2. <strong>Certificate Management</strong>",id:"2-certificate-management",level:3},{value:"3. <strong>Wi-Fi Configuration</strong>",id:"3-wi-fi-configuration",level:3},{value:"4. <strong>VPN Configuration</strong>",id:"4-vpn-configuration",level:3},{value:"5. <strong>User Experience</strong>",id:"5-user-experience",level:3},{value:"6. <strong>Testing and Validation</strong>",id:"6-testing-and-validation",level:3},{value:"7. <strong>Security Policies</strong>",id:"7-security-policies",level:3},{value:"Reference",id:"reference",level:2}];function l(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"082-review-security-compliance-resource-access-requirements-certswi-fivpn",children:"082: Review security, compliance, resource access requirements (Certs/Wi-Fi/VPN)"})}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"When planning to deploy certificates, Wi-Fi, and VPN profiles to Android devices in Intune, there are several important considerations to keep in mind:"}),"\n",(0,t.jsxs)(n.h3,{id:"1-enrollment-method",children:["1. ",(0,t.jsx)(n.strong,{children:"Enrollment Method"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Choose the Right Enrollment Type"}),": Decide between Android Enterprise options (like Work Profile, Fully Managed, or Dedicated devices) based on your organization's needs. Each method has different capabilities and management levels."]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"2-certificate-management",children:["2. ",(0,t.jsx)(n.strong,{children:"Certificate Management"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"SCEP and PKCS Certificates"}),": Ensure you have a clear strategy for deploying certificates. SCEP (Simple Certificate Enrollment Protocol) is commonly used for automated certificate provisioning. Make sure your devices are configured to accept these certificates for Wi-Fi and VPN authentication\xb9(",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/mem/intune/configuration/wi-fi-settings-android",children:"https://learn.microsoft.com/en-us/mem/intune/configuration/wi-fi-settings-android"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Trusted Root Certificates"}),": Deploy trusted root certificates to establish a secure connection. Ensure that these certificates are correctly configured and distributed to devices\xb2(",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/mem/intune/protect/certificates-trusted-root",children:"https://learn.microsoft.com/en-us/mem/intune/protect/certificates-trusted-root"}),")."]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"3-wi-fi-configuration",children:["3. ",(0,t.jsx)(n.strong,{children:"Wi-Fi Configuration"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Profile Settings"}),": When creating Wi-Fi profiles, specify the SSID, security type (e.g., WPA2), and authentication methods (like EAP-TLS or PEAP). Ensure that the settings align with your organization's network requirements\xb9(",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/mem/intune/configuration/wi-fi-settings-android",children:"https://learn.microsoft.com/en-us/mem/intune/configuration/wi-fi-settings-android"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Hidden Networks"}),": Decide whether to hide the SSID from users. If you choose to hide it, ensure users know how to connect to the network."]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"4-vpn-configuration",children:["4. ",(0,t.jsx)(n.strong,{children:"VPN Configuration"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"VPN Type"}),": Choose the appropriate VPN type (e.g., IKEv2, L2TP) based on your security needs and compatibility with your infrastructure."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Conditional Access"}),": Implement conditional access policies to ensure that only compliant devices can connect to the VPN. This adds an extra layer of security."]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"5-user-experience",children:["5. ",(0,t.jsx)(n.strong,{children:"User Experience"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Ease of Use"}),": Consider the user experience when deploying these profiles. Ensure that the enrollment process is straightforward and that users receive clear instructions on how to connect to Wi-Fi and VPN."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Support and Training"}),": Provide adequate support and training for users to help them understand how to use the deployed profiles effectively."]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"6-testing-and-validation",children:["6. ",(0,t.jsx)(n.strong,{children:"Testing and Validation"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Pilot Testing"}),": Before a full rollout, conduct pilot testing with a small group of users to identify any issues with the deployment of certificates, Wi-Fi, and VPN profiles."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Monitoring and Feedback"}),": After deployment, monitor the performance and gather user feedback to make necessary adjustments."]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"7-security-policies",children:["7. ",(0,t.jsx)(n.strong,{children:"Security Policies"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Compliance and Security"}),": Ensure that all profiles comply with your organization\u2019s security policies. Regularly review and update these policies to address any emerging threats or changes in technology."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["(1) Configure Wi-Fi settings for Android devices in Microsoft Intune. ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/mem/intune/configuration/wi-fi-settings-android",children:"https://learn.microsoft.com/en-us/mem/intune/configuration/wi-fi-settings-android"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["(2) Create trusted certificate profiles in Microsoft Intune. ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/mem/intune/protect/certificates-trusted-root",children:"https://learn.microsoft.com/en-us/mem/intune/protect/certificates-trusted-root"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["(3) Configure security, email, VPN, and Wi-Fi device configuration profiles .... ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/mem/intune/fundamentals/deployment-plan-configuration-profile",children:"https://learn.microsoft.com/en-us/mem/intune/fundamentals/deployment-plan-configuration-profile"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["(4) Support for SCEP certificates in Android Enterprise dedicated devices. ",(0,t.jsx)(n.a,{href:"https://techcommunity.microsoft.com/t5/intune-customer-success/support-for-scep-certificates-in-android-enterprise-dedicated/ba-p/928147",children:"https://techcommunity.microsoft.com/t5/intune-customer-success/support-for-scep-certificates-in-android-enterprise-dedicated/ba-p/928147"}),"."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var t=i(96540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);