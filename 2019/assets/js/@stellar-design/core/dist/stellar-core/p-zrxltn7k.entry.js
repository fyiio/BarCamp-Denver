import{r as t,g as s,h as i,H as e,c as n,d as h,e as o}from"./p-8388b2f5.js";import{f as r,d as l}from"./p-3586bef7.js";import"./p-c428ff15.js";import"./p-c93f133f.js";import"./p-22e0cac7.js";import"./p-3a3a4911.js";import"./p-20de5b5b.js";import{T as a}from"./p-3ddd0228.js";import{A as c}from"./p-e6db9c02.js";import"./p-7021fe2a.js";const d=class{constructor(s){t(this,s),this.context={},this.renderer=()=>null}connectedCallback(){null!=this.subscribe&&(this.unsubscribe=this.subscribe(this.el,"context"))}disconnectedCallback(){null!=this.unsubscribe&&this.unsubscribe()}render(){return this.renderer(Object.assign({},this.context))}get el(){return s(this)}},u=class{constructor(s){t(this,s),this.name="person",this.language="ios-",this.block=!1}componentWillLoad(){this.ariaLabel=this.name.replace("ios-","").replace("md-","").replace(/\-/g," ")}render(){return i("div",{class:"icon-wrap"},i("stellar-icon",{src:this.src,name:this.name,ariaLabel:this.ariaLabel,"aria-label":this.ariaLabel}))}static get style(){return":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block;-webkit-transform-origin:.5em .5em;transform-origin:.5em .5em}:host .icon-wrap{display:-ms-flexbox;display:flex}"}};r(document);const m=class{constructor(s){t(this,s),this.position="center",this.icon=!1,this.iconName="arrow-down",this.label="Dropdown",this.open=!1,this.dark=!1,this.footer=!1}componentWillLoad(){this.footer=0!==this.element.querySelectorAll('[slot="footer"]').length}componentDidLoad(){r(document)}onToggle(){this.open=!this.open}render(){return i(e,{"aria-label":this.label,class:"dropdown",title:this.label},i("div",{class:"toggle"},i("slot",{name:"handle"}),this.icon&&i("stellar-asset",{name:this.iconName,class:"caret"})),i("div",{class:"clipper"},i("div",{class:"list-wrap"},i("ul",{class:"list"},i("slot",null),this.footer&&i("div",{class:"footer"},i("slot",{name:"footer"}))))))}get element(){return s(this)}static get style(){return":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--dropdown-color:var(--theme-base7);--dropdown-hover-color:var(--theme-base8);--dropdown-width:20rem;--border-radius:0.3rem;--clip-from:polygon(0 0,100% 0,100% 0,0 0);--clip-to:polygon(0 0,100% 0,100% 100%,0 100%);--filter:drop-shadow(0px 2px 2px var(--theme-base1));--icon-rotation:180deg;cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-align:center;align-items:center;outline:0;height:100%;color:var(--dropdown-color);-webkit-transition:z-index 0ms linear .2s;transition:z-index 0ms linear .2s}:host([dark]){--filter:drop-shadow(0px 2px 2px var(--theme-base9))}:host .clipper{-webkit-filter:var(--filter);filter:var(--filter);position:absolute;top:calc(100% + .5rem);right:50%;left:calc(50% - (var(--dropdown-width) /2));height:0}:host .clipper,:host .list-wrap{width:var(--dropdown-width);-webkit-transition:all .25s var(--ease) .25s;transition:all .25s var(--ease) .25s}:host .list-wrap{z-index:10;display:initial;-webkit-clip-path:var(--clip-from);clip-path:var(--clip-from);border-radius:var(--border-radius);overflow:hidden;display:block}:host .caret{color:var(--dropdown-color);margin-left:1.5rem;-webkit-transition:all .21s var(--ease);transition:all .21s var(--ease);font-size:2rem}:host(:focus-within) .caret,:host(:hover) .caret{-webkit-transform:scale(1) rotate(var(--icon-rotation));transform:scale(1) rotate(var(--icon-rotation));color:var(--dropdown-hover-color)}:host(:active),:host(:focus-within),:host(:hover){z-index:6;color:var(--dropdown-hover-color)}:host(:active) .clipper,:host(:focus-within) .clipper,:host(:hover) .clipper{height:auto}:host(:active) .toggle:after,:host(:focus-within) .toggle:after,:host(:hover) .toggle:after{margin-top:-2px;background:var(--dropdown-hover-color);height:2px}:host(.toggle:active),:host(.toggle:hover){z-index:6;color:var(--dropdown-hover-color)}:host(.toggle:active:after),:host(.toggle:hover:after){margin-top:-2px;background:var(--dropdown-hover-color);height:2px}:host(:active) .list-wrap,:host(:focus-within) .list-wrap,:host(:hover) .list-wrap{-webkit-clip-path:var(--clip-to);clip-path:var(--clip-to);height:100%}:host .dropdown-placeholder{margin:0;width:3rem;height:3rem}:host .toggle{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;min-height:3rem}:host stellar-asset[slot=handle]{color:var(--dropdown-color)}:host(:focus-within) stellar-asset[slot=handle],:host([focus-within]) stellar-asset[slot=handle],:host stellar-asset[slot=handle]:active,:host stellar-asset[slot=handle]:hover{color:var(--dropdown-color)}:host .toggle span{color:inherit}:host .toggle .hidden{display:inline-block!important}:host .list{margin-top:0;margin-left:0;margin-bottom:0;-webkit-transition:all .11s var(--ease) .25s;transition:all .11s var(--ease) .25s;-webkit-box-shadow:0 0 2px 0 hsla(0,0%,50.2%,.35);box-shadow:0 0 2px 0 hsla(0,0%,50.2%,.35);background:#fff;list-style-type:none;padding:0}:host .list ::slotted(stellar-item){--item-size:3.25rem}:host .list .loader{cursor:wait;display:none}:host .list .separator{position:relative}:host .list .separator:after{content:\"\";display:block;position:absolute;top:calc(50% - .5px);background:var(--gray5);width:100%;height:.1rem}:host .icon{margin-right:1em}:host .icon,:host .thumb{-ms-flex:0 0 2.25em;flex:0 0 2.25em;-ms-flex-order:-1;order:-1;-webkit-transition:all .05s var(--ease) 0s;transition:all .05s var(--ease) 0s}:host .thumb{margin-right:1rem;width:2.25em;height:2.25em}:host .notification{display:inline-block;margin:0 0 0 .8rem;border-radius:50%;background:var(--yellow5);width:.8rem;height:.8rem}:host ::slotted(stellar-item){border:0;overflow:hidden;color:var(--gray9);font-size:1rem}:host .footer{border-top:1px solid var(--theme-base1);margin-top:.5rem}:host .footer ::slotted(*){background:transparent!important}:host .footer:empty{display:none}:host([position=left]){--clip-from:polygon(0% 0,0% 50%,0% 50%,0 50%)}:host([position=left]) .clipper{left:0;right:auto}:host([position=left][icon]) .clipper{left:var(--dropdown-offset,-3rem)}:host([position=left]) .list:after,:host([position=left]) .list:before{right:0;left:4rem}:host([position=right]){--clip-from:polygon(0 0,100% 0,100% 0,0 0);--clip-from:polygon(0 0,100% 0%,100% 0%,50% 0)}:host([position=right]) .clipper{left:auto;right:0}:host([position=right][icon]) .clipper{right:var(--dropdown-offset,3rem)}:host([position=right]) .list:after,:host([position=right]) .list:before{right:3rem;left:auto}:host([dark]) .list{background:var(--gray9)}:host([dark]) ::slotted(stellar-item){color:var(--gray0)}:host([dark]) .footer{border-top-color:var(--black)}"}};let p;a.injectProps(m,["dark"]);const f=(t,s,i,e,n)=>(i="ios"===(i&&i.toLowerCase())?"ios":"md",e&&"ios"===i?t=e.toLowerCase():n&&"md"===i?t=n.toLowerCase():(t||!s||w(s)||(t=s),b(t)&&(t=t.toLowerCase(),/^md-|^ios-|^logo-/.test(t)||(t=i+"-"+t))),b(t)&&""!==t.trim()?""!==t.replace(/[a-z]|-|\d/gi,"")?null:t:null),g=t=>b(t)&&(t=t.trim(),w(t))?t:null,w=t=>t.length>0&&/(\/|\.)/.test(t),b=t=>"string"==typeof t,v=t=>{if(1===t.nodeType){if("script"===t.nodeName.toLowerCase())return!1;for(let s=0;s<t.attributes.length;s++){const i=t.attributes[s].value;if(b(i)&&0===i.toLowerCase().indexOf("on"))return!1}for(let s=0;s<t.childNodes.length;s++)if(!v(t.childNodes[s]))return!1}return!0},L=new Map,E=class{constructor(s){t(this,s),this.mode=T(this),this.isVisible=!1,this.lazy=!1}connectedCallback(){this.waitUntilVisible(this.el,"50px",()=>{this.isVisible=!0,this.loadIcon()})}disconnectedCallback(){this.io&&(this.io.disconnect(),this.io=void 0)}waitUntilVisible(t,s,i){if(this.lazy&&"undefined"!=typeof window&&window.IntersectionObserver){const e=this.io=new window.IntersectionObserver(t=>{t[0].isIntersecting&&(e.disconnect(),this.io=void 0,i())},{rootMargin:s});e.observe(t)}else i()}loadIcon(){if(this.isVisible){const t=(t=>{let s=g(t.src);if(s)return s;if(s=f(t.name,t.icon,t.mode,t.ios,t.md))return(t=>{return(()=>{if(!p){const t=window;t.Ionicons=t.Ionicons||{},p=t.Ionicons.map=t.Ionicons.map||new Map}return p})().get(t)||n(`svg/${t}.svg`)})(s);if(t.icon){if(s=g(t.icon))return s;if(s=g(t.icon[t.mode]))return s}return null})(this);t&&(t=>{let s=L.get(t);return s||(s=fetch(t).then(t=>t.status<=299?t.text():Promise.resolve(null)).then(t=>(t=>{if(t){const s=document.createElement("div");s.innerHTML=t;for(let t=s.childNodes.length-1;t>=0;t--)"svg"!==s.childNodes[t].nodeName.toLowerCase()&&s.removeChild(s.childNodes[t]);const i=s.firstElementChild;if(i&&"svg"===i.nodeName.toLowerCase()&&(i.setAttribute("class","s-ion-icon"),v(i)))return s.innerHTML}return""})(t)),L.set(t,s)),s})(t).then(t=>this.svgContent=t)}if(!this.ariaLabel){const t=f(this.name,this.icon,this.mode,this.ios,this.md);t&&(this.ariaLabel=t.replace("ios-","").replace("md-","").replace(/\-/g," "))}}render(){const t=this.mode||"ios",s=this.flipRtl||this.ariaLabel&&this.ariaLabel.indexOf("arrow")>-1&&!1!==this.flipRtl;return i(e,{role:"img",class:{[t]:!0,[`icon-${this.size}`]:!!this.size,"flip-rtl":!!s&&"rtl"===this.el.ownerDocument.dir}},i("div",this.svgContent?{class:"icon-inner",innerHTML:this.svgContent}:{class:"icon-inner"}))}static get assetsDirs(){return["svg"]}get el(){return s(this)}static get watchers(){return{name:["loadIcon"],src:["loadIcon"],icon:["loadIcon"]}}static get style(){return"stellar-icon{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}stellar-icon .icon-inner,stellar-icon svg{display:block;height:100%;width:100%}stellar-asset.flip-rtl .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}"}},T=t=>h(t)||document.documentElement.getAttribute("mode")||"ios";function C(t){c.injectProps(t,["history","location"])}const y=class{constructor(s){t(this,s),this.type="button",this.href="#",this.wrap=!1,this.fit=!1,this.simple=!1,this.danger=!1,this.dark=!1,this.selected=!1,this.multiple=!1,this.selectable=!1,this.focused=!1,this.selectTitle=!1,this.route=!1,this.current=!1,this.selectionChanged=o(this,"selectionChanged",7),this.mounted=o(this,"mounted",7),this.focusChanged=o(this,"focusChanged",7),this.blurChanged=o(this,"blurChanged",7)}componentWillLoad(){this.select=this.element.closest("stellar-select")}componentDidLoad(){setTimeout(()=>{this.selected&&this.mounted.emit(this)},10)}componentDidUnload(){this.selectionChanged.emit(this)}componentDidUpdate(){this.select&&this.select.update_values()}async data(){return{size:this.size,value:this.value,type:this.type,label:this.label,danger:this.danger,slotted:this.element.innerHTML}}async apply(t){this.size=t.size,this.value=t.value,this.type=t.type,this.label=t.label,this.element.innerHTML=t.slotted,this.selectTitle&&(await l(25),this.element.innerHTML=t.slotted)}async setFocus(){this.focused=!0,this.element.querySelector(".button").focus()}handleClick(t){this.route&&(t.preventDefault(),this.history.push(this.href,{})),this.current||this.selectionChanged.emit(this)}handleFocus(){this.current&&this.focusChanged.emit(this),this.focused=!0}handleBlur(){this.current&&this.blurChanged.emit(this),this.focused=!1}classes(){let t="";return(t+=this.selected?"selected ":"")+(this.multiple?"multiple ":"")}async select_item(t){if(this.selectable)if(t){if(this.selected!==t.selected){var s=new CustomEvent("click");this.element.shadowRoot.querySelector(".button").dispatchEvent(s)}}else s=new CustomEvent("click"),this.element.shadowRoot.querySelector(".button").dispatchEvent(s)}render(){return i(this.type,{class:"button",type:"button",href:this.href,url:this.href,tabindex:"0",value:this.value,title:this.label,onClick:t=>this.handleClick(t),onBlur:()=>this.handleBlur(),onFocus:()=>this.handleFocus()},i("div",{class:"content"},i("slot",null)),(this.selected||this.multiple)&&i("stellar-asset",{class:this.classes(),name:"checkmark",block:!0}))}get element(){return s(this)}static get style(){return":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--item-size:2.356em;--font-size:1.4rem;display:block;width:100%;height:var(--item-size);color:var(--theme-base9);font-family:inherit;visibility:visible!important;font-size:var(--font-size);line-height:1.4;text-align:left;position:relative}:host([fit]){--item-size:auto}:host .button .content{display:grid;grid-template-columns:auto 1fr;grid-gap:1rem;width:100%;text-align:left}:host([wrap]) .button .content{white-space:normal;text-align:left;width:calc(100% - var(--ms5))}:host([danger]) .button{color:var(--red5)}:host a.button,:host button.button,:host stencil-route-link a{text-decoration:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;outline:0;border:0;background:transparent;padding:0 1em;width:100%;height:calc(var(--item-size) - 1px);color:currentColor;font-weight:500;font-size:inherit}:host stencil-route-link{padding:0}:host .button a{color:inherit;background:inherit;text-decoration:none}:host .button ::slotted([block]){grid-column:1/3}:host .button ::slotted(stellar-avatar){width:var(--avatar-size);visibility:visible!important;display:block!important;-ms-flex-item-align:center;align-self:center}:host .button ::slotted(stellar-tag){margin:auto .5rem auto auto}:host .button stellar-asset{margin-left:1rem;background:radial-gradient(ellipse at center,#fff 0,#fff 50%,hsla(0,0%,100%,0) 80%,hsla(0,0%,100%,0) 100%)}:host .button span{margin:auto auto auto 0;width:100%;text-overflow:ellipsis;white-space:nowrap}:host([size=small]) .button{padding:0 1rem;height:3rem}:host stellar-asset.selected{-webkit-animation:fadeInScale .2s var(--ease);animation:fadeInScale .2s var(--ease);font-size:var(--item-size);margin-left:auto!important;background:transparent;color:var(--theme-base5);height:calc(var(--item-size) - 1px)}:host([fit]) stellar-asset.selected{height:75%;font-size:3em;margin-right:.125em}:host(:focus) .selected,:host(:focus-within) .selected,:host(:hover) .selected{color:var(--theme-base7)}:host([fit]) stellar-asset{right:1em}:host(:focus-within),:host(:hover),:host .button:focus,:host .button:hover{background:var(--theme-base0)}:host(.current){background:#fff}:host([danger]) .button:focus,:host([danger]) .button:hover{background:var(--red5);color:#fff}:host([simple]) .button{background:#fff!important}:host(.current) stellar-asset{display:none}:host stellar-asset.multiple{border:1px solid var(--border-color);background:var(--background);border-radius:4px;font-size:calc(var(--item-size) * .55);width:calc(var(--item-size) * .55);height:calc(var(--item-size) * .55);margin:0 0 0 auto;left:-1rem;position:relative;color:transparent}:host stellar-asset.multiple.selected{color:var(--white);background:var(--theme-base5)}:host(.current) .button:focus,:host(.current) .button:hover,:host(.current:focus-within),:host(.current:hover){background:transparent}:host([dark]) .button:focus,:host([dark]) .button:hover,:host([dark]:focus-within),:host([dark]:hover){background:var(--theme-base8)}:host([dark].current) .button:focus,:host([dark].current) .button:hover,:host([dark].current:focus-within),:host([dark].current:hover){background:transparent}\@-webkit-keyframes fadeInScale{0%{-webkit-transform:scale(0);transform:scale(0);opacity:0}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}\@keyframes fadeInScale{0%{-webkit-transform:scale(0);transform:scale(0);opacity:0}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}"}};a.injectProps(y,["dark"]),C&&C(y);export{d as context_consumer,u as stellar_asset,m as stellar_dropdown,E as stellar_icon,y as stellar_item};