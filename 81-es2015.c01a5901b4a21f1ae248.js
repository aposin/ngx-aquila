(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{iFZ8:function(e,i,n){"use strict";n.r(i),n.d(i,"ViewportExamplesModule",(function(){return h}));var t=n("9FST"),r=n("2kYt"),s=n("sEIs"),o=n("0FLW"),c=n("MhSW"),a=n("JNA7"),b=n("EM62"),u=n("8DU3"),l=n("fNxJ"),d=n("VKQk"),p=n("8A7F");const w=["sidebar"];function f(e,i){if(1&e&&(b.Tb(0,"button",3),b.Ob(1,"nx-icon",4),b.Jc(2),b.Sb()),2&e){const e=i.$implicit;b.kc("queryParams",e.query),b.Bb(1),b.kc("name",e.icon),b.Bb(1),b.Lc(" ",e.label," ")}}let y=(()=>{class e{constructor(e){this.viewportService=e,this.actions=[{icon:"file-text",label:"All Files",query:{a:1}},{icon:"calendar",label:"Calendar",query:{a:2}},{icon:"mail-o",label:"Email",query:{a:3}},{icon:"user-business-o",label:"My Profile",query:{a:4}},{icon:"file",label:"Recent Downloads",query:{a:5}}],this.viewportServiceSubscription=this.viewportService.min(a.b.BREAKPOINT_MEDIUM).subscribe(e=>{e&&!this.sidebar.open?this.sidebar.expand():e||this.sidebar.open&&this.sidebar.close()})}ngOnDestroy(){this.viewportServiceSubscription.unsubscribe()}}return e.\u0275fac=function(i){return new(i||e)(b.Nb(a.c))},e.\u0275cmp=b.Hb({type:e,selectors:[["ng-component"]],viewQuery:function(e,i){var n;1&e&&b.Nc(w,!0),2&e&&b.qc(n=b.bc())&&(i.sidebar=n.first)},decls:6,vars:1,consts:[["resizeable","",1,"my-sidebar"],["sidebar",""],["nxAction","","routerLink","./","routerLinkActive","is-selected","type","button",3,"queryParams",4,"ngFor","ngForOf"],["nxAction","","routerLink","./","routerLinkActive","is-selected","type","button",3,"queryParams"],["nxActionIcon","",3,"name"]],template:function(e,i){1&e&&(b.Jc(0,"Change the size of the window in order to see how this side navigation is closed and expanded according to the viewport:\n"),b.Ob(1,"br"),b.Ob(2,"br"),b.Tb(3,"nx-sidebar",0,1),b.Hc(5,f,3,3,"button",2),b.Sb()),2&e&&(b.Bb(5),b.kc("ngForOf",i.actions))},directives:[u.a,r.s,l.a,s.f,s.g,d.a,p.a],styles:[""]}),e})(),h=(()=>{class e{static components(){return{"viewport-change":y}}}return e.\u0275mod=b.Lb({type:e}),e.\u0275inj=b.Kb({factory:function(i){return new(i||e)},imports:[[c.a,o.c,s.i,r.c,t.a]]}),e})()}}]);