(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{15:function(t,e,n){"use strict";var a=n(0),s=Object(a.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-uppercase font-weight-bold"},[this._t("default",[this._v("submit")])],2)}),[],!1,null,null,null);e.a=s.exports},17:function(t,e,n){"use strict";var a={props:["url"],methods:{goBack:function(){this.$router.back()}}},s=n(0),r=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[t.url?n("router-link",{staticClass:"btn btn-primary itrn_add_btn back_btn text-uppercase font-weight-bold",attrs:{to:t.url},on:{click:function(e){return t.goBack()}}},[t._t("default",[t._v("Back")])],2):n("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-uppercase font-weight-bold",attrs:{type:"button"},on:{click:function(e){return t.goBack()}}},[t._t("default",[t._v("Back")])],2)],1)}),[],!1,null,null,null);e.a=r.exports},249:function(t,e,n){"use strict";n.r(e);var a=n(1),s=n(4),r=n(15),o=n(3),i={name:"New",components:{Form:a.Form,"has-error":a.HasError,"form-buttons":s.a,"submit-button":r.a,"form-layout":o.a},data:function(){return{form:new a.Form({title:""})}},created:function(){this.editBus()},methods:{editBus:function(){var t=this;axios.get("/api/tags/".concat(this.$route.params.id,"/edit")).then((function(e){setTimeout((function(){return $("#example").DataTable()}),1e3),t.form.fill(e.data)}))},UpdateBus:function(){var t=this;this.form.put("/api/tags/".concat(this.$route.params.id)).then((function(e){console.log(e),t.$toast.fire({icon:"success",title:"Successfully Updated"})})).catch((function(){}))},back:function(){this.$router.push("/tags")}}},u=n(0),c=Object(u.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form-layout",{scopedSlots:t._u([{key:"formdata",fn:function(){return[n("form",{attrs:{role:"form",enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.UpdateBus()}}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-12"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"title"}},[t._v("Title")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.title,expression:"form.title"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("title")},attrs:{type:"text",placeholder:"Enter title"},domProps:{value:t.form.title},on:{input:function(e){e.target.composing||t.$set(t.form,"title",e.target.value)}}}),t._v(" "),n("has-error",{attrs:{form:t.form,field:"title"}})],1)])]),t._v(" "),n("form-buttons")],1)]},proxy:!0}])})}),[],!1,null,null,null);e.default=c.exports},3:function(t,e,n){"use strict";var a=n(0),s=Object(a.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"content"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row justify-content-around"},[e("div",{staticClass:"col-md-12 pl-4 pb-5"},[this._t("formdata")],2)])])])}),[],!1,null,null,null);e.a=s.exports},4:function(t,e,n){"use strict";var a=n(17),s=n(15),r={components:{"back-button":a.a,"submit-button":s.a}},o=n(0),i=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-sm-8"},[e("back-button"),this._v(" "),e("submit-button")],1)])}),[],!1,null,null,null);e.a=i.exports}}]);