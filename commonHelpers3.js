import"./assets/styles-3a99b7b9.js";const a=document.querySelector(".form-email-field"),o=document.querySelector(".form-message-field"),s=document.querySelector(".form-submit-btn");a.addEventListener("focus",n);a.addEventListener("focusout",r);a.addEventListener("input",l);o.addEventListener("input",i);window.addEventListener("load",c);s.addEventListener("click",d);function n(t){this.setAttribute("placeholder","Type area"),this.classList.add("placeholder-font")}function r(t){this.setAttribute("placeholder",""),this.classList.remove("placeholder-font")}function l(t){if(localStorage.hasOwnProperty("feedback-form-state")){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e.email=this.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(e))}else{const e={email:this.value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(e))}}function i(t){if(localStorage.hasOwnProperty("feedback-form-state")){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e.message=this.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(e))}else{const e={message:this.value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(e))}}function c(t){if(localStorage.hasOwnProperty("feedback-form-state")){const e=JSON.parse(localStorage.getItem("feedback-form-state"));a.text===void 0&&e.email!==void 0&&(a.value=e.email),o.text===void 0&&e.message!==void 0&&(o.value=e.message)}}function d(t){if(t.preventDefault(),localStorage.hasOwnProperty("feedback-form-state")){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e.email!==void 0&&e.message!==void 0&&e.email.trim().length>0&&e.message.trim().length>0&&(console.log(e),localStorage.removeItem("feedback-form-state"),a.value="",o.value="")}}
//# sourceMappingURL=commonHelpers3.js.map