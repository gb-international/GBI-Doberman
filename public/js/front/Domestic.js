(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{186:function(t,r,e){var n=function(t){"use strict";var r=Object.prototype,e=r.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,r,e,n){var o=r&&r.prototype instanceof u?r:u,i=Object.create(o.prototype),a=new _(n||[]);return i._invoke=function(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return L()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=w(a,e);if(c){if(c===l)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=s(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function s(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var l={};function u(){}function h(){}function f(){}var d={};d[o]=function(){return this};var p=Object.getPrototypeOf,v=p&&p(p(E([])));v&&v!==r&&e.call(v,o)&&(d=v);var y=f.prototype=u.prototype=Object.create(d);function m(t){["next","throw","return"].forEach((function(r){t[r]=function(t){return this._invoke(r,t)}}))}function g(t,r){var n;this._invoke=function(o,i){function a(){return new r((function(n,a){!function n(o,i,a,c){var l=s(t[o],t,i);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==typeof h&&e.call(h,"__await")?r.resolve(h.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):r.resolve(h).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,c)}))}c(l.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function w(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,w(t,r),"throw"===r.method))return l;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=s(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,l;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,l):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,l)}function b(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function x(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function E(t){if(t){var r=t[o];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return i.next=i}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=y.constructor=f,f.constructor=h,f[a]=h.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===h||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},m(g.prototype),g.prototype[i]=function(){return this},t.AsyncIterator=g,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new g(c(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},m(y),y[a]="Generator",y[o]=function(){return this},y.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=E,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),s=e.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),l},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),x(e),l}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;x(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:E(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},19:function(t,r,e){"use strict";var n={props:["gallery"]},o=e(0),i=Object(o.a)(n,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"row"},t._l(t.gallery,(function(r){return e("div",{key:r.id,staticClass:"col-12 col-sm-8 col-md-6 col-lg-4 fullimagecard"},[e("router-link",{attrs:{title:r.images[0].alt,to:{name:"images",params:{slug:r.slug}}}},[e("div",{staticClass:"card"},[e("img",{staticClass:"card-img card-image",attrs:{src:"/images/gallery/"+r.images[0].path,alt:r.images[0].alt}}),t._v(" "),e("div",{staticClass:"card-img-overlay text-white d-flex align-content-end flex-wrap p-0"},[e("div",{staticClass:"card-text-data p-3 bg-transparent-card w-100"},[e("h6",{staticClass:"card-subtitle mb-2"},[t._v(t._s(r.school.school_name))]),t._v(" "),e("p",{staticClass:"card-text"},[t._v(t._s(r.title))])])])])])],1)})),0)}),[],!1,null,null,null);r.a=i.exports},241:function(t,r,e){"use strict";e.r(r);var n=e(6),o=e.n(n),i=e(8);function a(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,r){if(!t)return;if("string"==typeof t)return c(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return c(t,r)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function s(t,r,e,n,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void e(t)}c.done?r(s):Promise.resolve(s).then(n,o)}var l={name:"HowWework",components:{ImageCard:e(19).a,Observer:i.a},metaInfo:{title:"How We Work",meta:[{name:"description",content:"@GoWithGBI takes you on a tour behind the scenes where you will get to learn about the process and hard work GBI team puts to make your educational travel program a successful one"},{name:"keywords",content:"@GoWithGBI,GBI Process,Program Engineering Process ,GBI How we work,learn,explore,discover,dream travel journeys,behind the scenes,dream,educational programs,corporate events,team building programs,international programs,domestic programs"},{name:"url",content:"https://www.gowithgbi.com/about-us/how-we-work"},{name:"type",content:"website"}]},data:function(){return{page:1,loading:!1,gallery:[]}},methods:{intersected:function(){var t,r=this;return(t=o.a.mark((function t(){var e,n,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.loading=!0,e="/api/galleries/domestic?page="+r.page,t.next=4,fetch(e);case 4:return n=t.sent,r.page++,t.next=8,n.json();case 8:(i=t.sent).data.length>0&&(r.gallery=[].concat(a(r.gallery),a(i.data))),i=[],r.loading=!1;case 12:case"end":return t.stop()}}),t)})),function(){var r=this,e=arguments;return new Promise((function(n,o){var i=t.apply(r,e);function a(t){s(i,n,o,a,c,"next",t)}function c(t){s(i,n,o,a,c,"throw",t)}a(void 0)}))})()}}},u=e(0),h=Object(u.a)(l,(function(){var t=this.$createElement,r=this._self._c||t;return r("div",{attrs:{id:"imagegallery"}},[r("div",{staticClass:"howwework_banner text_on_image banner_bg"},[r("div",{staticClass:"content"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-sm-8 gallery-search"},[r("div",{staticClass:"outer"},[r("input",{staticClass:"form-control search-field",attrs:{type:"search",placeholder:"Search"}})])])])])]),this._v(" "),r("div",{staticClass:"container mt-5 pt-5"},[r("image-card",{attrs:{gallery:this.gallery}}),this._v(" "),r("Observer",{on:{intersect:this.intersected}}),this._v(" "),this.loading?r("div",{staticClass:"loading-img-parent text-center w-100 mb-4"},[r("img",{staticClass:"loading-img",attrs:{src:"/icons/loader.gif"}})]):this._e()],1)])}),[],!1,null,null,null);r.default=h.exports},6:function(t,r,e){t.exports=e(186)},8:function(t,r,e){"use strict";function n(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var e=[],n=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done)&&(e.push(a.value),!r||e.length!==r);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return e}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return o(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var i={props:["options"],data:function(){return{observer:null}},mounted:function(){var t=this,r=this.options||{};this.observer=new IntersectionObserver((function(r){var e=n(r,1)[0];e&&e.isIntersecting&&t.$emit("intersect")}),r),this.observer.observe(this.$el)},destroyed:function(){this.observer.disconnect()}},a=e(0),c=Object(a.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"observer"})}),[],!1,null,null,null);r.a=c.exports}}]);