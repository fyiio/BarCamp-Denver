'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-1d4780c4.js');
require('./index-9d31ce96.js');
const theme$1 = require('./theme-f448164e.js');

const Label = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        /**
         * Sets the button or link as an outlined button.
         */
        this.dark = false;
    }
    render() {
        // @ts-ignore
        return core.h("label", { for: this.for }, core.h("slot", null));
    }
    static get style() { return ":host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--margin:var(--ms-2);line-height:1.3;color:var(--gray9);font-size:var(--ms0);display:block;font-weight:600;letter-spacing:.05em;margin-bottom:var(--margin);cursor:pointer}:host([underneath]){margin-top:var(--margin);margin-bottom:0;color:var(--gray5);font-weight:600;text-transform:none}:host([size=tiny]){font-size:var(--ms-2)}:host([size=small]){font-size:var(--ms-1)}:host([size=medium]){font-size:var(--ms1)}:host([size=large]){font-size:var(--ms2)}:host label{all:inherit}:host([dark]){color:var(--gray0)}:host([underneath][dark]){color:var(--gray5)}"; }
};
theme$1.Tunnel.injectProps(Label, ['dark']);

exports.stellar_label = Label;
