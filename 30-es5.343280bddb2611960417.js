!function(){function n(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var e=[],o=!0,a=!1,r=void 0;try{for(var i,c=n[Symbol.iterator]();!(o=(i=c.next()).done)&&(e.push(i.value),!t||e.length!==t);o=!0);}catch(u){a=!0,r=u}finally{try{o||null==c.return||c.return()}finally{if(a)throw r}}return e}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return t(n,e);var o=Object.prototype.toString.call(n).slice(8,-1);"Object"===o&&n.constructor&&(o=n.constructor.name);if("Map"===o||"Set"===o)return Array.from(n);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return t(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=n[e];return o}function e(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function o(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}function a(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"4TwE":function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var o,r=e("EM62"),i=((o=function n(){a(this,n)}).\u0275mod=r.Lb({type:o}),o.\u0275inj=r.Kb({factory:function(n){return new(n||o)}}),o);e("VqxJ")},V7Rb:function(n,t,e){"use strict";e.r(t),e.d(t,"ContextExamplesModule",(function(){return Z}));var r,i=e("0FLW"),c=e("xEkX"),u=e("Zx8P"),b=e("tE9H"),s=e("A6sA"),l=e("EM62"),x=e("0zq8"),p=e("sPKD"),m=e("wdC9"),g=e("elzI"),f=e("VKQk"),d=((r=function n(){a(this,n)}).\u0275fac=function(n){return new(n||r)},r.\u0275cmp=l.Hb({type:r,selectors:[["ng-component"]],decls:10,vars:1,consts:[["menu","nxContextMenu"],["nxContextMenuItem","","type","button"],["nxIconButton","tertiary small","aria-label","Open menu","type","button",3,"nxContextMenuTriggerFor"],["aria-hidden","true","name","ellipsis-h"]],template:function(n,t){if(1&n&&(l.Tb(0,"nx-context-menu",null,0),l.Tb(2,"button",1),l.Jc(3,"Settings"),l.Sb(),l.Tb(4,"button",1),l.Jc(5,"Download"),l.Sb(),l.Tb(6,"button",1),l.Jc(7,"Help"),l.Sb(),l.Sb(),l.Tb(8,"button",2),l.Ob(9,"nx-icon",3),l.Sb()),2&n){var e=l.rc(1);l.Bb(8),l.kc("nxContextMenuTriggerFor",e)}},directives:[x.a,p.a,m.a,g.a,f.a],encapsulation:2}),r),h=e("M8LW"),T=e("C0uc"),y=e("1Va0"),S=e("qAhx"),C=e("2kYt"),v=e("wCUr"),M=e("m/H/"),w=function(n){return{documents:n}};function J(n,t){if(1&n&&(l.Tb(0,"button",8),l.Ob(1,"nx-icon",9),l.Jc(2),l.Sb(),l.Tb(3,"button",8),l.Ob(4,"nx-icon",10),l.Jc(5," Bookmark "),l.Sb(),l.Tb(6,"button",8),l.Ob(7,"nx-icon",11),l.Jc(8," Edit "),l.Sb(),l.Tb(9,"button",12),l.Ob(10,"nx-icon",13),l.Jc(11," Documents "),l.Sb()),2&n){var e=t.contract;l.ec();var o=l.rc(4);l.Bb(2),l.Lc(" User: ",e.user," "),l.Bb(7),l.kc("nxContextMenuTriggerFor",o)("nxContextMenuTriggerData",l.oc(3,w,e.documents))}}function O(n,t){if(1&n&&(l.Rb(0),l.Tb(1,"button",8),l.Ob(2,"nx-icon",15),l.Jc(3),l.Sb(),l.Qb()),2&n){var e=t.$implicit;l.Bb(3),l.Lc(" ",e," ")}}function F(n,t){1&n&&l.Hc(0,O,4,1,"ng-container",14),2&n&&l.kc("ngForOf",t.documents)}var k=function(n){return{contract:n}};function B(n,t){if(1&n&&(l.Tb(0,"tr",4),l.Tb(1,"td",16),l.Jc(2),l.Sb(),l.Tb(3,"td",16),l.Tb(4,"nx-badge",17),l.Jc(5),l.Sb(),l.Sb(),l.Tb(6,"td",16),l.Tb(7,"button",18),l.Ob(8,"nx-icon",19),l.Sb(),l.Sb(),l.Sb()),2&n){var e=t.$implicit;l.ec();var o=l.rc(1);l.Bb(2),l.Kc(e.id),l.Bb(2),l.kc("type",e.status),l.Bb(1),l.Kc(e.status),l.Bb(2),l.kc("nxContextMenuTriggerFor",o)("nxContextMenuTriggerData",l.oc(5,k,e))}}var I,H,P,_=((P=function n(){a(this,n),this.contracts=[{id:"23412",user:"Anna Schuster",status:"active",documents:["Contract 01/04/2017"]},{id:"09090",user:"Max Pecu",status:"active",documents:["Contract 11/07/2015"]},{id:"45234",user:"Sefan Maier",status:"active",documents:["Contract 01/01/2017"]}]}).\u0275fac=function(n){return new(n||P)},P.\u0275cmp=l.Hb({type:P,selectors:[["ng-component"]],decls:16,vars:1,consts:[["menu","nxContextMenu"],["nxContextMenuContent",""],["documentsSubmenu","nxContextMenu"],["nxTable","","condensed",""],["nxTableRow",""],["nxHeaderCell",""],["nxHeaderCell","","aria-label","Context menu"],["nxTableRow","",4,"ngFor","ngForOf"],["nxContextMenuItem","","type","button"],["aria-hidden","true","name","user-o"],["aria-hidden","true","name","bookmark-o"],["aria-hidden","true","name","pen"],["nxContextMenuItem","","type","button",3,"nxContextMenuTriggerFor","nxContextMenuTriggerData"],["aria-hidden","true","name","file"],[4,"ngFor","ngForOf"],["aria-hidden","true","name","pdf"],["nxTableCell",""],[3,"type"],["nxIconButton","tertiary small","aria-label","Open menu","type","button",3,"nxContextMenuTriggerFor","nxContextMenuTriggerData"],["aria-hidden","true","name","ellipsis-h"]],template:function(n,t){1&n&&(l.Tb(0,"nx-context-menu",null,0),l.Hc(2,J,12,5,"ng-template",1),l.Sb(),l.Tb(3,"nx-context-menu",null,2),l.Hc(5,F,1,1,"ng-template",1),l.Sb(),l.Tb(6,"table",3),l.Tb(7,"thead"),l.Tb(8,"tr",4),l.Tb(9,"th",5),l.Jc(10,"Contract Id"),l.Sb(),l.Tb(11,"th",5),l.Jc(12,"Status"),l.Sb(),l.Ob(13,"th",6),l.Sb(),l.Sb(),l.Tb(14,"tbody"),l.Hc(15,B,9,7,"tr",7),l.Sb(),l.Sb()),2&n&&(l.Bb(15),l.kc("ngForOf",t.contracts))},directives:[x.a,h.a,T.a,y.a,S.a,C.s,p.a,f.a,g.a,v.a,M.a,m.a],styles:["[_nghost-%COMP%]   button[_ngcontent-%COMP%]{margin-bottom:0}td[_ngcontent-%COMP%]:last-child{text-align:right}"]}),P),D=((H=function n(){a(this,n)}).\u0275fac=function(n){return new(n||H)},H.\u0275cmp=l.Hb({type:H,selectors:[["ng-component"]],decls:18,vars:2,consts:[["menu","nxContextMenu"],["nxContextMenuItem","","type","button"],["nxContextMenuItem","","disabled","","type","button"],["nxContextMenuItem","","disabled","","type","button",3,"nxContextMenuTriggerFor"],["archiveSubMenu","nxContextMenu"],["nxIconButton","tertiary small","aria-label","Open menu","type","button",3,"nxContextMenuTriggerFor"],["aria-hidden","true","name","ellipsis-h"]],template:function(n,t){if(1&n&&(l.Tb(0,"nx-context-menu",null,0),l.Tb(2,"button",1),l.Jc(3,"Settings"),l.Sb(),l.Tb(4,"button",2),l.Jc(5,"Download"),l.Sb(),l.Tb(6,"button",3),l.Jc(7," Move "),l.Sb(),l.Tb(8,"button",1),l.Jc(9,"Help"),l.Sb(),l.Sb(),l.Tb(10,"nx-context-menu",null,4),l.Tb(12,"button",1),l.Jc(13,"To Folder"),l.Sb(),l.Tb(14,"button",1),l.Jc(15,"Archive"),l.Sb(),l.Sb(),l.Tb(16,"button",5),l.Ob(17,"nx-icon",6),l.Sb()),2&n){var e=l.rc(1),o=l.rc(11);l.Bb(6),l.kc("nxContextMenuTriggerFor",o),l.Bb(10),l.kc("nxContextMenuTriggerFor",e)}},directives:[x.a,p.a,g.a,m.a,f.a],encapsulation:2}),H),A=((I=function n(){a(this,n)}).\u0275fac=function(n){return new(n||I)},I.\u0275cmp=l.Hb({type:I,selectors:[["ng-component"]],decls:13,vars:1,consts:[["menu","nxContextMenu"],["nxContextMenuItem","","type","button"],["aria-hidden","true","name","setting"],["aria-hidden","true","name","download"],["aria-hidden","true","name","info-circle-o"],["nxIconButton","tertiary small","aria-label","Open menu","type","button",3,"nxContextMenuTriggerFor"],["aria-hidden","true","name","ellipsis-h"]],template:function(n,t){if(1&n&&(l.Tb(0,"nx-context-menu",null,0),l.Tb(2,"button",1),l.Ob(3,"nx-icon",2),l.Jc(4," Settings "),l.Sb(),l.Tb(5,"button",1),l.Ob(6,"nx-icon",3),l.Jc(7," Download "),l.Sb(),l.Tb(8,"button",1),l.Ob(9,"nx-icon",4),l.Jc(10," Help "),l.Sb(),l.Sb(),l.Tb(11,"button",5),l.Ob(12,"nx-icon",6),l.Sb()),2&n){var e=l.rc(1);l.Bb(11),l.kc("nxContextMenuTriggerFor",e)}},directives:[x.a,p.a,f.a,m.a,g.a],encapsulation:2}),I);function q(n,t){1&n&&(l.Tb(0,"button",4),l.Jc(1,"Settings"),l.Sb(),l.Tb(2,"button",4),l.Jc(3,"Download"),l.Sb(),l.Tb(4,"button",4),l.Jc(5,"Help"),l.Sb())}var z,E,j,N,K,L,V=((E=function n(){a(this,n)}).\u0275fac=function(n){return new(n||E)},E.\u0275cmp=l.Hb({type:E,selectors:[["ng-component"]],decls:5,vars:1,consts:[["menu","nxContextMenu"],["nxContextMenuContent",""],["nxIconButton","tertiary small","type","button","aria-label","Open menu",3,"nxContextMenuTriggerFor"],["aria-hidden","true","name","ellipsis-h"],["nxContextMenuItem","","type","button"]],template:function(n,t){if(1&n&&(l.Tb(0,"nx-context-menu",null,0),l.Hc(2,q,6,0,"ng-template",1),l.Sb(),l.Tb(3,"button",2),l.Ob(4,"nx-icon",3),l.Sb()),2&n){var e=l.rc(1);l.Bb(3),l.kc("nxContextMenuTriggerFor",e)}},directives:[x.a,h.a,m.a,g.a,f.a,p.a],encapsulation:2}),E),R=((z=function n(){a(this,n)}).\u0275fac=function(n){return new(n||z)},z.\u0275cmp=l.Hb({type:z,selectors:[["ng-component"]],decls:35,vars:4,consts:[["menu","nxContextMenu"],["nxContextMenuItem","","type","button"],["aria-hidden","true","name","setting"],["nxContextMenuItem","","type","button",3,"nxContextMenuTriggerFor"],["aria-hidden","true","name","download"],["aria-hidden","true","name","info-circle-o"],["subMenu","nxContextMenu"],["helpSubMenu","nxContextMenu"],["qualitySubMenu","nxContextMenu"],["nxIconButton","tertiary small","type","button",3,"nxContextMenuTriggerFor"],["name","ellipsis-h"]],template:function(n,t){if(1&n&&(l.Tb(0,"nx-context-menu",null,0),l.Tb(2,"button",1),l.Ob(3,"nx-icon",2),l.Jc(4," Settings "),l.Sb(),l.Tb(5,"button",3),l.Ob(6,"nx-icon",4),l.Jc(7," Download "),l.Sb(),l.Tb(8,"button",3),l.Ob(9,"nx-icon",5),l.Jc(10," Help "),l.Sb(),l.Sb(),l.Tb(11,"nx-context-menu",null,6),l.Tb(13,"button",1),l.Jc(14,"pdf"),l.Sb(),l.Tb(15,"button",3),l.Jc(16,"jpg"),l.Sb(),l.Sb(),l.Tb(17,"nx-context-menu",null,7),l.Tb(19,"button",1),l.Jc(20,"FAQ"),l.Sb(),l.Tb(21,"button",1),l.Jc(22,"Call Support"),l.Sb(),l.Sb(),l.Tb(23,"nx-context-menu",null,8),l.Tb(25,"button",1),l.Jc(26,"low quality"),l.Sb(),l.Tb(27,"button",1),l.Jc(28,"medium quality"),l.Sb(),l.Tb(29,"button",1),l.Jc(30,"high quality"),l.Sb(),l.Tb(31,"button",1),l.Jc(32,"highest quality"),l.Sb(),l.Sb(),l.Tb(33,"button",9),l.Ob(34,"nx-icon",10),l.Sb()),2&n){var e=l.rc(1),o=l.rc(12),a=l.rc(18),r=l.rc(24);l.Bb(5),l.kc("nxContextMenuTriggerFor",o),l.Bb(3),l.kc("nxContextMenuTriggerFor",a),l.Bb(7),l.kc("nxContextMenuTriggerFor",r),l.Bb(18),l.kc("nxContextMenuTriggerFor",e)}},directives:[x.a,p.a,f.a,g.a,m.a],encapsulation:2}),z),Q=e("VqxJ"),U=((N=function(){function n(){a(this,n)}return o(n,[{key:"openContextMenu",value:function(n){n.preventDefault(),this.trigger.toggleContextMenu()}}]),n}()).\u0275fac=function(n){return new(n||N)},N.\u0275cmp=l.Hb({type:N,selectors:[["ng-component"]],viewQuery:function(n,t){var e;1&n&&l.Nc(b.b,!0),2&n&&l.qc(e=l.bc())&&(t.trigger=e.first)},hostBindings:function(n,t){1&n&&l.ac("keydown.control.p",(function(n){return t.openContextMenu(n)}),!1,l.tc)},decls:15,vars:1,consts:[["nxCopytext",""],["menu","nxContextMenu"],["nxContextMenuItem","","type","button"],["nxIconButton","tertiary small","aria-label","Open menu","type","button",3,"nxContextMenuTriggerFor"],["aria-hidden","true","name","ellipsis-h"]],template:function(n,t){if(1&n&&(l.Tb(0,"p",0),l.Jc(1," Press "),l.Tb(2,"code"),l.Jc(3,"control+p"),l.Sb(),l.Jc(4," to open the context menu.\n"),l.Sb(),l.Tb(5,"nx-context-menu",null,1),l.Tb(7,"button",2),l.Jc(8,"Settings"),l.Sb(),l.Tb(9,"button",2),l.Jc(10,"Download"),l.Sb(),l.Tb(11,"button",2),l.Jc(12,"Help"),l.Sb(),l.Sb(),l.Tb(13,"button",3),l.Ob(14,"nx-icon",4),l.Sb()),2&n){var e=l.rc(6);l.Bb(13),l.kc("nxContextMenuTriggerFor",e)}},directives:[Q.a,x.a,p.a,m.a,g.a,f.a],encapsulation:2}),N),W=((j=function n(){a(this,n)}).\u0275fac=function(n){return new(n||j)},j.\u0275cmp=l.Hb({type:j,selectors:[["ng-component"]],decls:10,vars:1,consts:[["menu","nxContextMenu"],["nxContextMenuItem","","type","button"],["nxIconButton","tertiary small","scrollStrategy","close","aria-label","Open menu","type","button",3,"nxContextMenuTriggerFor"],["aria-hidden","true","name","ellipsis-h"]],template:function(n,t){if(1&n&&(l.Tb(0,"nx-context-menu",null,0),l.Tb(2,"button",1),l.Jc(3,"Settings"),l.Sb(),l.Tb(4,"button",1),l.Jc(5,"Download"),l.Sb(),l.Tb(6,"button",1),l.Jc(7,"Help"),l.Sb(),l.Sb(),l.Tb(8,"button",2),l.Ob(9,"nx-icon",3),l.Sb()),2&n){var e=l.rc(1);l.Bb(8),l.kc("nxContextMenuTriggerFor",e)}},directives:[x.a,p.a,m.a,g.a,f.a],encapsulation:2}),j),$=e("t3RA"),Y=e("3z9W"),X=((L=function n(){a(this,n)}).\u0275fac=function(n){return new(n||L)},L.\u0275cmp=l.Hb({type:L,selectors:[["ng-component"]],decls:18,vars:1,consts:[["menu","nxContextMenu"],["nxContextMenuItem","","type","button"],[1,"button-content"],["aria-label","new notifications available'"],["aria-label","1 new notification available"],["aria-label","more than 99 notifications available"],["nxIconButton","tertiary small","aria-label","Open menu","type","button",3,"nxContextMenuTriggerFor"],["aria-hidden","true","name","ellipsis-h"]],template:function(n,t){if(1&n&&(l.Tb(0,"nx-context-menu",null,0),l.Tb(2,"button",1),l.Tb(3,"span",2),l.Jc(4," Settings"),l.Ob(5,"nx-indicator",3),l.Sb(),l.Sb(),l.Tb(6,"button",1),l.Tb(7,"span",2),l.Jc(8," Downloads"),l.Tb(9,"nx-indicator",4),l.Jc(10,"1"),l.Sb(),l.Sb(),l.Sb(),l.Tb(11,"button",1),l.Tb(12,"span",2),l.Jc(13," Help"),l.Tb(14,"nx-indicator",5),l.Jc(15,"99+"),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Tb(16,"button",6),l.Ob(17,"nx-icon",7),l.Sb()),2&n){var e=l.rc(1);l.Bb(16),l.kc("nxContextMenuTriggerFor",e)}},directives:[x.a,p.a,Y.a,m.a,g.a,f.a],styles:[".button-content[_ngcontent-%COMP%]{position:relative}nx-indicator[_ngcontent-%COMP%]{position:absolute}nx-indicator[_ngcontent-%COMP%]:not(:empty){top:-4px;left:calc(100% - 4px)}"]}),L),Z=((K=function(){function n(){a(this,n)}return o(n,null,[{key:"components",value:function(){return{"context-menu-basic":d,"context-menu-data":_,"context-menu-disabled":D,"context-menu-icons":A,"context-menu-lazy":V,"context-menu-nested":R,"context-menu-programmatic":U,"context-menu-scroll-strategy":W,"context-menu-indicator":X}}}]),n}()).\u0275mod=l.Lb({type:K}),K.\u0275inj=l.Kb({factory:function(n){return new(n||K)},imports:[[b.a,i.c,c.a,u.a,s.b,$.a]]}),K)},VqxJ:function(t,e,r){"use strict";r.d(e,"a",(function(){return b}));var i=r("EM62"),c=["nxCopytext",""],u=["*"],b=function(){var t=function(){function t(){a(this,t),this.type="normal",this.negative=!1}return o(t,[{key:"classNames",set:function(t){if(this._classNames!==t){this._classNames=t;var e=n(this._classNames.match(/small|medium|normal|large/)||["normal"],1)[0],o=void 0===e?null:e;this.type=o,this.negative=!!this._classNames.match(/negative/)}},get:function(){return this._classNames}}]),t}();return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=i.Hb({type:t,selectors:[["","nxCopytext",""]],hostVars:12,hostBindings:function(n,t){2&n&&i.Fb("nx-copy",!0)("nx-copy--small","small"===t.type)("nx-copy--medium","medium"===t.type)("nx-copy--normal","normal"===t.type)("nx-copy--large","large"===t.type)("nx-copy--negative",t.negative)},inputs:{classNames:["nxCopytext","classNames"]},attrs:c,ngContentSelectors:u,decls:1,vars:0,template:function(n,t){1&n&&(i.jc(),i.ic(0))},styles:["[_nghost-%COMP%]{margin:0 0 32px;font-size:var(--paragraph-03-font-size);line-height:var(--paragraph-03-line-height);font-weight:var(--paragraph-03-font-weight);letter-spacing:var(--paragraph-03-letter-spacing)}.nx-copy.nx-copy[_nghost-%COMP%]{font-weight:400}.nx-copy--negative[_nghost-%COMP%]{color:var(--negative)}.nx-copy--small[_nghost-%COMP%]{font-size:var(--paragraph-05-font-size);line-height:var(--paragraph-05-line-height);font-weight:var(--paragraph-05-font-weight);letter-spacing:var(--paragraph-05-letter-spacing)}.nx-copy--medium[_nghost-%COMP%]{font-size:var(--paragraph-04-font-size);line-height:var(--paragraph-04-line-height);font-weight:var(--paragraph-04-font-weight);letter-spacing:var(--paragraph-04-letter-spacing)}.nx-copy--large[_nghost-%COMP%]{font-size:var(--paragraph-02-font-size);line-height:var(--paragraph-02-line-height);font-weight:var(--paragraph-02-font-weight);letter-spacing:var(--paragraph-02-letter-spacing)}"],changeDetection:0}),t}()},t3RA:function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));var o=e("ohqM"),r=e("4TwE"),i=e("aln5"),c=e("kPBv"),u=e("2kYt"),b=e("nIj0"),s=e("EM62"),l=function(){var n=function n(){a(this,n)};return n.\u0275mod=s.Lb({type:n}),n.\u0275inj=s.Kb({factory:function(t){return new(t||n)},imports:[[],u.c,b.k,b.v,c.b,i.a,r.a,o.a]}),n}()}}])}();