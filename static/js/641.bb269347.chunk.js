"use strict";(self.webpackChunkabz_test_task=self.webpackChunkabz_test_task||[]).push([[641],{5641:function(e,r,n){n.r(r),n.d(r,{default:function(){return F}});var a=n(2791),t=n(5089),s=n(5413),i=function(e){return e.position},o=function(e){return e.access},l=n(6568),c=n(3998),u=n(184),d=function(e){var r=e.info,n=r.photo,a=r.name,t=r.position,s=r.email,i=r.phone;return(0,u.jsxs)("div",{className:"user",children:[(0,u.jsx)("div",{className:"user__img",children:n?(0,u.jsx)("img",{src:n,alt:"User's photo",loading:"lazy"}):c.Y.user}),(0,u.jsx)("div",{className:"user__name","data-title":a,children:(0,u.jsx)(l.ZT,{tag:"h3",center:!0,children:a})}),(0,u.jsx)("div",{className:"user__position","data-title":t,children:(0,u.jsx)(l.ZT,{tag:"p",center:!0,children:t})}),(0,u.jsx)("div",{className:"user__email","data-title":s,children:(0,u.jsx)(l.ZT,{tag:"p",center:!0,children:s})}),(0,u.jsx)(l.ZT,{tag:"p",center:!0,children:i})]})},h=function(e){return e.user},p=function(){var e=(0,t.$G)(),r=(0,t.CG)(h),n=r.page,s=r.limit,i=r.usersStatus,o=r.error,c=r.users,p=r.hasMore,m=(0,t.Fc)(),x=m.getUsers,f=m.incrementPage,g=function(){x({page:n,count:s}),f()};return(0,a.useEffect)((function(){"idle"===i&&g()}),[i]),(0,u.jsx)("section",{className:"get",id:"users",children:(0,u.jsxs)(l.W2,{children:[(0,u.jsx)(l.ZT,{tag:"h2",variant:"h1",center:!0,children:e.pages.home.get.title}),o&&(0,u.jsx)(l.ZT,{variant:"h1",className:"get__error",center:!0,children:o}),(0,u.jsx)("ul",{className:"get__users",children:c.map((function(e){return(0,u.jsx)(d,{info:e},e.id)}))}),"loading"!==i&&p&&(0,u.jsx)(l.zx,{onClick:g,children:e.btn.showMore}),"loading"===i&&(0,u.jsx)(l.aN,{})]})})},m=function(e){var r={heroBg1x:"/abz-test-task/img/hero/img@1x.jpg",heroBg2x:"/abz-test-task/img/hero/img@2x.jpg",heroBg1xMob:"/abz-test-task/img/hero/img@1x-mobile.jpg",heroBg2xMob:"/abz-test-task/img/hero/img@2x-mobile.jpg"};return r.hasOwnProperty(e)?r[e]:""},x=function(){var e=(0,t.$G)();return(0,u.jsx)("section",{className:"hero",children:(0,u.jsx)(l.W2,{children:(0,u.jsxs)("div",{className:"hero-wrapper",children:[(0,u.jsx)("div",{className:"hero-bg",children:(0,u.jsxs)("picture",{children:[(0,u.jsx)("source",{srcSet:"".concat(m("heroBg1xMob")," 1x, ").concat(m("heroBg2xMob")," 2x"),type:"image/jpg",media:"(max-width: 576px)"}),(0,u.jsx)("img",{src:m("heroBg1x"),srcSet:m("heroBg2x"),width:"1170",height:"650",loading:"lazy",alt:"Ukrainian lanscape"})]})}),(0,u.jsxs)("div",{className:"hero-info",children:[(0,u.jsx)(l.ZT,{tag:"h1",variant:"h1",color:"white",center:!0,children:e.pages.home.hero.title}),(0,u.jsx)(l.ZT,{tag:"p",color:"white",center:!0,children:e.pages.home.hero.description}),(0,u.jsx)(l.zx,{path:"#sign",hashLink:!0,children:e.navigation.signUp})]})]})})})},f=n(4165),g=n(9439),j=n(5861),v=n(4695),_=n(1134),b=n(1413),N=n(4925),Z=["value","onChange","error","helperText"],w=function(e){var r=e.value,n=e.onChange,a=e.error,t=e.helperText,s=(0,N.Z)(e,Z);return(0,u.jsxs)("div",{className:function(){var e="form-file-upload ";return a&&(e+=" error"),r.length&&(e+=" load"),e}(),children:[(0,u.jsxs)("label",{className:"form-file-upload__wrapper",children:[(0,u.jsx)("input",(0,b.Z)({className:"visually-hidden",onChange:function(e){return n(e.target.files)},type:"file",value:r.filename,accept:".jpg,.jpeg"},s)),(0,u.jsx)("span",{className:"form-file-upload__btn",children:"Upload"}),(0,u.jsx)("span",{className:"form-file-upload__name",children:r.length?r[0].name:"Upload your photo"})]}),t&&(0,u.jsx)("span",{className:"form-error",children:t})]})},z=["placeholder","error","helperText"],T=["name","defaultValue","helperText","placeholder"],k=function(e){var r=e.placeholder,n=e.error,a=e.helperText,t=(0,N.Z)(e,z);return(0,u.jsxs)("div",{className:function(){var e="form-input ";return n&&(e+="error"),e}(),children:[(0,u.jsxs)("div",{className:"form-input__wrapper",children:[(0,u.jsx)("input",(0,b.Z)({className:"form-input__wrapper-input",type:"text",id:t.name,placeholder:" "},t)),(0,u.jsx)("label",{htmlFor:t.name,className:"form-input__label",children:r}),(0,u.jsx)("fieldset",{className:"form-input__fieldset",children:(0,u.jsx)("legend",{className:"form-input__legend",children:(0,u.jsx)("span",{children:r})})})]}),a&&(0,u.jsx)("span",{className:"".concat(n?"form-error":"form-text-helper"),children:a})]})},X=function(e){var r=e.methods,n=e.children,a=e.onSubmit;return(0,u.jsx)(_.RV,(0,b.Z)((0,b.Z)({},r),{},{children:(0,u.jsx)("form",{onSubmit:a,children:n})}))};X.Input=function(e){var r=e.name,n=e.defaultValue,a=void 0===n?"":n,t=e.helperText,s=void 0===t?"":t,i=e.placeholder,o=void 0===i?"":i,l=(0,N.Z)(e,T),c=(0,_.Gc)().control;return(0,u.jsx)(_.Qr,{name:r,control:c,defaultValue:a,render:function(e){var r=e.field,n=e.fieldState.error;return(0,u.jsx)(k,(0,b.Z)({value:r.value||"",onChange:r.onChange,error:!!n,helperText:(null===n||void 0===n?void 0:n.message)||s,placeholder:o},l))}})},X.Radio=function(e){var r=e.label,n=e.value,a=e.name,t=(0,_.Gc)().register;return(0,u.jsxs)("label",{className:"form-radio",children:[(0,u.jsx)("input",(0,b.Z)((0,b.Z)({},t(a)),{},{type:"radio",name:a,value:n})),(0,u.jsx)("span",{className:"form-radio__field"}),(0,u.jsx)("span",{className:"form-radio__label",children:r})]})},X.FileUpload=function(e){var r=e.name,n=(0,_.Gc)().control;return(0,u.jsx)(_.Qr,{name:r,control:n,defaultValue:[],render:function(e){var r=e.field,n=r.value,a=r.onChange,t=e.fieldState.error;return(0,u.jsx)(w,{value:n,onChange:a,error:!!t,helperText:null===t||void 0===t?void 0:t.message})}})};var C=n(4904),S=n(2797),y=function(e){var r=new Image;return new Promise((function(n,a){r.onload=function(){var e=r.naturalWidth,a=r.naturalHeight;n({width:e,height:a})},r.onerror=function(){a("There was some problem with the image.")},r.src=URL.createObjectURL(e)}))},U=function(){var e=(0,j.Z)((0,f.Z)().mark((function e(r){var n,a,t,s,i,o;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=(0,g.Z)(r,1),a=n[0],t=!0,!a){e.next=9;break}return e.next=5,y(a);case 5:s=e.sent,i=s.width,o=s.height,(i>70||o>70)&&(t=!1);case 9:return e.abrupt("return",t);case 10:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),R=(0,S.Ry)({name:(0,S.Z_)().min(2,"Name should be 2-60 characters").max(60,"Name should be 2-60 characters").required(),email:(0,S.Z_)().matches(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,"Email must be a valid email according to RFC2822").required(),phone:(0,S.Z_)().min(13).max(13).matches(/^[+380]/g,"Phone must start +380").matches(/^[+]{0,1}380([0-9]{9})$/,"Phone isn't valid. Example +380XXXXXXXXX").required(),position_id:(0,S.Rx)().required(),photo:(0,S.nK)().required("You need to provide a file").test("is-big-file","Size must not exceed 5MB",(function(e){var r=(0,g.Z)(e,1)[0],n=!0;r&&(r.size/1024/1024>5&&(n=!1));return n})).test("is-resolution-correct","Resolution at least 70x70px",U).test("is-correct-type","User photo should be jpg/jpeg image",(function(e){var r=(0,g.Z)(e,1)[0],n=!0;return r&&(["image/jpeg","image/jpg"].includes(r.type)||(n=!1)),n}))}),G=function(){var e=(0,t.$G)(),r=(0,t.CG)(i).positions,n=(0,t.CG)(h).userRegistered,a=(0,t.CG)(o).token,s=(0,t.Fc)().resetStoreUsers,d=(0,t.QT)().handleRequest,p=(0,_.cI)({mode:"onChange",resolver:(0,v.X)(R)}),m=p.handleSubmit,x=p.formState,b=x.isSubmitting,N=x.isValid,Z=p.reset,w=function(e){var r=new FileReader;r.onloadend=function(){var e;p.setValue("photo",null===(e=r.result)||void 0===e?void 0:e.toString())},r.readAsDataURL(e)},z=d(function(){var e=(0,j.Z)((0,f.Z)().mark((function e(r){var n,t,i,o,l,c,u;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=new FormData,t=0,i=Object.entries(r);t<i.length;t++)o=(0,g.Z)(i[t],2),l=o[0],c=o[1],n.append(l,c);return n.set("photo",r.photo[0]),r.photo.length>0&&(r.photo=w(r.photo[0])),e.next=6,C.fz.addUser(n,a);case 6:if(!((u=e.sent).status<=200&&u.status>299)){e.next=9;break}throw new Error;case 9:Z(),s();case 11:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}());return(0,u.jsx)("section",{className:"post",id:"sign",children:(0,u.jsxs)(l.W2,{children:[(0,u.jsx)(l.ZT,{tag:"h2",variant:"h1",center:!0,children:n?e.pages.home.post.titleSuccess:e.pages.home.post.title}),n?(0,u.jsx)("div",{className:"post__image",children:c.Y.success}):(0,u.jsx)(X,{methods:p,onSubmit:m(z),children:(0,u.jsxs)("div",{className:"post__form",children:[(0,u.jsx)(X.Input,{name:"name",placeholder:e.forms.name.placeholder}),(0,u.jsx)(X.Input,{name:"email",placeholder:e.forms.email.placeholder}),(0,u.jsx)(X.Input,{name:"phone",placeholder:e.forms.phone.placeholder,helperText:"+38 (XXX) XXX - XX - XX"}),(0,u.jsxs)("div",{className:"post__radio-group",children:[(0,u.jsx)(l.ZT,{tag:"p",children:"Select your position"}),null===r||void 0===r?void 0:r.map((function(e){return(0,u.jsx)(X.Radio,{label:e.name,name:"position_id",value:e.id},e.id)}))]}),(0,u.jsx)(X.FileUpload,{name:"photo"}),(0,u.jsx)(l.zx,{className:"post__form-btn",type:"submit",isLoading:b||!N,children:e.navigation.signUp})]})})]})})},F=function(){var e=(0,t.CG)(i).positionsStatus,r=(0,t.CG)(o).tokenStatus,n=(0,s.F)(),l=n.getPositions,c=n.getTokenForRegistation;return(0,a.useEffect)((function(){"idle"===e&&l()}),[e]),(0,a.useEffect)((function(){"idle"===r&&c()}),[r]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(x,{}),(0,u.jsx)(p,{}),(0,u.jsx)(G,{})]})}}}]);
//# sourceMappingURL=641.bb269347.chunk.js.map