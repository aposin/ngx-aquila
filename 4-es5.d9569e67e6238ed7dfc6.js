!function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function n(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{BrvL:function(e,n,o){"use strict";o.d(n,"a",function(){return b});var c,i=o("ofXK"),r=o("mN63"),a=o("+IXF"),h=o("GU7r"),l=o("fXoL"),b=((c=function e(){t(this,e)}).\u0275fac=function(e){return new(e||c)},c.\u0275mod=l.Ob({type:c}),c.\u0275inj=l.Nb({imports:[[i.c,r.c,h.c],a.e,a.c]}),c);o("lKbI")},lKbI:function(e,o,c){"use strict";c.d(o,"b",function(){return y}),c.d(o,"a",function(){return S});var i=c("8LU1"),r=c("fXoL"),a=c("XNiG"),h=c("+IXF"),l=c("zB3U"),b=c("3Pt+"),s=c("ofXK"),_=c("u47x"),x=c("GU7r"),g=c("+vaC");function d(e,n){1&e&&(r.Wb(0,"div",3),r.lc(1,2),r.Vb())}var u=[[["nx-label"]],"*",[["nx-error"]]],k=["nx-label","*","nx-error"],C=["checkboxLabelWrapper"],v=["input"];function p(e,n){1&e&&r.Rb(0,"nx-icon",8)}function f(e,n){1&e&&r.Rb(0,"div",9)}var m=["*"],O=0,M=function e(n,o,c){t(this,e),this.checked=n,this.value=o,this.checkbox=c},P=function e(n,o){t(this,e),this.value=n,this.checkboxGroup=o},y=function(){var e=function(){function e(n,o,c,i,h){t(this,e),this._changeDetectorRef=n,this._errorStateMatcher=o,this._parentForm=c,this._parentFormGroup=i,this.ngControl=h,this._stateChanges=new a.a,this.errorState=!1,this.selectionChange=new r.o,this._id="nx-checkbox-group-"+O++,this._disabled=!1,this._negative=!1,this._onChange=function(){},this._onTouched=function(){},this.ngControl&&(this.ngControl.valueAccessor=this)}return n(e,[{key:"id",get:function(){return this._id},set:function(e){this._id!==e&&(this._id=e,this._changeDetectorRef.markForCheck())}},{key:"name",get:function(){return this._name},set:function(e){this._name=e,this._changeDetectorRef.markForCheck()}},{key:"disabled",get:function(){return this._disabled},set:function(e){this._disabled=Object(i.b)(e),this._label&&(this._label.disabled=this._disabled),this._stateChanges.next()}},{key:"negative",get:function(){return this._negative},set:function(e){this._negative=Object(i.b)(e),this._changeDetectorRef.markForCheck(),this._stateChanges.next()}},{key:"labelSize",get:function(){return this._labelSize},set:function(e){this._labelSize=e,this._stateChanges.next()}},{key:"required",get:function(){return this._required},set:function(e){this._required=Object(i.b)(e)}},{key:"ngAfterContentInit",value:function(){var e=this;setTimeout(function(){e._updateSelectedCheckboxFromValue()}),this._checkboxes.changes.subscribe(function(){e._value=e._checkboxes.filter(function(e){return e.checked}).map(function(e){return e.value}),e.ngControl&&e.ngControl.control.setValue(e._value),e._updateSelectedCheckboxFromValue()})}},{key:"ngDoCheck",value:function(){this.ngControl&&this.updateErrorState()}},{key:"ngOnDestroy",value:function(){this._stateChanges.complete()}},{key:"writeValue",value:function(e){this._value!==e&&(this._value=e,this._updateSelectedCheckboxFromValue())}},{key:"registerOnChange",value:function(e){this._onChange=e}},{key:"registerOnTouched",value:function(e){this._onTouched=e}},{key:"setDisabledState",value:function(e){this.disabled=e}},{key:"_updateSelectedCheckboxFromValue",value:function(){var e=this;this._checkboxes&&this._checkboxes.length&&this._value&&this._value.length&&this._checkboxes.map(function(n){n.checked=-1!==e._value.indexOf(n.value)})}},{key:"change",value:function(e){var n=this._checkboxes.filter(function(e){return e.checked}).map(function(e){return e.value});this._onChange(n),this._onTouched&&this._onTouched(),this.selectionChange.emit(new P(n,this))}},{key:"checkboxes",get:function(){return this._checkboxes.toArray()}},{key:"updateErrorState",value:function(){var e=this.errorState,n=this._errorStateMatcher.isErrorState(this.ngControl?this.ngControl.control:null,this._parentFormGroup||this._parentForm);n!==e&&(this.errorState=n,this._changeDetectorRef.markForCheck())}}]),e}();return e.\u0275fac=function(n){return new(n||e)(r.Qb(r.h),r.Qb(l.a),r.Qb(b.r,8),r.Qb(b.i,8),r.Qb(b.o,10))},e.\u0275cmp=r.Kb({type:e,selectors:[["nx-checkbox-group"]],contentQueries:function(e,n,t){var o;(1&e&&(r.Jb(t,h.d,1),r.Jb(t,S,1)),2&e)&&(r.tc(o=r.ec())&&(n._label=o.first),r.tc(o=r.ec())&&(n._checkboxes=o))},hostVars:9,hostBindings:function(e,n){2&e&&(r.Fb("id",n.id)("required",n.required)("disabled",n.disabled||null)("aria-labelledby",(null==n._label?null:n._label.id)||null)("role","group"),r.Ib("nx-checkbox-group",!0)("nx-checkbox-group--negative",n.negative))},inputs:{id:"id",name:"name",disabled:"disabled",negative:"negative",labelSize:"labelSize",required:"required"},outputs:{selectionChange:"selectionChange"},ngContentSelectors:k,decls:6,vars:1,consts:[[1,"nx-checkbox-group__label"],["class","nx-checkbox-group__errors",4,"ngIf"],[1,"nx-checkbox-group__controls"],[1,"nx-checkbox-group__errors"]],template:function(e,n){1&e&&(r.mc(u),r.Wb(0,"div"),r.Wb(1,"div",0),r.lc(2),r.Vb(),r.Hc(3,d,2,0,"div",1),r.Wb(4,"div",2),r.lc(5,1),r.Vb(),r.Vb()),2&e&&(r.Eb(3),r.nc("ngIf",n.errorState))},directives:[s.q],styles:["[_nghost-%COMP%]     nx-error{margin-bottom:8px}[_nghost-%COMP%]     nx-label{margin-bottom:16px;display:block}.nx-checkbox-group--negative[_nghost-%COMP%]     nx-error, .nx-checkbox-group--negative[_nghost-%COMP%]     nx-icon.nx-error__icon, .nx-checkbox-group--negative[_nghost-%COMP%]     nx-label{color:var(--negative)}"],changeDetection:0}),e}(),S=function(){var e=function(){function e(n,o,c,i,a,h,l){t(this,e),this._changeDetectorRef=n,this._errorStateMatcher=o,this.checkboxGroup=c,this.ngControl=i,this._parentForm=a,this._parentFormGroup=h,this._focusMonitor=l,this._id=(O++).toString(),this._disabled=!1,this._negative=!1,this._labelSize="small",this._checked=!1,this._name=null,this._indeterminate=!1,this.indeterminateChange=new r.o(!1),this.checkedChange=new r.o(!1),this.checkboxChange=new r.o,this.onChangeCallback=function(e){},this.onTouchedCallback=function(){},this.ngControl&&(this.ngControl.valueAccessor=this)}return n(e,[{key:"id",get:function(){return"nx-checkbox-".concat(this._id)},set:function(e){e!==this._id&&(this._id=e,this._changeDetectorRef.markForCheck())}},{key:"name",get:function(){return this.checkboxGroup&&this.checkboxGroup.name?this.checkboxGroup.name:this._name},set:function(e){this._name=e}},{key:"disabled",get:function(){return this.checkboxGroup&&this.checkboxGroup.disabled?this.checkboxGroup.disabled:this._disabled},set:function(e){var n=Object(i.b)(e);n!==this._disabled&&(this._disabled=n,this._changeDetectorRef.markForCheck())}},{key:"labelSize",get:function(){return this.checkboxGroup&&this.checkboxGroup.labelSize?this.checkboxGroup.labelSize:this._labelSize},set:function(e){this._labelSize=e,this._changeDetectorRef.markForCheck()}},{key:"negative",get:function(){return this.checkboxGroup&&this.checkboxGroup.negative?this.checkboxGroup.negative:this._negative},set:function(e){var n=Object(i.b)(e);n!==this._negative&&(this._negative=n,this._changeDetectorRef.markForCheck())}},{key:"checked",get:function(){return this._checked},set:function(e){var n=Object(i.b)(e);n!==this._checked&&(this._indeterminate&&this._setIndeterminate(!1),this._setChecked(n))}},{key:"indeterminate",get:function(){return this._indeterminate},set:function(e){var n=Object(i.b)(e);this._indeterminate!==n&&(this._checked&&this._setChecked(!1),this._setIndeterminate(n)),this._changeDetectorRef.markForCheck()}},{key:"required",get:function(){return this._required},set:function(e){this._required=Object(i.b)(e)}},{key:"value",get:function(){return this._value?this._value:this.checked.toString()},set:function(e){this._value=e,this._changeDetectorRef.markForCheck()}},{key:"labelHasContent",get:function(){return!!this._checkboxLabelWrapper.nativeElement.innerHTML.trim()}},{key:"labelContentChanged",value:function(){this._changeDetectorRef.detectChanges()}},{key:"_controlInvalid",value:function(){var e;return e=this.checkboxGroup&&this.checkboxGroup.ngControl?this.checkboxGroup.ngControl:this.ngControl?this.ngControl.control:null,this._errorStateMatcher.isErrorState(e,this._parentFormGroup||this._parentForm)}},{key:"ngOnInit",value:function(){var e=this;this.checkboxGroup&&(this.name=this.checkboxGroup.name,this._parentChangeSubscription=this.checkboxGroup._stateChanges.subscribe(function(){e._changeDetectorRef.markForCheck()}))}},{key:"ngAfterViewInit",value:function(){this._focusMonitor.monitor(this._nativeInput)}},{key:"ngOnDestroy",value:function(){this._parentChangeSubscription&&this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._nativeInput)}},{key:"_setIndeterminate",value:function(e){this._indeterminate=e,this.indeterminateChange.emit(this._indeterminate),this._changeDetectorRef.markForCheck()}},{key:"_setChecked",value:function(e){this._checked=e,this._changeDetectorRef.markForCheck()}},{key:"toggle",value:function(){this.checked=!this.checked,this.onChangeCallback(this.checked),null!==this.checkboxGroup&&this.checkboxGroup.change(this)}},{key:"writeValue",value:function(e){null===e&&(e=!1),e!==this.checked&&(this.checked=e)}},{key:"registerOnChange",value:function(e){this.onChangeCallback=e}},{key:"registerOnTouched",value:function(e){this.onTouchedCallback=e}},{key:"setDisabledState",value:function(e){this.disabled=e}},{key:"focus",value:function(e){this._focusMonitor.focusVia(this._nativeInput,e)}},{key:"touch",value:function(){this.onTouchedCallback()}},{key:"_onInputClick",value:function(e){e.stopPropagation(),this.disabled||(this.toggle(),this.checkedChange.emit(this._checked),this.checkboxChange.emit(this._createChangeEvent(this._checked)))}},{key:"_createChangeEvent",value:function(e){var n=new M(e,this.value,this);return n.checked=e,n.value=this.value,n.checkbox=this,n}}]),e}();return e.\u0275fac=function(n){return new(n||e)(r.Qb(r.h),r.Qb(l.a),r.Qb(y,8),r.Qb(b.o,10),r.Qb(b.r,8),r.Qb(b.i,8),r.Qb(_.g))},e.\u0275cmp=r.Kb({type:e,selectors:[["nx-checkbox"]],viewQuery:function(e,n){var t;(1&e&&(r.Nc(C,3),r.Nc(v,1)),2&e)&&(r.tc(t=r.ec())&&(n._checkboxLabelWrapper=t.first),r.tc(t=r.ec())&&(n._nativeInput=t.first))},hostVars:14,hostBindings:function(e,n){2&e&&(r.Fb("required",n.required)("aria-invalid",n._controlInvalid()||null),r.Ib("nx-checkbox",!0)("disabled",n.disabled)("nx-checkbox--label-large","large"===n.labelSize)("nx-checkbox--label-small","small"===n.labelSize)("nx-checkbox--negative",n.negative)("has-error",n._controlInvalid()||null))},inputs:{id:"id",name:"name",disabled:"disabled",labelSize:"labelSize",negative:"negative",checked:"checked",indeterminate:"indeterminate",required:"required",value:"value"},outputs:{indeterminateChange:"indeterminateChange",checkedChange:"checkedChange",checkboxChange:"checkboxChange"},ngContentSelectors:m,decls:9,vars:13,consts:[["type","checkbox",1,"nx-checkbox__input",3,"id","name","checked","indeterminate","disabled","value","blur","click"],["input",""],[1,"nx-checkbox__label",3,"id"],[1,"nx-checkbox__control"],["name","check","aria-hidden","true",4,"ngIf"],["class","nx-checkbox__indeterminate-indicator",4,"ngIf"],[1,"nx-checkbox__label-text",3,"cdkObserveContent"],["checkboxLabelWrapper",""],["name","check","aria-hidden","true"],[1,"nx-checkbox__indeterminate-indicator"]],template:function(e,n){1&e&&(r.mc(),r.Wb(0,"input",0,1),r.dc("blur",function(){return n.touch()})("click",function(e){return n._onInputClick(e)}),r.Vb(),r.Wb(2,"label",2),r.Wb(3,"span",3),r.Hc(4,p,1,0,"nx-icon",4),r.Hc(5,f,1,0,"div",5),r.Vb(),r.Wb(6,"div",6,7),r.dc("cdkObserveContent",function(){return n.labelContentChanged()}),r.lc(8),r.Vb(),r.Vb()),2&e&&(r.nc("id",n.id)("name",n.name)("checked",n.checked)("indeterminate",n.indeterminate)("disabled",n.disabled)("value",n.value),r.Fb("aria-labelledby",n.id+"-label"),r.Eb(2),r.Ib("has-label",n.labelHasContent),r.nc("id",n.id+"-label"),r.Fb("for",n.id),r.Eb(2),r.nc("ngIf",n.checked),r.Eb(1),r.nc("ngIf",n.indeterminate))},directives:[s.q,x.a,g.a],styles:["[_nghost-%COMP%]{display:block;position:relative}.has-error[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{background-color:var(--danger);border-color:var(--danger)}.has-error[_nghost-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{border-color:var(--danger)}.has-error[_nghost-%COMP%]   .nx-checkbox__indeterminate-indicator[_ngcontent-%COMP%]{background-color:var(--danger)}.nx-checkbox__input[_ngcontent-%COMP%]{opacity:0;position:absolute}.nx-checkbox__label[_ngcontent-%COMP%]{font-size:var(--checkbox-small-label-font-size);line-height:var(--checkbox-small-label-line-height);font-weight:var(--checkbox-small-label-font-weight);letter-spacing:var(--checkbox-small-label-letter-spacing);color:var(--checkbox-label-color);cursor:pointer;display:flex}.nx-checkbox--label-large[_nghost-%COMP%]   .nx-checkbox__label[_ngcontent-%COMP%]{font-size:var(--checkbox-large-label-font-size);line-height:var(--checkbox-large-label-line-height);font-weight:var(--checkbox-large-label-font-weight);letter-spacing:var(--checkbox-large-label-letter-spacing)}.nx-checkbox--label-large[_nghost-%COMP%]   .has-label[_ngcontent-%COMP%]   .nx-checkbox__label-text[_ngcontent-%COMP%]{margin-top:var(--checkbox-large-label-text-margin-top)}.nx-checkbox--label-large[_nghost-%COMP%]   .has-label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{margin-top:var(--checkbox-large-label-control-margin-top)}.nx-checkbox--label-large[_nghost-%COMP%]   .nx-checkbox__label-text[_ngcontent-%COMP%]{margin-left:var(--checkbox-large-label-text-margin-left)}[dir=rtl]   .nx-checkbox--label-large[_nghost-%COMP%]   .nx-checkbox__label-text[_ngcontent-%COMP%]{margin-left:0;margin-right:var(--checkbox-large-label-text-margin-left)}.nx-checkbox--label-small[_nghost-%COMP%]   .has-label[_ngcontent-%COMP%]   .nx-checkbox__label-text[_ngcontent-%COMP%]{margin-top:var(--checkbox-small-label-text-margin-top)}.nx-checkbox--label-small[_nghost-%COMP%]   .has-label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{margin-top:var(--checkbox-small-label-control-margin-top)}.nx-checkbox__label-text[_ngcontent-%COMP%]{padding:0;margin-left:var(--checkbox-small-label-text-margin-left)}.nx-checkbox__label-text[_ngcontent-%COMP%]:empty{display:none}[dir=rtl][_nghost-%COMP%]   .nx-checkbox__label-text[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-checkbox__label-text[_ngcontent-%COMP%]{margin-left:0;margin-right:var(--checkbox-small-label-text-margin-left)}.nx-checkbox__control[_ngcontent-%COMP%]{background-color:var(--checkbox-background-color);border:var(--checkbox-border-width) solid var(--checkbox-border-color);border-radius:var(--checkbox-border-radius);color:var(--checkbox-icon-color);font-size:var(--checkbox-icon-size);height:var(--checkbox-control-size);width:var(--checkbox-control-size);min-width:var(--checkbox-control-size);display:flex;justify-content:center;align-items:center;z-index:0;cursor:pointer}.nx-checkbox__indeterminate-indicator[_ngcontent-%COMP%]{color:var(--checkbox-indeterminate-color);background-color:var(--checkbox-indeterminate-color);box-sizing:content-box;height:0;width:8px;border:1px solid;border-radius:2px}.nx-checkbox__input[_ngcontent-%COMP%]:checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{background-color:var(--checkbox-selected-background-color);border-color:var(--checkbox-selected-border-color)}.nx-checkbox__input[_ngcontent-%COMP%]:disabled + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{background-color:var(--checkbox-disabled-background-color);border-color:var(--checkbox-disabled-border-color);color:var(--checkbox-disabled-icon-color);cursor:not-allowed}.nx-checkbox__input[_ngcontent-%COMP%]:checked:disabled + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{background-color:var(--checkbox-disabled-selected-background-color)}.nx-checkbox__input[_ngcontent-%COMP%]:disabled + .nx-checkbox__label[_ngcontent-%COMP%]{cursor:not-allowed;color:var(--checkbox-label-disabled-color)}.nx-checkbox__input[_ngcontent-%COMP%]:disabled + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__indeterminate-indicator[_ngcontent-%COMP%]{color:var(--checkbox-disabled-border-color);background-color:var(--checkbox-disabled-border-color)}.nx-checkbox--negative[_nghost-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{border-color:var(--negative);background-color:transparent}.nx-checkbox--negative[_nghost-%COMP%]   .nx-checkbox__label[_ngcontent-%COMP%]{color:var(--negative)}.nx-checkbox--negative[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{color:var(--negative-accent);background-color:var(--negative);border-color:var(--negative)}.nx-checkbox--negative[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:checked:disabled + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{color:var(--negative-dimmed);border-color:transparent;background-color:var(--negative-02-dimmed)}.nx-checkbox--negative[_nghost-%COMP%]   .nx-checkbox__indeterminate-indicator[_ngcontent-%COMP%]{color:var(--negative);background-color:var(--negative)}.nx-checkbox--negative[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:disabled + .nx-checkbox__label[_ngcontent-%COMP%]{color:var(--negative-dimmed)}.nx-checkbox--negative[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:disabled + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{background-color:var(--checkbox-disabled-negative-background-color);border-color:var(--negative-01-dimmed)}.nx-checkbox--negative[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:disabled + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__indeterminate-indicator[_ngcontent-%COMP%]{color:var(--negative-01-dimmed);background-color:var(--negative-01-dimmed)}[_nghost-%COMP%]:not(.nx-checkbox--negative):not(.has-error):hover   .nx-checkbox__input[_ngcontent-%COMP%]:not([disabled]):checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%], [_nghost-%COMP%]:not(.nx-checkbox--negative):not(.has-error):hover   .nx-checkbox__input[_ngcontent-%COMP%]:not([disabled]):checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__indeterminate-indicator[_ngcontent-%COMP%]{background-color:var(--checkbox-hover-background-color)}[_nghost-%COMP%]:not(.nx-checkbox--negative):not(.has-error):hover   .nx-checkbox__input[_ngcontent-%COMP%]:not([disabled]) + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{border-color:var(--checkbox-hover-border-color)}[_nghost-%COMP%]:not(.nx-checkbox--negative):active   .nx-checkbox__input[_ngcontent-%COMP%]:not([disabled]):checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%], [_nghost-%COMP%]:not(.nx-checkbox--negative):active   .nx-checkbox__input[_ngcontent-%COMP%]:not([disabled]):checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__indeterminate-indicator[_ngcontent-%COMP%]{background-color:var(--checkbox-active-background-color)}[_nghost-%COMP%]:not(.nx-checkbox--negative):active   .nx-checkbox__input[_ngcontent-%COMP%]:not([disabled]) + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{border-color:var(--checkbox-active-border-color)}.nx-checkbox__input.cdk-keyboard-focused[_ngcontent-%COMP%] + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{box-shadow:var(--focus-box-shadow)}@media screen and (-ms-high-contrast:active){.nx-checkbox__input.cdk-keyboard-focused[_ngcontent-%COMP%] + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}[_nghost-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{forced-color-adjust:none;border-color:buttonText!important;background-color:buttonFace!important}[_nghost-%COMP%]   .nx-checkbox__label-text[_ngcontent-%COMP%]{color:buttonText!important}[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{background-color:highlight!important;border-color:highlight!important;color:highlightText!important}}@media screen and (-ms-high-contrast:active){[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:indeterminate + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__indeterminate-indicator[_ngcontent-%COMP%]{color:buttonText!important}[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:disabled + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]   nx-icon[_ngcontent-%COMP%], [_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:disabled + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__label-text[_ngcontent-%COMP%]{color:GrayText!important}[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:disabled:indeterminate + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__indeterminate-indicator[_ngcontent-%COMP%]{color:GrayText!important}[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:disabled + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{border-color:GrayText!important}[_nghost-%COMP%]   .nx-checkbox__input[_ngcontent-%COMP%]:disabled:checked + .nx-checkbox__label[_ngcontent-%COMP%]   .nx-checkbox__control[_ngcontent-%COMP%]{background-color:buttonFace!important;border-color:GrayText!important;color:GrayText!important}}"],changeDetection:0}),e}()}}])}();