import{r as t,g as e,e as i}from"./p-8388b2f5.js";import{e as n}from"./p-3586bef7.js";import{c as r,a as s}from"./p-c428ff15.js";import"./p-c93f133f.js";import"./p-22e0cac7.js";import"./p-3a3a4911.js";import{a}from"./p-293de399.js";import{d as o}from"./p-7a6a8a00.js";class h{constructor(t,e,i){this.loadBuffer=function(t,e){var i=new XMLHttpRequest;i.open("GET",t,!0),i.responseType="arraybuffer";var n=this;i.onload=function(){n.context.decodeAudioData(i.response,(function(i){i?(n.bufferList[e]=i,++n.loadCount==n.urlList.length&&n.onload(n.bufferList)):alert("error decoding file data: "+t)}),(function(t){console.error("decodeAudioData error",t)}))},i.onerror=function(){alert("BufferLoader: XHR error")},i.send()},this.load=function(){for(var t=0;t<this.urlList.length;++t)this.loadBuffer(this.urlList[t],t)},this.context=t,this.urlList=e,this.onload=i,this.bufferList=new Array,this.loadCount=0}}var u=r((function(t){!function(e){function i(){if(i.prototype._singleton)throw new Error("WebMidi is a singleton, it cannot be instantiated directly.");(i.prototype._singleton=this)._inputs=[],this._outputs=[],this._userHandlers={},this._stateChangeQueue=[],this._processingStateChange=!1,this._midiInterfaceEvents=["connected","disconnected"],this._nrpnBuffer=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],this._nrpnEventsEnabled=!0,this._nrpnTypes=["entry","increment","decrement"],this._notes=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],this._semitones={C:0,D:2,E:4,F:5,G:7,A:9,B:11},Object.defineProperties(this,{MIDI_SYSTEM_MESSAGES:{value:{sysex:240,timecode:241,songposition:242,songselect:243,tuningrequest:246,sysexend:247,clock:248,start:250,continue:251,stop:252,activesensing:254,reset:255,midimessage:0,unknownsystemmessage:-1},writable:!1,enumerable:!0,configurable:!1},MIDI_CHANNEL_MESSAGES:{value:{noteoff:8,noteon:9,keyaftertouch:10,controlchange:11,channelmode:11,nrpn:11,programchange:12,channelaftertouch:13,pitchbend:14},writable:!1,enumerable:!0,configurable:!1},MIDI_REGISTERED_PARAMETER:{value:{pitchbendrange:[0,0],channelfinetuning:[0,1],channelcoarsetuning:[0,2],tuningprogram:[0,3],tuningbank:[0,4],modulationrange:[0,5],azimuthangle:[61,0],elevationangle:[61,1],gain:[61,2],distanceratio:[61,3],maximumdistance:[61,4],maximumdistancegain:[61,5],referencedistanceratio:[61,6],panspreadangle:[61,7],rollangle:[61,8]},writable:!1,enumerable:!0,configurable:!1},MIDI_CONTROL_CHANGE_MESSAGES:{value:{bankselectcoarse:0,modulationwheelcoarse:1,breathcontrollercoarse:2,footcontrollercoarse:4,portamentotimecoarse:5,dataentrycoarse:6,volumecoarse:7,balancecoarse:8,pancoarse:10,expressioncoarse:11,effectcontrol1coarse:12,effectcontrol2coarse:13,generalpurposeslider1:16,generalpurposeslider2:17,generalpurposeslider3:18,generalpurposeslider4:19,bankselectfine:32,modulationwheelfine:33,breathcontrollerfine:34,footcontrollerfine:36,portamentotimefine:37,dataentryfine:38,volumefine:39,balancefine:40,panfine:42,expressionfine:43,effectcontrol1fine:44,effectcontrol2fine:45,holdpedal:64,portamento:65,sustenutopedal:66,softpedal:67,legatopedal:68,hold2pedal:69,soundvariation:70,resonance:71,soundreleasetime:72,soundattacktime:73,brightness:74,soundcontrol6:75,soundcontrol7:76,soundcontrol8:77,soundcontrol9:78,soundcontrol10:79,generalpurposebutton1:80,generalpurposebutton2:81,generalpurposebutton3:82,generalpurposebutton4:83,reverblevel:91,tremololevel:92,choruslevel:93,celestelevel:94,phaserlevel:95,databuttonincrement:96,databuttondecrement:97,nonregisteredparametercoarse:98,nonregisteredparameterfine:99,registeredparametercoarse:100,registeredparameterfine:101},writable:!1,enumerable:!0,configurable:!1},MIDI_NRPN_MESSAGES:{value:{entrymsb:6,entrylsb:38,increment:96,decrement:97,paramlsb:98,parammsb:99,nullactiveparameter:127},writable:!1,enumerable:!0,configurable:!1},MIDI_CHANNEL_MODE_MESSAGES:{value:{allsoundoff:120,resetallcontrollers:121,localcontrol:122,allnotesoff:123,omnimodeoff:124,omnimodeon:125,monomodeon:126,polymodeon:127},writable:!1,enumerable:!0,configurable:!1},octaveOffset:{value:0,writable:!0,enumerable:!0,configurable:!1}}),Object.defineProperties(this,{supported:{enumerable:!0,get:function(){return"requestMIDIAccess"in navigator}},enabled:{enumerable:!0,get:function(){return void 0!==this.interface}.bind(this)},inputs:{enumerable:!0,get:function(){return this._inputs}.bind(this)},outputs:{enumerable:!0,get:function(){return this._outputs}.bind(this)},sysexEnabled:{enumerable:!0,get:function(){return!(!this.interface||!this.interface.sysexEnabled)}.bind(this)},nrpnEventsEnabled:{enumerable:!0,get:function(){return!!this._nrpnEventsEnabled}.bind(this),set:function(t){return this._nrpnEventsEnabled=t,this._nrpnEventsEnabled}},nrpnTypes:{enumerable:!0,get:function(){return this._nrpnTypes}.bind(this)},time:{enumerable:!0,get:function(){return performance.now()}}})}var n=new i;function r(t){var e=this;this._userHandlers={channel:{},system:{}},this._midiInput=t,Object.defineProperties(this,{connection:{enumerable:!0,get:function(){return e._midiInput.connection}},id:{enumerable:!0,get:function(){return e._midiInput.id}},manufacturer:{enumerable:!0,get:function(){return e._midiInput.manufacturer}},name:{enumerable:!0,get:function(){return e._midiInput.name}},state:{enumerable:!0,get:function(){return e._midiInput.state}},type:{enumerable:!0,get:function(){return e._midiInput.type}}}),this._initializeUserHandlers(),this._midiInput.onmidimessage=this._onMidiMessage.bind(this)}function s(t){var e=this;this._midiOutput=t,Object.defineProperties(this,{connection:{enumerable:!0,get:function(){return e._midiOutput.connection}},id:{enumerable:!0,get:function(){return e._midiOutput.id}},manufacturer:{enumerable:!0,get:function(){return e._midiOutput.manufacturer}},name:{enumerable:!0,get:function(){return e._midiOutput.name}},state:{enumerable:!0,get:function(){return e._midiOutput.state}},type:{enumerable:!0,get:function(){return e._midiOutput.type}}})}i.prototype.enable=function(t,e){this.enabled||(this.supported?navigator.requestMIDIAccess({sysex:e}).then(function(e){var i,n=[],r=[];this.interface=e,this._resetInterfaceUserHandlers(),this.interface.onstatechange=function(t){n.push(t)};for(var s=e.inputs.values(),a=s.next();a&&!a.done;a=s.next())r.push(a.value.open());for(var o=e.outputs.values(),h=o.next();h&&!h.done;h=o.next())r.push(h.value.open());function u(){clearTimeout(i),this._updateInputsAndOutputs(),this.interface.onstatechange=this._onInterfaceStateChange.bind(this),"function"==typeof t&&t.call(this),n.forEach(function(t){this._onInterfaceStateChange(t)}.bind(this))}i=setTimeout(u.bind(this),200),Promise&&Promise.all(r).catch((function(){})).then(u.bind(this))}.bind(this),function(e){"function"==typeof t&&t.call(this,e)}.bind(this)):"function"==typeof t&&t(new Error("The Web MIDI API is not supported by your browser.")))},i.prototype.disable=function(){if(!this.supported)throw new Error("The Web MIDI API is not supported by your browser.");this.interface&&(this.interface.onstatechange=void 0),this.interface=void 0,this._inputs=[],this._outputs=[],this._nrpnEventsEnabled=!0,this._resetInterfaceUserHandlers()},i.prototype.addListener=function(t,e){if(!this.enabled)throw new Error("WebMidi must be enabled before adding event listeners.");if("function"!=typeof e)throw new TypeError("The 'listener' parameter must be a function.");if(!(0<=this._midiInterfaceEvents.indexOf(t)))throw new TypeError("The specified event type is not supported.");return this._userHandlers[t].push(e),this},i.prototype.hasListener=function(t,e){if(!this.enabled)throw new Error("WebMidi must be enabled before checking event listeners.");if("function"!=typeof e)throw new TypeError("The 'listener' parameter must be a function.");if(!(0<=this._midiInterfaceEvents.indexOf(t)))throw new TypeError("The specified event type is not supported.");for(var i=0;i<this._userHandlers[t].length;i++)if(this._userHandlers[t][i]===e)return!0;return!1},i.prototype.removeListener=function(t,e){if(!this.enabled)throw new Error("WebMidi must be enabled before removing event listeners.");if(void 0!==e&&"function"!=typeof e)throw new TypeError("The 'listener' parameter must be a function.");if(0<=this._midiInterfaceEvents.indexOf(t))if(e)for(var i=0;i<this._userHandlers[t].length;i++)this._userHandlers[t][i]===e&&this._userHandlers[t].splice(i,1);else this._userHandlers[t]=[];else{if(void 0!==t)throw new TypeError("The specified event type is not supported.");this._resetInterfaceUserHandlers()}return this},i.prototype.toMIDIChannels=function(t){var e;if("all"===t||void 0===t)e=["all"];else{if("none"===t)return[];e=Array.isArray(t)?t:[t]}return-1<e.indexOf("all")&&(e=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]),e.map((function(t){return parseInt(t)})).filter((function(t){return 1<=t&&t<=16}))},i.prototype.getInputById=function(t){if(!this.enabled)throw new Error("WebMidi is not enabled.");t=String(t);for(var e=0;e<this.inputs.length;e++)if(this.inputs[e].id===t)return this.inputs[e];return!1},i.prototype.getOutputById=function(t){if(!this.enabled)throw new Error("WebMidi is not enabled.");t=String(t);for(var e=0;e<this.outputs.length;e++)if(this.outputs[e].id===t)return this.outputs[e];return!1},i.prototype.getInputByName=function(t){if(!this.enabled)throw new Error("WebMidi is not enabled.");for(var e=0;e<this.inputs.length;e++)if(~this.inputs[e].name.indexOf(t))return this.inputs[e];return!1},i.prototype.getOctave=function(t){if(null!=t&&0<=t&&t<=127)return Math.floor(Math.floor(t)/12-1)+Math.floor(n.octaveOffset)},i.prototype.getOutputByName=function(t){if(!this.enabled)throw new Error("WebMidi is not enabled.");for(var e=0;e<this.outputs.length;e++)if(~this.outputs[e].name.indexOf(t))return this.outputs[e];return!1},i.prototype.guessNoteNumber=function(t){var e=!1;if(t&&t.toFixed&&0<=t&&t<=127?e=Math.round(t):0<=parseInt(t)&&parseInt(t)<=127?e=parseInt(t):("string"==typeof t||t instanceof String)&&(e=this.noteNameToNumber(t)),!1===e)throw new Error("Invalid input value ("+t+").");return e},i.prototype.noteNameToNumber=function(t){"string"!=typeof t&&(t="");var e=t.match(/([CDEFGAB])(#{0,2}|b{0,2})(-?\d+)/i);if(!e)throw new RangeError("Invalid note name.");var i=n._semitones[e[1].toUpperCase()],r=12*(parseInt(e[3])+1-Math.floor(n.octaveOffset))+i;if(-1<e[2].toLowerCase().indexOf("b")?r-=e[2].length:-1<e[2].toLowerCase().indexOf("#")&&(r+=e[2].length),r<0||127<r)throw new RangeError("Invalid note name or note outside valid range.");return r},i.prototype._updateInputsAndOutputs=function(){this._updateInputs(),this._updateOutputs()},i.prototype._updateInputs=function(){for(var t=0;t<this._inputs.length;t++){for(var e=!0,i=this.interface.inputs.values(),n=i.next();n&&!n.done;n=i.next())if(this._inputs[t]._midiInput===n.value){e=!1;break}e&&this._inputs.splice(t,1)}this.interface&&this.interface.inputs.forEach(function(t){for(var e=!0,i=0;i<this._inputs.length;i++)this._inputs[i]._midiInput===t&&(e=!1);e&&this._inputs.push(new r(t))}.bind(this))},i.prototype._updateOutputs=function(){for(var t=0;t<this._outputs.length;t++){for(var e=!0,i=this.interface.outputs.values(),n=i.next();n&&!n.done;n=i.next())if(this._outputs[t]._midiOutput===n.value){e=!1;break}e&&this._outputs.splice(t,1)}this.interface&&this.interface.outputs.forEach(function(t){for(var e=!0,i=0;i<this._outputs.length;i++)this._outputs[i]._midiOutput===t&&(e=!1);e&&this._outputs.push(new s(t))}.bind(this))},i.prototype._onInterfaceStateChange=function(t){this._updateInputsAndOutputs();var e={timestamp:t.timeStamp,type:t.port.state};this.interface&&"connected"===t.port.state?"output"===t.port.type?e.port=this.getOutputById(t.port.id):"input"===t.port.type&&(e.port=this.getInputById(t.port.id)):e.port={connection:"closed",id:t.port.id,manufacturer:t.port.manufacturer,name:t.port.name,state:t.port.state,type:t.port.type},this._userHandlers[t.port.state].forEach((function(t){t(e)}))},i.prototype._resetInterfaceUserHandlers=function(){for(var t=0;t<this._midiInterfaceEvents.length;t++)this._userHandlers[this._midiInterfaceEvents[t]]=[]},r.prototype.on=r.prototype.addListener=function(t,e,i){var r=this;if(void 0===e&&(e="all"),Array.isArray(e)||(e=[e]),e.forEach((function(t){if("all"!==t&&!(1<=t&&t<=16))throw new RangeError("The 'channel' parameter is invalid.")})),"function"!=typeof i)throw new TypeError("The 'listener' parameter must be a function.");if(void 0!==n.MIDI_SYSTEM_MESSAGES[t])this._userHandlers.system[t]||(this._userHandlers.system[t]=[]),this._userHandlers.system[t].push(i);else{if(void 0===n.MIDI_CHANNEL_MESSAGES[t])throw new TypeError("The specified event type is not supported.");if(-1<e.indexOf("all")){e=[];for(var s=1;s<=16;s++)e.push(s)}this._userHandlers.channel[t]||(this._userHandlers.channel[t]=[]),e.forEach((function(e){r._userHandlers.channel[t][e]||(r._userHandlers.channel[t][e]=[]),r._userHandlers.channel[t][e].push(i)}))}return this},r.prototype.hasListener=function(t,e,i){var r=this;if("function"!=typeof i)throw new TypeError("The 'listener' parameter must be a function.");if(void 0===e&&(e="all"),e.constructor!==Array&&(e=[e]),void 0!==n.MIDI_SYSTEM_MESSAGES[t]){for(var s=0;s<this._userHandlers.system[t].length;s++)if(this._userHandlers.system[t][s]===i)return!0}else if(void 0!==n.MIDI_CHANNEL_MESSAGES[t]){if(-1<e.indexOf("all")){e=[];for(var a=1;a<=16;a++)e.push(a)}return!!this._userHandlers.channel[t]&&e.every((function(e){var n=r._userHandlers.channel[t][e];return n&&-1<n.indexOf(i)}))}return!1},r.prototype.removeListener=function(t,e,i){var r=this;if(void 0!==i&&"function"!=typeof i)throw new TypeError("The 'listener' parameter must be a function.");if(void 0===e&&(e="all"),e.constructor!==Array&&(e=[e]),void 0!==n.MIDI_SYSTEM_MESSAGES[t])if(void 0===i)this._userHandlers.system[t]=[];else for(var s=0;s<this._userHandlers.system[t].length;s++)this._userHandlers.system[t][s]===i&&this._userHandlers.system[t].splice(s,1);else if(void 0!==n.MIDI_CHANNEL_MESSAGES[t]){if(-1<e.indexOf("all")){e=[];for(var a=1;a<=16;a++)e.push(a)}if(!this._userHandlers.channel[t])return this;e.forEach((function(e){var n=r._userHandlers.channel[t][e];if(n)if(void 0===i)r._userHandlers.channel[t][e]=[];else for(var s=0;s<n.length;s++)n[s]===i&&n.splice(s,1)}))}else{if(void 0!==t)throw new TypeError("The specified event type is not supported.");this._initializeUserHandlers()}return this},r.prototype._initializeUserHandlers=function(){for(var t in n.MIDI_CHANNEL_MESSAGES)n.MIDI_CHANNEL_MESSAGES.hasOwnProperty(t)&&(this._userHandlers.channel[t]={});for(var e in n.MIDI_SYSTEM_MESSAGES)n.MIDI_SYSTEM_MESSAGES.hasOwnProperty(e)&&(this._userHandlers.system[e]=[])},r.prototype._onMidiMessage=function(t){if(0<this._userHandlers.system.midimessage.length){var e={target:this,data:t.data,timestamp:t.timeStamp,type:"midimessage"};this._userHandlers.system.midimessage.forEach((function(t){t(e)}))}t.data[0]<240?(this._parseChannelEvent(t),this._parseNrpnEvent(t)):t.data[0]<=255&&this._parseSystemEvent(t)},r.prototype._parseNrpnEvent=function(t){var e,i,r=15&t.data[0];if(1<t.data.length&&(e=t.data[1],i=2<t.data.length?t.data[2]:void 0),n.nrpnEventsEnabled&&t.data[0]>>4===n.MIDI_CHANNEL_MESSAGES.controlchange&&(e>=n.MIDI_NRPN_MESSAGES.increment&&e<=n.MIDI_NRPN_MESSAGES.parammsb||e===n.MIDI_NRPN_MESSAGES.entrymsb||e===n.MIDI_NRPN_MESSAGES.entrylsb)){var s={target:this,type:"controlchange",data:t.data,timestamp:t.timeStamp,channel:1+r,controller:{number:e,name:this.getCcNameByNumber(e)},value:i};if(s.controller.number===n.MIDI_NRPN_MESSAGES.parammsb&&s.value!=n.MIDI_NRPN_MESSAGES.nullactiveparameter)n._nrpnBuffer[r]=[],n._nrpnBuffer[r][0]=s;else if(1===n._nrpnBuffer[r].length&&s.controller.number===n.MIDI_NRPN_MESSAGES.paramlsb)n._nrpnBuffer[r].push(s);else if(2!==n._nrpnBuffer[r].length||s.controller.number!==n.MIDI_NRPN_MESSAGES.increment&&s.controller.number!==n.MIDI_NRPN_MESSAGES.decrement&&s.controller.number!==n.MIDI_NRPN_MESSAGES.entrymsb)if(3===n._nrpnBuffer[r].length&&n._nrpnBuffer[r][2].number===n.MIDI_NRPN_MESSAGES.entrymsb&&s.controller.number===n.MIDI_NRPN_MESSAGES.entrylsb)n._nrpnBuffer[r].push(s);else if(3<=n._nrpnBuffer[r].length&&n._nrpnBuffer[r].length<=4&&s.controller.number===n.MIDI_NRPN_MESSAGES.parammsb&&s.value===n.MIDI_NRPN_MESSAGES.nullactiveparameter)n._nrpnBuffer[r].push(s);else if(4<=n._nrpnBuffer[r].length&&n._nrpnBuffer[r].length<=5&&s.controller.number===n.MIDI_NRPN_MESSAGES.paramlsb&&s.value===n.MIDI_NRPN_MESSAGES.nullactiveparameter){n._nrpnBuffer[r].push(s);var a=[];n._nrpnBuffer[r].forEach((function(t){a.push(t.data)}));var o=n._nrpnBuffer[r][0].value<<7|n._nrpnBuffer[r][1].value,h=n._nrpnBuffer[r][2].value;6===n._nrpnBuffer[r].length&&(h=n._nrpnBuffer[r][2].value<<7|n._nrpnBuffer[r][3].value);var u="";switch(n._nrpnBuffer[r][2].controller.number){case n.MIDI_NRPN_MESSAGES.entrymsb:u=n._nrpnTypes[0];break;case n.MIDI_NRPN_MESSAGES.increment:u=n._nrpnTypes[1];break;case n.MIDI_NRPN_MESSAGES.decrement:u=n._nrpnTypes[2];break;default:throw new Error("The NPRN type was unidentifiable.")}var c={timestamp:s.timestamp,channel:s.channel,type:"nrpn",data:a,controller:{number:o,type:u,name:"Non-Registered Parameter "+o},value:h};n._nrpnBuffer[r]=[],this._userHandlers.channel[c.type]&&this._userHandlers.channel[c.type][c.channel]&&this._userHandlers.channel[c.type][c.channel].forEach((function(t){t(c)}))}else n._nrpnBuffer[r]=[];else n._nrpnBuffer[r].push(s)}},r.prototype._parseChannelEvent=function(t){var e,i,r=t.data[0]>>4,s=1+(15&t.data[0]);1<t.data.length&&(e=t.data[1],i=2<t.data.length?t.data[2]:void 0);var a={target:this,data:t.data,timestamp:t.timeStamp,channel:s};r===n.MIDI_CHANNEL_MESSAGES.noteoff||r===n.MIDI_CHANNEL_MESSAGES.noteon&&0===i?(a.type="noteoff",a.note={number:e,name:n._notes[e%12],octave:n.getOctave(e)},a.velocity=i/127,a.rawVelocity=i):r===n.MIDI_CHANNEL_MESSAGES.noteon?(a.type="noteon",a.note={number:e,name:n._notes[e%12],octave:n.getOctave(e)},a.velocity=i/127,a.rawVelocity=i):r===n.MIDI_CHANNEL_MESSAGES.keyaftertouch?(a.type="keyaftertouch",a.note={number:e,name:n._notes[e%12],octave:n.getOctave(e)},a.value=i/127):r===n.MIDI_CHANNEL_MESSAGES.controlchange&&0<=e&&e<=119?(a.type="controlchange",a.controller={number:e,name:this.getCcNameByNumber(e)},a.value=i):r===n.MIDI_CHANNEL_MESSAGES.channelmode&&120<=e&&e<=127?(a.type="channelmode",a.controller={number:e,name:this.getChannelModeByNumber(e)},a.value=i):r===n.MIDI_CHANNEL_MESSAGES.programchange?(a.type="programchange",a.value=e):r===n.MIDI_CHANNEL_MESSAGES.channelaftertouch?(a.type="channelaftertouch",a.value=e/127):r===n.MIDI_CHANNEL_MESSAGES.pitchbend?(a.type="pitchbend",a.value=((i<<7)+e-8192)/8192):a.type="unknownchannelmessage",this._userHandlers.channel[a.type]&&this._userHandlers.channel[a.type][s]&&this._userHandlers.channel[a.type][s].forEach((function(t){t(a)}))},r.prototype.getCcNameByNumber=function(t){if(!(0<=(t=Math.floor(t))&&t<=119))throw new RangeError("The control change number must be between 0 and 119.");for(var e in n.MIDI_CONTROL_CHANGE_MESSAGES)if(n.MIDI_CONTROL_CHANGE_MESSAGES.hasOwnProperty(e)&&t===n.MIDI_CONTROL_CHANGE_MESSAGES[e])return e},r.prototype.getChannelModeByNumber=function(t){if(!(120<=(t=Math.floor(t))&&status<=127))throw new RangeError("The control change number must be between 120 and 127.");for(var e in n.MIDI_CHANNEL_MODE_MESSAGES)if(n.MIDI_CHANNEL_MODE_MESSAGES.hasOwnProperty(e)&&t===n.MIDI_CHANNEL_MODE_MESSAGES[e])return e},r.prototype._parseSystemEvent=function(t){var e=t.data[0],i={target:this,data:t.data,timestamp:t.timeStamp};e===n.MIDI_SYSTEM_MESSAGES.sysex?i.type="sysex":e===n.MIDI_SYSTEM_MESSAGES.timecode?i.type="timecode":e===n.MIDI_SYSTEM_MESSAGES.songposition?i.type="songposition":e===n.MIDI_SYSTEM_MESSAGES.songselect?(i.type="songselect",i.song=t.data[1]):i.type=e===n.MIDI_SYSTEM_MESSAGES.tuningrequest?"tuningrequest":e===n.MIDI_SYSTEM_MESSAGES.clock?"clock":e===n.MIDI_SYSTEM_MESSAGES.start?"start":e===n.MIDI_SYSTEM_MESSAGES.continue?"continue":e===n.MIDI_SYSTEM_MESSAGES.stop?"stop":e===n.MIDI_SYSTEM_MESSAGES.activesensing?"activesensing":e===n.MIDI_SYSTEM_MESSAGES.reset?"reset":"unknownsystemmessage",this._userHandlers.system[i.type]&&this._userHandlers.system[i.type].forEach((function(t){t(i)}))},s.prototype.send=function(t,e,i){if(!(128<=t&&t<=255))throw new RangeError("The status byte must be an integer between 128 (0x80) and 255 (0xFF).");void 0===e&&(e=[]),Array.isArray(e)||(e=[e]);var n=[];return e.forEach((function(t){var e=Math.floor(t);if(!(0<=e&&e<=255))throw new RangeError("Data bytes must be integers between 0 (0x00) and 255 (0xFF).");n.push(e)})),this._midiOutput.send([t].concat(n),parseFloat(i)||0),this},s.prototype.sendSysex=function(t,e,i){if(!n.sysexEnabled)throw new Error("Sysex message support must first be activated.");return i=i||{},t=[].concat(t),e.forEach((function(t){if(t<0||127<t)throw new RangeError("The data bytes of a sysex message must be integers between 0 (0x00) and 127 (0x7F).")})),e=t.concat(e,n.MIDI_SYSTEM_MESSAGES.sysexend),this.send(n.MIDI_SYSTEM_MESSAGES.sysex,e,this._parseTimeParameter(i.time)),this},s.prototype.sendTimecodeQuarterFrame=function(t,e){return this.send(n.MIDI_SYSTEM_MESSAGES.timecode,t,this._parseTimeParameter((e=e||{}).time)),this},s.prototype.sendSongPosition=function(t,e){e=e||{};var i=(t=Math.floor(t)||0)>>7&127;return this.send(n.MIDI_SYSTEM_MESSAGES.songposition,[i,127&t],this._parseTimeParameter(e.time)),this},s.prototype.sendSongSelect=function(t,e){if(e=e||{},!(0<=(t=Math.floor(t))&&t<=127))throw new RangeError("The song number must be between 0 and 127.");return this.send(n.MIDI_SYSTEM_MESSAGES.songselect,[t],this._parseTimeParameter(e.time)),this},s.prototype.sendTuningRequest=function(t){return this.send(n.MIDI_SYSTEM_MESSAGES.tuningrequest,void 0,this._parseTimeParameter((t=t||{}).time)),this},s.prototype.sendClock=function(t){return this.send(n.MIDI_SYSTEM_MESSAGES.clock,void 0,this._parseTimeParameter((t=t||{}).time)),this},s.prototype.sendStart=function(t){return this.send(n.MIDI_SYSTEM_MESSAGES.start,void 0,this._parseTimeParameter((t=t||{}).time)),this},s.prototype.sendContinue=function(t){return this.send(n.MIDI_SYSTEM_MESSAGES.continue,void 0,this._parseTimeParameter((t=t||{}).time)),this},s.prototype.sendStop=function(t){return this.send(n.MIDI_SYSTEM_MESSAGES.stop,void 0,this._parseTimeParameter((t=t||{}).time)),this},s.prototype.sendActiveSensing=function(t){return this.send(n.MIDI_SYSTEM_MESSAGES.activesensing,[],this._parseTimeParameter((t=t||{}).time)),this},s.prototype.sendReset=function(t){return this.send(n.MIDI_SYSTEM_MESSAGES.reset,void 0,this._parseTimeParameter((t=t||{}).time)),this},s.prototype.stopNote=function(t,e,i){if("all"===t)return this.sendChannelMode("allnotesoff",0,e,i);var r=64;return(i=i||{}).rawVelocity?!isNaN(i.velocity)&&0<=i.velocity&&i.velocity<=127&&(r=i.velocity):!isNaN(i.velocity)&&0<=i.velocity&&i.velocity<=1&&(r=127*i.velocity),this._convertNoteToArray(t).forEach(function(t){n.toMIDIChannels(e).forEach(function(e){this.send(e-1+(n.MIDI_CHANNEL_MESSAGES.noteoff<<4),[t,Math.round(r)],this._parseTimeParameter(i.time))}.bind(this))}.bind(this)),this},s.prototype.playNote=function(t,e,i){var r,s=64;if((i=i||{}).rawVelocity?!isNaN(i.velocity)&&0<=i.velocity&&i.velocity<=127&&(s=i.velocity):!isNaN(i.velocity)&&0<=i.velocity&&i.velocity<=1&&(s=127*i.velocity),r=this._parseTimeParameter(i.time),this._convertNoteToArray(t).forEach(function(t){n.toMIDIChannels(e).forEach(function(e){this.send(e-1+(n.MIDI_CHANNEL_MESSAGES.noteon<<4),[t,Math.round(s)],r)}.bind(this))}.bind(this)),!isNaN(i.duration)){i.duration<=0&&(i.duration=0);var a=64;i.rawVelocity?!isNaN(i.release)&&0<=i.release&&i.release<=127&&(a=i.release):!isNaN(i.release)&&0<=i.release&&i.release<=1&&(a=127*i.release),this._convertNoteToArray(t).forEach(function(t){n.toMIDIChannels(e).forEach(function(e){this.send(e-1+(n.MIDI_CHANNEL_MESSAGES.noteoff<<4),[t,Math.round(a)],(r||n.time)+i.duration)}.bind(this))}.bind(this))}return this},s.prototype.sendKeyAftertouch=function(t,e,i,r){var s=this;if(r=r||{},e<1||16<e)throw new RangeError("The channel must be between 1 and 16.");(isNaN(i)||i<0||1<i)&&(i=.5);var a=Math.round(127*i);return this._convertNoteToArray(t).forEach((function(t){n.toMIDIChannels(e).forEach((function(e){s.send(e-1+(n.MIDI_CHANNEL_MESSAGES.keyaftertouch<<4),[t,a],s._parseTimeParameter(r.time))}))})),this},s.prototype.sendControlChange=function(t,e,i,r){if(r=r||{},"string"==typeof t){if(void 0===(t=n.MIDI_CONTROL_CHANGE_MESSAGES[t]))throw new TypeError("Invalid controller name.")}else if(!(0<=(t=Math.floor(t))&&t<=119))throw new RangeError("Controller numbers must be between 0 and 119.");if(!(0<=(e=Math.floor(e)||0)&&e<=127))throw new RangeError("Controller value must be between 0 and 127.");return n.toMIDIChannels(i).forEach(function(i){this.send(i-1+(n.MIDI_CHANNEL_MESSAGES.controlchange<<4),[t,e],this._parseTimeParameter(r.time))}.bind(this)),this},s.prototype._selectRegisteredParameter=function(t,e,i){var r=this;if(t[0]=Math.floor(t[0]),!(0<=t[0]&&t[0]<=127))throw new RangeError("The control65 value must be between 0 and 127");if(t[1]=Math.floor(t[1]),!(0<=t[1]&&t[1]<=127))throw new RangeError("The control64 value must be between 0 and 127");return n.toMIDIChannels(e).forEach((function(){r.sendControlChange(101,t[0],e,{time:i}),r.sendControlChange(100,t[1],e,{time:i})})),this},s.prototype._selectNonRegisteredParameter=function(t,e,i){var r=this;if(t[0]=Math.floor(t[0]),!(0<=t[0]&&t[0]<=127))throw new RangeError("The control63 value must be between 0 and 127");if(t[1]=Math.floor(t[1]),!(0<=t[1]&&t[1]<=127))throw new RangeError("The control62 value must be between 0 and 127");return n.toMIDIChannels(e).forEach((function(){r.sendControlChange(99,t[0],e,{time:i}),r.sendControlChange(98,t[1],e,{time:i})})),this},s.prototype._setCurrentRegisteredParameter=function(t,e,i){var r=this;if((t=[].concat(t))[0]=Math.floor(t[0]),!(0<=t[0]&&t[0]<=127))throw new RangeError("The msb value must be between 0 and 127");return n.toMIDIChannels(e).forEach((function(){r.sendControlChange(6,t[0],e,{time:i})})),t[1]=Math.floor(t[1]),0<=t[1]&&t[1]<=127&&n.toMIDIChannels(e).forEach((function(){r.sendControlChange(38,t[1],e,{time:i})})),this},s.prototype._deselectRegisteredParameter=function(t,e){var i=this;return n.toMIDIChannels(t).forEach((function(){i.sendControlChange(101,127,t,{time:e}),i.sendControlChange(100,127,t,{time:e})})),this},s.prototype.setRegisteredParameter=function(t,e,i,r){var s=this;if(r=r||{},!Array.isArray(t)){if(!n.MIDI_REGISTERED_PARAMETER[t])throw new Error("The specified parameter is not available.");t=n.MIDI_REGISTERED_PARAMETER[t]}return n.toMIDIChannels(i).forEach((function(){s._selectRegisteredParameter(t,i,r.time),s._setCurrentRegisteredParameter(e,i,r.time),s._deselectRegisteredParameter(i,r.time)})),this},s.prototype.setNonRegisteredParameter=function(t,e,i,r){var s=this;if(r=r||{},!(0<=t[0]&&t[0]<=127&&0<=t[1]&&t[1]<=127))throw new Error("Position 0 and 1 of the 2-position parameter array must both be between 0 and 127.");return e=[].concat(e),n.toMIDIChannels(i).forEach((function(){s._selectNonRegisteredParameter(t,i,r.time),s._setCurrentRegisteredParameter(e,i,r.time),s._deselectRegisteredParameter(i,r.time)})),this},s.prototype.incrementRegisteredParameter=function(t,e,i){var r=this;if(i=i||{},!Array.isArray(t)){if(!n.MIDI_REGISTERED_PARAMETER[t])throw new Error("The specified parameter is not available.");t=n.MIDI_REGISTERED_PARAMETER[t]}return n.toMIDIChannels(e).forEach((function(){r._selectRegisteredParameter(t,e,i.time),r.sendControlChange(96,0,e,{time:i.time}),r._deselectRegisteredParameter(e,i.time)})),this},s.prototype.decrementRegisteredParameter=function(t,e,i){if(i=i||{},!Array.isArray(t)){if(!n.MIDI_REGISTERED_PARAMETER[t])throw new TypeError("The specified parameter is not available.");t=n.MIDI_REGISTERED_PARAMETER[t]}return n.toMIDIChannels(e).forEach(function(){this._selectRegisteredParameter(t,e,i.time),this.sendControlChange(97,0,e,{time:i.time}),this._deselectRegisteredParameter(e,i.time)}.bind(this)),this},s.prototype.setPitchBendRange=function(t,e,i,r){var s=this;if(r=r||{},!(0<=(t=Math.floor(t)||0)&&t<=127))throw new RangeError("The semitones value must be between 0 and 127");if(!(0<=(e=Math.floor(e)||0)&&e<=127))throw new RangeError("The cents value must be between 0 and 127");return n.toMIDIChannels(i).forEach((function(){s.setRegisteredParameter("pitchbendrange",[t,e],i,{time:r.time})})),this},s.prototype.setModulationRange=function(t,e,i,r){var s=this;if(r=r||{},!(0<=(t=Math.floor(t)||0)&&t<=127))throw new RangeError("The semitones value must be between 0 and 127");if(!(0<=(e=Math.floor(e)||0)&&e<=127))throw new RangeError("The cents value must be between 0 and 127");return n.toMIDIChannels(i).forEach((function(){s.setRegisteredParameter("modulationrange",[t,e],i,{time:r.time})})),this},s.prototype.setMasterTuning=function(t,e,i){var r=this;if(i=i||{},(t=parseFloat(t)||0)<=-65||64<=t)throw new RangeError("The value must be a decimal number larger than -65 and smaller than 64.");var s=Math.floor(t)+64,a=t-Math.floor(t),o=(a=Math.round((a+1)/2*16383))>>7&127,h=127&a;return n.toMIDIChannels(e).forEach((function(){r.setRegisteredParameter("channelcoarsetuning",s,e,{time:i.time}),r.setRegisteredParameter("channelfinetuning",[o,h],e,{time:i.time})})),this},s.prototype.setTuningProgram=function(t,e,i){var r=this;if(i=i||{},!(0<=(t=Math.floor(t))&&t<=127))throw new RangeError("The program value must be between 0 and 127");return n.toMIDIChannels(e).forEach((function(){r.setRegisteredParameter("tuningprogram",t,e,{time:i.time})})),this},s.prototype.setTuningBank=function(t,e,i){var r=this;if(i=i||{},!(0<=(t=Math.floor(t)||0)&&t<=127))throw new RangeError("The bank value must be between 0 and 127");return n.toMIDIChannels(e).forEach((function(){r.setRegisteredParameter("tuningbank",t,e,{time:i.time})})),this},s.prototype.sendChannelMode=function(t,e,i,r){if(r=r||{},"string"==typeof t){if(!(t=n.MIDI_CHANNEL_MODE_MESSAGES[t]))throw new TypeError("Invalid channel mode message name.")}else if(!(120<=(t=Math.floor(t))&&t<=127))throw new RangeError("Channel mode numerical identifiers must be between 120 and 127.");if((e=Math.floor(e)||0)<0||127<e)throw new RangeError("Value must be an integer between 0 and 127.");return n.toMIDIChannels(i).forEach(function(i){this.send(i-1+(n.MIDI_CHANNEL_MESSAGES.channelmode<<4),[t,e],this._parseTimeParameter(r.time))}.bind(this)),this},s.prototype.sendProgramChange=function(t,e,i){var r=this;if(i=i||{},t=Math.floor(t),isNaN(t)||t<0||127<t)throw new RangeError("Program numbers must be between 0 and 127.");return n.toMIDIChannels(e).forEach((function(e){r.send(e-1+(n.MIDI_CHANNEL_MESSAGES.programchange<<4),[t],r._parseTimeParameter(i.time))})),this},s.prototype.sendChannelAftertouch=function(t,e,i){var r=this;i=i||{},t=parseFloat(t),(isNaN(t)||t<0||1<t)&&(t=.5);var s=Math.round(127*t);return n.toMIDIChannels(e).forEach((function(t){r.send(t-1+(n.MIDI_CHANNEL_MESSAGES.channelaftertouch<<4),[s],r._parseTimeParameter(i.time))})),this},s.prototype.sendPitchBend=function(t,e,i){var r=this;if(i=i||{},isNaN(t)||t<-1||1<t)throw new RangeError("Pitch bend value must be between -1 and 1.");var s=Math.round((t+1)/2*16383),a=s>>7&127,o=127&s;return n.toMIDIChannels(e).forEach((function(t){r.send(t-1+(n.MIDI_CHANNEL_MESSAGES.pitchbend<<4),[o,a],r._parseTimeParameter(i.time))})),this},s.prototype._parseTimeParameter=function(t){var e,i=parseFloat(t);return"string"==typeof t&&"+"===t.substring(0,1)?i&&0<i&&(e=n.time+i):i>n.time&&(e=i),e},s.prototype._convertNoteToArray=function(t){var e=[];return Array.isArray(t)||(t=[t]),t.forEach((function(t){e.push(n.guessNoteNumber(t))})),e},t.exports?t.exports=n:e.WebMidi||(e.WebMidi=n)}(s)}));const c=class{constructor(e){t(this,e),this.name="web_audio",this.prepared=!1,this.midi=!1,this.sources=[],this.keys={}}async source(t){return 0===this.sources.length&&await this.connect_the_world(),this.sources[t]}async get_context(){return this.context}async is_prepared(){return this.prepared}componentDidLoad(){this.connect_debugger()}async connect_the_world(){return this.connect_context(),this.gain=this.context.createGain(),await this.connect_visualizers(),await this.connect_sources(),await this.connect_midi(),this.prepared=!0,await o(500),!0}connect_context(){this.context=new(window.AudioContext||window.webkitAudioContext),this.log("Connected to this.context")}async connect_sources(){await this.build_sources()}async build_sources(){this.log("Building sources"),this._sources=Array.from(this.element.querySelectorAll("web-audio-source")),this.externalFiles=[],await n(this._sources,async(t,e)=>{this.log(`(${e}) Preparing ${t.name}`),this.sources[t.name]=t;let i=new h(this.context,[t.src],async e=>{await this.cache_sources(e,t)});await i.load()})}async cache_sources(t,e){await n(t,async t=>{this.log(`Caching ${e.name}`),this.midi&&(this.log(`Assigned ${e.name} to midi key ${e.midikey}, channel ${e.midichannel}`),null==this.keys[e.midichannel]&&(this.keys[e.midichannel]=[]),this.keys[e.midichannel][e.midikey]=e),this._currentSource=e,await this._currentSource.assignBuffer(this,t),this.log(`Source ${e.name} is ready`)}),this._currentSource=null}async connect_visualizers(){await o(20),this.visualizers=Array.from(document.querySelectorAll(`web-audio-visualizer[for="${this.name}"]`)),this.visualizers?(this.log("Attaching visualizers"),await n(this.visualizers,async(t,e)=>{t=0===e?await t.connect(this.context,this.context.destination):await t.connect(this.context,this.previousVisualizer.analyser),this.previousVisualizer=t})):this.log(`No visualizers for ${this.name}`),this.visualizers.length>=1?await this.gain.connect(this.previousVisualizer.analyser):await this.gain.connect(this.context.destination)}connect_debugger(){this.debugger=document.querySelector(`web-audio-debugger[for="${this.name}"]`),this.log("Connected debugger")}log(t){this.debugger&&this.debugger.addHistory(t)}connect_midi(){this.midi&&u.enable(t=>{this.log(t?"Midi couldn't be enabled."+t:"Midi is enabled");var e=u.inputs[0];e&&(e.addListener("noteon","all",t=>{this.log(`KEY: Channel: ${t.channel}, Note: ${t.note.number}, Name: ${t.note.name}, Oct: ${t.note.octave}`),this.keys[t.channel]&&(this.keys[t.channel][t.note.number].gain().value=t.data[2]/175,this.keys[t.channel][t.note.number].play())}),e.addListener("pitchbend","all",t=>{this.log(`PITCH: Channel: ${t.channel}, Value: ${t.value}`)}),e.addListener("controlchange","all",t=>{this.log(`CTRL: Channel: ${t.channel}, controller: ${t.controller.number}, Value: ${t.value}`);var e=new CustomEvent("midi-controller-update",{detail:t});document.dispatchEvent(e)}),this.log("Listeners added for notes, pitch bend, and controllers."))})}get element(){return e(this)}},f=class{constructor(e){t(this,e),this.inert=!1,this.midikey=0,this.midichannel=1,this.prepared=!1,this.status="paused",this.effectsvolume=100,this.effects=[],this.duration=0,this.startTime=0,this.pausedTime=0,this.elapsedTime=0,this.playing=!1,this.update=i(this,"update",7)}async getBuffer(){return this.buffer}async webAudio(){return this.webAudioWrapper}async gain(t="wet"){return"wet"===t?this.wetGain:"dry"===t?this.dryGain:"channel"===t?this.channelGain:void 0}async getDuration(){return this.duration}currentTime(){let t=0;return this.pausedTime?t=this.pausedTime:this.startTime&&(t=this.context.currentTime-this.startTime),t>=this.duration&&(t=this.duration),t}async prepare(){!this.inert&&this.context&&(this.source=this.context.createBufferSource(),this.source.buffer=this.buffer,this.wetGain?(this.wetGain.gain.value=this.effectsvolume/100,this.dryGain.gain.value=Math.abs((this.effectsvolume-100)/100)):this.dryGain.gain.value=1,this.wetGain&&this.source.connect(this.wetGain),this.source.connect(this.dryGain),this.duration=this.source.buffer.duration,this.prepared=!0)}async play(){if(this.inert)throw"Cannot play inert media.";await this.prepare(),this.source&&(this.source.start(0,this.pausedTime),this.startTime=this.context.currentTime-this.pausedTime,this.pausedTime=0,this.playing=!0,this.tick(),a(()=>{this.tick()}))}async skipTo(t){await this.stop(),this.pausedTime=t/1e3,await this.play()}async pause(){this.elapsedTime=this.context.currentTime-this.startTime,await this.stop(),this.pausedTime=this.elapsedTime,this.playing=!1}async toggle(){this.playing?this.pause():this.play()}async stop(){this.source&&(this.source.disconnect(),this.source.stop()),this.source=null,this.pausedTime=0,this.startTime=0,this.playing=!1}tick(){this.update.emit({time:this.currentTime(),duration:this.duration}),this.source&&a(()=>{this.tick()})}async assignBuffer(t,e){if(this.webAudioWrapper=t.element,this.context=t.context,this.buffer=e,!this.inert){if(this.masterGain=t.gain,this.channelGain=this.context.createGain(),await this.prepareEffects(),Object.keys(this.effects).length>0){this.wetGain=this.context.createGain();let t="";Object.keys(this.effects).reverse().forEach((e,i)=>{0===i?this.wetGain.connect(this.effects[e]):this.effects[t].connect(this.effects[e]),t=e}),this.effects[t].connect(this.channelGain)}this.dryGain=this.context.createGain(),this.dryGain.connect(this.channelGain),this.channelGain.connect(this.masterGain)}}async prepareEffects(){if("WEB-AUDIO"!==this.element.parentElement.nodeName){let t=this.element.parentElement;for(;"WEB-AUDIO"!==t.nodeName;)this.effects[t.getAttribute("name")]=await t.attachEffect(this.context,this.element),t=t.parentElement}}get element(){return e(this)}};export{c as web_audio,f as web_audio_source};