(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"BRU/":function(n,t,e){"use strict";e.r(t),e.d(t,"ContextExamplesModule",function(){return q});var o=e("mN63"),u=e("X1V4"),c=e("2H/T"),a=e("VkLs"),b=e("ybp7"),r=e("fXoL"),i=e("iL1s"),s=e("D3YV"),l=e("mi9N"),x=e("5l4b"),m=e("+vaC");let p=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=r.Kb({type:n,selectors:[["context-menu-basic-example"]],decls:10,vars:1,consts:[["menu","nxContextMenu"],["nxContextMenuItem","","type","button"],["nxIconButton","tertiary small","aria-label","Open menu","type","button",3,"nxContextMenuTriggerFor"],["aria-hidden","true","name","ellipsis-h"]],template:function(n,t){if(1&n&&(r.Wb(0,"nx-context-menu",null,0),r.Wb(2,"button",1),r.Jc(3,"Settings"),r.Vb(),r.Wb(4,"button",1),r.Jc(5,"Download"),r.Vb(),r.Wb(6,"button",1),r.Jc(7,"Help"),r.Vb(),r.Vb(),r.Wb(8,"button",2),r.Rb(9,"nx-icon",3),r.Vb()),2&n){const n=r.uc(1);r.Eb(8),r.nc("nxContextMenuTriggerFor",n)}},directives:[i.a,s.a,l.a,x.a,m.a],styles:[""]}),n})();var d=e("Ifez"),g=e("Sne4"),V=e("qHmP"),W=e("aAjs"),C=e("ofXK"),f=e("U9ZT"),M=e("LBPA");const y=function(n){return{documents:n}};function h(n,t){if(1&n&&(r.Wb(0,"button",8),r.Rb(1,"nx-icon",9),r.Jc(2),r.Vb(),r.Wb(3,"button",8),r.Rb(4,"nx-icon",10),r.Jc(5," Bookmark "),r.Vb(),r.Wb(6,"button",8),r.Rb(7,"nx-icon",11),r.Jc(8," Edit "),r.Vb(),r.Wb(9,"button",12),r.Rb(10,"nx-icon",13),r.Jc(11," Documents "),r.Vb()),2&n){const n=t.contract;r.hc();const e=r.uc(4);r.Eb(2),r.Lc(" User: ",n.user," "),r.Eb(7),r.nc("nxContextMenuTriggerFor",e)("nxContextMenuTriggerData",r.rc(3,y,n.documents))}}function J(n,t){if(1&n&&(r.Ub(0),r.Wb(1,"button",8),r.Rb(2,"nx-icon",15),r.Jc(3),r.Vb(),r.Tb()),2&n){const n=t.$implicit;r.Eb(3),r.Lc(" ",n," ")}}function v(n,t){1&n&&r.Hc(0,J,4,1,"ng-container",14),2&n&&r.nc("ngForOf",t.documents)}const w=function(n){return{contract:n}};function T(n,t){if(1&n&&(r.Wb(0,"tr",4),r.Wb(1,"td",16),r.Jc(2),r.Vb(),r.Wb(3,"td",16),r.Wb(4,"nx-badge",17),r.Jc(5),r.Vb(),r.Vb(),r.Wb(6,"td",16),r.Wb(7,"button",18),r.Rb(8,"nx-icon",19),r.Vb(),r.Vb(),r.Vb()),2&n){const n=t.$implicit;r.hc();const e=r.uc(1);r.Eb(2),r.Kc(n.id),r.Eb(2),r.nc("type",n.status),r.Eb(1),r.Kc(n.status),r.Eb(2),r.nc("nxContextMenuTriggerFor",e)("nxContextMenuTriggerData",r.rc(5,w,n))}}let F=(()=>{class n{constructor(){this.contracts=[{id:"23412",user:"Anna Schuster",status:"active",documents:["Contract 01/04/2017"]},{id:"09090",user:"Max Pecu",status:"active",documents:["Contract 11/07/2015"]},{id:"45234",user:"Sefan Maier",status:"active",documents:["Contract 01/01/2017"]}]}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=r.Kb({type:n,selectors:[["context-menu-data-example"]],decls:16,vars:1,consts:[["menu","nxContextMenu"],["nxContextMenuContent",""],["documentsSubmenu","nxContextMenu"],["nxTable","","condensed",""],["nxTableRow",""],["nxHeaderCell",""],["nxHeaderCell","","aria-label","Context menu"],["nxTableRow","",4,"ngFor","ngForOf"],["nxContextMenuItem","","type","button"],["aria-hidden","true","name","user-o"],["aria-hidden","true","name","bookmark-o"],["aria-hidden","true","name","pen"],["nxContextMenuItem","","type","button",3,"nxContextMenuTriggerFor","nxContextMenuTriggerData"],["aria-hidden","true","name","file"],[4,"ngFor","ngForOf"],["aria-hidden","true","name","pdf"],["nxTableCell",""],[3,"type"],["nxIconButton","tertiary small","aria-label","Open menu","type","button",3,"nxContextMenuTriggerFor","nxContextMenuTriggerData"],["aria-hidden","true","name","ellipsis-h"]],template:function(n,t){1&n&&(r.Wb(0,"nx-context-menu",null,0),r.Hc(2,h,12,5,"ng-template",1),r.Vb(),r.Wb(3,"nx-context-menu",null,2),r.Hc(5,v,1,1,"ng-template",1),r.Vb(),r.Wb(6,"table",3),r.Wb(7,"thead"),r.Wb(8,"tr",4),r.Wb(9,"th",5),r.Jc(10,"Contract Id"),r.Vb(),r.Wb(11,"th",5),r.Jc(12,"Status"),r.Vb(),r.Rb(13,"th",6),r.Vb(),r.Vb(),r.Wb(14,"tbody"),r.Hc(15,T,9,7,"tr",7),r.Vb(),r.Vb()),2&n&&(r.Eb(15),r.nc("ngForOf",t.contracts))},directives:[i.a,d.a,g.a,V.a,W.a,C.p,s.a,m.a,x.a,f.a,M.a,l.a],styles:["[_nghost-%COMP%]   button[_ngcontent-%COMP%]{margin-bottom:0}td[_ngcontent-%COMP%]:last-child{text-align:right}"]}),n})(),R=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=r.Kb({type:n,selectors:[["context-menu-disabled-example"]],decls:18,vars:2,consts:[["menu","nxContextMenu"],["nxContextMenuItem","","type","button"],["nxContextMenuItem","","disabled","","type","button"],["nxContextMenuItem","","disabled","","type","button",3,"nxContextMenuTriggerFor"],["archiveSubMenu","nxContextMenu"],["nxIconButton","tertiary small","aria-label","Open menu","type","button",3,"nxContextMenuTriggerFor"],["aria-hidden","true","name","ellipsis-h"]],template:function(n,t){if(1&n&&(r.Wb(0,"nx-context-menu",null,0),r.Wb(2,"button",1),r.Jc(3,"Settings"),r.Vb(),r.Wb(4,"button",2),r.Jc(5,"Download"),r.Vb(),r.Wb(6,"button",3),r.Jc(7," Move "),r.Vb(),r.Wb(8,"button",1),r.Jc(9,"Help"),r.Vb(),r.Vb(),r.Wb(10,"nx-context-menu",null,4),r.Wb(12,"button",1),r.Jc(13,"To Folder"),r.Vb(),r.Wb(14,"button",1),r.Jc(15,"Archive"),r.Vb(),r.Vb(),r.Wb(16,"button",5),r.Rb(17,"nx-icon",6),r.Vb()),2&n){const n=r.uc(1),t=r.uc(11);r.Eb(6),r.nc("nxContextMenuTriggerFor",t),r.Eb(10),r.nc("nxContextMenuTriggerFor",n)}},directives:[i.a,s.a,x.a,l.a,m.a],styles:[""]}),n})(),I=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=r.Kb({type:n,selectors:[["context-menu-icons-example"]],decls:13,vars:1,consts:[["menu","nxContextMenu"],["nxContextMenuItem","","type","button"],["aria-hidden","true","name","setting"],["aria-hidden","true","name","download"],["aria-hidden","true","name","info-circle-o"],["nxIconButton","tertiary small","aria-label","Open menu","type","button",3,"nxContextMenuTriggerFor"],["aria-hidden","true","name","ellipsis-h"]],template:function(n,t){if(1&n&&(r.Wb(0,"nx-context-menu",null,0),r.Wb(2,"button",1),r.Rb(3,"nx-icon",2),r.Jc(4," Settings "),r.Vb(),r.Wb(5,"button",1),r.Rb(6,"nx-icon",3),r.Jc(7," Download "),r.Vb(),r.Wb(8,"button",1),r.Rb(9,"nx-icon",4),r.Jc(10," Help "),r.Vb(),r.Vb(),r.Wb(11,"button",5),r.Rb(12,"nx-icon",6),r.Vb()),2&n){const n=r.uc(1);r.Eb(11),r.nc("nxContextMenuTriggerFor",n)}},directives:[i.a,s.a,m.a,l.a,x.a],styles:[""]}),n})();function E(n,t){1&n&&(r.Wb(0,"button",4),r.Jc(1,"Settings"),r.Vb(),r.Wb(2,"button",4),r.Jc(3,"Download"),r.Vb(),r.Wb(4,"button",4),r.Jc(5,"Help"),r.Vb())}let H=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=r.Kb({type:n,selectors:[["context-menu-lazy-example"]],decls:5,vars:1,consts:[["menu","nxContextMenu"],["nxContextMenuContent",""],["nxIconButton","tertiary small","type","button","aria-label","Open menu",3,"nxContextMenuTriggerFor"],["aria-hidden","true","name","ellipsis-h"],["nxContextMenuItem","","type","button"]],template:function(n,t){if(1&n&&(r.Wb(0,"nx-context-menu",null,0),r.Hc(2,E,6,0,"ng-template",1),r.Vb(),r.Wb(3,"button",2),r.Rb(4,"nx-icon",3),r.Vb()),2&n){const n=r.uc(1);r.Eb(3),r.nc("nxContextMenuTriggerFor",n)}},directives:[i.a,d.a,l.a,x.a,m.a,s.a],styles:[""]}),n})(),O=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=r.Kb({type:n,selectors:[["context-menu-nested-example"]],decls:35,vars:4,consts:[["menu","nxContextMenu"],["nxContextMenuItem","","type","button"],["aria-hidden","true","name","setting"],["nxContextMenuItem","","type","button",3,"nxContextMenuTriggerFor"],["aria-hidden","true","name","download"],["aria-hidden","true","name","info-circle-o"],["subMenu","nxContextMenu"],["helpSubMenu","nxContextMenu"],["qualitySubMenu","nxContextMenu"],["nxIconButton","tertiary small","type","button",3,"nxContextMenuTriggerFor"],["name","ellipsis-h"]],template:function(n,t){if(1&n&&(r.Wb(0,"nx-context-menu",null,0),r.Wb(2,"button",1),r.Rb(3,"nx-icon",2),r.Jc(4," Settings "),r.Vb(),r.Wb(5,"button",3),r.Rb(6,"nx-icon",4),r.Jc(7," Download "),r.Vb(),r.Wb(8,"button",3),r.Rb(9,"nx-icon",5),r.Jc(10," Help "),r.Vb(),r.Vb(),r.Wb(11,"nx-context-menu",null,6),r.Wb(13,"button",1),r.Jc(14,"pdf"),r.Vb(),r.Wb(15,"button",3),r.Jc(16,"jpg"),r.Vb(),r.Vb(),r.Wb(17,"nx-context-menu",null,7),r.Wb(19,"button",1),r.Jc(20,"FAQ"),r.Vb(),r.Wb(21,"button",1),r.Jc(22,"Call Support"),r.Vb(),r.Vb(),r.Wb(23,"nx-context-menu",null,8),r.Wb(25,"button",1),r.Jc(26,"low quality"),r.Vb(),r.Wb(27,"button",1),r.Jc(28,"medium quality"),r.Vb(),r.Wb(29,"button",1),r.Jc(30,"high quality"),r.Vb(),r.Wb(31,"button",1),r.Jc(32,"highest quality"),r.Vb(),r.Vb(),r.Wb(33,"button",9),r.Rb(34,"nx-icon",10),r.Vb()),2&n){const n=r.uc(1),t=r.uc(12),e=r.uc(18),o=r.uc(24);r.Eb(5),r.nc("nxContextMenuTriggerFor",t),r.Eb(3),r.nc("nxContextMenuTriggerFor",e),r.Eb(7),r.nc("nxContextMenuTriggerFor",o),r.Eb(18),r.nc("nxContextMenuTriggerFor",n)}},directives:[i.a,s.a,m.a,x.a,l.a],styles:[""]}),n})();var S=e("LktG");let D=(()=>{class n{openContextMenu(n){n.preventDefault(),this.trigger.toggleContextMenu()}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=r.Kb({type:n,selectors:[["context-menu-programmatic-example"]],viewQuery:function(n,t){if(1&n&&r.Nc(a.b,1),2&n){let n;r.tc(n=r.ec())&&(t.trigger=n.first)}},hostBindings:function(n,t){1&n&&r.dc("keydown.control.p",function(n){return t.openContextMenu(n)},!1,r.wc)},decls:15,vars:1,consts:[["nxCopytext","",1,"nx-margin-bottom-xs"],["menu","nxContextMenu"],["nxContextMenuItem","","type","button"],["nxIconButton","tertiary small","aria-label","Open menu","type","button",3,"nxContextMenuTriggerFor"],["aria-hidden","true","name","ellipsis-h"]],template:function(n,t){if(1&n&&(r.Wb(0,"p",0),r.Jc(1," Press "),r.Wb(2,"code"),r.Jc(3,"control+p"),r.Vb(),r.Jc(4," to open the context menu.\n"),r.Vb(),r.Wb(5,"nx-context-menu",null,1),r.Wb(7,"button",2),r.Jc(8,"Settings"),r.Vb(),r.Wb(9,"button",2),r.Jc(10,"Download"),r.Vb(),r.Wb(11,"button",2),r.Jc(12,"Help"),r.Vb(),r.Vb(),r.Wb(13,"button",3),r.Rb(14,"nx-icon",4),r.Vb()),2&n){const n=r.uc(6);r.Eb(13),r.nc("nxContextMenuTriggerFor",n)}},directives:[S.a,i.a,s.a,l.a,x.a,m.a],styles:[""]}),n})(),B=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=r.Kb({type:n,selectors:[["context-menu-scroll-strategy-example"]],decls:10,vars:1,consts:[["menu","nxContextMenu"],["nxContextMenuItem","","type","button"],["nxIconButton","tertiary small","scrollStrategy","close","aria-label","Open menu","type","button",3,"nxContextMenuTriggerFor"],["aria-hidden","true","name","ellipsis-h"]],template:function(n,t){if(1&n&&(r.Wb(0,"nx-context-menu",null,0),r.Wb(2,"button",1),r.Jc(3,"Settings"),r.Vb(),r.Wb(4,"button",1),r.Jc(5,"Download"),r.Vb(),r.Wb(6,"button",1),r.Jc(7,"Help"),r.Vb(),r.Vb(),r.Wb(8,"button",2),r.Rb(9,"nx-icon",3),r.Vb()),2&n){const n=r.uc(1);r.Eb(8),r.nc("nxContextMenuTriggerFor",n)}},directives:[i.a,s.a,l.a,x.a,m.a],styles:[""]}),n})();var K=e("ierq"),k=e("2XWH");let P=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=r.Kb({type:n,selectors:[["context-menu-indicator-example"]],decls:18,vars:1,consts:[["menu","nxContextMenu"],["nxContextMenuItem","","type","button"],[1,"button-content"],["position","over-text with-overlap","aria-label","new notifications available'"],["position","over-text with-overlap","aria-label","1 new notification available"],["position","over-text with-overlap","aria-label","more than 99 notifications available"],["nxIconButton","tertiary small","aria-label","Open menu","type","button",3,"nxContextMenuTriggerFor"],["aria-hidden","true","name","ellipsis-h"]],template:function(n,t){if(1&n&&(r.Wb(0,"nx-context-menu",null,0),r.Wb(2,"button",1),r.Wb(3,"span",2),r.Jc(4," Settings"),r.Rb(5,"nx-indicator",3),r.Vb(),r.Vb(),r.Wb(6,"button",1),r.Wb(7,"span",2),r.Jc(8," Downloads"),r.Wb(9,"nx-indicator",4),r.Jc(10,"1"),r.Vb(),r.Vb(),r.Vb(),r.Wb(11,"button",1),r.Wb(12,"span",2),r.Jc(13," Help"),r.Wb(14,"nx-indicator",5),r.Jc(15,"99+"),r.Vb(),r.Vb(),r.Vb(),r.Vb(),r.Wb(16,"button",6),r.Rb(17,"nx-icon",7),r.Vb()),2&n){const n=r.uc(1);r.Eb(16),r.nc("nxContextMenuTriggerFor",n)}},directives:[i.a,s.a,k.a,l.a,x.a,m.a],styles:[".button-content[_ngcontent-%COMP%]{position:relative}"]}),n})(),q=(()=>{class n{static components(){return{"context-menu-basic":p,"context-menu-data":F,"context-menu-disabled":R,"context-menu-icons":I,"context-menu-lazy":H,"context-menu-nested":O,"context-menu-programmatic":D,"context-menu-scroll-strategy":B,"context-menu-indicator":P}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=r.Ob({type:n}),n.\u0275inj=r.Nb({imports:[[a.a,o.c,u.a,c.a,b.b,K.a]]}),n})()},ierq:function(n,t,e){"use strict";e.d(t,"a",function(){return s});var o=e("tgBs"),u=e("/sJ9"),c=e("eV8M"),a=e("gkbm"),b=e("ofXK"),r=e("3Pt+"),i=e("fXoL");let s=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=i.Ob({type:n}),n.\u0275inj=i.Nb({imports:[[],b.c,r.k,r.v,a.b,c.a,u.a,o.a]}),n})()}}]);