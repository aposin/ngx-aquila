(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{guAx:function(t,e,o){"use strict";o.r(e),o.d(e,"AutocompleteExamplesModule",function(){return K});var n=o("tk/3"),a=o("ierq"),c=o("AqTC"),i=o("ZczJ"),r=o("p9I2"),l=o("fXoL"),p=o("g+D5"),u=o("3Jzs"),s=o("ofXK"),m=o("SNKa");function d(t,e){if(1&t&&(l.Wb(0,"nx-autocomplete-option",3),l.Jc(1),l.Vb()),2&t){const t=e.$implicit;l.nc("value",t),l.Eb(1),l.Lc(" ",t," ")}}let b=(()=>{class t{constructor(){this.options="Chimpanzee,Chinchilla,Chipmunk,Coati,Cicada,Clam,\n    Clownfish,Cobra,Cockroach,Cod,Condor,Constrictor,Coral,Cougar,Cow,\n    Coyote,Coypu,Crab,Crane,Crane fly,Crawdad,Crayfish,Cricket,Crocodile,Crow".split(",")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Kb({type:t,selectors:[["autocomplete-basic-example"]],decls:4,vars:2,consts:[["type","text",3,"nxAutocomplete"],["auto1","nxAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(t,e){if(1&t&&(l.Rb(0,"input",0),l.Wb(1,"nx-autocomplete",null,1),l.Hc(3,d,2,2,"nx-autocomplete-option",2),l.Vb()),2&t){const t=l.uc(2);l.nc("nxAutocomplete",t),l.Eb(3),l.nc("ngForOf",e.options)}},directives:[p.a,u.a,s.p,m.a],styles:[""]}),t})();var C=o("3Pt+"),f=o("lJxs"),x=o("HXSb"),h=o("nK+a"),w=o("Dr49"),v=o("tg6J"),g=o("v44Z");function y(t,e){if(1&t&&(l.Wb(0,"nx-autocomplete-option",12),l.Jc(1),l.ic(2,"lowercase"),l.Vb()),2&t){const t=e.$implicit;l.nc("value",t),l.Eb(1),l.Lc(" ",l.jc(2,2,t)," ")}}let A=(()=>{class t{constructor(t){this.client=t,this.WIKIPEDIA_URL="https://en.wikipedia.org/w/api.php"}search(t){const e=(o=t,`${this.WIKIPEDIA_URL}?${(new n.e).append("action","opensearch").append("search",encodeURIComponent(o)).append("format","json").toString()}`);var o;return this.client.jsonp(e,"callback").pipe(Object(f.a)(t=>t[1].map(t=>({value:t}))))}}return t.\u0275fac=function(e){return new(e||t)(l.ac(n.b))},t.\u0275prov=l.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),I=(()=>{class t{constructor(t){this.wikipediaService=t,this.modelBoundData="asdf",this.testForm=(new C.d).group({autocomplete:[null,C.y.required]}),this.dynamicBackendOptions=e=>t.search(e).pipe(Object(f.a)(t=>t.map(t=>t.value)))}simpleFilteredOptions(t){return t?"Chimpanzee,Chinchilla,Chipmunk,Coati,Cicada,Clam,Clownfish,Cobra,Cockroach,Cod,Condor,Constrictor,Coral,Cougar,Cow,Coyote,Coypu,Crab,Crane,Crane fly,Crawdad,Crayfish,Cricket,Crocodile,Crow".split(",").filter(e=>e.toLowerCase().indexOf(t.toLowerCase())>=0):[]}}return t.\u0275fac=function(e){return new(e||t)(l.Qb(A))},t.\u0275cmp=l.Kb({type:t,selectors:[["autocomplete-data-binding-example"]],features:[l.Db([A])],decls:21,vars:10,consts:[["nxLabel","Template bound"],["nxInput","","type","text","nxAutocompleteDebounce","0",3,"nxAutocomplete","ngModel","ngModelChange"],["auto3","nxAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"formGroup"],["nxLabel","Reactive bound"],["nxInput","","type","text","formControlName","autocomplete",3,"nxAutocomplete","nxAutocompleteItems"],["auto4",""],["nxLabel","Provide this required field"],["nxInput","","ngModel","","required","",3,"nxAutocomplete","nxAutocompleteItems"],["nxError",""],["auto5","nxAutocomplete"],[3,"value"]],template:function(t,e){if(1&t&&(l.Wb(0,"nx-formfield",0),l.Wb(1,"input",1),l.dc("ngModelChange",function(t){return e.modelBoundData=t}),l.Vb(),l.Vb(),l.Wb(2,"nx-autocomplete",null,2),l.Hc(4,y,3,4,"nx-autocomplete-option",3),l.Vb(),l.Jc(5),l.Wb(6,"form",4),l.Wb(7,"nx-formfield",5),l.Rb(8,"input",6),l.Rb(9,"nx-autocomplete",null,7),l.Vb(),l.Vb(),l.Jc(11),l.Wb(12,"nx-natural-language-form"),l.Jc(13," Here is a word "),l.Wb(14,"nx-word",8),l.Rb(15,"input",9),l.Wb(16,"div",10),l.Jc(17,"This field is required."),l.Vb(),l.Rb(18,"nx-autocomplete",null,11),l.Vb(),l.Jc(20," with some following copy.\n"),l.Vb()),2&t){const t=l.uc(3),o=l.uc(10),n=l.uc(19);l.Eb(1),l.nc("nxAutocomplete",t)("ngModel",e.modelBoundData),l.Eb(3),l.nc("ngForOf",e.simpleFilteredOptions(e.modelBoundData)),l.Eb(1),l.Lc("\nTemplate bound: ",e.modelBoundData," "),l.Eb(1),l.nc("formGroup",e.testForm),l.Eb(2),l.nc("nxAutocomplete",o)("nxAutocompleteItems",e.dynamicBackendOptions),l.Eb(3),l.Lc("\nReactive form: ",e.testForm.controls.autocomplete.value," "),l.Eb(4),l.nc("nxAutocomplete",n)("nxAutocompleteItems",e.dynamicBackendOptions)}},directives:[x.b,h.b,p.a,C.a,C.p,C.s,u.a,s.p,C.z,C.q,C.i,C.g,w.a,v.a,C.w,g.a,m.a],pipes:[s.m],styles:[""]}),t})(),k=(()=>{class t{constructor(t){this.client=t,this.WIKIPEDIA_URL="https://en.wikipedia.org/w/api.php"}search(t){const e=(o=t,`${this.WIKIPEDIA_URL}?${(new n.e).append("action","opensearch").append("search",encodeURIComponent(o)).append("format","json").toString()}`);var o;return this.client.jsonp(e,"callback").pipe(Object(f.a)(t=>t[1].map(t=>({value:t}))))}}return t.\u0275fac=function(e){return new(e||t)(l.ac(n.b))},t.\u0275prov=l.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),O=(()=>{class t{constructor(t){this.wikipediaService=t,this.dynamicBackendOptions=e=>t.search(e).pipe(Object(f.a)(t=>t.map(t=>t.value)))}}return t.\u0275fac=function(e){return new(e||t)(l.Qb(k))},t.\u0275cmp=l.Kb({type:t,selectors:[["autocomplete-default-rendering-example"]],features:[l.Db([k])],decls:3,vars:2,consts:[["type","text",3,"nxAutocomplete","nxAutocompleteItems"],["auto2","nxAutocomplete"]],template:function(t,e){if(1&t&&(l.Rb(0,"input",0),l.Rb(1,"nx-autocomplete",null,1)),2&t){const t=l.uc(2);l.nc("nxAutocomplete",t)("nxAutocompleteItems",e.dynamicBackendOptions)}},directives:[p.a,u.a],styles:[""]}),t})();function W(t,e){if(1&t&&(l.Wb(0,"nx-autocomplete-option",4),l.Jc(1),l.Vb()),2&t){const t=e.$implicit;l.nc("value",t),l.Eb(1),l.Lc(" ",t," ")}}let E=(()=>{class t{constructor(){this.options=["Chimpanzee","Chinchilla","Chipmunk","Coati","Cicada","Clam","Clownfish","Cobra","Cockroach","Cod","Condor","Constrictor","Coral","Cougar","Cow","Coyote","Coypu","Crab","Crane","Crane fly","Crawdad","Crayfish","Cricket","Crocodile","Crow"],this.filteredOptions=this.options.slice()}filter(t){this.filteredOptions=this.options.filter(e=>new RegExp(t,"gi").test(e))}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Kb({type:t,selectors:[["autocomplete-filtering-example"]],decls:5,vars:2,consts:[["type","text",3,"nxAutocomplete","input"],["animalInput",""],["auto1","nxAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(t,e){if(1&t){const t=l.Xb();l.Wb(0,"input",0,1),l.dc("input",function(){l.yc(t);const o=l.uc(1);return e.filter(o.value)}),l.Vb(),l.Wb(2,"nx-autocomplete",null,2),l.Hc(4,W,2,2,"nx-autocomplete-option",3),l.Vb()}if(2&t){const t=l.uc(3);l.nc("nxAutocomplete",t),l.Eb(4),l.nc("ngForOf",e.filteredOptions)}},directives:[p.a,u.a,s.p,m.a],styles:[""]}),t})();var V=o("aQnR"),L=o("BQ2b"),R=o("5/jY"),F=o("eC/v");function J(t,e){if(1&t&&(l.Wb(0,"nx-autocomplete-option",9),l.Jc(1),l.Vb()),2&t){const t=e.$implicit;l.nc("value",t),l.Eb(1),l.Lc(" ",t," ")}}let D=(()=>{class t{constructor(){this.options=["Chimpanzee","Chinchilla","Chipmunk","Coati","Cicada","Clam","Clownfish","Cobra","Cockroach","Cod","Condor","Constrictor","Coral","Cougar","Cow","Coyote","Coypu","Crab","Crane","Crane fly","Crawdad","Crayfish","Cricket","Crocodile","Crow"],this.filteredOptions=this.options.slice()}filter(t){this.filteredOptions=this.options.filter(e=>new RegExp(t,"gi").test(e))}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Kb({type:t,selectors:[["autocomplete-outline-example"]],decls:11,vars:2,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","12"],["nxHeadline","subsection-xsmall",1,"nx-margin-bottom-m"],["nxLabel","Animals","appearance","outline","nxFloatLabel","always"],["nxInput","","type","text",3,"nxAutocomplete","input"],["animalInput",""],["animal1","nxAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(t,e){if(1&t){const t=l.Xb();l.Wb(0,"div",0),l.Wb(1,"div",1),l.Wb(2,"div",2),l.Wb(3,"h4",3),l.Jc(4,"Autocomplete with appearance outline"),l.Vb(),l.Wb(5,"nx-formfield",4),l.Wb(6,"input",5,6),l.dc("input",function(){l.yc(t);const o=l.uc(7);return e.filter(o.value)}),l.Vb(),l.Wb(8,"nx-autocomplete",null,7),l.Hc(10,J,2,2,"nx-autocomplete-option",8),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Vb()}if(2&t){const t=l.uc(9);l.Eb(6),l.nc("nxAutocomplete",t),l.Eb(4),l.nc("ngForOf",e.filteredOptions)}},directives:[V.a,L.a,R.a,F.a,x.b,h.b,p.a,u.a,s.p,m.a],styles:[""]}),t})(),K=(()=>{class t{static components(){return{"autocomplete-basic":b,"autocomplete-data-binding":I,"autocomplete-default-rendering":O,"autocomplete-filtering":E,"autocomplete-outline":D}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.Ob({type:t}),t.\u0275inj=l.Nb({imports:[[i.a,c.b,r.a,a.a,n.c,n.d]]}),t})()}}]);