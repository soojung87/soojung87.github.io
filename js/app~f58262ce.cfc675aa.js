(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app~f58262ce"],{c9ac:function(t,e,o){"use strict";var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,i=e.attrs;return[o("v-btn",t._g(t._b({staticClass:"d-inline-flex",attrs:{"aria-label":"Name",small:"",icon:""},on:{click:function(e){return t.showNavigation()}}},"v-btn",i,!1),r),[o("v-icon",[t._v("mdi-menu")])],1)]}}])},[o("span",[t._v("Project Menu")])]),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,i=e.attrs;return[o("v-btn",t._g(t._b({staticClass:"d-inline-flex ml-3 mr-1",attrs:{"aria-label":"Name",small:"",icon:""},on:{click:function(e){return t.newProject()}}},"v-btn",i,!1),r),[o("v-icon",[t._v("mdi-folder-plus")])],1)]}}])},[o("span",[t._v("New Project")])]),o("v-dialog",{attrs:{width:"500"},model:{value:t.dialogNewProject,callback:function(e){t.dialogNewProject=e},expression:"dialogNewProject"}},[o("v-card",[o("v-card-title",{staticClass:"text-h6 green accent-1"},[t._v(" New Project ")]),o("v-card-text",[o("v-text-field",{attrs:{"single-line":"",label:"project name",rules:t.rules.name},model:{value:t.strProjectName,callback:function(e){t.strProjectName=e},expression:"strProjectName"}})],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{staticClass:"d-inline-flex ml-3 mr-1",attrs:{color:"green darken-1",text:""},on:{click:function(e){return t.addproject()}}},[t._v(" Accept ")]),o("v-btn",{staticClass:"d-inline-flex ml-3 mr-1",attrs:{color:"green darken-1",text:""},on:{click:t.cancelproject}},[t._v(" Cancel ")])],1)],1)],1),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,i=e.attrs;return[o("v-btn",t._g(t._b({staticClass:"d-inline-flex ml-3 mr-1",attrs:{"aria-label":"Name",small:"",icon:""},on:{click:function(e){return t.loadProject()}}},"v-btn",i,!1),r),[o("v-icon",[t._v(" mdi-open-in-app")])],1),o("input",{ref:"loadProject",staticClass:"d-none",attrs:{"aria-label":"file",type:"file",multiple:""},on:{change:t.changeloadProject,click:t.onClickLoadProject}})]}}])},[o("span",[t._v("Load Project")])]),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,i=e.attrs;return[o("v-btn",t._g(t._b({staticClass:"d-inline-flex ml-3 mr-1",attrs:{"aria-label":"Name",small:"",icon:""},on:{click:function(e){return t.clickSave()}}},"v-btn",i,!1),r),[o("v-icon",[t._v("mdi-content-save-settings")])],1)]}}])},[o("span",[t._v("Save Project")])]),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,i=e.attrs;return[o("v-btn",t._g(t._b({staticClass:"d-inline-flex ml-3 mr-1",attrs:{"aria-label":"Name",small:"",icon:""},on:{click:function(e){return t.importFile()}}},"v-btn",i,!1),r),[o("v-icon",[t._v(" mdi-file-import")])],1),o("input",{ref:"uploader",staticClass:"d-none",attrs:{"aria-label":"file",type:"file",multiple:""},on:{change:t.changeImportFile,click:t.onClickLoadFile}})]}}])},[o("span",[t._v("Import Arxml")])]),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,i=e.attrs;return[o("v-btn",t._g(t._b({staticClass:"d-inline-flex ml-3 mr-1",attrs:{"aria-label":"Name",small:"",icon:""},on:{click:function(e){return t.importFolder()}}},"v-btn",i,!1),r),[o("v-icon",[t._v(" mdi-folder-download")])],1),o("input",{ref:"uploaderFolder",staticClass:"d-none",attrs:{type:"file",webkitdirectory:""},on:{change:t.changeImportFolder,click:t.onClickImportFolder}})]}}])},[o("span",[t._v("Import Folder")])]),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,i=e.attrs;return[o("v-btn",t._g(t._b({staticClass:"d-inline-flex ml-3 mr-1",attrs:{"aria-label":"Name",small:"",icon:""},on:{click:function(e){return t.clickExportFile()}}},"v-btn",i,!1),r),[o("v-icon",[t._v("mdi-file-export")])],1)]}}])},[o("span",[t._v("Export Arxml")])]),o("dialogSave",{model:{value:t.dialogSaveWindow,callback:function(e){t.dialogSaveWindow=e},expression:"dialogSaveWindow"}}),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,i=e.attrs;return[o("v-btn",t._g(t._b({staticClass:"d-inline-flex ml-3 mr-1",attrs:{"aria-label":"Name",small:"",icon:""},on:{click:function(e){return t.clickValidate()}}},"v-btn",i,!1),r),[o("v-icon",[t._v("mdi-play")])],1)]}}])},[o("span",[t._v("Validate")])]),o("v-dialog",{attrs:{persistent:"",width:"600"},model:{value:t.dialogEndValidate,callback:function(e){t.dialogEndValidate=e},expression:"dialogEndValidate"}},[o("v-card",[t.errorList.length>0?o("v-alert",{attrs:{width:"600",prominent:"",border:"left",outlined:"",type:"warning",dismissible:""},model:{value:t.dialogEndValidate,callback:function(e){t.dialogEndValidate=e},expression:"dialogEndValidate"}},[t._v(" "+t._s(t.errorList.length)+" error ")]):o("v-alert",{attrs:{width:"600",prominent:"",border:"left",outlined:"",type:"success",dismissible:""},model:{value:t.dialogEndValidate,callback:function(e){t.dialogEndValidate=e},expression:"dialogEndValidate"}},[t._v(" compiled ")])],1)],1),o("v-dialog",{attrs:{persistent:"",width:"600"},model:{value:t.dialogError,callback:function(e){t.dialogError=e},expression:"dialogError"}},[o("v-card",[o("v-alert",{attrs:{width:"600",prominent:"",border:"left",outlined:"",type:"warning",dismissible:""},model:{value:t.dialogError,callback:function(e){t.dialogError=e},expression:"dialogError"}},[t._v(" "+t._s(t.textError)+" ")])],1)],1),o("v-dialog",{attrs:{persistent:"",width:"500"},model:{value:t.dialogSelectNewProject,callback:function(e){t.dialogSelectNewProject=e},expression:"dialogSelectNewProject"}},[o("v-card",[o("v-card-title",{staticClass:"text-h6 green accent-1"},[t._v("Project Start Option ")]),o("v-card-text",[o("v-checkbox",{attrs:{label:"Load default Template"},model:{value:t.selectNewProject,callback:function(e){t.selectNewProject=e},expression:"selectNewProject"}})],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{staticClass:"d-inline-flex ml-3 mr-1",attrs:{color:"green darken-1",text:""},on:{click:function(e){return t.selectCreateProject()}}},[t._v(" OK ")]),o("v-btn",{staticClass:"d-inline-flex ml-3 mr-1",attrs:{color:"green darken-1",text:""},on:{click:function(e){return t.cancelCreateProject()}}},[t._v(" Cancel ")])],1)],1)],1),o("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"500"},model:{value:t.dialogProgress,callback:function(e){t.dialogProgress=e},expression:"dialogProgress"}},[o("v-card",{attrs:{color:"primary",dark:""}},[o("v-card-text",[t._v(" "+t._s(t.textProgress)+" "),o("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white",rounded:"",height:"6"}})],1)],1)],1),o("v-dialog",{attrs:{persistent:"",width:"600"},model:{value:t.dialogIsSave,callback:function(e){t.dialogIsSave=e},expression:"dialogIsSave"}},[o("v-card",[o("v-card-title",{staticClass:"text-h6 green accent-1"},[o("v-icon",[t._v("mdi-alert-circle-outline")])],1),o("v-card-text",{staticClass:"text-h5 text--primary text-center"},[o("br"),t._v(" "+t._s(t.textIsSave)+" ")]),o("v-card-actions",[o("v-spacer"),o("v-btn",{staticClass:"d-inline-flex ml-3 mr-1",attrs:{color:"green darken-1",text:""},on:{click:function(e){return t.saveAndNewPro()}}},[t._v(" Save ")]),o("v-btn",{staticClass:"d-inline-flex ml-3 mr-1",attrs:{color:"green darken-1",text:""},on:{click:function(e){return t.noSaveNewPro()}}},[t._v(" Do not save ")]),o("v-btn",{staticClass:"d-inline-flex ml-3 mr-1",attrs:{color:"green darken-1",text:""},on:{click:function(e){return t.cancelNewPro()}}},[t._v(" Cancel ")])],1)],1)],1)],1)},i=[],a=(o("ac1f"),o("1276"),o("b0c0"),o("1781")),n=o("56d7"),s={components:{dialogSave:a["a"]},computed:{SAHLProject:function(){return this.$store.state.SAHLProject},openProjectIndex:function(){return this.$store.state.openProjectIndex},navigatorList:function(){return this.$store.state.navigatorList},ismakeProject:function(){return this.$store.state.ismakeProject},visibleDetailView:function(){return this.$store.state.visibleDetailView},setLoadingProgress:function(){return this.$store.state.setLoadingProgress},saveAndNewpro:function(){return this.$store.state.saveAndNewpro},isValidation:function(){return this.$store.state.isValidation},errorList:function(){return this.$store.state.errorList}},watch:{ismakeProject:function(t){this.isprojectOpen=t},setLoadingProgress:function(t){console.log("=========== "+t),t||(this.dialogProgress=!1,this.textProgress=null)},saveAndNewpro:function(t){t&&(this.isNewPro?this.dialogSelectNewProject=!0:this.$refs.loadProject.click(),this.$store.commit("setSaveAndNewPro",{isNewPro:!1}))},isValidation:function(t){console.log(t),t||(this.dialogProgress=!1,this.textProgress=null,this.dialogEndValidate=!0)}},data:function(){return{rules:{name:[function(t){return/^[a-zA-Z0-9]*$/.test(t)}]},isOpenCloseNavigation:!0,isprojectOpen:!1,dialogNewProject:!1,dialogSelectNewProject:!1,dialogEndValidate:!1,strProjectName:"",dialogSaveWindow:!1,dialogError:!1,dialogProgress:!1,dialogIsSave:!1,selectNewProject:!0,win:null,textIsSave:null,textError:null,textProgress:null,isNewPro:!1}},mounted:function(){var t=this;n["EventBus"].$on("shortcut-keys-appbar",(function(e){"validation"==e?t.clickValidate():"ImportARXML"==e&&t.importFile()})),n["EventBus"].$on("new-Project",(function(){return t.newProject()})),n["EventBus"].$on("load-Project",(function(){return t.loadProject()}))},methods:{selectCreateProject:function(){this.dialogNewProject=!0,this.dialogSelectNewProject=!1},cancelCreateProject:function(){this.dialogSelectNewProject=!1,this.selectNewProject=!0},addproject:function(){var t=this;""!=this.strProjectName&&(this.$store.commit("setmakeProject",{makeproject:!0}),this.$store.commit("addProject",{name:this.strProjectName}),this.$store.commit("selectOpenProject",{openProjectIndex:this.$store.getters.projectCount-1}),this.selectNewProject&&(this.dialogProgress=!0,this.textProgress="project 생성중 입니다. 잠시만 기다려주세요",this.$store.commit("setLoadingImport",{setProgress:!0}),setTimeout((function(){t.$store.commit("newProjectAddElement",{})}),500)),this.cancelproject())},cancelproject:function(){this.dialogNewProject=!1,this.strProjectName="",this.selectNewProject=!0},loadProject:function(){0==this.$store.state.SAHLProject.length?this.$refs.loadProject.click():(this.dialogIsSave=!0,this.textIsSave="저장하고 새로운 프로젝트를 불러오겠습니까?")},changeloadProject:function(){var t=this,e=this.$refs.loadProject.files[0],o=e.name.split(".");if(!e||"prj"!=o[1])return this.dialogError=!0,this.textError="잘못된 형식의 파일입니다.",void setTimeout((function(){t.dialogError=!1}),4e3);var r=new FileReader;r.readAsText(e,"UTF-8"),r.onload=function(e){t.text=e.target.result;var o=JSON.parse(e.target.result);console.log(o),"BNSoft"==o[0].sahl?(t.dialogProgress=!0,t.textProgress="project 불러오는중 입니다. 잠시만 기다려주세요",t.$store.commit("setLoadingImport",{setProgress:!0}),setTimeout((function(){t.$store.commit("loadProject",{project:o})}),500)):(t.dialogError=!0,t.textError="잘못된 형식의 파일입니다.",setTimeout((function(){t.dialogError=!1}),4e3))},r.onerror=function(t){console.error(t)}},onClickLoadProject:function(t){t.target.value=""},clickSave:function(){this.$store.commit("saveProject",{howtoClick:2})},onClickLoadFile:function(t){t.target.value=""},onClickImportFolder:function(t){t.target.value=""},changeImportFile:function(){this.dialogProgress=!0,this.textProgress="file Import중 입니다. 잠시만 기다려주세요",this.$store.commit("setLoadingImport",{setProgress:!0});var t=this.$refs.uploader.files;this.$store.commit("importFileprocess",{fileInfo:t})},changeImportFolder:function(){this.dialogProgress=!0,this.textProgress="file Import중 입니다. 잠시만 기다려주세요",this.$store.commit("setLoadingImport",{setProgress:!0});var t=this.$refs.uploaderFolder.files;this.$store.commit("importFileprocess",{fileInfo:t})},clickExportFile:function(){var t=this;this.isprojectOpen?this.dialogSaveWindow=!0:(this.dialogError=!0,this.textError="먼저 Project를 만들어 주세요.",setTimeout((function(){t.dialogError=!1}),4e3))},clickValidate:function(){var t=this;console.log("clickValidate"),this.dialogProgress=!0,this.textProgress="validate 체크중입니다. 기다려주세요.",this.$store.commit("setPlayingVaildation",{isPlay:!0}),setTimeout((function(){t.$store.commit("setCheckValidate")}),500)},newProject:function(){0==this.$store.state.SAHLProject.length?this.dialogSelectNewProject=!0:(this.dialogIsSave=!0,this.isNewPro=!0,this.textIsSave="저장하고 새로운 프로젝트를 만드시겠습니까?")},showNavigation:function(){this.isOpenCloseNavigation=!this.isOpenCloseNavigation,this.$store.commit("setOpenCloseNavigationView",{isopen:this.isOpenCloseNavigation})},importFile:function(){var t=this;this.isprojectOpen?this.$refs.uploader.click():(this.dialogError=!0,this.textError="먼저 Project를 만들어 주세요.",setTimeout((function(){t.dialogError=!1}),4e3))},importFolder:function(){var t=this;this.isprojectOpen?this.$refs.uploaderFolder.click():(this.dialogError=!0,this.textError="먼저 Project를 만들어 주세요.",setTimeout((function(){t.dialogError=!1}),4e3))},addElement:function(){this.$store.commit("newProjectAddElement",{name:this.strProjectName})},cancelNewPro:function(){this.dialogIsSave=!1,this.textIsSave=null},saveAndNewPro:function(){this.$store.commit("saveProject",{howtoClick:4}),this.cancelNewPro()},noSaveNewPro:function(){this.cancelNewPro(),this.isNewPro?(this.$store.commit("deleteProject",{}),this.dialogSelectNewProject=!0):this.$refs.loadProject.click()}}},l=s,c=o("2877"),d=o("6544"),u=o.n(d),v=o("0798"),m=o("8336"),g=o("b0af"),p=o("99d9"),f=o("ac7c"),h=o("169a"),P=o("132d"),j=o("8e36"),b=o("2fa4"),w=o("8654"),x=o("3a2f"),k=Object(c["a"])(l,r,i,!1,null,null,null);e["a"]=k.exports;u()(k,{VAlert:v["a"],VBtn:m["a"],VCard:g["a"],VCardActions:p["a"],VCardText:p["b"],VCardTitle:p["c"],VCheckbox:f["a"],VDialog:h["a"],VIcon:P["a"],VProgressLinear:j["a"],VSpacer:b["a"],VTextField:w["a"],VTooltip:x["a"]})}}]);
//# sourceMappingURL=app~f58262ce.cfc675aa.js.map