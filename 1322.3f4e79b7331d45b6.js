"use strict";(self.webpackChunkarc_frontend=self.webpackChunkarc_frontend||[]).push([[1322],{3558:(D,x,o)=>{o.d(x,{X:()=>f});var s=o(4769),n=o(9862);let f=(()=>{class e{constructor(d){this.http=d}getTrades(){return this.http.get("assets/demo/data/trades.json")}static#e=this.\u0275fac=function(A){return new(A||e)(s.LFG(n.eN))};static#t=this.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})()},1322:(D,x,o)=>{o.r(x),o.d(x,{TradeModule:()=>G});var s=o(6814),n=o(5895),f=o(5219),e=o(4769),y=o(3558),d=o(9552),A=o(3722),p=o(707),u=o(95),_=o(4480),v=o(4104),b=o(6340),r=o(3714),Z=o(5167),c=o(1312);function h(i,T){if(1&i){const t=e.EpF();e.TgZ(0,"div",18)(1,"button",19),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.openNew())}),e.qZA(),e.TgZ(2,"button",20),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.deleteSelectedTrades())}),e.qZA()()}if(2&i){const t=e.oxw();e.xp6(2),e.Q6J("disabled",!t.selectedTrades||!t.selectedTrades.length)}}function C(i,T){if(1&i){const t=e.EpF();e._UZ(0,"p-fileUpload",21),e.TgZ(1,"button",22),e.NdJ("click",function(){e.CHM(t),e.oxw();const a=e.MAs(8);return e.KtG(a.exportCSV())}),e.qZA()}2&i&&e.Q6J("maxFileSize",1e6)}function N(i,T){if(1&i){const t=e.EpF();e.TgZ(0,"div",23)(1,"h5",24),e._uU(2,"Manage Trades"),e.qZA(),e.TgZ(3,"span",25),e._UZ(4,"i",26),e.TgZ(5,"input",27),e.NdJ("input",function(a){e.CHM(t);const m=e.oxw(),g=e.MAs(8);return e.KtG(m.onGlobalFilter(g,a))}),e.qZA()()()}}function M(i,T){1&i&&(e.TgZ(0,"tr")(1,"th",28),e._UZ(2,"p-tableHeaderCheckbox"),e.qZA(),e.TgZ(3,"th",29),e._uU(4," SL NO "),e._UZ(5,"p-sortIcon",30),e.qZA(),e.TgZ(6,"th",31),e._uU(7," Trade "),e._UZ(8,"p-sortIcon",32),e.qZA(),e.TgZ(9,"th",33),e._uU(10," Rate/Hrs. (AED) "),e._UZ(11,"p-sortIcon",34),e.qZA(),e.TgZ(12,"th",35),e._uU(13,"Action"),e.qZA()())}function E(i,T){if(1&i){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._UZ(2,"p-tableCheckbox",36),e.qZA(),e.TgZ(3,"td",37)(4,"span",38),e._uU(5,"SL NO"),e.qZA(),e._uU(6),e.qZA(),e.TgZ(7,"td",37)(8,"span",38),e._uU(9,"Trade"),e.qZA(),e._uU(10),e.qZA(),e.TgZ(11,"td",39)(12,"span",38),e._uU(13,"Rate/Hrs. (AED)"),e.qZA(),e._uU(14),e.ALo(15,"currency"),e.qZA(),e.TgZ(16,"td")(17,"div",40)(18,"button",41),e.NdJ("click",function(){const m=e.CHM(t).$implicit,g=e.oxw();return e.KtG(g.editTrade(m))}),e.qZA(),e.TgZ(19,"button",42),e.NdJ("click",function(){const m=e.CHM(t).$implicit,g=e.oxw();return e.KtG(g.deleteTrade(m))}),e.qZA()()()()}if(2&i){const t=T.$implicit;e.xp6(2),e.Q6J("value",t),e.xp6(4),e.hij(" ",t.slno," "),e.xp6(4),e.hij(" ",t.tradeName," "),e.xp6(4),e.hij(" ",e.xi3(15,4,t.rate,"AED ")," ")}}function w(i,T){1&i&&(e.TgZ(0,"small",51),e._uU(1,"Trade Name is required."),e.qZA())}const I=function(i){return{"ng-invalid ng-dirty":i}};function J(i,T){if(1&i){const t=e.EpF();e.TgZ(0,"div",43)(1,"label",44),e._uU(2,"Trade"),e.qZA(),e.TgZ(3,"input",45),e.NdJ("ngModelChange",function(a){e.CHM(t);const m=e.oxw();return e.KtG(m.trade.tradeName=a)}),e.qZA(),e.YNc(4,w,2,0,"small",46),e.qZA(),e.TgZ(5,"div",47)(6,"div",48)(7,"label",49),e._uU(8,"Rate"),e.qZA(),e.TgZ(9,"p-inputNumber",50),e.NdJ("ngModelChange",function(a){e.CHM(t);const m=e.oxw();return e.KtG(m.trade.rate=a)}),e.qZA()()()}if(2&i){const t=e.oxw();e.xp6(3),e.Q6J("ngModel",t.trade.tradeName)("ngClass",e.VKq(4,I,t.submitted&&!t.trade.tradeName)),e.xp6(1),e.Q6J("ngIf",t.submitted&&!t.trade.tradeName),e.xp6(5),e.Q6J("ngModel",t.trade.rate)}}function O(i,T){if(1&i){const t=e.EpF();e.TgZ(0,"button",52),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.hideDialog())}),e.qZA(),e.TgZ(1,"button",53),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.saveTrade())}),e.qZA()}}function U(i,T){if(1&i&&(e.TgZ(0,"span"),e._uU(1,"Are you sure you want to delete "),e.TgZ(2,"b"),e._uU(3),e.qZA(),e._uU(4,"?"),e.qZA()),2&i){const t=e.oxw();e.xp6(3),e.Oqu(t.trade.tradeName)}}function R(i,T){if(1&i){const t=e.EpF();e.TgZ(0,"button",54),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.deleteTradeDialog=!1)}),e.qZA(),e.TgZ(1,"button",55),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.confirmDelete())}),e.qZA()}}function F(i,T){if(1&i){const t=e.EpF();e.TgZ(0,"button",54),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.deleteTradesDialog=!1)}),e.qZA(),e.TgZ(1,"button",55),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.confirmDeleteSelected())}),e.qZA()}}const k=function(){return["slno","tradeName","rate"]},B=function(){return[10,20,30]},S=function(){return{width:"450px"}},H=[{path:"",component:(()=>{class i{constructor(t,l){this.tradeService=t,this.messageService=l,this.tradeDialog=!1,this.deleteTradeDialog=!1,this.deleteTradesDialog=!1,this.trades=[],this.trade={},this.selectedTrades=[],this.submitted=!1,this.cols=[],this.statuses=[],this.rowsPerPageOptions=[5,10,20]}ngOnInit(){this.tradeService.getTrades().subscribe(t=>this.trades=t),this.cols=[{field:"slno",header:"SL NO"},{field:"tradeName",header:"Trade"},{field:"rate",header:"Rate/Hrs. (AED)"}],this.statuses=[{label:"INSTOCK",value:"instock"},{label:"LOWSTOCK",value:"lowstock"},{label:"OUTOFSTOCK",value:"outofstock"}]}openNew(){this.trade={},this.submitted=!1,this.tradeDialog=!0}deleteSelectedTrades(){this.deleteTradesDialog=!0}editTrade(t){this.trade={...t},this.tradeDialog=!0}deleteTrade(t){this.deleteTradeDialog=!0,this.trade={...t}}confirmDeleteSelected(){this.deleteTradesDialog=!1,this.trades=this.trades.filter(t=>!this.selectedTrades.includes(t)),this.messageService.add({severity:"success",summary:"Successful",detail:"Trades Deleted",life:3e3}),this.selectedTrades=[]}confirmDelete(){this.deleteTradeDialog=!1,this.trades=this.trades.filter(t=>t.slno!==this.trade.slno),this.messageService.add({severity:"success",summary:"Successful",detail:"Trade Deleted",life:3e3}),this.trade={}}hideDialog(){this.tradeDialog=!1,this.submitted=!1}saveTrade(){this.submitted=!0,this.trade.tradeName?.trim()&&(this.trade.slno?(this.trades[this.findIndexById(this.trade.slno)]=this.trade,this.messageService.add({severity:"success",summary:"Successful",detail:"Trade Updated",life:3e3})):(this.trade.slno=this.createId(),this.trades.push(this.trade),this.messageService.add({severity:"success",summary:"Successful",detail:"Trade Created",life:3e3})),this.trades=[...this.trades],this.tradeDialog=!1,this.trade={})}findIndexById(t){let l=-1;for(let a=0;a<this.trades.length;a++)if(this.trades[a].slno===t){l=a;break}return l}createId(){return Math.max(...this.trades.map(t=>t.slno))+1}onGlobalFilter(t,l){t.filterGlobal(l.target.value,"contains")}static#e=this.\u0275fac=function(l){return new(l||i)(e.Y36(y.X),e.Y36(f.ez))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-trade"]],features:[e._Bn([f.ez])],decls:26,vars:27,consts:[[1,"grid"],[1,"col-12"],[1,"card","p-3"],["styleClass","mb-4"],["pTemplate","left"],["pTemplate","right"],["responsiveLayout","scroll","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries","selectionMode","multiple","dataKey","slno",3,"value","columns","rows","globalFilterFields","paginator","rowsPerPageOptions","showCurrentPageReport","selection","rowHover","selectionChange"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["header","Trade Details",1,"p-fluid",3,"visible","modal","visibleChange"],["pTemplate","content"],["pTemplate","footer"],["header","Confirm",3,"visible","modal","visibleChange"],[1,"flex","align-items-center","justify-content-center"],[1,"pi","pi-exclamation-triangle","mr-3",2,"font-size","2rem"],[4,"ngIf"],[1,"my-2"],["pButton","","pRipple","","label","New","icon","pi pi-plus",1,"p-button-success","mr-2",3,"click"],["pButton","","pRipple","","label","Delete","icon","pi pi-trash",1,"p-button-danger",3,"disabled","click"],["mode","basic","accept",".xls,.xlsx","label","Import","chooseLabel","Import",1,"mr-2","inline-block",3,"maxFileSize"],["pButton","","pRipple","","label","Export","icon","pi pi-upload",1,"p-button-help",3,"click"],[1,"flex","flex-column","md:flex-row","md:justify-content-between","md:align-items-center"],[1,"m-0"],[1,"block","mt-2","md:mt-0","p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search...",1,"w-full","sm:w-auto",3,"input"],[2,"width","3rem"],["pSortableColumn","slno",2,"width","30%"],["field","slno"],["pSortableColumn","tradeName",2,"width","30%"],["field","tradeName"],["pSortableColumn","rate",2,"width","30%"],["field","rate"],[2,"text-align","right"],[3,"value"],[2,"width","14%","min-width","10rem"],[1,"p-column-title"],[2,"width","14%","min-width","8rem"],[1,"flex"],["pButton","","pRipple","","icon","pi pi-pencil",1,"p-button-rounded","p-button-success","mr-2",3,"click"],["pButton","","pRipple","","icon","pi pi-trash",1,"p-button-rounded","p-button-warning",3,"click"],[1,"field"],["for","tradeName"],["type","text","pInputText","","id","tradeName","required","","autofocus","",3,"ngModel","ngClass","ngModelChange"],["class","ng-dirty ng-invalid",4,"ngIf"],[1,"formgrid","grid"],[1,"field","col"],["for","rate"],["id","rate","mode","currency","currency","AED","locale","en-US",3,"ngModel","ngModelChange"],[1,"ng-dirty","ng-invalid"],["pButton","","pRipple","","label","Cancel","icon","pi pi-times",1,"p-button-text",3,"click"],["pButton","","pRipple","","label","Save","icon","pi pi-check",1,"p-button-text",3,"click"],["pButton","","pRipple","","icon","pi pi-times","label","No",1,"p-button-text",3,"click"],["pButton","","pRipple","","icon","pi pi-check","label","Yes",1,"p-button-text",3,"click"]],template:function(l,a){1&l&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"p-toast"),e.TgZ(4,"p-toolbar",3),e.YNc(5,h,3,1,"ng-template",4),e.YNc(6,C,2,1,"ng-template",5),e.qZA(),e.TgZ(7,"p-table",6,7),e.NdJ("selectionChange",function(g){return a.selectedTrades=g}),e.YNc(9,N,6,0,"ng-template",8),e.YNc(10,M,14,0,"ng-template",9),e.YNc(11,E,20,7,"ng-template",10),e.qZA()(),e.TgZ(12,"p-dialog",11),e.NdJ("visibleChange",function(g){return a.tradeDialog=g}),e.YNc(13,J,10,6,"ng-template",12),e.YNc(14,O,2,0,"ng-template",13),e.qZA(),e.TgZ(15,"p-dialog",14),e.NdJ("visibleChange",function(g){return a.deleteTradeDialog=g}),e.TgZ(16,"div",15),e._UZ(17,"i",16),e.YNc(18,U,5,1,"span",17),e.qZA(),e.YNc(19,R,2,0,"ng-template",13),e.qZA(),e.TgZ(20,"p-dialog",14),e.NdJ("visibleChange",function(g){return a.deleteTradesDialog=g}),e.TgZ(21,"div",15),e._UZ(22,"i",16),e.TgZ(23,"span"),e._uU(24,"Are you sure you want to delete selected trades?"),e.qZA()(),e.YNc(25,F,2,0,"ng-template",13),e.qZA()()()),2&l&&(e.xp6(7),e.Q6J("value",a.trades)("columns",a.cols)("rows",10)("globalFilterFields",e.DdM(22,k))("paginator",!0)("rowsPerPageOptions",e.DdM(23,B))("showCurrentPageReport",!0)("selection",a.selectedTrades)("rowHover",!0),e.xp6(5),e.Akn(e.DdM(24,S)),e.Q6J("visible",a.tradeDialog)("modal",!0),e.xp6(3),e.Akn(e.DdM(25,S)),e.Q6J("visible",a.deleteTradeDialog)("modal",!0),e.xp6(3),e.Q6J("ngIf",a.trade),e.xp6(2),e.Akn(e.DdM(26,S)),e.Q6J("visible",a.deleteTradesDialog)("modal",!0))},dependencies:[s.mk,s.O5,d.iA,f.jx,d.lQ,d.fz,d.UA,d.Mo,A.p,p.Hq,u.Fj,u.JJ,u.Q7,u.On,_.H,v.FN,b.o,r.o,Z.Rn,c.V,s.H9]})}return i})()}];let z=(()=>{class i{static#e=this.\u0275fac=function(l){return new(l||i)};static#t=this.\u0275mod=e.oAB({type:i});static#n=this.\u0275inj=e.cJS({imports:[n.Bz.forChild(H),n.Bz]})}return i})();var K=o(3965),P=o(6218),Y=o(1865),q=o(6022);let G=(()=>{class i{static#e=this.\u0275fac=function(l){return new(l||i)};static#t=this.\u0275mod=e.oAB({type:i});static#n=this.\u0275inj=e.cJS({imports:[s.ez,d.U$,A.O,u.u5,p.hJ,_.T,v.EV,b.V,q.Xt,r.j,P.A,K.kW,Y.cc,Z.L$,c.S,z]})}return i})()},6218:(D,x,o)=>{o.d(x,{A:()=>y,g:()=>e});var s=o(4769),n=o(6814),f=o(95);let e=(()=>{class d{el;ngModel;control;cd;autoResize;onResize=new s.vpe;filled;cachedScrollHeight;ngModelSubscription;ngControlSubscription;constructor(p,u,_,v){this.el=p,this.ngModel=u,this.control=_,this.cd=v}ngOnInit(){this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}ngAfterViewInit(){this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}onInput(p){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}onFocus(p){this.autoResize&&this.resize(p)}onBlur(p){this.autoResize&&this.resize(p)}resize(p){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(p||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe()}static \u0275fac=function(u){return new(u||d)(s.Y36(s.SBq),s.Y36(f.On,8),s.Y36(f.a5,8),s.Y36(s.sBO))};static \u0275dir=s.lG2({type:d,selectors:[["","pInputTextarea",""]],hostAttrs:[1,"p-inputtextarea","p-inputtext","p-component","p-element"],hostVars:4,hostBindings:function(u,_){1&u&&s.NdJ("input",function(b){return _.onInput(b)})("focus",function(b){return _.onFocus(b)})("blur",function(b){return _.onBlur(b)}),2&u&&s.ekj("p-filled",_.filled)("p-inputtextarea-resizable",_.autoResize)},inputs:{autoResize:"autoResize"},outputs:{onResize:"onResize"}})}return d})(),y=(()=>{class d{static \u0275fac=function(u){return new(u||d)};static \u0275mod=s.oAB({type:d});static \u0275inj=s.cJS({imports:[n.ez]})}return d})()},6340:(D,x,o)=>{o.d(x,{V:()=>b,o:()=>v});var s=o(6814),n=o(4769),f=o(5219);function e(r,Z){1&r&&n.GkF(0)}function y(r,Z){if(1&r&&(n.TgZ(0,"div",4),n.YNc(1,e,1,0,"ng-container",5),n.qZA()),2&r){const c=n.oxw();n.xp6(1),n.Q6J("ngTemplateOutlet",c.startTemplate)}}function d(r,Z){1&r&&n.GkF(0)}function A(r,Z){if(1&r&&(n.TgZ(0,"div",6),n.YNc(1,d,1,0,"ng-container",5),n.qZA()),2&r){const c=n.oxw();n.xp6(1),n.Q6J("ngTemplateOutlet",c.centerTemplate)}}function p(r,Z){1&r&&n.GkF(0)}function u(r,Z){if(1&r&&(n.TgZ(0,"div",7),n.YNc(1,p,1,0,"ng-container",5),n.qZA()),2&r){const c=n.oxw();n.xp6(1),n.Q6J("ngTemplateOutlet",c.endTemplate)}}const _=["*"];let v=(()=>{class r{el;style;styleClass;templates;startTemplate;endTemplate;centerTemplate;constructor(c){this.el=c}getBlockableElement(){return this.el.nativeElement.children[0]}ngAfterContentInit(){this.templates.forEach(c=>{switch(c.getType()){case"left":this.startTemplate=c.template;break;case"right":this.endTemplate=c.template;break;case"center":this.centerTemplate=c.template}})}static \u0275fac=function(h){return new(h||r)(n.Y36(n.SBq))};static \u0275cmp=n.Xpm({type:r,selectors:[["p-toolbar"]],contentQueries:function(h,C,N){if(1&h&&n.Suo(N,f.jx,4),2&h){let M;n.iGM(M=n.CRH())&&(C.templates=M)}},hostAttrs:[1,"p-element"],inputs:{style:"style",styleClass:"styleClass"},ngContentSelectors:_,decls:5,vars:7,consts:[["role","toolbar",3,"ngClass","ngStyle"],["class","p-toolbar-group-left p-toolbar-group-start",4,"ngIf"],["class","p-toolbar-group-center",4,"ngIf"],["class","p-toolbar-group-right p-toolbar-group-end",4,"ngIf"],[1,"p-toolbar-group-left","p-toolbar-group-start"],[4,"ngTemplateOutlet"],[1,"p-toolbar-group-center"],[1,"p-toolbar-group-right","p-toolbar-group-end"]],template:function(h,C){1&h&&(n.F$t(),n.TgZ(0,"div",0),n.Hsn(1),n.YNc(2,y,2,1,"div",1),n.YNc(3,A,2,1,"div",2),n.YNc(4,u,2,1,"div",3),n.qZA()),2&h&&(n.Tol(C.styleClass),n.Q6J("ngClass","p-toolbar p-component")("ngStyle",C.style),n.xp6(2),n.Q6J("ngIf",C.startTemplate),n.xp6(1),n.Q6J("ngIf",C.centerTemplate),n.xp6(1),n.Q6J("ngIf",C.endTemplate))},dependencies:[s.mk,s.O5,s.tP,s.PC],styles:[".p-toolbar{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap}.p-toolbar-group-start,.p-toolbar-group-center,.p-toolbar-group-end,.p-toolbar-group-left,.p-toolbar-group-right{display:flex;align-items:center}\n"],encapsulation:2,changeDetection:0})}return r})(),b=(()=>{class r{static \u0275fac=function(h){return new(h||r)};static \u0275mod=n.oAB({type:r});static \u0275inj=n.cJS({imports:[s.ez]})}return r})()}}]);