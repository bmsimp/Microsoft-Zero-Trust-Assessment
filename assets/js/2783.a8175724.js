/*! For license information please see 2783.a8175724.js.LICENSE.txt */
"use strict";(self.webpackChunkztassess=self.webpackChunkztassess||[]).push([[2783],{55292:(e,t,r)=>{r.r(t),r.d(t,{NestedAppAuthController:()=>w});var n,o=r(49566),s=r(90177),i=r(26516),c=r(2979),a=r(69569),u=r(16468),d=r(26159),p=r(49279),h=r(24228),A=r(47752),l=r(76831),E=r(32111),g=r(85152),C=r(10536);!function(e){e.USER_INTERACTION_REQUIRED="USER_INTERACTION_REQUIRED",e.USER_CANCEL="USER_CANCEL",e.NO_NETWORK="NO_NETWORK",e.TRANSIENT_ERROR="TRANSIENT_ERROR",e.PERSISTENT_ERROR="PERSISTENT_ERROR",e.DISABLED="DISABLED",e.ACCOUNT_UNAVAILABLE="ACCOUNT_UNAVAILABLE",e.NESTED_APP_AUTH_UNAVAILABLE="NESTED_APP_AUTH_UNAVAILABLE"}(n||(n={}));class T{constructor(e,t,r,n){this.clientId=e,this.clientCapabilities=t,this.crypto=r,this.logger=n}toNaaTokenRequest(e){let t;t=void 0===e.extraQueryParameters?new Map:new Map(Object.entries(e.extraQueryParameters));const r=(new u.H).addClientCapabilitiesToClaims(e.claims,this.clientCapabilities);return{userObjectId:e.account?.homeAccountId,clientId:this.clientId,authority:e.authority,scope:e.scopes.join(" "),correlationId:void 0!==e.correlationId?e.correlationId:this.crypto.createNewGuid(),nonce:e.nonce,claims:d.x.isEmptyObj(r)?void 0:r,state:e.state,authenticationScheme:e.authenticationScheme||p.hO.BEARER,extraParameters:t}}fromNaaTokenResponse(e,t,r){if(!t.id_token||!t.access_token)throw(0,h.zP)(A.PM);const n=new Date(1e3*(r+(t.expires_in||0))),o=l.Z_(t.id_token,this.crypto.base64Decode),s=this.fromNaaAccountInfo(t.account,o);return{authority:t.authority||s.environment,uniqueId:s.localAccountId,tenantId:s.tenantId,scopes:t.scope.split(" "),account:s,idToken:void 0!==t.id_token?t.id_token:"",idTokenClaims:o,accessToken:t.access_token,fromCache:!0,expiresOn:n,tokenType:e.authenticationScheme||p.hO.BEARER,correlationId:e.correlationId,extExpiresOn:n,state:e.state}}fromNaaAccountInfo(e,t){const r=t||e.idTokenClaims,n=e.localAccountId||r?.oid||r?.sub||"",o=e.tenantId||r?.tid||"",s=e.homeAccountId||`${n}.${o}`,i=e.username||r?.preferred_username||"",c=e.name||r?.name;return{homeAccountId:s,environment:e.environment,tenantId:o,username:i,localAccountId:n,name:c,idToken:e.idToken,idTokenClaims:r}}fromBridgeError(e){if(!function(e){return void 0!==e.status}(e))return new C.l4("unknown_error","An unknown error occurred");switch(e.status){case n.USER_CANCEL:return new h.er(A.$R);case n.NO_NETWORK:return new h.er(A.Mq);case n.ACCOUNT_UNAVAILABLE:return new h.er(A.cX);case n.DISABLED:return new h.er(A.Ls);case n.NESTED_APP_AUTH_UNAVAILABLE:return new h.er(e.code||A.Ls,e.description);case n.TRANSIENT_ERROR:case n.PERSISTENT_ERROR:return new E.n(e.code,e.description);case n.USER_INTERACTION_REQUIRED:return new g.Yo(e.code,e.description);default:return new C.l4(e.code,e.description)}}}const I={code:"unsupported_method",desc:"The PKCE code challenge and verifier could not be generated."};class R extends C.l4{constructor(e,t){super(e,t),Object.setPrototypeOf(this,R.prototype),this.name="NestedAppAuthError"}static createUnsupportedError(){return new R(I.code,I.desc)}}var m=r(18896),v=r(30882);class w{constructor(e){this.operatingContext=e;const t=this.operatingContext.getBridgeProxy();if(void 0===t)throw new Error("unexpected: bridgeProxy is undefined");this.bridgeProxy=t,this.config=e.getConfig(),this.logger=this.operatingContext.getLogger(),this.performanceClient=this.config.telemetry.client,this.browserCrypto=e.isBrowserEnvironment()?new a.Q(this.logger,this.performanceClient):o.d,this.eventHandler=new m.b(this.logger,this.browserCrypto),this.nestedAppAuthAdapter=new T(this.config.auth.clientId,this.config.auth.clientCapabilities,this.browserCrypto,this.logger)}getBrowserStorage(){throw R.createUnsupportedError()}getEventHandler(){return this.eventHandler}static async createController(e){const t=new w(e);return Promise.resolve(t)}initialize(){return Promise.resolve()}async acquireTokenInteractive(e){this.eventHandler.emitEvent(v.t.ACQUIRE_TOKEN_START,c.s_.Popup,e);const t=this.performanceClient.startMeasurement(s.Ak.AcquireTokenPopup,e.correlationId);t?.add({nestedAppAuthRequest:!0});try{const r=this.nestedAppAuthAdapter.toNaaTokenRequest(e),n=i.I.nowSeconds(),o=await this.bridgeProxy.getTokenInteractive(r),s=this.nestedAppAuthAdapter.fromNaaTokenResponse(r,o,n);return this.operatingContext.setActiveAccount(s.account),this.eventHandler.emitEvent(v.t.ACQUIRE_TOKEN_SUCCESS,c.s_.Popup,s),t.add({accessTokenSize:s.accessToken.length,idTokenSize:s.idToken.length}),t.end({success:!0,requestId:s.requestId}),s}catch(r){const e=this.nestedAppAuthAdapter.fromBridgeError(r);throw this.eventHandler.emitEvent(v.t.ACQUIRE_TOKEN_FAILURE,c.s_.Popup,null,r),t.end({errorCode:e.errorCode,subErrorCode:e.subError,success:!1}),e}}async acquireTokenSilentInternal(e){this.eventHandler.emitEvent(v.t.ACQUIRE_TOKEN_START,c.s_.Silent,e);const t=this.performanceClient.startMeasurement(s.Ak.SsoSilent,e.correlationId);t?.increment({visibilityChangeCount:0}),t?.add({nestedAppAuthRequest:!0});try{const r=this.nestedAppAuthAdapter.toNaaTokenRequest(e),n=i.I.nowSeconds(),o=await this.bridgeProxy.getTokenSilent(r),s=this.nestedAppAuthAdapter.fromNaaTokenResponse(r,o,n);return this.operatingContext.setActiveAccount(s.account),this.eventHandler.emitEvent(v.t.ACQUIRE_TOKEN_SUCCESS,c.s_.Silent,s),t?.add({accessTokenSize:s.accessToken.length,idTokenSize:s.idToken.length}),t?.end({success:!0,requestId:s.requestId}),s}catch(r){const e=this.nestedAppAuthAdapter.fromBridgeError(r);throw this.eventHandler.emitEvent(v.t.ACQUIRE_TOKEN_FAILURE,c.s_.Silent,null,r),t?.end({errorCode:e.errorCode,subErrorCode:e.subError,success:!1}),e}}async acquireTokenPopup(e){return this.acquireTokenInteractive(e)}acquireTokenRedirect(e){throw R.createUnsupportedError()}async acquireTokenSilent(e){return this.acquireTokenSilentInternal(e)}acquireTokenByCode(e){throw R.createUnsupportedError()}acquireTokenNative(e,t,r){throw R.createUnsupportedError()}acquireTokenByRefreshToken(e,t){throw R.createUnsupportedError()}addEventCallback(e){return this.eventHandler.addEventCallback(e)}removeEventCallback(e){this.eventHandler.removeEventCallback(e)}addPerformanceCallback(e){throw R.createUnsupportedError()}removePerformanceCallback(e){throw R.createUnsupportedError()}enableAccountStorageEvents(){throw R.createUnsupportedError()}disableAccountStorageEvents(){throw R.createUnsupportedError()}getAccount(e){throw R.createUnsupportedError()}getAccountByHomeId(e){const t=this.operatingContext.getActiveAccount();return void 0!==t&&t.homeAccountId===e?this.nestedAppAuthAdapter.fromNaaAccountInfo(t):null}getAccountByLocalId(e){const t=this.operatingContext.getActiveAccount();return void 0!==t&&t.localAccountId===e?this.nestedAppAuthAdapter.fromNaaAccountInfo(t):null}getAccountByUsername(e){const t=this.operatingContext.getActiveAccount();return void 0!==t&&t.username===e?this.nestedAppAuthAdapter.fromNaaAccountInfo(t):null}getAllAccounts(){const e=this.operatingContext.getActiveAccount();return void 0!==e?[this.nestedAppAuthAdapter.fromNaaAccountInfo(e)]:[]}handleRedirectPromise(e){throw R.createUnsupportedError()}loginPopup(e){if(void 0!==e)return this.acquireTokenInteractive(e);throw R.createUnsupportedError()}loginRedirect(e){throw R.createUnsupportedError()}logout(e){throw R.createUnsupportedError()}logoutRedirect(e){throw R.createUnsupportedError()}logoutPopup(e){throw R.createUnsupportedError()}ssoSilent(e){return this.acquireTokenSilentInternal(e)}getTokenCache(){throw R.createUnsupportedError()}getLogger(){return this.logger}setLogger(e){this.logger=e}setActiveAccount(e){this.logger.warning("nestedAppAuth does not support setActiveAccount")}getActiveAccount(){const e=this.operatingContext.getActiveAccount();return void 0!==e?this.nestedAppAuthAdapter.fromNaaAccountInfo(e):null}initializeWrapperLibrary(e,t){}setNavigationClient(e){this.logger.warning("setNavigationClient is not supported in nested app auth")}getConfiguration(){return this.config}isBrowserEnv(){return this.operatingContext.isBrowserEnvironment()}getBrowserCrypto(){return this.browserCrypto}getPerformanceClient(){throw R.createUnsupportedError()}getRedirectResponse(){throw R.createUnsupportedError()}preflightBrowserEnvironmentCheck(e,t){throw R.createUnsupportedError()}async clearCache(e){throw R.createUnsupportedError()}async hydrateCache(e,t){throw R.createUnsupportedError()}}}}]);