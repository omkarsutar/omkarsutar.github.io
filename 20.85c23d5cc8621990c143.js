(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"2w85":function(e,t,i){"use strict";i.r(t),i.d(t,"RegisterPageModule",function(){return q});var r=i("ofXK"),s=i("3Pt+"),o=i("TEn/"),n=i("tyNb"),a=i("fXoL"),c=i("lGQG"),l=i("rNwt"),b=i("JqCM"),m=i("5eHb"),f=i("fePz");function u(e,t){if(1&e&&(a.Qb(0,"div",9),a.Mb(1,"i",13),a.tc(2),a.Pb()),2&e){const e=a.ac().$implicit;a.Ab(2),a.vc(" ",e.message," ")}}function h(e,t){if(1&e&&(a.Qb(0,"div"),a.sc(1,u,3,1,"div",12),a.Pb()),2&e){const e=t.$implicit,i=a.ac();a.Ab(1),a.gc("ngIf",i.newForm.get("email").hasError(e.type)&&(i.newForm.get("email").dirty||i.newForm.get("email").touched))}}const d=function(e){return[e]};let p=(()=>{class e{constructor(e,t,i){this.fb=e,this.router=t,this.geoService=i,this.formTitle="",this.notifyParent=new a.o,this.regexEmail=new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")}ngOnInit(){this.newForm=this.fb.group(this.formObject())}formObject(){return this.fieldLabels={email:"email"},this.validationMessages={email:[{type:"required",message:`${this.fieldLabels.email} required.`},{type:"pattern",message:`Enter valid ${this.fieldLabels.email} in acceptable format (example:abc@xyz.com)`}]},{email:["",[s.q.required,s.q.pattern(this.regexEmail)]]}}onCancel(){this.notifyParent.emit(null)}onSubmit(){this.notifyParent.emit(this.newForm.value.email)}}return e.\u0275fac=function(t){return new(t||e)(a.Lb(s.c),a.Lb(n.h),a.Lb(f.a))},e.\u0275cmp=a.Fb({type:e,selectors:[["app-form-in-account1"]],outputs:{notifyParent:"notifyParent"},decls:18,vars:7,consts:[[1,"d-flex","flex-row","justify-content-center",3,"formGroup"],[1,"form-group","text-center","w-75"],[1,"nav","nav-pills","nav-tabs","flex-row","my-2"],["aria-current","page",1,"flex-fill","text-center","nav-link","active","fw-bold"],[1,"flex-fill","text-center","nav-link",3,"routerLink"],[1,"d-flex","flex-column","justify-content-center"],[1,"form-floating"],["formControlName","email","id","fl1","type","email","placeholder",".",1,"form-control"],["for","fl1",1,"red-color"],[1,"red-color"],[4,"ngFor","ngForOf"],[1,"btn","btn-primary","btn-lg","my-3","w-100",3,"disabled","click"],["class","red-color",4,"ngIf"],[1,"fa","fa-exclamation-circle"]],template:function(e,t){1&e&&(a.Qb(0,"form",0),a.Qb(1,"div",1),a.Qb(2,"nav",2),a.Qb(3,"a",3),a.tc(4,"Register"),a.Pb(),a.Qb(5,"a",4),a.tc(6,"Login"),a.Pb(),a.Pb(),a.Qb(7,"div",5),a.Qb(8,"div",6),a.Mb(9,"input",7),a.Qb(10,"label",8),a.tc(11),a.Qb(12,"span",9),a.tc(13,"*"),a.Pb(),a.Pb(),a.Pb(),a.sc(14,h,2,1,"div",10),a.Pb(),a.Qb(15,"div"),a.Qb(16,"button",11),a.Yb("click",function(){return t.onSubmit()}),a.tc(17,"Get OTP"),a.Pb(),a.Pb(),a.Pb(),a.Pb()),2&e&&(a.gc("formGroup",t.newForm),a.Ab(5),a.gc("routerLink",a.kc(5,d,t.geoService.pageUrls.login)),a.Ab(6),a.vc("Enter ",t.fieldLabels.email," "),a.Ab(3),a.gc("ngForOf",t.validationMessages.email),a.Ab(2),a.gc("disabled",!t.newForm.valid))},directives:[s.r,s.l,s.e,n.j,o.s,s.b,s.k,s.d,r.k,r.l],styles:[""]}),e})();function g(e,t){if(1&e&&(a.Qb(0,"div",6),a.Mb(1,"i",19),a.tc(2),a.Pb()),2&e){const e=a.ac().$implicit;a.Ab(2),a.vc(" ",e.message," ")}}function v(e,t){if(1&e&&(a.Qb(0,"div"),a.sc(1,g,3,1,"div",18),a.Pb()),2&e){const e=t.$implicit,i=a.ac();a.Ab(1),a.gc("ngIf",i.newForm.get("email").hasError(e.type)&&(i.newForm.get("email").dirty||i.newForm.get("email").touched))}}function P(e,t){if(1&e&&(a.Qb(0,"div",6),a.Mb(1,"i",19),a.tc(2),a.Pb()),2&e){const e=a.ac().$implicit;a.Ab(2),a.vc(" ",e.message," ")}}function y(e,t){if(1&e&&(a.Qb(0,"div"),a.sc(1,P,3,1,"div",18),a.Pb()),2&e){const e=t.$implicit,i=a.ac();a.Ab(1),a.gc("ngIf",i.newForm.get("otp").hasError(e.type)&&(i.newForm.get("otp").dirty||i.newForm.get("otp").touched))}}function w(e,t){1&e&&a.Mb(0,"i",20)}function Q(e,t){1&e&&a.Mb(0,"i",21)}function S(e,t){if(1&e&&(a.Qb(0,"div",6),a.Mb(1,"i",19),a.tc(2),a.Pb()),2&e){const e=a.ac().$implicit;a.Ab(2),a.vc(" ",e.message," ")}}function A(e,t){if(1&e&&(a.Qb(0,"div"),a.sc(1,S,3,1,"div",18),a.Pb()),2&e){const e=t.$implicit,i=a.ac();a.Ab(1),a.gc("ngIf",i.newForm.get("password").hasError(e.type)&&(i.newForm.get("password").dirty||i.newForm.get("password").touched))}}function O(e,t){if(1&e&&(a.Qb(0,"div",6),a.Mb(1,"i",19),a.tc(2),a.Pb()),2&e){const e=a.ac().$implicit;a.Ab(2),a.vc(" ",e.message," ")}}function x(e,t){if(1&e&&(a.Qb(0,"div"),a.sc(1,O,3,1,"div",18),a.Pb()),2&e){const e=t.$implicit,i=a.ac();a.Ab(1),a.gc("ngIf",i.newForm.get("isPrivacyPolicyAndTermsOfServiceAccepted").hasError(e.type)&&(i.newForm.get("isPrivacyPolicyAndTermsOfServiceAccepted").dirty||i.newForm.get("isPrivacyPolicyAndTermsOfServiceAccepted").touched))}}const F=function(){return[]};let L=(()=>{class e{constructor(e,t){this.fb=e,this.router=t,this.formTitle="",this.notifyParent=new a.o,this.regexEmail=new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),this.showPass=!1}ngOnInit(){this.newForm=this.fb.group(this.formObject())}formObject(){return this.fieldLabels={email:"email",otp:"OTP",password:"password",isPrivacyPolicyAndTermsOfServiceAccepted:""},this.validationMessages={email:[{type:"required",message:`${this.fieldLabels.email} required.`},{type:"pattern",message:`Enter valid ${this.fieldLabels.email} in acceptable format (example:abc@xyz.com)`}],otp:[{type:"required",message:`${this.fieldLabels.otp} required.`}],password:[{type:"required",message:`${this.fieldLabels.password} required.`}],isPrivacyPolicyAndTermsOfServiceAccepted:[{type:"required",message:`${this.fieldLabels.isPrivacyPolicyAndTermsOfServiceAccepted} required.`}]},{email:[this.email,[s.q.required,s.q.pattern(this.regexEmail)]],otp:["",[s.q.required]],password:["",[s.q.required]],isPrivacyPolicyAndTermsOfServiceAccepted:["",[s.q.required]]}}onCancel(){this.notifyParent.emit(null)}onSubmit(){this.notifyParent.emit(this.newForm.value)}}return e.\u0275fac=function(t){return new(t||e)(a.Lb(s.c),a.Lb(n.h))},e.\u0275cmp=a.Fb({type:e,selectors:[["app-form-in-account4"]],inputs:{email:"email"},outputs:{notifyParent:"notifyParent"},decls:42,vars:16,consts:[[1,"d-flex","flex-row","justify-content-center",3,"formGroup"],[1,"form-group","text-center","w-75"],[1,"my-2"],[1,"form-floating"],["readonly","","formControlName","email","id","fl1","type","email","placeholder",".",1,"form-control","red-color"],["for","fl1",1,"red-color"],[1,"red-color"],[4,"ngFor","ngForOf"],["formControlName","otp","id","fl1","type","text","inputmode","numeric","placeholder",".",1,"form-control"],[1,"input-group","d-flex","flex-row","justify-content-between"],[1,"form-floating","w-75"],["formControlName","password","id","fl1","placeholder",".",1,"form-control",3,"type"],[1,"input-group-text",3,"click"],["class","fa fa-eye-slash",4,"ngIf"],["class","fa fa-eye",4,"ngIf"],["formControlName","isPrivacyPolicyAndTermsOfServiceAccepted","type","checkbox",1,"form-check-input"],[3,"routerLink"],[1,"btn","btn-primary","btn-lg","my-3","w-100",3,"disabled","click"],["class","red-color",4,"ngIf"],[1,"fa","fa-exclamation-circle"],[1,"fa","fa-eye-slash"],[1,"fa","fa-eye"]],template:function(e,t){1&e&&(a.Qb(0,"form",0),a.Qb(1,"div",1),a.Qb(2,"div",2),a.Qb(3,"div",3),a.Mb(4,"input",4),a.Qb(5,"label",5),a.tc(6),a.Qb(7,"span",6),a.tc(8,"*"),a.Pb(),a.Pb(),a.Pb(),a.sc(9,v,2,1,"div",7),a.Pb(),a.Qb(10,"div",2),a.Qb(11,"div",3),a.Mb(12,"input",8),a.Qb(13,"label",5),a.tc(14),a.Qb(15,"span",6),a.tc(16,"*"),a.Pb(),a.Pb(),a.Pb(),a.sc(17,y,2,1,"div",7),a.Pb(),a.Qb(18,"div",2),a.Qb(19,"div",9),a.Qb(20,"div",10),a.Mb(21,"input",11),a.Qb(22,"label",5),a.tc(23),a.Qb(24,"span",6),a.tc(25,"*"),a.Pb(),a.Pb(),a.Pb(),a.Qb(26,"span",12),a.Yb("click",function(){return t.showPass=!t.showPass}),a.sc(27,w,1,0,"i",13),a.sc(28,Q,1,0,"i",14),a.Pb(),a.Pb(),a.sc(29,A,2,1,"div",7),a.Pb(),a.Qb(30,"div"),a.Mb(31,"input",15),a.tc(32," I accept the "),a.Qb(33,"a",16),a.tc(34,"Privacy Policy"),a.Pb(),a.tc(35," and the "),a.Qb(36,"a",16),a.tc(37,"Terms of Service"),a.Pb(),a.Pb(),a.sc(38,x,2,1,"div",7),a.Qb(39,"div"),a.Qb(40,"button",17),a.Yb("click",function(){return t.onSubmit()}),a.tc(41,"Register"),a.Pb(),a.Pb(),a.Pb(),a.Pb()),2&e&&(a.gc("formGroup",t.newForm),a.Ab(6),a.vc("Enter ",t.fieldLabels.email," "),a.Ab(3),a.gc("ngForOf",t.validationMessages.email),a.Ab(5),a.vc("Enter ",t.fieldLabels.otp," "),a.Ab(3),a.gc("ngForOf",t.validationMessages.otp),a.Ab(4),a.gc("type",t.showPass?"text":"password"),a.Ab(2),a.vc("Enter ",t.fieldLabels.password," "),a.Ab(4),a.gc("ngIf",t.showPass),a.Ab(1),a.gc("ngIf",!t.showPass),a.Ab(1),a.gc("ngForOf",t.validationMessages.password),a.Ab(4),a.gc("routerLink",a.jc(14,F)),a.Ab(3),a.gc("routerLink",a.jc(15,F)),a.Ab(2),a.gc("ngForOf",t.validationMessages.isPrivacyPolicyAndTermsOfServiceAccepted),a.Ab(2),a.gc("disabled",!t.newForm.valid))},directives:[s.r,s.l,s.e,s.b,s.k,s.d,r.k,r.l,s.a,n.j,o.s],styles:[""]}),e})();const I=function(e){return[e]};function k(e,t){if(1&e){const e=a.Rb();a.Qb(0,"div",8),a.Qb(1,"div",9),a.Mb(2,"img",10),a.Qb(3,"app-form-in-account1",11),a.Yb("notifyParent",function(t){return a.mc(e),a.ac().verifyEmail(t)}),a.Pb(),a.Qb(4,"p"),a.tc(5,"Already have an account? "),a.Qb(6,"a",12),a.tc(7,"Login Now"),a.Pb(),a.Pb(),a.Pb(),a.Pb()}if(2&e){const e=a.ac();a.Ab(6),a.gc("routerLink",a.kc(1,I,e.geoService.pageUrls.login))}}function T(e,t){if(1&e){const e=a.Rb();a.Qb(0,"div",8),a.Qb(1,"div",9),a.Mb(2,"img",10),a.Qb(3,"app-form-in-account4",13),a.Yb("notifyParent",function(t){return a.mc(e),a.ac().verifyOTP(t)}),a.Pb(),a.Qb(4,"div",14),a.tc(5,"Did not get OTP? "),a.Qb(6,"a",15),a.Yb("click",function(){return a.mc(e),a.ac().regenerateOTP()}),a.tc(7,"Click Here"),a.Pb(),a.Pb(),a.Pb(),a.Pb()}if(2&e){const e=a.ac();a.Ab(3),a.gc("email",e.emailID)}}const M=[{path:"",component:(()=>{class e{constructor(e,t,i,r,s,o){this.authService=e,this.bsService=t,this.router=i,this.spinner=r,this.toastService=s,this.geoService=o,this.waitForOtp=!1,this.timeLeft=30,this.ipData={}}ngOnInit(){}getIpData(){this.geoService.GetTimeZones().subscribe(e=>{this.timeZones=e}),this.geoService.GetAllCountries().subscribe(e=>{this.countries=e}),setTimeout(()=>{this.authService.getIpData().subscribe(e=>{this.countries&&(this.ipData.country=this.countries.filter(t=>t.country===e.location.country.name)[0]),this.timeZones&&(this.ipData.timeZone=this.timeZones.filter(t=>t.timeZoneDetails.includes(e.time_zone.current_time.substr(e.time_zone.current_time.length-6)))[0]),setTimeout(()=>{this.ipData.country&&this.geoService.GetAllStates(this.ipData.country.countryID).subscribe(t=>{this.states=t,this.ipData.state=this.states.filter(t=>t.stateName===e.location.region.name)[0]})},2e3)},e=>{this.spinner.hide(),this.toastService.error(e.error.message)})},3e3)}saveUser(){this.firstName=this.emailID.split("@")[0],this.spinner.show(),this.authService.saveDetailsOnRegistration(this.firstName,this.emailID,25,1,"",this.ipData.country.countryID,this.ipData.state.stateID,this.ipData.timeZone.timeZoneID,this.userId,null).subscribe(e=>{"SUCCESS"===e.status&&(this.spinner.hide(),this.setGlobalVarible(),setTimeout(()=>{this.router.navigate([this.geoService.pageUrls.profile])},500))},e=>{this.spinner.hide(),this.toastService.error(e.error.message)})}setGlobalVarible(){this.spinner.show(),this.authService.setGlobalVarible(this.userId).subscribe(e=>{this.spinner.hide(),localStorage.removeItem("userGlob"),localStorage.setItem("userGlob",JSON.stringify(e)),this.bsService.userGlobalObjSetter(e),setTimeout(()=>{window.location.reload()},500)},e=>{this.spinner.hide(),this.toastService.error(e.error.message)})}setGlobalVaribleWithoutApi(e){localStorage.removeItem("userGlob"),localStorage.setItem("userGlob",JSON.stringify(e)),this.bsService.userGlobalObjSetter(e),setTimeout(()=>{window.location.reload()},500)}verifyEmail(e){this.emailID=e,this.spinner.show(),this.authService.getotpForNewEmail(e.toLowerCase()).subscribe(e=>{this.spinner.hide(),this.toastService.success(e.message),this.flagShowOTP=!0,this.waitTill30()},e=>{this.spinner.hide(),this.toastService.error(e.error.message)})}regenerateOTP(){this.waitForOtp?this.toastService.info(`Wait for ${this.timeLeft} seconds`):(this.spinner.show(),this.authService.getotpForNewEmail(this.emailID.toLowerCase()).subscribe(e=>{this.spinner.hide(),this.toastService.success(e.message),this.flagShowOTP=!0,this.waitTill30()},e=>{this.spinner.hide(),this.toastService.error(e.error.message)}))}verifyOTP(e){this.event=e,this.registerUser()}registerUser(){this.spinner.show(),this.authService.verifyotpForNewEmail(this.event.email,this.event.otp,this.event.password).subscribe(e=>{this.spinner.hide(),console.log(e),e.token&&localStorage.setItem("authToken","Bearer "+e.token),this.toastService.success("\tCongratulations...!!! You have successfully registered."),this.setGlobalVaribleWithoutApi(e.userGlob)},e=>{this.spinner.hide(),this.toastService.error(e.error.message)})}waitTill30(){this.waitForOtp=!0,this.timeLeft=30,!0===this.waitForOtp&&(this.interval=setInterval(()=>{this.timeLeft>0&&this.timeLeft--},1e3)),setTimeout(()=>{this.waitForOtp=!1,this.timeLeft=0,clearInterval(this.interval)},3e4)}}return e.\u0275fac=function(t){return new(t||e)(a.Lb(c.a),a.Lb(l.a),a.Lb(n.h),a.Lb(b.c),a.Lb(m.b),a.Lb(f.a))},e.\u0275cmp=a.Fb({type:e,selectors:[["app-register"]],decls:14,vars:2,consts:[[1,"bg-primary","text-white"],[1,"d-flex","flex-row","justify-content-between","align-items-center","m-1"],[1,"btn","btn-primary",3,"click"],[1,"fa","fa-bars"],[1,"col"],[1,"m-0"],["class","d-flex flex-column justify-content-center h-100",4,"ngIf"],[2,"font-size","20px","color","white"],[1,"d-flex","flex-column","justify-content-center","h-100"],[1,"text-center"],["src","assets/images/logo.png","height","170px",1,"mb-4"],[3,"notifyParent"],[1,"mt-5",3,"routerLink"],[3,"email","notifyParent"],[1,"mt-5"],[1,"text-info",3,"click"]],template:function(e,t){1&e&&(a.Qb(0,"ion-header",0),a.Qb(1,"div",1),a.Qb(2,"div"),a.Qb(3,"button",2),a.Yb("click",function(){return t.geoService.openMenu()}),a.Mb(4,"i",3),a.Pb(),a.Pb(),a.Qb(5,"div",4),a.Qb(6,"h4",5),a.tc(7,"Register"),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(8,"ion-content"),a.sc(9,k,8,3,"div",6),a.sc(10,T,8,1,"div",6),a.Qb(11,"ngx-spinner"),a.Qb(12,"p",7),a.tc(13,"Loading.."),a.Pb(),a.Pb(),a.Pb()),2&e&&(a.Ab(9),a.gc("ngIf",!t.flagShowOTP),a.Ab(1),a.gc("ngIf",t.flagShowOTP))},directives:[o.c,o.b,r.l,b.a,p,n.j,o.s,L],styles:[""]}),e})()}];let E=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.Jb({type:e}),e.\u0275inj=a.Ib({imports:[[n.k.forChild(M)],n.k]}),e})(),q=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.Jb({type:e}),e.\u0275inj=a.Ib({imports:[[r.b,s.f,s.o,o.o,E,b.b]]}),e})()}}]);