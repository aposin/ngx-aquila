!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var c=e[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(n,c.key,c)}}function t(n,t,c){return t&&e(n.prototype,t),c&&e(n,c),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"08C0":function(e,c,i){"use strict";i.r(c),i.d(c,"ActionExamplesModule",(function(){return x}));var o=i("2kYt"),a=i("0FLW"),l=i("sEIs"),r=i("9FST"),s=i("EM62"),u=i("fNxJ"),f=i("VKQk"),b=i("8A7F");function m(n,e){if(1&n){var t=s.Ub();s.Tb(0,"button",1),s.ac("click",(function(){s.vc(t);var n=e.$implicit;return s.ec().onSelect(n)})),s.Ob(1,"nx-icon",2),s.Jc(2),s.Sb()}if(2&n){var c=e.$implicit,i=s.ec();s.kc("selected",c===i.selectedAction),s.Bb(1),s.kc("name",c.icon),s.Bb(1),s.Lc(" ",c.label,"\n")}}var d,p=((d=function(){function e(){n(this,e),this.actions=[{icon:"file-text",label:"All Files"},{icon:"calendar",label:"Calendar"},{icon:"mail-o",label:"Email"},{icon:"user-business-o",label:"My Profile"},{icon:"file",label:"Recent Downloads"}]}return t(e,[{key:"ngOnInit",value:function(){this.selectedAction=this.actions[1]}},{key:"onSelect",value:function(n){this.selectedAction=n}}]),e}()).\u0275fac=function(n){return new(n||d)},d.\u0275cmp=s.Hb({type:d,selectors:[["nx-action-example"]],decls:1,vars:1,consts:[["nxAction","",3,"selected","click",4,"ngFor","ngForOf"],["nxAction","",3,"selected","click"],["nxActionIcon","",3,"name"]],template:function(n,e){1&n&&s.Hc(0,m,3,3,"button",0),2&n&&s.kc("ngForOf",e.actions)},directives:[o.s,u.a,f.a,b.a],styles:[""]}),d);function y(n,e){if(1&n&&(s.Tb(0,"button",1),s.Ob(1,"nx-icon",2),s.Jc(2),s.Sb()),2&n){var t=e.$implicit;s.kc("queryParams",t.query),s.Bb(1),s.kc("name",t.icon),s.Bb(1),s.Lc(" ",t.label,"\n")}}var k,v,w=((v=function e(){n(this,e),this.actions=[{icon:"file-text",label:"All Files",query:{a:1}},{icon:"calendar",label:"Calendar",query:{a:2}},{icon:"mail-o",label:"Email",query:{a:3}},{icon:"user-business-o",label:"My Profile",query:{a:4}},{icon:"file",label:"Recent Downloads",query:{a:5}}]}).\u0275fac=function(n){return new(n||v)},v.\u0275cmp=s.Hb({type:v,selectors:[["nx-action-with-router-example"]],decls:1,vars:1,consts:[["nxAction","","routerLink","./","routerLinkActive","is-selected",3,"queryParams",4,"ngFor","ngForOf"],["nxAction","","routerLink","./","routerLinkActive","is-selected",3,"queryParams"],["nxActionIcon","",3,"name"]],template:function(n,e){1&n&&s.Hc(0,y,3,3,"button",0),2&n&&s.kc("ngForOf",e.actions)},directives:[o.s,u.a,l.f,l.g,f.a,b.a],styles:[""]}),v),x=((k=function(){function e(){n(this,e)}return t(e,null,[{key:"components",value:function(){return{action:p,"action-with-router":w}}}]),e}()).\u0275mod=s.Lb({type:k}),k.\u0275inj=s.Kb({factory:function(n){return new(n||k)},imports:[[r.a,l.i,a.c,o.c]]}),k)}}])}();