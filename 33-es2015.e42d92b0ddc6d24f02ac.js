(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"4TwE":function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var i=e("EM62");let a=(()=>{class t{}return t.\u0275mod=i.Lb({type:t}),t.\u0275inj=i.Kb({factory:function(n){return new(n||t)}}),t})();e("VqxJ")},UcN8:function(t,n,e){"use strict";e.r(n),e.d(n,"NotificationExamplesModule",(function(){return R}));var i=e("ukXx"),a=e("sEIs"),o=e("0FLW"),c=e("ZhfD"),r=e("EM62");let s=(()=>{class t{}return t.\u0275mod=r.Lb({type:t}),t.\u0275inj=r.Kb({factory:function(n){return new(n||t)},providers:[],imports:[[c.a,a.i]]}),t})();var l=e("J+dc");const b={direction:"bottom-start",fallbackOrientation:"vertical",autoFocus:!0,offset:8};let f=(()=>{class t{constructor(t,n,e){this._nxOverlay=t,this._element=n,this._triggerButton=e}set notificationPanel(t){this._panelTemplate=t}get notificationPanel(){return this._panelTemplate}open(){if(this._overlayRef)return;const t=Object.assign(Object.assign({},b),{triggerButton:this._triggerButton});this._overlayRef=this._nxOverlay.open(this._panelTemplate,this._element,t),this._overlayRef.afterClosed().pipe(Object(l.a)(1)).subscribe(()=>this.close())}close(){this._overlayRef&&(this._overlayRef.close(),this._overlayRef=null)}}return t.\u0275fac=function(n){return new(n||t)(r.Nb(c.b),r.Nb(r.l),r.Nb(c.c,10))},t.\u0275dir=r.Ib({type:t,selectors:[["","nxNotificationPanelTriggerFor",""]],hostBindings:function(t,n){1&t&&r.ac("click",(function(){return n.open()}))},inputs:{notificationPanel:["nxNotificationPanelTriggerFor","notificationPanel"]}}),t})();var u=e("sg/T"),p=e("g6G6"),h=e("5XID"),m=e("ZTXN");const d=[[["nx-notification-item-metadata"]],[["nx-notification-item-content"]],"*",[["nx-notification-item-actions"]]],x=["nx-notification-item-metadata","nx-notification-item-content","*","nx-notification-item-actions"];let g=(()=>{class t{constructor(t){this._elementRef=t,this._read=!1,this._clickable=!0,this._hasFocus=!1,this.focused=new m.a}set read(t){this._read=Object(h.b)(t)}get read(){return this._read}set clickable(t){this._clickable=Object(h.b)(t)}get clickable(){return this._clickable}focus(t){void 0!==t||this._hasFocus||(this.focused.next(this),this._hasFocus=!0),this._hasFocus||(this._elementRef.nativeElement.focus(),this._hasFocus=!0)}_blur(){this._hasFocus=!1}}return t.\u0275fac=function(n){return new(n||t)(r.Nb(r.l))},t.\u0275cmp=r.Hb({type:t,selectors:[["nx-notification-panel-item"],["","nxNotificationPanelItem",""]],hostAttrs:["tabindex","0"],hostVars:4,hostBindings:function(t,n){1&t&&r.ac("focus",(function(){return n.focus()}))("blur",(function(){return n._blur()})),2&t&&r.Fb("nx-notification-item--read",n.read)("nx-notification-item--clickable",n.clickable)},inputs:{read:"read",clickable:"clickable"},ngContentSelectors:x,decls:4,vars:0,template:function(t,n){1&t&&(r.jc(d),r.ic(0),r.ic(1,1),r.ic(2,2),r.ic(3,3))},styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;background-color:var(--notification-panel-item-unread-background-color);padding:16px 24px;margin:0 -24px}.nx-notification-item--read[_nghost-%COMP%]{background-color:var(--notification-panel-item-read-background-color)}[_nghost-%COMP%]:focus{outline:none}[data-whatinput=keyboard][_nghost-%COMP%]:focus, [data-whatinput=keyboard]   [_nghost-%COMP%]:focus{box-shadow:var(--focus-inset-box-shadow)}@media screen and (-ms-high-contrast:active){[data-whatinput=keyboard][_nghost-%COMP%]:focus, [data-whatinput=keyboard]   [_nghost-%COMP%]:focus{box-shadow:inset 0 0 0 4px windowText,inset 0 0 0 6px background}}  nx-notification-item-metadata{font-size:14px;font-weight:400;line-height:20px;letter-spacing:.2px;margin-bottom:4px;display:flex;align-items:center}  nx-notification-item-actions,   nx-notification-item-content{font-size:16px;font-weight:400;line-height:24px}  nx-notification-item-actions{display:flex;justify-content:space-between;padding-top:8px}.nx-notification-item--clickable[_nghost-%COMP%]{cursor:pointer}.nx-notification-item--clickable[_nghost-%COMP%]:hover{background-color:var(--notification-panel-item-unread-hover-background-color)}.nx-notification-item--clickable[_nghost-%COMP%]:active{background-color:var(--notification-panel-item-unread-active-background-color)}.nx-notification-item--clickable.nx-notification-item--read[_nghost-%COMP%]:hover{background-color:var(--notification-panel-item-read-hover-background-color)}.nx-notification-item--clickable.nx-notification-item--read[_nghost-%COMP%]:active{background-color:var(-notification-panel-item-read-active-background-color)}"]}),t})();const y=["*"];let k=(()=>{class t{ngAfterContentInit(){this._initKeyManager()}_initKeyManager(){this._keyManager=new u.f(this.items).withVerticalOrientation().withHorizontalOrientation("ltr"),this.items.length>0&&Object(p.a)(...this.items.map(t=>t.focused)).subscribe(t=>{this._keyManager.updateActiveItem(t)})}_handleKeydown(t){this._keyManager.onKeydown(t)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Hb({type:t,selectors:[["nx-notification-panel"]],contentQueries:function(t,n,e){var i;1&t&&r.Gb(e,g,!0),2&t&&r.qc(i=r.bc())&&(n.items=i)},viewQuery:function(t,n){var e;1&t&&r.Nc(r.N,!0),2&t&&r.qc(e=r.bc())&&(n.templateRef=e.first)},hostVars:2,hostBindings:function(t,n){1&t&&r.ac("keydown",(function(t){return n._handleKeydown(t)})),2&t&&r.Fb("nx-notification-panel",!0)},exportAs:["nxNotificationPanel"],ngContentSelectors:y,decls:1,vars:0,template:function(t,n){1&t&&(r.jc(),r.ic(0))},styles:["[_nghost-%COMP%]{padding:16px 24px;display:flex;flex-direction:column;background-color:var(--notification-panel-background-color);max-height:740px;height:100%;width:400px;overflow-y:auto;box-shadow:0 8px 24px rgba(65,65,65,.35);border-radius:8px}[_nghost-%COMP%]:focus{outline:none}  nx-notification-header{display:flex;justify-content:space-between;padding:16px 0 8px}  nx-notification-header:first-child{padding-top:0}"]}),t})(),v=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=r.Ib({type:t,selectors:[["nx-notification-item-metadata"]]}),t})(),T=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=r.Ib({type:t,selectors:[["nx-notification-item-content"]]}),t})(),w=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=r.Ib({type:t,selectors:[["nx-notification-item-actions"]]}),t})(),S=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=r.Ib({type:t,selectors:[["nx-notification-header"]]}),t})();var _=e("q+Ep"),P=e("wdC9"),O=e("VKQk"),N=e("VqxJ"),J=e("sPAl"),M=e("BHU2");function C(t,n){1&t&&(r.Tb(0,"nx-notification-panel"),r.Tb(1,"nx-notification-header"),r.Tb(2,"h3",3),r.Jc(3,"Unread "),r.Sb(),r.Tb(4,"button",4),r.Jc(5,"Mark all as read "),r.Ob(6,"nx-icon",5),r.Sb(),r.Sb(),r.Tb(7,"a",6),r.Tb(8,"nx-notification-item-metadata"),r.Ob(9,"nx-icon",7),r.Jc(10,"File lock release \xb7 16:53 "),r.Sb(),r.Tb(11,"nx-notification-item-content"),r.Tb(12,"span",8),r.Jc(13,"The file you tried to edit (XY12345) is now available."),r.Sb(),r.Sb(),r.Tb(14,"nx-notification-item-actions"),r.Tb(15,"nx-link"),r.Tb(16,"a",9),r.Jc(17,"Edit file"),r.Sb(),r.Sb(),r.Tb(18,"button",10),r.Ob(19,"nx-icon",11),r.Sb(),r.Sb(),r.Sb(),r.Tb(20,"div",6),r.Tb(21,"nx-notification-item-metadata"),r.Ob(22,"nx-icon",12),r.Jc(23,"Callback \xb7 11:35 "),r.Sb(),r.Tb(24,"nx-notification-item-content",13),r.Tb(25,"span",8),r.Jc(26,"Please call back James Erwin at 15:00"),r.Sb(),r.Tb(27,"button",14),r.Ob(28,"nx-icon",11),r.Sb(),r.Sb(),r.Sb(),r.Tb(29,"nx-notification-header"),r.Tb(30,"h3",3),r.Jc(31,"Read "),r.Sb(),r.Sb(),r.Tb(32,"div",15),r.Tb(33,"nx-notification-item-metadata"),r.Jc(34,"Offers \xb7 Yesterday "),r.Sb(),r.Tb(35,"nx-notification-item-content"),r.Tb(36,"span",8),r.Jc(37,"Mary London"),r.Sb(),r.Jc(38," - Note created "),r.Sb(),r.Sb(),r.Sb()),2&t&&(r.Bb(7),r.Cb("href",null,r.yc))}let I=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Hb({type:t,selectors:[["ng-component"]],decls:4,vars:1,consts:[["nxIconButton","small tertiary","title","Notifications",1,"nx-margin-0",3,"nxNotificationPanelTriggerFor"],["name","bell-o"],["panel1",""],["nxCopytext","large",1,"nx-margin-0","nx-font-weight-semibold"],["nxPlainButton","small","type","button"],["name","check",1,"nx-margin-left-2xs"],["nxNotificationPanelItem","","clickable","false"],["size","s","name","lock-o","aria-hidden","true",1,"nx-margin-right-2xs"],[1,"nx-font-weight-semibold"],["href","#file-link"],["nxPlainButton","small","type","button","title","Delete"],["name","trash-o","aria-hidden","true"],["size","s","name","phone-o","aria-hidden","true",1,"nx-margin-right-2xs"],[1,"inline-delete"],["nxPlainButton","small","type","button","title","Delete",1,""],["nxNotificationPanelItem","","read","","clickable","false"]],template:function(t,n){if(1&t&&(r.Tb(0,"button",0),r.Ob(1,"nx-icon",1),r.Sb(),r.Hc(2,C,39,1,"ng-template",null,2,r.Ic)),2&t){const t=r.rc(3);r.kc("nxNotificationPanelTriggerFor",t)}},directives:[P.a,f,O.a,k,S,N.a,J.a,g,v,T,w,M.a],styles:[".inline-delete[_ngcontent-%COMP%]{display:flex;justify-content:space-between}"]}),t})();function F(t,n){1&t&&(r.Tb(0,"nx-notification-panel"),r.Tb(1,"nx-notification-header"),r.Tb(2,"h3",3),r.Jc(3,"Unread "),r.Sb(),r.Tb(4,"button",4),r.Jc(5,"Mark all as read "),r.Ob(6,"nx-icon",5),r.Sb(),r.Sb(),r.Tb(7,"a",6),r.Tb(8,"nx-notification-item-metadata"),r.Jc(9,"Tasks \xb7 5 minutes ago "),r.Sb(),r.Tb(10,"nx-notification-item-content"),r.Tb(11,"span",7),r.Jc(12,"Frank Loyd"),r.Sb(),r.Jc(13," - created new offer "),r.Sb(),r.Sb(),r.Tb(14,"a",8),r.Tb(15,"nx-notification-item-metadata"),r.Jc(16,"Offers \xb7 11:45 "),r.Sb(),r.Tb(17,"nx-notification-item-content"),r.Tb(18,"span",7),r.Jc(19,"Susi M\xfcller"),r.Sb(),r.Jc(20," - Offer status has changed "),r.Sb(),r.Sb(),r.Tb(21,"nx-notification-header"),r.Tb(22,"h3",3),r.Jc(23,"Read "),r.Sb(),r.Sb(),r.Tb(24,"a",9),r.Tb(25,"nx-notification-item-metadata"),r.Jc(26,"Offers \xb7 Yesterday "),r.Sb(),r.Tb(27,"nx-notification-item-content"),r.Tb(28,"span",7),r.Jc(29,"Mary London"),r.Sb(),r.Jc(30," - Note created "),r.Sb(),r.Sb(),r.Sb())}let B=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Hb({type:t,selectors:[["ng-component"]],decls:4,vars:1,consts:[["nxIconButton","small tertiary","title","Notifications",1,"nx-margin-0",3,"nxNotificationPanelTriggerFor"],["name","bell-o"],["panel1",""],["nxCopytext","large",1,"nx-margin-0","nx-font-weight-semibold"],["nxPlainButton","small","type","button"],["name","check",1,"nx-margin-left-2xs"],["nxNotificationPanelItem","","routerLink","#clickable-notification1"],[1,"nx-font-weight-semibold"],["nxNotificationPanelItem","","routerLink","#clickable-notification2"],["nxNotificationPanelItem","","read","","routerLink","#clickable-notification3"]],template:function(t,n){if(1&t&&(r.Tb(0,"button",0),r.Ob(1,"nx-icon",1),r.Sb(),r.Hc(2,F,31,0,"ng-template",null,2,r.Ic)),2&t){const t=r.rc(3);r.kc("nxNotificationPanelTriggerFor",t)}},directives:[P.a,f,O.a,k,S,N.a,J.a,a.h,g,v,T],styles:[""]}),t})();function j(t,n){1&t&&(r.Tb(0,"nx-notification-panel"),r.Tb(1,"nx-notification-header"),r.Tb(2,"h3",3),r.Jc(3,"Unread "),r.Sb(),r.Tb(4,"button",4),r.Jc(5,"Mark all as read "),r.Ob(6,"nx-icon",5),r.Sb(),r.Sb(),r.Tb(7,"a",6),r.Tb(8,"nx-notification-item-metadata"),r.Ob(9,"nx-icon",7),r.Jc(10,"File lock release \xb7 16:53 "),r.Sb(),r.Tb(11,"nx-notification-item-content"),r.Tb(12,"span",8),r.Jc(13,"The file you tried to edit (XY12345) is now available."),r.Sb(),r.Sb(),r.Sb(),r.Tb(14,"a",9),r.Tb(15,"nx-notification-item-metadata"),r.Ob(16,"nx-icon",10),r.Jc(17,"Callback \xb7 11:35 "),r.Sb(),r.Tb(18,"nx-notification-item-content"),r.Tb(19,"span",8),r.Jc(20,"Please call back James Erwin at 15:00"),r.Sb(),r.Sb(),r.Sb(),r.Tb(21,"nx-notification-header"),r.Tb(22,"h3",3),r.Jc(23,"Read "),r.Sb(),r.Sb(),r.Tb(24,"div",11),r.Tb(25,"nx-notification-item-metadata"),r.Jc(26,"Offers \xb7 Yesterday "),r.Sb(),r.Tb(27,"nx-notification-item-content"),r.Tb(28,"span",8),r.Jc(29,"Mary London"),r.Sb(),r.Jc(30," - Note created "),r.Sb(),r.Sb(),r.Sb()),2&t&&(r.Bb(14),r.kc("routerLink",null))}let L=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Hb({type:t,selectors:[["ng-component"]],decls:4,vars:1,consts:[["nxIconButton","small tertiary","title","Notifications",1,"nx-margin-0",3,"nxNotificationPanelTriggerFor"],["name","bell-o"],["panel1",""],["nxCopytext","large",1,"nx-margin-0","nx-font-weight-semibold"],["nxPlainButton","small","type","button"],["name","check",1,"nx-margin-left-2xs"],["nxNotificationPanelItem","","routerLink","#clickable-notification1"],["size","s","name","lock-o","aria-hidden","true",1,"nx-margin-right-2xs"],[1,"nx-font-weight-semibold"],["nxNotificationPanelItem","","clickable","false",3,"routerLink"],["size","s","name","phone-o","aria-hidden","true",1,"nx-margin-right-2xs"],["nxNotificationPanelItem","","read","","routerLink","#clickable-notification3"]],template:function(t,n){if(1&t&&(r.Tb(0,"button",0),r.Ob(1,"nx-icon",1),r.Sb(),r.Hc(2,j,31,1,"ng-template",null,2,r.Ic)),2&t){const t=r.rc(3);r.kc("nxNotificationPanelTriggerFor",t)}},directives:[P.a,f,O.a,k,S,N.a,J.a,a.h,g,v,T,a.f],styles:[""]}),t})();var z=e("t3RA");let R=(()=>{class t{static components(){return{"notification-panel-actions":I,"notification-panel-clickable":B,"notification-panel-mixed":L}}}return t.\u0275mod=r.Lb({type:t}),t.\u0275inj=r.Kb({factory:function(n){return new(n||t)},imports:[[_.a,s,o.c,a.i,i.a,z.a]]}),t})()},VqxJ:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var i=e("EM62");const a=["nxCopytext",""],o=["*"];let c=(()=>{class t{constructor(){this.type="normal",this.negative=!1}set classNames(t){if(this._classNames===t)return;this._classNames=t;const[n=null]=this._classNames.match(/small|medium|normal|large/)||["normal"];this.type=n,this.negative=!!this._classNames.match(/negative/)}get classNames(){return this._classNames}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=i.Hb({type:t,selectors:[["","nxCopytext",""]],hostVars:12,hostBindings:function(t,n){2&t&&i.Fb("nx-copy",!0)("nx-copy--small","small"===n.type)("nx-copy--medium","medium"===n.type)("nx-copy--normal","normal"===n.type)("nx-copy--large","large"===n.type)("nx-copy--negative",n.negative)},inputs:{classNames:["nxCopytext","classNames"]},attrs:a,ngContentSelectors:o,decls:1,vars:0,template:function(t,n){1&t&&(i.jc(),i.ic(0))},styles:["[_nghost-%COMP%]{margin:0 0 32px;font-size:var(--paragraph-03-font-size);line-height:var(--paragraph-03-line-height);font-weight:var(--paragraph-03-font-weight);letter-spacing:var(--paragraph-03-letter-spacing)}.nx-copy.nx-copy[_nghost-%COMP%]{font-weight:400}.nx-copy--negative[_nghost-%COMP%]{color:var(--negative)}.nx-copy--small[_nghost-%COMP%]{font-size:var(--paragraph-05-font-size);line-height:var(--paragraph-05-line-height);font-weight:var(--paragraph-05-font-weight);letter-spacing:var(--paragraph-05-letter-spacing)}.nx-copy--medium[_nghost-%COMP%]{font-size:var(--paragraph-04-font-size);line-height:var(--paragraph-04-line-height);font-weight:var(--paragraph-04-font-weight);letter-spacing:var(--paragraph-04-letter-spacing)}.nx-copy--large[_nghost-%COMP%]{font-size:var(--paragraph-02-font-size);line-height:var(--paragraph-02-line-height);font-weight:var(--paragraph-02-font-weight);letter-spacing:var(--paragraph-02-letter-spacing)}"],changeDetection:0}),t})()},t3RA:function(t,n,e){"use strict";e.d(n,"a",(function(){return b}));var i=e("ohqM"),a=e("4TwE"),o=e("aln5"),c=e("kPBv"),r=e("2kYt"),s=e("nIj0"),l=e("EM62");let b=(()=>{class t{}return t.\u0275mod=l.Lb({type:t}),t.\u0275inj=l.Kb({factory:function(n){return new(n||t)},imports:[[],r.c,s.k,s.v,c.b,o.a,a.a,i.a]}),t})()}}]);