!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var s,o=e[Symbol.iterator]();!(r=(s=o.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(l){a=!0,i=l}finally{try{r||null==o.return||o.return()}finally{if(a)throw i}}return n}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"/sJ9":function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r,i=n("fXoL"),s=((r=function e(){a(this,e)}).\u0275mod=i.Lb({type:r}),r.\u0275inj=i.Kb({factory:function(e){return new(e||r)}}),r);n("LktG")},LktG:function(t,n,i){"use strict";i.d(n,"a",function(){return c});var s=i("fXoL"),o=["nxCopytext",""],l=["*"],c=function(){var t=function(){function t(){a(this,t),this.type="normal",this.negative=!1}return r(t,[{key:"classNames",set:function(t){if(this._classNames!==t){this._classNames=t;var n=e(this._classNames.match(/small|medium|normal|large/)||["normal"],1)[0],r=void 0===n?null:n;this.type=r,this.negative=!!this._classNames.match(/negative/)}},get:function(){return this._classNames}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Hb({type:t,selectors:[["","nxCopytext",""]],hostVars:12,hostBindings:function(e,t){2&e&&s.Fb("nx-copy",!0)("nx-copy--small","small"===t.type)("nx-copy--medium","medium"===t.type)("nx-copy--normal","normal"===t.type)("nx-copy--large","large"===t.type)("nx-copy--negative",t.negative)},inputs:{classNames:["nxCopytext","classNames"]},attrs:o,ngContentSelectors:l,decls:1,vars:0,template:function(e,t){1&e&&(s.jc(),s.ic(0))},styles:["[_nghost-%COMP%]{margin:0;font-size:var(--paragraph-03-font-size);line-height:var(--paragraph-03-line-height);font-weight:var(--paragraph-03-font-weight);letter-spacing:var(--paragraph-03-letter-spacing)}.nx-copy.nx-copy[_nghost-%COMP%]{font-weight:400}.nx-copy--negative[_nghost-%COMP%]{color:var(--negative)}.nx-copy--small[_nghost-%COMP%]{font-size:var(--paragraph-05-font-size);line-height:var(--paragraph-05-line-height);font-weight:var(--paragraph-05-font-weight);letter-spacing:var(--paragraph-05-letter-spacing)}.nx-copy--medium[_nghost-%COMP%]{font-size:var(--paragraph-04-font-size);line-height:var(--paragraph-04-line-height);font-weight:var(--paragraph-04-font-weight);letter-spacing:var(--paragraph-04-letter-spacing)}.nx-copy--large[_nghost-%COMP%]{font-size:var(--paragraph-02-font-size);line-height:var(--paragraph-02-line-height);font-weight:var(--paragraph-02-font-weight);letter-spacing:var(--paragraph-02-letter-spacing)}"],changeDetection:0}),t}()},TviL:function(e,t,n){"use strict";n.r(t),n.d(t,"SliderExamplesModule",function(){return j});var i,s,o,l,c,u,p,f,m,d,x,h,b=n("AqTC"),g=n("/BTq"),v=n("fXoL"),y=n("fCGn"),M=((i=function e(){a(this,e),this.sliderDemoValue=42,this.step=.1}).\u0275fac=function(e){return new(e||i)},i.\u0275cmp=v.Hb({type:i,selectors:[["slider-basic-example"]],decls:2,vars:5,consts:[["nxLabel","Slider Test Label",3,"nxMin","nxMax","nxStep","nxValue","nxValueChange"]],template:function(e,t){1&e&&(v.Tb(0,"nx-slider",0),v.ac("nxValueChange",function(e){return t.sliderDemoValue=e}),v.Sb(),v.Jc(1)),2&e&&(v.kc("nxMin",10)("nxMax",110)("nxStep",2)("nxValue",t.sliderDemoValue),v.Bb(1),v.Lc("\nSlider value: ",t.sliderDemoValue,"\n"))},directives:[y.a],styles:[""]}),i),S=n("HXSb"),L=n("nK+a"),w=n("3Pt+"),F=((p=function e(){a(this,e),this.step=.1,this.floatSliderDemoValue=1}).\u0275fac=function(e){return new(e||p)},p.\u0275cmp=v.Hb({type:p,selectors:[["slider-decimal-example"]],decls:4,vars:6,consts:[[3,"nxMin","nxMax","nxStep","nxValue","nxValueChange"],["nxLabel","Stepsize"],["nxInput","",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(v.Tb(0,"nx-slider",0),v.ac("nxValueChange",function(e){return t.floatSliderDemoValue=e}),v.Sb(),v.Jc(1),v.Tb(2,"nx-formfield",1),v.Tb(3,"input",2),v.ac("ngModelChange",function(e){return t.step=e}),v.Sb(),v.Sb()),2&e&&(v.kc("nxMin",0)("nxMax",10)("nxStep",t.step)("nxValue",t.floatSliderDemoValue),v.Bb(1),v.Lc("\nSlider value: ",t.floatSliderDemoValue,"\n"),v.Bb(2),v.kc("ngModel",t.step))},directives:[y.a,S.b,L.b,w.a,w.p,w.s],styles:[""]}),p),V=((u=function e(){a(this,e),this.sliderDemoValue=42,this.step=.1}).\u0275fac=function(e){return new(e||u)},u.\u0275cmp=v.Hb({type:u,selectors:[["slider-default-example"]],decls:1,vars:0,consts:[["nxLabel","Another Slider Test Label"]],template:function(e,t){1&e&&v.Ob(0,"nx-slider",0)},directives:[y.a],styles:[""]}),u),T=((c=function e(){a(this,e)}).\u0275fac=function(e){return new(e||c)},c.\u0275cmp=v.Hb({type:c,selectors:[["slider-disabled-example"]],decls:1,vars:1,consts:[["nxLabel","This slider is disabled",3,"disabled"]],template:function(e,t){1&e&&v.Ob(0,"nx-slider",0),2&e&&v.kc("disabled",!0)},directives:[y.a],styles:[""]}),c),C=((l=function e(){a(this,e)}).\u0275fac=function(e){return new(e||l)},l.\u0275cmp=v.Hb({type:l,selectors:[["slider-inverted-example"]],decls:1,vars:1,consts:[["nxLabel","This slider is inverted",3,"nxInverted"]],template:function(e,t){1&e&&v.Ob(0,"nx-slider",0),2&e&&v.kc("nxInverted",!0)},directives:[y.a],styles:[""]}),l),E=((o=function e(){a(this,e),this.euroSliderDemoValue=0,this.euroValueFormatter=function(e){return Number(e).toFixed(2)+" \u20ac"},this.minEuroFormatter=function(e){return"min. ".concat(e," \u20ac")},this.maxEuroFormatter=function(e){return"max. ".concat(e," \u20ac")}}).\u0275fac=function(e){return new(e||o)},o.\u0275cmp=v.Hb({type:o,selectors:[["slider-label-example"]],decls:2,vars:8,consts:[[3,"nxMin","nxMax","nxStep","nxLabelMinFormatter","nxLabelMaxFormatter","nxValueFormatter","nxValue","nxValueChange"]],template:function(e,t){1&e&&(v.Tb(0,"nx-slider",0),v.ac("nxValueChange",function(e){return t.euroSliderDemoValue=e}),v.Sb(),v.Jc(1)),2&e&&(v.kc("nxMin",0)("nxMax",10)("nxStep",.1)("nxLabelMinFormatter",t.minEuroFormatter)("nxLabelMaxFormatter",t.maxEuroFormatter)("nxValueFormatter",t.euroValueFormatter)("nxValue",t.euroSliderDemoValue),v.Bb(1),v.Lc("\nSlider value: ",t.euroSliderDemoValue,"\n"))},directives:[y.a],styles:[""]}),o),O=((s=function e(){a(this,e)}).\u0275fac=function(e){return new(e||s)},s.\u0275cmp=v.Hb({type:s,selectors:[["slider-negative-example"]],decls:2,vars:3,consts:[[1,"docs-inverse-container"],["negative","true","nxLabel","Negative slider","nxValue","13",3,"nxMax","nxMin","nxStep"]],template:function(e,t){1&e&&(v.Tb(0,"div",0),v.Ob(1,"nx-slider",1),v.Sb()),2&e&&(v.Bb(1),v.kc("nxMax",110)("nxMin",10)("nxStep",2))},directives:[y.a],styles:[""]}),s),k=n("ofXK"),A=((m=function(){function e(t){a(this,e),this.fb=t,this.createForm()}return r(e,[{key:"createForm",value:function(){this.testForm=this.fb.group({sliderTestReactive:[10,w.y.required]})}}]),e}()).\u0275fac=function(e){return new(e||m)(v.Nb(w.d))},m.\u0275cmp=v.Hb({type:m,selectors:[["slider-reactive-example"]],decls:8,vars:7,consts:[[3,"formGroup"],["nxLabel","Please choose a number","name","reactiveTest","formControlName","sliderTestReactive"]],template:function(e,t){1&e&&(v.Tb(0,"form",0),v.Ob(1,"nx-slider",1),v.Tb(2,"p"),v.Jc(3),v.fc(4,"json"),v.Sb(),v.Tb(5,"p"),v.Jc(6),v.fc(7,"json"),v.Sb(),v.Sb()),2&e&&(v.kc("formGroup",t.testForm),v.Bb(3),v.Lc("Form value: ",v.gc(4,3,t.testForm.value),""),v.Bb(3),v.Lc("Form status: ",v.gc(7,5,t.testForm.status),""))},directives:[w.A,w.q,w.i,y.a,w.p,w.g],pipes:[k.h],styles:[""]}),m),N=((f=function e(){a(this,e),this.templateModel=42}).\u0275fac=function(e){return new(e||f)},f.\u0275cmp=v.Hb({type:f,selectors:[["slider-template-example"]],decls:3,vars:2,consts:[["name","templateTest",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(v.Tb(0,"form"),v.Tb(1,"nx-slider",0),v.ac("ngModelChange",function(e){return t.templateModel=e}),v.Sb(),v.Jc(2),v.Sb()),2&e&&(v.Bb(1),v.kc("ngModel",t.templateModel),v.Bb(1),v.Lc(" Model Value: ",t.templateModel,"\n"))},directives:[w.A,w.q,w.r,y.a,w.p,w.s],styles:[""]}),f),P=function(e){return e[e.NEVER=0]="NEVER",e[e.RARELY=1]="RARELY",e[e.SOMETIMES=2]="SOMETIMES",e[e.OFTEN=3]="OFTEN",e[e.ALWAYS=4]="ALWAYS",e}({}),D=((x=function e(){a(this,e),this.fruitPreferenceFormatter=function(e){switch(e){case P.NEVER:return"never";case P.RARELY:return"rarely";case P.SOMETIMES:return"sometimes";case P.OFTEN:return"often";case P.ALWAYS:return"always"}},this.minFruitPreferenceFormatter=function(){return"never"},this.maxFruitPreferenceFormatter=function(){return"always"}}).\u0275fac=function(e){return new(e||x)},x.\u0275cmp=v.Hb({type:x,selectors:[["slider-textual-example"]],decls:1,vars:5,consts:[["nxLabel","Do you prefer apples over oranges?",3,"nxMin","nxMax","nxLabelMinFormatter","nxLabelMaxFormatter","nxValueFormatter"]],template:function(e,t){1&e&&v.Ob(0,"nx-slider",0),2&e&&v.kc("nxMin",0)("nxMax",4)("nxLabelMinFormatter",t.minFruitPreferenceFormatter)("nxLabelMaxFormatter",t.maxFruitPreferenceFormatter)("nxValueFormatter",t.fruitPreferenceFormatter)},directives:[y.a],styles:[""]}),x),H=((d=function e(){a(this,e)}).\u0275fac=function(e){return new(e||d)},d.\u0275cmp=v.Hb({type:d,selectors:[["slider-thumb-example"]],decls:1,vars:1,consts:[["nxLabel","The thumb label is not shown.",3,"thumbLabel"]],template:function(e,t){1&e&&v.Ob(0,"nx-slider",0),2&e&&v.kc("thumbLabel",!1)},directives:[y.a],styles:[""]}),d),B=n("ierq"),j=((h=function(){function e(){a(this,e)}return r(e,null,[{key:"components",value:function(){return{"slider-basic":M,"slider-decimal":F,"slider-default":V,"slider-disabled":T,"slider-inverted":C,"slider-label":E,"slider-negative":O,"slider-reactive":A,"slider-template":N,"slider-textual":D,"slider-thumb":H}}}]),e}()).\u0275mod=v.Lb({type:h}),h.\u0275inj=v.Kb({factory:function(e){return new(e||h)},imports:[[g.a,b.b,B.a]]}),h)},ierq:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var r=n("tgBs"),i=n("/sJ9"),s=n("eV8M"),o=n("gkbm"),l=n("ofXK"),c=n("3Pt+"),u=n("fXoL"),p=function(){var e=function e(){a(this,e)};return e.\u0275mod=u.Lb({type:e}),e.\u0275inj=u.Kb({factory:function(t){return new(t||e)},imports:[[],l.c,c.k,c.v,o.b,s.a,i.a,r.a]}),e}()}}])}();