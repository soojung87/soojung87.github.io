(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app~a77eef7d"],{5844:function(e,t,l){"use strict";var i=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{attrs:{id:e.element.uuid}},[l("v-container",[l("v-tooltip",{attrs:{bottom:"",color:"success",disabled:e.isTooltip,"z-index":"10"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,a=t.attrs;return[l("v-card",e._g(e._b({attrs:{outlined:"",color:e.minimaptoolbar?null:e.colorToolbar}},"v-card",a,!1),i),[!e.isDatailView&&e.zoomvalue>e.$setZoominElement?l("v-toolbar",{staticClass:"drag-handle",attrs:{color:e.colorToolbar,dark:"","hide-on-scroll":"",height:"30px"}},[e.minimaptoolbar?l("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var i=t.hover;return[l("v-btn",{attrs:{icon:""},on:{click:e.showCLient}},[l("v-icon",[e._v(e._s(e.iselementOpenClose?i?"mdi-chevron-double-left":"mdi-chevron-double-right":i?"mdi-chevron-double-right":"mdi-chevron-double-left"))])],1)]}}],null,!0)}):e._e(),e.minimaptoolbar?l("v-btn",{attrs:{icon:""},on:{click:function(t){t.stopPropagation(),e.dialogPath=!0}}},[l("v-icon",[e._v(" mdi-routes")])],1):e._e(),l("dialogPathSetting",{attrs:{path:e.element.path},on:{submit:e.submitDialog},model:{value:e.dialogPath,callback:function(t){e.dialogPath=t},expression:"dialogPath"}}),l("v-toolbar-title",[e._v("SomeIP SD Client Event Group Timing Config")]),l("v-spacer"),e.minimaptoolbar?l("v-btn",{attrs:{icon:""},on:{click:e.viewARXML}},[l("v-icon",[e._v(" mdi-format-text")])],1):e._e()],1):e.zoomvalue<e.$setZoominElement?l("v-toolbar",{staticClass:"drag-handle",attrs:{color:e.colorToolbar,dark:"","hide-on-scroll":"",height:"50px"}},[l("v-toolbar-title",[e._v(e._s(e.element.name))])],1):l("v-toolbar",{attrs:{"hide-on-scroll":"",dense:"",flat:""}},[l("v-toolbar-title",[e._v("SomeIP SD Client Event Group Timing Config")])],1),e.iselementOpenClose&&e.zoomvalue>e.$setZoominElement||e.isDatailView?l("v-card-text",[l("v-text-field",{staticClass:"lable-placeholer-color",staticStyle:{height:"45px"},attrs:{label:"name  <"+e.element.path+">",rules:e.rules.name,placeholder:"String",outlined:"",dense:""},on:{input:e.inputClientName},model:{value:e.element.name,callback:function(t){e.$set(e.element,"name",t)},expression:"element.name"}}),l("v-card",{staticClass:"mx-auto",attrs:{outlined:""}},[l("div",{staticClass:"subtitle-2",staticStyle:{height:"20px"}},[e._v(" Request Response Delay ")]),l("v-card-text",[l("v-text-field",{staticClass:"lable-placeholer-color",staticStyle:{height:"45px"},attrs:{label:"Max Value",placeholder:"Time",outlined:"",dense:""},model:{value:e.element.delaymax,callback:function(t){e.$set(e.element,"delaymax",t)},expression:"element.delaymax"}}),l("v-text-field",{staticClass:"lable-placeholer-color",staticStyle:{height:"45px"},attrs:{label:"Min Value",placeholder:"Time",outlined:"",dense:""},model:{value:e.element.delaymin,callback:function(t){e.$set(e.element,"delaymin",t)},expression:"element.delaymin"}})],1)],1),l("v-text-field",{staticClass:"lable-placeholer-color",staticStyle:{height:"45px"},attrs:{label:"Subscribe Eventgroup Retry Delay",placeholder:"Time",outlined:"",dense:""},model:{value:e.element.retrydelay,callback:function(t){e.$set(e.element,"retrydelay",t)},expression:"element.retrydelay"}}),l("v-text-field",{staticClass:"lable-placeholer-color",staticStyle:{height:"45px"},attrs:{label:"Subscribe Eventgroup Retry Max",placeholder:"int",outlined:"",dense:""},model:{value:e.element.retrymax,callback:function(t){e.$set(e.element,"retrymax",t)},expression:"element.retrymax"}}),l("v-text-field",{staticClass:"lable-placeholer-color",staticStyle:{height:"45px"},attrs:{label:"Time To Live",placeholder:"int",outlined:"",dense:""},model:{value:e.element.timetolive,callback:function(t){e.$set(e.element,"timetolive",t)},expression:"element.timetolive"}})],1):e.zoomvalue>e.$setZoominElement||!e.minimaptoolbar?l("v-card-text",[l("v-text-field",{staticClass:"lable-placeholer-color",staticStyle:{height:"45px"},attrs:{label:"name  <"+e.element.path+">",rules:e.rules.name,placeholder:"String",readonly:"",outlined:"",dense:""},model:{value:e.element.name,callback:function(t){e.$set(e.element,"name",t)},expression:"element.name"}})],1):e._e()],1)]}}])},[l("span",[e._v(e._s(e.element.name))])]),l("v-dialog",{attrs:{persistent:"",scrollable:"",width:"800"},model:{value:e.dialogText,callback:function(t){e.dialogText=t},expression:"dialogText"}},[l("v-card",[l("v-card-title",{staticClass:"text-h6 green accent-1"},[e._v(" Edit Text ")]),l("v-card-text",[l("br"),l("v-row",[l("label",{staticStyle:{padding:"10px"}},[e._v("<SHORT-NAME>")]),l("v-text-field",{staticClass:"lable-placeholer-color",staticStyle:{height:"15px"},attrs:{placeholder:"String",dense:""},model:{value:e.editARXML.name,callback:function(t){e.$set(e.editARXML,"name",t)},expression:"editARXML.name"}}),l("label",{staticStyle:{padding:"10px"}},[e._v("</SHORT-NAME>")])],1),l("v-row",[l("label",{staticStyle:{padding:"10px"}},[e._v("<REQUEST-RESPONSE-DELAY>")])]),l("v-row",[l("label",{staticStyle:{padding:"10px","margin-left":"30px"}},[e._v("<MAX-VALUE>")]),l("v-text-field",{staticClass:"lable-placeholer-color",staticStyle:{height:"15px"},attrs:{placeholder:"Time",dense:""},model:{value:e.editARXML.delaymax,callback:function(t){e.$set(e.editARXML,"delaymax",t)},expression:"editARXML.delaymax"}}),l("label",{staticStyle:{padding:"10px"}},[e._v("</MAX-VALUE>")])],1),l("v-row",[l("label",{staticStyle:{padding:"10px","margin-left":"30px"}},[e._v("<MIN-VALUE>")]),l("v-text-field",{staticClass:"lable-placeholer-color",staticStyle:{height:"15px"},attrs:{placeholder:"Time",dense:""},model:{value:e.editARXML.delaymin,callback:function(t){e.$set(e.editARXML,"delaymin",t)},expression:"editARXML.delaymin"}}),l("label",{staticStyle:{padding:"10px"}},[e._v("</MIN-VALUE>")])],1),l("v-row",[l("label",{staticStyle:{padding:"10px"}},[e._v("</REQUEST-RESPONSE-DELAY>")])]),l("v-row",[l("label",{staticStyle:{padding:"10px"}},[e._v("<SUBSCRIBE-EVENTGROUP-RETRY-DELAY>")]),l("v-text-field",{staticClass:"lable-placeholer-color",staticStyle:{height:"15px"},attrs:{placeholder:"Time",dense:""},model:{value:e.editARXML.retrydelay,callback:function(t){e.$set(e.editARXML,"retrydelay",t)},expression:"editARXML.retrydelay"}}),l("label",{staticStyle:{padding:"10px"}},[e._v("</SUBSCRIBE-EVENTGROUP-RETRY-DELAY>")])],1),l("v-row",[l("label",{staticStyle:{padding:"10px"}},[e._v("<SUBSCRIBE-EVENTGROUP-RETRY-MAX>")]),l("v-text-field",{staticClass:"lable-placeholer-color",staticStyle:{height:"15px"},attrs:{placeholder:"Int",dense:""},model:{value:e.editARXML.retrymax,callback:function(t){e.$set(e.editARXML,"retrymax",t)},expression:"editARXML.retrymax"}}),l("label",{staticStyle:{padding:"10px"}},[e._v("</SUBSCRIBE-EVENTGROUP-RETRY-MAX>")])],1),l("v-row",[l("label",{staticStyle:{padding:"10px"}},[e._v("<TIME-TO-LIVE>")]),l("v-text-field",{staticClass:"lable-placeholer-color",staticStyle:{height:"15px"},attrs:{placeholder:"Int",dense:""},model:{value:e.editARXML.timetolive,callback:function(t){e.$set(e.editARXML,"timetolive",t)},expression:"editARXML.timetolive"}}),l("label",{staticStyle:{padding:"10px"}},[e._v("</TIME-TO-LIVE>")])],1)],1),l("v-card-actions",[l("v-spacer"),l("v-btn",{staticClass:"d-inline-flex ml-3 mr-1",attrs:{color:"green darken-1",text:""},on:{click:function(t){return e.saveARXML()}}},[e._v(" Save ")]),l("v-btn",{staticClass:"d-inline-flex ml-3 mr-1",attrs:{color:"green darken-1",text:""},on:{click:function(t){return e.cancelARXML()}}},[e._v(" Cancel ")])],1)],1)],1)],1)],1)},a=[],o=(l("b0c0"),l("26a0")),n={props:["element","isDatailView","minimaptoolbar"],components:{dialogPathSetting:o["a"]},computed:{activeUUID:function(){return this.$store.state.activeUUID},setActiveTitleColor:function(){return this.$store.state.setActiveTitleColor},detailViewUUID:function(){return this.$store.state.detailViewUUID},setting:function(){return this.$store.state.setting}},watch:{setActiveTitleColor:function(e){this.setToolbarColor(e)},detailViewUUID:function(e){this.setToolbarColorDetailView(e)},setting:function(e){this.zoomvalue=e.zoomMain,this.zoomvalue<this.$setZoominTooltip?this.isTooltip=!1:this.isTooltip=this.minimaptoolbar}},created:function(){this.setToolbarColor(this.$store.state.setActiveTitleColor)},data:function(){return{rules:{name:[function(e){return(e||"").length>0}]},dialogPath:!1,colorToolbar:"#6A5ACD",zoomvalue:this.$store.state.setting.zoomMain,isTooltip:this.minimaptoolbar,iselementOpenClose:!0,dialogText:!1,editARXML:{name:"",delaymax:"",delaymin:"",retrydelay:"",retrymax:"",timetolive:""}}},mounted:function(){this.minimaptoolbar&&this.zoomvalue<this.$setZoominElement&&(this.isTooltip=!1)},methods:{submitDialog:function(e){this.element.path=e,this.$store.commit("changePathElement",{uuid:this.element.uuid,path:this.element.path,name:this.element.name}),this.$store.commit("isintoErrorList",{uuid:this.element.uuid,name:this.element.name,path:this.element.path})},setToolbarColor:function(e){this.element.uuid==e?this.colorToolbar="#FF1493":this.colorToolbar="#6A5ACD"},setToolbarColorDetailView:function(e){this.element.uuid==e?this.colorToolbar="#B0E0E6":this.element.uuid==this.$store.state.setActiveTitleColor?this.colorToolbar="#FF1493":this.colorToolbar="#6A5ACD"},showCLient:function(){this.iselementOpenClose=!this.iselementOpenClose},inputClientName:function(){this.$store.commit("editClient",{compo:"Name",uuid:this.element.uuid,name:this.element.name}),this.$store.commit("changePathElement",{uuid:this.element.uuid,path:this.element.path,name:this.element.name}),""!=this.element.name&&this.$store.commit("isintoErrorList",{uuid:this.element.uuid,name:this.element.name,path:this.element.path})},viewARXML:function(){this.editARXML.name=this.element.name,this.editARXML.delaymax=this.element.delaymax,this.editARXML.delaymin=this.element.delaymin,this.editARXML.retrydelay=this.element.retrydelay,this.editARXML.retrymax=this.element.retrymax,this.editARXML.timetolive=this.element.timetolive,this.dialogText=!0},saveARXML:function(){this.element.name!=this.editARXML.name&&(this.$store.commit("editClient",{compo:"Name",uuid:this.element.uuid,name:this.editARXML.name}),this.$store.commit("changePathElement",{uuid:this.element.uuid,path:this.element.path,name:this.editARXML.name}),""!=this.editARXML.name&&this.$store.commit("isintoErrorList",{uuid:this.element.uuid,name:this.editARXML.name,path:this.element.path})),this.element.name=this.editARXML.name,this.element.delaymax=this.editARXML.delaymax,this.element.delaymin=this.editARXML.delaymin,this.element.retrydelay=this.editARXML.retrydelay,this.element.retrymax=this.editARXML.retrymax,this.element.timetolive=this.editARXML.timetolive,this.cancelARXML()},cancelARXML:function(){this.editARXML={name:"",delaymax:"",delaymin:"",retrydelay:"",retrymax:"",timetolive:""},this.dialogText=!1}}},s=n,r=l("2877"),m=l("6544"),d=l.n(m),c=l("8336"),h=l("b0af"),u=l("99d9"),p=l("a523"),v=l("169a"),b=l("ce87"),x=l("132d"),y=l("0fd9"),g=l("2fa4"),f=l("8654"),R=l("71d9"),A=l("2a7f"),T=l("3a2f"),L=Object(r["a"])(s,i,a,!1,null,null,null);t["a"]=L.exports;d()(L,{VBtn:c["a"],VCard:h["a"],VCardActions:u["a"],VCardText:u["b"],VCardTitle:u["c"],VContainer:p["a"],VDialog:v["a"],VHover:b["a"],VIcon:x["a"],VRow:y["a"],VSpacer:g["a"],VTextField:f["a"],VToolbar:R["a"],VToolbarTitle:A["a"],VTooltip:T["a"]})}}]);
//# sourceMappingURL=app~a77eef7d.d84e742b.js.map