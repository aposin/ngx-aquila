(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"4TwE":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("EM62");let s=(()=>{class e{}return e.\u0275mod=a.Lb({type:e}),e.\u0275inj=a.Kb({factory:function(t){return new(t||e)}}),e})();n("VqxJ")},G1wH:function(e,t,n){var a,s;void 0===(s="function"==typeof(a=function(e){Array.prototype.map||(Array.prototype.map=function(e){"use strict";if(null==this)throw new TypeError;var t=Object(this),n=t.length>>>0;if("function"!=typeof e)throw new TypeError;for(var a=new Array(n),s=arguments.length>=2?arguments[1]:void 0,r=0;r<n;r++)r in t&&(a[r]=e.call(s,t[r],r,t));return a});var t="A".charCodeAt(0),n="Z".charCodeAt(0);function a(e){return(e=(e=e.toUpperCase()).substr(4)+e.substr(0,4)).split("").map((function(e){var a=e.charCodeAt(0);return a>=t&&a<=n?a-t+10:e})).join("")}function s(e){for(var t,n=e;n.length>2;)t=n.slice(0,9),n=parseInt(t,10)%97+n.slice(t.length);return parseInt(n,10)%97}function r(e){return e.replace(l,"").toUpperCase()}function i(e,t,n,a){this.countryCode=e,this.length=t,this.structure=n,this.example=a}i.prototype._regex=function(){return this._cachedRegex||(this._cachedRegex=(e=this.structure.match(/(.{3})/g).map((function(e){var t,n=e.slice(0,1),a=parseInt(e.slice(1),10);switch(n){case"A":t="0-9A-Za-z";break;case"B":t="0-9A-Z";break;case"C":t="A-Za-z";break;case"F":t="0-9";break;case"L":t="a-z";break;case"U":t="A-Z";break;case"W":t="0-9a-z"}return"(["+t+"]{"+a+"})"})),new RegExp("^"+e.join("")+"$")));var e},i.prototype.isValid=function(e){return this.length==e.length&&this.countryCode===e.slice(0,2)&&this._regex().test(e.slice(4))&&1==s(a(e))},i.prototype.toBBAN=function(e,t){return this._regex().exec(e.slice(4)).slice(1).join(t)},i.prototype.fromBBAN=function(e){if(!this.isValidBBAN(e))throw new Error("Invalid BBAN");var t=("0"+(98-s(a(this.countryCode+"00"+e)))).slice(-2);return this.countryCode+t+e},i.prototype.isValidBBAN=function(e){return this.length-4==e.length&&this._regex().test(e)};var o={};function c(e){o[e.countryCode]=e}c(new i("AD",24,"F04F04A12","AD1200012030200359100100")),c(new i("AE",23,"F03F16","AE070331234567890123456")),c(new i("AL",28,"F08A16","AL47212110090000000235698741")),c(new i("AT",20,"F05F11","AT611904300234573201")),c(new i("AZ",28,"U04A20","AZ21NABZ00000000137010001944")),c(new i("BA",20,"F03F03F08F02","BA391290079401028494")),c(new i("BE",16,"F03F07F02","BE68539007547034")),c(new i("BG",22,"U04F04F02A08","BG80BNBG96611020345678")),c(new i("BH",22,"U04A14","BH67BMAG00001299123456")),c(new i("BR",29,"F08F05F10U01A01","BR9700360305000010009795493P1")),c(new i("BY",28,"A04F04A16","BY13NBRB3600900000002Z00AB00")),c(new i("CH",21,"F05A12","CH9300762011623852957")),c(new i("CR",22,"F04F14","CR72012300000171549015")),c(new i("CY",28,"F03F05A16","CY17002001280000001200527600")),c(new i("CZ",24,"F04F06F10","CZ6508000000192000145399")),c(new i("DE",22,"F08F10","DE89370400440532013000")),c(new i("DK",18,"F04F09F01","DK5000400440116243")),c(new i("DO",28,"U04F20","DO28BAGR00000001212453611324")),c(new i("EE",20,"F02F02F11F01","EE382200221020145685")),c(new i("EG",29,"F04F04F17","EG800002000156789012345180002")),c(new i("ES",24,"F04F04F01F01F10","ES9121000418450200051332")),c(new i("FI",18,"F06F07F01","FI2112345600000785")),c(new i("FO",18,"F04F09F01","FO6264600001631634")),c(new i("FR",27,"F05F05A11F02","FR1420041010050500013M02606")),c(new i("GB",22,"U04F06F08","GB29NWBK60161331926819")),c(new i("GE",22,"U02F16","GE29NB0000000101904917")),c(new i("GI",23,"U04A15","GI75NWBK000000007099453")),c(new i("GL",18,"F04F09F01","GL8964710001000206")),c(new i("GR",27,"F03F04A16","GR1601101250000000012300695")),c(new i("GT",28,"A04A20","GT82TRAJ01020000001210029690")),c(new i("HR",21,"F07F10","HR1210010051863000160")),c(new i("HU",28,"F03F04F01F15F01","HU42117730161111101800000000")),c(new i("IE",22,"U04F06F08","IE29AIBK93115212345678")),c(new i("IL",23,"F03F03F13","IL620108000000099999999")),c(new i("IS",26,"F04F02F06F10","IS140159260076545510730339")),c(new i("IT",27,"U01F05F05A12","IT60X0542811101000000123456")),c(new i("IQ",23,"U04F03A12","IQ98NBIQ850123456789012")),c(new i("JO",30,"A04F22","JO15AAAA1234567890123456789012")),c(new i("KW",30,"U04A22","KW81CBKU0000000000001234560101")),c(new i("KZ",20,"F03A13","KZ86125KZT5004100100")),c(new i("LB",28,"F04A20","LB62099900000001001901229114")),c(new i("LC",32,"U04F24","LC07HEMM000100010012001200013015")),c(new i("LI",21,"F05A12","LI21088100002324013AA")),c(new i("LT",20,"F05F11","LT121000011101001000")),c(new i("LU",20,"F03A13","LU280019400644750000")),c(new i("LV",21,"U04A13","LV80BANK0000435195001")),c(new i("MC",27,"F05F05A11F02","MC5811222000010123456789030")),c(new i("MD",24,"U02A18","MD24AG000225100013104168")),c(new i("ME",22,"F03F13F02","ME25505000012345678951")),c(new i("MK",19,"F03A10F02","MK07250120000058984")),c(new i("MR",27,"F05F05F11F02","MR1300020001010000123456753")),c(new i("MT",31,"U04F05A18","MT84MALT011000012345MTLCAST001S")),c(new i("MU",30,"U04F02F02F12F03U03","MU17BOMM0101101030300200000MUR")),c(new i("NL",18,"U04F10","NL91ABNA0417164300")),c(new i("NO",15,"F04F06F01","NO9386011117947")),c(new i("PK",24,"U04A16","PK36SCBL0000001123456702")),c(new i("PL",28,"F08F16","PL61109010140000071219812874")),c(new i("PS",29,"U04A21","PS92PALS000000000400123456702")),c(new i("PT",25,"F04F04F11F02","PT50000201231234567890154")),c(new i("QA",29,"U04A21","QA30AAAA123456789012345678901")),c(new i("RO",24,"U04A16","RO49AAAA1B31007593840000")),c(new i("RS",22,"F03F13F02","RS35260005601001611379")),c(new i("SA",24,"F02A18","SA0380000000608010167519")),c(new i("SC",31,"U04F04F16U03","SC18SSCB11010000000000001497USD")),c(new i("SE",24,"F03F16F01","SE4550000000058398257466")),c(new i("SI",19,"F05F08F02","SI56263300012039086")),c(new i("SK",24,"F04F06F10","SK3112000000198742637541")),c(new i("SM",27,"U01F05F05A12","SM86U0322509800000000270100")),c(new i("ST",25,"F08F11F02","ST68000100010051845310112")),c(new i("SV",28,"U04F20","SV62CENR00000000000000700025")),c(new i("TL",23,"F03F14F02","TL380080012345678910157")),c(new i("TN",24,"F02F03F13F02","TN5910006035183598478831")),c(new i("TR",26,"F05F01A16","TR330006100519786457841326")),c(new i("UA",29,"F25","UA511234567890123456789012345")),c(new i("VA",22,"F18","VA59001123000012345678")),c(new i("VG",24,"U04F16","VG96VPVG0000012345678901")),c(new i("XK",20,"F04F10F02","XK051212012345678906")),c(new i("AO",25,"F21","AO69123456789012345678901")),c(new i("BF",27,"F23","BF2312345678901234567890123")),c(new i("BI",16,"F12","BI41123456789012")),c(new i("BJ",28,"F24","BJ39123456789012345678901234")),c(new i("CI",28,"U02F22","CI70CI1234567890123456789012")),c(new i("CM",27,"F23","CM9012345678901234567890123")),c(new i("CV",25,"F21","CV30123456789012345678901")),c(new i("DZ",24,"F20","DZ8612345678901234567890")),c(new i("IR",26,"F22","IR861234568790123456789012")),c(new i("MG",27,"F23","MG1812345678901234567890123")),c(new i("ML",28,"U01F23","ML15A12345678901234567890123")),c(new i("MZ",25,"F21","MZ25123456789012345678901")),c(new i("SN",28,"U01F23","SN52A12345678901234567890123")),c(new i("GF",27,"F05F05A11F02","GF121234512345123456789AB13")),c(new i("GP",27,"F05F05A11F02","GP791234512345123456789AB13")),c(new i("MQ",27,"F05F05A11F02","MQ221234512345123456789AB13")),c(new i("RE",27,"F05F05A11F02","RE131234512345123456789AB13")),c(new i("PF",27,"F05F05A11F02","PF281234512345123456789AB13")),c(new i("TF",27,"F05F05A11F02","TF891234512345123456789AB13")),c(new i("YT",27,"F05F05A11F02","YT021234512345123456789AB13")),c(new i("NC",27,"F05F05A11F02","NC551234512345123456789AB13")),c(new i("BL",27,"F05F05A11F02","BL391234512345123456789AB13")),c(new i("MF",27,"F05F05A11F02","MF551234512345123456789AB13")),c(new i("PM",27,"F05F05A11F02","PM071234512345123456789AB13")),c(new i("WF",27,"F05F05A11F02","WF621234512345123456789AB13"));var l=/[^a-zA-Z0-9]/g,u=/(.{4})(?!$)/g;function h(e){return"string"==typeof e||e instanceof String}e.isValid=function(e){if(!h(e))return!1;e=r(e);var t=o[e.slice(0,2)];return!!t&&t.isValid(e)},e.toBBAN=function(e,t){void 0===t&&(t=" "),e=r(e);var n=o[e.slice(0,2)];if(!n)throw new Error("No country with code "+e.slice(0,2));return n.toBBAN(e,t)},e.fromBBAN=function(e,t){var n=o[e];if(!n)throw new Error("No country with code "+e);return n.fromBBAN(r(t))},e.isValidBBAN=function(e,t){if(!h(t))return!1;var n=o[e];return n&&n.isValidBBAN(r(t))},e.printFormat=function(e,t){return void 0===t&&(t=" "),r(e).replace(u,"$1"+t)},e.electronicFormat=r,e.countries=o})?a.apply(t,[t]):a)||(e.exports=s)},VqxJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("EM62");const s=["nxCopytext",""],r=["*"];let i=(()=>{class e{constructor(){this.type="normal",this.negative=!1}set classNames(e){if(this._classNames===e)return;this._classNames=e;const[t=null]=this._classNames.match(/small|medium|normal|large/)||["normal"];this.type=t,this.negative=!!this._classNames.match(/negative/)}get classNames(){return this._classNames}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Hb({type:e,selectors:[["","nxCopytext",""]],hostVars:12,hostBindings:function(e,t){2&e&&a.Fb("nx-copy",!0)("nx-copy--small","small"===t.type)("nx-copy--medium","medium"===t.type)("nx-copy--normal","normal"===t.type)("nx-copy--large","large"===t.type)("nx-copy--negative",t.negative)},inputs:{classNames:["nxCopytext","classNames"]},attrs:s,ngContentSelectors:r,decls:1,vars:0,template:function(e,t){1&e&&(a.jc(),a.ic(0))},styles:["[_nghost-%COMP%]{margin:0 0 32px;font-size:var(--paragraph-03-font-size);line-height:var(--paragraph-03-line-height);font-weight:var(--paragraph-03-font-weight);letter-spacing:var(--paragraph-03-letter-spacing)}.nx-copy.nx-copy[_nghost-%COMP%]{font-weight:400}.nx-copy--negative[_nghost-%COMP%]{color:var(--negative)}.nx-copy--small[_nghost-%COMP%]{font-size:var(--paragraph-05-font-size);line-height:var(--paragraph-05-line-height);font-weight:var(--paragraph-05-font-weight);letter-spacing:var(--paragraph-05-letter-spacing)}.nx-copy--medium[_nghost-%COMP%]{font-size:var(--paragraph-04-font-size);line-height:var(--paragraph-04-line-height);font-weight:var(--paragraph-04-font-weight);letter-spacing:var(--paragraph-04-letter-spacing)}.nx-copy--large[_nghost-%COMP%]{font-size:var(--paragraph-02-font-size);line-height:var(--paragraph-02-line-height);font-weight:var(--paragraph-02-font-weight);letter-spacing:var(--paragraph-02-letter-spacing)}"],changeDetection:0}),e})()},kciO:function(e,t,n){"use strict";n.r(t),n.d(t,"MaskExamplesModule",(function(){return R}));var a=n("6c6m"),s=n("9j8J"),r=n("2kYt"),i=n("B79f"),o=n("EM62");let c=(()=>{class e{}return e.\u0275mod=o.Lb({type:e}),e.\u0275inj=o.Kb({factory:function(t){return new(t||e)},imports:[[r.c,i.e],i.e]}),e})();var l=n("nIj0"),u=n("5XID"),h=n("fAiE"),p=n("ZTXN");const d={provide:l.n,useExisting:Object(o.V)(()=>g),multi:!0},b={provide:l.m,useExisting:Object(o.V)(()=>g),multi:!0};let g=(()=>{class e{constructor(e){this._elementRef=e,this._separators=["/","(",")",".",":","-"," ","+",","],this._dropSpecialCharacters=!1,this._validateMask=!0,this._deactivateMask=!1,this.cvaModelChange=new p.a,this._onChangeCallback=e=>{},this._onTouchedCallback=()=>{},this._validatorOnChange=()=>{},this._afterInputHook=e=>{},this._beforePasteHook=e=>{}}_callOnChangeCallback(){this._onChangeCallback(this.dropSpecialCharacters?this.getUnmaskedValue():this._elementRef.nativeElement.value)}registerAfterInputHook(e){this._afterInputHook=e}registerBeforePasteHook(e){this._beforePasteHook=e}set deactivateMask(e){const t=Object(u.b)(e);t!==this._deactivateMask&&(this._deactivateMask=t,this.updateValue(this._deactivateMask?this.getUnmaskedValue():this.getMaskedString(this._elementRef.nativeElement.value)),this._callOnChangeCallback())}get deactivateMask(){return this._deactivateMask}set mask(e){e||(e=""),e!==this._mask&&(this._mask=e,this.updateValue(this.getMaskedString(this._elementRef.nativeElement.value)),this._callOnChangeCallback(),this._validatorOnChange())}get mask(){return this._mask}setMask(e){e||(e=""),e!==this._mask&&(this._mask=e,this.updateValue(this.getMaskedString(this._elementRef.nativeElement.value)),this._validatorOnChange())}set convertTo(e){this._convertTo=e,this.updateValue(this.getMaskedString(this._elementRef.nativeElement.value)),this._callOnChangeCallback()}get convertTo(){return this._convertTo}set separators(e){this._separators=e,this.updateValue(this.getMaskedString(this._elementRef.nativeElement.value)),this._validatorOnChange(),this._callOnChangeCallback()}get separators(){return this._separators}set dropSpecialCharacters(e){const t=Object(u.b)(e);t!==this._dropSpecialCharacters&&(this._dropSpecialCharacters=t,this.updateValue(this.getMaskedString(this._elementRef.nativeElement.value)),this._callOnChangeCallback())}get dropSpecialCharacters(){return this._dropSpecialCharacters}set validateMask(e){const t=Object(u.b)(e);t!==this._validateMask&&(this._validateMask=t,this._validatorOnChange())}get validateMask(){return this._validateMask}get elementRefValue(){return this._elementRef.nativeElement.value}getUnmaskedValue(){return this.separators.reduce((function(e,t){return e.split(t).join("")}),this._elementRef.nativeElement.value)}_onKeydown(e){const t=e.keyCode,n=e.target,a=this._elementRef.nativeElement.value;if(t===h.b||t===h.c){const s=t===h.b?1:0,r=a.substring(n.selectionStart-s,n.selectionEnd-s+1),i=n.selectionStart===a.length-1+s;if(n.selectionStart!==n.selectionEnd){let e=n.selectionStart;for(;this.isSeparator(this.mask[e]);)e++;this._cursor={position:e}}else i?(this.updateValue(a.substring(0,a.length-1)),this._callOnChangeCallback(),e.preventDefault()):this.isSeparator(r)?(n.setSelectionRange(n.selectionStart-s,n.selectionEnd-s),e.preventDefault()):this._cursor={position:n.selectionStart-s}}else this._cursor={selectionStart:n.selectionStart,selectionEnd:n.selectionEnd}}_calculateCursorShift(e){let t=0,n=!1;for(this.isSeparator(this.mask[e+t])||(t++,n=!0);this.isSeparator(this.mask[e+t]);)t++;return n||t++,t}_isStringAllowed(e,t){return!!("0"===t&&/^[0-9]{1}$/.test(e)||"A"===t&&/^[a-zA-Z0-9]{1}$/.test(e)||"S"===t&&/^[a-zA-Z]{1}$/.test(e))}_onInputChange(e){const t=this._inputValue,n=e.target;let a=this.getMaskedString(n.value);if(this._deactivateMask)return a=n.value,this.updateValue(a),void this._callOnChangeCallback();if(this._pastedData)return this.updateValue(this._pastedData),n.setSelectionRange(this._cursor.position,this._cursor.position),this._pastedData=null,this._cursor=null,void this._callOnChangeCallback();if(t.length===this._mask.length&&a.length===this._mask.length&&t!==a&&this._cursor&&void 0!==this._cursor.selectionStart&&this._cursor.selectionStart===this._cursor.selectionEnd)return this._elementRef.nativeElement.value=this.getMaskedString(t),n.setSelectionRange(this._cursor.selectionStart,this._cursor.selectionEnd),void(this._cursor=null);if(this.updateValue(a),this._cursor&&void 0!==this._cursor.position)n.setSelectionRange(this._cursor.position,this._cursor.position),this._cursor=null;else if(this._cursor&&void 0!==this._cursor.selectionStart)if(t!==n.value){const e=this._cursor.selectionStart+this._calculateCursorShift(this._cursor.selectionStart);n.setSelectionRange(e,e),this._cursor=null}else{let e=this._cursor.selectionStart;for(;this.isSeparator(this.mask[e]);)e++;n.setSelectionRange(e,e),this._cursor=null}this._afterInputHook(e),this._callOnChangeCallback()}_onPaste(e){const t=e.target,n=(e.clipboardData||window.clipboardData).getData("text"),a=t.selectionStart,s=t.selectionEnd,r=t.value;this._beforePasteHook(e);const i=this.getMaskedString(n,a);if(t.value.length===this._mask.length&&i.length>0&&a===s)return t.setSelectionRange(a,s),this._cursor=null,void e.preventDefault();const o=this.separators.reduce((e,t)=>e.split(t).join(""),i);let c=this.getMaskedString(r.substring(0,a)+o+r.substring(s,r.length));if(c.length>=this._mask.length){let e=a,t=1;do{c=this.getMaskedString(r.substring(0,a)+o.substring(0,t)+r.substring(s,r.length)),e+=this._calculateCursorShift(e),t++}while(c.length<this._mask.length);return this._pastedData=c,void(this._cursor={position:e})}this._cursor={position:a+i.length}}updateValue(e){this._deactivateMask||("upper"===this._convertTo?e=e.toUpperCase():"lower"===this._convertTo&&(e=e.toLowerCase())),this._elementRef.nativeElement.value=e,this._inputValue=e}getMaskedString(e,t=0){let n="",a=t,s=0;for(;this.isSeparator(this.mask[a]);)n+=this.mask[a],a++;for(;s<e.length;)for(this._isStringAllowed(e[s],this.mask[a])?(n+=e[s],s++,a++):s++;this.isSeparator(this.mask[a]);)n+=this.mask[a],a++;return n}isSeparator(e){return-1!==this._separators.indexOf(e)}writeValue(e){e||(e=""),this.cvaModelChange.next(e),this.updateValue(this.deactivateMask?this.getUnmaskedValue():this.getMaskedString(e))}registerOnChange(e){this._onChangeCallback=e}registerOnTouched(e){this._onTouchedCallback=e}registerOnValidatorChange(e){this._validatorOnChange=e}_validateFn(){const e=this._elementRef.nativeElement.value.length,t=this._mask.length;return e===t||this.deactivateMask?null:{nxMaskLengthError:{length:t,actual:e}}}validate(){return this.validateMask?this._validateFn():null}_touch(){this._onTouchedCallback()}}return e.\u0275fac=function(t){return new(t||e)(o.Nb(o.l))},e.\u0275dir=o.Ib({type:e,selectors:[["input","nxMask",""]],hostBindings:function(e,t){1&e&&o.ac("input",(function(e){return t._onInputChange(e)}))("keydown",(function(e){return t._onKeydown(e)}))("paste",(function(e){return t._onPaste(e)}))("blur",(function(){return t._touch()}))},inputs:{deactivateMask:"deactivateMask",mask:["nxMask","mask"],convertTo:["nxConvertTo","convertTo"],separators:"separators",dropSpecialCharacters:"dropSpecialCharacters",validateMask:"validateMask"},exportAs:["nxMaskDirective"],features:[o.Ab([d,{provide:a.a,useExisting:e},b])]}),e})();var m=n("G1wH");const v={provide:l.m,useExisting:Object(o.V)(()=>F),multi:!0};let F=(()=>{class e{constructor(e,t){this._elementRef=e,this.maskDirective=t,this._afterInputHook=e=>{this._setCountryCode(e.target.value.substr(0,2))},this._beforePasteHook=e=>{const t=e.target,n=(e.clipboardData||window.clipboardData).getData("text"),a=(this.maskDirective.elementRefValue.substr(0,t.selectionStart)+this.maskDirective.getMaskedString(n,t.selectionStart)).substr(0,2);this._setCountryCode(a)},this.maskDirective.registerAfterInputHook(this._afterInputHook),this.maskDirective.registerBeforePasteHook(this._beforePasteHook),this.maskDirective.cvaModelChange.subscribe(e=>{const t=this.maskDirective.getMaskedString(e).substr(0,2);this._setCountryCode(t)})}_setCountryCode(e){2===(e=e.toUpperCase()).length&&this._countryCode!==e&&(this._countryCodeExists(e)?(this._countryCode=e,this.maskDirective.setMask(this._getMask(this._countryCode))):(this._countryCode=null,this.maskDirective.setMask("SS")))}ngOnInit(){this.maskDirective.mask="SS",this.maskDirective.convertTo="upper"}_getMask(e){let t="SS00";return m.countries[e].structure.match(/.{1,3}/g).forEach(e=>{const n=e[0],a=Number(e.substring(1,3));switch(n){case"F":t+="0".repeat(a);break;case"A":t+="A".repeat(a);break;case"U":t+="S".repeat(a)}}),t=t.match(/.{1,4}/g).join(" "),t}_countryCodeExists(e){return!!m.countries[e]}_validateFn(){const e=this._elementRef.nativeElement.value.substr(0,2);return 2!==e.length||this._countryCodeExists(e)?m.isValid(this.maskDirective.getUnmaskedValue())?null:{nxIbanParseError:"no valid iban"}:(this.maskDirective._touch(),{nxIbanInvalidCountryError:"no valid country code"})}validate(){return this.maskDirective.validateMask?this._validateFn():null}}return e.\u0275fac=function(t){return new(t||e)(o.Nb(o.l),o.Nb(Object(o.V)(()=>g)))},e.\u0275dir=o.Ib({type:e,selectors:[["input","nxIbanMask",""]],exportAs:["nxIbanMaskDirective"],features:[o.Ab([v])]}),e})();var f=n("+K2D"),k=n("6DsR"),S=n("xRDo"),A=n("PCf9"),M=n("XEMv"),w=n("TdcJ");let _=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Hb({type:e,selectors:[["ng-component"]],decls:18,vars:0,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","6"],["nxLabel","Time"],["nxInput","","nxMask","00:00:00"],["nxFormfieldHint",""],["nxLabel","ID"],["nxInput","","nxMask","SS-AAAAA"],["nxLabel","Birthday"],["nxInput","","nxMask","00/00/0000"]],template:function(e,t){1&e&&(o.Tb(0,"div",0),o.Tb(1,"div",1),o.Tb(2,"div",2),o.Tb(3,"nx-formfield",3),o.Ob(4,"input",4),o.Tb(5,"span",5),o.Jc(6," Mask: 00:00:00 "),o.Sb(),o.Sb(),o.Sb(),o.Tb(7,"div",2),o.Tb(8,"nx-formfield",6),o.Ob(9,"input",7),o.Tb(10,"span",5),o.Jc(11," Mask: SS-AAAAA "),o.Sb(),o.Sb(),o.Sb(),o.Sb(),o.Tb(12,"div",1),o.Tb(13,"div",2),o.Tb(14,"nx-formfield",8),o.Ob(15,"input",9),o.Tb(16,"span",5),o.Jc(17," Mask: 00/00/0000 "),o.Sb(),o.Sb(),o.Sb(),o.Sb(),o.Sb())},directives:[f.a,k.a,S.a,A.b,M.b,g,w.a],encapsulation:2}),e})();var C=n("0aWw");let x=(()=>{class e{constructor(){this.templateModel="upper"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Hb({type:e,selectors:[["ng-component"]],decls:15,vars:4,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","6"],[3,"ngModel","ngModelChange"],["nxValue","upper",1,"nx-margin-bottom-m"],["nxValue","lower"],["nxLabel","Input"],["nxInput","","nxMask","AAAA",3,"nxConvertTo","ngModel","ngModelChange"],["nxFormfieldHint",""]],template:function(e,t){1&e&&(o.Tb(0,"div",0),o.Tb(1,"div",1),o.Tb(2,"div",2),o.Tb(3,"nx-radio-group",3),o.ac("ngModelChange",(function(e){return t.templateModel=e})),o.Tb(4,"nx-radio",4),o.Jc(5,"Upper case"),o.Sb(),o.Tb(6,"nx-radio",5),o.Jc(7,"Lower case"),o.Sb(),o.Sb(),o.Sb(),o.Tb(8,"div",2),o.Tb(9,"nx-formfield",6),o.Tb(10,"input",7),o.ac("ngModelChange",(function(e){return t.modelVal=e})),o.Sb(),o.Tb(11,"span",8),o.Jc(12," Mask: AAAA "),o.Sb(),o.Sb(),o.Jc(13),o.Ob(14,"br"),o.Sb(),o.Sb(),o.Sb()),2&e&&(o.Bb(3),o.kc("ngModel",t.templateModel),o.Bb(7),o.kc("nxConvertTo",t.templateModel)("ngModel",t.modelVal),o.Bb(3),o.Lc(" Model value: ",t.modelVal,""))},directives:[f.a,k.a,S.a,C.b,l.p,l.s,C.a,A.b,M.b,g,l.a,w.a],styles:[""]}),e})(),T=(()=>{class e{constructor(){this.templateModel="deactivate"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Hb({type:e,selectors:[["ng-component"]],decls:15,vars:5,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","6"],[3,"ngModel","ngModelChange"],["nxValue","activate",1,"nx-margin-bottom-m"],["nxValue","deactivate"],["nxLabel","ID"],["nxInput","","nxMask","SS-AAAAA",3,"deactivateMask","ngModel","ngModelChange"],["nxFormfieldHint",""]],template:function(e,t){1&e&&(o.Tb(0,"div",0),o.Tb(1,"div",1),o.Tb(2,"div",2),o.Tb(3,"nx-radio-group",3),o.ac("ngModelChange",(function(e){return t.templateModel=e})),o.Tb(4,"nx-radio",4),o.Jc(5,"Activate"),o.Sb(),o.Tb(6,"nx-radio",5),o.Jc(7,"De-activate"),o.Sb(),o.Sb(),o.Sb(),o.Tb(8,"div",2),o.Tb(9,"nx-formfield",6),o.Tb(10,"input",7),o.ac("ngModelChange",(function(e){return t.modelVal=e})),o.Sb(),o.Tb(11,"span",8),o.Jc(12),o.Sb(),o.Sb(),o.Jc(13),o.Ob(14,"br"),o.Sb(),o.Sb(),o.Sb()),2&e&&(o.Bb(3),o.kc("ngModel",t.templateModel),o.Bb(7),o.kc("deactivateMask","deactivate"===t.templateModel)("ngModel",t.modelVal),o.Bb(2),o.Lc(" Mask: SS-AAAAA (mask deactivated: ","deactivate"===t.templateModel,") "),o.Bb(1),o.Lc(" Model value: ",t.modelVal,""))},directives:[f.a,k.a,S.a,C.b,l.p,l.s,C.a,A.b,M.b,g,l.a,w.a],encapsulation:2}),e})(),B=(()=>{class e{constructor(){this.dateTimeDropped="020618",this.dateTimeValue="020618"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Hb({type:e,selectors:[["ng-component"]],decls:19,vars:4,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","6"],["nxLabel","Special characters dropped"],["nxInput","","nxMask","00/00/00 00:00:00","dropSpecialCharacters","true",3,"ngModel","ngModelChange"],["nxFormfieldHint",""],["nxLabel","Not dropped (default)"],["nxInput","","nxMask","00/00/00 00:00:00","dropSpecialCharacters","false",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(o.Tb(0,"div",0),o.Tb(1,"div",1),o.Tb(2,"div",2),o.Tb(3,"nx-formfield",3),o.Tb(4,"input",4),o.ac("ngModelChange",(function(e){return t.dateTimeDropped=e})),o.Sb(),o.Tb(5,"span",5),o.Jc(6," 00/00/00 00:00:00 "),o.Sb(),o.Sb(),o.Sb(),o.Tb(7,"div",2),o.Tb(8,"p"),o.Jc(9),o.Sb(),o.Sb(),o.Sb(),o.Tb(10,"div",1),o.Tb(11,"div",2),o.Tb(12,"nx-formfield",6),o.Tb(13,"input",7),o.ac("ngModelChange",(function(e){return t.dateTimeValue=e})),o.Sb(),o.Tb(14,"span",5),o.Jc(15," 00/00/00 00:00:00 "),o.Sb(),o.Sb(),o.Sb(),o.Tb(16,"div",2),o.Tb(17,"p"),o.Jc(18),o.Sb(),o.Sb(),o.Sb(),o.Sb()),2&e&&(o.Bb(4),o.kc("ngModel",t.dateTimeDropped),o.Bb(5),o.Lc("Current value: ",t.dateTimeDropped,""),o.Bb(4),o.kc("ngModel",t.dateTimeValue),o.Bb(5),o.Lc("Current value: ",t.dateTimeValue,""))},directives:[f.a,k.a,S.a,A.b,M.b,g,l.a,l.p,l.s,w.a],styles:["p[_ngcontent-%COMP%]{margin-top:24px}"]}),e})(),y=(()=>{class e{constructor(){this.mask="00-00 [00]",this.separators=["-","[","]"," "]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Hb({type:e,selectors:[["ng-component"]],decls:7,vars:3,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","6"],["nxLabel","Masked input"],["nxInput","",3,"nxMask","separators"],["nxFormfieldHint",""]],template:function(e,t){1&e&&(o.Tb(0,"div",0),o.Tb(1,"div",1),o.Tb(2,"div",2),o.Tb(3,"nx-formfield",3),o.Ob(4,"input",4),o.Tb(5,"span",5),o.Jc(6),o.Sb(),o.Sb(),o.Sb(),o.Sb(),o.Sb()),2&e&&(o.Bb(4),o.kc("nxMask",t.mask)("separators",t.separators),o.Bb(2),o.Lc(" Mask: ",t.mask," "))},directives:[f.a,k.a,S.a,A.b,M.b,g,w.a],encapsulation:2}),e})();var I=n("ImiB"),E=n("tPQ2");let L=(()=>{class e{constructor(){this.validatedMaskForm=new l.h({maskInput:new l.e("",{})}),this.unvalidatedMaskForm=new l.h({maskInput2:new l.e("",{})})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Hb({type:e,selectors:[["ng-component"]],decls:32,vars:14,consts:[["nxLayout","grid"],["nxRow",""],["nxCol","6"],["nxHeadline","subsection-xsmall"],[3,"formGroup"],["nxLabel","Time"],["nxInput","","nxMask","00:00:00","formControlName","maskInput"],["nxFormfieldHint",""],["nxButton","primary small","type","submit"],["nxInput","","nxMask","00:00:00","formControlName","maskInput2","validateMask","false"]],template:function(e,t){1&e&&(o.Tb(0,"div",0),o.Tb(1,"div",1),o.Tb(2,"div",2),o.Tb(3,"h4",3),o.Jc(4,"With mask validation"),o.Sb(),o.Tb(5,"form",4),o.Tb(6,"nx-formfield",5),o.Ob(7,"input",6),o.Tb(8,"span",7),o.Jc(9," Mask: 00:00:00 "),o.Sb(),o.Sb(),o.Tb(10,"button",8),o.Jc(11,"submit"),o.Sb(),o.Sb(),o.Jc(12),o.fc(13,"json"),o.Ob(14,"br"),o.Jc(15),o.fc(16,"json"),o.Sb(),o.Tb(17,"div",2),o.Tb(18,"h4",3),o.Jc(19,"Without mask validation"),o.Sb(),o.Tb(20,"form",4),o.Tb(21,"nx-formfield",5),o.Ob(22,"input",9),o.Tb(23,"span",7),o.Jc(24," Mask: 00:00:00 "),o.Sb(),o.Sb(),o.Tb(25,"button",8),o.Jc(26,"submit"),o.Sb(),o.Sb(),o.Jc(27),o.fc(28,"json"),o.Ob(29,"br"),o.Jc(30),o.fc(31,"json"),o.Sb(),o.Sb(),o.Sb()),2&e&&(o.Bb(5),o.kc("formGroup",t.validatedMaskForm),o.Bb(7),o.Lc(" Form value: ",o.gc(13,6,t.validatedMaskForm.value),""),o.Bb(3),o.Lc(" Testform: ",o.gc(16,8,t.validatedMaskForm.status)," "),o.Bb(5),o.kc("formGroup",t.unvalidatedMaskForm),o.Bb(7),o.Lc(" Form value: ",o.gc(28,10,t.unvalidatedMaskForm.value),""),o.Bb(3),o.Lc(" Testform: ",o.gc(31,12,t.unvalidatedMaskForm.status)," "))},directives:[f.a,k.a,S.a,I.a,l.A,l.q,l.i,A.b,M.b,g,l.a,l.p,l.g,w.a,E.a],pipes:[r.k],encapsulation:2}),e})(),O=(()=>{class e{constructor(){this.validatedMaskForm=new l.h({maskInput:new l.e("",{})})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Hb({type:e,selectors:[["ng-component"]],decls:29,vars:10,consts:[[3,"formGroup"],["nxLabel","IBAN"],["nxInput","","nxMask","","nxIbanMask","","formControlName","maskInput"],["nxButton","primary small","type","submit"]],template:function(e,t){1&e&&(o.Tb(0,"form",0),o.Tb(1,"nx-formfield",1),o.Ob(2,"input",2),o.Sb(),o.Tb(3,"button",3),o.Jc(4,"submit"),o.Sb(),o.Sb(),o.Jc(5),o.fc(6,"json"),o.Ob(7,"br"),o.Jc(8),o.fc(9,"json"),o.Ob(10,"br"),o.Jc(11),o.fc(12,"json"),o.Ob(13,"br"),o.Tb(14,"p"),o.Tb(15,"strong"),o.Jc(16,"Try to enter some test IBANs:"),o.Sb(),o.Sb(),o.Tb(17,"p"),o.Tb(18,"strong"),o.Jc(19,"Germany:"),o.Sb(),o.Jc(20," DE89 3704 0044 0532 0130 00"),o.Ob(21,"br"),o.Tb(22,"strong"),o.Jc(23,"Norway:"),o.Sb(),o.Jc(24," NO93 8601 1117 947"),o.Ob(25,"br"),o.Tb(26,"strong"),o.Jc(27,"Malta:"),o.Sb(),o.Jc(28," MT84 MALT 0110 0001 2345 MTLC AST0 01S\n"),o.Sb()),2&e&&(o.kc("formGroup",t.validatedMaskForm),o.Bb(5),o.Lc(" Form value: ",o.gc(6,4,t.validatedMaskForm.value),""),o.Bb(3),o.Lc("\nTestform: ",o.gc(9,6,t.validatedMaskForm.status),""),o.Bb(3),o.Lc("\nValidation errors: ",o.gc(12,8,t.validatedMaskForm.get("maskInput").errors),""))},directives:[l.A,l.q,l.i,A.b,M.b,g,F,l.a,l.p,l.g,E.a],pipes:[r.k],encapsulation:2}),e})();var V=n("t3RA");let R=(()=>{class e{static components(){return{mask:_,"mask-case":x,"mask-deactivate":T,"mask-drop-characters":B,"mask-separators":y,"mask-validation":L,"iban-mask":O}}}return e.\u0275mod=o.Lb({type:e}),e.\u0275inj=o.Kb({factory:function(t){return new(t||e)},imports:[[c,s.a,a.b,V.a]]}),e})()}}]);