(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{Dr49:function(e,t,n){"use strict";n.d(t,"a",function(){return g});var r=n("8LU1"),o=n("XNiG"),i=n("quSY"),a=n("VRyK"),s=n("1G5W"),l=n("gcYM"),c=n("3E0/"),d=n("tg6J"),h=n("fXoL");const u=["*"];let g=(()=>{class e{constructor(e,t){this._changeDetectorRef=e,this._ngZone=t,this._negative=!1,this.resizeEvent$=new o.a,this._destroyed=new o.a,this.updatePopoversSubscription=i.a.EMPTY,this._size="large",this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.pipe(Object(s.a)(this._destroyed)).subscribe(()=>{this.updatePositionPopovers()})})}set negative(e){this._negative=Object(r.b)(e)}get negative(){return this._negative}set size(e){this._size=e,this._changeDetectorRef.markForCheck()}get size(){return this._size}onResize(e){this.resizeEvent$.next()}ngAfterContentInit(){const e=this._words.map(e=>e.inputChanges),t=Object(a.a)(...e);this.updatePopoversSubscription=t.subscribe(()=>{this.updatePositionPopovers()}),this.resizeObservable=this.resizeEvent$.pipe(Object(l.a)(500),Object(c.a)(100)),this.resizeObservable.subscribe(()=>this.resizeWords())}resizeWords(){this._words.forEach(e=>{e.updateCurrentTextWidth()})}ngOnDestroy(){this.updatePopoversSubscription.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}updatePositionPopovers(){this._words&&this._words.forEach(e=>{e.repositionError()})}}return e.\u0275fac=function(t){return new(t||e)(h.Qb(h.h),h.Qb(h.B))},e.\u0275cmp=h.Kb({type:e,selectors:[["nx-natural-language-form"]],contentQueries:function(e,t,n){if(1&e&&h.Jb(n,d.a,0),2&e){let e;h.tc(e=h.ec())&&(t._words=e)}},hostVars:6,hostBindings:function(e,t){1&e&&h.dc("orientationchange",function(e){return t.onResize(e)},!1,h.xc)("resize",function(e){return t.onResize(e)},!1,h.xc),2&e&&h.Ib("is-negative",t.negative)("nx-natural-language-form--small","small"===t.size)("nx-natural-language-form--large","large"===t.size)},inputs:{negative:["nxNegative","negative"],size:"size"},ngContentSelectors:u,decls:2,vars:0,consts:[[1,"nx-natural-language-form__wrapper"]],template:function(e,t){1&e&&(h.mc(),h.Wb(0,"div",0),h.lc(1),h.Vb())},styles:["[_nghost-%COMP%]{display:block;font-size:var(--natural-language-form-large-font-size);line-height:var(--natural-language-form-large-line-height);font-weight:var(--natural-language-form-large-font-weight);letter-spacing:var(--natural-language-form-large-letter-spacing);color:var(--natural-language-form-text-color);padding-top:72px;padding-bottom:80px}[_nghost-%COMP%]     .c-input{font-size:inherit;line-height:inherit}[_nghost-%COMP%]     nx-word+nx-word{margin-left:2px}[dir=rtl]   [_nghost-%COMP%]     nx-word+nx-word{margin-right:2px;margin-left:0}.is-negative[_nghost-%COMP%]{color:var(--negative)}@media (max-width:991px){[_nghost-%COMP%]{font-size:var(--natural-language-form-small-font-size);line-height:var(--natural-language-form-small-line-height);font-weight:var(--natural-language-form-small-font-weight);letter-spacing:var(--natural-language-form-small-letter-spacing)}}.nx-natural-language-form__wrapper[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.nx-natural-language-form__wrapper[_ngcontent-%COMP%] >   *{margin-bottom:8px}.nx-natural-language-form--small[_nghost-%COMP%]{font-size:var(--natural-language-form-small-font-size);line-height:var(--natural-language-form-small-line-height);font-weight:var(--natural-language-form-small-font-weight);letter-spacing:var(--natural-language-form-small-letter-spacing)}.nx-natural-language-form--small[_nghost-%COMP%]     .c-input{font-size:inherit;line-height:inherit}"],changeDetection:0}),e})()},QcvW:function(e,t,n){"use strict";n.r(t),n.d(t,"NaturalExamplesModule",function(){return O});var r=n("AqTC"),o=n("HMmR"),i=n("p9I2"),a=n("fXoL"),s=n("Dr49"),l=n("tg6J"),c=n("nK+a"),d=n("3Pt+"),h=n("v44Z");let u=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Kb({type:e,selectors:[["natural-language-form-basic-example"]],decls:7,vars:0,consts:[["nxLabel","Provide this required field"],["nxInput","","ngModel","","required",""],["nxError",""]],template:function(e,t){1&e&&(a.Wb(0,"nx-natural-language-form"),a.Jc(1," Here is a word "),a.Wb(2,"nx-word",0),a.Rb(3,"input",1),a.Wb(4,"div",2),a.Jc(5,"This field is required."),a.Vb(),a.Vb(),a.Jc(6," with some following copy.\n"),a.Vb())},directives:[s.a,l.a,c.b,d.a,d.p,d.s,d.w,h.a],styles:[""]}),e})();var g=n("0KkY"),p=n("eKOL"),b=n("ofXK"),f=n("LTpZ");function m(e,t){1&e&&(a.Wb(0,"div",6),a.Jc(1,"This field is required."),a.Vb())}function w(e,t){1&e&&(a.Wb(0,"div",6),a.Jc(1,"Only numbers are allowed."),a.Vb())}let x=(()=>{class e{constructor(e){this.fb=e,this.buildForm()}buildForm(){this.naturalForm=this.fb.group({who:new d.e("",[d.y.required]),city:new d.e("",[d.y.required]),spots:new d.e("",[d.y.pattern("[0-9]*"),d.y.required])})}validate(){Object.keys(this.naturalForm.controls).forEach(e=>{this.naturalForm.get(e).markAsTouched({onlySelf:!0})})}}return e.\u0275fac=function(t){return new(t||e)(a.Qb(d.d))},e.\u0275cmp=a.Kb({type:e,selectors:[["natural-language-form-extended-example"]],decls:36,vars:9,consts:[[3,"formGroup"],["nxSize","long","nxLabel","Always a label"],["formControlName","who"],["nxValue","student"],["nxValue","philosopher"],["nxValue","sailor"],["nxError",""],["nxSize","short","nxLabel","Always a label"],["nxInput","","formControlName","city"],["nxSize","regular","nxLabel","Always a label"],["nxInput","","formControlName","spots"],["nxError","",4,"ngIf"],["nxButton","","type","submit",3,"click"]],template:function(e,t){1&e&&(a.Wb(0,"form"),a.Wb(1,"nx-natural-language-form",0),a.Wb(2,"span"),a.Jc(3,"I want to be"),a.Vb(),a.Wb(4,"nx-word",1),a.Wb(5,"nx-dropdown",2),a.Wb(6,"nx-dropdown-item",3),a.Jc(7,"a Student"),a.Vb(),a.Wb(8,"nx-dropdown-item",4),a.Jc(9,"a Philosopher"),a.Vb(),a.Wb(10,"nx-dropdown-item",5),a.Jc(11,"a Sailor"),a.Vb(),a.Vb(),a.Wb(12,"div",6),a.Jc(13,"We need to know about the type of role you want."),a.Vb(),a.Vb(),a.Wb(14,"span"),a.Jc(15,"and visit the city of"),a.Vb(),a.Wb(16,"nx-word",7),a.Rb(17,"input",8),a.Wb(18,"div",6),a.Jc(19,"This field is required."),a.Vb(),a.Vb(),a.Wb(20,"span"),a.Jc(21,"and see"),a.Vb(),a.Wb(22,"nx-word",9),a.Rb(23,"input",10),a.Hc(24,m,2,0,"div",11),a.Hc(25,w,2,0,"div",11),a.Vb(),a.Wb(26,"span"),a.Jc(27," nice spots."),a.Vb(),a.Vb(),a.Wb(28,"button",12),a.dc("click",function(){return t.validate()}),a.Jc(29,"submit"),a.Vb(),a.Vb(),a.Wb(30,"p"),a.Jc(31),a.ic(32,"json"),a.Rb(33,"br"),a.Jc(34),a.ic(35,"json"),a.Vb()),2&e&&(a.Eb(1),a.nc("formGroup",t.naturalForm),a.Eb(23),a.nc("ngIf",t.naturalForm.controls.spots.hasError("required")),a.Eb(1),a.nc("ngIf",t.naturalForm.controls.spots.hasError("pattern")),a.Eb(6),a.Lc(" Form value: ",a.jc(32,5,t.naturalForm.value),""),a.Eb(3),a.Lc(" Form status: ",a.jc(35,7,t.naturalForm.status),"\n"))},directives:[d.z,d.q,d.r,s.a,d.i,l.a,g.a,d.p,d.g,p.a,h.a,c.b,d.a,b.q,f.a],pipes:[b.h],styles:[""]}),e})(),v=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Kb({type:e,selectors:[["natural-language-form-negative-example"]],decls:6,vars:0,consts:[[1,"docs-inverse-container"],["nxNegative","true"],["nxLabel","Always a label"],["nxInput",""]],template:function(e,t){1&e&&(a.Wb(0,"div",0),a.Wb(1,"nx-natural-language-form",1),a.Jc(2," Here is a word "),a.Wb(3,"nx-word",2),a.Rb(4,"input",3),a.Jc(5,". "),a.Vb(),a.Vb(),a.Vb())},directives:[s.a,l.a,c.b],styles:[""]}),e})(),_=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Kb({type:e,selectors:[["natural-language-form-sizes-example"]],decls:44,vars:0,consts:[["nxLabel","Provide this required field"],["nxInput","","ngModel","","required",""],["nxError",""],["nxSize","long","nxLabel","Always a label"],["required","","ngModel",""],["nxValue","option1"],["nxValue","option2"],["nxValue","option3"],["nxValue","option4"],["nxValue","option5"],["size","small"]],template:function(e,t){1&e&&(a.Wb(0,"nx-natural-language-form"),a.Jc(1," This is a large NLF "),a.Wb(2,"nx-word",0),a.Rb(3,"input",1),a.Wb(4,"div",2),a.Jc(5,"This field is required."),a.Vb(),a.Vb(),a.Jc(6," with "),a.Wb(7,"nx-word",3),a.Wb(8,"nx-dropdown",4),a.Wb(9,"nx-dropdown-item",5),a.Jc(10,"Option 1"),a.Vb(),a.Wb(11,"nx-dropdown-item",6),a.Jc(12,"Option 2"),a.Vb(),a.Wb(13,"nx-dropdown-item",7),a.Jc(14,"Option 3"),a.Vb(),a.Wb(15,"nx-dropdown-item",8),a.Jc(16,"Option 4"),a.Vb(),a.Wb(17,"nx-dropdown-item",9),a.Jc(18,"Option 5"),a.Vb(),a.Vb(),a.Wb(19,"div",2),a.Jc(20,"Please select an option"),a.Vb(),a.Vb(),a.Jc(21," .\n"),a.Vb(),a.Wb(22,"nx-natural-language-form",10),a.Jc(23," This is a small NLF "),a.Wb(24,"nx-word",0),a.Rb(25,"input",1),a.Wb(26,"div",2),a.Jc(27,"This field is required."),a.Vb(),a.Vb(),a.Jc(28," with "),a.Wb(29,"nx-word",3),a.Wb(30,"nx-dropdown",4),a.Wb(31,"nx-dropdown-item",5),a.Jc(32,"Option 1"),a.Vb(),a.Wb(33,"nx-dropdown-item",6),a.Jc(34,"Option 2"),a.Vb(),a.Wb(35,"nx-dropdown-item",7),a.Jc(36,"Option 3"),a.Vb(),a.Wb(37,"nx-dropdown-item",8),a.Jc(38,"Option 4"),a.Vb(),a.Wb(39,"nx-dropdown-item",9),a.Jc(40,"Option 5"),a.Vb(),a.Vb(),a.Wb(41,"div",2),a.Jc(42,"Please select an option"),a.Vb(),a.Vb(),a.Jc(43," .\n"),a.Vb())},directives:[s.a,l.a,c.b,d.a,d.p,d.s,d.w,h.a,g.a,p.a],styles:[""]}),e})();var C=n("ierq");let O=(()=>{class e{static components(){return{"natural-language-form-basic":u,"natural-language-form-extended":x,"natural-language-form-negative":v,"natural-language-form-sizes":_}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.Ob({type:e}),e.\u0275inj=a.Nb({imports:[[i.a,o.b,r.b,C.a]]}),e})()},ierq:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var r=n("tgBs"),o=n("/sJ9"),i=n("eV8M"),a=n("gkbm"),s=n("ofXK"),l=n("3Pt+"),c=n("fXoL");let d=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.Ob({type:e}),e.\u0275inj=c.Nb({imports:[[],s.c,l.k,l.v,a.b,i.a,o.a,r.a]}),e})()},p9I2:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return l.a});var r=n("+Gny"),o=n("AqTC"),i=n("ofXK"),a=n("fXoL");let s=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.Ob({type:e}),e.\u0275inj=a.Nb({imports:[[i.c,o.b,r.a]]}),e})();n("Dr49");var l=n("tg6J")},tg6J:function(e,t,n){"use strict";n.d(t,"a",function(){return w});var r=n("hbct"),o=n("zB3U"),i=n("rDax"),a=n("JX91"),s=n("quSY"),l=n("XNiG"),c=n("HMmR"),d=n("+rOU"),h=n("fXoL"),u=n("ofXK"),g=n("gt5x");const p=["popover"];function b(e,t){1&e&&(h.Wb(0,"div",2),h.lc(1,2),h.Vb())}const f=[[["nx-dropdown"]],[["","nxError",""]],[["","nxInput",""]]],m=["nx-dropdown","[nxError]","[nxInput]"];let w=(()=>{class e{constructor(e,t,n,r,o,i){this.elementRef=e,this._changeDetectorRef=t,this._renderer=n,this._overlay=r,this._viewContainerRef=o,this._overlayPositionBuilder=i,this.subscription=s.a.EMPTY,this.subscriptionValues=s.a.EMPTY,this.inputChanges=new l.a,this._hasErrors=!1,this.currentTextWidth=0,this.size="regular"}ngOnInit(){this.setupErrorPopover()}ngAfterContentInit(){this._validateControlChild(),this.subscription=this._control.stateChanges.pipe(Object(a.a)(null)).subscribe(()=>{this._hasErrors=this._control.errorState,this.updateErrorPopoverState(),this._changeDetectorRef.markForCheck()}),this.subscriptionValues=this._control.ngControl?this._control.ngControl.valueChanges.subscribe(e=>{this.updateCurrentTextWidth(),this.inputChanges.next()}):this._control.stateChanges.subscribe(e=>{this.updateCurrentTextWidth(),this.inputChanges.next()}),this._control.setAriaLabel(this.label)}ngOnDestroy(){this._overlayRef&&this._overlayRef.dispose(),this.subscription.unsubscribe()}updateCurrentTextWidth(){this.measureCanvas||(this.measureCanvas=this._renderer.createElement("canvas"));const e=this.measureCanvas.getContext("2d"),t=window.getComputedStyle(this._control.elementRef.nativeElement);e.font=Object(o.g)(t);const n=e.measureText(this._control.value).width+parseInt(t.paddingRight,10)+parseInt(t.paddingLeft,10)+1,r=this.elementRef.nativeElement.parentElement.getBoundingClientRect();this.currentTextWidth=Math.max(parseInt(t.minWidth,10),n),this.currentTextWidth=Math.min(this.currentTextWidth,r.width),this._overlayRef.hasAttached()&&this._overlayState.positionStrategy.apply()}repositionError(){this._overlayRef.hasAttached()&&this._overlayState.positionStrategy.apply()}_validateControlChild(){if(!this._control)throw new Error("NxWordComponent requires an NxFormfieldControl compatible input.")}getConnectedOverlayOrigin(){return this.elementRef}get isFocused(){return this._control.focused}get isFilled(){return!this._control.empty}get hasDropdown(){return Boolean(this._dropdown)}updateErrorPopoverState(){this._hasErrors&&this._errorChildren.length>0?this.showPopover():this.hidePopover()}setupErrorPopover(){const e=this._overlayPositionBuilder.flexibleConnectedTo(this.elementRef).withLockedPosition(!0).withFlexibleDimensions(!1).withPush(!0).withPositions([{originX:"center",originY:"top",overlayX:"center",overlayY:"bottom"},{originX:"center",originY:"bottom",overlayX:"center",overlayY:"top"}]).withDefaultOffsetY(-8);this._overlayState=new i.d,this._overlayState.positionStrategy=e,this._overlayState.scrollStrategy=this._overlay.scrollStrategies.reposition(),this._overlayRef=this._overlay.create(this._overlayState),this._overlayState.positionStrategy.positionChanges.subscribe(e=>{this.positionArrow(e.connectionPair),this._embeddedViewRef&&!this._embeddedViewRef.destroyed&&this._embeddedViewRef.detectChanges()})}positionArrow(e){const t=this.elementRef.nativeElement.getBoundingClientRect().left+this.elementRef.nativeElement.getBoundingClientRect().width/2-(this._overlayRef.overlayElement.parentElement.offsetLeft+this._overlayRef.overlayElement.offsetLeft);this._popover.direction="top"===e.originY&&"bottom"===e.overlayY?"top":"bottom",this._popover.arrowStyle={left:t+"px"}}showPopover(){if(!this._overlayRef.hasAttached()){const e=new d.i(this._popover.templateRef,this._viewContainerRef);this._embeddedViewRef=this._overlayRef.attach(e)}}hidePopover(){this._overlayRef.detach()}}return e.\u0275fac=function(t){return new(t||e)(h.Qb(h.l),h.Qb(h.h),h.Qb(h.H),h.Qb(i.c),h.Qb(h.S),h.Qb(i.g))},e.\u0275cmp=h.Kb({type:e,selectors:[["nx-word"]],contentQueries:function(e,t,n){if(1&e&&(h.Jb(n,r.c,1),h.Jb(n,c.a,1),h.Jb(n,r.d,0)),2&e){let e;h.tc(e=h.ec())&&(t._control=e.first),h.tc(e=h.ec())&&(t._dropdown=e.first),h.tc(e=h.ec())&&(t._errorChildren=e)}},viewQuery:function(e,t){if(1&e&&h.Nc(p,3),2&e){let e;h.tc(e=h.ec())&&(t._popover=e.first)}},hostVars:16,hostBindings:function(e,t){2&e&&(h.Ec("width",t.currentTextWidth,"px"),h.Ib("size-short","short"==t.size)("size-regular","regular"==t.size)("size-long","long"==t.size)("has-error",t._hasErrors)("is-focused",t.isFocused)("is-filled",t.isFilled)("has-dropdown",t.hasDropdown))},inputs:{size:["nxSize","size"],label:["nxLabel","label"]},ngContentSelectors:m,decls:6,vars:1,consts:[["class","nx-word__inner-wrapper",4,"ngIf"],["popover",""],[1,"nx-word__inner-wrapper"]],template:function(e,t){1&e&&(h.mc(f),h.Wb(0,"div"),h.Hc(1,b,2,0,"div",0),h.lc(2),h.Vb(),h.Wb(3,"nx-popover",null,1),h.lc(5,1),h.Vb()),2&e&&(h.Eb(1),h.nc("ngIf",!t.hasDropdown))},directives:[u.q,g.a],styles:["[_nghost-%COMP%]{display:inline-block;position:relative;font-weight:400;text-align:center;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none;width:100%;margin:0 4px}[_nghost-%COMP%]   .nx-word__inner-wrapper[_ngcontent-%COMP%]{border-bottom:2px solid var(--natural-language-form-border-color)}.size-short[_nghost-%COMP%]{min-width:80px}.size-regular[_nghost-%COMP%]{min-width:152px}.size-long[_nghost-%COMP%]{min-width:360px}@media (max-width:991px){.size-long[_nghost-%COMP%]{min-width:280px}}@media (max-width:703px){.size-long[_nghost-%COMP%]{min-width:248px}}[_nghost-%COMP%]     .c-input{display:inline-block;text-align:inherit;font-size:inherit;line-height:inherit;background:0 0;color:inherit;border:none;outline:0;margin:0;width:100%;max-width:100%;height:auto;box-shadow:none;padding:0 8px}[_nghost-%COMP%]     .c-input.is-focused{outline:none;box-shadow:none}[_nghost-%COMP%]     .c-input.is-filled, [_nghost-%COMP%]     .c-input.is-focused{color:var(--natural-language-form-active-color);font-weight:400}[_nghost-%COMP%]     .c-input.is-disabled{cursor:not-allowed}[_nghost-%COMP%]     .c-input::-ms-clear{display:none}[_nghost-%COMP%]     nx-dropdown{position:relative;border-bottom:2px solid var(--natural-language-form-border-color)}[_nghost-%COMP%]     nx-dropdown .nx-dropdown__container{font-size:inherit;margin-bottom:-2px}@media (max-width:991px){[_nghost-%COMP%]     nx-dropdown .nx-dropdown__container{font-size:26px}}[_nghost-%COMP%]     nx-dropdown.has-focus, [_nghost-%COMP%]     nx-dropdown.is-filled{color:var(--natural-language-form-active-color);border-color:var(--natural-language-form-active-border-color)}[_nghost-%COMP%]     nx-dropdown .nx-dropdown__icon{line-height:inherit}[_nghost-%COMP%]     .nx-word__input-wrapper{width:100%}.is-filled[_nghost-%COMP%]   .nx-word__inner-wrapper[_ngcontent-%COMP%], .is-focused[_nghost-%COMP%]   .nx-word__inner-wrapper[_ngcontent-%COMP%]{border-color:var(--natural-language-form-active-border-color)}.has-error[_nghost-%COMP%]   .nx-word__inner-wrapper[_ngcontent-%COMP%], .has-error[_nghost-%COMP%]     nx-dropdown{border-color:var(--natural-language-form-error-border-color)}.has-error[_nghost-%COMP%]     .c-input.has-error, .has-error[_nghost-%COMP%]     nx-dropdown{color:var(--natural-language-form-error-color)}.is-negative[_nghost-%COMP%]     .nx-dropdown, .is-negative   [_nghost-%COMP%]     .nx-dropdown, .is-negative[_nghost-%COMP%]     nx-dropdown, .is-negative   [_nghost-%COMP%]     nx-dropdown, .is-negative[_nghost-%COMP%]     nx-dropdown.is-filled, .is-negative   [_nghost-%COMP%]     nx-dropdown.is-filled{border-color:var(--negative);color:var(--negative)}.is-negative[_nghost-%COMP%]     .c-input, .is-negative   [_nghost-%COMP%]     .c-input, .is-negative[_nghost-%COMP%]     .c-input.has-error, .is-negative   [_nghost-%COMP%]     .c-input.has-error{color:var(--negative)}.is-negative[_nghost-%COMP%]   .nx-word__inner-wrapper[_ngcontent-%COMP%], .is-negative   [_nghost-%COMP%]   .nx-word__inner-wrapper[_ngcontent-%COMP%]{border-color:var(--negative)}.nx-word__inner-wrapper[_ngcontent-%COMP%]{height:var(--natural-language-form-large-line-height)}@media (max-width:991px){.nx-word__inner-wrapper[_ngcontent-%COMP%]{height:var(--natural-language-form-small-line-height)}}.nx-natural-language-form--small[_nghost-%COMP%]   .nx-word__inner-wrapper[_ngcontent-%COMP%], .nx-natural-language-form--small   [_nghost-%COMP%]   .nx-word__inner-wrapper[_ngcontent-%COMP%]{height:var(--natural-language-form-small-line-height)}@media screen and (-ms-high-contrast:active){.nx-word__inner-wrapper[_ngcontent-%COMP%],   nx-dropdown{border-bottom-color:buttonText!important}.is-focused[_nghost-%COMP%]   .nx-word__inner-wrapper[_ngcontent-%COMP%], .is-focused[_nghost-%COMP%]     nx-dropdown{border-bottom-color:highlight!important}}"],changeDetection:0}),e})()}}]);