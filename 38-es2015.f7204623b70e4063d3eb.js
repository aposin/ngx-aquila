(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"4TwE":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("EM62");let a=(()=>{class e{}return e.\u0275mod=r.Lb({type:e}),e.\u0275inj=r.Kb({factory:function(t){return new(t||e)}}),e})();n("VqxJ")},VqxJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("EM62");const a=["nxCopytext",""],s=["*"];let l=(()=>{class e{constructor(){this.type="normal",this.negative=!1}set classNames(e){if(this._classNames===e)return;this._classNames=e;const[t=null]=this._classNames.match(/small|medium|normal|large/)||["normal"];this.type=t,this.negative=!!this._classNames.match(/negative/)}get classNames(){return this._classNames}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Hb({type:e,selectors:[["","nxCopytext",""]],hostVars:12,hostBindings:function(e,t){2&e&&r.Fb("nx-copy",!0)("nx-copy--small","small"===t.type)("nx-copy--medium","medium"===t.type)("nx-copy--normal","normal"===t.type)("nx-copy--large","large"===t.type)("nx-copy--negative",t.negative)},inputs:{classNames:["nxCopytext","classNames"]},attrs:a,ngContentSelectors:s,decls:1,vars:0,template:function(e,t){1&e&&(r.jc(),r.ic(0))},styles:["[_nghost-%COMP%]{margin:0 0 32px;font-size:var(--paragraph-03-font-size);line-height:var(--paragraph-03-line-height);font-weight:var(--paragraph-03-font-weight);letter-spacing:var(--paragraph-03-letter-spacing)}.nx-copy.nx-copy[_nghost-%COMP%]{font-weight:400}.nx-copy--negative[_nghost-%COMP%]{color:var(--negative)}.nx-copy--small[_nghost-%COMP%]{font-size:var(--paragraph-05-font-size);line-height:var(--paragraph-05-line-height);font-weight:var(--paragraph-05-font-weight);letter-spacing:var(--paragraph-05-letter-spacing)}.nx-copy--medium[_nghost-%COMP%]{font-size:var(--paragraph-04-font-size);line-height:var(--paragraph-04-line-height);font-weight:var(--paragraph-04-font-weight);letter-spacing:var(--paragraph-04-letter-spacing)}.nx-copy--large[_nghost-%COMP%]{font-size:var(--paragraph-02-font-size);line-height:var(--paragraph-02-line-height);font-weight:var(--paragraph-02-font-weight);letter-spacing:var(--paragraph-02-letter-spacing)}"],changeDetection:0}),e})()},t3RA:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("ohqM"),a=n("4TwE"),s=n("aln5"),l=n("kPBv"),i=n("2kYt"),c=n("nIj0"),o=n("EM62");let u=(()=>{class e{}return e.\u0275mod=o.Lb({type:e}),e.\u0275inj=o.Kb({factory:function(t){return new(t||e)},imports:[[],i.c,c.k,c.v,l.b,s.a,a.a,r.a]}),e})()},yU5k:function(e,t,n){"use strict";n.r(t),n.d(t,"SliderExamplesModule",(function(){return V}));var r=n("6c6m"),a=n("v2P5"),s=n("EM62"),l=n("tYFH");let i=(()=>{class e{constructor(){this.sliderDemoValue=42,this.step=.1}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Hb({type:e,selectors:[["nx-slider-basic-example"]],decls:2,vars:5,consts:[["nxLabel","Slider Test Label",3,"nxMin","nxMax","nxStep","nxValue","nxValueChange"]],template:function(e,t){1&e&&(s.Tb(0,"nx-slider",0),s.ac("nxValueChange",(function(e){return t.sliderDemoValue=e})),s.Sb(),s.Jc(1)),2&e&&(s.kc("nxMin",10)("nxMax",110)("nxStep",2)("nxValue",t.sliderDemoValue),s.Bb(1),s.Lc("\nSlider value: ",t.sliderDemoValue,"\n"))},directives:[l.a],encapsulation:2}),e})();var c=n("PCf9"),o=n("XEMv"),u=n("nIj0");let p=(()=>{class e{constructor(){this.step=.1,this.floatSliderDemoValue=1}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Hb({type:e,selectors:[["nx-slider-decimal-example"]],decls:4,vars:6,consts:[[3,"nxMin","nxMax","nxStep","nxValue","nxValueChange"],["nxLabel","Stepsize"],["nxInput","",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(s.Tb(0,"nx-slider",0),s.ac("nxValueChange",(function(e){return t.floatSliderDemoValue=e})),s.Sb(),s.Jc(1),s.Tb(2,"nx-formfield",1),s.Tb(3,"input",2),s.ac("ngModelChange",(function(e){return t.step=e})),s.Sb(),s.Sb()),2&e&&(s.kc("nxMin",0)("nxMax",10)("nxStep",t.step)("nxValue",t.floatSliderDemoValue),s.Bb(1),s.Lc("\nSlider value: ",t.floatSliderDemoValue,"\n"),s.Bb(2),s.kc("ngModel",t.step))},directives:[l.a,c.b,o.b,u.a,u.p,u.s],encapsulation:2}),e})(),m=(()=>{class e{constructor(){this.sliderDemoValue=42,this.step=.1}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Hb({type:e,selectors:[["nx-slider-default-example"]],decls:1,vars:0,consts:[["nxLabel","Another Slider Test Label"]],template:function(e,t){1&e&&s.Ob(0,"nx-slider",0)},directives:[l.a],encapsulation:2}),e})(),x=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Hb({type:e,selectors:[["nx-slider-disabled-example"]],decls:1,vars:1,consts:[["nxLabel","This slider is disabled",3,"disabled"]],template:function(e,t){1&e&&s.Ob(0,"nx-slider",0),2&e&&s.kc("disabled",!0)},directives:[l.a],encapsulation:2}),e})(),d=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Hb({type:e,selectors:[["nx-slider-inverted-example"]],decls:1,vars:1,consts:[["nxLabel","This slider is inverted",3,"nxInverted"]],template:function(e,t){1&e&&s.Ob(0,"nx-slider",0),2&e&&s.kc("nxInverted",!0)},directives:[l.a],encapsulation:2}),e})(),b=(()=>{class e{constructor(){this.euroSliderDemoValue=0,this.euroValueFormatter=e=>Number(e).toFixed(2)+" \u20ac",this.minEuroFormatter=e=>`min. ${e} \u20ac`,this.maxEuroFormatter=e=>`max. ${e} \u20ac`}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Hb({type:e,selectors:[["nx-slider-label-example"]],decls:2,vars:8,consts:[[3,"nxMin","nxMax","nxStep","nxLabelMinFormatter","nxLabelMaxFormatter","nxValueFormatter","nxValue","nxValueChange"]],template:function(e,t){1&e&&(s.Tb(0,"nx-slider",0),s.ac("nxValueChange",(function(e){return t.euroSliderDemoValue=e})),s.Sb(),s.Jc(1)),2&e&&(s.kc("nxMin",0)("nxMax",10)("nxStep",.1)("nxLabelMinFormatter",t.minEuroFormatter)("nxLabelMaxFormatter",t.maxEuroFormatter)("nxValueFormatter",t.euroValueFormatter)("nxValue",t.euroSliderDemoValue),s.Bb(1),s.Lc("\nSlider value: ",t.euroSliderDemoValue,"\n"))},directives:[l.a],encapsulation:2}),e})(),f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Hb({type:e,selectors:[["ng-component"]],decls:2,vars:3,consts:[[1,"docs-inverse-container"],["negative","true","nxLabel","Negative slider","nxValue","13",3,"nxMax","nxMin","nxStep"]],template:function(e,t){1&e&&(s.Tb(0,"div",0),s.Ob(1,"nx-slider",1),s.Sb()),2&e&&(s.Bb(1),s.kc("nxMax",110)("nxMin",10)("nxStep",2))},directives:[l.a],encapsulation:2}),e})();var h=n("2kYt");let g=(()=>{class e{constructor(e){this.fb=e,this.createForm()}createForm(){this.testForm=this.fb.group({sliderTestReactive:[10,u.y.required]})}}return e.\u0275fac=function(t){return new(t||e)(s.Nb(u.d))},e.\u0275cmp=s.Hb({type:e,selectors:[["nx-slider-reactive-example"]],decls:8,vars:7,consts:[[3,"formGroup"],["nxLabel","Please choose a number","name","reactiveTest","formControlName","sliderTestReactive"]],template:function(e,t){1&e&&(s.Tb(0,"form",0),s.Ob(1,"nx-slider",1),s.Tb(2,"p"),s.Jc(3),s.fc(4,"json"),s.Sb(),s.Tb(5,"p"),s.Jc(6),s.fc(7,"json"),s.Sb(),s.Sb()),2&e&&(s.kc("formGroup",t.testForm),s.Bb(3),s.Lc("Form value: ",s.gc(4,3,t.testForm.value),""),s.Bb(3),s.Lc("Form status: ",s.gc(7,5,t.testForm.status),""))},directives:[u.A,u.q,u.i,l.a,u.p,u.g],pipes:[h.k],encapsulation:2}),e})(),v=(()=>{class e{constructor(){this.templateModel=42}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Hb({type:e,selectors:[["nx-slider-template-example"]],decls:3,vars:2,consts:[["name","templateTest",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(s.Tb(0,"form"),s.Tb(1,"nx-slider",0),s.ac("ngModelChange",(function(e){return t.templateModel=e})),s.Sb(),s.Jc(2),s.Sb()),2&e&&(s.Bb(1),s.kc("ngModel",t.templateModel),s.Bb(1),s.Lc(" Model Value: ",t.templateModel,"\n"))},directives:[u.A,u.q,u.r,l.a,u.p,u.s],encapsulation:2}),e})();var M=function(e){return e[e.NEVER=0]="NEVER",e[e.RARELY=1]="RARELY",e[e.SOMETIMES=2]="SOMETIMES",e[e.OFTEN=3]="OFTEN",e[e.ALWAYS=4]="ALWAYS",e}({});let y=(()=>{class e{constructor(){this.fruitPreferenceFormatter=e=>{switch(e){case M.NEVER:return"never";case M.RARELY:return"rarely";case M.SOMETIMES:return"sometimes";case M.OFTEN:return"often";case M.ALWAYS:return"always"}},this.minFruitPreferenceFormatter=()=>"never",this.maxFruitPreferenceFormatter=()=>"always"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Hb({type:e,selectors:[["nx-slider-textual-example"]],decls:1,vars:5,consts:[["nxLabel","Do you prefer apples over oranges?",3,"nxMin","nxMax","nxLabelMinFormatter","nxLabelMaxFormatter","nxValueFormatter"]],template:function(e,t){1&e&&s.Ob(0,"nx-slider",0),2&e&&s.kc("nxMin",0)("nxMax",4)("nxLabelMinFormatter",t.minFruitPreferenceFormatter)("nxLabelMaxFormatter",t.maxFruitPreferenceFormatter)("nxValueFormatter",t.fruitPreferenceFormatter)},directives:[l.a],encapsulation:2}),e})(),S=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Hb({type:e,selectors:[["nx-slider-thumb-example"]],decls:1,vars:1,consts:[["nxLabel","The thumb label is not shown.",3,"thumbLabel"]],template:function(e,t){1&e&&s.Ob(0,"nx-slider",0),2&e&&s.kc("thumbLabel",!1)},directives:[l.a],encapsulation:2}),e})();var F=n("t3RA");let V=(()=>{class e{static components(){return{"slider-basic":i,"slider-decimal":p,"slider-default":m,"slider-disabled":x,"slider-inverted":d,"slider-label":b,"slider-negative":f,"slider-reactive":g,"slider-template":v,"slider-textual":y,"slider-thumb":S}}}return e.\u0275mod=s.Lb({type:e}),e.\u0275inj=s.Kb({factory:function(t){return new(t||e)},imports:[[a.a,r.b,F.a]]}),e})()}}]);