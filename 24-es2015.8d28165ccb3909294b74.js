(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"4TwE":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("EM62");let r=(()=>{class e{}return e.\u0275mod=a.Lb({type:e}),e.\u0275inj=a.Kb({factory:function(t){return new(t||e)}}),e})();n("VqxJ")},"4Umg":function(e,t,n){"use strict";n.r(t),n.d(t,"RadioExamplesModule",(function(){return w}));var a=n("0FLW"),r=n("9j8J"),o=n("EM62"),s=n("0aWw");let i=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Hb({type:e,selectors:[["ng-component"]],decls:6,vars:0,consts:[["name","fruit",1,"nx-margin-bottom-m"],["name","fruit"]],template:function(e,t){1&e&&(o.Tb(0,"nx-radio",0),o.Jc(1,"Apples"),o.Sb(),o.Tb(2,"nx-radio",0),o.Jc(3,"Oranges"),o.Sb(),o.Tb(4,"nx-radio",1),o.Jc(5,"Bananas"),o.Sb())},directives:[s.a],styles:[""]}),e})();var c=n("LoTN");let l=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Hb({type:e,selectors:[["nx-radio-button-disabled-example"]],decls:7,vars:0,consts:[["name","disabledTest","nxDisabled","true"],[1,"nx-margin-bottom-m"],["nxValue","apples",1,"nx-margin-bottom-m"],["nxValue","oranges"]],template:function(e,t){1&e&&(o.Tb(0,"nx-radio-group",0),o.Tb(1,"nx-label",1),o.Jc(2,"What do you prefer?"),o.Sb(),o.Tb(3,"nx-radio",2),o.Jc(4,"I like Apples"),o.Sb(),o.Tb(5,"nx-radio",3),o.Jc(6,"I like Oranges"),o.Sb(),o.Sb())},directives:[s.b,c.a,s.a],styles:[""]}),e})();var b=n("2kYt");function u(e,t){if(1&e&&(o.Tb(0,"pre"),o.Jc(1),o.Sb()),2&e){const e=o.ec();o.Bb(1),o.Kc(e.logMessage)}}let g=(()=>{class e{constructor(){this.messages=[]}log(e){this.messages.push(e),this.logMessage=this.messages.join("\n")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Hb({type:e,selectors:[["nx-radio-button-event-example"]],decls:9,vars:1,consts:[["name","singleRadioOutputTest",3,"nxGroupValueChange"],[1,"nx-margin-bottom-m"],["nxValue","option1",1,"nx-margin-bottom-m",3,"nxValueChange"],["nxValue","option2",3,"nxValueChange"],[4,"ngIf"]],template:function(e,t){1&e&&(o.Tb(0,"nx-radio-group",0),o.ac("nxGroupValueChange",(function(e){return t.log("nxGroupValueChange occured: "+e.value)})),o.Tb(1,"nx-label",1),o.Jc(2,"This is a nx-radio-group label"),o.Sb(),o.Tb(3,"nx-radio",2),o.ac("nxValueChange",(function(e){return t.log("nxValueChange occured: "+e.value)})),o.Jc(4," Option 1 "),o.Sb(),o.Tb(5,"nx-radio",3),o.ac("nxValueChange",(function(e){return t.log("nxValueChange occured: "+e.value)})),o.Jc(6," Option 2 "),o.Sb(),o.Sb(),o.Ob(7,"br"),o.Hc(8,u,2,1,"pre",4)),2&e&&(o.Bb(8),o.kc("ngIf",t.logMessage))},directives:[s.b,c.a,s.a,b.t],styles:[""]}),e})();var p=n("nIj0");let m=(()=>{class e{constructor(){this.templateModel="apples"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Hb({type:e,selectors:[["nx-radio-button-form-example"]],decls:10,vars:2,consts:[["name","templateTest",3,"ngModel","ngModelChange"],[1,"nx-margin-bottom-m"],["nxValue","apples",1,"nx-margin-bottom-m"],["nxValue","oranges"]],template:function(e,t){1&e&&(o.Tb(0,"form"),o.Tb(1,"nx-radio-group",0),o.ac("ngModelChange",(function(e){return t.templateModel=e})),o.Tb(2,"nx-label",1),o.Jc(3,"What do you prefer?"),o.Sb(),o.Tb(4,"nx-radio",2),o.Jc(5,"I like Apples"),o.Sb(),o.Tb(6,"nx-radio",3),o.Jc(7,"I like Oranges"),o.Sb(),o.Sb(),o.Tb(8,"p"),o.Jc(9),o.Sb(),o.Sb()),2&e&&(o.Bb(1),o.kc("ngModel",t.templateModel),o.Bb(8),o.Lc("Current Value: ",t.templateModel,""))},directives:[p.A,p.q,p.r,s.b,p.p,p.s,c.a,s.a],styles:[""]}),e})(),d=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Hb({type:e,selectors:[["nx-radio-button-group-example"]],decls:7,vars:0,consts:[["name","myGroup"],[1,"nx-margin-bottom-m"],["nxValue","1",1,"nx-margin-bottom-m"],["nxValue","2"]],template:function(e,t){1&e&&(o.Tb(0,"nx-radio-group",0),o.Tb(1,"nx-label",1),o.Jc(2,"This is a nx-radio-group"),o.Sb(),o.Tb(3,"nx-radio",2),o.Jc(4,"Select 1"),o.Sb(),o.Tb(5,"nx-radio",3),o.Jc(6,"Select 2"),o.Sb(),o.Sb())},directives:[s.b,c.a,s.a],styles:[""]}),e})(),h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Hb({type:e,selectors:[["ng-component"]],decls:8,vars:0,consts:[["name","myGroup"],[1,"nx-margin-bottom-m"],[1,"horizontal-buttons"],["nxValue","1",1,"nx-margin-bottom-m"],["nxValue","2",1,"nx-margin-left-s","nx-margin-bottom-m"]],template:function(e,t){1&e&&(o.Tb(0,"nx-radio-group",0),o.Tb(1,"nx-label",1),o.Jc(2,"This is a nx-radio-group"),o.Sb(),o.Tb(3,"div",2),o.Tb(4,"nx-radio",3),o.Jc(5,"Select 1"),o.Sb(),o.Tb(6,"nx-radio",4),o.Jc(7,"Select 2"),o.Sb(),o.Sb(),o.Sb())},directives:[s.b,c.a,s.a],styles:[".horizontal-buttons[_ngcontent-%COMP%]{display:flex;flex-direction:row}"]}),e})(),x=(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Hb({type:e,selectors:[["ng-component"]],decls:7,vars:3,consts:[["name","labelSize"],[3,"size"],["nxValue","choice1",1,"nx-margin-bottom-s",3,"labelSize"],["nxValue","choice2",3,"labelSize"]],template:function(e,t){1&e&&(o.Tb(0,"nx-radio-group",0),o.Tb(1,"nx-label",1),o.Jc(2,"This is an expert label for the radio button group"),o.Sb(),o.Tb(3,"nx-radio",2),o.Jc(4,"Choice 1"),o.Sb(),o.Tb(5,"nx-radio",3),o.Jc(6,"Choice 2"),o.Sb(),o.Sb()),2&e&&(o.Bb(1),o.kc("size","small"),o.Bb(2),o.kc("labelSize","small"),o.Bb(2),o.kc("labelSize","small"))},directives:[s.b,c.a,s.a],styles:["[_nghost-%COMP%]   nx-radio-group[_ngcontent-%COMP%]   .nx-radio-button--small-label[_ngcontent-%COMP%]{margin-bottom:8px}"]}),e})();var f=n("yUsN"),v=n("tPQ2");let _=(()=>{class e{constructor(e){this.formBuilder=e,this.createForm()}createForm(){this.testForm=this.formBuilder.group({radioTestReactive:[null,p.y.required]})}}return e.\u0275fac=function(t){return new(t||e)(o.Nb(p.d))},e.\u0275cmp=o.Hb({type:e,selectors:[["ng-component"]],decls:15,vars:6,consts:[[3,"formGroup"],["name","reactiveTest","formControlName","radioTestReactive",3,"required"],[1,"nx-margin-bottom-s",3,"size"],["appearance","text"],["nxValue","coffee",1,"radio-item","nx-margin-bottom-s",3,"labelSize"],["nxValue","tea",1,"radio-item","nx-margin-bottom-s",3,"labelSize"],["nxValue","water",1,"radio-item",3,"labelSize"],["type","submit","nxButton","primary small"]],template:function(e,t){1&e&&(o.Tb(0,"form",0),o.Tb(1,"nx-radio-group",1),o.Tb(2,"nx-label",2),o.Jc(3,"What do you prefer?"),o.Sb(),o.Tb(4,"nx-error",3),o.Jc(5," Please make a choice. "),o.Sb(),o.Tb(6,"nx-radio",4),o.Jc(7,"Coffee"),o.Sb(),o.Tb(8,"nx-radio",5),o.Jc(9,"Tea"),o.Sb(),o.Tb(10,"nx-radio",6),o.Jc(11,"Water"),o.Sb(),o.Sb(),o.Ob(12,"br"),o.Tb(13,"button",7),o.Jc(14,"Submit"),o.Sb(),o.Sb()),2&e&&(o.kc("formGroup",t.testForm),o.Bb(1),o.kc("required",!0),o.Bb(1),o.kc("size","small"),o.Bb(4),o.kc("labelSize","small"),o.Bb(2),o.kc("labelSize","small"),o.Bb(2),o.kc("labelSize","small"))},directives:[p.A,p.q,p.i,s.b,p.p,p.g,p.w,c.a,f.b,s.a,v.a],styles:["[_nghost-%COMP%]   nx-radio-group[_ngcontent-%COMP%]   .nx-radio-button--small-label[_ngcontent-%COMP%]{margin-bottom:8px}"]}),e})(),T=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Hb({type:e,selectors:[["ng-component"]],decls:9,vars:0,consts:[[1,"docs-inverse-container"],["name","negativeGroup","negative","true"],["name","size",1,"nx-margin-bottom-m"],["name","size"],["name","weight","negative","true"]],template:function(e,t){1&e&&(o.Tb(0,"div",0),o.Tb(1,"nx-radio-group",1),o.Tb(2,"nx-radio",2),o.Jc(3,"Radio 1"),o.Sb(),o.Tb(4,"nx-radio",3),o.Jc(5,"Radio 2"),o.Sb(),o.Sb(),o.Ob(6,"br"),o.Tb(7,"nx-radio",4),o.Jc(8,"Single negative radio"),o.Sb(),o.Sb())},directives:[s.b,s.a],styles:[""]}),e})(),S=(()=>{class e{constructor(e){this.formBuilder=e,this.createForm()}createForm(){this.testForm=this.formBuilder.group({radioTestReactive:["oranges",p.y.required]})}}return e.\u0275fac=function(t){return new(t||e)(o.Nb(p.d))},e.\u0275cmp=o.Hb({type:e,selectors:[["nx-radio-button-reactive-example"]],decls:14,vars:7,consts:[[3,"formGroup"],["name","reactiveTest","formControlName","radioTestReactive"],[1,"nx-margin-bottom-m"],["nxValue","apples",1,"nx-margin-bottom-m"],["nxValue","oranges"]],template:function(e,t){1&e&&(o.Tb(0,"form",0),o.Tb(1,"nx-radio-group",1),o.Tb(2,"nx-label",2),o.Jc(3,"What do you prefer?"),o.Sb(),o.Tb(4,"nx-radio",3),o.Jc(5,"I like Apples"),o.Sb(),o.Tb(6,"nx-radio",4),o.Jc(7,"I like Oranges"),o.Sb(),o.Sb(),o.Tb(8,"p"),o.Jc(9),o.fc(10,"json"),o.Sb(),o.Tb(11,"p"),o.Jc(12),o.fc(13,"json"),o.Sb(),o.Sb()),2&e&&(o.kc("formGroup",t.testForm),o.Bb(9),o.Lc("Form value: ",o.gc(10,3,t.testForm.value),""),o.Bb(3),o.Lc("Form status: ",o.gc(13,5,t.testForm.status),""))},directives:[p.A,p.q,p.i,s.b,p.p,p.g,c.a,s.a],pipes:[b.k],styles:[""]}),e})(),y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Hb({type:e,selectors:[["nx-radio-button-sample-example"]],decls:19,vars:4,consts:[["name","group1"],["name","group1",3,"nxChecked"],["name","group1",3,"nxDisabled"],["name","group2",3,"nxChecked","nxDisabled"]],template:function(e,t){1&e&&(o.Tb(0,"h3"),o.Jc(1,"The radio button hasn't been clicked."),o.Sb(),o.Tb(2,"nx-radio",0),o.Jc(3,"Default"),o.Sb(),o.Ob(4,"br"),o.Tb(5,"h3"),o.Jc(6,"An action or item is selected."),o.Sb(),o.Tb(7,"nx-radio",1),o.Jc(8,"Checked"),o.Sb(),o.Ob(9,"br"),o.Tb(10,"h3"),o.Jc(11,"The button is inactive due to previously checked or unchecked options."),o.Sb(),o.Tb(12,"nx-radio",2),o.Jc(13,"Disabled"),o.Sb(),o.Ob(14,"br"),o.Tb(15,"h3"),o.Jc(16,"An action or item has been pre-selected due to previously checked or unchecked options."),o.Sb(),o.Tb(17,"nx-radio",3),o.Jc(18,"Checked & disabled"),o.Sb()),2&e&&(o.Bb(7),o.kc("nxChecked",!0),o.Bb(5),o.kc("nxDisabled",!0),o.Bb(5),o.kc("nxChecked",!0)("nxDisabled",!0))},directives:[s.a],styles:[""]}),e})(),C=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Hb({type:e,selectors:[["ng-component"]],decls:4,vars:0,consts:[["name","size","labelSize","small",1,"nx-margin-bottom-m"],["name","size"]],template:function(e,t){1&e&&(o.Tb(0,"nx-radio",0),o.Jc(1,"Radio with a small label"),o.Sb(),o.Tb(2,"nx-radio",1),o.Jc(3,"Radio with a big label (default)"),o.Sb())},directives:[s.a],styles:[""]}),e})();var O=n("t3RA");let w=(()=>{class e{static components(){return{"radio-button":i,"radio-button-disabled":l,"radio-button-event":g,"radio-button-form":m,"radio-button-group":d,"radio-button-group-horizontal":h,"radio-button-group-label-size":x,"radio-button-group-validation":_,"radio-button-negative":T,"radio-button-reactive":S,"radio-button-sample":y,"radio-button-sizes":C}}}return e.\u0275mod=o.Lb({type:e}),e.\u0275inj=o.Kb({factory:function(t){return new(t||e)},imports:[[r.a,a.c,O.a]]}),e})()},I5hw:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return c.a})),n.d(t,"b",(function(){return c.b})),n.d(t,"e",(function(){return l})),n.d(t,"d",(function(){return b.a}));var a=n("2kYt"),r=n("0FLW"),o=n("q+Ep"),s=n("EM62");let i=(()=>{class e{}return e.\u0275mod=s.Lb({type:e}),e.\u0275inj=s.Kb({factory:function(t){return new(t||e)},imports:[[a.c,r.c,o.a]]}),e})();var c=n("yUsN");let l=(()=>{class e{}return e.\u0275mod=s.Lb({type:e}),e.\u0275inj=s.Kb({factory:function(t){return new(t||e)},imports:[[a.c]]}),e})();var b=n("LoTN")},LoTN:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("EM62"),r=n("5XID"),o=n("ZTXN");const s=["*"];let i=0;const c=new a.r("LABEL_DEFAULT_OPTIONS");let l=(()=>{class e{constructor(e){this._defaultOptions=e,this._stateChanges=new o.a,this._disabled=!1,this._negative=!1,this._id="nx-label-"+i++}set disabled(e){this._disabled=Object(r.b)(e),this._stateChanges.next()}get disabled(){return this._disabled}set negative(e){this._negative=Object(r.b)(e),this._stateChanges.next()}get negative(){return this._negative}set id(e){this._id!==e&&(this._id=e)}get id(){return this._id}set size(e){this._size=e,this._stateChanges.next()}get size(){return this._size||this._defaultOptions&&this._defaultOptions.size||"large"}}return e.\u0275fac=function(t){return new(t||e)(a.Nb(c,8))},e.\u0275cmp=a.Hb({type:e,selectors:[["nx-label"]],hostVars:9,hostBindings:function(e,t){2&e&&(a.Cb("disabled",t.disabled)("aria-labelledby",t.id||null)("id",t.id),a.Fb("nx-label--negative",t.negative)("nx-label--large","large"===t.size)("nx-label--small","small"===t.size))},inputs:{disabled:"disabled",negative:"negative",id:"id",size:"size"},ngContentSelectors:s,decls:2,vars:0,consts:[[1,"nx-label__content"]],template:function(e,t){1&e&&(a.jc(),a.Tb(0,"label",0),a.ic(1),a.Sb())},styles:["[_nghost-%COMP%]{display:block;color:var(--text-01)}.nx-label--small[_nghost-%COMP%]{font-size:var(--base-label-small-font-size);line-height:var(--base-label-small-line-height);font-weight:var(--base-label-small-font-weight);letter-spacing:var(--base-label-small-letter-spacing)}.nx-label--large[_nghost-%COMP%]{font-size:var(--base-label-large-font-size);line-height:var(--base-label-large-line-height);font-weight:var(--base-label-large-font-weight);letter-spacing:var(--base-label-large-letter-spacing)}[disabled=true][_nghost-%COMP%]   label[_ngcontent-%COMP%]{cursor:not-allowed}.nx-label--negative[_nghost-%COMP%]{color:var(--negative)}"],changeDetection:0}),e})()},VqxJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("EM62");const r=["nxCopytext",""],o=["*"];let s=(()=>{class e{constructor(){this.type="normal",this.negative=!1}set classNames(e){if(this._classNames===e)return;this._classNames=e;const[t=null]=this._classNames.match(/small|medium|normal|large/)||["normal"];this.type=t,this.negative=!!this._classNames.match(/negative/)}get classNames(){return this._classNames}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Hb({type:e,selectors:[["","nxCopytext",""]],hostVars:12,hostBindings:function(e,t){2&e&&a.Fb("nx-copy",!0)("nx-copy--small","small"===t.type)("nx-copy--medium","medium"===t.type)("nx-copy--normal","normal"===t.type)("nx-copy--large","large"===t.type)("nx-copy--negative",t.negative)},inputs:{classNames:["nxCopytext","classNames"]},attrs:r,ngContentSelectors:o,decls:1,vars:0,template:function(e,t){1&e&&(a.jc(),a.ic(0))},styles:["[_nghost-%COMP%]{margin:0 0 32px;font-size:var(--paragraph-03-font-size);line-height:var(--paragraph-03-line-height);font-weight:var(--paragraph-03-font-weight);letter-spacing:var(--paragraph-03-letter-spacing)}.nx-copy.nx-copy[_nghost-%COMP%]{font-weight:400}.nx-copy--negative[_nghost-%COMP%]{color:var(--negative)}.nx-copy--small[_nghost-%COMP%]{font-size:var(--paragraph-05-font-size);line-height:var(--paragraph-05-line-height);font-weight:var(--paragraph-05-font-weight);letter-spacing:var(--paragraph-05-letter-spacing)}.nx-copy--medium[_nghost-%COMP%]{font-size:var(--paragraph-04-font-size);line-height:var(--paragraph-04-line-height);font-weight:var(--paragraph-04-font-weight);letter-spacing:var(--paragraph-04-letter-spacing)}.nx-copy--large[_nghost-%COMP%]{font-size:var(--paragraph-02-font-size);line-height:var(--paragraph-02-line-height);font-weight:var(--paragraph-02-font-weight);letter-spacing:var(--paragraph-02-letter-spacing)}"],changeDetection:0}),e})()},yUsN:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return x}));var a=n("EM62"),r=n("5XID"),o=n("ZTXN"),s=n("kuMc"),i=n("2kYt"),c=n("VKQk"),l=n("vMP+");function b(e,t){1&e&&a.Ob(0,"nx-icon",7),2&e&&a.kc("name","exclamation-triangle")}function u(e,t){if(1&e&&(a.Rb(0),a.Hc(1,b,1,1,"nx-icon",3),a.Tb(2,"div",4),a.Tb(3,"div",5),a.Pb(4,6),a.Sb(),a.Sb(),a.Qb()),2&e){const e=a.ec(),t=a.rc(3);a.Bb(1),a.kc("ngIf",e.showIcon),a.Bb(3),a.kc("ngTemplateOutlet",t)}}function g(e,t){if(1&e&&(a.Tb(0,"nx-message",8),a.Pb(1,6),a.Sb()),2&e){a.ec();const e=a.rc(3);a.Bb(1),a.kc("ngTemplateOutlet",e)}}function p(e,t){1&e&&a.ic(0)}const m=["*"];let d=0;const h=new a.r("ERROR_DEFAULT_OPTIONS");let x=(()=>{class e{constructor(e,t){this._changeDetectorRef=e,this._defaultOptions=t,this._showIcon=!0,this._id="nx-error-"+d++,this._destroyed=new o.a,this._defaultOptions&&this._defaultOptions.changes&&this._defaultOptions.changes.pipe(Object(s.a)(this._destroyed)).subscribe(()=>{this._changeDetectorRef.markForCheck()})}set showIcon(e){this._showIcon=Object(r.b)(e),this._changeDetectorRef.markForCheck()}get showIcon(){return this._showIcon}set id(e){e&&e!==this._id&&(this._id=e,this._changeDetectorRef.markForCheck())}get id(){return this._id}set appearance(e){e!==this.appearance&&(this._appearance=e,this._changeDetectorRef.markForCheck())}get appearance(){return this._appearance||this._defaultOptions&&this._defaultOptions.appearance||"message"}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}}return e.\u0275fac=function(t){return new(t||e)(a.Nb(a.h),a.Nb(h,8))},e.\u0275cmp=a.Hb({type:e,selectors:[["nx-error"]],hostVars:4,hostBindings:function(e,t){2&e&&(a.Cb("role","alert")("id",t.id),a.Fb("nx-error--message","message"==t.appearance))},inputs:{showIcon:"showIcon",id:"id",appearance:"appearance"},ngContentSelectors:m,decls:4,vars:2,consts:[[4,"ngIf"],["nxContext","error",4,"ngIf"],["errorContent",""],["class","nx-error__icon",3,"name",4,"ngIf"],[1,"nx-error__content-wrapper"],[1,"nx-error__content"],[3,"ngTemplateOutlet"],[1,"nx-error__icon",3,"name"],["nxContext","error"]],template:function(e,t){1&e&&(a.jc(),a.Hc(0,u,5,2,"ng-container",0),a.Hc(1,g,2,1,"nx-message",1),a.Hc(2,p,1,0,"ng-template",null,2,a.Ic)),2&e&&(a.kc("ngIf","text"===t.appearance),a.Bb(1),a.kc("ngIf","message"===t.appearance))},directives:[i.t,i.A,c.a,l.a],styles:["[_nghost-%COMP%]{font-size:var(--base-error-simple-font-size);font-weight:var(--base-error-simple-font-weight);letter-spacing:var(--base-error-simple-letter-spacing);color:var(--base-error-color);width:100%;display:flex;text-align:left}[_nghost-%COMP%], [_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{line-height:var(--base-error-simple-line-height)}[_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{font-size:var(--base-error-simple-icon-size);margin-right:8px}@media screen and (-ms-high-contrast:active){[_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{color:windowText}}[_nghost-%COMP%]   .nx-error__content-wrapper[_ngcontent-%COMP%]{max-width:100%}[dir=rtl]   [_nghost-%COMP%]{text-align:right}[dir=rtl]   [_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{margin-right:0;margin-left:8px}.nx-error--message[_nghost-%COMP%]{margin:12px 0}.nx-error--message[_nghost-%COMP%]   nx-message[_ngcontent-%COMP%]{margin:0}"],changeDetection:0}),e})()}}]);