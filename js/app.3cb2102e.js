(function(t){function e(e){for(var r,a,s=e[0],c=e[1],l=e[2],p=0,f=[];p<s.length;p++)a=s[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0a0b":function(t,e,n){},"0ae1":function(t,e,n){"use strict";n("fce4")},"102c":function(t,e,n){"use strict";n("96c0")},2219:function(t,e,n){},"3b1d":function(t,e,n){"use strict";n("7f6b")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:t.topTransitionName}},[n("router-view",{staticClass:"top-router-view",attrs:{name:"top",mode:"out-in"}})],1),n("navbar"),n("transition",{attrs:{name:t.bottomTransitionName}},[n("router-view",{staticClass:"bottom-router-view",attrs:{name:"bottom",mode:"out-in"}})],1),n("page-footer")],1)},i=[],a=(n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar"},[n("router-link",{attrs:{to:"/"}},[t._v("home")]),n("router-link",{attrs:{to:"/study"}},[t._v("STUDY")]),n("router-link",{attrs:{to:"/work"}},[t._v("WORK")])],1)}),s=[],c={name:"navbar"},l=c,u=(n("a3a1"),n("2877")),p=Object(u["a"])(l,a,s,!1,null,"cfc91c24",null),f=p.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("span",[t._v("© Juri Welz 2020.")]),n("span",[t._v("Proudly made in quarantine.")]),n("span",[n("router-link",{attrs:{to:"imprint"}},[t._v("Imprint")])],1)])},d=[],m={name:"pageFooter"},_=m,b=(n("0ae1"),Object(u["a"])(_,v,d,!1,null,"d4b3156a",null)),h=b.exports,y={name:"app",components:{PageFooter:h,navbar:f},data:function(){return{topTransitionName:"",bottomTransitionName:""}},watch:{$route:function(t,e){if("imprint"===t.name)return this.bottomTransitionName="pop-up",void console.log("opoup");if("imprint"!==e.name){if(0===t.name)return this.topTransitionName="slide-in-from-top",void(this.bottomTransitionName="slide-out-to-bottom");0===e.name&&(this.topTransitionName="slide-out-to-top",this.bottomTransitionName="slide-in-from-bottom"),e.name<t.name?this.bottomTransitionName="slide-left":t.name<e.name&&(this.bottomTransitionName="slide-right")}else this.bottomTransitionName="pop-down"}}},w=y,k=(n("5c0b"),Object(u["a"])(w,o,i,!1,null,null,null)),g=k.exports,S=n("8c4f"),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"completeTitle"},[n("juriwelz"),n("subtitle")],1)},O=[],T=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{attrs:{id:"title"}},[n("span",{attrs:{id:"juri"}},[t._v("JURI")]),n("span",{attrs:{id:"ottoorson"}},[t._v("OTTO ORSON")]),n("span",{attrs:{id:"welz"}},[t._v("WELZ")])])}],E={name:"juriwelz"},C=E,P=(n("102c"),Object(u["a"])(C,T,j,!1,null,"d3d6f624",null)),I=P.exports,$=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},M=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"subtitle"}},[n("div",{attrs:{id:"actual-subtitle"}},[t._v(" MASTER STUDENT COMPUTER SCIENCE ")]),n("div",{attrs:{id:"visit-me"}},[t._v(" (visit me on "),n("a",{attrs:{href:"https://www.linkedin.com/in/juri-otto-orson-welz-753b4a138"}},[t._v("LinkedIn")]),t._v(") ")])])}],N={name:"subtitle"},B=N,A=(n("fd57"),Object(u["a"])(B,$,M,!1,null,"cdda8474",null)),z=A.exports,L={name:"completeTitle",components:{juriwelz:I,subtitle:z}},F=L,J=Object(u["a"])(F,x,O,!1,null,"3ee08b58",null),U=J.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"study"},[n("h2",[t._v("Study")]),n("article",[n("h3",[t._v("University of Ljubljana")]),n("c-v-block",{scopedSlots:t._u([{key:"block-date",fn:function(){return[t._v("winter semester 2020/2021")]},proxy:!0},{key:"block-title",fn:function(){return[t._v("Erasmus Semester")]},proxy:!0}])},[n("div",[t._v("Bioinformatics, Computer Based Sound Production, Information Systems Security and Privacy, Slovene Language")]),n("div",[t._v("I wrote this "),n("a",{attrs:{href:"https://pitch-recognition.juriw.com"}},[t._v("voice pitch classification program")]),t._v(". The autocorrelation approach works quite well.")]),n("div",[t._v("Despite COVID restrictions an enriching experience, although I would have loved it to see the university building more than two times.")])])],1),n("article",[n("h3",[t._v("Technische Universität Berlin")]),n("c-v-block",{scopedSlots:t._u([{key:"block-date",fn:function(){return[t._v(" since winter semester 2019/2020 ")]},proxy:!0},{key:"block-title",fn:function(){return[t._v(" MSc Computer Science ")]},proxy:!0}])},[n("div",[t._v("Scholarship by the Studienstiftung")]),n("div",[t._v("Focus on Machine Learning and Privacy Engineering. For example, I passed Prof. Klaus-Robert Müller's Machine Learning I and II and Dr. Frank Pallas' Privacy Engineering ")]),n("div",[t._v("Current grade ca. 1,2")]),n("div",[t._v("Scholarship by the "),n("a",{attrs:{href:"https://www.studienstiftung.de/"}},[t._v("Studienstiftung (German Academic Scholarship Foundation)")])])]),n("c-v-block",{scopedSlots:t._u([{key:"block-date",fn:function(){return[t._v(" winter semester 2015/2016 - winter semester 2018/2019 ")]},proxy:!0},{key:"block-title",fn:function(){return[t._v(" BSc Informatik ")]},proxy:!0}])},[n("div",[t._v('Bachelor thesis on "Using Web Protocols to Communicate Privacy Preferences", advised by Max.-R. Ulbricht and supervised by Prof. Stefan Tai ('),n("a",{attrs:{href:"https://www.ise.tu-berlin.de/menue/information_systems_engineering/parameter/en/"}},[t._v("ISE")]),t._v(") and Prof. Axel Küpper ("),n("a",{attrs:{href:"https://www.snet.tu-berlin.de/"}},[t._v("SNET")]),t._v(") ")]),n("div",[t._v("Focus on topics of Artificial Intelligence and Information Governance, Privacy")]),n("div",[t._v("Scholarship by the "),n("a",{attrs:{href:"https://www.studienstiftung.de/"}},[t._v("Studienstiftung (German Academic Scholarship Foundation)")]),t._v(" since 2018 ")]),n("div",[t._v("Final Grade 1,4")])])],1)])},R=[],W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-v-block"},[n("div",{staticClass:"block-date"},[t._t("block-date")],2),n("div",{staticClass:"block-title"},[t._t("block-title")],2),n("div",{staticClass:"block-content"},[t._t("default")],2)])},G=[],V={name:"CVBlock"},K=V,Q=(n("d089"),Object(u["a"])(K,W,G,!1,null,"09a19bb6",null)),q=Q.exports,H={name:"study",components:{CVBlock:q}},Y=H,Z=(n("c4c5"),Object(u["a"])(Y,D,R,!1,null,"44847a41",null)),X=Z.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"imprint"},[n("h2",[t._v("Imprint")]),n("p",[t._v("Juri Otto Orson Welz")]),n("p",[t._v("Friedrichstraße 122")]),n("p",[t._v("10117 Berlin")]),t._m(0),n("button",{on:{click:function(e){return t.$router.go(-1)}}},[t._v("Go Back")])])},et=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("a",{attrs:{href:"mailto:juriwelz@gmail.com"}},[t._v("juriwelz@gmail.com")])])}],nt={name:"imprint"},rt=nt,ot=(n("9e13"),Object(u["a"])(rt,tt,et,!1,null,"24525f58",null)),it=ot.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"work"},[n("h2",[t._v("Work")]),n("article",[n("c-v-block",{scopedSlots:t._u([{key:"block-date",fn:function(){return[t._v("October 2019 - August 2020")]},proxy:!0},{key:"block-title",fn:function(){return[t._v("Student software developer at "),n("a",{attrs:{href:"https://www.arxes-tolina.de/tolina.nsf/id/Startseite_DE"}},[t._v("arxes-tolina")]),t._v(", Berlin ")]},proxy:!0}])},[n("div",[t._v("Working on a large project in the health insurance sector")]),n("div",[t._v("Full-stack (Docker, Java, postgreSQL, jOOQ, Typescript, Vue, SCSS, ElementUI)")]),n("div",[t._v("Scrum/Kanban with JIRA")])])],1),n("article",[n("c-v-block",{scopedSlots:t._u([{key:"block-date",fn:function(){return[t._v("April 2017 – September 2018")]},proxy:!0},{key:"block-title",fn:function(){return[t._v("Tutor at TU Berlin")]},proxy:!0}])},[n("div",[t._v("Two Modules, 60 students each")]),n("div",[n("a",{attrs:{href:"https://www.dima.tu-berlin.de/menue/teaching/bachelor/"}},[t._v("Information Systems & Data Analysis")]),t._v(" (SQL, noSQL, database design, database normalization, easy ML algorithms) ")]),n("div",[n("a",{attrs:{href:"https://www.snet.tu-berlin.de/menue/teaching_and_exams/winter_term_2019_2020/webtechnologien_wt2019_2020/parameter/en/"}},[t._v("Webtechnologien")]),t._v(" (JavaScript, NodeJS, HTML5, CSS3, web communication) ")])]),n("c-v-block",{scopedSlots:t._u([{key:"block-date",fn:function(){return[t._v("April 2016 – March 2017")]},proxy:!0},{key:"block-title",fn:function(){return[t._v("Office assistant at Tax Accountancy Bakalović & Mahling, Berlin")]},proxy:!0}])},[n("div",[t._v("Office assistant (copying, sorting, account assigning)")])]),n("c-v-block",{scopedSlots:t._u([{key:"block-date",fn:function(){return[t._v("July 2013 – March 2016")]},proxy:!0},{key:"block-title",fn:function(){return[t._v("Holiday worker at "),n("a",{attrs:{href:"https://sembach.com/"}},[t._v("Sembach Technical Ceramics")]),t._v(", Lauf/Pegnitz ")]},proxy:!0}])},[n("div",[t._v("first machine operation, later own project, reorganizing spare parts inventory and procurement process")])])],1)])},st=[],ct={name:"work",components:{CVBlock:q}},lt=ct,ut=(n("3b1d"),Object(u["a"])(lt,at,st,!1,null,"624f0355",null)),pt=ut.exports,ft=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},vt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"err404"},[n("h2")])}],dt={name:"err404"},mt=dt,_t=(n("913d"),Object(u["a"])(mt,ft,vt,!1,null,"08b60390",null)),bt=_t.exports;r["a"].use(S["a"]);var ht=[{path:"/",name:0,components:{top:U,bottom:""}},{path:"/study",name:2,components:{top:"",bottom:X}},{path:"/work",name:3,components:{top:"",bottom:pt}},{path:"/imprint",name:"imprint",components:{top:"",bottom:it}},{path:"/*",name:"404",components:{top:"",bottom:bt}}],yt=new S["a"]({mode:"history",base:"/",routes:ht}),wt=yt;r["a"].config.productionTip=!1,new r["a"]({template:"<App/>",components:{App:g},router:wt,render:function(t){return t(g)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"7ef7":function(t,e,n){},"7f6b":function(t,e,n){},"913d":function(t,e,n){"use strict";n("2219")},"96c0":function(t,e,n){},"9c0c":function(t,e,n){},"9e13":function(t,e,n){"use strict";n("df78")},a3a1:function(t,e,n){"use strict";n("7ef7")},c4c5:function(t,e,n){"use strict";n("0a0b")},d089:function(t,e,n){"use strict";n("eba6")},d218:function(t,e,n){},df78:function(t,e,n){},eba6:function(t,e,n){},fce4:function(t,e,n){},fd57:function(t,e,n){"use strict";n("d218")}});
//# sourceMappingURL=app.3cb2102e.js.map