(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{15:function(a,t,e){"use strict";var r=e(0),o=Object(r.a)({},(function(){var a=this.$createElement;return(this._self._c||a)("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-uppercase font-weight-bold"},[this._t("default",[this._v("submit")])],2)}),[],!1,null,null,null);t.a=o.exports},17:function(a,t,e){"use strict";var r={props:["url"],methods:{goBack:function(){this.$router.back()}}},o=e(0),s=Object(o.a)(r,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("span",[a.url?e("router-link",{staticClass:"btn btn-primary itrn_add_btn back_btn text-uppercase font-weight-bold",attrs:{to:a.url},on:{click:function(t){return a.goBack()}}},[a._t("default",[a._v("Back")])],2):e("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-uppercase font-weight-bold",attrs:{type:"button"},on:{click:function(t){return a.goBack()}}},[a._t("default",[a._v("Back")])],2)],1)}),[],!1,null,null,null);t.a=s.exports},280:function(a,t,e){"use strict";e.r(t);var r=e(1),o=e(4),s=e(3),i={name:"New",components:{Form:r.Form,"has-error":r.HasError,"form-buttons":o.a,"form-layout":s.a},data:function(){return{img_image:"",form:new r.Form({type:"",name:"",state:"",city:"",image:[],room:"",phoneno:"",email:"",address:"",apai_single:"",apai_double:"",apai_triple:"",apai_quad:"",mapai_single:"",mapai_double:"",mapai_triple:"",mapai_quad:"",cpai_single:"",cpai_double:"",cpai_triple:"",cpai_quad:""})}},created:function(){this.hotelData()},methods:{hotelData:function(){var a=this;axios.get("/api/hotel/".concat(this.$route.params.id,"/edit")).then((function(t){a.form.fill(t.data),a.form.image=[],a.img_image="images/hotel/"+t.data.image}))},UpdateHotel:function(){var a=this;this.form.put("/api/hotel/".concat(this.$route.params.id)).then((function(t){console.log(t),a.$toast.fire({icon:"success",title:"Successfully Updated"})})).catch((function(){}))},changeDetailPhoto:function(a){var t=this,e=a.target.files[0],r=new FileReader;r.onload=function(a){t.form.image.push({name:e.name,file:a.target.result}),t.img_image=a.target.result},r.readAsDataURL(e)}}},l=e(0),m=Object(l.a)(i,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("form-layout",{scopedSlots:a._u([{key:"formdata",fn:function(){return[e("form",{attrs:{role:"form",enctype:"multipart/form-data"},on:{submit:function(t){return t.preventDefault(),a.UpdateHotel()}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-4"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"name"}},[a._v("Hotel Name")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":a.form.errors.has("name")},attrs:{type:"text",placeholder:"Enter Hotel Name",name:"hotelName"},domProps:{value:a.form.name},on:{input:function(t){t.target.composing||a.$set(a.form,"name",t.target.value)}}}),a._v(" "),e("has-error",{attrs:{form:a.form,field:"name"}})],1)]),a._v(" "),e("div",{staticClass:"col-sm-4"},[e("div",{staticClass:"form-group aligen_top_input"},[e("label",{attrs:{for:"type"}},[a._v("Hotel Type")]),a._v(" "),e("br"),a._v(" "),e("div",{staticClass:"custom-control custom-radio custom-control-inline"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.form.type,expression:"form.type"}],staticClass:"custom-control-input",class:{"is-invalid":a.form.errors.has("type")},attrs:{type:"radio",id:"hotelRadio",name:"type",value:"3"},domProps:{checked:a._q(a.form.type,"3")},on:{change:function(t){return a.$set(a.form,"type","3")}}}),a._v(" "),e("label",{staticClass:"custom-control-label",attrs:{for:"hotelRadio"}},[a._v("3 Star")])]),a._v(" "),e("div",{staticClass:"custom-control custom-radio custom-control-inline"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.form.type,expression:"form.type"}],staticClass:"custom-control-input",class:{"is-invalid":a.form.errors.has("type")},attrs:{type:"radio",id:"hotelRadio1",name:"type",value:"4"},domProps:{checked:a._q(a.form.type,"4")},on:{change:function(t){return a.$set(a.form,"type","4")}}}),a._v(" "),e("label",{staticClass:"custom-control-label",attrs:{for:"hotelRadio1"}},[a._v("4 Star")])]),a._v(" "),e("div",{staticClass:"custom-control custom-radio custom-control-inline"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.form.type,expression:"form.type"}],staticClass:"custom-control-input",class:{"is-invalid":a.form.errors.has("type")},attrs:{type:"radio",id:"hotelRadio2",name:"type",value:"5"},domProps:{checked:a._q(a.form.type,"5")},on:{change:function(t){return a.$set(a.form,"type","5")}}}),a._v(" "),e("label",{staticClass:"custom-control-label",attrs:{for:"hotelRadio2"}},[a._v("5 Star")])]),a._v(" "),e("has-error",{attrs:{form:a.form,field:"type"}})],1)]),a._v(" "),e("div",{staticClass:"col-sm-4"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"phoneno"}},[a._v("Contact Number")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.form.phoneno,expression:"form.phoneno"}],staticClass:"form-control",class:{"is-invalid":a.form.errors.has("phoneno")},attrs:{type:"text",placeholder:"Enter Contact Number",name:"phoneno"},domProps:{value:a.form.phoneno},on:{input:function(t){t.target.composing||a.$set(a.form,"phoneno",t.target.value)}}}),a._v(" "),e("has-error",{attrs:{form:a.form,field:"phoneno"}})],1)])]),a._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-4"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"email"}},[a._v("Email")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":a.form.errors.has("email")},attrs:{type:"email",placeholder:"Enter Email",id:"email",rows:"5",name:"email"},domProps:{value:a.form.email},on:{input:function(t){t.target.composing||a.$set(a.form,"email",t.target.value)}}}),a._v(" "),e("has-error",{attrs:{form:a.form,field:"email"}})],1)]),a._v(" "),e("div",{staticClass:"col-sm-4"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"room"}},[a._v("Rooms")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.form.room,expression:"form.room"}],staticClass:"form-control",class:{"is-invalid":a.form.errors.has("room")},attrs:{type:"number",placeholder:"Enter No. of Room in hotel",id:"room",name:"room"},domProps:{value:a.form.room},on:{input:function(t){t.target.composing||a.$set(a.form,"room",t.target.value)}}}),a._v(" "),e("has-error",{attrs:{form:a.form,field:"room"}})],1)]),a._v(" "),e("div",{staticClass:"col-sm-4"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"state"}},[a._v("State")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.form.state,expression:"form.state"}],staticClass:"form-control",class:{"is-invalid":a.form.errors.has("state")},attrs:{type:"text",placeholder:"Enter State",id:"state",name:"state"},domProps:{value:a.form.state},on:{input:function(t){t.target.composing||a.$set(a.form,"state",t.target.value)}}}),a._v(" "),e("has-error",{attrs:{form:a.form,field:"state"}})],1)])]),a._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-4"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"city"}},[a._v("City")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.form.city,expression:"form.city"}],staticClass:"form-control",class:{"is-invalid":a.form.errors.has("city")},attrs:{type:"text",placeholder:"Enter City",id:"city",name:"city"},domProps:{value:a.form.city},on:{input:function(t){t.target.composing||a.$set(a.form,"city",t.target.value)}}}),a._v(" "),e("has-error",{attrs:{form:a.form,field:"city"}})],1)]),a._v(" "),e("div",{staticClass:"col-sm-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"image"}},[a._v("Image")]),a._v(" "),e("br"),a._v(" "),e("input",{class:{"is-invalid":a.form.errors.has("image")},attrs:{name:"image",type:"file"},on:{change:function(t){return a.changeDetailPhoto(t)}}}),a._v(" "),e("has-error",{attrs:{form:a.form,field:"image"}})],1)]),a._v(" "),e("div",{staticClass:"col-sm-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"image"}}),a._v(" "),e("br"),a._v(" "),e("img",{staticClass:"image",attrs:{src:a.img_image,alt:""}}),a._v(" "),e("has-error",{attrs:{form:a.form,field:"image"}})],1)]),a._v(" "),e("div",{staticClass:"col-sm-8"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"address"}},[a._v("Address")]),a._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:a.form.address,expression:"form.address"}],staticClass:"form-control",class:{"is-invalid":a.form.errors.has("address")},attrs:{rows:"3",placeholder:"Enter Address",id:"address",name:"address"},domProps:{value:a.form.address},on:{input:function(t){t.target.composing||a.$set(a.form,"address",t.target.value)}}}),a._v(" "),e("has-error",{attrs:{form:a.form,field:"address"}})],1)])]),a._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"apai_single"}},[a._v("APAI-Single (Price)")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.form.apai_single,expression:"form.apai_single"}],staticClass:"form-control",class:{"is-invalid":a.form.errors.has("apai_single")},attrs:{type:"text",placeholder:"Enter apai_single",id:"apai_single",name:"apai_single"},domProps:{value:a.form.apai_single},on:{input:function(t){t.target.composing||a.$set(a.form,"apai_single",t.target.value)}}}),a._v(" "),e("has-error",{attrs:{form:a.form,field:"apai_single"}})],1)]),a._v(" "),e("div",{staticClass:"col-sm-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"apai_double"}},[a._v("APAI-Double (Price)")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.form.apai_double,expression:"form.apai_double"}],staticClass:"form-control",class:{"is-invalid":a.form.errors.has("apai_double")},attrs:{type:"text",placeholder:"Enter apai_double",id:"apai_double",name:"apai_double"},domProps:{value:a.form.apai_double},on:{input:function(t){t.target.composing||a.$set(a.form,"apai_double",t.target.value)}}}),a._v(" "),e("has-error",{attrs:{form:a.form,field:"apai_double"}})],1)]),a._v(" "),e("div",{staticClass:"col-sm-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"apai_triple"}},[a._v("APAI-Triple (Price)")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.form.apai_triple,expression:"form.apai_triple"}],staticClass:"form-control",class:{"is-invalid":a.form.errors.has("apai_triple")},attrs:{type:"text",placeholder:"Enter apai_triple",id:"apai_triple",name:"apai_triple"},domProps:{value:a.form.apai_triple},on:{input:function(t){t.target.composing||a.$set(a.form,"apai_triple",t.target.value)}}}),a._v(" "),e("has-error",{attrs:{form:a.form,field:"apai_triple"}})],1)]),a._v(" "),e("div",{staticClass:"col-sm-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"apai_quad"}},[a._v("APAI-quad (Price)")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.form.apai_quad,expression:"form.apai_quad"}],staticClass:"form-control",class:{"is-invalid":a.form.errors.has("apai_quad")},attrs:{type:"text",placeholder:"Enter apai_quad",id:"apai_quad",name:"apai_quad"},domProps:{value:a.form.apai_quad},on:{input:function(t){t.target.composing||a.$set(a.form,"apai_quad",t.target.value)}}}),a._v(" "),e("has-error",{attrs:{form:a.form,field:"apai_quad"}})],1)])]),a._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"mapai_single"}},[a._v("MAPAI-Single (Price)")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.form.mapai_single,expression:"form.mapai_single"}],staticClass:"form-control",class:{"is-invalid":a.form.errors.has("mapai_single")},attrs:{type:"text",placeholder:"Enter mapai_single",id:"mapai_single",name:"mapai_single"},domProps:{value:a.form.mapai_single},on:{input:function(t){t.target.composing||a.$set(a.form,"mapai_single",t.target.value)}}}),a._v(" "),e("has-error",{attrs:{form:a.form,field:"mapai_single"}})],1)]),a._v(" "),e("div",{staticClass:"col-sm-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"mapai_double"}},[a._v("MAPAI-Double (Price)")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.form.mapai_double,expression:"form.mapai_double"}],staticClass:"form-control",class:{"is-invalid":a.form.errors.has("mapai_double")},attrs:{type:"text",placeholder:"Enter mapai_double",id:"mapai_double",name:"mapai_double"},domProps:{value:a.form.mapai_double},on:{input:function(t){t.target.composing||a.$set(a.form,"mapai_double",t.target.value)}}}),a._v(" "),e("has-error",{attrs:{form:a.form,field:"mapai_double"}})],1)]),a._v(" "),e("div",{staticClass:"col-sm-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"mapai_triple"}},[a._v("MAPAI-Triple (Price)")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.form.mapai_triple,expression:"form.mapai_triple"}],staticClass:"form-control",class:{"is-invalid":a.form.errors.has("mapai_triple")},attrs:{type:"text",placeholder:"Enter mapai_triple",id:"mapai_triple",name:"mapai_triple"},domProps:{value:a.form.mapai_triple},on:{input:function(t){t.target.composing||a.$set(a.form,"mapai_triple",t.target.value)}}}),a._v(" "),e("has-error",{attrs:{form:a.form,field:"mapai_triple"}})],1)]),a._v(" "),e("div",{staticClass:"col-sm-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"mapai_quad"}},[a._v("MAPAI-quad (Price)")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.form.mapai_quad,expression:"form.mapai_quad"}],staticClass:"form-control",class:{"is-invalid":a.form.errors.has("mapai_quad")},attrs:{type:"text",placeholder:"Enter mapai_quad",id:"mapai_quad",name:"mapai_quad"},domProps:{value:a.form.mapai_quad},on:{input:function(t){t.target.composing||a.$set(a.form,"mapai_quad",t.target.value)}}}),a._v(" "),e("has-error",{attrs:{form:a.form,field:"mapai_quad"}})],1)])]),a._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"cpai_single"}},[a._v("CPAI-Single (Price)")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.form.cpai_single,expression:"form.cpai_single"}],staticClass:"form-control",class:{"is-invalid":a.form.errors.has("cpai_single")},attrs:{type:"text",placeholder:"Enter cpai_single",id:"cpai_single",name:"cpai_single"},domProps:{value:a.form.cpai_single},on:{input:function(t){t.target.composing||a.$set(a.form,"cpai_single",t.target.value)}}}),a._v(" "),e("has-error",{attrs:{form:a.form,field:"cpai_single"}})],1)]),a._v(" "),e("div",{staticClass:"col-sm-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"cpai_double"}},[a._v("CPAI-Double (Price)")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.form.cpai_double,expression:"form.cpai_double"}],staticClass:"form-control",class:{"is-invalid":a.form.errors.has("cpai_double")},attrs:{type:"text",placeholder:"Enter cpai_double",id:"cpai_double",name:"cpai_double"},domProps:{value:a.form.cpai_double},on:{input:function(t){t.target.composing||a.$set(a.form,"cpai_double",t.target.value)}}}),a._v(" "),e("has-error",{attrs:{form:a.form,field:"cpai_double"}})],1)]),a._v(" "),e("div",{staticClass:"col-sm-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"cpai_triple"}},[a._v("CPAI-Triple (Price)")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.form.cpai_triple,expression:"form.cpai_triple"}],staticClass:"form-control",class:{"is-invalid":a.form.errors.has("cpai_triple")},attrs:{type:"text",placeholder:"Enter cpai_triple",id:"cpai_triple",name:"cpai_triple"},domProps:{value:a.form.cpai_triple},on:{input:function(t){t.target.composing||a.$set(a.form,"cpai_triple",t.target.value)}}}),a._v(" "),e("has-error",{attrs:{form:a.form,field:"cpai_triple"}})],1)]),a._v(" "),e("div",{staticClass:"col-sm-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"cpai_quad"}},[a._v("CPAI-quad (Price)")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.form.cpai_quad,expression:"form.cpai_quad"}],staticClass:"form-control",class:{"is-invalid":a.form.errors.has("cpai_quad")},attrs:{type:"text",placeholder:"Enter cpai_quad",id:"cpai_quad",name:"cpai_quad"},domProps:{value:a.form.cpai_quad},on:{input:function(t){t.target.composing||a.$set(a.form,"cpai_quad",t.target.value)}}}),a._v(" "),e("has-error",{attrs:{form:a.form,field:"cpai_quad"}})],1)])]),a._v(" "),e("form-buttons")],1)]},proxy:!0}])})}),[],!1,null,null,null);t.default=m.exports},3:function(a,t,e){"use strict";var r=e(0),o=Object(r.a)({},(function(){var a=this.$createElement,t=this._self._c||a;return t("section",{staticClass:"content"},[t("div",{staticClass:"container-fluid"},[t("div",{staticClass:"row justify-content-around"},[t("div",{staticClass:"col-md-12 pl-4 pb-5"},[this._t("formdata")],2)])])])}),[],!1,null,null,null);t.a=o.exports},4:function(a,t,e){"use strict";var r=e(17),o=e(15),s={components:{"back-button":r.a,"submit-button":o.a}},i=e(0),l=Object(i.a)(s,(function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"row justify-content-center"},[t("div",{staticClass:"col-sm-8"},[t("back-button"),this._v(" "),t("submit-button")],1)])}),[],!1,null,null,null);t.a=l.exports}}]);