(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"+IXF":function(e,t,n){"use strict";n.d(t,"c",function(){return s}),n.d(t,"a",function(){return a.a}),n.d(t,"b",function(){return a.b}),n.d(t,"e",function(){return l}),n.d(t,"d",function(){return u.a});var r=n("ofXK"),o=n("mN63"),i=n("SqJ0"),c=n("fXoL");let s=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.Ob({type:e}),e.\u0275inj=c.Nb({imports:[[r.c,o.c,i.a]]}),e})();var a=n("aXeq");let l=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.Ob({type:e}),e.\u0275inj=c.Nb({imports:[[r.c]]}),e})();var u=n("Q3ZH")},"7Ynf":function(e,t,n){"use strict";n.r(t),n.d(t,"CodeExamplesModule",function(){return ee});var r=n("+IXF"),o=n("ofXK"),i=n("3Pt+"),c=n("XNiG"),s=n("fXoL");let a=(()=>{class e{constructor(){this.changes=new c.a,this.inputFieldAriaLabel="Enter Key",this.ofLabel="of"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=s.Mb({token:e,factory:e.\u0275fac}),e})(),l=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.Ob({type:e}),e.\u0275inj=s.Nb({providers:[a],imports:[[o.c,i.k,i.v]]}),e})();var u=n("FtGj"),d=n("8LU1"),h=n("zB3U");function g(e,t){if(1&e){const e=s.Xb();s.Wb(0,"input",1),s.dc("ngModelChange",function(n){s.yc(e);const r=t.index;return s.hc()._keyCode[r]=n})("input",function(t){return s.yc(e),s.hc()._selectNextInput(t)})("paste",function(t){return s.yc(e),s.hc()._pasteClipboard(t)})("blur",function(){return s.yc(e),s.hc()._onBlur()})("focus",function(){return s.yc(e),s.hc()._setFocusState()})("click",function(t){return s.yc(e),s.hc()._selectText(t)})("keydown",function(t){return s.yc(e),s.hc()._keydownAction(t)}),s.Vb()}if(2&e){const e=t.index,n=s.hc();s.nc("ngModel",n._keyCode[e])("ngClass",n._inputGap(e)),s.Fb("aria-label",n.getAriaLabel(e))("type",n.type)("tabindex",n.tabindex)("disabled",n.disabled?"":null)}}let b=(()=>{class e{constructor(e,t,n,r,o,i,c){this._changeDetectorRef=e,this._el=t,this._control=n,this._intl=r,this._errorStateMatcher=o,this._parentForm=i,this._parentFormGroup=c,this.errorState=!1,this._codeLength=6,this._type="text",this._isUpDown=!1,this._tabindex=0,this._keyCode=new Array(6),this._focused=!1,this._negative=!1,this._disabled=!1,this.propagateChange=e=>{},this.propagateTouch=e=>{},this._control&&(this._control.valueAccessor=this)}set codeLength(e){this._codeLength=e,this.setInputLength(),this._changeDetectorRef.markForCheck()}get codeLength(){return this._codeLength}set type(e){this._type=e,this._changeDetectorRef.markForCheck()}get type(){return this._type}set tabindex(e){this._tabindex=e,this._changeDetectorRef.markForCheck()}get tabindex(){return this._tabindex}set convertTo(e){this._convertTo=e,this._changeDetectorRef.markForCheck()}get convertTo(){return this._convertTo}set negative(e){const t=Object(d.b)(e);this._negative!==t&&(this._negative=t,this._changeDetectorRef.markForCheck())}get negative(){return this._negative}set disabled(e){const t=Object(d.b)(e);this._disabled!==t&&(this._disabled=t,this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled}ngDoCheck(){this._control&&this.updateErrorState()}setInputLength(){this._keyCode=new Array(this.codeLength?this.codeLength:6)}_convertLetterSize(e){return"\xdf"===e?e:"string"==typeof e?"upper"===this.convertTo?e.toUpperCase():"lower"===this.convertTo?e.toLowerCase():e:void 0}_keydownAction(e){const t=e.target.previousElementSibling,n=e.target.nextElementSibling;switch(e.keyCode){case u.p:return!1;case u.b:""===e.target.value&&t&&"INPUT"===t.tagName&&this.selectInput(t);break;case u.i:t&&"INPUT"===t.tagName&&(e.preventDefault(),this.selectInput(t));break;case u.n:n&&"INPUT"===n.tagName&&this.selectInput(n),e.preventDefault();break;case u.d:this._isUpDown=!0,"number"!==this._type||""!==e.target.value&&"0"!==e.target.value||e.preventDefault();break;case u.r:this._isUpDown=!0,"number"===this._type&&"9"===e.target.value&&e.preventDefault()}}_selectText(e){this.selectInput(e.target)}_selectNextInput(e){e.target.value=this._convertLetterSize(e.target.value.slice(0,1));const t=this._getFocusedInputIndex(e);if(this._keyCode[t]=e.target.value,this.propagateChange(this._keyCode.join("")),e.target.value&&(!this._isUpDown||"number"!==this.type)){const t=e.target.nextSibling;null!==t&&"INPUT"===t.tagName&&(t.focus(),""!==t.value&&this.selectInput(t))}this._isUpDown=!1}_pasteClipboard(e){let t=(e.clipboardData||window.clipboardData).getData("text"),n=0;const r=this._getFocusedInputIndex(e);t="number"===this.type?this._formatNumberInput(t):t;for(let o=r;o<this.codeLength;o++)this._keyCode[o]=this._convertLetterSize(t[n]),n++;this.propagateChange(this._keyCode.join("")),r+t.length<this.codeLength?this._el.nativeElement.children.item(r+t.length).focus():this._el.nativeElement.children.item(this.codeLength-1).focus(),e.preventDefault()}_getFocusedInputIndex(e){let t;for(let n=0;n<this._el.nativeElement.children.length;n++)e.srcElement===this._el.nativeElement.children.item(n)&&(t=n);return t}_formatNumberInput(e){let t="";for(let n=0;n<e.length;n++)e[n].match(/[0-9]{1}$/)&&(t+=e[n]);return t}_onBlur(){this._focused=!1,setTimeout(()=>{this._focused||this.propagateTouch(this._keyCode.join("")),this._changeDetectorRef.markForCheck()})}_setFocusState(){this._focused=!0}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}writeValue(e){if(e){const t=e.split("").slice(0,this.codeLength);for(let e=0;e<this.codeLength;e++)this._keyCode[e]=t[e]}else this.setInputLength();this._changeDetectorRef.markForCheck()}_trackByKeyCode(e,t){return e}_inputGap(e){switch(this.codeLength){case 4:case 6:case 8:if(e===this.codeLength/2)return"nx-code-input--field-with-gap";break;default:return}}registerOnChange(e){this.propagateChange=e}registerOnTouched(e){this.propagateTouch=e}updateErrorState(){const e=this.errorState,t=this._errorStateMatcher.isErrorState(this._control?this._control.control:null,this._parentFormGroup||this._parentForm);t!==e&&(this.errorState=t)}getAriaLabel(e){return`${this._intl.inputFieldAriaLabel} ${e+1} ${this._intl.ofLabel} ${this._keyCode.length}`}selectInput(e){e.focus();try{e.setSelectionRange(0,e.value.length)}catch(t){if(!(t instanceof DOMException&&"InvalidStateError"===t.name))throw t}}}return e.\u0275fac=function(t){return new(t||e)(s.Qb(s.h),s.Qb(s.l),s.Qb(i.o,10),s.Qb(a),s.Qb(h.a),s.Qb(i.r,8),s.Qb(i.i,8))},e.\u0275cmp=s.Kb({type:e,selectors:[["nx-code-input"]],hostVars:9,hostBindings:function(e,t){2&e&&(s.Fb("tabindex",-1),s.Ib("nx-code-input",!0)("has-error",t.errorState)("is-negative",t.negative)("is-disabled",t.disabled))},inputs:{codeLength:["length","codeLength"],type:"type",tabindex:"tabindex",convertTo:["nxConvertTo","convertTo"],negative:"negative",disabled:"disabled"},decls:1,vars:2,consts:[["class","nx-code-input__field","maxlength","1",3,"ngModel","ngClass","ngModelChange","input","paste","blur","focus","click","keydown",4,"ngFor","ngForOf","ngForTrackBy"],["maxlength","1",1,"nx-code-input__field",3,"ngModel","ngClass","ngModelChange","input","paste","blur","focus","click","keydown"]],template:function(e,t){1&e&&s.Hc(0,g,1,6,"input",0),2&e&&s.nc("ngForOf",t._keyCode)("ngForTrackBy",t._trackByKeyCode)},directives:[o.p,i.a,i.l,i.p,i.s,o.n],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{font-size:var(--code-input-font-size);line-height:var(--code-input-line-height);font-weight:var(--code-input-font-weight);letter-spacing:var(--code-input-letter-spacing);color:var(--code-input-color);margin:0 4px;text-align:center;border:0;outline:0;caret-color:var(--code-input-active-color);box-shadow:inset 0 -1px 0 0 var(--code-input-color);width:32px;border-radius:0;padding:0;background:transparent;box-sizing:border-box}[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]:focus{margin-bottom:-1px;color:var(--code-input-active-color);box-shadow:inset 0 -2px 0 0 var(--code-input-active-color)}[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]:first-child{margin-left:0}[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]:last-child{margin-right:0}[_nghost-%COMP%]   .nx-code-input--field-with-gap[_ngcontent-%COMP%]{margin-left:20px}[_nghost-%COMP%]:focus{outline:none}[dir=rtl]   [_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]:first-child{margin-right:0;margin-left:4px}[dir=rtl]   [_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]:last-child{margin-left:0;margin-right:4px}[dir=rtl]   [_nghost-%COMP%]   .nx-code-input--field-with-gap[_ngcontent-%COMP%]{margin-left:4px;margin-right:20px}.is-negative[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{caret-color:var(--negative);box-shadow:inset 0 -1px 0 0 var(--negative);color:var(--negative)}.is-negative[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]:focus{box-shadow:inset 0 -2px 0 0 var(--negative)}.has-error[_nghost-%COMP%]:not(.is-negative)   .nx-code-input__field[_ngcontent-%COMP%]{margin-bottom:-1px;font-weight:700;color:var(--code-input-error-color);box-shadow:inset 0 -1px 0 0 var(--code-input-error-color)}.has-error[_nghost-%COMP%]:not(.is-negative)   .nx-code-input__field[_ngcontent-%COMP%]:focus{box-shadow:inset 0 -2px 0 0 var(--code-input-error-color)}.has-error.is-negative[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{font-weight:700}.is-disabled[_nghost-%COMP%]{cursor:not-allowed}.is-disabled[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{cursor:not-allowed;color:var(--code-input-disabled-color);box-shadow:inset 0 -1px 0 0 nx-theme-color(code-input-disabled-color);box-shadow:inset 0 -1px 0 0 var(--code-input-disabled-color)}.is-disabled.is-negative[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{color:var(--negative-02-dimmed);box-shadow:inset 0 -1px 0 0 var(--negative-02-dimmed)}input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}@media screen and (forced-colors:active){.nx-code-input__field[_ngcontent-%COMP%]{border-bottom:1px solid buttonText!important}.nx-code-input__field[_ngcontent-%COMP%]:focus{border-bottom:2px solid highlight!important}.is-disabled[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{border-bottom:1px solid GrayText!important}}@media screen and (-ms-high-contrast:active){.nx-code-input__field[_ngcontent-%COMP%]{box-shadow:inset 0 -1px 0 0 buttonText}.nx-code-input__field[_ngcontent-%COMP%]:focus{box-shadow:inset 0 -2px 0 0 buttonText}.is-disabled[_nghost-%COMP%]   .nx-code-input__field[_ngcontent-%COMP%]{color:GrayText;box-shadow:inset 0 -1px 0 0 GrayText;opacity:1}}"],changeDetection:0}),e})();var p=n("LTpZ"),f=n("aXeq");function m(e,t){1&e&&(s.Wb(0,"nx-error",9),s.Jc(1," Entry is required. "),s.Vb())}function _(e,t){1&e&&(s.Wb(0,"nx-error",9),s.Jc(1," Entry must match pattern. "),s.Vb())}function x(e,t){1&e&&(s.Wb(0,"nx-error",9),s.Jc(1," Entry is too short. "),s.Vb())}function y(e,t){if(1&e&&(s.Wb(0,"div"),s.Hc(1,m,2,0,"nx-error",8),s.Hc(2,_,2,0,"nx-error",8),s.Hc(3,x,2,0,"nx-error",8),s.Vb()),2&e){const e=s.hc();s.Eb(1),s.nc("ngIf",e.keyCode.hasError("required")),s.Eb(1),s.nc("ngIf",e.keyCode.hasError("pattern")),s.Eb(1),s.nc("ngIf",e.keyCode.hasError("minlength"))}}let C=(()=>{class e{constructor(){this.inputValue=""}ngOnInit(){this.codeForm=new i.h({keyCode:new i.e({value:this.inputValue,disabled:!0},{validators:[i.y.required,i.y.pattern("[A-Z]+"),i.y.minLength(4)],updateOn:"submit"})})}get keyCode(){return this.codeForm.get("keyCode")}toggleDisabled(){this.keyCode.disabled?this.keyCode.enable():this.keyCode.disable()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Kb({type:e,selectors:[["code-input-disabled-example"]],decls:13,vars:4,consts:[[3,"formGroup"],["form","ngForm"],["nxConvertTo","upper","formControlName","keyCode",3,"length"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["nxButton","primary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(e,t){if(1&e){const e=s.Xb();s.Wb(0,"form",0,1),s.Rb(2,"nx-code-input",2,3),s.Hc(4,y,4,3,"div",4),s.Wb(5,"p"),s.Jc(6),s.Vb(),s.Wb(7,"button",5),s.Jc(8,"Submit"),s.Vb(),s.Wb(9,"button",6),s.dc("click",function(){return s.yc(e),s.uc(1).resetForm()}),s.Jc(10,"Clear"),s.Vb(),s.Wb(11,"button",7),s.dc("click",function(){return t.toggleDisabled()}),s.Jc(12,"Toggle disabled"),s.Vb(),s.Vb()}if(2&e){const e=s.uc(3);s.nc("formGroup",t.codeForm),s.Eb(2),s.nc("length",4),s.Eb(2),s.nc("ngIf",e.errorState),s.Eb(2),s.Lc("Disabled: ",t.keyCode.disabled,"")}},directives:[i.z,i.q,i.i,b,i.p,i.g,o.q,p.a,f.b],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"]}),e})();function v(e,t){1&e&&(s.Wb(0,"nx-error",8),s.Jc(1," Entry is required. "),s.Vb())}function k(e,t){1&e&&(s.Wb(0,"nx-error",8),s.Jc(1," Entry must match pattern. "),s.Vb())}function O(e,t){1&e&&(s.Wb(0,"nx-error",8),s.Jc(1," Entry is too short. "),s.Vb())}function w(e,t){if(1&e&&(s.Wb(0,"div"),s.Hc(1,v,2,0,"nx-error",7),s.Hc(2,k,2,0,"nx-error",7),s.Hc(3,O,2,0,"nx-error",7),s.Vb()),2&e){const e=s.hc();s.Eb(1),s.nc("ngIf",e.keyCode.hasError("required")),s.Eb(1),s.nc("ngIf",e.keyCode.hasError("pattern")),s.Eb(1),s.nc("ngIf",e.keyCode.hasError("minlength"))}}let I=(()=>{class e{constructor(){this.inputValue=""}ngOnInit(){this.codeForm=new i.h({keyCode:new i.e(this.inputValue,{validators:[i.y.required,i.y.pattern("[A-Z]+"),i.y.minLength(4)],updateOn:"submit"})})}get keyCode(){return this.codeForm.get("keyCode")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Kb({type:e,selectors:[["code-input-four-char-example"]],decls:10,vars:3,consts:[[3,"formGroup"],["form","ngForm"],["nxConvertTo","upper","formControlName","keyCode",3,"length"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(e,t){if(1&e){const e=s.Xb();s.Wb(0,"form",0,1),s.Rb(2,"nx-code-input",2,3),s.Hc(4,w,4,3,"div",4),s.Rb(5,"br"),s.Wb(6,"button",5),s.Jc(7,"Submit"),s.Vb(),s.Wb(8,"button",6),s.dc("click",function(){return s.yc(e),s.uc(1).resetForm()}),s.Jc(9,"Clear"),s.Vb(),s.Vb()}if(2&e){const e=s.uc(3);s.nc("formGroup",t.codeForm),s.Eb(2),s.nc("length",4),s.Eb(2),s.nc("ngIf",e.errorState)}},directives:[i.z,i.q,i.i,b,i.p,i.g,o.q,p.a,f.b],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"]}),e})();function E(e,t){1&e&&(s.Wb(0,"nx-error",8),s.Jc(1," Entry is required. "),s.Vb())}function M(e,t){1&e&&(s.Wb(0,"nx-error",8),s.Jc(1," Entry must match pattern. "),s.Vb())}function P(e,t){1&e&&(s.Wb(0,"nx-error",8),s.Jc(1," Entry is too short. "),s.Vb())}function V(e,t){if(1&e&&(s.Wb(0,"div"),s.Hc(1,E,2,0,"nx-error",7),s.Hc(2,M,2,0,"nx-error",7),s.Hc(3,P,2,0,"nx-error",7),s.Vb()),2&e){const e=s.hc();s.Eb(1),s.nc("ngIf",e.keyCode.hasError("required")),s.Eb(1),s.nc("ngIf",e.keyCode.hasError("pattern")),s.Eb(1),s.nc("ngIf",e.keyCode.hasError("minlength"))}}let F=(()=>{class e extends a{constructor(){super(...arguments),this.inputFieldAriaLabel="Key eingeben",this.ofLabel="von"}}return e.\u0275fac=function(t){return W(t||e)},e.\u0275prov=s.Mb({token:e,factory:e.\u0275fac}),e})();const W=s.Yb(F);let L=(()=>{class e{constructor(){this.inputValue=""}ngOnInit(){this.codeForm=new i.h({keyCode:new i.e(this.inputValue,{validators:[i.y.required,i.y.pattern("[A-Z]+"),i.y.minLength(5)],updateOn:"submit"})})}get keyCode(){return this.codeForm.get("keyCode")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Kb({type:e,selectors:[["code-input-localize-example"]],features:[s.Db([{provide:a,useClass:F}])],decls:10,vars:3,consts:[[3,"formGroup"],["form","ngForm"],["nxConvertTo","upper","formControlName","keyCode",3,"length"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(e,t){if(1&e){const e=s.Xb();s.Wb(0,"form",0,1),s.Rb(2,"nx-code-input",2,3),s.Hc(4,V,4,3,"div",4),s.Rb(5,"br"),s.Wb(6,"button",5),s.Jc(7,"Submit"),s.Vb(),s.Wb(8,"button",6),s.dc("click",function(){return s.yc(e),s.uc(1).resetForm()}),s.Jc(9,"Clear"),s.Vb(),s.Vb()}if(2&e){const e=s.uc(3);s.nc("formGroup",t.codeForm),s.Eb(2),s.nc("length",5),s.Eb(2),s.nc("ngIf",e.errorState)}},directives:[i.z,i.q,i.i,b,i.p,i.g,o.q,p.a,f.b],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"]}),e})();function T(e,t){1&e&&(s.Wb(0,"nx-error",8),s.Jc(1," Entry is required. "),s.Vb())}function q(e,t){1&e&&(s.Wb(0,"nx-error",8),s.Jc(1," Entry is too short. "),s.Vb())}function D(e,t){if(1&e&&(s.Wb(0,"div"),s.Hc(1,T,2,0,"nx-error",7),s.Hc(2,q,2,0,"nx-error",7),s.Vb()),2&e){const e=s.hc();s.Eb(1),s.nc("ngIf",e.keyCode.hasError("required")),s.Eb(1),s.nc("ngIf",e.keyCode.hasError("minlength"))}}let J=(()=>{class e{constructor(){this.inputValue=""}ngOnInit(){this.codeForm=new i.h({keyCode:new i.e(this.inputValue,{validators:[i.y.required,i.y.minLength(4)],updateOn:"change"})}),this.keyCode.valueChanges.subscribe(()=>{this.keyCode.valid&&"1234"!==this.keyCode.value&&this.codeForm.setValue({keyCode:"1234"})})}get keyCode(){return this.codeForm.get("keyCode")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Kb({type:e,selectors:[["code-input-model-example"]],decls:12,vars:4,consts:[[3,"formGroup"],["form","ngForm"],["nxConvertTo","upper","formControlName","keyCode",3,"length"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(e,t){if(1&e){const e=s.Xb();s.Wb(0,"form",0,1),s.Rb(2,"nx-code-input",2,3),s.Hc(4,D,3,2,"div",4),s.Rb(5,"br"),s.Wb(6,"button",5),s.Jc(7,"Submit"),s.Vb(),s.Wb(8,"button",6),s.dc("click",function(){return s.yc(e),s.uc(1).resetForm()}),s.Jc(9,"Clear"),s.Vb(),s.Wb(10,"p"),s.Jc(11),s.Vb(),s.Vb()}if(2&e){const e=s.uc(3);s.nc("formGroup",t.codeForm),s.Eb(2),s.nc("length",4),s.Eb(2),s.nc("ngIf",e.errorState),s.Eb(7),s.Lc(" Code input value: '",t.keyCode.value,"' ")}},directives:[i.z,i.q,i.i,b,i.p,i.g,o.q,p.a,f.b],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"]}),e})(),S=(()=>{class e{constructor(){this.inputValue=""}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Kb({type:e,selectors:[["code-input-negative-example"]],decls:2,vars:1,consts:[[1,"docs-inverse-container"],["negative","true",3,"length"]],template:function(e,t){1&e&&(s.Wb(0,"div",0),s.Rb(1,"nx-code-input",1),s.Vb()),2&e&&(s.Eb(1),s.nc("length",4))},directives:[b],styles:[""]}),e})();function R(e,t){1&e&&(s.Wb(0,"nx-error",8),s.Jc(1," Entry is required. "),s.Vb())}function z(e,t){1&e&&(s.Wb(0,"nx-error",8),s.Jc(1," Entry must match pattern. "),s.Vb())}function H(e,t){1&e&&(s.Wb(0,"nx-error",8),s.Jc(1," Entry is too short. "),s.Vb())}function N(e,t){if(1&e&&(s.Wb(0,"div"),s.Hc(1,R,2,0,"nx-error",7),s.Hc(2,z,2,0,"nx-error",7),s.Hc(3,H,2,0,"nx-error",7),s.Vb()),2&e){const e=s.hc();s.Eb(1),s.nc("ngIf",e.keyCode.hasError("required")),s.Eb(1),s.nc("ngIf",e.keyCode.hasError("pattern")),s.Eb(1),s.nc("ngIf",e.keyCode.hasError("minlength"))}}let B=(()=>{class e{constructor(){this.inputValue=""}ngOnInit(){this.codeForm=new i.h({keyCode:new i.e(this.inputValue,{validators:[i.y.required,i.y.minLength(7)],updateOn:"submit"})})}get keyCode(){return this.codeForm.get("keyCode")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Kb({type:e,selectors:[["code-input-seven-char-example"]],decls:10,vars:3,consts:[[3,"formGroup"],["form","ngForm"],["nxConvertTo","lower","formControlName","keyCode",3,"length"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(e,t){if(1&e){const e=s.Xb();s.Wb(0,"form",0,1),s.Rb(2,"nx-code-input",2,3),s.Hc(4,N,4,3,"div",4),s.Rb(5,"br"),s.Wb(6,"button",5),s.Jc(7,"Submit"),s.Vb(),s.Wb(8,"button",6),s.dc("click",function(){return s.yc(e),s.uc(1).resetForm()}),s.Jc(9,"Clear"),s.Vb(),s.Vb()}if(2&e){const e=s.uc(3);s.nc("formGroup",t.codeForm),s.Eb(2),s.nc("length",7),s.Eb(2),s.nc("ngIf",e.errorState)}},directives:[i.z,i.q,i.i,b,i.p,i.g,o.q,p.a,f.b],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"]}),e})();function G(e,t){1&e&&(s.Wb(0,"nx-error",8),s.Jc(1," Entry is required. "),s.Vb())}function X(e,t){1&e&&(s.Wb(0,"nx-error",8),s.Jc(1," Entry is too short. "),s.Vb())}function K(e,t){if(1&e&&(s.Wb(0,"div"),s.Hc(1,G,2,0,"nx-error",7),s.Hc(2,X,2,0,"nx-error",7),s.Vb()),2&e){const e=s.hc();s.Eb(1),s.nc("ngIf",e.keyCode.hasError("required")),s.Eb(1),s.nc("ngIf",e.keyCode.hasError("minlength"))}}let U=(()=>{class e{constructor(){this.inputValue=""}ngOnInit(){this.codeForm=new i.h({keyCode:new i.e(this.inputValue,{validators:[i.y.required,i.y.minLength(6)],updateOn:"blur"})})}get keyCode(){return this.codeForm.get("keyCode")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Kb({type:e,selectors:[["code-input-six-char-example"]],decls:10,vars:2,consts:[[3,"formGroup"],["form","ngForm"],["formControlName","keyCode"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(e,t){if(1&e){const e=s.Xb();s.Wb(0,"form",0,1),s.Rb(2,"nx-code-input",2,3),s.Hc(4,K,3,2,"div",4),s.Rb(5,"br"),s.Wb(6,"button",5),s.Jc(7,"Submit"),s.Vb(),s.Wb(8,"button",6),s.dc("click",function(){return s.yc(e),s.uc(1).resetForm()}),s.Jc(9,"Clear"),s.Vb(),s.Vb()}if(2&e){const e=s.uc(3);s.nc("formGroup",t.codeForm),s.Eb(4),s.nc("ngIf",e.errorState)}},directives:[i.z,i.q,i.i,b,i.p,i.g,o.q,p.a,f.b],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"],changeDetection:0}),e})();function A(e,t){1&e&&(s.Wb(0,"nx-error",8),s.Jc(1," Entry is required. "),s.Vb())}function j(e,t){1&e&&(s.Wb(0,"nx-error",8),s.Jc(1," Entry must match pattern. "),s.Vb())}function Q(e,t){1&e&&(s.Wb(0,"nx-error",8),s.Jc(1," Entry is too short. "),s.Vb())}function Z(e,t){if(1&e&&(s.Wb(0,"div"),s.Hc(1,A,2,0,"nx-error",7),s.Hc(2,j,2,0,"nx-error",7),s.Hc(3,Q,2,0,"nx-error",7),s.Vb()),2&e){const e=s.hc();s.Eb(1),s.nc("ngIf",e.keyCode.hasError("required")),s.Eb(1),s.nc("ngIf",e.keyCode.hasError("pattern")),s.Eb(1),s.nc("ngIf",e.keyCode.hasError("minlength"))}}let $=(()=>{class e{constructor(){this.inputValue=""}ngOnInit(){this.codeForm=new i.h({keyCode:new i.e(this.inputValue,{validators:[i.y.required,i.y.pattern(RegExp("^[0-9]*$")),i.y.minLength(4)],updateOn:"submit"})})}get keyCode(){return this.codeForm.get("keyCode")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Kb({type:e,selectors:[["code-input-type-example"]],decls:12,vars:3,consts:[[3,"formGroup"],["form","ngForm"],["formControlName","keyCode","type","number",3,"length"],["codeInput",""],[4,"ngIf"],["nxButton","primary small","type","submit"],["nxButton","secondary small","type","button",3,"click"],["class","nx-margin-y-xs",4,"ngIf"],[1,"nx-margin-y-xs"]],template:function(e,t){if(1&e){const e=s.Xb();s.Wb(0,"form",0,1),s.Wb(2,"label"),s.Jc(3,"Enter PIN code"),s.Vb(),s.Rb(4,"nx-code-input",2,3),s.Hc(6,Z,4,3,"div",4),s.Rb(7,"br"),s.Wb(8,"button",5),s.Jc(9,"Submit"),s.Vb(),s.Wb(10,"button",6),s.dc("click",function(){return s.yc(e),s.uc(1).resetForm()}),s.Jc(11,"Clear"),s.Vb(),s.Vb()}if(2&e){const e=s.uc(5);s.nc("formGroup",t.codeForm),s.Eb(4),s.nc("length",4),s.Eb(2),s.nc("ngIf",e.errorState)}},directives:[i.z,i.q,i.i,b,i.p,i.g,o.q,p.a,f.b],styles:["button[_ngcontent-%COMP%]{margin-right:4px}"]}),e})();var Y=n("ierq");let ee=(()=>{class e{static components(){return{"code-input-disabled":C,"code-input-four-char":I,"code-input-localize":L,"code-input-model":J,"code-input-negative":S,"code-input-seven-char":B,"code-input-six-char":U,"code-input-type":$}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.Ob({type:e}),e.\u0275inj=s.Nb({imports:[[l,r.c,Y.a]]}),e})()},Q3ZH:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n("fXoL"),o=n("8LU1"),i=n("XNiG");const c=["*"];let s=0;const a=new r.s("LABEL_DEFAULT_OPTIONS");let l=(()=>{class e{constructor(e){this._defaultOptions=e,this._stateChanges=new i.a,this._disabled=!1,this._negative=!1,this._id="nx-label-"+s++}set disabled(e){this._disabled=Object(o.b)(e),this._stateChanges.next()}get disabled(){return this._disabled}set negative(e){this._negative=Object(o.b)(e),this._stateChanges.next()}get negative(){return this._negative}set id(e){this._id!==e&&(this._id=e)}get id(){return this._id}set size(e){this._size=e,this._stateChanges.next()}get size(){return this._size||this._defaultOptions&&this._defaultOptions.size||"large"}}return e.\u0275fac=function(t){return new(t||e)(r.Qb(a,8))},e.\u0275cmp=r.Kb({type:e,selectors:[["nx-label"]],hostVars:9,hostBindings:function(e,t){2&e&&(r.Fb("disabled",t.disabled)("aria-labelledby",t.id||null)("id",t.id),r.Ib("nx-label--negative",t.negative)("nx-label--large","large"===t.size)("nx-label--small","small"===t.size))},inputs:{disabled:"disabled",negative:"negative",id:"id",size:"size"},ngContentSelectors:c,decls:2,vars:0,consts:[[1,"nx-label__content"]],template:function(e,t){1&e&&(r.mc(),r.Wb(0,"label",0),r.lc(1),r.Vb())},styles:["[_nghost-%COMP%]{display:block;color:var(--text-01)}.nx-label--small[_nghost-%COMP%]{font-size:var(--base-label-small-font-size);line-height:var(--base-label-small-line-height);font-weight:var(--base-label-small-font-weight);letter-spacing:var(--base-label-small-letter-spacing)}.nx-label--large[_nghost-%COMP%]{font-size:var(--base-label-large-font-size);line-height:var(--base-label-large-line-height);font-weight:var(--base-label-large-font-weight);letter-spacing:var(--base-label-large-letter-spacing)}[disabled=true][_nghost-%COMP%]   label[_ngcontent-%COMP%]{cursor:not-allowed}.nx-label--negative[_nghost-%COMP%]{color:var(--negative)}"],changeDetection:0}),e})()},aXeq:function(e,t,n){"use strict";n.d(t,"a",function(){return f}),n.d(t,"b",function(){return m});var r=n("fXoL"),o=n("8LU1"),i=n("XNiG"),c=n("1G5W"),s=n("ofXK"),a=n("+vaC"),l=n("Xe60");function u(e,t){1&e&&r.Rb(0,"nx-icon",7),2&e&&r.nc("name","exclamation-triangle")}function d(e,t){if(1&e&&(r.Ub(0),r.Hc(1,u,1,1,"nx-icon",3),r.Wb(2,"div",4),r.Wb(3,"div",5),r.Sb(4,6),r.Vb(),r.Vb(),r.Tb()),2&e){const e=r.hc(),t=r.uc(3);r.Eb(1),r.nc("ngIf",e.showIcon),r.Eb(3),r.nc("ngTemplateOutlet",t)}}function h(e,t){if(1&e&&(r.Wb(0,"nx-message",8),r.Sb(1,6),r.Vb()),2&e){r.hc();const e=r.uc(3);r.Eb(1),r.nc("ngTemplateOutlet",e)}}function g(e,t){1&e&&r.lc(0)}const b=["*"];let p=0;const f=new r.s("ERROR_DEFAULT_OPTIONS");let m=(()=>{class e{constructor(e,t){this._changeDetectorRef=e,this._defaultOptions=t,this._showIcon=!0,this._id="nx-error-"+p++,this._destroyed=new i.a,this._defaultOptions&&this._defaultOptions.changes&&this._defaultOptions.changes.pipe(Object(c.a)(this._destroyed)).subscribe(()=>{this._changeDetectorRef.markForCheck()})}set showIcon(e){this._showIcon=Object(o.b)(e),this._changeDetectorRef.markForCheck()}get showIcon(){return this._showIcon}set id(e){e&&e!==this._id&&(this._id=e,this._changeDetectorRef.markForCheck())}get id(){return this._id}set appearance(e){e!==this.appearance&&(this._appearance=e,this._changeDetectorRef.markForCheck())}get appearance(){return this._appearance||this._defaultOptions&&this._defaultOptions.appearance||"message"}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}}return e.\u0275fac=function(t){return new(t||e)(r.Qb(r.h),r.Qb(f,8))},e.\u0275cmp=r.Kb({type:e,selectors:[["nx-error"]],hostVars:4,hostBindings:function(e,t){2&e&&(r.Fb("role","alert")("id",t.id),r.Ib("nx-error--message","message"==t.appearance))},inputs:{showIcon:"showIcon",id:"id",appearance:"appearance"},ngContentSelectors:b,decls:4,vars:2,consts:[[4,"ngIf"],["nxContext","error",4,"ngIf"],["errorContent",""],["class","nx-error__icon",3,"name",4,"ngIf"],[1,"nx-error__content-wrapper"],[1,"nx-error__content"],[3,"ngTemplateOutlet"],[1,"nx-error__icon",3,"name"],["nxContext","error"]],template:function(e,t){1&e&&(r.mc(),r.Hc(0,d,5,2,"ng-container",0),r.Hc(1,h,2,1,"nx-message",1),r.Hc(2,g,1,0,"ng-template",null,2,r.Ic)),2&e&&(r.nc("ngIf","text"===t.appearance),r.Eb(1),r.nc("ngIf","message"===t.appearance))},directives:[s.q,s.u,a.a,l.a],styles:["[_nghost-%COMP%]{font-size:var(--base-error-simple-font-size);font-weight:var(--base-error-simple-font-weight);letter-spacing:var(--base-error-simple-letter-spacing);color:var(--base-error-color);width:100%;display:flex;text-align:left}[_nghost-%COMP%], [_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{line-height:var(--base-error-simple-line-height)}[_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{font-size:var(--base-error-simple-icon-size);margin-right:8px}@media screen and (-ms-high-contrast:active){[_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{color:windowText}}[_nghost-%COMP%]   .nx-error__content-wrapper[_ngcontent-%COMP%]{max-width:100%}[dir=rtl]   [_nghost-%COMP%]{text-align:right}[dir=rtl]   [_nghost-%COMP%]   .nx-error__icon[_ngcontent-%COMP%]{margin-right:0;margin-left:8px}"],changeDetection:0}),e})()},ierq:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n("tgBs"),o=n("/sJ9"),i=n("eV8M"),c=n("gkbm"),s=n("ofXK"),a=n("3Pt+"),l=n("fXoL");let u=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.Ob({type:e}),e.\u0275inj=l.Nb({imports:[[],s.c,a.k,a.v,c.b,i.a,o.a,r.a]}),e})()}}]);