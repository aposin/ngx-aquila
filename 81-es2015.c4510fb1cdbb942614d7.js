(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{rhXF:function(e,n,t){"use strict";t.r(n),t.d(n,"TreeExamplesModule",function(){return D});var o=t("ofXK"),i=t("tyNb"),a=t("XM0H"),c=t("mN63"),r=t("tZT5"),l=t("fXoL"),b=t("xb55"),d=t("TV94"),s=t("uRTS"),u=t("QYj6"),p=t("+vaC"),f=t("68Ek"),x=t("EjbI");function m(e,n){if(1&e&&l.Qb(0,"nx-icon",6),2&e){const e=l.gc().$implicit;l.mc("name",e.icon)}}function h(e,n){if(1&e&&(l.Vb(0,"nx-tree-node"),l.Vb(1,"button",4),l.Hc(2,m,1,1,"nx-icon",5),l.Jc(3),l.Ub(),l.Ub()),2&e){const e=n.$implicit;l.Db(1),l.nc("title",e.label),l.mc("queryParams",e.query),l.Db(1),l.mc("ngIf",e.icon),l.Db(1),l.Lc(" ",e.label," ")}}function y(e,n){if(1&e&&l.Qb(0,"nx-icon",6),2&e){const e=l.gc().$implicit;l.mc("name",e.icon)}}function O(e,n){if(1&e&&(l.Vb(0,"nx-tree-node"),l.Vb(1,"button",7),l.Hc(2,y,1,1,"nx-icon",5),l.Jc(3),l.Ub(),l.Ub()),2&e){const e=n.$implicit,t=l.gc();l.Db(1),l.nc("title",e.label),l.mc("expanded",t._treeControl.isExpanded(e)),l.Db(1),l.mc("ngIf",e.icon),l.Db(1),l.Lc(" ",e.label," ")}}let g=(()=>{class e{constructor(){this.navigationData=[{label:"Option 1",icon:"user-o",children:[{label:"Option 1.1",query:{a:"1.1"}},{label:"Option 1.2",children:[{label:"Option 1.2.1",query:{a:"1.2.1"}},{label:"Option 1.2.2",query:{a:"1.2.2"}},{label:"Option 1.2.3",children:[{label:"Option 1.2.3.1",children:[{label:"Option 1.2.3.1.1",query:{a:"1.2.3.1.1"}}]}]}]},{label:"Option 1.3",query:{a:"1.3"}}]},{label:"Option 2",icon:"file",children:[{label:"Option 2.1",query:{a:"2.1"}},{label:"Option 2.2",query:{a:"2.2"}},{label:"Option 2.3",query:{a:"2.3"}}]},{label:"Option 3",icon:"file",query:{a:"3"}}],this._hasChild=(e,n)=>n.expandable,this._treeControl=new r.a,this._dataSource=new r.b(this._treeControl,this.navigationData)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=l.Jb({type:e,selectors:[["tree-example"]],decls:4,vars:3,consts:[[1,"container"],[3,"dataSource","treeControl"],[4,"nxTreeNodeDef"],[4,"nxTreeNodeDef","nxTreeNodeDefWhen"],["nxAction","","nxTreeNodePadding","","nxTreeNodePaddingOffset","40","routerLinkActive","is-selected","routerLink","./","type","button",3,"queryParams","title"],["nxActionIcon","",3,"name",4,"ngIf"],["nxActionIcon","",3,"name"],["nxAction","","nxTreeNodeToggle","","nxTreeNodePadding","","nxTreeNodePaddingOffset","40","expandable","","type","button",3,"expanded","title"]],template:function(e,n){1&e&&(l.Vb(0,"div",0),l.Vb(1,"nx-tree",1),l.Hc(2,h,4,4,"nx-tree-node",2),l.Hc(3,O,4,4,"nx-tree-node",3),l.Ub(),l.Ub()),2&e&&(l.Db(1),l.mc("dataSource",n._dataSource)("treeControl",n._treeControl),l.Db(2),l.mc("nxTreeNodeDefWhen",n._hasChild))},directives:[b.a,d.b,d.a,s.a,u.a,i.g,i.f,o.q,p.a,f.a,x.a],styles:[""]}),e})(),D=(()=>{class e{static components(){return{tree:g}}}return e.\u0275mod=l.Nb({type:e}),e.\u0275inj=l.Mb({factory:function(n){return new(n||e)},imports:[[r.c,c.c,a.a,i.i,o.c]]}),e})()}}]);