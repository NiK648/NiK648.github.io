"use strict";(self.webpackChunkarc_frontend=self.webpackChunkarc_frontend||[]).push([[2502],{2502:(M,f,l)=>{l.r(f),l.d(f,{ProjectModule:()=>Q});var c=l(6814),j=l(2129),_=l(5219),t=l(4769),C=l(9862);let p=(()=>{class o{constructor(e){this.httpClient=e}getProjects(){return this.httpClient.get("assets/demo/data/projects.json")}static#t=this.\u0275fac=function(i){return new(i||o)(t.LFG(C.eN))};static#e=this.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var y=l(1290),r=l(9552),d=l(3722),g=l(707),m=l(95),h=l(4480),Z=l(4104),b=l(6340),T=l(3714),x=l(6218),P=l(3965),A=l(1312);function S(o,u){if(1&o){const e=t.EpF();t.TgZ(0,"div",18)(1,"button",19),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.openNew())}),t.qZA(),t.TgZ(2,"button",20),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.deleteSelectedProjects())}),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(2),t.Q6J("disabled",!e.selectedProjects||!e.selectedProjects.length)}}function I(o,u){if(1&o){const e=t.EpF();t._UZ(0,"p-fileUpload",21),t.TgZ(1,"button",22),t.NdJ("click",function(){t.CHM(e),t.oxw();const n=t.MAs(8);return t.KtG(n.exportCSV())}),t.qZA()}2&o&&t.Q6J("maxFileSize",1e6)}function w(o,u){if(1&o){const e=t.EpF();t.TgZ(0,"div",23)(1,"h5",24),t._uU(2,"Manage Projects"),t.qZA(),t.TgZ(3,"span",25),t._UZ(4,"i",26),t.TgZ(5,"input",27),t.NdJ("input",function(n){t.CHM(e);const s=t.oxw(),a=t.MAs(8);return t.KtG(s.onGlobalFilter(a,n))}),t.qZA()()()}}function D(o,u){1&o&&(t.TgZ(0,"tr")(1,"th",28),t._UZ(2,"p-tableHeaderCheckbox"),t.qZA(),t.TgZ(3,"th",29),t._uU(4," Id "),t._UZ(5,"p-sortIcon",30),t.qZA(),t.TgZ(6,"th",31),t._uU(7," Name "),t._UZ(8,"p-sortIcon",32),t.qZA(),t.TgZ(9,"th",33),t._uU(10," Client "),t._UZ(11,"p-sortIcon",34),t.qZA(),t.TgZ(12,"th",35),t._uU(13," Address "),t._UZ(14,"p-sortIcon",36),t.qZA(),t.TgZ(15,"th",37),t._uU(16," Description "),t._UZ(17,"p-sortIcon",38),t.qZA(),t.TgZ(18,"th",39),t._uU(19,"Action"),t.qZA()())}function N(o,u){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._UZ(2,"p-tableCheckbox",40),t.qZA(),t.TgZ(3,"td")(4,"span",41),t._uU(5,"Id"),t.qZA(),t._uU(6),t.qZA(),t.TgZ(7,"td")(8,"span",41),t._uU(9,"Name"),t.qZA(),t._uU(10),t.qZA(),t.TgZ(11,"td")(12,"span",41),t._uU(13,"Client"),t.qZA(),t._uU(14),t.qZA(),t.TgZ(15,"td")(16,"span",41),t._uU(17,"Address"),t.qZA(),t._uU(18),t.qZA(),t.TgZ(19,"td")(20,"span",41),t._uU(21,"Description"),t.qZA(),t.TgZ(22,"div",42),t._uU(23),t.qZA()(),t.TgZ(24,"td")(25,"div",43)(26,"button",44),t.NdJ("click",function(){const s=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.editProject(s))}),t.qZA(),t.TgZ(27,"button",45),t.NdJ("click",function(){const s=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.deleteProject(s))}),t.qZA()()()()}if(2&o){const e=u.$implicit;t.xp6(2),t.Q6J("value",e),t.xp6(4),t.hij(" ",e.id," "),t.xp6(4),t.hij(" ",e.name," "),t.xp6(4),t.hij(" ",e.clientName," "),t.xp6(4),t.hij(" ",e.address," "),t.xp6(5),t.hij(" ",e.description," ")}}function U(o,u){1&o&&(t.TgZ(0,"small",56),t._uU(1,"Name is required."),t.qZA())}const J=function(o){return{"ng-invalid ng-dirty":o}};function q(o,u){if(1&o){const e=t.EpF();t.TgZ(0,"div",46)(1,"label",47),t._uU(2,"Name"),t.qZA(),t.TgZ(3,"input",48),t.NdJ("ngModelChange",function(n){t.CHM(e);const s=t.oxw();return t.KtG(s.project.name=n)}),t.qZA(),t.YNc(4,U,2,0,"small",49),t.qZA(),t.TgZ(5,"div",46)(6,"label",50),t._uU(7,"Client"),t.qZA(),t.TgZ(8,"p-dropdown",51),t.NdJ("ngModelChange",function(n){t.CHM(e);const s=t.oxw();return t.KtG(s.project.clientId=n)}),t.qZA()(),t.TgZ(9,"div",46)(10,"label",52),t._uU(11,"Address"),t.qZA(),t.TgZ(12,"textarea",53),t.NdJ("ngModelChange",function(n){t.CHM(e);const s=t.oxw();return t.KtG(s.project.address=n)}),t.qZA()(),t.TgZ(13,"div",46)(14,"label",54),t._uU(15,"Description"),t.qZA(),t.TgZ(16,"textarea",55),t.NdJ("ngModelChange",function(n){t.CHM(e);const s=t.oxw();return t.KtG(s.project.description=n)}),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(3),t.Q6J("ngModel",e.project.name)("ngClass",t.VKq(7,J,e.submitted&&!e.project.name)),t.xp6(1),t.Q6J("ngIf",e.submitted&&!e.project.name),t.xp6(4),t.Q6J("ngModel",e.project.clientId)("options",e.clients),t.xp6(4),t.Q6J("ngModel",e.project.address),t.xp6(4),t.Q6J("ngModel",e.project.description)}}function F(o,u){if(1&o){const e=t.EpF();t.TgZ(0,"button",57),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.hideDialog())}),t.qZA(),t.TgZ(1,"button",58),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.saveProject())}),t.qZA()}}function H(o,u){if(1&o&&(t.TgZ(0,"span"),t._uU(1,"Are you sure you want to delete "),t.TgZ(2,"b"),t._uU(3),t.qZA(),t._uU(4,"?"),t.qZA()),2&o){const e=t.oxw();t.xp6(3),t.Oqu(e.project.name)}}function E(o,u){if(1&o){const e=t.EpF();t.TgZ(0,"button",59),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.deleteProjectDialog=!1)}),t.qZA(),t.TgZ(1,"button",60),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.confirmDelete())}),t.qZA()}}function k(o,u){if(1&o){const e=t.EpF();t.TgZ(0,"button",59),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.deleteProjectsDialog=!1)}),t.qZA(),t.TgZ(1,"button",60),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.confirmDeleteSelected())}),t.qZA()}}const R=function(){return["name","country.name","representative.name","status"]},z=function(){return[10,20,30]},v=function(){return{width:"450px"}},B=[{path:"",component:(()=>{class o{constructor(e,i,n){this.projectService=e,this.clientService=i,this.messageService=n,this.projectDialog=!1,this.deleteProjectDialog=!1,this.deleteProjectsDialog=!1,this.projects=[],this.project={},this.selectedProjects=[],this.submitted=!1,this.cols=[],this.statuses=[],this.clients=[],this.rowsPerPageOptions=[5,10,20]}ngOnInit(){this.clientService.getClients().subscribe(e=>{this.clients=e.map(i=>({label:i.name,value:i.id})),this.projectService.getProjects().subscribe(i=>{this.projects=i,this.projects.forEach(n=>{n.clientName=this.clients.find(s=>s.value===n.clientId)?.label})})}),this.cols=[{field:"project",header:"Project"},{field:"price",header:"Price"},{field:"category",header:"Category"},{field:"rating",header:"Reviews"},{field:"inventoryStatus",header:"Status"}],this.statuses=[{label:"INSTOCK",value:"instock"},{label:"LOWSTOCK",value:"lowstock"},{label:"OUTOFSTOCK",value:"outofstock"}]}openNew(){this.project={},this.submitted=!1,this.projectDialog=!0}deleteSelectedProjects(){this.deleteProjectsDialog=!0}editProject(e){this.project={...e},this.projectDialog=!0}deleteProject(e){this.deleteProjectDialog=!0,this.project={...e}}confirmDeleteSelected(){this.deleteProjectsDialog=!1,this.projects=this.projects.filter(e=>!this.selectedProjects.includes(e)),this.messageService.add({severity:"success",summary:"Successful",detail:"Projects Deleted",life:3e3}),this.selectedProjects=[]}confirmDelete(){this.deleteProjectDialog=!1,this.projects=this.projects.filter(e=>e.id!==this.project.id),this.messageService.add({severity:"success",summary:"Successful",detail:"Project Deleted",life:3e3}),this.project={}}hideDialog(){this.projectDialog=!1,this.submitted=!1}saveProject(){this.submitted=!0,this.project.name?.trim()&&(this.project.id?(this.project.clientName=this.clients.find(e=>e.value===this.project.clientId)?.label,this.projects[this.findIndexById(this.project.id)]=this.project,this.messageService.add({severity:"success",summary:"Successful",detail:"Project Updated",life:3e3})):(this.project.id=this.createId(),this.project.clientName=this.clients.find(e=>e.value===this.project.clientId)?.label,this.projects.push(this.project),this.messageService.add({severity:"success",summary:"Successful",detail:"Project Created",life:3e3})),this.projects=[...this.projects],this.projectDialog=!1,this.project={})}findIndexById(e){let i=-1;for(let n=0;n<this.projects.length;n++)if(this.projects[n].id===e){i=n;break}return i}createId(){return Math.max(...this.projects.map(e=>e.id))+1}onGlobalFilter(e,i){e.filterGlobal(i.target.value,"contains")}static#t=this.\u0275fac=function(i){return new(i||o)(t.Y36(p),t.Y36(y.y),t.Y36(_.ez))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-project"]],features:[t._Bn([_.ez])],decls:26,vars:27,consts:[[1,"grid"],[1,"col-12"],[1,"card","px-6","py-6"],["styleClass","mb-4"],["pTemplate","left"],["pTemplate","right"],["responsiveLayout","scroll","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries","selectionMode","multiple","dataKey","id",3,"value","columns","rows","globalFilterFields","paginator","rowsPerPageOptions","showCurrentPageReport","selection","rowHover","selectionChange"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["header","Project Details",1,"p-fluid",3,"visible","modal","visibleChange"],["pTemplate","content"],["pTemplate","footer"],["header","Confirm",3,"visible","modal","visibleChange"],[1,"flex","align-items-center","justify-content-center"],[1,"pi","pi-exclamation-triangle","mr-3",2,"font-size","2rem"],[4,"ngIf"],[1,"my-2"],["pButton","","pRipple","","label","New","icon","pi pi-plus",1,"p-button-success","mr-2",3,"click"],["pButton","","pRipple","","label","Delete","icon","pi pi-trash",1,"p-button-danger",3,"disabled","click"],["mode","basic","accept","image/*","label","Import","chooseLabel","Import",1,"mr-2","inline-block",3,"maxFileSize"],["pButton","","pRipple","","label","Export","icon","pi pi-upload",1,"p-button-help",3,"click"],[1,"flex","flex-column","md:flex-row","md:justify-content-between","md:align-items-center"],[1,"m-0"],[1,"block","mt-2","md:mt-0","p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search...",1,"w-full","sm:w-auto",3,"input"],[2,"width","3rem"],["pSortableColumn","id",2,"width","5%"],["field","id"],["pSortableColumn","name",2,"width","20%"],["field","name"],["pSortableColumn","clientId",2,"width","20%"],["field","clientId"],["pSortableColumn","address",2,"width","20%"],["field","address"],["pSortableColumn","description",2,"width","35%"],["field","description"],[2,"text-align","right"],[3,"value"],[1,"p-column-title"],[2,"max-width","150px","overflow","hidden","white-space","nowrap","text-overflow","ellipsis"],[1,"flex"],["pButton","","pRipple","","icon","pi pi-pencil",1,"p-button-rounded","p-button-success","mr-2",3,"click"],["pButton","","pRipple","","icon","pi pi-trash",1,"p-button-rounded","p-button-warning",3,"click"],[1,"field"],["for","name"],["type","text","pInputText","","id","name","required","","autofocus","",3,"ngModel","ngClass","ngModelChange"],["class","ng-dirty ng-invalid",4,"ngIf"],["for","clientId"],["inputId","clientId","placeholder","Select Client",3,"ngModel","options","ngModelChange"],["for","address"],["id","address","pInputTextarea","","required","","rows","3","cols","20",3,"ngModel","ngModelChange"],["for","description"],["id","description","pInputTextarea","","required","","rows","3","cols","20",3,"ngModel","ngModelChange"],[1,"ng-dirty","ng-invalid"],["pButton","","pRipple","","label","Cancel","icon","pi pi-times",1,"p-button-text",3,"click"],["pButton","","pRipple","","label","Save","icon","pi pi-check",1,"p-button-text",3,"click"],["pButton","","pRipple","","icon","pi pi-times","label","No",1,"p-button-text",3,"click"],["pButton","","pRipple","","icon","pi pi-check","label","Yes",1,"p-button-text",3,"click"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"p-toast"),t.TgZ(4,"p-toolbar",3),t.YNc(5,S,3,1,"ng-template",4),t.YNc(6,I,2,1,"ng-template",5),t.qZA(),t.TgZ(7,"p-table",6,7),t.NdJ("selectionChange",function(a){return n.selectedProjects=a}),t.YNc(9,w,6,0,"ng-template",8),t.YNc(10,D,20,0,"ng-template",9),t.YNc(11,N,28,6,"ng-template",10),t.qZA()(),t.TgZ(12,"p-dialog",11),t.NdJ("visibleChange",function(a){return n.projectDialog=a}),t.YNc(13,q,17,9,"ng-template",12),t.YNc(14,F,2,0,"ng-template",13),t.qZA(),t.TgZ(15,"p-dialog",14),t.NdJ("visibleChange",function(a){return n.deleteProjectDialog=a}),t.TgZ(16,"div",15),t._UZ(17,"i",16),t.YNc(18,H,5,1,"span",17),t.qZA(),t.YNc(19,E,2,0,"ng-template",13),t.qZA(),t.TgZ(20,"p-dialog",14),t.NdJ("visibleChange",function(a){return n.deleteProjectsDialog=a}),t.TgZ(21,"div",15),t._UZ(22,"i",16),t.TgZ(23,"span"),t._uU(24,"Are you sure you want to delete selected projects?"),t.qZA()(),t.YNc(25,k,2,0,"ng-template",13),t.qZA()()()),2&i&&(t.xp6(7),t.Q6J("value",n.projects)("columns",n.cols)("rows",10)("globalFilterFields",t.DdM(22,R))("paginator",!0)("rowsPerPageOptions",t.DdM(23,z))("showCurrentPageReport",!0)("selection",n.selectedProjects)("rowHover",!0),t.xp6(5),t.Akn(t.DdM(24,v)),t.Q6J("visible",n.projectDialog)("modal",!0),t.xp6(3),t.Akn(t.DdM(25,v)),t.Q6J("visible",n.deleteProjectDialog)("modal",!0),t.xp6(3),t.Q6J("ngIf",n.project),t.xp6(2),t.Akn(t.DdM(26,v)),t.Q6J("visible",n.deleteProjectsDialog)("modal",!0))},dependencies:[c.mk,c.O5,r.iA,_.jx,r.lQ,r.fz,r.UA,r.Mo,d.p,g.Hq,m.Fj,m.JJ,m.Q7,m.On,h.H,Z.FN,b.o,T.o,x.g,P.Lt,A.V]})}return o})()}];let K=(()=>{class o{static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275mod=t.oAB({type:o});static#n=this.\u0275inj=t.cJS({imports:[j.Bz.forChild(B),j.Bz]})}return o})();var O=l(5167),G=l(1865),Y=l(6022);let Q=(()=>{class o{static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275mod=t.oAB({type:o});static#n=this.\u0275inj=t.cJS({imports:[c.ez,r.U$,d.O,m.u5,g.hJ,h.T,Z.EV,b.V,Y.Xt,T.j,x.A,P.kW,G.cc,O.L$,A.S,K]})}return o})()},6218:(M,f,l)=>{l.d(f,{A:()=>C,g:()=>t});var c=l(4769),j=l(6814),_=l(95);let t=(()=>{class p{el;ngModel;control;cd;autoResize;onResize=new c.vpe;filled;cachedScrollHeight;ngModelSubscription;ngControlSubscription;constructor(r,d,g,m){this.el=r,this.ngModel=d,this.control=g,this.cd=m}ngOnInit(){this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}ngAfterViewInit(){this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}onInput(r){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}onFocus(r){this.autoResize&&this.resize(r)}onBlur(r){this.autoResize&&this.resize(r)}resize(r){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(r||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe()}static \u0275fac=function(d){return new(d||p)(c.Y36(c.SBq),c.Y36(_.On,8),c.Y36(_.a5,8),c.Y36(c.sBO))};static \u0275dir=c.lG2({type:p,selectors:[["","pInputTextarea",""]],hostAttrs:[1,"p-inputtextarea","p-inputtext","p-component","p-element"],hostVars:4,hostBindings:function(d,g){1&d&&c.NdJ("input",function(h){return g.onInput(h)})("focus",function(h){return g.onFocus(h)})("blur",function(h){return g.onBlur(h)}),2&d&&c.ekj("p-filled",g.filled)("p-inputtextarea-resizable",g.autoResize)},inputs:{autoResize:"autoResize"},outputs:{onResize:"onResize"}})}return p})(),C=(()=>{class p{static \u0275fac=function(d){return new(d||p)};static \u0275mod=c.oAB({type:p});static \u0275inj=c.cJS({imports:[j.ez]})}return p})()}}]);