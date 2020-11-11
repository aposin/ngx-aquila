(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{W3Uf:function(e,t,n){"use strict";n.r(t),n.d(t,"VideoExamplesModule",(function(){return x}));var o=n("2kYt"),a=n("0FLW"),c=n("EM62");let i=(()=>{class e{}return e.\u0275mod=c.Lb({type:e}),e.\u0275inj=c.Kb({factory:function(t){return new(t||e)},imports:[[o.c,a.c]]}),e})();var r=n("5XID"),l=n("e4iD"),s=n("VKQk");function d(e,t){if(1&e){const e=c.Ub();c.Tb(0,"div"),c.Tb(1,"button",3),c.ac("click",(function(){return c.vc(e),c.ec().select()}))("keydown.enter",(function(){return c.vc(e),c.ec().select()})),c.Ob(2,"nx-icon",4),c.Sb(),c.Tb(3,"img",5),c.ac("click",(function(){return c.vc(e),c.ec().select()}))("keydown.enter",(function(){return c.vc(e),c.ec().select()})),c.Sb(),c.Sb()}if(2&e){const e=c.ec();c.Bb(1),c.Cb("aria-label",e.playButtonAriaLabel),c.Bb(2),c.kc("src",e.imgSrc,c.yc)("alt",e.altText)}}function u(e,t){if(1&e&&(c.Tb(0,"div"),c.Ob(1,"iframe",6),c.Sb()),2&e){const e=c.ec();c.Bb(1),c.kc("src",e.videoSrc,c.xc),c.Cb("allowfullscreen",e.allowFullScreen)}}let g=(()=>{class e{constructor(e,t){this.sanitizer=e,this._changeDetectorRef=t,this._videoId=null,this._altText="",this._playButtonAriaLabel="",this._previewImageSrc=null,this._showPlayerControls=!0,this._allowFullScreen=!0,this._interfaceLanguage=null,this.showPlayer=!1}set videoId(e){this._videoId!==e&&(this._videoId=e,this._changeDetectorRef.markForCheck())}get videoId(){return this._videoId}set altText(e){this._altText!==e&&(this._altText=e,this._changeDetectorRef.markForCheck())}get altText(){return this._altText}set nxPlayButtonAriaLabel(e){this._playButtonAriaLabel!==e&&(this._playButtonAriaLabel=e,this._changeDetectorRef.markForCheck())}get nxPlayButtonAriaLabel(){return this._playButtonAriaLabel}set previewImageSrc(e){this._previewImageSrc!==e&&(this._previewImageSrc=e,this._changeDetectorRef.markForCheck())}get previewImageSrc(){return this._previewImageSrc}set showPlayerControls(e){this._showPlayerControls=Object(r.b)(e),this._changeDetectorRef.markForCheck()}get showPlayerControls(){return this._showPlayerControls}set allowFullScreen(e){this._allowFullScreen=Object(r.b)(e),this._changeDetectorRef.markForCheck()}get allowFullScreen(){return this._allowFullScreen}set interfaceLanguage(e){this._interfaceLanguage!==e&&(this._interfaceLanguage=e,this._changeDetectorRef.markForCheck())}get interfaceLanguage(){return this._interfaceLanguage}select(){this.showPlayer=!0,this._changeDetectorRef.markForCheck()}get videoSrc(){let e=`https://www.youtube.com/embed/${this.videoId}?rel=0&showinfo=0&autoplay=1`;return this.showPlayerControls||(e+="&controls=0"),this.allowFullScreen||(e+="&fs=0"),this.interfaceLanguage&&(e+="&hl="+this.interfaceLanguage),this.sanitizer.bypassSecurityTrustResourceUrl(e)}get imgSrc(){return this.previewImageSrc?this.previewImageSrc:`https://img.youtube.com/vi/${this.videoId}/sddefault.jpg`}get playButtonAriaLabel(){return this.nxPlayButtonAriaLabel?this.nxPlayButtonAriaLabel:this.altText?this.altText+" - Play Video":"Play Video"}}return e.\u0275fac=function(t){return new(t||e)(c.Nb(l.b),c.Nb(c.h))},e.\u0275cmp=c.Hb({type:e,selectors:[["nx-video"]],inputs:{videoId:["nxVideoId","videoId"],altText:["nxAltText","altText"],nxPlayButtonAriaLabel:"nxPlayButtonAriaLabel",previewImageSrc:["nxPreviewImageSrc","previewImageSrc"],showPlayerControls:["nxShowPlayerControls","showPlayerControls"],allowFullScreen:["nxAllowFullScreen","allowFullScreen"],interfaceLanguage:["nxInterfaceLanguage","interfaceLanguage"]},decls:4,vars:2,consts:[[1,"nx-video"],[1,"nx-video__iframe"],[4,"ngIf"],[1,"nx-video__play-button",3,"click","keydown.enter"],["name","play","size","s",1,"nx-video__high-contrast-icon"],[1,"nx-video__thumbnail",3,"src","alt","click","keydown.enter"],["title","video",1,"nx-video__iframe",3,"src"]],template:function(e,t){1&e&&(c.Tb(0,"div",0),c.Tb(1,"div",1),c.Hc(2,d,4,3,"div",2),c.Hc(3,u,2,2,"div",2),c.Sb(),c.Sb()),2&e&&(c.Bb(2),c.kc("ngIf",!t.showPlayer),c.Bb(1),c.kc("ngIf",t.videoId&&t.showPlayer))},directives:[o.t,s.a],styles:['.nx-video[_ngcontent-%COMP%]{position:relative;padding-bottom:56.25%;overflow:hidden;width:100%;height:auto}.nx-video__iframe[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;border:none}.nx-video__thumbnail[_ngcontent-%COMP%]{position:absolute;cursor:pointer;width:100%;top:50%;left:50%;transform:translate(-50%,-50%);opacity:.7}.nx-video__play-button[_ngcontent-%COMP%]{border:none;background:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB3aWR0aD0nODhweCcgaGVpZ2h0PSc1NnB4JyB2aWV3Qm94PScwIDAgODggNTYnIHZlcnNpb249JzEuMSc+PHRpdGxlPkF0b20gLyBNZWRpYSAvIFlvdVR1YmUgUGxheWVyIC8gW0Fzc2V0c10gLyBQbGF5IEJ1dHRvbjwvdGl0bGU+PGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+PGRlZnM+PHJlY3QgaWQ9J3BhdGgtMScgeD0nMCcgeT0nMCcgd2lkdGg9Jzg4JyBoZWlnaHQ9JzU2JyByeD0nOCcvPjxmaWx0ZXIgeD0nLTQwLjklJyB5PSctNjQuMyUnIHdpZHRoPScxODEuOCUnIGhlaWdodD0nMjI4LjYlJyBmaWx0ZXJVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnIGlkPSdmaWx0ZXItMic+PGZlT2Zmc2V0IGR4PScwJyBkeT0nMCcgaW49J1NvdXJjZUFscGhhJyByZXN1bHQ9J3NoYWRvd09mZnNldE91dGVyMScvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249JzEyJyBpbj0nc2hhZG93T2Zmc2V0T3V0ZXIxJyByZXN1bHQ9J3NoYWRvd0JsdXJPdXRlcjEnLz48ZmVDb2xvck1hdHJpeCB2YWx1ZXM9JzAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC41IDAnIHR5cGU9J21hdHJpeCcgaW49J3NoYWRvd0JsdXJPdXRlcjEnLz48L2ZpbHRlcj48L2RlZnM+PGcgaWQ9J0F0b20tLy1NZWRpYS0vLVlvdVR1YmUtUGxheWVyLS8tW0Fzc2V0c10tLy1QbGF5LUJ1dHRvbicgc3Ryb2tlPSdub25lJyBzdHJva2Utd2lkdGg9JzEnIGZpbGw9J25vbmUnIGZpbGwtcnVsZT0nZXZlbm9kZCc+PGcgaWQ9J0JhY2tncm91bmQnIG9wYWNpdHk9JzAuODAxMjM0MTQ5Jz48dXNlIGZpbGw9J2JsYWNrJyBmaWxsLW9wYWNpdHk9JzEnIGZpbHRlcj0ndXJsKCNmaWx0ZXItMiknIHhsaW5rOmhyZWY9JyNwYXRoLTEnLz48dXNlIGZpbGw9JyM0MTQxNDEnIGZpbGwtcnVsZT0nZXZlbm9kZCcgeGxpbms6aHJlZj0nI3BhdGgtMScvPjwvZz48cGF0aCBkPSdNNTQuMjExMTQ1NiwyOC44OTQ0MjcyIEwzMy40NDcyMTM2LDM5LjI3NjM5MzIgQzMyLjk1MzIzNTEsMzkuNTIzMzgyNSAzMi4zNTI1NjIxLDM5LjMyMzE1ODEgMzIuMTA1NTcyOCwzOC44MjkxNzk2IEMzMi4wMzYxNDUxLDM4LjY5MDMyNDIgMzIsMzguNTM3MjExMSAzMiwzOC4zODE5NjYgTDMyLDE3LjYxODAzNCBDMzIsMTcuMDY1NzQ5MiAzMi40NDc3MTUzLDE2LjYxODAzNCAzMywxNi42MTgwMzQgQzMzLjE1NTI0NTEsMTYuNjE4MDM0IDMzLjMwODM1ODIsMTYuNjU0MTc5MSAzMy40NDcyMTM2LDE2LjcyMzYwNjggTDU0LjIxMTE0NTYsMjcuMTA1NTcyOCBDNTQuNzA1MTI0MSwyNy4zNTI1NjIxIDU0LjkwNTM0ODUsMjcuOTUzMjM1MSA1NC42NTgzNTkyLDI4LjQ0NzIxMzYgQzU0LjU2MTU5NTUsMjguNjQwNzQxIDU0LjQwNDY3MywyOC43OTc2NjM1IDU0LjIxMTE0NTYsMjguODk0NDI3MiBaJyBpZD0nVHJpYW5nbGUnIGZpbGw9JyNGRkZGRkYnLz48L2c+PC9zdmc+") 50% no-repeat;cursor:pointer;position:absolute;width:88px;height:56px;z-index:1;border-radius:4px}.nx-video__play-button[_ngcontent-%COMP%]::-moz-focus-inner{border:0}.nx-video__play-button[_ngcontent-%COMP%]:focus{outline:none}.nx-video__high-contrast-icon[_ngcontent-%COMP%]{display:none}.nx-video__play-button[_ngcontent-%COMP%], .nx-video__play-button[_ngcontent-%COMP%]:before{top:50%;left:50%;transform:translate(-50%,-50%)}@media screen and (-ms-high-contrast:active){.nx-video__play-button[_ngcontent-%COMP%]{background:buttonFace;border:1px solid buttonText;color:buttonText}.nx-video__high-contrast-icon[_ngcontent-%COMP%]{display:inline-flex;vertical-align:middle}}[data-whatinput=keyboard][_nghost-%COMP%]   .nx-video__play-button[_ngcontent-%COMP%]:focus, [data-whatinput=keyboard]   [_nghost-%COMP%]   .nx-video__play-button[_ngcontent-%COMP%]:focus{box-shadow:var(--focus-box-shadow)}@media screen and (-ms-high-contrast:active){[data-whatinput=keyboard][_nghost-%COMP%]   .nx-video__play-button[_ngcontent-%COMP%]:focus, [data-whatinput=keyboard]   [_nghost-%COMP%]   .nx-video__play-button[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 2px background,0 0 0 6px windowText}}'],changeDetection:0}),e})(),h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Hb({type:e,selectors:[["nx-video-example"]],decls:1,vars:0,consts:[["nxVideoId","NZM5-1c9D5o","nxAltText","Allianz Classic Add","nxPlayButtonAriaLabel","An Allianz commercial video"]],template:function(e,t){1&e&&c.Ob(0,"nx-video",0)},directives:[g],encapsulation:2}),e})(),b=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Hb({type:e,selectors:[["nx-video-advanced-example"]],decls:1,vars:1,consts:[["nxVideoId","NZM5-1c9D5o","nxAltText","Allianz Classic Add","nxPlayButtonAriaLabel","An Allianz commercial video","nxInterfaceLanguage","fr",3,"nxAllowFullScreen"]],template:function(e,t){1&e&&c.Ob(0,"nx-video",0),2&e&&c.kc("nxAllowFullScreen",!1)},directives:[g],encapsulation:2}),e})(),M=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Hb({type:e,selectors:[["nx-video-custom-example"]],decls:1,vars:0,consts:[["nxVideoId","NZM5-1c9D5o","nxAltText","Allianz Classic Add","nxPlayButtonAriaLabel","An Allianz commercial video","nxPreviewImageSrc","http://placehold.it/828x600?text=Video"]],template:function(e,t){1&e&&c.Ob(0,"nx-video",0)},directives:[g],encapsulation:2}),e})(),x=(()=>{class e{static components(){return{video:h,"video-advanced":b,"video-custom":M}}}return e.\u0275mod=c.Lb({type:e}),e.\u0275inj=c.Kb({factory:function(t){return new(t||e)},imports:[[i]]}),e})()}}]);