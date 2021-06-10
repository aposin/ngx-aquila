!function(){function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return e(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function n(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function a(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{Cbtz:function(e,n,s){"use strict";s.r(n),s.d(n,"TaglistExamplesModule",function(){return Y});var o,r=s("AqTC"),l=s("mN63"),c=s("ofXK"),g=s("fXoL"),u=((o=function t(){i(this,t)}).\u0275fac=function(t){return new(t||o)},o.\u0275mod=g.Ob({type:o}),o.\u0275inj=g.Nb({imports:[[c.c,l.c]]}),o),b=s("8LU1"),h=s("3Pt+"),f=s("FtGj"),d=s("u47x"),m=s("+vaC");function p(t,e){if(1&t){var n=g.Xb();g.Wb(0,"span",1),g.dc("click",function(t){return g.yc(n),g.hc().removeClickHandler(t)}),g.Rb(1,"nx-icon",2),g.Vb()}}var x,y=((x=function(){function t(e,n,a){i(this,t),this._changeDetectorRef=e,this._elementRef=n,this._focusMonitor=a,this._tabindex=-1,this.clicked=new g.o,this.removed=new g.o,this._focusMonitor.monitor(this._elementRef)}return a(t,[{key:"removable",get:function(){return this._removable},set:function(t){this._removable=Object(b.b)(t),this._changeDetectorRef.markForCheck()}},{key:"tabindex",get:function(){return this.removable?0:this._tabindex},set:function(t){this._tabindex=Object(b.e)(t),this._changeDetectorRef.markForCheck()}},{key:"value",get:function(){return this._value},set:function(t){this._value!==t&&(this._value=t,this._changeDetectorRef.markForCheck())}},{key:"ngOnDestroy",value:function(){this._focusMonitor.stopMonitoring(this._elementRef)}},{key:"removeClickHandler",value:function(t){t.stopPropagation(),this.removed.emit(this.value)}},{key:"removeKeyHandler",value:function(t){!this.removable||t.keyCode!==f.c&&t.keyCode!==f.b||(t.preventDefault(),t.stopPropagation(),this.removed.emit(this.value)),t.keyCode===f.f&&this.clicked.emit(this.value)}},{key:"tagClickHandler",value:function(){this.clicked.emit(this.value)}}]),t}()).\u0275fac=function(t){return new(t||x)(g.Qb(g.h),g.Qb(g.l),g.Qb(d.g))},x.\u0275cmp=g.Kb({type:x,selectors:[["nx-tag"]],hostVars:1,hostBindings:function(t,e){1&t&&g.dc("click",function(){return e.tagClickHandler()})("keydown",function(t){return e.removeKeyHandler(t)}),2&t&&g.Fb("tabindex",e.tabindex)},inputs:{removable:"removable",tabindex:"tabindex",value:"value"},outputs:{clicked:"clicked",removed:"removed"},decls:2,vars:2,consts:[["role","link","aria-label","close","class","nx-tag__close",3,"click",4,"ngIf"],["role","link","aria-label","close",1,"nx-tag__close",3,"click"],["name","close",1,"nx-tag__close-icon"]],template:function(t,e){1&t&&(g.Jc(0),g.Hc(1,p,2,0,"span",0)),2&t&&(g.Lc("",e.value,"\n"),g.Eb(1),g.nc("ngIf",e.removable))},directives:[c.q,m.a],styles:["[_nghost-%COMP%]{font-size:var(--taglist-font-size);line-height:var(--taglist-line-height);font-weight:var(--taglist-font-weight);letter-spacing:var(--taglist-letter-spacing);height:auto;max-width:100%;color:var(--taglist-color);background-color:var(--taglist-background-color);padding:6px 14px;display:flex;align-items:center;border:2px solid var(--taglist-border-color);border-radius:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:background-color .2s ease,box-shadow .2s ease;cursor:pointer}[_nghost-%COMP%]:hover{border-color:var(--taglist-hover-border-color);color:var(--taglist-hover-color);background-color:var(--taglist-hover-background-color)}[_nghost-%COMP%]:focus{outline:2px solid transparent}.cdk-keyboard-focused[_nghost-%COMP%]{box-shadow:var(--focus-box-shadow)}@media screen and (-ms-high-contrast:active){.cdk-keyboard-focused[_nghost-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}.nx-tag__close-icon[_ngcontent-%COMP%]{outline:none;display:block;font-size:var(--taglist-close-icon-size)}.nx-tag__close[_ngcontent-%COMP%]{margin-left:8px}[dir=rtl][_nghost-%COMP%]   .nx-tag__close[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-tag__close[_ngcontent-%COMP%]{margin-right:8px;margin-left:0}.nx-taglist--keyword[_nghost-%COMP%], .nx-taglist--keyword   [_nghost-%COMP%]{padding:14px 22px}@media screen and (-ms-high-contrast:active){[_nghost-%COMP%], [_nghost-%COMP%]:focus, [_nghost-%COMP%]:hover{color:buttonText;background-color:buttonFace;border-color:buttonText;-ms-high-contrast-adjust:none}}"],changeDetection:0}),x);function v(t,e){if(1&t){var n=g.Xb();g.Wb(0,"li",4),g.Wb(1,"nx-tag",5),g.dc("clicked",function(t){g.yc(n);var a=e.index;return g.hc(2).tagClick(a,t)})("removed",function(t){g.yc(n);var a=e.index;return g.hc(2).delete(a,t)}),g.Vb(),g.Vb()}if(2&t){var a=e.$implicit,i=g.hc(2);g.Eb(1),g.nc("value",i.renderTag(a))("removable",i.allowTagDeletion)("tabindex",i.tabindex)}}function k(t,e){if(1&t&&(g.Wb(0,"ul",2),g.Hc(1,v,2,3,"li",3),g.Vb()),2&t){var n=g.hc();g.Eb(1),g.nc("ngForOf",n.tags)}}function _(t,e){1&t&&g.lc(0,0,["*ngIf","tags.length < 1"])}var w,C,T,O,M,P,F,V,L=["*"],D=((T=function(){function e(t){i(this,e),this._changeDetectorRef=t,this.tagsChange=new g.o,this.tagClickEvent=new g.o,this._tags=[],this._tabindex=-1,this._allowTagDeletion=!0,this._isKeywordList=!1,this._labelProperty="nxTaglistLabel",this._valueFormatterFn=function(t){return t},this._onChange=function(){},this._onTouched=function(){}}return a(e,[{key:"tags",get:function(){return this._tags},set:function(t){this._tags=t,this._changeDetectorRef.markForCheck()}},{key:"tabindex",get:function(){return this.allowTagDeletion?0:this._tabindex},set:function(t){this._tabindex=Object(b.e)(t),this._changeDetectorRef.markForCheck()}},{key:"allowTagDeletion",get:function(){return this._allowTagDeletion},set:function(t){this._allowTagDeletion=Object(b.b)(t),this._changeDetectorRef.markForCheck()}},{key:"isKeywordList",get:function(){return this._isKeywordList},set:function(t){this._isKeywordList=Object(b.b)(t),this._changeDetectorRef.markForCheck()}},{key:"labelProp",get:function(){return this._labelProperty},set:function(t){this._labelProperty!==t&&(this._labelProperty=t,this._changeDetectorRef.markForCheck())}},{key:"labelledby",get:function(){return this._ariaLabelledBy},set:function(t){this._ariaLabelledBy!==t&&(this._ariaLabelledBy=t,this._changeDetectorRef.markForCheck())}},{key:"valueFormatter",get:function(){return this._valueFormatterFn},set:function(t){this._valueFormatterFn=t,this._changeDetectorRef.markForCheck()}},{key:"delete",value:function(e,n){this.allowTagDeletion&&(this.tags=[].concat(t(this.tags.slice(0,e)),t(this.tags.slice(e+1))),this.tagChildren.toArray()[e+1]&&this.tagChildren.toArray()[e+1].nativeElement.focus(),this._onChange(this.tags),this.tagsChange.emit(this.tags))}},{key:"addTag",value:function(e){var n=this;e&&("string"==typeof e&&-1===this.tags.indexOf(e)||e[this.labelProp]&&this.tags.filter(function(t){return t[n.labelProp]===e[n.labelProp]}).length<1)&&(this.tags=[].concat(t(this.tags),[e]),this._onChange(this.tags),this.tagsChange.emit(this.tags))}},{key:"clearTags",value:function(){this.tags=[],this._onChange(this.tags),this.tagsChange.emit(this.tags)}},{key:"writeValue",value:function(t){this.tags=t}},{key:"registerOnChange",value:function(t){this._onChange=t}},{key:"registerOnTouched",value:function(t){this._onTouched=t}},{key:"renderTag",value:function(t){return this.valueFormatter("string"==typeof t?t:t[this.labelProp])}},{key:"tagClick",value:function(t,e){this.tagClickEvent.emit(this.tags[t])}}]),e}()).\u0275fac=function(t){return new(t||T)(g.Qb(g.h))},T.\u0275cmp=g.Kb({type:T,selectors:[["nx-taglist"]],viewQuery:function(t,e){var n;1&t&&g.Nc(y,1,g.l),2&t&&g.tc(n=g.ec())&&(e.tagChildren=n)},hostVars:4,hostBindings:function(t,e){2&t&&(g.Fb("aria-labelledby",e.labelledby||null)("tabindex",-1),g.Ib("nx-taglist--keyword",e.isKeywordList))},inputs:{tags:["nxTags","tags"],tabindex:"tabindex",allowTagDeletion:["nxAllowTagDeletion","allowTagDeletion"],isKeywordList:["nxIsKeywordList","isKeywordList"],labelProp:["nxLabelProperty","labelProp"],labelledby:["aria-labelledby","labelledby"],valueFormatter:["nxValueFormatter","valueFormatter"]},outputs:{tagsChange:"nxTagsChange",tagClickEvent:"nxTagClick"},features:[g.Db([{provide:h.n,useExisting:Object(g.W)(function(){return T}),multi:!0}])],ngContentSelectors:L,decls:2,vars:2,consts:[["class","nx-taglist",4,"ngIf"],[4,"ngIf"],[1,"nx-taglist"],["class","nx-taglist__list-item","tabindex","-1",4,"ngFor","ngForOf"],["tabindex","-1",1,"nx-taglist__list-item"],[3,"value","removable","tabindex","clicked","removed"]],template:function(t,e){1&t&&(g.mc(),g.Hc(0,k,2,1,"ul",0),g.Hc(1,_,1,0,"ng-content",1)),2&t&&(g.nc("ngIf",e.tags.length>0),g.Eb(1),g.nc("ngIf",e.tags.length<1))},directives:[c.q,c.p,y],styles:["[_nghost-%COMP%]{position:relative;min-height:32px;display:flex;justify-content:space-between}[_nghost-%COMP%]:focus{outline:none}.nx-taglist[_ngcontent-%COMP%], .nx-taglist__list-item[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.nx-taglist__list-item[_ngcontent-%COMP%]{list-style:none;margin-right:12px;margin-bottom:12px}[dir=rtl][_nghost-%COMP%]   .nx-taglist__list-item[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-taglist__list-item[_ngcontent-%COMP%]{margin-right:0;margin-left:12px}@media (max-width:703px){.nx-taglist--keyword[_ngcontent-%COMP%]{justify-content:center}}"],changeDetection:0}),T),A=((C=function t(){i(this,t),this.tags=["Apples","Oranges","Bananas","Strawberries","Melons","Lemons"]}).\u0275fac=function(t){return new(t||C)},C.\u0275cmp=g.Kb({type:C,selectors:[["taglist-example"]],decls:1,vars:2,consts:[[3,"nxTags","nxAllowTagDeletion"]],template:function(t,e){1&t&&g.Rb(0,"nx-taglist",0),2&t&&g.nc("nxTags",e.tags)("nxAllowTagDeletion",!1)},directives:[D],styles:[""]}),C),R=((w=function t(){i(this,t),this.tags=["Apples","Oranges","Bananas","Strawberries","Melons","Lemons"]}).\u0275fac=function(t){return new(t||w)},w.\u0275cmp=g.Kb({type:w,selectors:[["taglist-a11y-example"]],decls:3,vars:2,consts:[["id","fruit-headline"],["aria-labelledby","fruit-headline",3,"nxTags","nxAllowTagDeletion"]],template:function(t,e){1&t&&(g.Wb(0,"h5",0),g.Jc(1,"Some fruit:"),g.Vb(),g.Rb(2,"nx-taglist",1)),2&t&&(g.Eb(2),g.nc("nxTags",e.tags)("nxAllowTagDeletion",!1))},directives:[D],styles:[""]}),w),j=s("HXSb"),W=s("nK+a"),K=s("VamS"),J=s("LTpZ"),I=((V=function t(){i(this,t),this.tags=["Apples","Oranges","Bananas","Strawberries","Melons","Lemons"]}).\u0275fac=function(t){return new(t||V)},V.\u0275cmp=g.Kb({type:V,selectors:[["taglist-basic-example"]],decls:14,vars:2,consts:[[3,"nxTags","nxTagsChange"],["taglistBasic",""],["nxLabel","Please provide a tag"],["nxInput",""],["addTagInput",""],["nxFormfieldHint",""],["nxButton","primary small","type","button",1,"nx-margin-right-2xs","nx-margin-bottom-s",3,"click"],["nxButton","secondary small","type","button",1,"nx-margin-bottom-s",3,"click"]],template:function(t,e){if(1&t){var n=g.Xb();g.Wb(0,"nx-taglist",0,1),g.dc("nxTagsChange",function(t){return e.tags=t}),g.Jc(2,"Sorry, you don't have any fruit."),g.Vb(),g.Wb(3,"nx-formfield",2),g.Rb(4,"input",3,4),g.Wb(6,"span",5),g.Jc(7," Note that the tag list will just ignore empty tag values. "),g.Vb(),g.Vb(),g.Wb(8,"button",6),g.dc("click",function(){g.yc(n);var t=g.uc(5);return g.uc(1).addTag(t.value)}),g.Jc(9,"Add tag"),g.Vb(),g.Wb(10,"button",7),g.dc("click",function(){return g.yc(n),g.uc(1).clearTags()}),g.Jc(11,"Clear tags"),g.Vb(),g.Rb(12,"br"),g.Jc(13)}2&t&&(g.nc("nxTags",e.tags),g.Eb(13),g.Lc("\nCurrent Value: ",e.tags,"\n"))},directives:[D,j.b,W.b,K.a,J.a],styles:[""]}),V),B=((F=function t(){i(this,t),this.tags=["Apples","Oranges","Bananas","Strawberries","Melons","Lemons"]}).\u0275fac=function(t){return new(t||F)},F.\u0275cmp=g.Kb({type:F,selectors:[["taglist-delete-example"]],decls:1,vars:2,consts:[[3,"nxTags","nxAllowTagDeletion"]],template:function(t,e){1&t&&g.Rb(0,"nx-taglist",0),2&t&&g.nc("nxTags",e.tags)("nxAllowTagDeletion",!0)},directives:[D],styles:[""]}),F),E=((P=function(){function t(){i(this,t),this.tags=["Apples","Oranges","Bananas","Strawberries","Melons","Lemons"]}return a(t,[{key:"myFormatter",value:function(t){return"my "+t}}]),t}()).\u0275fac=function(t){return new(t||P)},P.\u0275cmp=g.Kb({type:P,selectors:[["taglist-formatter-example"]],decls:1,vars:3,consts:[[3,"nxTags","nxValueFormatter","nxAllowTagDeletion"]],template:function(t,e){1&t&&g.Rb(0,"nx-taglist",0),2&t&&g.nc("nxTags",e.tags)("nxValueFormatter",e.myFormatter)("nxAllowTagDeletion",!1)},directives:[D],styles:[""]}),P),S=((M=function t(){i(this,t),this.tags=["Apples","Oranges","Bananas","Strawberries","Melons","Lemons"]}).\u0275fac=function(t){return new(t||M)},M.\u0275cmp=g.Kb({type:M,selectors:[["taglist-keyword-example"]],decls:1,vars:3,consts:[[3,"nxTags","nxAllowTagDeletion","nxIsKeywordList"]],template:function(t,e){1&t&&g.Rb(0,"nx-taglist",0),2&t&&g.nc("nxTags",e.tags)("nxAllowTagDeletion",!1)("nxIsKeywordList",!0)},directives:[D],styles:[""]}),M),H=((O=function t(){i(this,t),this.tags=[{nxTaglistLabel:"Apples"},{nxTaglistLabel:"Oranges"},{nxTaglistLabel:"asd"}]}).\u0275fac=function(t){return new(t||O)},O.\u0275cmp=g.Kb({type:O,selectors:[["taglist-objects-example"]],decls:15,vars:4,consts:[[3,"nxTags","nxTagsChange"],["taglistObjects",""],["nxLabel","Please provide a tag"],["nxInput",""],["addTagInputObjects",""],["nxFormfieldHint",""],["nxButton","primary small","type","button",1,"nx-margin-right-2xs","nx-margin-bottom-s",3,"click"],["nxButton","secondary small","type","button",1,"nx-margin-bottom-s",3,"click"]],template:function(t,e){if(1&t){var n=g.Xb();g.Wb(0,"nx-taglist",0,1),g.dc("nxTagsChange",function(t){return e.tags=t}),g.Jc(2,"Sorry, you don't have any fruit."),g.Vb(),g.Wb(3,"nx-formfield",2),g.Rb(4,"input",3,4),g.Wb(6,"span",5),g.Jc(7," Note that the tag list will just ignore empty tag values. "),g.Vb(),g.Vb(),g.Wb(8,"button",6),g.dc("click",function(){g.yc(n);var t=g.uc(5);return g.uc(1).addTag({nxTaglistLabel:t.value})}),g.Jc(9,"Add tag"),g.Vb(),g.Wb(10,"button",7),g.dc("click",function(){return g.yc(n),g.uc(1).clearTags()}),g.Jc(11,"Clear tags"),g.Vb(),g.Rb(12,"br"),g.Jc(13),g.ic(14,"json")}2&t&&(g.nc("nxTags",e.tags),g.Eb(13),g.Lc("\nCurrent Value: ",g.jc(14,2,e.tags),"\n"))},directives:[D,j.b,W.b,K.a,J.a],pipes:[c.h],styles:[""]}),O);function N(t,e){if(1&t&&(g.Wb(0,"pre"),g.Jc(1),g.Vb()),2&t){var n=g.hc();g.Eb(1),g.Kc(n.logMessage)}}var X,q,z,Q,G=((z=function(){function t(){i(this,t),this.tags=["Apples","Oranges"],this.messages=[]}return a(t,[{key:"log",value:function(t){this.messages.push(t),this.logMessage=this.messages.join("\n")}}]),t}()).\u0275fac=function(t){return new(t||z)},z.\u0275cmp=g.Kb({type:z,selectors:[["taglist-output-example"]],decls:2,vars:3,consts:[["tabindex","0",3,"nxTags","nxAllowTagDeletion","nxTagClick"],[4,"ngIf"]],template:function(t,e){1&t&&(g.Wb(0,"nx-taglist",0),g.dc("nxTagClick",function(t){return e.log(t)}),g.Vb(),g.Hc(1,N,2,1,"pre",1)),2&t&&(g.nc("nxTags",e.tags)("nxAllowTagDeletion",!1),g.Eb(1),g.nc("ngIf",e.logMessage))},directives:[D,c.q],styles:[""]}),z),U=((q=function(){function t(e){i(this,t),this.fb=e,this.createForm()}return a(t,[{key:"createForm",value:function(){this.testForm=this.fb.group({tagsTestReactive:[["Apples","Oranges"],h.y.required]})}}]),t}()).\u0275fac=function(t){return new(t||q)(g.Qb(h.d))},q.\u0275cmp=g.Kb({type:q,selectors:[["taglist-reactive-example"]],decls:20,vars:7,consts:[["name","reactiveTest",3,"formGroup"],["formControlName","tagsTestReactive"],["taglistReactive",""],["nxLabel","Please provide a tag"],["nxInput",""],["addTagInputReactive",""],["nxFormfieldHint",""],["nxButton","primary small","type","button",1,"nx-margin-right-2xs",3,"click"],["nxButton","secondary small","type","button",3,"click"]],template:function(t,e){if(1&t){var n=g.Xb();g.Wb(0,"form",0),g.Wb(1,"nx-taglist",1,2),g.Jc(3,"Sorry, you don't have any fruit."),g.Vb(),g.Wb(4,"nx-formfield",3),g.Rb(5,"input",4,5),g.Wb(7,"span",6),g.Jc(8," Note that the tag list will just ignore empty tag values. "),g.Vb(),g.Vb(),g.Vb(),g.Wb(9,"button",7),g.dc("click",function(){g.yc(n);var t=g.uc(6);return g.uc(2).addTag(t.value)}),g.Jc(10,"Add tag"),g.Vb(),g.Wb(11,"button",8),g.dc("click",function(){return g.yc(n),g.uc(2).clearTags()}),g.Jc(12,"Clear tags"),g.Vb(),g.Rb(13,"br"),g.Wb(14,"p"),g.Jc(15),g.ic(16,"json"),g.Vb(),g.Wb(17,"p"),g.Jc(18),g.ic(19,"json"),g.Vb()}2&t&&(g.nc("formGroup",e.testForm),g.Eb(15),g.Lc("Form value: ",g.jc(16,3,e.testForm.value),""),g.Eb(3),g.Lc("Form status: ",g.jc(19,5,e.testForm.status),""))},directives:[h.z,h.q,h.i,D,h.p,h.g,j.b,W.b,K.a,J.a],pipes:[c.h],styles:[""]}),q),$=((X=function t(){i(this,t),this.templateModel=["Apples","Oranges","Bananas","Strawberries","Melons","Lemons"]}).\u0275fac=function(t){return new(t||X)},X.\u0275cmp=g.Kb({type:X,selectors:[["taglist-templatedriven-example"]],decls:15,vars:2,consts:[["name","taglistNgModel",3,"ngModel","ngModelChange"],["taglistNgModel",""],["nxLabel","Please provide a tag"],["nxInput",""],["addTagInputNgModel",""],["nxFormfieldHint",""],["nxButton","primary small","type","button",1,"nx-margin-right-2xs","nx-margin-bottom-s",3,"click"],["nxButton","secondary small","type","button",1,"nx-margin-bottom-s",3,"click"]],template:function(t,e){if(1&t){var n=g.Xb();g.Wb(0,"form"),g.Wb(1,"nx-taglist",0,1),g.dc("ngModelChange",function(t){return e.templateModel=t}),g.Jc(3," Sorry, you don't have any fruit. "),g.Vb(),g.Wb(4,"nx-formfield",2),g.Rb(5,"input",3,4),g.Wb(7,"span",5),g.Jc(8," Note that the tag list will just ignore empty tag values. "),g.Vb(),g.Vb(),g.Vb(),g.Wb(9,"button",6),g.dc("click",function(){g.yc(n);var t=g.uc(6);return g.uc(2).addTag(t.value)}),g.Jc(10,"Add tag"),g.Vb(),g.Wb(11,"button",7),g.dc("click",function(){return g.yc(n),g.uc(2).clearTags()}),g.Jc(12,"Clear tags"),g.Vb(),g.Rb(13,"br"),g.Jc(14)}2&t&&(g.Eb(1),g.nc("ngModel",e.templateModel),g.Eb(13),g.Lc("\nCurrent Value: ",e.templateModel,"\n"))},directives:[h.z,h.q,h.r,D,h.p,h.s,j.b,W.b,K.a,J.a],styles:[""]}),X),Z=s("ierq"),Y=((Q=function(){function t(){i(this,t)}return a(t,null,[{key:"components",value:function(){return{taglist:A,"taglist-a11y":R,"taglist-basic":I,"taglist-delete":B,"taglist-formatter":E,"taglist-keyword":S,"taglist-objects":H,"taglist-output":G,"taglist-reactive":U,"taglist-templatedriven":$}}}]),t}()).\u0275fac=function(t){return new(t||Q)},Q.\u0275mod=g.Ob({type:Q}),Q.\u0275inj=g.Nb({imports:[[u,r.b,Z.a]]}),Q)},ierq:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var a=n("tgBs"),s=n("/sJ9"),o=n("eV8M"),r=n("gkbm"),l=n("ofXK"),c=n("3Pt+"),g=n("fXoL"),u=function(){var t=function t(){i(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=g.Ob({type:t}),t.\u0275inj=g.Nb({imports:[[],l.c,c.k,c.v,r.b,o.a,s.a,a.a]}),t}()}}])}();