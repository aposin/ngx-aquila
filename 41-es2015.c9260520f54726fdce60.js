(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{ierq:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var c=n("tgBs"),i=n("/sJ9"),r=n("eV8M"),o=n("gkbm"),l=n("ofXK"),a=n("3Pt+"),s=n("fXoL");let u=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Ob({type:t}),t.\u0275inj=s.Nb({imports:[[],l.c,a.k,a.v,o.b,r.a,i.a,c.a]}),t})()},niY3:function(t,e,n){"use strict";n.r(e),n.d(e,"OverlayExamplesModule",function(){return f});var c=n("WpJt"),i=n("fXoL"),r=n("LTpZ"),o=n("rDax");function l(t,e){1&t&&(i.Wb(0,"div",4),i.Jc(1," Hi there! "),i.Vb())}let a=(()=>{class t{constructor(t){this.nxOverlay=t,this.fallbacks=["top","bottom"],this.config={width:250,height:250,fallbackOrientation:"vertical",direction:"left"}}open(t){this.currentOverlay&&this.currentOverlay.close(),this.currentOverlay=this.nxOverlay.open(this.template,t,this.config)}}return t.\u0275fac=function(e){return new(e||t)(i.Qb(c.b))},t.\u0275cmp=i.Kb({type:t,selectors:[["overlay-limiting-fallbacks-example"]],viewQuery:function(t,e){if(1&t&&i.Nc(i.O,1),2&t){let t;i.tc(t=i.ec())&&(e.template=t.first)}},decls:7,vars:0,consts:[[1,"nx-margin-top-0"],["nxButton","primary","cdkOverlayOrigin","",3,"click"],["btn1","cdkOverlayOrigin"],["template",""],[2,"width","100%","height","100%"]],template:function(t,e){if(1&t){const t=i.Xb();i.Wb(0,"p",0),i.Jc(1,"The following overlay is only allowed to fallback vertically, so only top and bottom."),i.Vb(),i.Wb(2,"button",1,2),i.dc("click",function(){i.yc(t);const n=i.uc(3);return e.open(n.elementRef)}),i.Jc(4,"Open"),i.Vb(),i.Hc(5,l,2,0,"ng-template",null,3,i.Ic)}},directives:[r.a,o.b],styles:[""]}),t})();var s=n("LktG");function u(t,e){1&t&&(i.Wb(0,"div",6),i.Jc(1,"Hi there!"),i.Vb())}let b=(()=>{class t{constructor(t){this.nxOverlay=t}open(t,e){this.currentOverlay&&this.currentOverlay.close(),this.currentOverlay=this.nxOverlay.open(this.template,t,{width:150,height:200,direction:e})}}return t.\u0275fac=function(e){return new(e||t)(i.Qb(c.b))},t.\u0275cmp=i.Kb({type:t,selectors:[["overlay-positioning-example"]],viewQuery:function(t,e){if(1&t&&i.Nc(i.O,1),2&t){let t;i.tc(t=i.ec())&&(e.template=t.first)}},decls:14,vars:0,consts:[["nxButton","primary small","cdkOverlayOrigin","",3,"click"],["btn1","cdkOverlayOrigin"],["btn2","cdkOverlayOrigin"],["btn3","cdkOverlayOrigin"],["btn4","cdkOverlayOrigin"],["template",""],["nxCopytext","",1,"my-overlay-content","nx-margin-bottom-0"]],template:function(t,e){if(1&t){const t=i.Xb();i.Wb(0,"button",0,1),i.dc("click",function(){i.yc(t);const n=i.uc(1);return e.open(n.elementRef,"top")}),i.Jc(2,"Open to top"),i.Vb(),i.Wb(3,"button",0,2),i.dc("click",function(){i.yc(t);const n=i.uc(4);return e.open(n.elementRef,"bottom")}),i.Jc(5,"Open to bottom"),i.Vb(),i.Wb(6,"button",0,3),i.dc("click",function(){i.yc(t);const n=i.uc(7);return e.open(n.elementRef,"left")}),i.Jc(8,"Open to the left"),i.Vb(),i.Wb(9,"button",0,4),i.dc("click",function(){i.yc(t);const n=i.uc(10);return e.open(n.elementRef,"right")}),i.Jc(11,"Open to the right"),i.Vb(),i.Hc(12,u,2,0,"ng-template",null,5,i.Ic)}},directives:[r.a,o.b,s.a],styles:["button[_ngcontent-%COMP%] + button[_ngcontent-%COMP%]{margin-left:16px}.my-overlay-content[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;align-items:center;justify-content:center}"]}),t})();var p=n("ierq");let f=(()=>{class t{static components(){return{"overlay-limiting-fallbacks":a,"overlay-positioning":b}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Ob({type:t}),t.\u0275inj=i.Nb({imports:[[c.a,p.a]]}),t})()}}]);