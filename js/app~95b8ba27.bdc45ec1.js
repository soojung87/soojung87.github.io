(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app~95b8ba27"],{"1c0e":function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:e.element.uuid}},[i("v-container",[i("v-tooltip",{attrs:{bottom:"",color:"success",disabled:e.isTooltip,"z-index":"10"},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,n=t.attrs;return[i("v-card",e._g(e._b({attrs:{outlined:"",color:e.minimaptoolbar?null:e.colorToolbar}},"v-card",n,!1),s),[e.isDatailView?i("v-toolbar",{attrs:{"hide-on-scroll":"",dense:"",flat:""}},[i("v-toolbar-title",[e._v("SomeIP Service Instance To Machine Mapping")])],1):i("v-toolbar",{staticClass:"drag-handle",attrs:{color:e.colorToolbar,dark:"","hide-on-scroll":"",height:"30px"}},[e.minimaptoolbar?i("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var s=t.hover;return[i("v-btn",{attrs:{icon:""},on:{click:e.showSomeIPtoMachine}},[i("v-icon",[e._v(e._s(e.iselementOpenClose?s?"mdi-chevron-double-left":"mdi-chevron-double-right":s?"mdi-chevron-double-right":"mdi-chevron-double-left"))])],1)]}}],null,!0)}):e._e(),e.minimaptoolbar?i("v-btn",{attrs:{icon:""},on:{click:function(t){t.stopPropagation(),e.dialogPath=!0}}},[i("v-icon",[e._v(" mdi-routes")])],1):e._e(),i("dialogPathSetting",{attrs:{path:e.element.path},on:{submit:e.submitDialog},model:{value:e.dialogPath,callback:function(t){e.dialogPath=t},expression:"dialogPath"}}),i("v-toolbar-title",[e._v("SomeIP Service Instance To Machine Mapping")]),i("v-spacer"),e.minimaptoolbar?i("v-btn",{attrs:{icon:""},on:{click:e.viewARXML}},[i("v-icon",[e._v(" mdi-format-text")])],1):e._e()],1),e.iselementOpenClose?i("v-card-text",[i("v-text-field",{staticClass:"lable-placeholer-color",staticStyle:{height:"45px"},attrs:{label:"name  <"+e.element.path+">",rules:e.rules.name,placeholder:"String",outlined:"",dense:""},on:{input:e.inputSomeIPtoMachineName,focus:function(t){return e.clickOtherFields()}},model:{value:e.element.name,callback:function(t){e.$set(e.element,"name",t)},expression:"element.name"}}),i("v-text-field",{staticClass:"lable-placeholer-color",staticStyle:{height:"50px"},attrs:{readonly:"",clearable:"",label:"Communication Connector Reference",outlined:"",dense:""},on:{focus:function(t){return e.clickOtherFields()},"click:clear":function(t){return e.clearCCRef()}},scopedSlots:e._u([{key:"prepend",fn:function(){return[i("v-icon",{attrs:{color:e.refCommunication?"red":""},on:{click:function(t){return e.setCCRefSelect()}}},[e._v("mdi-magnify")])]},proxy:!0},{key:"append",fn:function(){return[i("v-menu",{scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,n=t.attrs;return[i("v-btn",e._g(e._b({attrs:{color:"deep-purple accent-4",icon:""},on:{click:function(t){return e.setCCRefList()}}},"v-btn",n,!1),s),[i("v-icon",{attrs:{small:""}},[e._v("mdi-menu-down-outline")])],1)]}}],null,!0)},[i("v-list",[e._l(e.selCommuniConnect,(function(t,s){return i("v-list-item",{key:s,attrs:{link:""},on:{click:function(i){return e.setCCRef(t)}}},[i("v-list-item-title",[e._v(e._s(t.name))])],1)})),0==e.selCommuniConnect.length?i("v-list-item",[i("v-list-item-title",[e._v("No Data Available")])],1):e._e()],2)],1)]},proxy:!0},{key:"append-outer",fn:function(){return[i("v-icon",{attrs:{id:e.element.uuid+"/tomachineCC"}})]},proxy:!0}],null,!0),model:{value:e.element.ccref,callback:function(t){e.$set(e.element,"ccref",t)},expression:"element.ccref"}}),i("v-card",{staticClass:"mx-auto",attrs:{outlined:""}},[i("div",{staticClass:"subtitle-2",staticStyle:{height:"20px"},attrs:{id:e.element.uuid+"/toMachinServiceIns"}},[i("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var s=t.hover;return[i("v-btn",{attrs:{text:"","x-small":"",color:"indigo"},on:{click:e.showSI}},[i("v-icon",[e._v(e._s(e.isSIOpenClose?s?"mdi-chevron-double-left":"mdi-chevron-double-right":s?"mdi-chevron-double-right":"mdi-chevron-double-left"))])],1)]}}],null,!0)}),e._v(" Service Instance Reference "),e.isSIOpenClose?i("v-btn",{attrs:{text:"","x-small":"",color:"indigo"},on:{click:e.isCheckSI}},[i("v-icon",[e._v("mdi-check")])],1):e._e(),e.isSIOpenClose&&e.isdeleteSIItem?i("v-btn",{attrs:{text:"","x-small":"",color:"indigo"},on:{click:e.deletSI}},[i("v-icon",[e._v("mdi-delete")])],1):e._e()],1),e.isSIOpenClose?i("v-card-text",[i("v-data-table",{attrs:{headers:e.headerSI,items:e.element.serviceI,"items-per-page":e.$setNumTableList,"show-select":e.isdeleteSIItem,"item-key":"id",height:"140px",dense:"","hide-default-footer":""},scopedSlots:e._u([{key:"item.data-table-select",fn:function(e){var t=e.isSelected,s=e.select;return[i("v-simple-checkbox",{attrs:{color:"green",value:t,ripple:!1},on:{input:function(e){return s(e)}}})]}},e.isdeleteSIItem?null:{key:"body",fn:function(t){var s=t.items,n=t.headers;return[i("tbody",[e._l(s,(function(t,s){return i("tr",{key:s},e._l(n,(function(n,l){return i("td",{key:l},["refView"==n.value?i("v-icon",{staticClass:"refView-tableItem",attrs:{color:e.refService===t.id?"red":null},on:{click:function(t){return e.rowClick(s)}}},[e._v("mdi-magnify")]):e._e(),"refView"!=n.value?i("v-edit-dialog",{attrs:{persistent:"",large:""},on:{open:function(t){return e.openSI(s)},cancel:e.cancelSI,save:function(t){return e.editSI(s)}},scopedSlots:e._u([{key:"input",fn:function(){return[i("br"),i("v-autocomplete",{staticClass:"lable-placeholer-color",attrs:{label:"Service Instance",items:e.selSI,"item-text":"name","item-value":"name","return-object":"",clearable:""},on:{"click:clear":e.clearSI},model:{value:e.editSIItem.ref,callback:function(t){e.$set(e.editSIItem,"ref",t)},expression:"editSIItem.ref"}}),null!=e.editSIItem.ref&&1==e.editSIItem.ref.uuid?i("v-select",{staticClass:"lable-placeholer-color",staticStyle:{height:"45px"},attrs:{label:"Reference",items:e.selProvidedSomeIP,"item-text":"name","item-value":"uuid","return-object":"",clearable:"",outlined:"",dense:""},on:{click:function(t){return e.setProvideList()},"click:clear":e.clearProvideRef},scopedSlots:e._u([{key:"append-item",fn:function(){return[i("v-btn",{attrs:{outlined:"",color:"indigo",dense:"",text:"",small:"",block:""},on:{click:e.newProvide}},[i("v-icon",[e._v("mdi-plus")]),e._v("New Item ")],1)]},proxy:!0}],null,!0),model:{value:e.editSIItem.service,callback:function(t){e.$set(e.editSIItem,"service",t)},expression:"editSIItem.service"}}):e._e(),null!=e.editSIItem.ref&&2==e.editSIItem.ref.uuid?i("v-select",{staticClass:"lable-placeholer-color",staticStyle:{height:"45px"},attrs:{label:"Reference",items:e.selRequiredSomeIP,"item-text":"name","item-value":"uuid","return-object":"",clearable:"",outlined:"",dense:""},on:{click:function(t){return e.setRequiredList()},"click:clear":e.clearRequiredRef},scopedSlots:e._u([{key:"append-item",fn:function(){return[i("v-btn",{attrs:{outlined:"",color:"indigo",dense:"",text:"",small:"",block:""},on:{click:e.newRequired}},[i("v-icon",[e._v("mdi-plus")]),e._v("New Item ")],1)]},proxy:!0}],null,!0),model:{value:e.editSIItem.service,callback:function(t){e.$set(e.editSIItem,"service",t)},expression:"editSIItem.service"}}):e._e()]},proxy:!0}],null,!0)},[e._v(" "+e._s(t[n.value])+" ")]):e._e()],1)})),0)})),i("tr",[i("th",{attrs:{colspan:"3"}},[i("v-edit-dialog",{attrs:{large:"",persistent:""},on:{open:function(t){return e.clickOtherFields()},cancel:e.cancelSI,save:function(t){return e.addSI()}},scopedSlots:e._u([{key:"input",fn:function(){return[i("br"),i("v-autocomplete",{staticClass:"lable-placeholer-color",attrs:{label:"Service Instance",items:e.selSI,"item-text":"name","item-value":"name","return-object":"",clearable:""},on:{"click:clear":e.clearSI},model:{value:e.editSIItem.ref,callback:function(t){e.$set(e.editSIItem,"ref",t)},expression:"editSIItem.ref"}}),null!=e.editSIItem.ref&&1==e.editSIItem.ref.uuid?i("v-select",{staticClass:"lable-placeholer-color",staticStyle:{height:"45px"},attrs:{label:"Reference",items:e.selProvidedSomeIP,"item-text":"name","item-value":"uuid","return-object":"",clearable:"",outlined:"",dense:""},on:{click:function(t){return e.setProvideList()},"click:clear":e.clearProvideRef},scopedSlots:e._u([{key:"append-item",fn:function(){return[i("v-btn",{attrs:{outlined:"",color:"indigo",dense:"",text:"",small:"",block:""},on:{click:e.newProvide}},[i("v-icon",[e._v("mdi-plus")]),e._v("New Item ")],1)]},proxy:!0}],null,!0),model:{value:e.editSIItem.service,callback:function(t){e.$set(e.editSIItem,"service",t)},expression:"editSIItem.service"}}):e._e(),null!=e.editSIItem.ref&&2==e.editSIItem.ref.uuid?i("v-select",{staticClass:"lable-placeholer-color",staticStyle:{height:"45px"},attrs:{label:"Reference",items:e.selRequiredSomeIP,"item-text":"name","item-value":"uuid","return-object":"",clearable:"",outlined:"",dense:""},on:{click:function(t){return e.setRequiredList()},"click:clear":e.clearRequiredRef},scopedSlots:e._u([{key:"append-item",fn:function(){return[i("v-btn",{attrs:{outlined:"",color:"indigo",dense:"",text:"",small:"",block:""},on:{click:e.newRequired}},[i("v-icon",[e._v("mdi-plus")]),e._v("New Item ")],1)]},proxy:!0}],null,!0),model:{value:e.editSIItem.service,callback:function(t){e.$set(e.editSIItem,"service",t)},expression:"editSIItem.service"}}):e._e()]},proxy:!0}],null,!0)},[i("v-btn",{attrs:{outlined:"",color:"indigo",dense:"",text:"",small:"",block:"",width:"270px"}},[i("v-icon",[e._v("mdi-plus")]),e._v("New Item ")],1)],1)],1)])],2)]}}],null,!0),model:{value:e.selectDelectSI,callback:function(t){e.selectDelectSI=t},expression:"selectDelectSI"}})],1):e._e()],1),i("v-text-field",{staticClass:"lable-placeholer-color",staticStyle:{height:"45px"},attrs:{label:"UDP Port",placeholder:"Int",outlined:"",dense:""},on:{focus:function(t){return e.clickOtherFields()}},model:{value:e.element.udp,callback:function(t){e.$set(e.element,"udp",t)},expression:"element.udp"}}),i("v-text-field",{staticClass:"lable-placeholer-color",staticStyle:{height:"45px"},attrs:{label:"TCP Port",placeholder:"Int",outlined:"",dense:""},on:{focus:function(t){return e.clickOtherFields()}},model:{value:e.element.tcp,callback:function(t){e.$set(e.element,"tcp",t)},expression:"element.tcp"}})],1):i("v-card-text",[i("v-text-field",{staticClass:"lable-placeholer-color",staticStyle:{height:"45px"},attrs:{label:"name  <"+e.element.path+">",rules:e.rules.name,placeholder:"String",readonly:"",outlined:"",dense:""},model:{value:e.element.name,callback:function(t){e.$set(e.element,"name",t)},expression:"element.name"}})],1)],1)]}}])},[i("span",[e._v(e._s(e.element.name))])]),i("v-dialog",{attrs:{persistent:"",width:"800"},model:{value:e.dialogText,callback:function(t){e.dialogText=t},expression:"dialogText"}},[i("v-card",[i("v-card-title",{staticClass:"text-h6 green accent-1"},[e._v(" Edit Text "),i("v-spacer"),i("v-btn",{attrs:{icon:"",color:"green darken-1","x-samll":"",dark:""},on:{click:function(t){return e.saveARXML()}}},[i("v-icon",[e._v("mdi-content-save")])],1),i("v-btn",{attrs:{icon:"",color:"green darken-1","x-samll":"",dark:""},on:{click:function(t){return e.cancelARXML()}}},[i("v-icon",[e._v("mdi-close")])],1)],1),i("v-card-text",[i("br"),i("v-row",{staticStyle:{height:"30px"}},[i("label",{staticStyle:{padding:"10px"}},[e._v("<SHORT-NAME>")]),i("v-text-field",{staticClass:"lable-placeholer-color",staticStyle:{height:"15px"},attrs:{placeholder:"String",dense:""},model:{value:e.editARXML.name,callback:function(t){e.$set(e.editARXML,"name",t)},expression:"editARXML.name"}}),i("label",{staticStyle:{padding:"10px"}},[e._v("</SHORT-NAME>")])],1),i("v-row",{staticStyle:{height:"30px"}},[i("label",{staticStyle:{padding:"10px"}},[e._v("<COMMUNICATION-CONNECTOR-REF>")]),i("v-text-field",{staticClass:"lable-placeholer-color",staticStyle:{height:"15px"},attrs:{placeholder:"Path",dense:""},model:{value:e.editARXML.ccref,callback:function(t){e.$set(e.editARXML,"ccref",t)},expression:"editARXML.ccref"}}),i("label",{staticStyle:{padding:"10px"}},[e._v("</COMMUNICATION-CONNECTOR-REF>")])],1),i("v-row",{staticStyle:{height:"50px"}},[i("label",{staticStyle:{padding:"10px"}},[e._v("<SERVICE-INSTANCE-REFS>")]),i("v-btn",{staticStyle:{margin:"3px 0px 0px -10px"},attrs:{icon:"",color:"teal darken","x-samll":"",dark:""},on:{click:function(t){return e.newTextServiceI()}}},[i("v-icon",{attrs:{dense:"",dark:""}},[e._v("mdi-plus")])],1)],1),i("div",{staticClass:"text-editDialog",staticStyle:{height:"150px"}},e._l(e.editARXML.serviceI,(function(t,s){return i("v-row",{key:s,staticStyle:{height:"30px"}},[i("div",[i("br"),i("v-row",{staticStyle:{height:"25px",margin:"0px"}},[i("v-btn",{staticStyle:{margin:"15px -20px 0px 20px"},attrs:{text:"","x-small":"",color:"indigo"},on:{click:function(t){return e.deletTextServiceI(s)}}},[i("v-icon",[e._v("mdi-minus")])],1),i("label",{staticStyle:{padding:"10px",margin:"2px 0px 2px 10px"}},[e._v("<SERVICE-INSTANCE-REF>")]),i("v-text-field",{staticClass:"lable-placeholer-color",attrs:{placeholder:"Path",dense:""},model:{value:t.service,callback:function(i){e.$set(t,"service",i)},expression:"item.service"}}),i("label",{staticStyle:{padding:"10px"}},[e._v("</SERVICE-INSTANCE-REF>")])],1)],1)])})),1),i("v-row",{staticStyle:{height:"25px"}},[i("label",{staticStyle:{padding:"10px"}},[e._v("</SERVICE-INSTANCE-REFS>")])]),i("v-row",{staticStyle:{height:"30px"}},[i("label",{staticStyle:{padding:"10px"}},[e._v("<TCP-PORT>")]),i("v-text-field",{staticClass:"lable-placeholer-color",staticStyle:{height:"15px"},attrs:{placeholder:"Int",dense:""},model:{value:e.editARXML.udp,callback:function(t){e.$set(e.editARXML,"udp",t)},expression:"editARXML.udp"}}),i("label",{staticStyle:{padding:"10px"}},[e._v("</TCP-PORT>")])],1),i("v-row",{staticStyle:{height:"25px"}},[i("label",{staticStyle:{padding:"10px"}},[e._v("<UDP-PORT>")]),i("v-text-field",{staticClass:"lable-placeholer-color",staticStyle:{height:"15px"},attrs:{placeholder:"Int",dense:""},model:{value:e.editARXML.tcp,callback:function(t){e.$set(e.editARXML,"tcp",t)},expression:"editARXML.tcp"}}),i("label",{staticStyle:{padding:"10px"}},[e._v("</UDP-PORT>")])],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{staticClass:"d-inline-flex ml-3 mr-1",attrs:{color:"green darken-1",text:""},on:{click:function(t){return e.saveARXML()}}},[e._v(" Save ")]),i("v-btn",{staticClass:"d-inline-flex ml-3 mr-1",attrs:{color:"green darken-1",text:""},on:{click:function(t){return e.cancelARXML()}}},[e._v(" Cancel ")])],1)],1)],1)],1)],1)},n=[],l=(i("b0c0"),i("159b"),i("4de4"),i("a434"),i("5609")),o=i("56d7"),r=i("26a0"),c={props:["element","isDatailView","minimaptoolbar","location"],components:{dialogPathSetting:r["a"]},computed:{activeUUID:function(){return this.$store.state.activeUUID},setting:function(){return this.$store.state.setting}},watch:{activeUUID:function(e){this.setToolbarColor(e)},setting:function(e){var t=this;this.zoomvalue=e.zoomMain,this.zoomvalue<this.$setZoominTooltip?this.isTooltip=!1:(this.isTooltip=this.minimaptoolbar,this.zoomvalue>this.$setZoominLineTitle&&this.zoomvalue<this.$setZoominLineSetupStart?o["EventBus"].$emit("drawLineTitleBar",this.element.uuid,!1):this.zoomvalue>this.$setZoominLineSetupStart&&this.zoomvalue<this.$setZoominLineSetupEnd&&this.$nextTick((function(){o["EventBus"].$emit("drawLineTitleBar",t.element.uuid,t.iselementOpenClose)})))}},created:function(){this.setToolbarColor(this.$store.state.activeUUID)},data:function(){return{rules:{name:[function(e){return(e||"").length>0}]},dialogPath:!1,colorToolbar:"#6A5ACD",zoomvalue:this.$store.state.setting.zoomMain,isTooltip:this.minimaptoolbar,iselementOpenClose:!0,dialogText:!1,editARXML:{name:"",ccref:null,serviceI:[],tcp:"",udp:""},editTextItem:{ref:"",service:null,id:""},selCommuniConnect:this.$store.getters.getCommunicationConnect,selRequiredSomeIP:this.$store.getters.getRequiredSomeIP,selProvidedSomeIP:this.$store.getters.getProvidedSomeIP,isSIOpenClose:!0,isdeleteSIItem:!1,selectDelectSI:[],headerSI:[{text:"",sortable:!1,value:"refView",width:"5px"},{text:"Service Instance Ref",align:"start",sortable:!1,value:"service"}],editSIItem:{ref:"",service:null,id:""},selSI:[{name:"PROVIDED-SOMEIP-SERVICE-INSTANCE",uuid:1},{name:"REQUIRED-SOMEIP-SERVICE-INSTANCE",uuid:2}],refCommunication:!1,refService:null}},mounted:function(){var e=this;this.minimaptoolbar&&this.zoomvalue<this.$setZoominElement&&(this.isTooltip=!1),o["EventBus"].$on(this.element.uuid,(function(t,i,s){s?e.refCommunication&&e.clickOtherFields():(e.refCommunication=!1,e.refService=null,1==t?e.refCommunication=!0:2==t&&(e.refService=i))}))},methods:{submitDialog:function(e){this.element.path=e,this.$store.commit("isintoErrorList",{uuid:this.element.uuid,name:this.element.name,path:this.element.path})},setToolbarColor:function(e){this.element.uuid==e?this.colorToolbar="#FF1493":this.colorToolbar="#6A5ACD"},setToolbarColorDetailView:function(e){this.element.uuid==e?this.colorToolbar="#B0E0E6":this.element.uuid==this.$store.state.activeUUID?this.colorToolbar="#FF1493":this.colorToolbar="#6A5ACD"},showSomeIPtoMachine:function(){this.clickOtherFields(),this.iselementOpenClose=!this.iselementOpenClose,this.$nextTick((function(){o["EventBus"].$emit("drawLine")}))},showSI:function(){this.clickOtherFields(),this.isSIOpenClose=!this.isSIOpenClose},inputSomeIPtoMachineName:function(){this.$store.commit("editSomeIPtoMachine",{compo:"Name",uuid:this.element.uuid,name:this.element.name}),""!=this.element.name&&this.$store.commit("isintoErrorList",{uuid:this.element.uuid,name:this.element.name,path:this.element.path})},clickOtherFields:function(){(this.refCommunication||null!=this.refService)&&(this.deleteOpenElement(),this.refCommunication=!1,this.refService=null)},rowClick:function(e){var t=this;if(console.log("rowClick "+e),this.refService!=this.element.serviceI[e].id){this.clickOtherFields();var i=this.$store.getters.getChangeEndLine(this.element.uuid+"/toMachinServiceIns-"+this.element.serviceI[e].id);void 0==i&&("PROVIDED-SOMEIP-SERVICE-INSTANCE"==this.element.serviceI[e].ref?i=this.$store.getters.getProvidedSomeIPPath(this.element.serviceI[e].service):"REQUIRED-SOMEIP-SERVICE-INSTANCE"==this.element.serviceI[e].ref&&(i=this.$store.getters.getRequiredSomeIPPath(this.element.serviceI[e].service))),null!=i&&("PROVIDED-SOMEIP-SERVICE-INSTANCE"==this.element.serviceI[e].ref?(this.$store.commit("editProvidedSomeIP",{compo:"drag",uuid:i,top:this.element.top,left:this.element.left+this.$setPositionLeft}),this.$store.commit("setzIndexVisible",{parent:l["a"].ProvidedSomeIP_str,uuid:i,isVisible:!0,compo:"visible",startUUID:this.element.uuid})):"REQUIRED-SOMEIP-SERVICE-INSTANCE"==this.element.serviceI[e].ref&&(this.$store.commit("editRequiredSomeIP",{compo:"drag",uuid:i,top:this.element.top,left:this.element.left+this.$setPositionLeft}),this.$store.commit("setzIndexVisible",{parent:l["a"].RequiredSomeIP_str,uuid:i,isVisible:!0,compo:"visible",startUUID:this.element.uuid})),this.$nextTick((function(){o["EventBus"].$emit("new-line",t.element.uuid+"/toMachinServiceIns",i),document.getElementById(i+1).scrollIntoView({behavior:"smooth",block:"start"})})),this.$store.commit("setViewLineInfo",{start:this.element.uuid+"/toMachinServiceIns",end:i,iscircle:!1,refNum:2,idxID:this.element.serviceI[e].id})),this.refService=this.element.serviceI[e].id}},clearCCRef:function(){this.element.ccref=null;var e=this.$store.getters.getChangeEndLine(this.element.uuid+"/tomachineCC");void 0!=e&&this.deleteLine(this.element.uuid+"/tomachineCC"),this.clickOtherFields(),this.$store.commit("isintoErrorList",{uuid:this.element.uuid,type:"tomachineCC",clearRef:!0})},setCCRefSelect:function(){var e=this;if(this.clickOtherFields(),null!=this.element.ccref&&(this.refCommunication=!0,this.$store.getters.getDeleteOpenElement(this.element.uuid)+1==this.$store.state.openElement.length)){var t=this.$store.getters.getChangeEndLine(this.element.uuid+"/tomachineCC");void 0==t&&(t=this.$store.getters.getMachineDesignPath(this.element.ccref,1)),null!=t&&(this.$store.commit("editMachineDesign",{compo:"drag",uuid:t,top:this.element.top,left:this.element.left+this.$setPositionLeft}),this.$store.commit("setzIndexVisible",{parent:l["a"].MachineDesigne_str,uuid:t,isVisible:!0,compo:"visible",startUUID:this.element.uuid}),this.$nextTick((function(){o["EventBus"].$emit("new-line",e.element.uuid+"/tomachineCC",t),document.getElementById(t+1).scrollIntoView({behavior:"smooth",block:"start"})})),this.$store.commit("setViewLineInfo",{start:this.element.uuid+"/tomachineCC",end:t,iscircle:!1,refNum:1}))}},setCCRef:function(e){var t=this;if(console.log(e),this.clickOtherFields(),this.element.ccref!=e.name){var i=this.$store.getters.getChangeEndLine(this.element.uuid+"/tomachineCC");void 0!=i&&i!=e.uuid&&this.deleteLine(this.element.uuid+"/tomachineCC"),i!=e.uuid&&(this.refCommunication=!0,this.$store.commit("editMachineDesign",{compo:"drag",uuid:e.uuid,top:this.element.top,left:this.element.left+this.$setPositionLeft}),this.$store.commit("setzIndexVisible",{parent:l["a"].MachineDesigne_str,uuid:e.uuid,isVisible:!0,compo:"visible",startUUID:this.element.uuid}),this.$nextTick((function(){t.newLine(t.element.uuid+"/tomachineCC",t.element.uuid+"/tomachineCC",e.uuid,!0),document.getElementById(e.uuid+1).scrollIntoView({behavior:"smooth",block:"start"}),t.$store.commit("isintoErrorList",{uuid:t.element.uuid,type:"tomachineCC"})})),this.$store.commit("setViewLineInfo",{start:this.element.uuid+"/tomachineCC",end:e.uuid,iscircle:!1,refNum:1})),this.element.ccref=e.name}this.setactiveUUID()},setCCRefList:function(){this.clickOtherFields(),this.selCommuniConnect=this.$store.getters.getCommunicationConnect,this.setactiveUUID()},isCheckSI:function(){this.clickOtherFields(),1==this.isdeleteSIItem?(this.isdeleteSIItem=!1,this.selectDelectSI=[]):this.isdeleteSIItem=!0},deletSI:function(){var e=this;this.clickOtherFields(),1==this.isdeleteSIItem&&(this.selectDelectSI.forEach((function(t){for(var i=0;i<e.element.serviceI.length;i++)if(t.id==e.element.serviceI[i].id){var s=e.$store.getters.getChangeEndLine(e.element.uuid+"/toMachinServiceIns-"+e.element.serviceI[i].id);void 0!=s&&e.deleteLine(e.element.uuid+"/toMachinServiceIns-"+e.element.serviceI[i].id),e.$store.commit("isintoErrorList",{uuid:e.element.uuid,type:"toMachinServiceIns",table:e.element.serviceI[i].id,clearRef:!0})}})),this.element.serviceI=this.element.serviceI.filter((function(t){return e.selectDelectSI.indexOf(t)<0})),this.isdeleteSIItem=!1,this.selectDelectSI=[])},editSI:function(e){var t=this,i=this.$store.getters.getChangeEndLine(this.element.uuid+"/toMachinServiceIns-"+this.element.serviceI[e].id);if(this.element.serviceI[e].ref=this.editSIItem.ref.name,void 0!=i&&null==this.editSIItem.service?(this.deleteLine(this.element.uuid+"/toMachinServiceIns-"+this.element.serviceI[e].id),this.element.serviceI[e].service=null):void 0!=i&&i!=this.editSIItem.service.uuid?(this.deleteLine(this.element.uuid+"/toMachinServiceIns-"+this.element.serviceI[e].id),this.newLine(this.element.uuid+"/toMachinServiceIns-"+this.element.serviceI[e].id,this.element.uuid+"/toMachinServiceIns",this.editSIItem.service.uuid,!1),this.element.serviceI[e].service=this.editSIItem.service.name):void 0==i&&null!=this.editSIItem.service&&null!=this.editSIItem.service.uuid&&(this.newLine(this.element.uuid+"/toMachinServiceIns-"+this.element.serviceI[e].id,this.element.uuid+"/toMachinServiceIns",this.editSIItem.service.uuid,!1),this.element.serviceI[e].service=this.editSIItem.service.name),this.refService==this.element.serviceI[e].id&&(this.deleteOpenElement(),null!=this.editSIItem.service&&null!=this.editSIItem.service.uuid)){var s=this.editSIItem.service.uuid;"PROVIDED-SOMEIP-SERVICE-INSTANCE"==this.element.serviceI[e].ref?(this.$store.commit("editProvidedSomeIP",{compo:"drag",uuid:this.editSIItem.service.uuid,top:this.element.top,left:this.element.left+this.$setPositionLeft}),this.$store.commit("setzIndexVisible",{parent:l["a"].ProvidedSomeIP_str,uuid:this.editSIItem.service.uuid,isVisible:!0,compo:"visible",startUUID:this.element.uuid})):"REQUIRED-SOMEIP-SERVICE-INSTANCE"==this.element.serviceI[e].ref&&(this.$store.commit("editRequiredSomeIP",{compo:"drag",uuid:this.editSIItem.service.uuid,top:this.element.top,left:this.element.left+this.$setPositionLeft}),this.$store.commit("setzIndexVisible",{parent:l["a"].RequiredSomeIP_str,uuid:this.editSIItem.service.uuid,isVisible:!0,compo:"visible",startUUID:this.element.uuid})),this.$nextTick((function(){o["EventBus"].$emit("new-line",t.element.uuid+"/toMachinServiceIns",s),document.getElementById(s+1).scrollIntoView({behavior:"smooth",block:"start"})})),this.$store.commit("setViewLineInfo",{start:this.element.uuid+"/toMachinServiceIns",end:s,iscircle:!1,refNum:2,idxID:this.refService})}this.$store.commit("isintoErrorList",{uuid:this.element.uuid,type:"toMachinServiceIns",table:this.element.serviceI[e].id}),this.cancelSI()},cancelSI:function(){this.editSIItem.ref="",this.editSIItem.service=null,this.editSIItem.id="",this.setactiveUUID()},openSI:function(e){this.clickOtherFields();var t,i=null;"PROVIDED-SOMEIP-SERVICE-INSTANCE"==this.element.serviceI[e].ref?(i=1,this.editSIItem.ref=this.element.serviceI[e].ref,this.selProvidedSomeIP=this.$store.getters.getProvidedSomeIP,null!=this.element.serviceI[e].service&&(t=this.$store.getters.getChangeEndLine(this.element.uuid+"/toMachinServiceIns-"+this.element.serviceI[e].id),void 0==t&&(t=this.$store.getters.getProvidedSomeIPPath(this.element.serviceI[e].service)),this.editSIItem.service={name:this.element.serviceI[e].service,uuid:t})):"REQUIRED-SOMEIP-SERVICE-INSTANCE"==this.element.serviceI[e].ref&&(i=2,this.selRequiredSomeIP=this.$store.getters.getRequiredSomeIP,null!=this.element.serviceI[e].service&&(t=this.$store.getters.getChangeEndLine(this.element.uuid+"/toMachinServiceIns-"+this.element.serviceI[e].id),void 0==t&&(t=this.$store.getters.getRequiredSomeIPPath(this.element.serviceI[e].service)),this.editSIItem.service={name:this.element.serviceI[e].service,uuid:t})),this.editSIItem.ref={name:this.element.serviceI[e].ref,uuid:i}},addSI:function(){var e=this;this.clickOtherFields();var t=!0,i=0;while(t)i++,t=this.element.serviceI.some((function(e){return e.id===i}));this.editSIItem.id=i,this.editSIItem.ref=this.editSIItem.ref.name;var s=null;null!=this.editSIItem.service&&(s=this.editSIItem.service.uuid,"PROVIDED-SOMEIP-SERVICE-INSTANCE"==this.editSIItem.ref?(this.$store.commit("editProvidedSomeIP",{compo:"drag",uuid:this.editSIItem.service.uuid,top:this.element.top,left:this.element.left+this.$setPositionLeft}),this.$store.commit("setzIndexVisible",{parent:l["a"].ProvidedSomeIP_str,uuid:this.editSIItem.service.uuid,isVisible:!0,compo:"visible",startUUID:this.element.uuid})):"REQUIRED-SOMEIP-SERVICE-INSTANCE"==this.editSIItem.ref&&(this.$store.commit("editRequiredSomeIP",{compo:"drag",uuid:this.editSIItem.service.uuid,top:this.element.top,left:this.element.left+this.$setPositionLeft}),this.$store.commit("setzIndexVisible",{parent:l["a"].RequiredSomeIP_str,uuid:this.editSIItem.service.uuid,isVisible:!0,compo:"visible",startUUID:this.element.uuid})),this.editSIItem.service=this.editSIItem.service.name,this.$nextTick((function(){e.newLine(e.element.uuid+"/toMachinServiceIns-"+i,e.element.uuid+"/toMachinServiceIns",s,!0),document.getElementById(s+1).scrollIntoView({behavior:"smooth",block:"start"})})),this.$store.commit("setViewLineInfo",{start:this.element.uuid+"/toMachinServiceIns",end:s,iscircle:!1,refNum:2,idxID:this.editSIItem.id}));var n=Object.assign({},this.editSIItem);this.element.serviceI.push(n),this.refService=i,this.cancelSI()},clearSI:function(){this.editSIItem.ref="",this.editSIItem.service=null},setProvideList:function(){this.selProvidedSomeIP=this.$store.getters.getProvidedSomeIP,this.setactiveUUID()},clearProvideRef:function(){this.editSIItem.service=null},newProvide:function(){this.$store.commit("addElementProvidedSomeIP",{name:this.$store.getters.getNameProvidedSomeIP(""),path:"",input:!1,top:this.element.top,left:this.element.left+this.$setPositionLeft,zindex:10,icon:"mdi-clipboard-outline",validation:!1,deployref:null,someipserver:null,instanceid:"",loadPriority:"",loadWeight:"",eventP:[],method:[],eventG:[],E2EEvent:[],E2EMethod:[]}),o["EventBus"].$emit("add-element",l["a"].ProvidedSomeIP_str),o["EventBus"].$emit("add-element",l["a"].Service_str),this.$store.commit("editSomeIPtoMachine",{compo:"z",uuid:this.element.uuid,zindex:2}),this.selProvidedSomeIP=this.$store.getters.getProvidedSomeIP},setRequiredList:function(){this.selRequiredSomeIP=this.$store.getters.getRequiredSomeIP,this.setactiveUUID()},clearRequiredRef:function(){this.editSIItem.service=null},newRequired:function(){this.$store.commit("addElementRequiredSomeIP",{name:this.$store.getters.getNameRequiredSomeIP(""),path:"",input:!1,top:this.element.top,left:this.element.left+this.$setPositionLeft,zindex:10,icon:"mdi-clipboard-outline",validation:!1,deployref:null,minorver:"",id:"",someipclient:null,ver:null,method:[],requiredevent:[],E2EEvent:[],E2EMethod:[]}),o["EventBus"].$emit("add-element",l["a"].RequiredSomeIP_str),o["EventBus"].$emit("add-element",l["a"].Service_str),this.$store.commit("editSomeIPtoMachine",{compo:"z",uuid:this.element.uuid,zindex:2}),this.selRequiredSomeIP=this.$store.getters.getRequiredSomeIP},setactiveUUID:function(){this.$store.commit("setuuid",{uuid:this.element.uuid}),this.$store.commit("editSomeIPtoMachine",{compo:"z",uuid:this.element.uuid,zindex:10})},deleteLine:function(e){var t=this.$store.getters.getconnectLineNum(e);-1!=t&&(this.$store.commit("deletConnectionline",{startnum:t}),this.deleteOpenElement())},deleteOpenElement:function(){this.$store.commit("deleteOpenElemnt",{uuid:this.element.uuid,isDeleteAll:!1,startUUID:this.element.uuid})},newLine:function(e,t,i,s){this.$store.commit("setConnectionline",{start:e,end:i}),s&&o["EventBus"].$emit("new-line",t,i)},viewARXML:function(){this.editARXML.name=this.element.name,this.editARXML.ccref=this.element.ccref,this.editARXML.tcp=this.element.tcp,this.editARXML.udp=this.element.udp,this.editARXML.serviceI=JSON.parse(JSON.stringify(this.element.serviceI)),this.dialogText=!0},saveARXML:function(){var e=this;this.element.name!=this.editARXML.name&&(this.$store.commit("editSomeIPtoMachine",{compo:"Name",uuid:this.element.uuid,name:this.editARXML.name}),""!=this.editARXML.name&&this.$store.commit("isintoErrorList",{uuid:this.element.uuid,name:this.editARXML.name,path:this.element.path})),this.element.name=this.editARXML.name;var t=null,i=null;this.editARXML.ccref!=this.element.ccref&&(t=this.$store.getters.getChangeEndLine(this.element.uuid+"/tomachineCC"),void 0!=t&&this.deleteLine(this.element.uuid+"/tomachineCC"),i=this.$store.getters.getMachineDesignPath(this.editARXML.ccref,1),null!=i&&this.newLine(this.element.uuid+"/tomachineCC",this.element.uuid+"/tomachineCC",i,!1)),this.element.ccref=this.editARXML.ccref,this.element.tcp=this.editARXML.tcp,this.element.udp=this.editARXML.udp,this.editARXML.serviceI.length>0?(this.editARXML.serviceI.forEach((function(t){for(var i=!1,s=0;s<e.element.serviceI.length;s++)e.element.serviceI[s].id==t.id&&e.element.serviceI[s].service==t.service&&(i=!0);if(!i){var n=e.$store.getters.getChangeEndLine(e.element.uuid+"/toMachinServiceIns-"+t.id);void 0!=n&&e.deleteLine(e.element.uuid+"/toMachinServiceIns-"+t.id);var l=e.$store.getters.getRequiredSomeIPPath(t.service);null!=l?(t.ref="REQUIRED-SOMEIP-SERVICE-INSTANCE",e.newLine(e.element.uuid+"/toMachinServiceIns-"+t.id,e.element.uuid+"/toMachinServiceIns",l,!1)):(l=e.$store.getters.getProvidedSomeIPPath(t.service),null!=l&&(t.ref="PROVIDED-SOMEIP-SERVICE-INSTANCE",e.newLine(e.element.uuid+"/toMachinServiceIns-"+t.id,e.element.uuid+"/toMachinServiceIns",l,!1)))}})),this.element.serviceI.forEach((function(t){var i=!1;if(e.editARXML.serviceI.forEach((function(e){e.id==t.id&&(i=!0)})),!i){var s=e.$store.getters.getChangeEndLine(e.element.uuid+"/toMachinServiceIns-"+t.id);void 0!=s&&e.deleteLine(e.element.uuid+"/toMachinServiceIns-"+t.id)}}))):this.element.serviceI.length>0&&this.element.serviceI.forEach((function(t){if(null!=t.service){var i=e.$store.getters.getChangeEndLine(e.element.uuid+"/toMachinServiceIns-"+t.id);void 0!=i&&e.deleteLine(e.element.uuid+"/toMachinServiceIns-"+t.id)}})),this.element.serviceI=JSON.parse(JSON.stringify(this.editARXML.serviceI)),this.cancelARXML()},cancelARXML:function(){this.editARXML={name:"",ccref:null,serviceI:[],tcp:"",udp:""},this.editTextItem={ref:"",service:null,id:""},this.dialogText=!1},newTextServiceI:function(){this.editTextItem={ref:"",service:null,id:""};var e=!0,t=0;while(e)t++,e=this.editARXML.serviceI.some((function(e){return e.id===t}));this.editTextItem.id=t;var i=Object.assign({},this.editTextItem);this.editARXML.serviceI.push(i)},deletTextServiceI:function(e){this.editARXML.serviceI.splice(e,1)}}},a=c,d=i("2877"),m=i("6544"),u=i.n(m),h=i("c6a6"),v=i("8336"),I=i("b0af"),S=i("99d9"),f=i("a523"),p=i("8fea"),g=i("169a"),b=i("7679"),C=i("ce87"),x=i("132d"),E=i("8860"),R=i("da13"),P=i("5d23"),$=i("e449"),k=i("0fd9"),M=i("b974"),L=i("9e88"),_=i("2fa4"),T=i("8654"),y=i("71d9"),V=i("2a7f"),O=i("3a2f"),A=Object(d["a"])(a,s,n,!1,null,null,null);t["a"]=A.exports;u()(A,{VAutocomplete:h["a"],VBtn:v["a"],VCard:I["a"],VCardActions:S["a"],VCardText:S["b"],VCardTitle:S["c"],VContainer:f["a"],VDataTable:p["a"],VDialog:g["a"],VEditDialog:b["a"],VHover:C["a"],VIcon:x["a"],VList:E["a"],VListItem:R["a"],VListItemTitle:P["b"],VMenu:$["a"],VRow:k["a"],VSelect:M["a"],VSimpleCheckbox:L["a"],VSpacer:_["a"],VTextField:T["a"],VToolbar:y["a"],VToolbarTitle:V["a"],VTooltip:O["a"]})}}]);
//# sourceMappingURL=app~95b8ba27.bdc45ec1.js.map