(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{xInB:function(e,t,i){"use strict";i.r(t),i.d(t,"LoginPageModule",function(){return L});var o=i("ofXK"),r=i("3Pt+"),n=i("TEn/"),s=i("tyNb"),a=i("fXoL"),c=i("lGQG"),b=i("rNwt"),l=i("JqCM"),f=i("fePz"),u=i("5eHb");function g(e,t){if(1&e&&(a.Qb(0,"div",9),a.Mb(1,"i",19),a.tc(2),a.Pb()),2&e){const e=a.ac().$implicit;a.Ab(2),a.vc(" ",e.message," ")}}function d(e,t){if(1&e&&(a.Qb(0,"div"),a.sc(1,g,3,1,"div",18),a.Pb()),2&e){const e=t.$implicit,i=a.ac();a.Ab(1),a.gc("ngIf",i.newForm.get("email").hasError(e.type)&&(i.newForm.get("email").dirty||i.newForm.get("email").touched))}}function m(e,t){1&e&&a.Mb(0,"i",20)}function p(e,t){1&e&&a.Mb(0,"i",21)}function h(e,t){if(1&e&&(a.Qb(0,"div",9),a.Mb(1,"i",19),a.tc(2),a.Pb()),2&e){const e=a.ac().$implicit;a.Ab(2),a.vc(" ",e.message," ")}}function w(e,t){if(1&e&&(a.Qb(0,"div"),a.sc(1,h,3,1,"div",18),a.Pb()),2&e){const e=t.$implicit,i=a.ac();a.Ab(1),a.gc("ngIf",i.newForm.get("password").hasError(e.type)&&(i.newForm.get("password").dirty||i.newForm.get("password").touched))}}const v=function(e){return[e]};let P=(()=>{class e{constructor(e,t,i){this.fb=e,this.router=t,this.geoService=i,this.formTitle="",this.notifyParent=new a.o,this.regexEmail=new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),this.showPass=!1}ngOnInit(){this.newForm=this.fb.group(this.formObject())}formObject(){return this.fieldLabels={email:"email",password:"password"},this.validationMessages={email:[{type:"required",message:`${this.fieldLabels.email} required.`},{type:"pattern",message:`Enter valid ${this.fieldLabels.email} in acceptable format (example:abc@xyz.com)`}],password:[{type:"required",message:`${this.fieldLabels.password} required.`}]},{email:["",[r.q.required,r.q.pattern(this.regexEmail)]],password:["",[r.q.required]]}}onCancel(){this.notifyParent.emit(null)}onSubmit(){this.notifyParent.emit(this.newForm.value)}}return e.\u0275fac=function(t){return new(t||e)(a.Lb(r.c),a.Lb(s.h),a.Lb(f.a))},e.\u0275cmp=a.Fb({type:e,selectors:[["app-form-in-account2"]],outputs:{notifyParent:"notifyParent"},decls:30,vars:12,consts:[[1,"d-flex","flex-row","justify-content-center",3,"formGroup"],[1,"form-group","text-center","w-75"],[1,"nav","nav-pills","nav-tabs","flex-row","my-2"],[1,"flex-fill","text-center","nav-link",3,"routerLink"],["aria-current","page",1,"flex-fill","text-center","nav-link","active","fw-bold"],[1,"my-2"],[1,"form-floating"],["formControlName","email","id","fl1","type","email","inputmode","email","placeholder",".",1,"form-control"],["for","fl1",1,"red-color"],[1,"red-color"],[4,"ngFor","ngForOf"],[1,"input-group","d-flex","flex-row","justify-content-between"],[1,"form-floating","w-75"],["formControlName","password","id","fl1","placeholder",".",1,"form-control",3,"type"],[1,"input-group-text",3,"click"],["class","fa fa-eye-slash",4,"ngIf"],["class","fa fa-eye",4,"ngIf"],[1,"btn","btn-primary","btn-lg","my-3","w-100",3,"disabled","click"],["class","red-color",4,"ngIf"],[1,"fa","fa-exclamation-circle"],[1,"fa","fa-eye-slash"],[1,"fa","fa-eye"]],template:function(e,t){1&e&&(a.Qb(0,"form",0),a.Qb(1,"div",1),a.Qb(2,"nav",2),a.Qb(3,"a",3),a.tc(4,"Register"),a.Pb(),a.Qb(5,"a",4),a.tc(6,"Login"),a.Pb(),a.Pb(),a.Qb(7,"div",5),a.Qb(8,"div",6),a.Mb(9,"input",7),a.Qb(10,"label",8),a.tc(11),a.Qb(12,"span",9),a.tc(13,"*"),a.Pb(),a.Pb(),a.Pb(),a.sc(14,d,2,1,"div",10),a.Pb(),a.Qb(15,"div",5),a.Qb(16,"div",11),a.Qb(17,"div",12),a.Mb(18,"input",13),a.Qb(19,"label",8),a.tc(20),a.Qb(21,"span",9),a.tc(22,"*"),a.Pb(),a.Pb(),a.Pb(),a.Qb(23,"span",14),a.Yb("click",function(){return t.showPass=!t.showPass}),a.sc(24,m,1,0,"i",15),a.sc(25,p,1,0,"i",16),a.Pb(),a.Pb(),a.sc(26,w,2,1,"div",10),a.Pb(),a.Qb(27,"div"),a.Qb(28,"button",17),a.Yb("click",function(){return t.onSubmit()}),a.tc(29,"Login"),a.Pb(),a.Pb(),a.Pb(),a.Pb()),2&e&&(a.gc("formGroup",t.newForm),a.Ab(3),a.gc("routerLink",a.kc(10,v,t.geoService.pageUrls.register)),a.Ab(8),a.vc("Enter ",t.fieldLabels.email," "),a.Ab(3),a.gc("ngForOf",t.validationMessages.email),a.Ab(4),a.gc("type",t.showPass?"text":"password"),a.Ab(2),a.vc("Enter ",t.fieldLabels.password," "),a.Ab(4),a.gc("ngIf",t.showPass),a.Ab(1),a.gc("ngIf",!t.showPass),a.Ab(1),a.gc("ngForOf",t.validationMessages.password),a.Ab(2),a.gc("disabled",!t.newForm.valid))},directives:[r.r,r.l,r.e,s.j,n.s,r.b,r.k,r.d,o.k,o.l],styles:[""]}),e})();const y=function(e){return[e]},Q=[{path:"",component:(()=>{class e{constructor(e,t,i,o,r){this.authService=e,this.bsService=t,this.spinner=i,this.geoService=o,this.toastService=r,this.flagShowLogin=!0,this.flagShowForgotPassword=!1}ngOnInit(){}login(e){this.spinner.show(),this.authService.login(e.email.toLowerCase(),e.password).subscribe(e=>{this.spinner.hide(),console.log(e),e.token&&localStorage.setItem("authToken","Bearer "+e.token),this.toastService.success("\tCongratulations...!!! You have successfully logged-in."),this.setGlobalVaribleWithoutApi(e.userGlob)},e=>{this.spinner.hide(),this.toastService.error(e.error.message)})}setGlobalVaribleWithoutApi(e){localStorage.removeItem("userGlob"),localStorage.setItem("userGlob",JSON.stringify(e)),this.bsService.userGlobalObjSetter(e),setTimeout(()=>{window.location.reload()},500)}}return e.\u0275fac=function(t){return new(t||e)(a.Lb(c.a),a.Lb(b.a),a.Lb(l.c),a.Lb(f.a),a.Lb(u.b))},e.\u0275cmp=a.Fb({type:e,selectors:[["app-login"]],decls:22,vars:6,consts:[[1,"bg-primary","text-white"],[1,"d-flex","flex-row","justify-content-between","align-items-center","m-1"],[1,"btn","btn-primary",3,"click"],[1,"fa","fa-bars"],[1,"col"],[1,"m-0"],[1,"d-flex","flex-column","justify-content-center","h-100"],[1,"text-center"],["src","assets/images/logo.png","height","170px",1,"mb-4"],[3,"notifyParent"],[1,"mt-5",3,"routerLink"],[1,"mt-1",3,"routerLink"],[2,"font-size","20px","color","white"]],template:function(e,t){1&e&&(a.Qb(0,"ion-header",0),a.Qb(1,"div",1),a.Qb(2,"div"),a.Qb(3,"button",2),a.Yb("click",function(){return t.geoService.openMenu()}),a.Mb(4,"i",3),a.Pb(),a.Pb(),a.Qb(5,"div",4),a.Qb(6,"h4",5),a.tc(7,"Login"),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(8,"ion-content"),a.Qb(9,"div",6),a.Qb(10,"div",7),a.Mb(11,"img",8),a.Qb(12,"app-form-in-account2",9),a.Yb("notifyParent",function(e){return t.login(e)}),a.Pb(),a.Qb(13,"p"),a.tc(14,"Don't have an account? "),a.Qb(15,"a",10),a.tc(16,"Register Now"),a.Pb(),a.Pb(),a.Qb(17,"a",11),a.tc(18,"Forgot Password?"),a.Pb(),a.Pb(),a.Pb(),a.Qb(19,"ngx-spinner"),a.Qb(20,"p",12),a.tc(21,"Loading.."),a.Pb(),a.Pb(),a.Pb()),2&e&&(a.Ab(15),a.gc("routerLink",a.kc(2,y,t.geoService.pageUrls.register)),a.Ab(2),a.gc("routerLink",a.kc(4,y,t.geoService.pageUrls.forgotPass)))},directives:[n.c,n.b,P,s.j,n.s,l.a],styles:[""]}),e})()}];let x=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.Jb({type:e}),e.\u0275inj=a.Ib({imports:[[s.k.forChild(Q)],s.k]}),e})(),L=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.Jb({type:e}),e.\u0275inj=a.Ib({imports:[[o.b,r.f,r.o,n.o,l.b,x]]}),e})()}}]);