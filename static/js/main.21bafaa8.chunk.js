(this.webpackJsonpkyuwitter=this.webpackJsonpkyuwitter||[]).push([[0],{48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a.n(n),r=a(28),s=a.n(r),i=a(9),u=a(19),o=a(6),l=a(34),j=a(20);a(39),a(50),a(51);j.a.initializeApp({apiKey:"AIzaSyCnnelGsP7uaO_igysjF2SQY_vV4h4TyDo",authDomain:"kyuwitter.firebaseapp.com",projectId:"kyuwitter",storageBucket:"kyuwitter.appspot.com",messagingSenderId:"681447125834",appId:"1:681447125834:web:7ee06a9dcc7d7aa01d47b3"});var d=j.a,b=j.a.auth(),p=j.a.firestore(),m=j.a.storage(),f=a(10),O=a.n(f),x=a(16),h=a(2),v=function(e){var t=e.mentions,a=e.isOwner,c=Object(n.useState)(!1),r=Object(i.a)(c,2),s=r[0],u=r[1],o=Object(n.useState)(t.text),l=Object(i.a)(o,2),j=l[0],d=l[1],b=function(){var e=Object(x.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\uc815\ub9d0 \uc0ad\uc81c \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=6;break}return e.next=4,p.doc("kyuwitter/".concat(t.id)).delete();case 4:return e.next=6,m.refFromURL(t.imgFileUrl);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){u((function(e){return!e}))},v=function(){var e=Object(x.a)(O.a.mark((function e(a){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,p.doc("kyuwitter/".concat(t.id)).update({text:j});case 3:u(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"kyuwitt_wrap",children:[Object(h.jsxs)("div",{className:"kyuwitt_img_wrap",children:[Object(h.jsx)("div",{className:"nweet",children:s?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("form",{onSubmit:v,className:"container nweetEdit",children:[Object(h.jsx)("input",{type:"text",placeholder:"EDIT ! ! ",value:j,required:!0,onChange:function(e){var t=e.target.value;d(t)},className:"formInput"}),Object(h.jsx)("input",{type:"submit",value:"Update ! !",className:"formBtn"})]}),Object(h.jsx)("button",{onClick:f,className:"formBtn cancelBtn",children:"Cancel"})]}):Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("h4",{children:t.text})})}),t.imgFileUrl&&Object(h.jsx)("img",{src:t.imgFileUrl,alt:""})]}),Object(h.jsx)("div",{className:"kyuwitt_actions",children:a&&Object(h.jsxs)("div",{className:"nweet__actions",children:[Object(h.jsx)("button",{onClick:b,className:"kyuwitt_btn",children:"Delete Kyuwitt"}),Object(h.jsx)("button",{onClick:f,className:"kyuwitt_btn",style:{marginLeft:"10px"},children:"Edit Kyuwitt"})]})}),Object(h.jsx)("div",{})]})},y=a(53),g=function(e){var t=e.userObj,a=Object(n.useState)(""),c=Object(i.a)(a,2),r=c[0],s=c[1],u=Object(n.useState)(""),o=Object(i.a)(u,2),l=o[0],j=o[1],d=function(){var e=Object(x.a)(O.a.mark((function e(a){var n,c,i,u;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),""!==r){e.next=3;break}return e.abrupt("return");case 3:if(n="",""===l){e.next=12;break}return c=m.ref().child("".concat(t.uid,"/").concat(Object(y.a)())),e.next=8,c.putString(l,"data_url");case 8:return i=e.sent,e.next=11,i.ref.getDownloadURL();case 11:n=e.sent;case 12:return u={text:r,createdAt:Date.now(),creatorId:t.uid,imgFileUrl:n},e.next=15,p.collection("kyuwitter").add(u);case 15:s(""),j("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("form",{onSubmit:d,className:"factoryForm",children:[Object(h.jsxs)("div",{className:"factoryInput__container",children:[Object(h.jsx)("input",{type:"text",placeholder:"what's on your mind?",value:r,onChange:function(e){var t=e.target.value;s(t)},maxLength:120,className:"factoryInput__input"}),Object(h.jsx)("input",{type:"submit",value:"yes",className:"factoryInput__arrow"})]}),Object(h.jsx)("label",{for:"attach-file",className:"factoryInput__label",children:Object(h.jsx)("span",{children:"Add Photo"})}),Object(h.jsx)("input",{id:"attach-file",type:"file",accept:"imgage/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.currentTarget.result;j(t)},Boolean(t)&&a.readAsDataURL(t)},style:{opacity:0}}),l&&Object(h.jsxs)("div",{className:"factoryForm__attachment",children:[Object(h.jsx)("img",{src:l,alt:"",style:{backgroundImage:l}}),Object(h.jsx)("div",{className:"factoryForm__clear",onClick:function(){j("")},children:Object(h.jsx)("span",{children:"Romove"})})]})]})},w=function(e){var t=e.userObj,a=Object(n.useState)([]),c=Object(i.a)(a,2),r=c[0],s=c[1];return Object(n.useEffect)((function(){p.collection("kyuwitter").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(l.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(g,{userObj:t}),Object(h.jsx)("div",{style:{marginTop:30},children:r.map((function(e){return Object(h.jsx)(v,{mentions:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},N=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(i.a)(r,2),u=s[0],o=s[1],l=Object(n.useState)(!0),j=Object(i.a)(l,2),d=j[0],p=j[1],m=Object(n.useState)(""),f=Object(i.a)(m,2),v=f[0],y=f[1],g=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?c(n):"password"===a&&o(n)},w=function(){var e=Object(x.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!d){e.next=8;break}return e.next=5,b.createUserWithEmailAndPassword(a,u);case 5:n=e.sent,e.next=11;break;case 8:return e.next=10,b.signInWithEmailAndPassword(a,u);case 10:n=e.sent;case 11:console.log(n),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),y(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("form",{autoComplete:"off",onSubmit:w,className:"container",children:[Object(h.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:a,onChange:g,className:"authInput"}),Object(h.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:u,onChange:g,className:"authInput"}),Object(h.jsx)("input",{type:"submit",value:d?"Create New Account":"Log In",className:"authInput authSubmit"}),v&&Object(h.jsx)("span",{className:"authError",children:v})]}),Object(h.jsx)("span",{onClick:function(){p((function(e){return!e}))},className:"authSwitch",children:d?"Log In":"Create New Account"})]})},k=a(29),_=function(){var e=function(){var e=Object(x.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new d.auth.GoogleAuthProvider,e.next=3,b.signInWithPopup(a);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"authContainer",children:[Object(h.jsx)(N,{}),Object(h.jsx)("button",{onClick:e,name:"google",className:"authBtn",children:Object(h.jsxs)("div",{className:"authGoogleWrap",children:[Object(h.jsx)(k.a,{className:"googleIcon",size:"20"}),"Continue with Google"]})})]})},I=function(e){var t=e.userObj,a=e.refreshUser,c=Object(n.useState)(t.displayName),r=Object(i.a)(c,2),s=r[0],u=r[1],l=Object(o.f)(),j=function(){var e=Object(x.a)(O.a.mark((function e(n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),t.displayName===s){e.next=4;break}return e.next=4,t.updateProfile({displayName:s});case 4:a();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("form",{onSubmit:j,className:"profileForm",children:[Object(h.jsx)("input",{type:"text",placeholder:"Display Name",value:s,onChange:function(e){var t=e.target.value;u(t)},autoFocus:!0,className:"formInput"}),Object(h.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(h.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){b.signOut(),l.push("/")},children:"Log out!"})]})},S=a(31),C=a(32),F=function(e){var t=e.userObj;return Object(h.jsx)("nav",{children:Object(h.jsxs)("ul",{className:"nav_ul",children:[Object(h.jsx)("li",{className:"nav_li",children:Object(h.jsxs)(u.b,{to:"/",children:[Object(h.jsx)("sapn",{children:"Home"}),Object(h.jsx)(S.a,{style:{marginLeft:"5px"},size:"14px"})]})}),Object(h.jsx)("li",{className:"nav_li",children:Object(h.jsxs)(u.b,{to:"/profile",children:[Object(h.jsx)("span",{children:t.displayName?"".concat(t.displayName," \uc758 Profile"):"Profile"}),Object(h.jsx)(C.a,{style:{marginLeft:"5px"},size:"14px"})]})})]})})},P=function(e){var t=e.isLoggedIn,a=e.userObj,n=e.refreshUser;return Object(h.jsxs)(u.a,{children:[t&&Object(h.jsx)(F,{userObj:a}),Object(h.jsx)(o.c,{children:t?Object(h.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(h.jsx)(o.a,{exact:!0,path:"/",children:Object(h.jsx)(w,{userObj:a})}),Object(h.jsx)(o.a,{exact:!0,path:"/profile",children:Object(h.jsx)(I,{userObj:a,refreshUser:n})})]}):Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(o.a,{children:Object(h.jsx)(_,{exact:!0,path:"/"})})})})]})},U=a(33);var L=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),s=Object(i.a)(r,2),u=s[0],o=s[1];return Object(n.useEffect)((function(){b.onAuthStateChanged((function(e){o(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),c(!0)}))}),[]),Object(h.jsxs)("div",{className:"app_container",children:[a&&Object(h.jsxs)("div",{style:{display:"flex"},children:[Object(h.jsx)("div",{className:"title",children:"Kyuwitter"}),Object(h.jsx)(U.a,{size:"20px",style:{marginLeft:"10px"}})]}),a?Object(h.jsx)(P,{isLoggedIn:Boolean(u),userObj:u,refreshUser:function(){var e=b.currentUser;o({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}),console.log(e.displayName)}}):Object(h.jsx)("span",{className:"initial",children:"Initializing..."})]})};a(48);s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(L,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.21bafaa8.chunk.js.map