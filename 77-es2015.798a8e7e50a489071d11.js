(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{kURe:function(n,t,e){"use strict";e.r(t),e.d(t,"RatingExamplesModule",function(){return P});var a=e("ofXK"),i=e("3Pt+"),r=e("mN63"),s=e("fXoL");let o=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=s.Nb({type:n}),n.\u0275inj=s.Mb({imports:[[a.c,r.c]]}),n})();var c=e("FtGj"),l=e("8LU1"),g=e("u47x"),b=e("+vaC");function d(n,t){if(1&n){const n=s.Wb();s.Vb(0,"nx-icon",3),s.cc("click",function(){s.xc(n);const e=t.$implicit;return s.gc().setSelection(e)})("keyup",function(e){s.xc(n);const a=t.$implicit;return s.gc().handleKeyUp(e,a)}),s.Ub()}if(2&n){const n=t.$implicit,e=s.gc();s.mc("tabindex",e.disabled?-1:0)("name",e.getIconName(n)),s.Eb("aria-label",e.getAriaLabel(n))("aria-checked",e.isSelected(n))}}function u(n,t){if(1&n&&(s.Vb(0,"div",4),s.Vb(1,"span",5),s.Ic(2),s.Ub(),s.Vb(3,"span",6),s.Ic(4),s.Ub(),s.Ub()),2&n){const n=s.gc();s.Db(2),s.Jc(n.startLabel),s.Db(2),s.Jc(n.endLabel)}}const h=function(){return[1,2,3,4,5]};let _=(()=>{class n{constructor(n,t){this._changeDetectorRef=n,this._focusMonitor=t,this._value=0,this._disabled=!1,this._negative=!1,this._startLabel=null,this._endLabel=null,this._ariaLabel=["1/5","2/5","3/5","4/5","5/5"],this.valueChange=new s.o,this.onTouchedCallback=()=>{},this.onChangeCallback=n=>{}}set value(n){this._value=Object(l.e)(n),this._changeDetectorRef.markForCheck()}get value(){return this._value}set disabled(n){this._disabled!==n&&(this._disabled=Object(l.b)(n),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled}set negative(n){this._negative!==n&&(this._negative=Object(l.b)(n),this._changeDetectorRef.markForCheck())}get negative(){return this._negative}set startLabel(n){this._startLabel=n,this._changeDetectorRef.markForCheck()}get startLabel(){return this._startLabel}set endLabel(n){this._endLabel=n,this._changeDetectorRef.markForCheck()}get endLabel(){return this._endLabel}set ariaLabel(n){this._ariaLabel=n,this._changeDetectorRef.markForCheck()}get ariaLabel(){return this._ariaLabel}ngAfterViewInit(){this.icons.forEach(n=>this._focusMonitor.monitor(n))}ngOnDestroy(){this.icons.forEach(n=>this._focusMonitor.stopMonitoring(n))}isSelected(n){return n<=this.value}setSelection(n){this.disabled||(this.value=n,this.valueChange.emit(n),this.onTouchedCallback(),this.onChangeCallback(this.value))}handleKeyUp(n,t){const e=n.keyCode;if(n.preventDefault(),n.stopPropagation(),e===c.f&&this.setSelection(t),e===c.n){this.value=Math.min(this.value+1,5);const n=this.icons.toArray()[this.value-1];this._focusMonitor.focusVia(n,"keyboard")}if(e===c.i){this.value=Math.max(this.value-1,1);const n=this.icons.toArray()[this.value-1];this._focusMonitor.focusVia(n,"keyboard")}}writeValue(n){this.value=n}registerOnChange(n){this.onChangeCallback=n}registerOnTouched(n){this.onTouchedCallback=n}setDisabledState(n){this.disabled=n}getAriaLabel(n){return this.ariaLabel[n-1]}getIconName(n){return"star"+(this.isSelected(n)?"":"-o")}}return n.\u0275fac=function(t){return new(t||n)(s.Pb(s.h),s.Pb(g.g))},n.\u0275cmp=s.Jb({type:n,selectors:[["nx-rating"]],viewQuery:function(n,t){if(1&n&&s.Mc(r.b,1,s.l),2&n){let n;s.sc(n=s.dc())&&(t.icons=n)}},hostVars:4,hostBindings:function(n,t){2&n&&s.Hb("nx-rating--negative",t.negative)("nx-rating--disabled",t.disabled)},inputs:{value:["nxValue","value"],disabled:["nxDisabled","disabled"],negative:["nxNegative","negative"],startLabel:["nxStartLabel","startLabel"],endLabel:["nxEndLabel","endLabel"],ariaLabel:["nxAriaLabel","ariaLabel"]},outputs:{valueChange:"nxValueChange"},features:[s.Cb([{provide:i.n,useExisting:Object(s.W)(()=>n),multi:!0}])],decls:3,vars:3,consts:[["role","radiogroup",1,"nx-rating__container"],["role","radio","class","nx-rating__icon","size","m",3,"tabindex","name","click","keyup",4,"ngFor","ngForOf"],["class","nx-rating__label",4,"ngIf"],["role","radio","size","m",1,"nx-rating__icon",3,"tabindex","name","click","keyup"],[1,"nx-rating__label"],[1,"nx-rating__label--start"],[1,"nx-rating__label--end"]],template:function(n,t){1&n&&(s.Vb(0,"div",0),s.Gc(1,d,1,4,"nx-icon",1),s.Ub(),s.Gc(2,u,5,2,"div",2)),2&n&&(s.Db(1),s.mc("ngForOf",s.pc(2,h)),s.Db(1),s.mc("ngIf",t.startLabel||t.endLabel))},directives:[a.p,a.q,b.a],styles:["[_nghost-%COMP%]{display:inline-block}.nx-rating--negative[_nghost-%COMP%]   .nx-rating__icon[_ngcontent-%COMP%], .nx-rating--negative[_nghost-%COMP%]   .nx-rating__label[_ngcontent-%COMP%]{color:var(--negative)}.nx-rating--disabled[_nghost-%COMP%]{cursor:not-allowed;outline:none}.nx-rating--disabled[_nghost-%COMP%]   .nx-rating__label[_ngcontent-%COMP%]{color:var(--rating-disabled-label-color)}.nx-rating--disabled[_nghost-%COMP%]   .nx-rating__icon[_ngcontent-%COMP%]{color:var(--rating-disabled-icon-color);cursor:not-allowed}.nx-rating__container[_ngcontent-%COMP%]{display:flex}.nx-rating__label[_ngcontent-%COMP%]{display:flex;font-size:var(--rating-label-font-size);line-height:var(--rating-label-line-height);font-weight:var(--rating-label-font-weight);letter-spacing:var(--rating-label-letter-spacing);color:var(--rating-label-color)}.nx-rating__label--end[_ngcontent-%COMP%]{margin-left:auto}[dir=rtl][_nghost-%COMP%]   .nx-rating__label--end[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-rating__label--end[_ngcontent-%COMP%]{margin-right:auto;margin-left:0}.nx-rating__icon[_ngcontent-%COMP%]{font-size:var(--rating-icon-size);color:var(--rating-icon-color);width:auto;background:none;border:none;margin-right:16px;cursor:pointer;outline:none}[dir=rtl][_nghost-%COMP%]   .nx-rating__icon[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-rating__icon[_ngcontent-%COMP%]{margin-right:0;margin-left:16px}.nx-rating__icon[_ngcontent-%COMP%]:last-child{margin-right:0}[dir=rtl][_nghost-%COMP%]   .nx-rating__icon[_ngcontent-%COMP%]:last-child, [dir=rtl]   [_nghost-%COMP%]   .nx-rating__icon[_ngcontent-%COMP%]:last-child{margin-right:0;margin-left:0}.nx-rating__icon.cdk-keyboard-focused[_ngcontent-%COMP%]{box-shadow:var(--focus-box-shadow);border-radius:4px}@media screen and (-ms-high-contrast:active){.nx-rating__icon.cdk-keyboard-focused[_ngcontent-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}@media screen and (-ms-high-contrast:active){.nx-rating--negative[_nghost-%COMP%]   .nx-rating__icon[_ngcontent-%COMP%], [_nghost-%COMP%]   .nx-rating__icon[_ngcontent-%COMP%]{color:buttonText}.nx-rating--negative[_nghost-%COMP%]   .nx-rating__label[_ngcontent-%COMP%], [_nghost-%COMP%]   .nx-rating__label[_ngcontent-%COMP%]{-ms-high-contrast-adjust:none;color:CanvasText}.nx-rating--disabled[_nghost-%COMP%]   .nx-rating__icon[_ngcontent-%COMP%]{color:GrayText}.nx-rating--disabled[_nghost-%COMP%]   .nx-rating__label[_ngcontent-%COMP%]{color:windowText}}"],changeDetection:0}),n})();const x=function(){return["Hated","Didn't like it","Just OK","Liked it","Loved it"]};let p=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Jb({type:n,selectors:[["rating-accessibility-example"]],decls:1,vars:2,consts:[[3,"nxAriaLabel"]],template:function(n,t){1&n&&s.Qb(0,"nx-rating",0),2&n&&s.mc("nxAriaLabel",s.pc(1,x))},directives:[_],styles:[""]}),n})(),f=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Jb({type:n,selectors:[["rating-basic-example"]],decls:1,vars:0,consts:[["nxStartLabel","poor","nxEndLabel","great"]],template:function(n,t){1&n&&s.Qb(0,"nx-rating",0)},directives:[_],styles:[""]}),n})(),m=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Jb({type:n,selectors:[["rating-disabled-example"]],decls:1,vars:1,consts:[["nxStartLabel","poor","nxEndLabel","great",3,"nxDisabled"]],template:function(n,t){1&n&&s.Qb(0,"nx-rating",0),2&n&&s.mc("nxDisabled",!0)},directives:[_],styles:[""]}),n})(),v=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Jb({type:n,selectors:[["rating-negative-example"]],decls:2,vars:1,consts:[[1,"docs-inverse-container"],["nxStartLabel","poor","nxEndLabel","great",3,"nxNegative"]],template:function(n,t){1&n&&(s.Vb(0,"div",0),s.Qb(1,"nx-rating",1),s.Ub()),2&n&&(s.Db(1),s.mc("nxNegative",!0))},directives:[_],styles:[""]}),n})(),C=(()=>{class n{constructor(n){this.fb=n,this.createForm()}createForm(){this.testForm=this.fb.group({rating:[1]})}}return n.\u0275fac=function(t){return new(t||n)(s.Pb(i.d))},n.\u0275cmp=s.Jb({type:n,selectors:[["rating-reactive-example"]],decls:5,vars:4,consts:[[3,"formGroup"],["formControlName","rating"]],template:function(n,t){1&n&&(s.Vb(0,"form",0),s.Qb(1,"nx-rating",1),s.Ub(),s.Vb(2,"p"),s.Ic(3),s.hc(4,"json"),s.Ub()),2&n&&(s.mc("formGroup",t.testForm),s.Db(3),s.Kc("Form value: ",s.ic(4,2,t.testForm.value),""))},directives:[i.A,i.q,i.i,_,i.p,i.g],pipes:[a.h],styles:[""]}),n})(),M=(()=>{class n{constructor(){this.simpleBinding=1}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Jb({type:n,selectors:[["rating-simple-example"]],decls:3,vars:2,consts:[[3,"nxValue","nxValueChange"]],template:function(n,t){1&n&&(s.Vb(0,"nx-rating",0),s.cc("nxValueChange",function(n){return t.simpleBinding=n}),s.Ub(),s.Vb(1,"p"),s.Ic(2),s.Ub()),2&n&&(s.mc("nxValue",t.simpleBinding),s.Db(2),s.Kc("Value: ",t.simpleBinding,""))},directives:[_],styles:[""]}),n})(),O=(()=>{class n{constructor(){this.ngModelBinding=1}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Jb({type:n,selectors:[["rating-template-example"]],decls:3,vars:2,consts:[[3,"ngModel","ngModelChange"]],template:function(n,t){1&n&&(s.Vb(0,"nx-rating",0),s.cc("ngModelChange",function(n){return t.ngModelBinding=n}),s.Ub(),s.Vb(1,"p"),s.Ic(2),s.Ub()),2&n&&(s.mc("ngModel",t.ngModelBinding),s.Db(2),s.Kc("Value: ",t.ngModelBinding,""))},directives:[_,i.p,i.s],styles:[""]}),n})(),P=(()=>{class n{static components(){return{"rating-accessibility":p,"rating-basic":f,"rating-disabled":m,"rating-negative":v,"rating-reactive":C,"rating-simple":M,"rating-template":O}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=s.Nb({type:n}),n.\u0275inj=s.Mb({imports:[[o,i.v,i.k,a.c]]}),n})()}}]);