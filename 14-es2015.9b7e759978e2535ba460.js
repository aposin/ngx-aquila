(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"1DSb":function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var o=n("sg/T"),i=n("EM62"),s=n("6MO8"),a=n("IdLP"),r=n("B79f"),l=n("2kYt");const c=["panel"];function h(t,e){if(1&t&&(i.Tb(0,"nx-autocomplete-option",4),i.Jc(1),i.Sb()),2&t){const t=e.$implicit;i.kc("value",t),i.Bb(1),i.Lc(" ",t," ")}}function p(t,e){if(1&t&&(i.Rb(0),i.Hc(1,h,2,2,"nx-autocomplete-option",3),i.Qb()),2&t){const t=i.ec(2);i.Bb(1),i.kc("ngForOf",t.items)}}function u(t,e){1&t&&(i.Rb(0),i.ic(1),i.Qb())}function d(t,e){if(1&t&&(i.Tb(0,"div",0,1),i.Hc(2,p,2,1,"ng-container",2),i.Hc(3,u,2,0,"ng-container",2),i.Sb()),2&t){const t=i.ec();i.Fb("nx-autocomplete-panel--in-outline-field",t._isInOutlineField),i.kc("id",t.id)("ngClass",t._classList),i.Bb(2),i.kc("ngIf",t.hasItems),i.Bb(1),i.kc("ngIf",!t.hasItems)}}const g=["*"];let _=0;class m{constructor(t,e){this.source=t,this.option=e}}let b=(()=>{class t{constructor(t,e,n){this._changeDetectorRef=t,this._elementRef=e,this.formFieldComponent=n,this.showPanel=!1,this._isOpen=!1,this._items=null,this._hasItems=!1,this.optionSelected=new i.o,this.opened=new i.o,this.closed=new i.o,this._classList={},this.id="nx-autocomplete-"+_++,this.valueFormatter=t=>t?t.toString():null}get isOpen(){return this._isOpen&&this.showPanel}set items(t){if(this._hasItems=!0,Array.isArray(t))this._items=t;else if(t instanceof a.a)this._itemsSubscription&&this._itemsSubscription.unsubscribe(),this._itemsSubscription=t.subscribe(t=>{this._items=t,this._changeDetectorRef.markForCheck(),setTimeout(()=>this._setVisibility())});else{if(null!==t)throw new Error("Invalid argument for autocomplete items. It has to be Array<string> or Observable<Array<string>>");this._items=t}}get items(){return this._items}get hasItems(){return this._hasItems}get options(){return this.hasItems?this._vOptions:this._cOptions}set classList(t){t&&t.length&&(t.split(" ").forEach(t=>this._classList[t.trim()]=!0),this._elementRef.nativeElement.className="")}ngAfterViewInit(){this._keyManager=new o.b(this.options).withWrap(),this._setVisibility()}ngOnDestroy(){this._itemsSubscription&&this._itemsSubscription.unsubscribe()}_setScrollTop(t){this.panel&&(this.panel.nativeElement.scrollTop=t)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!(!this.options||!this.options.length),this._classList["nx-autocomplete-visible"]=this.showPanel,this._classList["nx-autocomplete-hidden"]=!this.showPanel,this._changeDetectorRef.markForCheck()}_emitSelectEvent(t){const e=new m(this,t);this.optionSelected.emit(e)}get _isInOutlineField(){return null!==this.formFieldComponent&&"outline"===this.formFieldComponent.appearance}}return t.\u0275fac=function(e){return new(e||t)(i.Nb(i.h),i.Nb(i.l),i.Nb(r.b,8))},t.\u0275cmp=i.Hb({type:t,selectors:[["nx-autocomplete"]],contentQueries:function(t,e,n){var o;1&t&&i.Gb(n,s.a,!0),2&t&&i.qc(o=i.bc())&&(e._cOptions=o)},viewQuery:function(t,e){var n;1&t&&(i.Nc(i.N,!0),i.Nc(c,!0),i.Nc(s.a,!0)),2&t&&(i.qc(n=i.bc())&&(e.template=n.first),i.qc(n=i.bc())&&(e.panel=n.first),i.qc(n=i.bc())&&(e._vOptions=n))},hostAttrs:[1,"nx-autocomplete"],inputs:{items:"items",classList:["class","classList"],valueFormatter:["nxValueFormatter","valueFormatter"]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed"},exportAs:["nxAutocomplete"],ngContentSelectors:g,decls:1,vars:0,consts:[["role","listbox",1,"nx-autocomplete-panel",3,"id","ngClass"],["panel",""],[4,"ngIf"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(t,e){1&t&&(i.jc(),i.Hc(0,d,4,6,"ng-template"))},directives:[l.q,l.t,l.s,s.a],styles:["[_nghost-%COMP%]     .c-input::-ms-clear{width:0;height:0}.nx-autocomplete-panel[_ngcontent-%COMP%]{background-color:var(--dropdown-panel-background-color);box-shadow:0 2px 4px rgba(65,65,65,.5);overflow-y:auto;overflow-x:hidden;max-height:280px;width:100%;border-radius:4px}.nx-autocomplete-panel.nx-autocomplete-visible[_ngcontent-%COMP%]{visibility:visible}.nx-autocomplete-panel.nx-autocomplete-hidden[_ngcontent-%COMP%]{visibility:hidden}.nx-autocomplete-panel--in-outline-field[_ngcontent-%COMP%]     nx-autocomplete-option .nx-autocomplete-option, .nx-autocomplete-panel--in-outline-field[_ngcontent-%COMP%]     nx-autocomplete-option .nx-autocomplete-option__label{font-size:var(--dropdown-item-outline-font-size);line-height:var(--dropdown-item-outline-line-height);font-weight:var(--dropdown-item-outline-font-weight);letter-spacing:var(--dropdown-item-outline-letter-spacing)}@media screen and (-ms-high-contrast:active){.nx-autocomplete-panel[_ngcontent-%COMP%]{box-shadow:0 0 0 1px windowText}}"],changeDetection:0}),t})()},"6MO8":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var o=n("EM62"),i=n("fAiE"),s=n("5XID");const a=["*"];class r{constructor(t,e=!1){this.source=t,this.isUserInput=e}}let l=0,c=(()=>{class t{constructor(t,e){this.elementRef=t,this._changeDetectorRef=e,this._id="nx-autocomplete-option-"+l++,this._selected=!1,this._active=!1,this._disabled=!1,this.onSelectionChange=new o.o}get id(){return this._id}get selected(){return this._selected}get active(){return this._active}get disabled(){return this._disabled}set disabled(t){const e=Object(s.b)(t);this._disabled!==e&&(this._disabled=e)}_handleKeydown(t){t.keyCode!==i.f&&t.keyCode!==i.o||(this._selectViaInteraction(),t.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_emitSelectionChangeEvent(t=!1){this.onSelectionChange.emit(new r(this,t))}get viewValue(){return(this.elementRef.nativeElement.textContent||"").trim()}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}select(){this._selected=!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent()}deselect(){this._selected=!1,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent()}focus(){const t=this.elementRef.nativeElement;"function"==typeof t.focus&&t.focus()}}return t.\u0275fac=function(e){return new(e||t)(o.Nb(o.l),o.Nb(o.h))},t.\u0275cmp=o.Hb({type:t,selectors:[["nx-autocomplete-option"]],hostAttrs:["role","option"],hostVars:10,hostBindings:function(t,e){1&t&&o.ac("click",(function(){return e._selectViaInteraction()}))("keydown",(function(t){return e._handleKeydown(t)})),2&t&&(o.Wb("id",e.id),o.Cb("tabindex",e._getTabIndex())("aria-selected",e.selected.toString())("aria-disabled",e.disabled.toString()),o.Ec("display","block"),o.Fb("nx-active",e.active)("nx-disabled",e.disabled))},inputs:{disabled:"disabled",value:"value"},outputs:{onSelectionChange:"onSelectionChange"},ngContentSelectors:a,decls:3,vars:2,consts:[[1,"nx-autocomplete-option"],[1,"nx-autocomplete-option__label"]],template:function(t,e){1&t&&(o.jc(),o.Tb(0,"div",0),o.Tb(1,"div",1),o.ic(2),o.Sb(),o.Sb()),2&t&&o.Fb("nx-active",e.active)},styles:["[_nghost-%COMP%]:focus{outline:none}[_nghost-%COMP%]:first-child   .nx-autocomplete-option[_ngcontent-%COMP%]{padding-top:16px}[_nghost-%COMP%]:last-child   .nx-autocomplete-option[_ngcontent-%COMP%]{padding-bottom:16px}.nx-autocomplete-option[_ngcontent-%COMP%]{font-size:var(--dropdown-item-font-size);line-height:var(--dropdown-item-line-height);font-weight:var(--dropdown-item-font-weight);letter-spacing:var(--dropdown-item-letter-spacing);cursor:pointer;position:relative;display:flex;max-width:100%;white-space:nowrap;padding:8px 32px}[dir=rtl][_nghost-%COMP%]   .nx-autocomplete-option[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-autocomplete-option[_ngcontent-%COMP%]{padding:8px 8px 8px 32px}.nx-autocomplete-option.nx-active[_ngcontent-%COMP%]   .nx-autocomplete-option__label[_ngcontent-%COMP%], .nx-autocomplete-option[_ngcontent-%COMP%]:hover   .nx-autocomplete-option__label[_ngcontent-%COMP%]{color:var(--dropdown-item-hover-color)}@media screen and (-ms-high-contrast:active){.nx-autocomplete-option.nx-active[_ngcontent-%COMP%]   .nx-autocomplete-option__label[_ngcontent-%COMP%], .nx-autocomplete-option[_ngcontent-%COMP%]:hover   .nx-autocomplete-option__label[_ngcontent-%COMP%]{color:highlightText;background-color:highlight;border-radius:4px}}[dir=rtl][_nghost-%COMP%]   .nx-autocomplete-option[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-autocomplete-option[_ngcontent-%COMP%]{padding-right:32px}.nx-autocomplete-option__label[_ngcontent-%COMP%]{padding:0 12px;margin:0 -12px;color:var(--dropdown-item-text-color)}@media screen and (-ms-high-contrast:active){.nx-autocomplete-option__label[_ngcontent-%COMP%]{-ms-high-contrast-adjust:none;color:buttonText;background-color:buttonFace;border-radius:4px}}[data-whatinput=keyboard][_nghost-%COMP%]   .nx-autocomplete-option.nx-active[_ngcontent-%COMP%]   .nx-autocomplete-option__label[_ngcontent-%COMP%], [data-whatinput=keyboard]   [_nghost-%COMP%]   .nx-autocomplete-option.nx-active[_ngcontent-%COMP%]   .nx-autocomplete-option__label[_ngcontent-%COMP%]{border-radius:4px;box-shadow:var(--focus-box-shadow)}@media screen and (-ms-high-contrast:active){[data-whatinput=keyboard][_nghost-%COMP%]   .nx-autocomplete-option.nx-active[_ngcontent-%COMP%]   .nx-autocomplete-option__label[_ngcontent-%COMP%], [data-whatinput=keyboard]   [_nghost-%COMP%]   .nx-autocomplete-option.nx-active[_ngcontent-%COMP%]   .nx-autocomplete-option__label[_ngcontent-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px windowText}}"],changeDetection:0}),t})()},Bql2:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return l.a}));var o=n("pT7h"),i=n("6c6m"),s=n("2kYt"),a=n("EM62");let r=(()=>{class t{}return t.\u0275mod=a.Lb({type:t}),t.\u0275inj=a.Kb({factory:function(e){return new(e||t)},imports:[[s.c,i.b,o.a]]}),t})();n("tjdh");var l=n("MqgH")},COYy:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n("sg/T"),i=n("HYj3"),s=n("2kYt"),a=n("EM62");let r=(()=>{class t{}return t.\u0275mod=a.Lb({type:t}),t.\u0275inj=a.Kb({factory:function(e){return new(e||t)},imports:[[s.c,i.f,o.a]]}),t})();n("6MO8"),n("1DSb"),n("wMpm")},MqgH:function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var o=n("B79f"),i=n("JNA7"),s=n("HYj3"),a=n("jIqt"),r=n("bwdy"),l=n("ZTXN"),c=n("ydLu"),h=n("Sv/w"),p=n("EM62"),u=n("2kYt"),d=n("dWOj");const g=["popover"];function _(t,e){1&t&&(p.Tb(0,"div",2),p.ic(1,2),p.Sb())}const m=[[["nx-dropdown"]],[["","nxError",""]],[["","nxInput",""]]],b=["nx-dropdown","[nxError]","[nxInput]"];let v=(()=>{class t{constructor(t,e,n,o,i,s){this.elementRef=t,this._changeDetectorRef=e,this._renderer=n,this._overlay=o,this._viewContainerRef=i,this._overlayPositionBuilder=s,this.subscription=r.a.EMPTY,this.subscriptionValues=r.a.EMPTY,this.inputChanges=new l.a,this._hasErrors=!1,this.currentTextWidth=0,this.size="regular"}ngOnInit(){this.setupErrorPopover()}ngAfterContentInit(){this._validateControlChild(),this.subscription=this._control.stateChanges.pipe(Object(a.a)(null)).subscribe(()=>{this._hasErrors=this._control.errorState,this.updateErrorPopoverState(),this._changeDetectorRef.markForCheck()}),this.subscriptionValues=this._control.ngControl?this._control.ngControl.valueChanges.subscribe(t=>{this.updateCurrentTextWidth(),this.inputChanges.next()}):this._control.stateChanges.subscribe(t=>{this.updateCurrentTextWidth(),this.inputChanges.next()}),this._control.setAriaLabel(this.label)}ngOnDestroy(){this._overlayRef&&this._overlayRef.dispose(),this.subscription.unsubscribe()}updateCurrentTextWidth(){this.measureCanvas||(this.measureCanvas=this._renderer.createElement("canvas"));const t=this.measureCanvas.getContext("2d"),e=window.getComputedStyle(this._control.elementRef.nativeElement);t.font=Object(i.g)(e);const n=t.measureText(this._control.value).width+parseInt(e.paddingRight,10)+parseInt(e.paddingLeft,10)+1,o=this.elementRef.nativeElement.parentElement.getBoundingClientRect();this.currentTextWidth=Math.max(parseInt(e.minWidth,10),n),this.currentTextWidth=Math.min(this.currentTextWidth,o.width),this._overlayRef.hasAttached()&&this._overlayState.positionStrategy.apply()}repositionError(){this._overlayRef.hasAttached()&&this._overlayState.positionStrategy.apply()}_validateControlChild(){if(!this._control)throw new Error("NxWordComponent requires an NxFormfieldControl compatible input.")}getConnectedOverlayOrigin(){return this.elementRef}get isFocused(){return this._control.focused}get isFilled(){return!this._control.empty}get hasDropdown(){return Boolean(this._dropdown)}updateErrorPopoverState(){this._hasErrors&&this._errorChildren.length>0?this.showPopover():this.hidePopover()}setupErrorPopover(){const t=this._overlayPositionBuilder.flexibleConnectedTo(this.elementRef).withLockedPosition(!0).withFlexibleDimensions(!1).withPush(!0).withPositions([{originX:"center",originY:"top",overlayX:"center",overlayY:"bottom"},{originX:"center",originY:"bottom",overlayX:"center",overlayY:"top"}]).withDefaultOffsetY(-8);this._overlayState=new s.d,this._overlayState.positionStrategy=t,this._overlayState.scrollStrategy=this._overlay.scrollStrategies.reposition(),this._overlayRef=this._overlay.create(this._overlayState),this._overlayState.positionStrategy.positionChanges.subscribe(t=>{this.positionArrow(t.connectionPair),this._embeddedViewRef&&!this._embeddedViewRef.destroyed&&this._embeddedViewRef.detectChanges()})}positionArrow(t){const e=this.elementRef.nativeElement.getBoundingClientRect().left+this.elementRef.nativeElement.getBoundingClientRect().width/2-(this._overlayRef.overlayElement.parentElement.offsetLeft+this._overlayRef.overlayElement.offsetLeft);this._popover.direction="top"===t.originY&&"bottom"===t.overlayY?"top":"bottom",this._popover.arrowStyle={left:e+"px"}}showPopover(){if(!this._overlayRef.hasAttached()){const t=new h.i(this._popover.templateRef,this._viewContainerRef);this._embeddedViewRef=this._overlayRef.attach(t)}}hidePopover(){this._overlayRef.detach()}}return t.\u0275fac=function(e){return new(e||t)(p.Nb(p.l),p.Nb(p.h),p.Nb(p.G),p.Nb(s.c),p.Nb(p.R),p.Nb(s.g))},t.\u0275cmp=p.Hb({type:t,selectors:[["nx-word"]],contentQueries:function(t,e,n){var i;1&t&&(p.Gb(n,o.c,!0),p.Gb(n,c.a,!0),p.Gb(n,o.d,!1)),2&t&&(p.qc(i=p.bc())&&(e._control=i.first),p.qc(i=p.bc())&&(e._dropdown=i.first),p.qc(i=p.bc())&&(e._errorChildren=i))},viewQuery:function(t,e){var n;1&t&&p.Cc(g,!0),2&t&&p.qc(n=p.bc())&&(e._popover=n.first)},hostVars:16,hostBindings:function(t,e){2&t&&(p.Ec("width",e.currentTextWidth,"px"),p.Fb("size-short","short"==e.size)("size-regular","regular"==e.size)("size-long","long"==e.size)("has-error",e._hasErrors)("is-focused",e.isFocused)("is-filled",e.isFilled)("has-dropdown",e.hasDropdown))},inputs:{size:["nxSize","size"],label:["nxLabel","label"]},ngContentSelectors:b,decls:6,vars:1,consts:[["class","nx-word__inner-wrapper",4,"ngIf"],["popover",""],[1,"nx-word__inner-wrapper"]],template:function(t,e){1&t&&(p.jc(m),p.Tb(0,"div"),p.Hc(1,_,2,0,"div",0),p.ic(2),p.Sb(),p.Tb(3,"nx-popover",null,1),p.ic(5,1),p.Sb()),2&t&&(p.Bb(1),p.kc("ngIf",!e.hasDropdown))},directives:[u.t,d.a],styles:["[_nghost-%COMP%]{display:inline-block;position:relative;font-weight:400;text-align:center;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none;width:100%;margin:0 4px}[_nghost-%COMP%]   .nx-word__inner-wrapper[_ngcontent-%COMP%]{border-bottom:2px solid var(--natural-language-form-border-color)}.size-short[_nghost-%COMP%]{min-width:80px}.size-regular[_nghost-%COMP%]{min-width:152px}.size-long[_nghost-%COMP%]{min-width:360px}@media (max-width:991px){.size-long[_nghost-%COMP%]{min-width:280px}}@media (max-width:703px){.size-long[_nghost-%COMP%]{min-width:248px}}[_nghost-%COMP%]     .c-input{display:inline-block;text-align:inherit;font-size:inherit;line-height:inherit;background:0 0;color:inherit;border:none;outline:0;margin:0;width:100%;max-width:100%;height:auto;box-shadow:none;padding:0 8px}[_nghost-%COMP%]     .c-input.is-focused{outline:none;box-shadow:none}[_nghost-%COMP%]     .c-input.is-filled, [_nghost-%COMP%]     .c-input.is-focused{color:var(--natural-language-form-active-color);font-weight:400}[_nghost-%COMP%]     .c-input.is-disabled{cursor:not-allowed}[_nghost-%COMP%]     .c-input::-ms-clear{display:none}[_nghost-%COMP%]     nx-dropdown{position:relative;border-bottom:2px solid var(--natural-language-form-border-color)}[_nghost-%COMP%]     nx-dropdown .nx-dropdown__container{font-size:inherit;margin-bottom:-2px}@media (max-width:991px){[_nghost-%COMP%]     nx-dropdown .nx-dropdown__container{font-size:26px}}[_nghost-%COMP%]     nx-dropdown.has-focus, [_nghost-%COMP%]     nx-dropdown.is-filled{color:var(--natural-language-form-active-color);border-color:var(--natural-language-form-active-border-color)}[_nghost-%COMP%]     nx-dropdown .nx-dropdown__icon{line-height:inherit}[_nghost-%COMP%]     .nx-word__input-wrapper{width:100%}.is-filled[_nghost-%COMP%]   .nx-word__inner-wrapper[_ngcontent-%COMP%], .is-focused[_nghost-%COMP%]   .nx-word__inner-wrapper[_ngcontent-%COMP%]{border-color:var(--natural-language-form-active-border-color)}.has-error[_nghost-%COMP%]   .nx-word__inner-wrapper[_ngcontent-%COMP%], .has-error[_nghost-%COMP%]     nx-dropdown{border-color:var(--natural-language-form-error-border-color)}.has-error[_nghost-%COMP%]     .c-input.has-error, .has-error[_nghost-%COMP%]     nx-dropdown{color:var(--natural-language-form-error-color)}.is-negative[_nghost-%COMP%]     .nx-dropdown, .is-negative   [_nghost-%COMP%]     .nx-dropdown, .is-negative[_nghost-%COMP%]     nx-dropdown, .is-negative   [_nghost-%COMP%]     nx-dropdown, .is-negative[_nghost-%COMP%]     nx-dropdown.is-filled, .is-negative   [_nghost-%COMP%]     nx-dropdown.is-filled{border-color:var(--negative);color:var(--negative)}.is-negative[_nghost-%COMP%]     .c-input, .is-negative   [_nghost-%COMP%]     .c-input, .is-negative[_nghost-%COMP%]     .c-input.has-error, .is-negative   [_nghost-%COMP%]     .c-input.has-error{color:var(--negative)}.is-negative[_nghost-%COMP%]   .nx-word__inner-wrapper[_ngcontent-%COMP%], .is-negative   [_nghost-%COMP%]   .nx-word__inner-wrapper[_ngcontent-%COMP%]{border-color:var(--negative)}.nx-word__inner-wrapper[_ngcontent-%COMP%]{height:var(--natural-language-form-large-line-height)}@media (max-width:991px){.nx-word__inner-wrapper[_ngcontent-%COMP%]{height:var(--natural-language-form-small-line-height)}}.nx-natural-language-form--small[_nghost-%COMP%]   .nx-word__inner-wrapper[_ngcontent-%COMP%], .nx-natural-language-form--small   [_nghost-%COMP%]   .nx-word__inner-wrapper[_ngcontent-%COMP%]{height:var(--natural-language-form-small-line-height)}@media screen and (-ms-high-contrast:active){.nx-word__inner-wrapper[_ngcontent-%COMP%],   nx-dropdown{border-bottom-color:buttonText}}"],changeDetection:0}),t})()},sRH6:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var o=n("vobO"),i=n("YtkY"),s=n("EM62");let a=(()=>{class t{constructor(t){this.client=t,this.WIKIPEDIA_URL="https://en.wikipedia.org/w/api.php"}search(t){const e=(n=t,`${this.WIKIPEDIA_URL}?${(new o.e).append("action","opensearch").append("search",encodeURIComponent(n)).append("format","json").toString()}`);var n;return this.client.jsonp(e,"callback").pipe(Object(i.a)(t=>t[1].map(t=>({value:t}))))}}return t.\u0275fac=function(e){return new(e||t)(s.Xb(o.b))},t.\u0275prov=s.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},t3RA:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var o=n("ohqM"),i=n("4TwE"),s=n("aln5"),a=n("kPBv"),r=n("2kYt"),l=n("nIj0"),c=n("EM62");let h=(()=>{class t{}return t.\u0275mod=c.Lb({type:t}),t.\u0275inj=c.Kb({factory:function(e){return new(e||t)},imports:[[],r.c,l.k,l.v,a.b,s.a,i.a,o.a]}),t})()},tjdh:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var o=n("5XID"),i=n("ZTXN"),s=n("bwdy"),a=n("g6G6"),r=n("kuMc"),l=n("Wg7D"),c=n("BwBJ"),h=n("MqgH"),p=n("EM62");const u=["*"];let d=(()=>{class t{constructor(t,e){this._changeDetectorRef=t,this._ngZone=e,this._negative=!1,this.resizeEvent$=new i.a,this._destroyed=new i.a,this.updatePopoversSubscription=s.a.EMPTY,this._size="large",this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.pipe(Object(r.a)(this._destroyed)).subscribe(()=>{this.updatePositionPopovers()})})}set negative(t){this._negative=Object(o.b)(t)}get negative(){return this._negative}set size(t){this._size=t,this._changeDetectorRef.markForCheck()}get size(){return this._size}onResize(t){this.resizeEvent$.next()}ngAfterContentInit(){const t=this._words.map(t=>t.inputChanges),e=Object(a.a)(...t);this.updatePopoversSubscription=e.subscribe(()=>{this.updatePositionPopovers()}),this.resizeObservable=this.resizeEvent$.pipe(Object(l.a)(500),Object(c.a)(100)),this.resizeObservable.subscribe(()=>this.resizeWords())}resizeWords(){this._words.forEach(t=>{t.updateCurrentTextWidth()})}ngOnDestroy(){this.updatePopoversSubscription.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}updatePositionPopovers(){this._words&&this._words.forEach(t=>{t.repositionError()})}}return t.\u0275fac=function(e){return new(e||t)(p.Nb(p.h),p.Nb(p.A))},t.\u0275cmp=p.Hb({type:t,selectors:[["nx-natural-language-form"]],contentQueries:function(t,e,n){var o;1&t&&p.Gb(n,h.a,!1),2&t&&p.qc(o=p.bc())&&(e._words=o)},hostVars:6,hostBindings:function(t,e){1&t&&p.ac("orientationchange",(function(t){return e.onResize(t)}),!1,p.uc)("resize",(function(t){return e.onResize(t)}),!1,p.uc),2&t&&p.Fb("is-negative",e.negative)("nx-natural-language-form--small","small"===e.size)("nx-natural-language-form--large","large"===e.size)},inputs:{negative:["nxNegative","negative"],size:"size"},ngContentSelectors:u,decls:2,vars:0,consts:[[1,"nx-natural-language-form__wrapper"]],template:function(t,e){1&t&&(p.jc(),p.Tb(0,"div",0),p.ic(1),p.Sb())},styles:["[_nghost-%COMP%]{display:block;font-size:var(--natural-language-form-large-font-size);line-height:var(--natural-language-form-large-line-height);font-weight:var(--natural-language-form-large-font-weight);letter-spacing:var(--natural-language-form-large-letter-spacing);color:var(--natural-language-form-text-color);padding-top:72px;padding-bottom:80px}[_nghost-%COMP%]     .c-input{font-size:inherit;line-height:inherit}[_nghost-%COMP%]     nx-word+nx-word{margin-left:2px}[dir=rtl]   [_nghost-%COMP%]     nx-word+nx-word{margin-right:2px;margin-left:0}.is-negative[_nghost-%COMP%]{color:var(--negative)}@media (max-width:991px){[_nghost-%COMP%]{font-size:var(--natural-language-form-small-font-size);line-height:var(--natural-language-form-small-line-height);font-weight:var(--natural-language-form-small-font-weight);letter-spacing:var(--natural-language-form-small-letter-spacing)}}.nx-natural-language-form__wrapper[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.nx-natural-language-form__wrapper[_ngcontent-%COMP%] >   *{margin-bottom:8px}.nx-natural-language-form--small[_nghost-%COMP%]{font-size:var(--natural-language-form-small-font-size);line-height:var(--natural-language-form-small-line-height);font-weight:var(--natural-language-form-small-font-weight);letter-spacing:var(--natural-language-form-small-letter-spacing)}.nx-natural-language-form--small[_nghost-%COMP%]     .c-input{font-size:inherit;line-height:inherit}"],changeDetection:0}),t})()},wMpm:function(t,e,n){"use strict";n.d(e,"a",(function(){return E}));var o=n("5XID"),i=n("fAiE"),s=n("HYj3"),a=n("Sv/w"),r=n("2kYt"),l=n("EM62"),c=n("nIj0"),h=n("bwdy"),p=n("ZTXN"),u=n("i9xl"),d=n("g6G6"),g=n("ROBh"),_=n("KTx3"),m=n("J+dc"),b=n("TLy2"),v=n("xVbo"),f=n("mWib"),w=n("jOdJ"),x=n("8j5Y"),C=n("BwBJ"),O=n("qvOF"),y=n("E5oP"),P=n("B79f"),M=n("Bql2");const S={provide:c.n,useExisting:Object(l.V)(()=>E),multi:!0};let E=(()=>{class t{constructor(t,e,n,o,i,s,a,r,l,c){this._element=t,this._overlay=e,this._viewContainerRef=n,this._zone=o,this._changeDetectorRef=i,this._dir=s,this._nxFormField=a,this._nxWordField=r,this._document=l,this._viewportRuler=c,this._componentDestroyed=!1,this._manuallyFloatingLabel=!1,this._viewportSubscription=h.a.EMPTY,this._canOpenOnNextFocus=!0,this._closeKeyEventStream=new p.a,this._valueChanges=new p.a,this._itemsCb=null,this._debounce=400,this._autocompleteDisabled=!1,this._overlayAttached=!1,this.optionSelections=Object(u.a)(()=>this.autocomplete&&this.autocomplete.options?Object(d.a)(...this.autocomplete.options.map(t=>t.onSelectionChange)):this._zone.onStable.asObservable().pipe(Object(m.a)(1),Object(b.a)(()=>this.optionSelections))),this._windowBlurHandler=()=>{this._canOpenOnNextFocus=document.activeElement!==this._element.nativeElement||this.panelOpen},this._onChange=t=>{this._valueChanges.next(t)},this._onTouched=()=>{},"undefined"!=typeof window&&o.runOutsideAngular(()=>{window.addEventListener("blur",this._windowBlurHandler)})}set itemsCb(t){if("function"!=typeof t)throw new Error("Wrong value type for nxAutocompleteItems");this._itemsCb=t}get itemsCb(){return this._itemsCb}set debounce(t){this._debounce=Object(o.e)(t)}set autocompleteDisabled(t){this._autocompleteDisabled=t,this._bindAutocompleteItems()}get autocompleteDisabled(){return this._autocompleteDisabled}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}get _outsideClickStream(){return this._document?Object(d.a)(Object(_.a)(this._document,"mouseup"),Object(_.a)(this._document,"touchend")).pipe(Object(v.a)(t=>{const e=t.target,n=this._formField?this._formField.elementRef.nativeElement:null;return this._overlayAttached&&e!==this._element.nativeElement&&(!n||!n.contains(e))&&!!this._overlayRef&&!this._overlayRef.overlayElement.contains(e)})):Object(g.a)(null)}get _formField(){return this._nxFormField?this._nxFormField:this._nxWordField?this._nxWordField:void 0}ngOnDestroy(){"undefined"!=typeof window&&window.removeEventListener("blur",this._windowBlurHandler),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),this._controlValueChangesSubscription&&this._controlValueChangesSubscription.unsubscribe(),this._itemsSubscription&&this._itemsSubscription.unsubscribe()}ngOnChanges(){this._bindAutocompleteItems()}ngAfterViewInit(){this._bindAutocompleteItems()}_bindAutocompleteItems(){if(this._controlValueChangesSubscription&&this._controlValueChangesSubscription.unsubscribe(),"function"==typeof this._itemsCb&&this.autocomplete&&!this.autocompleteDisabled){const t=new p.a;this.autocomplete.items=t,this._controlValueChangesSubscription=(this._formField&&this._formField._control&&this._formField._control.ngControl&&this._formField._control.ngControl.valueChanges?this._formField._control.ngControl.valueChanges:this._valueChanges).pipe(Object(f.a)(this._debounce)).subscribe(e=>{this._itemsSubscription&&this._itemsSubscription.unsubscribe(),this._itemsSubscription=this._itemsCb(e).pipe(Object(w.a)()).subscribe(e=>{t.next(e)},e=>{t.next([])})})}}openPanel(){this.autocompleteDisabled||(this._attachOverlay(),this._floatLabel())}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this.autocomplete.closed.emit(),this.autocomplete._isOpen=this._overlayAttached=!1,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._componentDestroyed||this._changeDetectorRef.detectChanges())}get panelClosingActions(){return Object(d.a)(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(Object(v.a)(()=>this._overlayAttached)),this._closeKeyEventStream,this._outsideClickStream,this._overlayRef?this._overlayRef.detachments().pipe(Object(v.a)(()=>this._overlayAttached)):Object(g.a)())}writeValue(t){Promise.resolve(null).then(()=>this._setTriggerValue(t))}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this._element.nativeElement.disabled=t}_handleKeydown(t){const e=t.keyCode;if(e===i.g&&t.preventDefault(),this.panelOpen&&(e===i.g||e===i.q&&t.altKey))this._resetActiveItem(),this._closeKeyEventStream.next(),t.stopPropagation();else if(this.activeOption&&e===i.f&&this.panelOpen)this.activeOption._selectViaInteraction(),this._resetActiveItem(),t.preventDefault();else{const n=this.autocomplete._keyManager.activeItem,o=e===i.q||e===i.d;this.panelOpen||e===i.p?this.autocomplete._keyManager.onKeydown(t):o&&this._isFieldEnabled()&&this.openPanel(),(o||this.autocomplete._keyManager.activeItem!==n)&&this._scrollToOption()}}_handleInput(t){const e=t.target;let n=e.value;"number"===e.type&&(n=""===n?null:parseFloat(n)),this._isFieldEnabled()&&this._previousValue!==n&&document.activeElement===t.target&&(this._previousValue=n,this._onChange(n),this.openPanel())}_handleFocus(){this._canOpenOnNextFocus?this._isFieldEnabled()&&(this._previousValue=this._element.nativeElement.value,this.openPanel()):this._canOpenOnNextFocus=!0}_floatLabel(){this._nxFormField&&"auto"===this._nxFormField.floatLabel&&(this._nxFormField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._nxFormField.floatLabel="auto",this._manuallyFloatingLabel=!1)}_scrollToOption(){if(0===this.autocomplete.options.length)return;let t=0,e=this.autocomplete.options.first.elementRef.nativeElement.offsetHeight;this.autocomplete._keyManager.activeItem&&(t=this.autocomplete._keyManager.activeItem.elementRef.nativeElement.offsetTop,e=this.autocomplete._keyManager.activeItem.elementRef.nativeElement.offsetHeight);const n=this.autocomplete.panel.nativeElement.offsetTop,o=function(t,e,n,o){return t<n?t:t+e>n+o?Math.max(0,t-o+e):n}(t,e,this.autocomplete._getScrollTop()+n,this.autocomplete.panel.nativeElement.offsetHeight);this.autocomplete._setScrollTop(o-n)}_subscribeToClosingActions(){const t=this._zone.onStable.asObservable().pipe(Object(m.a)(1)),e=this.autocomplete.options.changes.pipe(Object(x.a)(()=>this._positionStrategy.reapplyLastPosition()),Object(C.a)(0));return Object(d.a)(t,e).pipe(Object(b.a)(()=>(this._resetActiveItem(),this.autocomplete._setVisibility(),this.panelClosingActions)),Object(m.a)(1)).subscribe(t=>this._setValueAndClose(t))}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_setTriggerValue(t){const e=this.autocomplete&&this.autocomplete.valueFormatter?this.autocomplete.valueFormatter(t):t,n=null!=e?e:"";this._formField?this._formField._control.value=n:this._element.nativeElement.value=n}_setValueAndClose(t){t&&t.source&&(this._clearPreviousSelectedOption(t.source),this._setTriggerValue(t.source.value),this._onChange(t.source.value),this._element.nativeElement.focus(),this.autocomplete._emitSelectEvent(t.source)),this.closePanel()}_clearPreviousSelectedOption(t){this.autocomplete.options.forEach(e=>{e!==t&&e.selected&&e.deselect()})}_attachOverlay(){if(!this.autocomplete)throw Error("Attempting to open an undefined instance of `nx-autocomplete`. Make sure that the id passed to the `nxAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.");this._overlayRef?this._overlayRef.updateSize({minWidth:this._getHostWidth()}):(this._portal=new a.i(this.autocomplete.template,this._viewContainerRef),this._overlayRef=this._overlay.create(this._getOverlayConfig()),this._viewportRuler&&(this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&this._overlayRef&&this._overlayRef.updateSize({minWidth:this._getHostWidth()})}))),this._overlayRef&&!this._overlayRef.hasAttached()&&(this._overlayRef.attach(this._portal),this._closingActionsSubscription=this._subscribeToClosingActions());const t=this.panelOpen;this.autocomplete._setVisibility(),this.autocomplete._isOpen=this._overlayAttached=!0,this.panelOpen&&t!==this.panelOpen&&this.autocomplete.opened.emit()}_getOverlayConfig(){var t;return new s.d({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),minWidth:this._getHostWidth(),direction:(null===(t=this._dir)||void 0===t?void 0:t.value)||"ltr"})}_getOverlayPosition(){var t;const e="rtl"===(null===(t=this._dir)||void 0===t?void 0:t.value)?0:16;return this._positionStrategy=this._overlay.position().flexibleConnectedTo(this._getConnectedElement()).withViewportMargin(e).withPush(!1).withGrowAfterOpen(!0).withPositions([{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"}]),this._positionStrategy}_scrollStrategy(){return this._overlay.scrollStrategies.reposition()}_getConnectedElement(){return this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){this.autocomplete._keyManager.setActiveItem(-1)}_isFieldEnabled(){const t=this._element.nativeElement;return!t.readOnly&&!t.disabled}}return t.\u0275fac=function(e){return new(e||t)(l.Nb(l.l),l.Nb(s.c),l.Nb(l.R),l.Nb(l.A),l.Nb(l.h),l.Nb(y.c,8),l.Nb(P.b,9),l.Nb(M.b,9),l.Nb(r.e,8),l.Nb(O.d))},t.\u0275dir=l.Ib({type:t,selectors:[["input","nxAutocomplete",""],["textarea","nxAutocomplete",""]],hostAttrs:["role","combobox","autocomplete","off","aria-autocomplete","list"],hostVars:3,hostBindings:function(t,e){1&t&&l.ac("focusin",(function(){return e._handleFocus()}))("blur",(function(){return e._onTouched()}))("input",(function(t){return e._handleInput(t)}))("keydown",(function(t){return e._handleKeydown(t)})),2&t&&l.Cb("aria-activedescendant",null==e.activeOption?null:e.activeOption.id)("aria-expanded",e.panelOpen.toString())("aria-owns",null==e.autocomplete?null:e.autocomplete.id)},inputs:{autocomplete:["nxAutocomplete","autocomplete"],itemsCb:["nxAutocompleteItems","itemsCb"],debounce:["nxAutocompleteDebounce","debounce"],autocompleteDisabled:["nxAutocompleteDisabled","autocompleteDisabled"]},exportAs:["nxAutocompleteTrigger"],features:[l.Ab([S]),l.zb]}),t})()}}]);