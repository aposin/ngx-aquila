(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{Cbtz:function(t,e,n){"use strict";n.r(e),n.d(e,"TaglistExamplesModule",function(){return K});var s=n("AqTC"),a=n("mN63"),i=n("ofXK"),o=n("fXoL");let r=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Ob({type:t}),t.\u0275inj=o.Nb({imports:[[i.c,a.c]]}),t})();var l=n("8LU1"),c=n("3Pt+"),g=n("FtGj"),u=n("u47x"),b=n("+vaC");function d(t,e){if(1&t){const t=o.Xb();o.Wb(0,"span",1),o.dc("click",function(e){return o.yc(t),o.hc().removeClickHandler(e)}),o.Rb(1,"nx-icon",2),o.Vb()}}let h=(()=>{class t{constructor(t,e,n){this._changeDetectorRef=t,this._elementRef=e,this._focusMonitor=n,this._tabindex=-1,this.clicked=new o.o,this.removed=new o.o,this._focusMonitor.monitor(this._elementRef)}set removable(t){this._removable=Object(l.b)(t),this._changeDetectorRef.markForCheck()}get removable(){return this._removable}set tabindex(t){this._tabindex=Object(l.e)(t),this._changeDetectorRef.markForCheck()}get tabindex(){return this.removable?0:this._tabindex}set value(t){this._value!==t&&(this._value=t,this._changeDetectorRef.markForCheck())}get value(){return this._value}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}removeClickHandler(t){t.stopPropagation(),this.removed.emit(this.value)}removeKeyHandler(t){!this.removable||t.keyCode!==g.c&&t.keyCode!==g.b||(t.preventDefault(),t.stopPropagation(),this.removed.emit(this.value)),t.keyCode===g.f&&this.clicked.emit(this.value)}tagClickHandler(){this.clicked.emit(this.value)}}return t.\u0275fac=function(e){return new(e||t)(o.Qb(o.h),o.Qb(o.l),o.Qb(u.g))},t.\u0275cmp=o.Kb({type:t,selectors:[["nx-tag"]],hostVars:1,hostBindings:function(t,e){1&t&&o.dc("click",function(){return e.tagClickHandler()})("keydown",function(t){return e.removeKeyHandler(t)}),2&t&&o.Fb("tabindex",e.tabindex)},inputs:{removable:"removable",tabindex:"tabindex",value:"value"},outputs:{clicked:"clicked",removed:"removed"},decls:2,vars:2,consts:[["role","link","aria-label","close","class","nx-tag__close",3,"click",4,"ngIf"],["role","link","aria-label","close",1,"nx-tag__close",3,"click"],["name","close",1,"nx-tag__close-icon"]],template:function(t,e){1&t&&(o.Jc(0),o.Hc(1,d,2,0,"span",0)),2&t&&(o.Lc("",e.value,"\n"),o.Eb(1),o.nc("ngIf",e.removable))},directives:[i.q,b.a],styles:["[_nghost-%COMP%]{font-size:var(--taglist-font-size);line-height:var(--taglist-line-height);font-weight:var(--taglist-font-weight);letter-spacing:var(--taglist-letter-spacing);height:auto;max-width:100%;color:var(--taglist-color);background-color:var(--taglist-background-color);padding:6px 14px;display:flex;align-items:center;border:2px solid var(--taglist-border-color);border-radius:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:background-color .2s ease,box-shadow .2s ease;cursor:pointer}[_nghost-%COMP%]:hover{border-color:var(--taglist-hover-border-color);color:var(--taglist-hover-color);background-color:var(--taglist-hover-background-color)}[_nghost-%COMP%]:focus{outline:2px solid transparent}.cdk-keyboard-focused[_nghost-%COMP%]{box-shadow:var(--focus-box-shadow)}@media screen and (-ms-high-contrast:active){.cdk-keyboard-focused[_nghost-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}.nx-tag__close-icon[_ngcontent-%COMP%]{outline:none;display:block;font-size:var(--taglist-close-icon-size)}.nx-tag__close[_ngcontent-%COMP%]{margin-left:8px}[dir=rtl][_nghost-%COMP%]   .nx-tag__close[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-tag__close[_ngcontent-%COMP%]{margin-right:8px;margin-left:0}.nx-taglist--keyword[_nghost-%COMP%], .nx-taglist--keyword   [_nghost-%COMP%]{padding:14px 22px}@media screen and (-ms-high-contrast:active){[_nghost-%COMP%], [_nghost-%COMP%]:focus, [_nghost-%COMP%]:hover{color:buttonText;background-color:buttonFace;border-color:buttonText;-ms-high-contrast-adjust:none}}"],changeDetection:0}),t})();function m(t,e){if(1&t){const t=o.Xb();o.Wb(0,"li",4),o.Wb(1,"nx-tag",5),o.dc("clicked",function(n){o.yc(t);const s=e.index;return o.hc(2).tagClick(s,n)})("removed",function(n){o.yc(t);const s=e.index;return o.hc(2).delete(s,n)}),o.Vb(),o.Vb()}if(2&t){const t=e.$implicit,n=o.hc(2);o.Eb(1),o.nc("value",n.renderTag(t))("removable",n.allowTagDeletion)("tabindex",n.tabindex)}}function p(t,e){if(1&t&&(o.Wb(0,"ul",2),o.Hc(1,m,2,3,"li",3),o.Vb()),2&t){const t=o.hc();o.Eb(1),o.nc("ngForOf",t.tags)}}function x(t,e){1&t&&o.lc(0,0,["*ngIf","tags.length < 1"])}const f=["*"];let v=(()=>{class t{constructor(t){this._changeDetectorRef=t,this.tagsChange=new o.o,this.tagClickEvent=new o.o,this._tags=[],this._tabindex=-1,this._allowTagDeletion=!0,this._isKeywordList=!1,this._labelProperty="nxTaglistLabel",this._valueFormatterFn=t=>t,this._onChange=()=>{},this._onTouched=()=>{}}set tags(t){this._tags=t,this._changeDetectorRef.markForCheck()}get tags(){return this._tags}set tabindex(t){this._tabindex=Object(l.e)(t),this._changeDetectorRef.markForCheck()}get tabindex(){return this.allowTagDeletion?0:this._tabindex}set allowTagDeletion(t){this._allowTagDeletion=Object(l.b)(t),this._changeDetectorRef.markForCheck()}get allowTagDeletion(){return this._allowTagDeletion}set isKeywordList(t){this._isKeywordList=Object(l.b)(t),this._changeDetectorRef.markForCheck()}get isKeywordList(){return this._isKeywordList}set labelProp(t){this._labelProperty!==t&&(this._labelProperty=t,this._changeDetectorRef.markForCheck())}get labelProp(){return this._labelProperty}set labelledby(t){this._ariaLabelledBy!==t&&(this._ariaLabelledBy=t,this._changeDetectorRef.markForCheck())}get labelledby(){return this._ariaLabelledBy}set valueFormatter(t){this._valueFormatterFn=t,this._changeDetectorRef.markForCheck()}get valueFormatter(){return this._valueFormatterFn}delete(t,e){this.allowTagDeletion&&(this.tags=[...this.tags.slice(0,t),...this.tags.slice(t+1)],this.tagChildren.toArray()[t+1]&&this.tagChildren.toArray()[t+1].nativeElement.focus(),this._onChange(this.tags),this.tagsChange.emit(this.tags))}addTag(t){t&&("string"==typeof t&&-1===this.tags.indexOf(t)||t[this.labelProp]&&this.tags.filter(e=>e[this.labelProp]===t[this.labelProp]).length<1)&&(this.tags=[...this.tags,t],this._onChange(this.tags),this.tagsChange.emit(this.tags))}clearTags(){this.tags=[],this._onChange(this.tags),this.tagsChange.emit(this.tags)}writeValue(t){this.tags=t}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}renderTag(t){return this.valueFormatter("string"==typeof t?t:t[this.labelProp])}tagClick(t,e){this.tagClickEvent.emit(this.tags[t])}}return t.\u0275fac=function(e){return new(e||t)(o.Qb(o.h))},t.\u0275cmp=o.Kb({type:t,selectors:[["nx-taglist"]],viewQuery:function(t,e){if(1&t&&o.Nc(h,1,o.l),2&t){let t;o.tc(t=o.ec())&&(e.tagChildren=t)}},hostVars:4,hostBindings:function(t,e){2&t&&(o.Fb("aria-labelledby",e.labelledby||null)("tabindex",-1),o.Ib("nx-taglist--keyword",e.isKeywordList))},inputs:{tags:["nxTags","tags"],tabindex:"tabindex",allowTagDeletion:["nxAllowTagDeletion","allowTagDeletion"],isKeywordList:["nxIsKeywordList","isKeywordList"],labelProp:["nxLabelProperty","labelProp"],labelledby:["aria-labelledby","labelledby"],valueFormatter:["nxValueFormatter","valueFormatter"]},outputs:{tagsChange:"nxTagsChange",tagClickEvent:"nxTagClick"},features:[o.Db([{provide:c.n,useExisting:Object(o.W)(()=>t),multi:!0}])],ngContentSelectors:f,decls:2,vars:2,consts:[["class","nx-taglist",4,"ngIf"],[4,"ngIf"],[1,"nx-taglist"],["class","nx-taglist__list-item","tabindex","-1",4,"ngFor","ngForOf"],["tabindex","-1",1,"nx-taglist__list-item"],[3,"value","removable","tabindex","clicked","removed"]],template:function(t,e){1&t&&(o.mc(),o.Hc(0,p,2,1,"ul",0),o.Hc(1,x,1,0,"ng-content",1)),2&t&&(o.nc("ngIf",e.tags.length>0),o.Eb(1),o.nc("ngIf",e.tags.length<1))},directives:[i.q,i.p,h],styles:["[_nghost-%COMP%]{position:relative;min-height:32px;display:flex;justify-content:space-between}[_nghost-%COMP%]:focus{outline:none}.nx-taglist[_ngcontent-%COMP%], .nx-taglist__list-item[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.nx-taglist__list-item[_ngcontent-%COMP%]{list-style:none;margin-right:12px;margin-bottom:12px}[dir=rtl][_nghost-%COMP%]   .nx-taglist__list-item[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-taglist__list-item[_ngcontent-%COMP%]{margin-right:0;margin-left:12px}@media (max-width:703px){.nx-taglist--keyword[_ngcontent-%COMP%]{justify-content:center}}"],changeDetection:0}),t})(),y=(()=>{class t{constructor(){this.tags=["Apples","Oranges","Bananas","Strawberries","Melons","Lemons"]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Kb({type:t,selectors:[["taglist-example"]],decls:1,vars:2,consts:[[3,"nxTags","nxAllowTagDeletion"]],template:function(t,e){1&t&&o.Rb(0,"nx-taglist",0),2&t&&o.nc("nxTags",e.tags)("nxAllowTagDeletion",!1)},directives:[v],styles:[""]}),t})(),_=(()=>{class t{constructor(){this.tags=["Apples","Oranges","Bananas","Strawberries","Melons","Lemons"]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Kb({type:t,selectors:[["taglist-a11y-example"]],decls:3,vars:2,consts:[["id","fruit-headline"],["aria-labelledby","fruit-headline",3,"nxTags","nxAllowTagDeletion"]],template:function(t,e){1&t&&(o.Wb(0,"h5",0),o.Jc(1,"Some fruit:"),o.Vb(),o.Rb(2,"nx-taglist",1)),2&t&&(o.Eb(2),o.nc("nxTags",e.tags)("nxAllowTagDeletion",!1))},directives:[v],styles:[""]}),t})();var w=n("HXSb"),k=n("nK+a"),C=n("VamS"),T=n("LTpZ");let M=(()=>{class t{constructor(){this.tags=["Apples","Oranges","Bananas","Strawberries","Melons","Lemons"]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Kb({type:t,selectors:[["taglist-basic-example"]],decls:14,vars:2,consts:[[3,"nxTags","nxTagsChange"],["taglistBasic",""],["nxLabel","Please provide a tag"],["nxInput",""],["addTagInput",""],["nxFormfieldHint",""],["nxButton","primary small","type","button",1,"nx-margin-right-2xs","nx-margin-bottom-s",3,"click"],["nxButton","secondary small","type","button",1,"nx-margin-bottom-s",3,"click"]],template:function(t,e){if(1&t){const t=o.Xb();o.Wb(0,"nx-taglist",0,1),o.dc("nxTagsChange",function(t){return e.tags=t}),o.Jc(2,"Sorry, you don't have any fruit."),o.Vb(),o.Wb(3,"nx-formfield",2),o.Rb(4,"input",3,4),o.Wb(6,"span",5),o.Jc(7," Note that the tag list will just ignore empty tag values. "),o.Vb(),o.Vb(),o.Wb(8,"button",6),o.dc("click",function(){o.yc(t);const e=o.uc(5);return o.uc(1).addTag(e.value)}),o.Jc(9,"Add tag"),o.Vb(),o.Wb(10,"button",7),o.dc("click",function(){return o.yc(t),o.uc(1).clearTags()}),o.Jc(11,"Clear tags"),o.Vb(),o.Rb(12,"br"),o.Jc(13)}2&t&&(o.nc("nxTags",e.tags),o.Eb(13),o.Lc("\nCurrent Value: ",e.tags,"\n"))},directives:[v,w.b,k.b,C.a,T.a],styles:[""]}),t})(),O=(()=>{class t{constructor(){this.tags=["Apples","Oranges","Bananas","Strawberries","Melons","Lemons"]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Kb({type:t,selectors:[["taglist-delete-example"]],decls:1,vars:2,consts:[[3,"nxTags","nxAllowTagDeletion"]],template:function(t,e){1&t&&o.Rb(0,"nx-taglist",0),2&t&&o.nc("nxTags",e.tags)("nxAllowTagDeletion",!0)},directives:[v],styles:[""]}),t})(),P=(()=>{class t{constructor(){this.tags=["Apples","Oranges","Bananas","Strawberries","Melons","Lemons"]}myFormatter(t){return"my "+t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Kb({type:t,selectors:[["taglist-formatter-example"]],decls:1,vars:3,consts:[[3,"nxTags","nxValueFormatter","nxAllowTagDeletion"]],template:function(t,e){1&t&&o.Rb(0,"nx-taglist",0),2&t&&o.nc("nxTags",e.tags)("nxValueFormatter",e.myFormatter)("nxAllowTagDeletion",!1)},directives:[v],styles:[""]}),t})(),F=(()=>{class t{constructor(){this.tags=["Apples","Oranges","Bananas","Strawberries","Melons","Lemons"]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Kb({type:t,selectors:[["taglist-keyword-example"]],decls:1,vars:3,consts:[[3,"nxTags","nxAllowTagDeletion","nxIsKeywordList"]],template:function(t,e){1&t&&o.Rb(0,"nx-taglist",0),2&t&&o.nc("nxTags",e.tags)("nxAllowTagDeletion",!1)("nxIsKeywordList",!0)},directives:[v],styles:[""]}),t})(),V=(()=>{class t{constructor(){this.tags=[{nxTaglistLabel:"Apples"},{nxTaglistLabel:"Oranges"},{nxTaglistLabel:"asd"}]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Kb({type:t,selectors:[["taglist-objects-example"]],decls:15,vars:4,consts:[[3,"nxTags","nxTagsChange"],["taglistObjects",""],["nxLabel","Please provide a tag"],["nxInput",""],["addTagInputObjects",""],["nxFormfieldHint",""],["nxButton","primary small","type","button",1,"nx-margin-right-2xs","nx-margin-bottom-s",3,"click"],["nxButton","secondary small","type","button",1,"nx-margin-bottom-s",3,"click"]],template:function(t,e){if(1&t){const t=o.Xb();o.Wb(0,"nx-taglist",0,1),o.dc("nxTagsChange",function(t){return e.tags=t}),o.Jc(2,"Sorry, you don't have any fruit."),o.Vb(),o.Wb(3,"nx-formfield",2),o.Rb(4,"input",3,4),o.Wb(6,"span",5),o.Jc(7," Note that the tag list will just ignore empty tag values. "),o.Vb(),o.Vb(),o.Wb(8,"button",6),o.dc("click",function(){o.yc(t);const e=o.uc(5);return o.uc(1).addTag({nxTaglistLabel:e.value})}),o.Jc(9,"Add tag"),o.Vb(),o.Wb(10,"button",7),o.dc("click",function(){return o.yc(t),o.uc(1).clearTags()}),o.Jc(11,"Clear tags"),o.Vb(),o.Rb(12,"br"),o.Jc(13),o.ic(14,"json")}2&t&&(o.nc("nxTags",e.tags),o.Eb(13),o.Lc("\nCurrent Value: ",o.jc(14,2,e.tags),"\n"))},directives:[v,w.b,k.b,C.a,T.a],pipes:[i.h],styles:[""]}),t})();function L(t,e){if(1&t&&(o.Wb(0,"pre"),o.Jc(1),o.Vb()),2&t){const t=o.hc();o.Eb(1),o.Kc(t.logMessage)}}let D=(()=>{class t{constructor(){this.tags=["Apples","Oranges"],this.messages=[]}log(t){this.messages.push(t),this.logMessage=this.messages.join("\n")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Kb({type:t,selectors:[["taglist-output-example"]],decls:2,vars:3,consts:[["tabindex","0",3,"nxTags","nxAllowTagDeletion","nxTagClick"],[4,"ngIf"]],template:function(t,e){1&t&&(o.Wb(0,"nx-taglist",0),o.dc("nxTagClick",function(t){return e.log(t)}),o.Vb(),o.Hc(1,L,2,1,"pre",1)),2&t&&(o.nc("nxTags",e.tags)("nxAllowTagDeletion",!1),o.Eb(1),o.nc("ngIf",e.logMessage))},directives:[v,i.q],styles:[""]}),t})(),R=(()=>{class t{constructor(t){this.fb=t,this.createForm()}createForm(){this.testForm=this.fb.group({tagsTestReactive:[["Apples","Oranges"],c.y.required]})}}return t.\u0275fac=function(e){return new(e||t)(o.Qb(c.d))},t.\u0275cmp=o.Kb({type:t,selectors:[["taglist-reactive-example"]],decls:20,vars:7,consts:[["name","reactiveTest",3,"formGroup"],["formControlName","tagsTestReactive"],["taglistReactive",""],["nxLabel","Please provide a tag"],["nxInput",""],["addTagInputReactive",""],["nxFormfieldHint",""],["nxButton","primary small","type","button",1,"nx-margin-right-2xs",3,"click"],["nxButton","secondary small","type","button",3,"click"]],template:function(t,e){if(1&t){const t=o.Xb();o.Wb(0,"form",0),o.Wb(1,"nx-taglist",1,2),o.Jc(3,"Sorry, you don't have any fruit."),o.Vb(),o.Wb(4,"nx-formfield",3),o.Rb(5,"input",4,5),o.Wb(7,"span",6),o.Jc(8," Note that the tag list will just ignore empty tag values. "),o.Vb(),o.Vb(),o.Vb(),o.Wb(9,"button",7),o.dc("click",function(){o.yc(t);const e=o.uc(6);return o.uc(2).addTag(e.value)}),o.Jc(10,"Add tag"),o.Vb(),o.Wb(11,"button",8),o.dc("click",function(){return o.yc(t),o.uc(2).clearTags()}),o.Jc(12,"Clear tags"),o.Vb(),o.Rb(13,"br"),o.Wb(14,"p"),o.Jc(15),o.ic(16,"json"),o.Vb(),o.Wb(17,"p"),o.Jc(18),o.ic(19,"json"),o.Vb()}2&t&&(o.nc("formGroup",e.testForm),o.Eb(15),o.Lc("Form value: ",o.jc(16,3,e.testForm.value),""),o.Eb(3),o.Lc("Form status: ",o.jc(19,5,e.testForm.status),""))},directives:[c.z,c.q,c.i,v,c.p,c.g,w.b,k.b,C.a,T.a],pipes:[i.h],styles:[""]}),t})(),W=(()=>{class t{constructor(){this.templateModel=["Apples","Oranges","Bananas","Strawberries","Melons","Lemons"]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Kb({type:t,selectors:[["taglist-templatedriven-example"]],decls:15,vars:2,consts:[["name","taglistNgModel",3,"ngModel","ngModelChange"],["taglistNgModel",""],["nxLabel","Please provide a tag"],["nxInput",""],["addTagInputNgModel",""],["nxFormfieldHint",""],["nxButton","primary small","type","button",1,"nx-margin-right-2xs","nx-margin-bottom-s",3,"click"],["nxButton","secondary small","type","button",1,"nx-margin-bottom-s",3,"click"]],template:function(t,e){if(1&t){const t=o.Xb();o.Wb(0,"form"),o.Wb(1,"nx-taglist",0,1),o.dc("ngModelChange",function(t){return e.templateModel=t}),o.Jc(3," Sorry, you don't have any fruit. "),o.Vb(),o.Wb(4,"nx-formfield",2),o.Rb(5,"input",3,4),o.Wb(7,"span",5),o.Jc(8," Note that the tag list will just ignore empty tag values. "),o.Vb(),o.Vb(),o.Vb(),o.Wb(9,"button",6),o.dc("click",function(){o.yc(t);const e=o.uc(6);return o.uc(2).addTag(e.value)}),o.Jc(10,"Add tag"),o.Vb(),o.Wb(11,"button",7),o.dc("click",function(){return o.yc(t),o.uc(2).clearTags()}),o.Jc(12,"Clear tags"),o.Vb(),o.Rb(13,"br"),o.Jc(14)}2&t&&(o.Eb(1),o.nc("ngModel",e.templateModel),o.Eb(13),o.Lc("\nCurrent Value: ",e.templateModel,"\n"))},directives:[c.z,c.q,c.r,v,c.p,c.s,w.b,k.b,C.a,T.a],styles:[""]}),t})();var A=n("ierq");let K=(()=>{class t{static components(){return{taglist:y,"taglist-a11y":_,"taglist-basic":M,"taglist-delete":O,"taglist-formatter":P,"taglist-keyword":F,"taglist-objects":V,"taglist-output":D,"taglist-reactive":R,"taglist-templatedriven":W}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Ob({type:t}),t.\u0275inj=o.Nb({imports:[[r,s.b,A.a]]}),t})()},ierq:function(t,e,n){"use strict";n.d(e,"a",function(){return g});var s=n("tgBs"),a=n("/sJ9"),i=n("eV8M"),o=n("gkbm"),r=n("ofXK"),l=n("3Pt+"),c=n("fXoL");let g=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Ob({type:t}),t.\u0275inj=c.Nb({imports:[[],r.c,l.k,l.v,o.b,i.a,a.a,s.a]}),t})()}}]);