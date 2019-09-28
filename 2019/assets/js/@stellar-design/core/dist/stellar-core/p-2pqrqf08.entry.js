import{r as t,e as s,h as i,g as e}from"./p-8388b2f5.js";import{b as r}from"./p-3586bef7.js";import"./p-c428ff15.js";import{p as a}from"./p-c93f133f.js";import"./p-22e0cac7.js";import"./p-3a3a4911.js";import"./p-20de5b5b.js";import{T as n}from"./p-3ddd0228.js";const h=class{constructor(i){t(this,i),this.pages=1,this.type="full",this.current=1,this.padding=2,this.color="gray",this.dark=!1,this.url="#page-{0}",this.__current=1,this.__first=1,this.__previous=!1,this.__next=!1,this.blur=0,this.ease=r({end:10,start:-1,duration:125,tick:t=>{this.blur=t.value},complete:()=>{this.blur=0,this.ease.stop(),this.affixDistance()}}),this.changed=s(this,"changed",7)}__firstPageUrl(){return""}__previousPageUrl(){return""}__nextPageUrl(){return""}__lastPageUrl(){return""}currentObserver(t){this.current=t,this.__previous=t>this.__first&&t-1,this.__next=t<this.pages&&t+1,this.changed.emit(t),"full"===this.type&&this.updateSurroundingPages(),this.ease.start()}componentWillLoad(){this.__first=1,this.__current=this.current,this.__previous=this.current>this.__first&&this.current-1,this.__next=this.current<this.pages&&this.current+1,this.__last=this.pages,this.updateSurroundingPages()}componentDidLoad(){setTimeout(()=>{this.affixDistance()},300)}affixDistance(){const t=this.element.shadowRoot.querySelector(".current-number");t&&a.set({"--indicator-left":`${t.offsetLeft}px`},this.element)}updateSurroundingPages(){const t=Array(this.pages).fill(0).map((t,s)=>{const i=s+1;return{number:i,url:this.formatUrl(i),visible:this.isVisible(i),current:i===this.current}});this.__surroundingPages=t}isVisible(t){var s=this.__current-this.padding,i=this.__current+this.padding;return i>=this.pages&&(i=this.pages),s<1&&(s=1),t>=s&&t<=i}handleChange(t){t.preventDefault(),this.__current=parseInt(t.currentTarget.value)}handleClick(t){t.preventDefault(),this.__current=parseInt(t.currentTarget.dataset.page)}formatUrl(t){return this.url.format(t)}renderFirstPageButton(){const t=this.__current>1?"no":"yes";return i("a",{href:this.__firstPageUrl(),"data-page":this.__first,onClick:t=>this.handleClick(t),class:"icon first","data-hidden":t},i("stellar-asset",{name:"skip-backward",block:!0}))}renderPreviousPageButton(){const t="number"==typeof this.__previous&&this.__current>1?"no":"yes";return i("a",{href:this.__previousPageUrl(),"data-page":this.__previous,onClick:t=>this.handleClick(t),class:"icon previous","data-hidden":t},i("stellar-asset",{name:"rewind",block:!0}))}renderNextPageButton(){const t="number"==typeof this.__next||this.__current<this.pages?"no":"yes";return i("a",{href:this.__nextPageUrl(),"data-page":this.__next,onClick:t=>this.handleClick(t),class:"icon next","data-hidden":t},i("stellar-asset",{name:"fastforward",block:!0}))}renderLastPageButton(){const t=this.__current<this.pages?"no":"yes";return i("a",{href:this.__lastPageUrl(),"data-page":this.__last,onClick:t=>this.handleClick(t),class:"icon last","data-hidden":t},i("stellar-asset",{name:"skip-forward",block:!0}))}renderPagesList(){return this.__surroundingPages.map(t=>i("a",{href:t.url,"data-page":t.number,"data-visible":t.visible,"data-current":t.current,onClick:t=>this.handleClick(t),class:t.number===this.__current||t.number===this.current?"current-number number":"number"},t.number))}renderPagesPreviousEllipsis(){return i("div",{class:"ellipsis previous","data-hidden":this.__current-this.padding>1?"no":"yes"},"…")}renderPagesNextEllipsis(){return i("div",{class:"ellipsis next","data-hidden":this.__current+this.padding+1<this.pages?"no":"yes"},"…")}render(){return"full"===this.type?i("span",{class:"pagination-container"},i("div",{class:"pagination-wrap"},this.renderFirstPageButton(),this.renderPreviousPageButton(),i("div",{class:"pages"},this.renderPagesPreviousEllipsis(),this.renderPagesList(),this.renderPagesNextEllipsis(),i("stellar-blur",{horizontal:this.blur},i("div",{class:"indicator"}))),this.renderNextPageButton(),this.renderLastPageButton())):"compact"===this.type?i("span",{class:"compact-pagination-container"},i("p",null,"Page"),i("stellar-input",{type:"number",size:"small",max:this.pages,value:this.__current,min:1,onChange:t=>{this.handleChange(t)}}),"of ",this.pages):void 0}get element(){return e(this)}static get watchers(){return{__current:["currentObserver"]}}static get style(){return":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block;color:var(--color);font-size:1.6rem;--color:var(--theme-base6);--hover:var(--theme-base9);text-align:center}:host .pagination-container{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host .indicator{position:absolute;top:.2rem;left:var(--indicator-left,50%);-webkit-transition:all .22s var(--ease) 0s;transition:all .22s var(--ease) 0s;width:2.4rem;height:1.6rem;margin-left:-.125em;background:var(--theme-base5);z-index:0;border-radius:100%}:host stellar-blur[horizontal=\"0\"] .indicator{height:2.4rem;top:-.2rem}:host .pagination-wrap{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}:host a{text-decoration:none;border-radius:100%}:host a.icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:2rem;height:2rem;color:var(--color)}:host a.icon:active,:host a.icon:hover{color:var(--hover)}:host a.current-number:active,:host a.current-number:focus,:host a.current-number:hover{color:#fff}:host .ellipsis{width:2rem;height:2rem;margin:0 .25rem}:host .ellipsis,:host .pages{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host .pages{margin:0 .5rem;position:relative;-webkit-transition:all .2s var(--ease) 0s;transition:all .2s var(--ease) 0s}:host .number{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:currentColor;font-weight:700;-webkit-transition:all .2s var(--ease) 0ms;transition:all .2s var(--ease) 0ms;margin:1rem 0;width:0;height:0;opacity:1;z-index:1;padding:0}:host .number,:host .number[data-visible=false]{-webkit-transform:scale(0);transform:scale(0)}:host .number[data-visible]{width:2rem;height:2rem;opacity:1;padding:0;margin:0 .25em;-webkit-transform:scale(1);transform:scale(1)}:host .number:active,:host .number:hover{color:var(--hover)}:host .current-number{margin:1rem;color:#fff}:host .skip-button{margin-left:36px;line-height:0}:host [data-hidden=yes]{display:none!important}:host .compact-pagination-container{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline}:host .compact-pagination-container stellar-input{width:5rem;--padding:0 1rem;margin:0 1rem}:host stellar-blur{position:absolute;width:100%;height:100%}:host([dark]) a.number:active,:host([dark]) a.number:focus,:host([dark]) a.number:hover{color:#fff}:host([dark]) .current-number{color:var(--gray9)!important}:host([dark]) a.icon:active,:host([dark]) a.icon:focus,:host([dark]) a.icon:hover{color:#fff}"}};n.injectProps(h,["dark"]);export{h as stellar_pagination};