var a=Object.defineProperty;var o=(t,i,e)=>i in t?a(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e;var r=(t,i,e)=>o(t,typeof i!="symbol"?i+"":i,e);import{ai as p}from"./app-CnYccAH2.js";import{H as d,a as u}from"./vidstack-Bq6c3Bam-BTCGM4nJ.js";import"./vidstack-DqAw8m9J-CNiKA2gZ.js";class y extends d{constructor(e,s){super(e,s);r(this,"$$PROVIDER_TYPE","AUDIO");r(this,"airPlay");p(()=>{this.airPlay=new u(this.media,s)},this.scope)}get type(){return"audio"}setup(){super.setup(),this.type==="audio"&&this.ctx.notify("provider-setup",this)}get audio(){return this.media}}export{y as AudioProvider};
