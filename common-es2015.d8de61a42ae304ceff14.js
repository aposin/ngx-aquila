(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/BTq":function(t,e,n){"use strict";n.d(e,"a",function(){return a});var i=n("tgBs"),r=n("ofXK"),o=n("fXoL");let a=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Nb({type:t}),t.\u0275inj=o.Mb({imports:[[r.c,i.a]]}),t})();n("fCGn")},"1mk9":function(t,e,n){"use strict";n.d(e,"a",function(){return a});var i=n("fXoL");const r=["nxList",""],o=["*"];let a=(()=>{class t{constructor(){this.negative=!1,this.orderedCircle=!1}set classNames(t){if(this._classNames===t)return;this._classNames=t;const[e=null]=this._classNames.match(/xsmall|small|normal/)||["normal"];this.type=e,this.negative=!!this._classNames.match(/negative/),this.orderedCircle=!!this._classNames.match(/ordered-circle/)}get classNames(){return this._classNames}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Jb({type:t,selectors:[["ul","nxList",""],["ol","nxList",""]],hostVars:12,hostBindings:function(t,e){2&t&&i.Hb("nx-list",!0)("nx-list--xsmall","xsmall"===e.type)("nx-list--small","small"===e.type)("nx-list--normal","normal"===e.type)("nx-list--negative",e.negative)("nx-list--ordered-circle",e.orderedCircle)},inputs:{classNames:["nxList","classNames"]},attrs:r,ngContentSelectors:o,decls:1,vars:0,template:function(t,e){1&t&&(i.lc(),i.kc(0))},styles:['[_nghost-%COMP%]{color:var(--list-text-color);list-style:none;padding:0;counter-reset:list}.nx-list--normal[_nghost-%COMP%]{font-size:var(--paragraph-02-font-size);line-height:var(--paragraph-02-line-height);font-weight:var(--paragraph-02-font-weight);letter-spacing:var(--paragraph-02-letter-spacing)}.nx-list--small[_nghost-%COMP%]{font-size:var(--paragraph-03-font-size);line-height:var(--paragraph-03-line-height);font-weight:var(--paragraph-03-font-weight);letter-spacing:var(--paragraph-03-letter-spacing)}.nx-list--xsmall[_nghost-%COMP%]{font-size:var(--paragraph-04-font-size);line-height:var(--paragraph-04-line-height);font-weight:var(--paragraph-04-font-weight);letter-spacing:var(--paragraph-04-letter-spacing)}.nx-list--negative[_nghost-%COMP%], .nx-list--negative[_nghost-%COMP%]     .nx-list__icon{color:var(--negative)}[_nghost-%COMP%]     .nx-list__icon{position:absolute;left:0;font-size:var(--list-icon-size);color:var(--list-icon-color);top:calc((var(--paragraph-02-line-height) - var(--list-icon-size))/2);line-height:var(--list-icon-size);height:var(--list-icon-size)}[dir=rtl]   [_nghost-%COMP%]     .nx-list__icon{right:0;left:auto}ul.nx-list--small[_nghost-%COMP%]     li .nx-list__icon{top:calc((var(--paragraph-03-line-height) - var(--list-icon-size)) /2)}ul.nx-list--xsmall[_nghost-%COMP%]     li .nx-list__icon{top:calc((var(--paragraph-04-line-height) - var(--list-icon-size)) /2)}[_nghost-%COMP%]     li{padding-left:calc(var(--list-icon-size) + 12px);position:relative}[dir=rtl]   [_nghost-%COMP%]     li{padding-right:calc(var(--list-icon-size) + 12px);padding-left:0}[_nghost-%COMP%]     li:not(:last-child){margin-bottom:16px}ul[_nghost-%COMP%]    >li:not(.nx-list__icon-wrapper):before{background-color:var(--list-icon-color);border-radius:50%;content:"";display:inline-block;height:8px;width:8px;margin-right:16px;position:absolute;margin-left:calc(-1 * var(--list-icon-size));margin-top:calc((var(--paragraph-02-line-height) - 8px) /2);transform:translateX(-50%)}[dir=rtl]   ul[_nghost-%COMP%]    >li:not(.nx-list__icon-wrapper):before{margin-right:calc(-1 * var(--list-icon-size));margin-left:16px;transform:translateX(50%)}@media screen and (-ms-high-contrast:active){ul[_nghost-%COMP%]    >li:not(.nx-list__icon-wrapper):before{background-color:windowText!important}}ul.nx-list--small[_nghost-%COMP%]    >li:not(.nx-list__icon-wrapper):before{margin-top:calc((var(--paragraph-03-line-height) - 8px) /2)}ul.nx-list--xsmall[_nghost-%COMP%]    >li:not(.nx-list__icon-wrapper):before{margin-top:calc((var(--paragraph-04-line-height) - 8px) /2)}ol[_nghost-%COMP%]    >li:not(.nx-list__icon-wrapper):before{counter-increment:list;content:counter(list);position:absolute;font-size:inherit;font-weight:700;display:inline-block;width:var(--list-icon-size);text-align:center;left:0}[dir=rtl]   ol[_nghost-%COMP%]    >li:not(.nx-list__icon-wrapper):before{right:0;left:auto}[_nghost-%COMP%]     li>  ol, [_nghost-%COMP%]     li>  ul{margin-bottom:16px;margin-top:16px}ol.nx-list--ordered-circle[_nghost-%COMP%]    >li:not(.nx-list__icon-wrapper):before{width:var(--list-circle-size);font-size:var(--paragraph-03-font-size);line-height:var(--paragraph-03-line-height);font-weight:var(--paragraph-03-font-weight);letter-spacing:var(--paragraph-03-letter-spacing);color:#adff2f;color:var(--list-circle-text-color);left:0;top:calc((var(--paragraph-02-line-height) - var(--paragraph-03-line-height))/2);z-index:2}[dir=rtl]   ol.nx-list--ordered-circle[_nghost-%COMP%]    >li:not(.nx-list__icon-wrapper):before{right:0;left:auto}@media screen and (-ms-high-contrast:active){ol.nx-list--ordered-circle[_nghost-%COMP%]    >li:not(.nx-list__icon-wrapper):before{border:1px solid windowText;border-radius:50%}}ol.nx-list--ordered-circle[_nghost-%COMP%]    >li:not(.nx-list__icon-wrapper):after{border-radius:50%;width:var(--list-circle-size);height:var(--list-circle-size);background-color:var(--list-icon-color);left:0;top:calc((var(--paragraph-02-line-height) - var(--list-circle-size))/2);content:"";position:absolute}[dir=rtl]   ol.nx-list--ordered-circle[_nghost-%COMP%]    >li:not(.nx-list__icon-wrapper):after{right:0;left:auto}@media screen and (-ms-high-contrast:active){ol.nx-list--ordered-circle[_nghost-%COMP%]    >li:not(.nx-list__icon-wrapper):after{color:windowText}}ol.nx-list--ordered-circle.nx-list--small[_nghost-%COMP%]    >li:not(.nx-list__icon-wrapper):before{top:calc((var(--paragraph-03-line-height) - var(--paragraph-03-line-height))/2)}ol.nx-list--ordered-circle.nx-list--small[_nghost-%COMP%]    >li:not(.nx-list__icon-wrapper):after{top:calc((var(--paragraph-03-line-height) - var(--list-circle-size))/2)}ol.nx-list--ordered-circle.nx-list--xsmall[_nghost-%COMP%]    >li:not(.nx-list__icon-wrapper):before{top:calc((var(--paragraph-04-line-height) - var(--paragraph-03-line-height))/2)}ol.nx-list--ordered-circle.nx-list--xsmall[_nghost-%COMP%]    >li:not(.nx-list__icon-wrapper):after{top:calc((var(--paragraph-04-line-height) - var(--list-circle-size))/2)}ol.nx-list--ordered-circle.nx-list--negative[_nghost-%COMP%] >li:not(.nx-list__icon-wrapper):after{background-color:var(--negative)}ol.nx-list--ordered-circle.nx-list--negative[_nghost-%COMP%] >li:not(.nx-list__icon-wrapper):before{color:var(--negative-background)}ul.nx-list--negative[_nghost-%COMP%]    >li:not(.nx-list__icon-wrapper):before{background-color:var(--negative)}'],changeDetection:0}),t})()},"2H/T":function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n("2XWH");var i=n("ofXK"),r=n("fXoL");let o=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Nb({type:t}),t.\u0275inj=r.Mb({imports:[[i.c]]}),t})()},"2XWH":function(t,e,n){"use strict";n.d(e,"a",function(){return o});var i=n("fXoL");const r=["*"];let o=(()=>{class t{constructor(){this._position=[]}set position(t){this._position=t.split(" ")}get position(){return this._position.join(" ")}_hasPosition(t){return this._position.indexOf(t)>-1}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Jb({type:t,selectors:[["nx-indicator"]],hostVars:10,hostBindings:function(t,e){2&t&&i.Hb("nx-indicator",!0)("nx-indicator--over-text",e._hasPosition("over-text"))("nx-indicator--over-icon",e._hasPosition("over-icon"))("nx-indicator--after-text",e._hasPosition("after-text"))("nx-indicator--with-overlap",e._hasPosition("with-overlap"))},inputs:{position:"position"},ngContentSelectors:r,decls:1,vars:0,template:function(t,e){1&t&&(i.lc(),i.kc(0))},styles:["[_nghost-%COMP%]{display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;border-radius:12px;padding-left:3px;padding-right:3px;height:16px;font-size:var(--indicator-font-size);line-height:var(--indicator-line-height);font-weight:var(--indicator-font-weight);letter-spacing:var(--indicator-letter-spacing);color:var(--indicator-color);background-color:var(--indicator-background-color);border:1px solid var(--indicator-border-color)}[_nghost-%COMP%]:empty{height:10px;width:10px}[_nghost-%COMP%]:not(:empty){min-width:16px}@media screen and (-ms-high-contrast:active){[_nghost-%COMP%]{border:1px solid windowText;color:windowText;background-color:window}}.nx-indicator--over-text[_nghost-%COMP%]{position:absolute;top:0;left:100%}.nx-indicator--over-text[_nghost-%COMP%]:not(:empty){top:-4px}[dir=rtl]   .nx-indicator--over-text[_nghost-%COMP%]{left:auto;right:100%}.nx-indicator--with-overlap[_nghost-%COMP%]{position:absolute}.nx-indicator--with-overlap[_nghost-%COMP%]:not(:empty){left:calc(100% - 4px)}[dir=rtl]   .nx-indicator--with-overlap[_nghost-%COMP%]:not(:empty){left:auto;right:calc(100% - 4px)}.nx-indicator--after-text[_nghost-%COMP%]{vertical-align:top;margin-left:4px}[dir=rtl]   .nx-indicator--after-text[_nghost-%COMP%]{margin-left:0;margin-right:4px}.nx-indicator--over-icon[_nghost-%COMP%]{position:absolute;left:50%;bottom:50%}.nx-indicator--over-icon[_nghost-%COMP%]:empty{left:calc(50% + 2px);bottom:calc(50% + 2px)}[dir=rtl]   .nx-indicator--over-icon[_nghost-%COMP%]{left:auto;right:50%}[dir=rtl]   .nx-indicator--over-icon[_nghost-%COMP%]:empty{left:auto;right:calc(50% + 2px)}_:-ms-fullscreen.nx-indicator--over-icon[_nghost-%COMP%], _:-ms-fullscreen   .nx-indicator--over-icon[_nghost-%COMP%], :root.nx-indicator--over-icon[_nghost-%COMP%], :root   .nx-indicator--over-icon[_nghost-%COMP%], _:-ms-fullscreen.nx-indicator--over-text[_nghost-%COMP%], _:-ms-fullscreen   .nx-indicator--over-text[_nghost-%COMP%], :root.nx-indicator--over-text[_nghost-%COMP%], :root   .nx-indicator--over-text[_nghost-%COMP%]{display:block;padding-top:1px;text-align:center}"],changeDetection:0}),t})()},"6t9B":function(t,e,n){"use strict";n.d(e,"a",function(){return o});var i=n("ofXK"),r=n("fXoL");let o=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Nb({type:t}),t.\u0275inj=r.Mb({providers:[],imports:[[i.c]]}),t})();n("8LlT")},"8LlT":function(t,e,n){"use strict";n.d(e,"a",function(){return s});var i=n("zB3U"),r=n("fXoL"),o=n("ofXK");let a=0,s=(()=>{class t{constructor(){this.progressbarId="nx-progress-bar-"+a++,this._value=0}get value(){return this._value}set value(t){this._value=Object(i.e)(t||0)}_primaryTransform(){return{transform:`scaleX(${this.value})`}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Jb({type:t,selectors:[["nx-progressbar"]],hostVars:1,hostBindings:function(t,e){2&t&&r.Eb("aria-valuenow",e.value)},inputs:{value:"value"},decls:2,vars:1,consts:[[1,"nx-progress__track"],[1,"nx-progress__indicator",3,"ngStyle"]],template:function(t,e){1&t&&(r.Vb(0,"div",0),r.Qb(1,"div",1),r.Ub()),2&t&&(r.Db(1),r.mc("ngStyle",e._primaryTransform()))},directives:[o.r],styles:['[_nghost-%COMP%]{display:block;height:4px;overflow:hidden;position:relative;width:100%}.nx-progress__track[_ngcontent-%COMP%]{background-color:var(--progressbar-background-color);height:100%}.nx-progress__indicator[_ngcontent-%COMP%]{transform-origin:top left;height:100%;position:absolute;width:100%}[dir=rtl][_nghost-%COMP%]   .nx-progress__indicator[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-progress__indicator[_ngcontent-%COMP%]{transform-origin:top right}.nx-progress__indicator[_ngcontent-%COMP%]:after{height:100%;position:absolute;width:100%;-webkit-animation:none;animation:none;content:"";display:inline-block;left:0;background-color:var(--progressbar-indicator-color)}[dir=rtl][_nghost-%COMP%]   .nx-progress__indicator[_ngcontent-%COMP%]:after, [dir=rtl]   [_nghost-%COMP%]   .nx-progress__indicator[_ngcontent-%COMP%]:after{right:0;left:auto}@media screen and (-ms-high-contrast:active){[_nghost-%COMP%]{height:8px}.nx-progress__track[_ngcontent-%COMP%]{border:1px solid windowFrame;border-radius:2px}.nx-progress__indicator[_ngcontent-%COMP%]{border-right:1px solid windowFrame}[dir=rtl][_ngcontent-%COMP%]   .nx-progress__indicator[_ngcontent-%COMP%]{border-right:none;border-left:1px solid windowFrame}.nx-progress__indicator[_ngcontent-%COMP%]:after{background:highlight}}'],changeDetection:0}),t})()},Fzyg:function(t,e,n){"use strict";n.d(e,"a",function(){return g});var i=n("8LU1"),r=n("KlmI"),o=n("JX91"),a=n("pLZG"),s=n("1G5W"),l=n("XNiG"),c=n("fXoL");const d=["nxBreadcrumb",""],h=["*"];let g=(()=>{class t{constructor(t){this._cdr=t,this._destroyed=new l.a,this._negative=!1}set negative(t){this._negative=Object(i.b)(t),this._cdr.markForCheck()}get negative(){return this._negative}ngAfterContentInit(){0===this.breadcrumbItems.length&&console.warn("A breadcrumb needs NxBreadcrumbItemComponent children wrapped in <li>!"),this.breadcrumbItems.changes.pipe(Object(o.a)(this.breadcrumbItems),Object(a.a)(t=>0!==t.length),Object(s.a)(this._destroyed)).subscribe(t=>{this.breadcrumbItems.forEach(t=>t.resetAriaLabel()),this.breadcrumbItems.last.setAsLast()})}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}}return t.\u0275fac=function(e){return new(e||t)(c.Pb(c.h))},t.\u0275cmp=c.Jb({type:t,selectors:[["ol","nxBreadcrumb",""]],contentQueries:function(t,e,n){if(1&t&&c.Ib(n,r.a,1),2&t){let t;c.sc(t=c.dc())&&(e.breadcrumbItems=t)}},hostVars:2,hostBindings:function(t,e){2&t&&c.Hb("is-negative",e.negative)},inputs:{negative:"negative"},attrs:d,ngContentSelectors:h,decls:1,vars:0,template:function(t,e){1&t&&(c.lc(),c.kc(0))},styles:["[_nghost-%COMP%]{display:flex;list-style:none;height:24px;padding:0}  li:last-child   .nx-breadcrumb-item{font-weight:600;cursor:auto}  li:last-child   .nx-breadcrumb-item__chevron{display:none}  li+li   .nx-breadcrumb-item{margin-left:4px}[dir=rtl][_nghost-%COMP%]     li+li   .nx-breadcrumb-item, [dir=rtl]   [_nghost-%COMP%]     li+li   .nx-breadcrumb-item{margin-left:0;margin-right:4px}.is-negative[_nghost-%COMP%]     .nx-breadcrumb-item{color:var(--negative)}@media screen and (-ms-high-contrast:active){  .nx-breadcrumb-item__chevron{color:windowText}}"],changeDetection:0}),t})()},ITZj:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var i=n("fXoL");const r=["nxFigure",""],o=["*"];let a=(()=>{class t{set classNames(t){if(this._classNames===t)return;this._classNames=t;const[e=null]=this._classNames.match(/^(auto|1by1|1dot8by1|1dot2by1|1by1dot1|2dot6by1)$/)||["auto"];this.size=e,this.rounded=!!this._classNames.match(/rounded/)}get classNames(){return this._classNames}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Jb({type:t,selectors:[["figure","nxFigure",""]],hostVars:16,hostBindings:function(t,e){2&t&&i.Hb("nx-image",!0)("nx-image--auto","auto"===e.size&&!e.rounded)("nx-image--1by1","1by1"===e.size)("nx-image--1dot8by1","1dot8by1"===e.size)("nx-image--1dot2by1","1dot2by1"===e.size)("nx-image--1by1dot1","1by1dot1"===e.size)("nx-image--2dot6by1","2dot6by1"===e.size)("nx-image--rounded",e.rounded)},inputs:{classNames:["nxFigure","classNames"]},attrs:r,ngContentSelectors:o,decls:1,vars:0,template:function(t,e){1&t&&(i.lc(),i.kc(0))},styles:['[_nghost-%COMP%]{display:block;position:relative;line-height:0}[_nghost-%COMP%]     img{display:block;font-family:"object-fit: cover;";-o-object-fit:cover;object-fit:cover;height:100%;width:100%}.nx-image--auto[_nghost-%COMP%]     img{height:auto}[_nghost-%COMP%]:not(.nx-image--auto)     img{position:absolute;top:0;left:0}[dir=rtl]   [_nghost-%COMP%]:not(.nx-image--auto)     img{right:0;left:auto}.nx-image--rounded[_nghost-%COMP%]{padding-top:100%}.nx-image--rounded[_nghost-%COMP%]     img{border-radius:50%;bottom:0;left:0;position:absolute;right:0;top:0}.nx-image--1by1[_nghost-%COMP%]{padding-top:100%}.nx-image--1dot8by1[_nghost-%COMP%]{padding-top:55.5555555556%}.nx-image--1dot2by1[_nghost-%COMP%]{padding-top:83.3333333333%}.nx-image--1by1dot1[_nghost-%COMP%]{padding-top:110%}.nx-image--2dot6by1[_nghost-%COMP%]{padding-top:38.4615384615%}.nx-image--1by1dot4[_nghost-%COMP%]{padding-top:140%}'],changeDetection:0}),t})()},KlmI:function(t,e,n){"use strict";n.d(e,"a",function(){return l});var i=n("fXoL"),r=n("u47x"),o=n("+vaC");const a=["nxBreadcrumbItem",""],s=["*"];let l=(()=>{class t{constructor(t,e,n){this._renderer=t,this._elemRef=e,this._focusMonitor=n,this._focusMonitor.monitor(this._elemRef)}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elemRef)}setAsLast(){this._renderer.setAttribute(this._elemRef.nativeElement,"aria-current","page")}resetAriaLabel(){this._renderer.removeAttribute(this._elemRef.nativeElement,"aria-current")}_onIconClick(t){t.stopPropagation(),t.preventDefault()}}return t.\u0275fac=function(e){return new(e||t)(i.Pb(i.H),i.Pb(i.l),i.Pb(r.g))},t.\u0275cmp=i.Jb({type:t,selectors:[["a","nxBreadcrumbItem",""]],hostAttrs:[1,"nx-breadcrumb-item"],attrs:a,ngContentSelectors:s,decls:3,vars:0,consts:[[1,"nx-breadcrumb-item__text"],["aria-hidden","true","name","chevron-right",1,"nx-breadcrumb-item__chevron",3,"click"]],template:function(t,e){1&t&&(i.lc(),i.Vb(0,"span",0),i.kc(1),i.Ub(),i.Vb(2,"nx-icon",1),i.cc("click",function(t){return e._onIconClick(t)}),i.Ub())},directives:[o.a],styles:["[_nghost-%COMP%]{text-decoration:none;display:flex;align-items:center;cursor:auto;color:var(--breadcrumb-color);font-size:var(--breadcrumb-font-size);line-height:var(--breadcrumb-line-height);font-weight:var(--breadcrumb-font-weight);letter-spacing:var(--breadcrumb-letter-spacing)}.nx-breadcrumb-item__chevron[_ngcontent-%COMP%]{margin-left:4px}[dir=rtl][_nghost-%COMP%]   .nx-breadcrumb-item__chevron[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-breadcrumb-item__chevron[_ngcontent-%COMP%]{margin-left:0;margin-right:4px;transform:rotate(180deg)}.nx-breadcrumb-item__text[_ngcontent-%COMP%]{cursor:pointer}.cdk-keyboard-focused[_nghost-%COMP%]   .nx-breadcrumb-item__text[_ngcontent-%COMP%]{box-shadow:var(--focus-box-shadow)}@media screen and (-ms-high-contrast:active){.cdk-keyboard-focused[_nghost-%COMP%]   .nx-breadcrumb-item__text[_ngcontent-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}"],changeDetection:0}),t})()},csxQ:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var i=n("fXoL");let r=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Nb({type:t}),t.\u0275inj=i.Mb({}),t})();n("ITZj")},fCGn:function(t,e,n){"use strict";n.d(e,"a",function(){return x});var i=n("zB3U"),r=n("8LU1"),o=n("FtGj"),a=n("fXoL"),s=n("3Pt+"),l=n("QSgb"),c=n("xgIS"),d=n("cH1L"),h=n("u47x"),g=n("ofXK");const u=["handle"];function b(t,e){if(1&t&&(a.Vb(0,"span",9),a.Ic(1),a.Qb(2,"div",10),a.Ub()),2&t){const t=a.gc();a.Db(1),a.Kc("",t.formatValue(t.value)," ")}}var _=function(t){return t[t.TOUCH=0]="TOUCH",t[t.MOUSE=1]="MOUSE",t}({});let p=0,x=(()=>{class t{constructor(t,e,n,i,r){this.elementRef=t,this._changeDetectorRef=e,this._ngZone=n,this._dir=i,this._focusMonitor=r,this._id="nx-slider-"+p++,this._tabIndex=0,this._min=0,this._max=100,this._disabled=!1,this._inverted=!1,this._thumbLabel=!0,this._negative=!1,this.valueChange=new a.o,this.isActive=!1,this.dragSubscriptions=[],this.position=null,this._value=0,this._step=1,this._currentValue=0,this._onChange=()=>{},this._onTouched=()=>{},this.valueFormatter=t=>t,this.labelMinFormatter=t=>t,this.labelMaxFormatter=t=>t}set id(t){this._id!==t&&(this._id=t,this._changeDetectorRef.markForCheck())}get id(){return this._id}set tabindex(t){this._tabIndex=Object(r.e)(t),this._changeDetectorRef.markForCheck()}get tabindex(){return this._disabled?-1:this._tabIndex}set min(t){this._min=Object(r.e)(t),this._changeDetectorRef.markForCheck()}get min(){return this._min}set max(t){this._max=Object(r.e)(t),this._changeDetectorRef.markForCheck()}get max(){return this._max}get step(){return this._step}set step(t){this._step=Object(r.e)(t,this._step),this._step%1!=0&&(this._roundToDecimal=this._step.toString().split(".").pop().length)}set label(t){this._label!==t&&(this._label=t,this._changeDetectorRef.markForCheck())}get label(){return this._label}set disabled(t){this._disabled=Object(r.b)(t),this._changeDetectorRef.markForCheck()}get disabled(){return this._disabled}set inverted(t){this._inverted=Object(r.b)(t),this._changeDetectorRef.markForCheck()}get inverted(){return this._inverted}set thumbLabel(t){this._thumbLabel=Object(r.b)(t),this._changeDetectorRef.markForCheck()}get thumbLabel(){return this._thumbLabel}set negative(t){this._negative=Object(r.b)(t),this._changeDetectorRef.markForCheck()}get negative(){return this._negative}ngAfterViewInit(){this._focusMonitor.monitor(this.handleElement)}set value(t){this.writeValue(Number(t))}get value(){return this._value}ngOnDestroy(){this.reset(),this._focusMonitor.stopMonitoring(this.handleElement)}writeValue(t){t!==this._value&&(this._value=t,this.valueChange.emit(t),this._changeDetectorRef.markForCheck())}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t}isMinimum(){return this._value===this.min}isValidStep(){const t=new l.Decimal(this._value).minus(this.min).mod(this.step);return this.isMinimum()||0===t.cmp(0)}changeValue(t){let e=new l.Decimal(this._value);this.isValidStep()?e=e.plus(t):(e=new l.Decimal(this._value).minus(this.min).toNearest(this.step,t<0?l.Decimal.ROUND_DOWN:l.Decimal.ROUND_UP),e=e.plus(this.min));let n=e.toNumber();n=Object(i.e)(n,this.min,this.max),this.value!==n&&(this._onChange(n),this.valueChange.emit(n),this.value=n)}get percentageValue(){let t=((this.value||0)-this.min)/(this.max-this.min)*100;return this.inverted&&(t=100-t),Object(i.e)(t,0,100)}sliderClick(t){this.disabled||(this._focusHandleElement(),t.stopPropagation(),this.position=this.getPositionFromEvent(t),this.frameId=requestAnimationFrame(()=>{this.valueByPosition(),this.value!==this._currentValue&&(this._currentValue=this.value,this._onChange(this.value))}))}focus(){this.disabled||this._focusHandleElement()}blur(){}selectStart(){return!1}handleKeypress(t){if(!this.disabled&&!(t.which<o.i||t.which>o.d))switch(t.which){case this.inverted?o.n:o.i:case o.d:return this.changeValue(-this.step);case o.r:case this.inverted?o.i:o.n:return this.changeValue(this.step)}}dragStart(t){if(this.disabled)return;this.isActive=!0;const e=this.detectEventType(t)===_.TOUCH;this._currentValue=this.value,e?(this._ngZone.runOutsideAngular(()=>{this.dragSubscriptions.push(Object(c.a)(document,"touchmove").subscribe(this.handleDragMove.bind(this))),this.dragSubscriptions.push(Object(c.a)(document,"touchend").subscribe(this.handleDragStop.bind(this)))}),this._ngZone.run(()=>{this.dragSubscriptions.push(Object(c.a)(document,"touchcancel").subscribe(this.handleDragStop.bind(this)))})):(this._ngZone.runOutsideAngular(()=>{this.dragSubscriptions.push(Object(c.a)(document,"mousemove").subscribe(this.handleDragMove.bind(this)))}),this._ngZone.run(()=>{this.dragSubscriptions.push(Object(c.a)(document,"mouseup").subscribe(this.handleDragStop.bind(this)))})),this.position=this.getPositionFromEvent(t),this.runChangeObserver()}formatValue(t){return this.valueFormatter(t)}formatLabelLeft(){return this.inverted?this.formatLabelMax():this.formatLabelMin()}formatLabelRight(){return this.inverted?this.formatLabelMin():this.formatLabelMax()}valueByPosition(){const t=this._dir&&"rtl"===this._dir.value,e=this.elementRef.nativeElement.getBoundingClientRect();let n,r=(Math.max(e.left,Math.min(e.right,this.position.x))-e.left)/e.width;this.inverted&&(r=1-r),t&&(r=1-r),n=1===r?this.max:0===r?this.min:Math.round((this.min+r*(this.max-this.min)-this.min)/this.step)*this.step+this.min,this._roundToDecimal&&(n=this.roundToDecimal(n)),n=Object(i.e)(n,this.min,this.max),this.value=n}roundToDecimal(t){return parseFloat(t.toFixed(this._roundToDecimal))}formatLabelMin(){return this.labelMinFormatter(this.min)}formatLabelMax(){return this.labelMaxFormatter(this.max)}handleDragMove(t){this.position=this.getPositionFromEvent(t)}handleDragStop(t){this.reset(),this.valueByPosition(),this.value!==this._currentValue&&(this._currentValue=this.value,this._onChange(this.value))}runChangeObserver(){this.frameId=requestAnimationFrame(()=>{this.valueByPosition(),this.isActive&&this.runChangeObserver()})}reset(){this.isActive=!1;for(const t of this.dragSubscriptions)t.unsubscribe();this.dragSubscriptions=[],cancelAnimationFrame(this.frameId)}detectEventType(t){return t.type.includes("touch")?_.TOUCH:_.MOUSE}getPositionFromEvent(t){const e=this.detectEventType(t)===_.TOUCH?t.touches.item(0):t;return{x:e.clientX,y:e.clientY}}_focusHandleElement(){this.handleElement.nativeElement.focus()}}return t.\u0275fac=function(e){return new(e||t)(a.Pb(a.l),a.Pb(a.h),a.Pb(a.B),a.Pb(d.c,8),a.Pb(h.g))},t.\u0275cmp=a.Jb({type:t,selectors:[["nx-slider"]],viewQuery:function(t,e){if(1&t&&a.Mc(u,3),2&t){let t;a.sc(t=a.dc())&&(e.handleElement=t.first)}},hostVars:5,hostBindings:function(t,e){1&t&&a.cc("keydown",function(t){return e.handleKeypress(t)}),2&t&&(a.Eb("aria-disabled",!!e.disabled||null),a.Hb("nx-slider--disabled",e.disabled)("nx-slider--negative",e.negative))},inputs:{id:"id",tabindex:"tabindex",min:["nxMin","min"],max:["nxMax","max"],step:["nxStep","step"],label:["nxLabel","label"],disabled:"disabled",inverted:["nxInverted","inverted"],thumbLabel:"thumbLabel",negative:"negative",valueFormatter:["nxValueFormatter","valueFormatter"],labelMinFormatter:["nxLabelMinFormatter","labelMinFormatter"],labelMaxFormatter:["nxLabelMaxFormatter","labelMaxFormatter"],value:["nxValue","value"]},outputs:{valueChange:"nxValueChange"},features:[a.Cb([{provide:s.n,useExisting:Object(a.W)(()=>t),multi:!0}])],decls:13,vars:15,consts:[[1,"nx-slider__label",3,"id","click"],[1,"nx-slider__wrapper",3,"click"],[1,"nx-slider__background"],[1,"nx-slider__filler"],["role","slider",1,"nx-slider__handle",3,"id","mousedown","touchstart","selectstart"],["handle",""],["class","nx-slider__value",4,"ngIf"],[1,"nx-slider__label-container"],[1,"nx-slider__value-label"],[1,"nx-slider__value"],[1,"nx-slider__arrow"]],template:function(t,e){1&t&&(a.Vb(0,"label",0),a.cc("click",function(){return e._focusHandleElement()}),a.Ic(1),a.Ub(),a.Vb(2,"div",1),a.cc("click",function(t){return e.sliderClick(t)}),a.Vb(3,"span",2),a.Qb(4,"span",3),a.Vb(5,"div",4,5),a.cc("mousedown",function(t){return e.dragStart(t)})("touchstart",function(t){return e.dragStart(t)})("selectstart",function(){return e.selectStart()}),a.Gc(7,b,3,1,"span",6),a.Ub(),a.Ub(),a.Ub(),a.Vb(8,"div",7),a.Vb(9,"span",8),a.Ic(10),a.Ub(),a.Vb(11,"span",8),a.Ic(12),a.Ub(),a.Ub()),2&t&&(a.mc("id",e.id+"-label"),a.Eb("for",e.id+"-handle"),a.Db(1),a.Jc(e.label),a.Db(3),a.Dc("width",e.percentageValue,"%"),a.Db(1),a.mc("id",e.id+"-handle"),a.Eb("tabindex",e.tabindex)("aria-labelledby",e.id+"-label")("aria-valuemin",e.formatLabelMin())("aria-valuemax",e.formatLabelMax())("aria-valuetext",e.formatValue(e.value))("aria-valuenow",e.formatValue(e.value)),a.Db(2),a.mc("ngIf",e.thumbLabel),a.Db(3),a.Jc(e.formatLabelLeft()),a.Db(2),a.Jc(e.formatLabelRight()))},directives:[g.q],styles:["[_nghost-%COMP%]{display:block}.nx-slider__label[_ngcontent-%COMP%]{font-size:var(--slider-label-font-size);line-height:var(--slider-label-line-height);font-weight:var(--slider-label-font-weight);letter-spacing:var(--slider-label-letter-spacing);color:var(--slider-label-color)}.nx-slider__wrapper[_ngcontent-%COMP%]{width:100%;padding:66px 0 18px}.nx-slider__background[_ngcontent-%COMP%]{position:relative;background-color:var(--slider-background-color);display:block;height:4px;border-radius:2px;white-space:nowrap;cursor:pointer}.nx-slider__filler[_ngcontent-%COMP%]{display:inline-block;height:4px;border-radius:2px;background-color:var(--slider-indicator-color);float:left}[dir=rtl][_nghost-%COMP%]   .nx-slider__filler[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-slider__filler[_ngcontent-%COMP%]{float:right}.nx-slider__handle[_ngcontent-%COMP%]{display:inline-block;position:relative;width:24px;height:24px;border-radius:50%;box-shadow:0 2px 4px rgba(65,65,65,.5);border:1px solid var(--slider-handle-border-color);background:var(--slider-handle-background-color);box-sizing:border-box;margin-left:-12px;top:-10px;z-index:2;cursor:-webkit-grab;cursor:grab}[dir=rtl][_nghost-%COMP%]   .nx-slider__handle[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-slider__handle[_ngcontent-%COMP%]{margin-right:-12px;margin-left:0}.nx-slider__handle[_ngcontent-%COMP%]:focus{outline:none;border-color:var(--slider-handle-focus-border-color)}.nx-slider__handle[_ngcontent-%COMP%]:active{box-shadow:0 2px 4px rgba(65,65,65,.5),inset 0 0 0 4px var(--slider-handle-background-color),inset 0 0 0 24px var(--slider-handle-active-inset-color);cursor:-webkit-grabbing;cursor:grabbing}.nx-slider__handle.cdk-keyboard-focused[_ngcontent-%COMP%]{border-color:var(--slider-handle-focus-border-color);box-shadow:var(--focus-box-shadow)}@media screen and (-ms-high-contrast:active){.nx-slider__handle.cdk-keyboard-focused[_ngcontent-%COMP%]{box-shadow:0 0 0 2px background,0 0 0 6px windowText;outline:4px solid CanvasText;outline-offset:2px}}.nx-slider__value[_ngcontent-%COMP%]{font-size:var(--slider-handle-value-font-size);line-height:var(--slider-handle-value-line-height);font-weight:var(--slider-handle-value-font-weight);letter-spacing:var(--slider-handle-value-letter-spacing);color:var(--slider-handle-value-color);border:1px solid;border-color:var(--slider-handle-border-color);border-radius:4px;box-shadow:0 2px 4px rgba(65,65,65,.5);cursor:-webkit-grab;cursor:grab;height:24px;width:48px;text-align:center;right:8px;padding:3px 8px;position:relative;top:-40px;display:table;left:50%;transform:translateX(-50%);background:var(--slider-value-background-color)}[dir=rtl][_nghost-%COMP%]   .nx-slider__value[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .nx-slider__value[_ngcontent-%COMP%]{right:50%;left:8px;transform:translateX(50%)}.nx-slider__value[_ngcontent-%COMP%]:active{cursor:-webkit-grabbing;cursor:grabbing}.nx-slider__arrow[_ngcontent-%COMP%]{width:6px;height:6px;left:50%;transform:translate(-50%,1px) rotate(45deg);position:absolute;box-shadow:-2px -2px 1px 1px var(--slider-value-background-color),2px 2px 4px rgba(65,65,65,.5);background:var(--slider-value-background-color);border-left-color:var(--slider-handle-border-color);border-bottom:1px solid;border-bottom-color:var(--slider-handle-border-color);border-right:1px solid;border-right-color:var(--slider-handle-border-color);border-top-color:var(--slider-handle-border-color)}.nx-slider__label-container[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:space-between;font-size:var(--slider-value-label-font-size);line-height:var(--slider-value-label-line-height);font-weight:var(--slider-value-label-font-weight);letter-spacing:var(--slider-value-label-letter-spacing);color:var(--slider-value-label-color)}.nx-slider__max-value-label[_ngcontent-%COMP%]{text-align:right}.nx-slider--disabled[_nghost-%COMP%]{cursor:not-allowed}.nx-slider--disabled[_nghost-%COMP%]   .nx-slider__background[_ngcontent-%COMP%], .nx-slider--disabled[_nghost-%COMP%]   .nx-slider__filler[_ngcontent-%COMP%], .nx-slider--disabled[_nghost-%COMP%]   .nx-slider__handle[_ngcontent-%COMP%], .nx-slider--disabled[_nghost-%COMP%]   .nx-slider__value[_ngcontent-%COMP%], .nx-slider--disabled[_nghost-%COMP%]   .nx-slider__value-label[_ngcontent-%COMP%]{pointer-events:none;cursor:not-allowed}.nx-slider--disabled[_nghost-%COMP%]   .nx-slider__handle[_ngcontent-%COMP%], .nx-slider--disabled[_nghost-%COMP%]   .nx-slider__value[_ngcontent-%COMP%]{background-color:var(--slider-value-disabled-background-color)}.nx-slider--disabled[_nghost-%COMP%]   .nx-slider__filler[_ngcontent-%COMP%]{background-color:var(--slider-indicator-disabled-color)}.nx-slider--disabled[_nghost-%COMP%]   .nx-slider__value[_ngcontent-%COMP%]{color:var(--slider-handle-value-disabled-color)}.nx-slider--disabled[_nghost-%COMP%]   .nx-slider__label-container[_ngcontent-%COMP%]{color:var(--slider-value-label-disabled-color)}.nx-slider--disabled[_nghost-%COMP%]   .nx-slider__arrow[_ngcontent-%COMP%]{background:var(--slider-value-disabled-background-color);box-shadow:-2px -2px 1px 1px var(--slider-value-disabled-background-color),2px 2px 4px rgba(65,65,65,.5)}.nx-slider--disabled[_nghost-%COMP%]   .nx-slider__background[_ngcontent-%COMP%]{background:var(--slider-disabled-background-color)}.nx-slider--negative[_nghost-%COMP%]   .nx-slider__label[_ngcontent-%COMP%], .nx-slider--negative[_nghost-%COMP%]   .nx-slider__value-label[_ngcontent-%COMP%]{color:var(--negative)}.nx-slider--negative[_nghost-%COMP%]   .nx-slider__filler[_ngcontent-%COMP%]{background-color:var(--negative)}.nx-slider--negative[_nghost-%COMP%]   .nx-slider__background[_ngcontent-%COMP%]{background-color:var(--slider-negative-background-color)}.nx-slider--negative.nx-slider--disabled[_nghost-%COMP%]   .nx-slider__label[_ngcontent-%COMP%], .nx-slider--negative.nx-slider--disabled[_nghost-%COMP%]   .nx-slider__value-label[_ngcontent-%COMP%]{color:var(--negative-01)}.nx-slider--negative.nx-slider--disabled[_nghost-%COMP%]   .nx-slider__filler[_ngcontent-%COMP%]{background-color:var(--negative-01)}@media screen and (-ms-high-contrast:active){.nx-slider__background[_ngcontent-%COMP%]{background-color:buttonFace;border:1px solid buttonText}.nx-slider__filler[_ngcontent-%COMP%]{background-color:highlight}.nx-slider__handle[_ngcontent-%COMP%]{background-color:buttonFace;border-color:buttonText}.nx-slider__handle[_ngcontent-%COMP%]:focus, .nx-slider__handle[_ngcontent-%COMP%]:hover{background-color:highlight}.nx-slider__handle[_ngcontent-%COMP%]:active{background-color:buttonText}.nx-slider__value[_ngcontent-%COMP%]{border-color:buttonText;color:buttonText}.nx-slider--disabled[_nghost-%COMP%]   .nx-slider__background[_ngcontent-%COMP%]{background-color:Canvas;border:1px solid GrayText}.nx-slider--disabled[_nghost-%COMP%]   .nx-slider__filler[_ngcontent-%COMP%], .nx-slider--disabled[_nghost-%COMP%]   .nx-slider__handle[_ngcontent-%COMP%]{background-color:GrayText}.nx-slider--disabled[_nghost-%COMP%]   .nx-slider__value[_ngcontent-%COMP%]{border-color:GrayText;color:GrayText}.nx-slider--disabled[_nghost-%COMP%]   .nx-slider__arrow[_ngcontent-%COMP%]{border-color:GrayText}.nx-slider--negative.nx-slider--disabled[_nghost-%COMP%]   .nx-slider__filler[_ngcontent-%COMP%]{background-color:GrayText}}"],changeDetection:0}),t})()},hejp:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var i=n("mN63"),r=n("fXoL");let o=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Nb({type:t,bootstrap:[i.b]}),t.\u0275inj=r.Mb({imports:[[i.c]]}),t})();n("1mk9"),n("zegV")},yuZ6:function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n("Fzyg"),n("KlmI");var i=n("mN63"),r=n("fXoL");let o=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Nb({type:t}),t.\u0275inj=r.Mb({imports:[[i.c]]}),t})()},zegV:function(t,e,n){"use strict";n.d(e,"a",function(){return l});var i=n("fXoL"),r=n("+vaC");const o=["viewRefPrefix"],a=["nxListIcon",""],s=["*"];let l=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Jb({type:t,selectors:[["li","nxListIcon",""]],viewQuery:function(t,e){if(1&t&&i.Mc(o,1,i.S),2&t){let t;i.sc(t=i.dc())&&(e.viewRefPrefix=t.first)}},hostVars:2,hostBindings:function(t,e){2&t&&i.Hb("nx-list__icon-wrapper",!0)},inputs:{name:["nxListIcon","name"]},attrs:a,ngContentSelectors:s,decls:3,vars:1,consts:[[1,"nx-list__icon"],[3,"name"]],template:function(t,e){1&t&&(i.lc(),i.Vb(0,"span",0),i.Qb(1,"nx-icon",1),i.Ub(),i.kc(2)),2&t&&(i.Db(1),i.mc("name",e.name))},directives:[r.a],encapsulation:2}),t})()}}]);