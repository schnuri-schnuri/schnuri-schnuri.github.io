(function(e){function n(n){for(var i,s,o=n[0],c=n[1],l=n[2],d=0,h=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&h.push(r[s][0]),r[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);u&&u(n);while(h.length)h.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],i=!0,o=1;o<t.length;o++){var c=t[o];0!==r[c]&&(i=!1)}i&&(a.splice(n--,1),e=s(s.s=t[0]))}return e}var i={},r={app:0},a=[];function s(n){if(i[n])return i[n].exports;var t=i[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=i,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)s.d(t,i,function(n){return e[n]}.bind(null,i));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=n,o=o.slice();for(var l=0;l<o.length;l++)n(o[l]);var u=c;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"00bf":function(e,n,t){"use strict";t("db6e")},"00dc":function(e,n,t){},"102c":function(e,n,t){"use strict";t("ab53")},2146:function(e,n,t){},"313e":function(e,n,t){},"3b1d":function(e,n,t){"use strict";t("93b4")},"3b73":function(e,n,t){},"3d40":function(e,n,t){"use strict";t("81ee")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var i=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("transition",{attrs:{name:e.topTransitionName}},[t("router-view",{staticClass:"top-router-view",attrs:{name:"top",mode:"out-in"}})],1),t("navbar"),t("transition",{attrs:{name:e.bottomTransitionName}},[t("router-view",{staticClass:"bottom-router-view",attrs:{name:"bottom",mode:"out-in"}})],1),t("page-footer")],1)},a=[],s=(t("b0c0"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("nav",{staticClass:"navbar"},[t("router-link",{attrs:{to:"/"}},[e._v("home")]),t("router-link",{attrs:{to:"/study"}},[e._v("STUDY")]),t("router-link",{attrs:{to:"/work"}},[e._v("WORK")]),t("router-link",{attrs:{to:"/skills"}},[e._v("SKILLS")]),t("router-link",{attrs:{to:"/blog"}},[e._v("blog")])],1)}),o=[],c={name:"navbar"},l=c,u=(t("3d40"),t("0c7c")),d=Object(u["a"])(l,s,o,!1,null,"d7ad30f0",null),h=d.exports,m=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("footer",[t("span",[e._v("© Juri Welz 2021.")]),t("span",[t("router-link",{attrs:{to:"imprint"}},[e._v("Imprint")])],1)])},f=[],p={name:"pageFooter"},v=p,b=(t("00bf"),Object(u["a"])(v,m,f,!1,null,"7ea6b99a",null)),g=b.exports,k={name:"app",components:{PageFooter:g,navbar:h},data:function(){return{topTransitionName:"",bottomTransitionName:""}},watch:{$route:function(e,n){if("imprint"===e.name)return this.bottomTransitionName="pop-up",void console.log("opoup");if("imprint"!==n.name){if(0===e.name)return this.topTransitionName="slide-in-from-top",void(this.bottomTransitionName="slide-out-to-bottom");0===n.name&&(this.topTransitionName="slide-out-to-top",this.bottomTransitionName="slide-in-from-bottom"),n.name<e.name?this.bottomTransitionName="slide-left":e.name<n.name&&(this.bottomTransitionName="slide-right")}else this.bottomTransitionName="pop-down"}}},_=k,w=(t("5c0b"),Object(u["a"])(_,r,a,!1,null,null,null)),y=w.exports,z=t("8c4f"),S=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"completeTitle"},[t("juriwelz"),t("subtitle")],1)},A=[],I=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},D=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("h1",{attrs:{id:"title"}},[t("span",{attrs:{id:"juri"}},[e._v("JURI")]),t("span",{attrs:{id:"ottoorson"}},[e._v("OTTO ORSON")]),t("span",{attrs:{id:"welz"}},[e._v("WELZ")])])}],x={name:"juriwelz"},T=x,E=(t("102c"),Object(u["a"])(T,I,D,!1,null,"d3d6f624",null)),N=E.exports,M=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},P=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"subtitle"}},[t("div",{attrs:{id:"actual-subtitle"}},[e._v(" MASTER STUDENT COMPUTER SCIENCE ")]),t("div",{attrs:{id:"visit-me"}},[e._v(" (visit me on "),t("a",{attrs:{href:"https://www.linkedin.com/in/juri-otto-orson-welz-753b4a138"}},[e._v("LinkedIn")]),e._v(") ")])])}],R={name:"subtitle"},j=R,O=(t("fd57"),Object(u["a"])(j,M,P,!1,null,"cdda8474",null)),C=O.exports,B={name:"completeTitle",components:{juriwelz:N,subtitle:C}},V=B,G=Object(u["a"])(V,S,A,!1,null,"3ee08b58",null),L=G.exports,F=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"study"},[t("h2",[e._v("Study")]),t("article",[t("h3",[e._v("University of Ljubljana")]),t("c-v-block",{scopedSlots:e._u([{key:"block-date",fn:function(){return[e._v("winter semester 2020/2021")]},proxy:!0},{key:"block-title",fn:function(){return[e._v("Erasmus Semester")]},proxy:!0}])},[t("div",[e._v("Bioinformatics, Computer Based Sound Production, Information Systems Security and Privacy, Slovene Language")]),t("div",[e._v("I wrote this "),t("a",{attrs:{href:"https://pitch-recognition.juriw.com"}},[e._v("voice pitch classification program")]),e._v(". The autocorrelation approach works quite well.")]),t("div",[e._v("Despite COVID restrictions an enriching experience, although I would have loved it to see the university building more than two times.")])])],1),t("article",[t("h3",[e._v("Technische Universität Berlin")]),t("c-v-block",{scopedSlots:e._u([{key:"block-date",fn:function(){return[e._v(" since winter semester 2019/2020 ")]},proxy:!0},{key:"block-title",fn:function(){return[e._v(" MSc Computer Science ")]},proxy:!0}])},[t("div",[e._v("Scholarship by the Studienstiftung")]),t("div",[e._v("Focus on Machine Learning and Privacy Engineering. For example, I passed Prof. Klaus-Robert Müller's Machine Learning I and II and Dr. Frank Pallas' Privacy Engineering ")]),t("div",[e._v("Current grade ca. 1,2")]),t("div",[e._v("Scholarship by the "),t("a",{attrs:{href:"https://www.studienstiftung.de/"}},[e._v("Studienstiftung (German Academic Scholarship Foundation)")])])]),t("c-v-block",{scopedSlots:e._u([{key:"block-date",fn:function(){return[e._v(" winter semester 2015/2016 - winter semester 2018/2019 ")]},proxy:!0},{key:"block-title",fn:function(){return[e._v(" BSc Informatik ")]},proxy:!0}])},[t("div",[e._v('Bachelor thesis on "Using Web Protocols to Communicate Privacy Preferences", advised by Max.-R. Ulbricht and supervised by Prof. Stefan Tai ('),t("a",{attrs:{href:"https://www.ise.tu-berlin.de/menue/information_systems_engineering/parameter/en/"}},[e._v("ISE")]),e._v(") and Prof. Axel Küpper ("),t("a",{attrs:{href:"https://www.snet.tu-berlin.de/"}},[e._v("SNET")]),e._v(") ")]),t("div",[e._v("Focus on topics of Artificial Intelligence and Information Governance, Privacy")]),t("div",[e._v("Scholarship by the "),t("a",{attrs:{href:"https://www.studienstiftung.de/"}},[e._v("Studienstiftung (German Academic Scholarship Foundation)")]),e._v(" since 2018 ")]),t("div",[e._v("Final Grade 1,4")])])],1)])},Z=[],$=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"c-v-block"},[t("div",{staticClass:"block-date"},[e._t("block-date")],2),t("div",{staticClass:"block-title"},[e._t("block-title")],2),t("div",{staticClass:"block-content"},[e._t("default")],2)])},K=[],W={name:"CVBlock"},J=W,U=(t("d089"),Object(u["a"])(J,$,K,!1,null,"09a19bb6",null)),H=U.exports,Q={name:"study",components:{CVBlock:H}},q=Q,Y=(t("c4c5"),Object(u["a"])(q,F,Z,!1,null,"44847a41",null)),X=Y.exports,ee=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"imprint"},[t("h2",[e._v("Imprint")]),t("p",[e._v("Juri Otto Orson Welz")]),t("p",[e._v("Friedrichstraße 122")]),t("p",[e._v("10117 Berlin")]),e._m(0),t("button",{on:{click:function(n){return e.$router.go(-1)}}},[e._v("Go Back")])])},ne=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[t("a",{attrs:{href:"mailto:juriw.website@mailbox.org"}},[e._v("juriw.website@mailbox.org")])])}],te={name:"imprint"},ie=te,re=(t("68fa"),Object(u["a"])(ie,ee,ne,!1,null,"d080b2a4",null)),ae=re.exports,se=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"work"},[t("h2",[e._v("Work")]),t("article",[t("c-v-block",{scopedSlots:e._u([{key:"block-date",fn:function(){return[e._v("October 2019 - August 2020")]},proxy:!0},{key:"block-title",fn:function(){return[e._v("Student software developer at "),t("a",{attrs:{href:"https://www.arxes-tolina.de/tolina.nsf/id/Startseite_DE"}},[e._v("arxes-tolina")]),e._v(", Berlin ")]},proxy:!0}])},[t("div",[e._v("Working on a large project in the health insurance sector")]),t("div",[e._v("Full-stack (Docker, Java, postgreSQL, jOOQ, Typescript, Vue, SCSS, ElementUI)")]),t("div",[e._v("Scrum/Kanban with JIRA")])])],1),t("article",[t("c-v-block",{scopedSlots:e._u([{key:"block-date",fn:function(){return[e._v("April 2017 – September 2018")]},proxy:!0},{key:"block-title",fn:function(){return[e._v("Tutor at TU Berlin")]},proxy:!0}])},[t("div",[e._v("Two Modules, 60 students each")]),t("div",[t("a",{attrs:{href:"https://www.dima.tu-berlin.de/menue/teaching/bachelor/"}},[e._v("Information Systems & Data Analysis")]),e._v(" (SQL, noSQL, database design, database normalization, easy ML algorithms) ")]),t("div",[t("a",{attrs:{href:"https://www.snet.tu-berlin.de/menue/teaching_and_exams/winter_term_2019_2020/webtechnologien_wt2019_2020/parameter/en/"}},[e._v("Webtechnologien")]),e._v(" (JavaScript, NodeJS, HTML5, CSS3, web communication) ")])]),t("c-v-block",{scopedSlots:e._u([{key:"block-date",fn:function(){return[e._v("April 2016 – March 2017")]},proxy:!0},{key:"block-title",fn:function(){return[e._v("Office assistant at Tax Accountancy Bakalović & Mahling, Berlin")]},proxy:!0}])},[t("div",[e._v("Office assistant (copying, sorting, account assigning)")])]),t("c-v-block",{scopedSlots:e._u([{key:"block-date",fn:function(){return[e._v("July 2013 – March 2016")]},proxy:!0},{key:"block-title",fn:function(){return[e._v("Holiday worker at "),t("a",{attrs:{href:"https://sembach.com/"}},[e._v("Sembach Technical Ceramics")]),e._v(", Lauf/Pegnitz ")]},proxy:!0}])},[t("div",[e._v("first machine operation, later own project, reorganizing spare parts inventory and procurement process")])])],1)])},oe=[],ce={name:"work",components:{CVBlock:H}},le=ce,ue=(t("3b1d"),Object(u["a"])(le,se,oe,!1,null,"624f0355",null)),de=ue.exports,he=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},me=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"err404"},[t("h2")])}],fe={name:"err404"},pe=fe,ve=(t("913d"),Object(u["a"])(pe,he,me,!1,null,"08b60390",null)),be=ve.exports,ge=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"skills"},[t("h2",[e._v("Skills")]),t("article",[t("c-v-block",{scopedSlots:e._u([{key:"block-title",fn:function(){return[e._v("Natural Languages")]},proxy:!0}])},[t("div",[e._v("German (native)")]),t("div",[e._v("English (C1, fluent)")]),t("div",[e._v("Spanish, Slovene, French (basics)")])]),t("c-v-block",{scopedSlots:e._u([{key:"block-title",fn:function(){return[e._v("Computer Languages")]},proxy:!0}])},[t("div",[e._v("Javascript")]),t("div",[e._v("Typescript")]),t("div",[e._v("Vue.js")]),t("div",[e._v("Java")]),t("div",[e._v("Python")]),t("div",[e._v("HTML")]),t("div",[e._v("CSS")]),t("div",[e._v("SQL")]),t("div",[e._v("Prolog")]),t("div",[e._v("Haskell")]),t("div",[e._v("C")]),t("div",[e._v("C#")])]),t("c-v-block",{scopedSlots:e._u([{key:"block-date",fn:function(){return[e._v("Before the pandemic")]},proxy:!0},{key:"block-title",fn:function(){return[e._v("Hobbies and Activities")]},proxy:!0}])}),t("c-v-block",{scopedSlots:e._u([{key:"block-date",fn:function(){return[e._v("Summer 2019")]},proxy:!0},{key:"block-title",fn:function(){return[e._v("Travel through Viet Nam")]},proxy:!0}])})],1)])},ke=[],_e={name:"skills",components:{CVBlock:H}},we=_e,ye=(t("9416"),Object(u["a"])(we,ge,ke,!1,null,"05997e9c",null)),ze=ye.exports,Se=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"juri-blog"},[t("h2",[e._v("Blog")]),e._m(0),t("article",[t("h3",[e._v('Kommentare zu "Alternativen Medien"')]),e._m(1),t("c-v-block",{scopedSlots:e._u([{key:"block-date",fn:function(){return[e._v("10. Dezember 2021")]},proxy:!0},{key:"block-title",fn:function(){return[e._v('Kommentar zu Paul Schreyers "Faktencheck: Sind die mRNA-Injektionen Impfungen oder Gentherapie?"')]},proxy:!0}])},[t("p",[e._v('Dieser Artikel wurde am 3. Dezember 2021 im "Multipolar Magazin" veröffentlicht. ')]),t("p",[e._v("In dem Artikel wir vorrangig die Frage untersucht, ob mRNA-Impfstoffe eine Gentherapie oder tatsächlich Impfstoffe sind. Dabei werden offizielle Dokumente, ein Bayer-Manager, und zwei weitere Menschen zitiert. ")]),t("p",[e._v("Bevor ich auf das Schriftstück zurückkomme, will ich meinen Wissensstand über Gentherapien und mRNA-Impfstoffe wiedergeben. Ich finde es hierbei wichtig, das „zentrale Dogma der Molekularbiologie“ zu betrachten. Abgewandelt bedeutet es, dass aus DNA RNA wird und aus RNA Proteine. Das Übertragen von DNA zu RNA heißt „Transkription“ und passiert beim Menschen im Zellkern. mRNA ist dabei eine Art von RNA. Das Übersetzen von RNA zu Protein heißt „Translation“ und passiert an den Ribosomen in der Zelle, außerhalb des Zellkerns. Manche Organismen und zum Beispiel Retroviren können auch die sogenannte reverse Transkription, bei der aus RNA wieder DNA wird. Normale menschliche Zellen können das nicht. ")]),t("p",[e._v("Gentherapie bezeichnet gemeinhin das Verändern („Korrigieren“) der DNA im Zellkern. Mit dieser modernen Therapieform können manche genetische Krankheiten geheilt werden. Deswegen sehe ich mRNA-Impfstoffe nicht als Gentherapie in diesem Sinn. Es wird kein Erbgut verändert, die mRNA kommt nicht mal in den Zellkern. Stattdessen besteht der Impfstoff aus mRNA-Stückchen, die in unserm Fall die Spike-Proteine (spezielle Proteine an der Hülle des Virus) von SARS-CoV-2 kodieren. Diese docken dann an die Ribosomen in der Zelle an, die Zelle produziert die Spike-Proteine. Diese gelangen ins Blut und provozieren da die Immunantwort, wie jeder andere Impfstoff auch. Die mRNA wird in der Zelle schnell abgebaut. ")]),t("p",[e._v("Letztendlich ist es egal wie man es nennt, finde ich. Die Essenz bleibt: Der Impfstoff ist sicher, Langzeitwirkungen sind nicht zu erwarten (Also ich kann mir als Laie keine Möglichkeit vorstellen, da der Impfstoff nach 2 Wochen nicht mehr im Körper ist. Ärzte kenne auch keinen Mechanismus wie Langzeitwirkungen entstehen sollten.) Vor allem findet keine Veränderung des Erbguts statt! Verglichen mit den bewiesenen Langzeitfolgen von COVID wie ein deutlich höheres Risiko für Herzmuskelentzündungen oder für ME/CFS, anhaltender Geschmacksverlust (Oder alles schmeckt nach Abwasser, gibt’s auch in Einzelfällen), ist die Impfung viel sicherer und lohnt sich auf jeden Fall. Hier sei auch erwähnt, "),t("a",{attrs:{href:"https://de.wikipedia.org/wiki/SARS-CoV-2#Replikationszyklus"}},[e._v("dass SARS-CoV-2 sich selber über die gleiche mRNA-Mechanik vermehrt")]),e._v(". ")]),t("p",[e._v("Zurück zum Text: Ich finde es gut, dass man untersucht, ob einem da nicht irgendwas anderes untergejubelt wird, als behauptet. Sachen, die mit Genen zu tun haben, sind vielen Menschen erstmal suspekt, wahrscheinlich auch, weil große Agrarkonzerne das Vertrauen in der Vergangenheit zerstört haben. Die Zitate im Text stimmen. Kann man so überprüfen, sie sind verlinkt. ")]),t("p",[e._v("Das erste Zitat ist von Stefan Oelrich, Vorstand und „Leiter der Division Pharmaceuticals“, seine Ausbildung ist ein Bachelor in Wirtschaft. Er wird richtig zitiert mit „Die mRNA-Impfungen sind ein Beispiel für Zell- und Gentherapie. Hätten wir vor zwei Jahren eine öffentliche Umfrage gemacht und gefragt, wer bereit dazu ist, eine Gen- oder Zelltherapie in Anspruch zu nehmen und sich in den Körper injizieren zu lassen, dann hätten das wahrscheinlich 95 Prozent der Menschen abgelehnt. Diese Pandemie hat vielen Menschen die Augen für Innovationen in einer Weise geöffnet, die vorher nicht möglich war.“ "),t("a",{attrs:{href:"https://www.bayer.com/de/news-stories/zell-und-gentherapie"}},[e._v("Da widerspricht ihm die Bayer-Firmenhomepage")]),e._v(": „Bei der Gentherapie kommt genetisches Material als Arzneimittel zum Einsatz, um so die Funktionsstörung des Gens zu korrigieren oder das veränderte Gen, das die Erkrankung verursacht, zu ersetzen.“ Das ist bei der mRNA-Impfung nicht der Fall. ")]),t("p",[e._v("Ich kann nur Mutmaßungen anstellen, warum er das gesagt hat. Vielleicht kennt er sich nicht aus, vor allem aber verdient Bayer kein Geld mit mRNA-Impfstoffen. Sie haben eine Partnerschaft mit CureVac, der Impfstoff ist aber gefloppt. Bayer verdient Geld mit Gentherapien. Bayer „konzentriert sich [...] auf ausgewählte Bereiche der Zell- und Gentherapien, darunter Stammzelltherapien (mit Schwerpunkt auf induzierte pluripotente Zellen oder iPSCs), Gen-Augmentation, Gen-Editing und allogene Zelltherapien in verschiedenen Indikationen” "),t("a",{attrs:{href:"https://media.bayer.de/baynews/baynews.nsf/id/Bayer-will-mit-neuer-Zell-und-Gentherapie-Plattform-Innovationen-im-Pharmabereich-beschleunigen"}},[e._v("und will da auch weiter wachsen")]),e._v(". Es liegt nahe, dass Oelrich die Popularität und die relativ breite Akzeptanz der COVID-Impfung nutzen will, um Patient*innen die Gentherapie schmackhaft zu machen. ")]),t("p",[e._v("Als nächstes wird Peter Doshi zitiert, ein Pharmazieprofessor. Ich habe das Zitat nicht geprüft, es wird schon stimmen, ich kenne Doshi auch nicht. Seine erste Aussage ist trivial: mRNA-Impfstoffe unterscheiden sich qualitativ von “Standardimpfstoffen”. Klar, wenn man “Standardimpfstoffe” als Totimpfstoffe, abgeschwächte Erreger, oder Proteine, die keine mRNA sind, definiert, dann ist ein mRNA-Impfstoff was anderes. Der Knackpunkt ist, dass es technischen Fortschritt gibt. mRNA in Zellen einschleußen konnte man das erste mal 1989, dann musste man daran natürlich recht lange forschen, damit man die Technik sicher einsetzen kann und 2018 kam das erste mRNA-Medikament auf den Markt. ")]),t("p",[e._v("Ich finde, dass das auch erklärt, warum Marriam-Webster früher mRNA nicht als Impfstoff-Technik aufgelistet hat. Es gab früher keine mRNA-Impfstoffe. Jetzt gibt es welche, das Wörterbuch passt sich an. Klar, dass hört sich erstmal gruselig an, dass das so neu scheint. Die Mechanik von mRNA ist aber sehr gut und sehr lange erforscht. Die Funktionsweise ist recht simpel und deterministisch (Ribosomen bauen exakt nach mRNA-Bauplan Proteine). ")]),t("p",[e._v("Dann fragt Doshi, was passiere, wenn wir Impfstoffe als Medikamente bezeichnen. Impfstoffe sind Medikamente, ich weiß nicht, worauf er hinauswill. Und natürlich ist das ein Impfstoff. Das Immunsystem wird durch die Impfung auf eine Exposition mit dem Erreger vorbereitet. Doshi hat natürlich recht, dass jedes Produkt kritisch betrachtet werden muss. Eine individuelle Abwägung pro Medikament ist wichtig. Ich bin der Meinung, das ist geschehen. Auch finde ich, dass eine Impfpflicht immer sorgfältig abgewogen werden muss. Aber auch das passiert. Den Impfstoff gibt es seit einem Jahr. Lange wurde eine Impfpflicht komplett ausgeschlossen. Auch jetzt wird das Thema selbst im „Mainstream“ kontrovers diskutiert. ")]),t("p",[e._v("Anschließend kommen im Text ein paar Absätze über Verordnungen und weitere juristische Texte, die verändert wurden. Diese Veränderungen sind Teil eines komplett normalem Prozess. Die Tausenden Bundesbeamten sind nicht nur für Däumchendrehen eingestellt. Hier ist klar, dass eine Verordnung an den technischen Fortschritt angepasst wurde, im Jahr 2009, als die Verwendbarkeit von mRNA auch für Impfstoffe langsam klar wurde. Das war 9 Jahre vor Zulassung des ersten mRNA-Medikaments. “Ohne diese politisch bestimmte Definitionsänderung würden die mRNA-Präparate, deren verpflichtende Anwendung aktuell geplant wird, rechtlich nicht als Impfungen [,] sondern als Gentherapeutika gelten”. Das kann sein. Letztendlich ändert die juristische Bezeichnung in einer Verordnung nichts an der Sicherheit oder dem Einsatzzweck eines Wirkstoffes. ")]),t("p",[e._v("Dann kommt ein Absatz darüber, dass die Pharmakonzerne Geld mit neuartigen Medikamenten verdienen will. Das stimmt. Das war aber in der Marktwirtschaft schon immer so. Pharmakonzerne wollen Geld verdienen, indem „‚bei verbesserter Wirksamkeit und geringeren Nebenwirkungen […] der Preis des Medikaments eine eher untergeordnete Rolle’“ spielt. Natürlich ist für die Pharmakonzerne der Profit die Motivation, bessere Medikamente herzustellen, und nicht Altruismus. Das kann man kritisieren, es ändert aber nichts an „verbesserter Wirksamkeit und geringeren Nebenwirkungen”. ")]),t("p",[e._v("Stichwort “Geld”: Der Text zitiert auch aus einem Geschäftsbericht zum Börsengang. Der Bericht sagt, dass ihre Medikamente vielleicht nicht zugelassen werden, was ein Geschäftsrisiko für ein Pharmaunternehmen ist. Aber die Impfung ist zugelassen und der Geschäftsbericht bezieht sich hier vor allem auf andere Produkte, die Biontech plant. Ich finde weder „BNT162“, noch „Comirnaty“, noch „COVID“ und auch nicht „Corona“ im Text. Das Zitat verfehlt das Thema. ")]),t("p",[e._v("Der Text schließt mit: “Die Annahme, mRNA-Präparate, wie das von Biontech, seien Impfstoffe, basiert auf einer politischen Definitionsänderung, die ohne parlamentarische Debatte und versteckt in einem 72-seitigen Änderungsantrag vor 12 Jahren beschlossen wurde”. Ich finde nicht, dass der Text dies hinreichend herleitet. Ein Impfstoff hätte ich als das definiert, was den Körper auf eine Exposition mit dem Erreger vorbereitet. Für mich ist es echt unerheblich, wie das irgendeine juristische Verordnung definiert. Und auch wenn der Text das Behauptet und ein Bayer-Manager, es ist nach allem, was ich gelesen habe, keine Gentherapie. Wer sucht, der findet, und kann sich auch auf abenteuerliche Weise herleiten, dass das gar keine Impfung ist. ")]),t("p",[e._v("Es ist momentan eine persönliche Frage, ob man sich gegen COVID impfen lassen will. Es ist eine Abwägung der Risiken der Impfung und dem Risiko, COVID ohne Impfung zu bekommen (wobei hier echt mehr schief gehen kann). Es ist eine politische Abwägung, ob die aktuelle Extremsituation es zulässt, dass man mit einem Bußgeld belegt wird, wenn man sich nicht impfen lässt. Das alles hat nichts damit zu tun, wie man die ganze Kiste nennt. Die Impfung ist sicher. Sie schützt bei den neuen Varianten nicht mehr so gut vor Ansteckung und Symptomen . Sie ist vielleicht noch nicht das Beste, was es gibt. Sie ist vielleicht nicht die letzte, die wir bekommen. Aber selbst bei Omikron soll sie vor den schwersten Verläufen schützen, das hat irgendwas mit „T-Zell-Immunität“ zu tun. Ich kann nur raten, sich impfen zu lassen, selbst wenn man es „Gentherapie“ nennt. ")])])],1)])},Ae=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("article",[t("p",[e._v("Hier werde ich zunächst auf deutsch Texte zu einigen Themen verfassen. Dieser Blog befindet sich im Aufbau.")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v('Ein Verwandter schickt mir hin und wieder Artikel aus Blogs und sonstigen "alternativen Medien" mit der Bitte um Einordnung. Meine Kommentare werde ich auch hier hochladen. Hinweise und Kommentare nehme ich gerne unter '),t("a",{attrs:{href:"mailto:juriw.website@mailbox.org"}},[e._v("juriw.website@mailbox.org")]),e._v(" an. Beleidigungen und Drohungen zeige ich an.")])}],Ie={name:"juri-blog",components:{CVBlock:H}},De=Ie,xe=(t("d541"),Object(u["a"])(De,Se,Ae,!1,null,"1e4094cf",null)),Te=xe.exports;i["a"].use(z["a"]);var Ee=[{path:"/",name:0,components:{top:L,bottom:""}},{path:"/skills",name:1,components:{top:"",bottom:ze}},{path:"/study",name:2,components:{top:"",bottom:X}},{path:"/work",name:3,components:{top:"",bottom:de}},{path:"/blog",name:4,components:{top:"",bottom:Te}},{path:"/imprint",name:"imprint",components:{top:"",bottom:ae}},{path:"/*",name:"404",components:{top:"",bottom:be}}],Ne=new z["a"]({mode:"history",base:"/",routes:Ee}),Me=Ne;i["a"].config.productionTip=!1,new i["a"]({template:"<App/>",components:{App:y},router:Me,render:function(e){return e(y)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";t("e050")},"68fa":function(e,n,t){"use strict";t("d774")},"81ee":function(e,n,t){},"913d":function(e,n,t){"use strict";t("00dc")},"93b4":function(e,n,t){},9416:function(e,n,t){"use strict";t("f98c")},ab53:function(e,n,t){},ac36:function(e,n,t){},c4c5:function(e,n,t){"use strict";t("3b73")},d089:function(e,n,t){"use strict";t("313e")},d541:function(e,n,t){"use strict";t("ac36")},d774:function(e,n,t){},db6e:function(e,n,t){},e050:function(e,n,t){},f98c:function(e,n,t){},fd57:function(e,n,t){"use strict";t("2146")}});
//# sourceMappingURL=app.05e1e571.js.map