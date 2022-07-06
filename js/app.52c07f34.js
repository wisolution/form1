(function(){"use strict";var e={5186:function(e,t,a){var o=a(9242),r=a(3396);function n(e,t,a,o,n,i){const l=(0,r.up)("AppForm");return(0,r.wg)(),(0,r.j4)(l)}var i=a(7139);const l={class:"registration-layout"},s=(0,r._)("div",null,null,-1),c=(0,r.Uk)("Execute recaptcha");function u(e,t,a,o,n,u){const p=(0,r.up)("el-input"),d=(0,r.up)("el-tab-pane"),h=(0,r.up)("el-tabs"),m=(0,r.up)("el-option"),f=(0,r.up)("el-select"),y=(0,r.up)("el-button");return(0,r.wg)(),(0,r.iD)("div",l,[(0,r.Wm)(h,{modelValue:n.activeName,"onUpdate:modelValue":t[2]||(t[2]=e=>n.activeName=e),type:"card",class:"demo-tabs",onTabClick:u.handleClick},{default:(0,r.w5)((()=>[(0,r.Wm)(d,{label:n.by_phone,name:"first"},{default:(0,r.w5)((()=>[(0,r.Wm)(p,{modelValue:n.inputphone,"onUpdate:modelValue":t[0]||(t[0]=e=>n.inputphone=e),placeholder:""},{prepend:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(n.phone),1)])),_:1},8,["modelValue"])])),_:1},8,["label"]),(0,r.Wm)(d,{label:n.by_email,name:"second"},{default:(0,r.w5)((()=>[(0,r.Wm)(p,{modelValue:n.inputemail,"onUpdate:modelValue":t[1]||(t[1]=e=>n.inputemail=e),placeholder:""},{prepend:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(n.email),1)])),_:1},8,["modelValue"])])),_:1},8,["label"])])),_:1},8,["modelValue","onTabClick"]),(0,r.Wm)(f,{modelValue:n.value,"onUpdate:modelValue":t[3]||(t[3]=e=>n.value=e),placeholder:"Select",onChange:t[4]||(t[4]=e=>u.changeCountry(n.value))},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.arrOfObj1,(e=>((0,r.wg)(),(0,r.j4)(m,{key:e.name,label:e.name,value:e.name,disabled:e.disabled},null,8,["label","value","disabled"])))),128))])),_:1},8,["modelValue"]),(0,r.Wm)(f,{modelValue:n.currency,"onUpdate:modelValue":t[5]||(t[5]=e=>n.currency=e),placeholder:"Select"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.currencyArr,(e=>((0,r.wg)(),(0,r.j4)(m,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),(0,r.Wm)(p,{modelValue:n.promocode1,"onUpdate:modelValue":t[6]||(t[6]=e=>n.promocode1=e),placeholder:""},{prepend:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(n.promocode),1)])),_:1},8,["modelValue"]),s,(0,r.Wm)(y,{onClick:u.recaptcha},{default:(0,r.w5)((()=>[c])),_:1},8,["onClick"]),(0,r.Wm)(y,{onClick:u.registrationHandler},{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(n.registration),1)])),_:1},8,["onClick"])])}var p=a(6265),d=a.n(p),h={data(){return{by_phone:"By phone",by_email:"By email",email:"E-Mail",phone:"Phone",promocode:"Promocode",registration:"Register",formTitle:"123",items:[],arrOfObj1:[],value:"",selected:"",promocode1:"",activeName:"first",countryCode:window.serverData.visitorData.countryCode,currencyArr:["USD","EUR"],currency:"",currencyCode:window.serverData.visitorData.currencyCode,promoApiBaseUrl:window.serverData.promoApiBaseUrl,inputphone:"",inputemail:"",message:"",registration_data:[],bonus_type:"casino"}},provide:{recapcha_resp:""},async created(){try{const e=await d().get(this.promoApiBaseUrl+"/landing-registration/countries");this.items=e.data.payload,this.arrOfObj1=Object.values(this.items);let t=window.serverData.visitorData.countryCode,a=Object.keys(this.items);for(let o=0;o<a.length;o++)if(a[o]==t){let e=o;this.inputphone="+"+this.arrOfObj1[e].phone_code,this.value=this.arrOfObj1[e].name,console.log(this.inputphone)}}catch(e){console.log(e)}},components:{},methods:{handleClick(e){console.log(e)},async getCapchaKey(){try{const e=await d().get(this.promoApiBaseUrl+"/recaptcha-key/v3");this.site_key=e.data.payload.key,console.log(this.site_key)}catch(e){console.log(e)}},loadComplete(){this.currencyArr.unshift(this.currencyCode),this.value=this.inputphone,this.currency=this.currencyCode},changeCountry(e){let t=this.arrOfObj1;for(let a=0;a<t.length;a++)if(t[a].name==e){let e=a;this.inputphone="+"+this.arrOfObj1[e].phone_code,this.value=this.arrOfObj1[e].name}},async recaptcha(){await this.$recaptchaLoaded();const e=await this.$recaptcha("login");this.recapcha_resp=e},registrationHandler(){console.group(123),this.registration_data.push("site_id:"+window.serverData.siteId),this.registration_data.push("phone:"+this.inputphone),this.registration_data.push("recaptcha_response:"+this.recapcha_resp),this.registration_data.push("currency_code:"+this.currency),this.registration_data.push("country_code:"+window.serverData.visitorData.countryCode),this.registration_data.push("btag:"+window.serverData.btag),this.registration_data.push("promo_code:"+this.promocode1),this.registration_data.push("bonus_type:"+this.bonus_type);const e=this.registration_data.map((e=>JSON.stringify(e)));console.log(e),alert(e),console.groupEnd(123),this.registration_data=[]}},mounted(){this.loadComplete(),this.getCapchaKey()}},m=a(89);const f=(0,m.Z)(h,[["render",u]]);var y=f,g={name:"App",components:{AppForm:y}};const v=(0,m.Z)(g,[["render",n]]);var b=v,_=a(3268),w=a(9193);let O=(0,o.ri)(b);O.use(w.Z),O.use(_.VueReCaptcha,{siteKey:123}),O.mount("#app")}},t={};function a(o){var r=t[o];if(void 0!==r)return r.exports;var n=t[o]={exports:{}};return e[o].call(n.exports,n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,o,r,n){if(!o){var i=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],n=e[u][2];for(var l=!0,s=0;s<o.length;s++)(!1&n||i>=n)&&Object.keys(a.O).every((function(e){return a.O[e](o[s])}))?o.splice(s--,1):(l=!1,n<i&&(i=n));if(l){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[o,r,n]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,n,i=o[0],l=o[1],s=o[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(s)var u=s(a)}for(t&&t(o);c<i.length;c++)n=i[c],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(u)},o=self["webpackChunk_2"]=self["webpackChunk_2"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(5186)}));o=a.O(o)})();
//# sourceMappingURL=app.52c07f34.js.map