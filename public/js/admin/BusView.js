(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{12:function(t,s,a){"use strict";var e={components:{"back-button":a(17).a},props:["backurl"]},i=a(0),n=Object(i.a)(e,(function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"content"},[s("div",{staticClass:"row pt-3 pb-4"},[s("div",{staticClass:"col-sm-12 card_view"},[this._t("viewdata"),this._v(" "),s("div",{staticClass:"text-center"},[s("back-button",{attrs:{url:this.backurl}})],1)],2)])])}),[],!1,null,null,null);s.a=n.exports},17:function(t,s,a){"use strict";var e={props:["url"],methods:{goBack:function(){this.$router.back()}}},i=a(0),n=Object(i.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",[t.url?a("router-link",{staticClass:"btn btn-primary itrn_add_btn back_btn text-uppercase font-weight-bold",attrs:{to:t.url},on:{click:function(s){return t.goBack()}}},[t._t("default",[t._v("Back")])],2):a("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-uppercase font-weight-bold",attrs:{type:"button"},on:{click:function(s){return t.goBack()}}},[t._t("default",[t._v("Back")])],2)],1)}),[],!1,null,null,null);s.a=n.exports},337:function(t,s,a){"use strict";a.r(s);var e={name:"View",components:{"view-layout":a(12).a},data:function(){return{bus_view:[]}},created:function(){this.busView()},methods:{busView:function(){var t=this;axios.get("/api/bus/".concat(this.$route.params.id)).then((function(s){t.bus_view=s.data}))}}},i=a(0),n=Object(i.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view-layout",{attrs:{backurl:"/bus-list"},scopedSlots:t._u([{key:"viewdata",fn:function(){return[a("div",{staticClass:"row pl-3"},[a("div",{staticClass:"col-sm-3"},[a("h5",[t._v("Name")]),t._v(" "),a("p",[t._v(t._s(t.bus_view.company_name))])]),t._v(" "),a("div",{staticClass:"col-sm-3"},[a("h5",[t._v("Street")]),t._v(" "),a("p",[t._v(t._s(t.bus_view.seater))])]),t._v(" "),a("div",{staticClass:"col-sm-3"},[a("h5",[t._v("City Name")]),t._v(" "),a("p",[t._v(t._s(t.bus_view.seat_type))])]),t._v(" "),a("div",{staticClass:"col-sm-3"},[a("h5",[t._v("State Name")]),t._v(" "),a("p",[t._v(t._s(t.bus_view.price))])]),t._v(" "),a("div",{staticClass:"col-sm-3"},[a("h5",[t._v("Created At")]),t._v(" "),a("p",[t._v(t._s(t.bus_view.created_at))])]),t._v(" "),a("div",{staticClass:"col-sm-3"},[a("h5",[t._v("Updated At")]),t._v(" "),a("p",[t._v(t._s(t.bus_view.updated_at))])])])]},proxy:!0}])})}),[],!1,null,null,null);s.default=n.exports}}]);