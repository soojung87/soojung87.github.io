(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app~06ab7a58"],{"37d0":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:e.element.uuid}},[i("v-container",[i("v-tooltip",{attrs:{bottom:"",color:"success",disabled:e.isTooltip,"z-index":"10"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,o=t.attrs;return[i("v-card",e._g(e._b({attrs:{outlined:"",color:e.minimaptoolbar?null:e.colorToolbar}},"v-card",o,!1),a),[!e.isDatailView&&e.zoomvalue>e.$setZoominElement?i("v-toolbar",{staticClass:"drag-handle",attrs:{color:e.colorToolbar,dark:"","hide-on-scroll":"",height:"30px"}},[e.minimaptoolbar?i("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var a=t.hover;return[i("v-btn",{attrs:{icon:""},on:{click:e.showSWBaseType}},[i("v-icon",[e._v(e._s(e.iselementOpenClose?a?"mdi-chevron-double-left":"mdi-chevron-double-right":a?"mdi-chevron-double-right":"mdi-chevron-double-left"))])],1)]}}],null,!0)}):e._e(),e.minimaptoolbar?i("v-btn",{attrs:{icon:""},on:{click:function(t){t.stopPropagation(),e.dialogPath=!0}}},[i("v-icon",[e._v(" mdi-routes")])],1):e._e(),i("dialogPathSetting",{attrs:{path:e.element.path},on:{submit:e.submitDialog},model:{value:e.dialogPath,callback:function(t){e.dialogPath=t},expression:"dialogPath"}}),i("v-toolbar-title",[e._v("SW Base Type")]),i("v-spacer"),e.minimaptoolbar?i("v-btn",{attrs:{icon:""},on:{click:e.viewARXML}},[i("v-icon",[e._v(" mdi-format-text")])],1):e._e()],1):e.zoomvalue<e.$setZoominElement?i("v-toolbar",{staticClass:"drag-handle",attrs:{color:e.colorToolbar,dark:"","hide-on-scroll":"",height:"50px"}},[i("v-toolbar-title",[e._v(e._s(e.element.name))])],1):i("v-toolbar",{attrs:{"hide-on-scroll":"",dense:"",flat:""}},[i("v-toolbar-title",[e._v("SW Base Type")])],1),e.iselementOpenClose&&e.zoomvalue>e.$setZoominElement?i("v-card-text",[i("v-text-field",{staticClass:"lable-placeholer-color",staticStyle:{height:"45px"},attrs:{label:"name  <"+e.element.path+">",rules:e.rules.name,placeholder:"String",outlined:"",dense:""},on:{input:e.inputSWBaseTypeName},model:{value:e.element.name,callback:function(t){e.$set(e.element,"name",t)},expression:"element.name"}}),i("v-text-field",{staticClass:"lable-placeholer-color",staticStyle:{height:"45px"},attrs:{label:"Category",placeholder:"String",outlined:"",dense:""},model:{value:e.element.category,callback:function(t){e.$set(e.element,"category",t)},expression:"element.category"}}),i("v-text-field",{staticClass:"lable-placeholer-color",staticStyle:{height:"45px"},attrs:{label:"Base Type Encoding",placeholder:"String",outlined:"",dense:""},model:{value:e.element.encoding,callback:function(t){e.$set(e.element,"encoding",t)},expression:"element.encoding"}})],1):e.zoomvalue>e.$setZoominElement||!e.minimaptoolbar?i("v-card-text",[i("v-text-field",{staticClass:"lable-placeholer-color",staticStyle:{height:"45px"},attrs:{label:"name  <"+e.element.path+">",rules:e.rules.name,placeholder:"String",readonly:"",outlined:"",dense:""},model:{value:e.element.name,callback:function(t){e.$set(e.element,"name",t)},expression:"element.name"}})],1):e._e()],1)]}}])},[i("span",[e._v(e._s(e.element.name))])]),i("v-dialog",{attrs:{persistent:"",scrollable:"",width:"800"},model:{value:e.dialogText,callback:function(t){e.dialogText=t},expression:"dialogText"}},[i("v-card",[i("v-card-title",{staticClass:"text-h6 green accent-1"},[e._v(" Edit Text ")]),i("v-card-text",[i("br"),i("v-row",[i("label",{staticStyle:{padding:"10px"}},[e._v("<SHORT-NAME>")]),i("v-text-field",{staticClass:"lable-placeholer-color",staticStyle:{height:"15px"},attrs:{placeholder:"String",dense:""},model:{value:e.editARXML.name,callback:function(t){e.$set(e.editARXML,"name",t)},expression:"editARXML.name"}}),i("label",{staticStyle:{padding:"10px"}},[e._v("</SHORT-NAME>")])],1),i("v-row",[i("label",{staticStyle:{padding:"10px"}},[e._v("<CATEGORY>")]),i("v-text-field",{staticClass:"lable-placeholer-color",staticStyle:{height:"15px"},attrs:{placeholder:"String",dense:""},model:{value:e.editARXML.category,callback:function(t){e.$set(e.editARXML,"category",t)},expression:"editARXML.category"}}),i("label",{staticStyle:{padding:"10px"}},[e._v("</CATEGORY>")])],1),i("v-row",[i("label",{staticStyle:{padding:"10px"}},[e._v("<BASE-TYPE-ENCODING>")]),i("v-text-field",{staticClass:"lable-placeholer-color",staticStyle:{height:"15px"},attrs:{placeholder:"String",dense:""},model:{value:e.editARXML.encoding,callback:function(t){e.$set(e.editARXML,"encoding",t)},expression:"editARXML.encoding"}}),i("label",{staticStyle:{padding:"10px"}},[e._v("</BASE-TYPE-ENCODING>")])],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{staticClass:"d-inline-flex ml-3 mr-1",attrs:{color:"green darken-1",text:""},on:{click:function(t){return e.saveARXML()}}},[e._v(" Save ")]),i("v-btn",{staticClass:"d-inline-flex ml-3 mr-1",attrs:{color:"green darken-1",text:""},on:{click:function(t){return e.cancelARXML()}}},[e._v(" Cancel ")])],1)],1)],1)],1)],1)},o=[],l=(i("b0c0"),i("26a0")),n=i("56d7"),s={props:["element","isDatailView","minimaptoolbar"],components:{dialogPathSetting:l["a"]},computed:{activeUUID:function(){return this.$store.state.activeUUID},detailViewUUID:function(){return this.$store.state.detailViewUUID},setting:function(){return this.$store.state.setting}},watch:{activeUUID:function(e){this.setToolbarColor(e)},detailViewUUID:function(e){this.setToolbarColorDetailView(e)},setting:function(e){this.zoomvalue=e.zoomMain,this.zoomvalue<this.$setZoominTooltip?this.isTooltip=!1:this.isTooltip=this.minimaptoolbar}},created:function(){this.setToolbarColor(this.$store.state.activeUUID)},data:function(){return{rules:{name:[function(e){return(e||"").length>0}]},dialogPath:!1,colorToolbar:"#6A5ACD",zoomvalue:this.$store.state.setting.zoomMain,isTooltip:this.minimaptoolbar,iselementOpenClose:!0,dialogText:!1,editARXML:{name:"",category:"",encoding:""}}},mounted:function(){this.minimaptoolbar&&this.zoomvalue<this.$setZoominElement&&(this.isTooltip=!1)},methods:{submitDialog:function(e){this.element.path=e,this.$store.commit("changePathElement",{uuid:this.element.uuid,path:this.element.path,name:this.element.name}),this.$store.commit("isintoErrorList",{uuid:this.element.uuid,name:this.element.name,path:this.element.path})},setToolbarColor:function(e){this.element.uuid==e?this.colorToolbar="#FF1493":this.colorToolbar="#6A5ACD"},setToolbarColorDetailView:function(e){this.element.uuid==e?this.colorToolbar="#B0E0E6":this.element.uuid==this.$store.state.activeUUID?this.colorToolbar="#FF1493":this.colorToolbar="#6A5ACD"},showSWBaseType:function(){this.iselementOpenClose=!this.iselementOpenClose,this.$nextTick((function(){n["EventBus"].$emit("drawLine")}))},inputSWBaseTypeName:function(){this.$store.commit("editSWBaseType",{compo:"Name",uuid:this.element.uuid,name:this.element.name}),this.$store.commit("changePathElement",{uuid:this.element.uuid,path:this.element.path,name:this.element.name}),""!=this.element.name&&this.$store.commit("isintoErrorList",{uuid:this.element.uuid,name:this.element.name,path:this.element.path})},viewARXML:function(){this.editARXML.name=this.element.name,this.editARXML.category=this.element.category,this.editARXML.encoding=this.element.encoding,this.dialogText=!0},saveARXML:function(){this.element.name!=this.editARXML.name&&(this.$store.commit("editSWBaseType",{compo:"Name",uuid:this.element.uuid,name:this.editARXML.name}),this.$store.commit("changePathElement",{uuid:this.element.uuid,path:this.element.path,name:this.editARXML.name}),""!=this.editARXML.name&&this.$store.commit("isintoErrorList",{uuid:this.element.uuid,name:this.editARXML.name,path:this.element.path})),this.element.name=this.editARXML.name,this.element.category=this.editARXML.category,this.element.encoding=this.editARXML.encoding,this.cancelARXML()},cancelARXML:function(){this.editARXML={name:"",category:"",encoding:""},this.dialogText=!1}}},r=s,c=i("2877"),m=i("6544"),d=i.n(m),h=i("8336"),u=i("b0af"),p=i("99d9"),v=i("a523"),g=i("169a"),b=i("ce87"),f=i("132d"),x=i("0fd9"),T=i("2fa4"),A=i("8654"),y=i("71d9"),S=i("2a7f"),C=i("3a2f"),R=Object(c["a"])(r,a,o,!1,null,null,null);t["a"]=R.exports;d()(R,{VBtn:h["a"],VCard:u["a"],VCardActions:p["a"],VCardText:p["b"],VCardTitle:p["c"],VContainer:v["a"],VDialog:g["a"],VHover:b["a"],VIcon:f["a"],VRow:x["a"],VSpacer:T["a"],VTextField:A["a"],VToolbar:y["a"],VToolbarTitle:S["a"],VTooltip:C["a"]})}}]);
//# sourceMappingURL=app~06ab7a58.4e4d6d74.js.map