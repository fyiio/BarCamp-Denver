System.register(["./p-94e3dad1.system.js","./p-752b9e3e.system.js","./p-fdba8b89.system.js","./p-c4dffc26.system.js","./p-69f4f799.system.js"],(function(t){"use strict";var e,r,n,s,o;return{setters:[function(t){e=t.r;r=t.h;n=t.g},function(){},function(t){s=t.p},function(){},function(t){o=t.T}],execute:function(){var i=t("stellar_tag",function(){function t(t){e(this,t);this.pill=false;this.outline=false;this.dark=false;this.color="cyan5";this.textColor="white"}t.prototype.componentWillLoad=function(){s.set({"--background-color":"var(--"+this.color+")","--color":"var(--"+this.textColor+")"},this.element)};t.prototype.render=function(){return r("stellar-label",{class:"tag",size:this.size},r("slot",null))};Object.defineProperty(t.prototype,"element",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":host{display:inline-block;--color:var(--color,var(--white));--background-color:var(--background-color,var(--blue5))}:host([color*=\"0\"]),:host([color*=\"1\"]),:host([color*=\"2\"]),:host([color*=\"3\"]),:host([color*=\"4\"]){--color:var(--black)!important}:host .tag{display:block;border:2px solid var(--background-color);background-color:var(--background-color);padding:0 var(--ms-6);text-transform:uppercase;white-space:nowrap;color:var(--color);font-weight:700;overflow:hidden;text-overflow:ellipsis;margin:0}:host([size=tiny]) .tag{padding:0 var(--ms-8)}:host([size=small]) .tag{padding:0 var(--ms-7)}:host([size=medium]) .tag{padding:0 var(--ms-5)}:host([size=large]) .tag{padding:0 var(--ms-4)}:host([pill]) .tag{border-radius:5rem}:host([dark][color*=\"5\"]),:host([dark][color*=\"6\"]),:host([dark][color*=\"7\"]),:host([dark][color*=\"8\"]),:host([dark][color*=\"9\"]){--color:var(--black)!important}"},enumerable:true,configurable:true});return t}());o.injectProps(i,["dark"])}}}));