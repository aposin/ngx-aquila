!function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function t(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{W3Uf:function(e,o,i){"use strict";i.r(o),i.d(o,"VideoExamplesModule",(function(){return I}));var c,a=i("2kYt"),r=i("0FLW"),l=i("EM62"),s=((c=function e(){n(this,e)}).\u0275mod=l.Lb({type:c}),c.\u0275inj=l.Kb({factory:function(e){return new(e||c)},imports:[[a.c,r.c]]}),c),u=i("5XID"),d=i("e4iD"),h=i("VKQk");function g(e,t){if(1&e){var n=l.Ub();l.Tb(0,"div"),l.Tb(1,"button",3),l.ac("click",(function(){return l.vc(n),l.ec().select()}))("keydown.enter",(function(){return l.vc(n),l.ec().select()})),l.Ob(2,"nx-icon",4),l.Sb(),l.Tb(3,"img",5),l.ac("click",(function(){return l.vc(n),l.ec().select()}))("keydown.enter",(function(){return l.vc(n),l.ec().select()})),l.Sb(),l.Sb()}if(2&e){var o=l.ec();l.Bb(1),l.Cb("aria-label",o.playButtonAriaLabel),l.Bb(2),l.kc("src",o.imgSrc,l.yc)("alt",o.altText)}}function b(e,t){if(1&e&&(l.Tb(0,"div"),l.Ob(1,"iframe",6),l.Sb()),2&e){var n=l.ec();l.Bb(1),l.kc("src",n.videoSrc,l.xc),l.Cb("allowfullscreen",n.allowFullScreen)}}var y,M,x,v,p,f=((p=function(){function e(t,o){n(this,e),this.sanitizer=t,this._changeDetectorRef=o,this._videoId=null,this._altText="",this._playButtonAriaLabel="",this._previewImageSrc=null,this._showPlayerControls=!0,this._allowFullScreen=!0,this._interfaceLanguage=null,this.showPlayer=!1}return t(e,[{key:"select",value:function(){this.showPlayer=!0,this._changeDetectorRef.markForCheck()}},{key:"videoId",set:function(e){this._videoId!==e&&(this._videoId=e,this._changeDetectorRef.markForCheck())},get:function(){return this._videoId}},{key:"altText",set:function(e){this._altText!==e&&(this._altText=e,this._changeDetectorRef.markForCheck())},get:function(){return this._altText}},{key:"nxPlayButtonAriaLabel",set:function(e){this._playButtonAriaLabel!==e&&(this._playButtonAriaLabel=e,this._changeDetectorRef.markForCheck())},get:function(){return this._playButtonAriaLabel}},{key:"previewImageSrc",set:function(e){this._previewImageSrc!==e&&(this._previewImageSrc=e,this._changeDetectorRef.markForCheck())},get:function(){return this._previewImageSrc}},{key:"showPlayerControls",set:function(e){this._showPlayerControls=Object(u.b)(e),this._changeDetectorRef.markForCheck()},get:function(){return this._showPlayerControls}},{key:"allowFullScreen",set:function(e){this._allowFullScreen=Object(u.b)(e),this._changeDetectorRef.markForCheck()},get:function(){return this._allowFullScreen}},{key:"interfaceLanguage",set:function(e){this._interfaceLanguage!==e&&(this._interfaceLanguage=e,this._changeDetectorRef.markForCheck())},get:function(){return this._interfaceLanguage}},{key:"videoSrc",get:function(){var e="https://www.youtube.com/embed/".concat(this.videoId,"?rel=0&showinfo=0&autoplay=1");return this.showPlayerControls||(e+="&controls=0"),this.allowFullScreen||(e+="&fs=0"),this.interfaceLanguage&&(e+="&hl="+this.interfaceLanguage),this.sanitizer.bypassSecurityTrustResourceUrl(e)}},{key:"imgSrc",get:function(){return this.previewImageSrc?this.previewImageSrc:"https://img.youtube.com/vi/".concat(this.videoId,"/sddefault.jpg")}},{key:"playButtonAriaLabel",get:function(){return this.nxPlayButtonAriaLabel?this.nxPlayButtonAriaLabel:this.altText?this.altText+" - Play Video":"Play Video"}}]),e}()).\u0275fac=function(e){return new(e||p)(l.Nb(d.b),l.Nb(l.h))},p.\u0275cmp=l.Hb({type:p,selectors:[["nx-video"]],inputs:{videoId:["nxVideoId","videoId"],altText:["nxAltText","altText"],nxPlayButtonAriaLabel:"nxPlayButtonAriaLabel",previewImageSrc:["nxPreviewImageSrc","previewImageSrc"],showPlayerControls:["nxShowPlayerControls","showPlayerControls"],allowFullScreen:["nxAllowFullScreen","allowFullScreen"],interfaceLanguage:["nxInterfaceLanguage","interfaceLanguage"]},decls:4,vars:2,consts:[[1,"nx-video"],[1,"nx-video__iframe"],[4,"ngIf"],[1,"nx-video__play-button",3,"click","keydown.enter"],["name","play","size","s",1,"nx-video__high-contrast-icon"],[1,"nx-video__thumbnail",3,"src","alt","click","keydown.enter"],["title","video",1,"nx-video__iframe",3,"src"]],template:function(e,t){1&e&&(l.Tb(0,"div",0),l.Tb(1,"div",1),l.Hc(2,g,4,3,"div",2),l.Hc(3,b,2,2,"div",2),l.Sb(),l.Sb()),2&e&&(l.Bb(2),l.kc("ngIf",!t.showPlayer),l.Bb(1),l.kc("ngIf",t.videoId&&t.showPlayer))},directives:[a.t,h.a],styles:['.nx-video[_ngcontent-%COMP%]{position:relative;padding-bottom:56.25%;overflow:hidden;width:100%;height:auto}.nx-video__iframe[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;border:none}.nx-video__thumbnail[_ngcontent-%COMP%]{position:absolute;cursor:pointer;width:100%;top:50%;left:50%;transform:translate(-50%,-50%);opacity:.7}.nx-video__play-button[_ngcontent-%COMP%]{border:none;background:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB3aWR0aD0nODhweCcgaGVpZ2h0PSc1NnB4JyB2aWV3Qm94PScwIDAgODggNTYnIHZlcnNpb249JzEuMSc+PHRpdGxlPkF0b20gLyBNZWRpYSAvIFlvdVR1YmUgUGxheWVyIC8gW0Fzc2V0c10gLyBQbGF5IEJ1dHRvbjwvdGl0bGU+PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+PGRlZnM+PHJlY3QgaWQ9J3BhdGgtMScgeD0nMCcgeT0nMCcgd2lkdGg9Jzg4JyBoZWlnaHQ9JzU2JyByeD0nOCcvPjxmaWx0ZXIgeD0nLTQwLjklJyB5PSctNjQuMyUnIHdpZHRoPScxODEuOCUnIGhlaWdodD0nMjI4LjYlJyBmaWx0ZXJVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnIGlkPSdmaWx0ZXItMic+PGZlT2Zmc2V0IGR4PScwJyBkeT0nMCcgaW49J1NvdXJjZUFscGhhJyByZXN1bHQ9J3NoYWRvd09mZnNldE91dGVyMScvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEyJyBpbj0nc2hhZG93T2Zmc2V0T3V0ZXIxJyByZXN1bHQ9J3NoYWRvd0JsdXJPdXRlcjEnLz48ZmVDb2xvck1hdHJpeCB2YWx1ZXM9JzAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC41IDAnIHR5cGU9J21hdHJpeCcgaW49J3NoYWRvd0JsdXJPdXRlcjEnLz48L2ZpbHRlcj48L2RlZnM+PGcgaWQ9J0F0b20tLy1NZWRpYS0vLVlvdVR1YmUtUGxheWVyLS8tW0Fzc2V0c10tLy1QbGF5LUJ1dHRvbicgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCc+PGcgaWQ9J0JhY2tncm91bmQnIG9wYWNpdHk9JzAuODAxMjM0MTQ5Jz48dXNlIGZpbGw9J2JsYWNrJyBmaWxsLW9wYWNpdHk9JzEnIGZpbHRlcj0ndXJsKCNmaWx0ZXItMiknIHhsaW5rOmhyZWY9JyNwYXRoLTEnLz48dXNlIGZpbGw9JyM0MTQxNDEnIGZpbGwtcnVsZT0nZXZlbm9kZCcgeGxpbms6aHJlZj0nI3BhdGgtMScvPjwvZz48cGF0aCBkPSdNNTQuMjExMTQ1NiwyOC44OTQ0MjcyIEwzMy40NDcyMTM2LDM5LjI3NjM5MzIgQzMyLjk1MzIzNTEsMzkuNTIzMzgyNSAzMi4zNTI1NjIxLDM5LjMyMzE1ODEgMzIuMTA1NTcyOCwzOC44MjkxNzk2IEMzMi4wMzYxNDUxLDM4LjY5MDMyNDIgMzIsMzguNTM3MjExMSAzMiwzOC4zODE5NjYgTDMyLDE3LjYxODAzNCBDMzIsMTcuMDY1NzQ5MiAzMi40NDc3MTUzLDE2LjYxODAzNCAzMywxNi42MTgwMzQgQzMzLjE1NTI0NTEsMTYuNjE4MDM0IDMzLjMwODM1ODIsMTYuNjU0MTc5MSAzMy40NDcyMTM2LDE2LjcyMzYwNjggTDU0LjIxMTE0NTYsMjcuMTA1NTcyOCBDNTQuNzA1MTI0MSwyNy4zNTI1NjIxIDU0LjkwNTM0ODUsMjcuOTUzMjM1MSA1NC42NTgzNTkyLDI4LjQ0NzIxMzYgQzU0LjU2MTU5NTUsMjguNjQwNzQxIDU0LjQwNDY3MywyOC43OTc2NjM1IDU0LjIxMTE0NTYsMjguODk0NDI3MiBaJyBpZD0nVHJpYW5nbGUnIGZpbGw9JyNGRkZGRkYnLz48L2c+PC9zdmc+") 50% no-repeat;cursor:pointer;position:absolute;width:88px;height:56px;z-index:1;border-radius:4px}.nx-video__play-button[_ngcontent-%COMP%]::-moz-focus-inner{border:0}.nx-video__play-button[_ngcontent-%COMP%]:focus{outline:none}.nx-video__high-contrast-icon[_ngcontent-%COMP%]{display:none}.nx-video__play-button[_ngcontent-%COMP%], .nx-video__play-button[_ngcontent-%COMP%]:before{top:50%;left:50%;transform:translate(-50%,-50%)}@media screen and (-ms-high-contrast:active){.nx-video__play-button[_ngcontent-%COMP%]{background:buttonFace;border:1px solid buttonText;color:buttonText}.nx-video__high-contrast-icon[_ngcontent-%COMP%]{display:inline-flex;vertical-align:middle}}[data-whatinput=keyboard][_nghost-%COMP%]   .nx-video__play-button[_ngcontent-%COMP%]:focus, [data-whatinput=keyboard]   [_nghost-%COMP%]   .nx-video__play-button[_ngcontent-%COMP%]:focus{box-shadow:var(--focus-box-shadow)}@media screen and (-ms-high-contrast:active){[data-whatinput=keyboard][_nghost-%COMP%]   .nx-video__play-button[_ngcontent-%COMP%]:focus, [data-whatinput=keyboard]   [_nghost-%COMP%]   .nx-video__play-button[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 2px background,0 0 0 6px windowText}}'],changeDetection:0}),p),w=((v=function e(){n(this,e)}).\u0275fac=function(e){return new(e||v)},v.\u0275cmp=l.Hb({type:v,selectors:[["nx-video-example"]],decls:1,vars:0,consts:[["nxVideoId","NZM5-1c9D5o","nxAltText","Allianz Classic Add","nxPlayButtonAriaLabel","An Allianz commercial video"]],template:function(e,t){1&e&&l.Ob(0,"nx-video",0)},directives:[f],encapsulation:2}),v),m=((x=function e(){n(this,e)}).\u0275fac=function(e){return new(e||x)},x.\u0275cmp=l.Hb({type:x,selectors:[["nx-video-advanced-example"]],decls:1,vars:1,consts:[["nxVideoId","NZM5-1c9D5o","nxAltText","Allianz Classic Add","nxPlayButtonAriaLabel","An Allianz commercial video","nxInterfaceLanguage","fr",3,"nxAllowFullScreen"]],template:function(e,t){1&e&&l.Ob(0,"nx-video",0),2&e&&l.kc("nxAllowFullScreen",!1)},directives:[f],encapsulation:2}),x),_=((M=function e(){n(this,e)}).\u0275fac=function(e){return new(e||M)},M.\u0275cmp=l.Hb({type:M,selectors:[["nx-video-custom-example"]],decls:1,vars:0,consts:[["nxVideoId","NZM5-1c9D5o","nxAltText","Allianz Classic Add","nxPlayButtonAriaLabel","An Allianz commercial video","nxPreviewImageSrc","http://placehold.it/828x600?text=Video"]],template:function(e,t){1&e&&l.Ob(0,"nx-video",0)},directives:[f],encapsulation:2}),M),I=((y=function(){function e(){n(this,e)}return t(e,null,[{key:"components",value:function(){return{video:w,"video-advanced":m,"video-custom":_}}}]),e}()).\u0275mod=l.Lb({type:y}),y.\u0275inj=l.Kb({factory:function(e){return new(e||y)},imports:[[s]]}),y)}}])}();