(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{12:function(t,s,i){"use strict";var e={components:{"back-button":i(17).a},props:["backurl"]},a=i(0),c=Object(a.a)(e,(function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"content"},[s("div",{staticClass:"row pt-3 pb-4"},[s("div",{staticClass:"col-sm-12 card_view"},[this._t("viewdata"),this._v(" "),s("div",{staticClass:"text-center"},[s("back-button",{attrs:{url:this.backurl}})],1)],2)])])}),[],!1,null,null,null);s.a=c.exports},17:function(t,s,i){"use strict";var e={props:["url"],methods:{goBack:function(){this.$router.back()}}},a=i(0),c=Object(a.a)(e,(function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("span",[t.url?i("router-link",{staticClass:"btn btn-primary itrn_add_btn back_btn text-uppercase font-weight-bold",attrs:{to:t.url},on:{click:function(s){return t.goBack()}}},[t._t("default",[t._v("Back")])],2):i("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-uppercase font-weight-bold",attrs:{type:"button"},on:{click:function(s){return t.goBack()}}},[t._t("default",[t._v("Back")])],2)],1)}),[],!1,null,null,null);s.a=c.exports},311:function(t,s,i){"use strict";i.r(s);var e={name:"View",components:{"view-layout":i(12).a},data:function(){return{client_view:[]}},mounted:function(){this.schoolData()},methods:{schoolData:function(){var t=this;axios.get("/api/school/".concat(this.$route.params.id)).then((function(s){t.client_view=s.data,console.log(s)}))}}},a=i(0),c=Object(a.a)(e,(function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("view-layout",{attrs:{backurl:"/schools"},scopedSlots:t._u([{key:"viewdata",fn:function(){return[i("div",{staticClass:"row pl-3"},[i("div",{staticClass:"col-sm-3"},[i("h5",[t._v("Name")]),t._v(" "),i("p",[t._v(t._s(t.client_view.school_name))])]),t._v(" "),i("div",{staticClass:"col-sm-3"},[i("h5",[t._v("Street")]),t._v(" "),i("p",[t._v(t._s(t.client_view.street))])]),t._v(" "),i("div",{staticClass:"col-sm-3"},[i("h5",[t._v("City Name")]),t._v(" "),i("p",[t._v(t._s(t.client_view.city_name))])]),t._v(" "),i("div",{staticClass:"col-sm-3"},[i("h5",[t._v("State Name")]),t._v(" "),i("p",[t._v(t._s(t.client_view.state_name))])]),t._v(" "),i("div",{staticClass:"col-sm-3"},[i("h5",[t._v("Country Name")]),t._v(" "),i("p",[t._v(t._s(t.client_view.country_name))])]),t._v(" "),i("div",{staticClass:"col-sm-3"},[i("h5",[t._v("Pincode")]),t._v(" "),i("p",[t._v(t._s(t.client_view.pincode)+"/-")])]),t._v(" "),i("div",{staticClass:"col-sm-3"},[i("h5",[t._v("Finance Email")]),t._v(" "),i("p",[t._v(t._s(t.client_view.finance_email_id))])]),t._v(" "),i("div",{staticClass:"col-sm-3"},[i("h5",[t._v("Principal Email")]),t._v(" "),i("p",[t._v(t._s(t.client_view.principal_email_id))])]),t._v(" "),i("div",{staticClass:"col-sm-3"},[i("h5",[t._v("Mobile")]),t._v(" "),i("p",[t._v(t._s(t.client_view.mobile))])]),t._v(" "),i("div",{staticClass:"col-sm-3"},[i("h5",[t._v("Created At")]),t._v(" "),i("p",[t._v(t._s(t.client_view.created_at))])]),t._v(" "),i("div",{staticClass:"col-sm-3"},[i("h5",[t._v("Updated At")]),t._v(" "),i("p",[t._v(t._s(t.client_view.updated_at))])])]),t._v(" "),i("hr"),t._v(" "),i("h5",[t._v("Tour History :")]),t._v(" "),t.client_view.tours?i("div",{staticClass:"row pl-3"},t._l(t.client_view.tours,(function(s,e){return i("div",{key:s.id,staticClass:"col-sm-4"},[i("h5",[t._v("Tour ("+t._s(e+1)+")")]),t._v(" "),i("p",[i("router-link",{attrs:{to:"/booked-tour/10"}},[t._v(t._s(s.tour_id))])],1)])})),0):t._e()]},proxy:!0}])})}),[],!1,null,null,null);s.default=c.exports}}]);