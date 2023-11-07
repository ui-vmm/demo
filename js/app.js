/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-37.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/app.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-37.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/app.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_debug_panel_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/debug-panel.vue */ \"./src/components/debug-panel.vue\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'app',\n  components: {\n    DebugPanel: _components_debug_panel_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  created() {\n    this.initialize();\n  }\n});\n\n//# sourceURL=webpack://ui-vmm/./src/app.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-37.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-37.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/debug-panel.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-37.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/debug-panel.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-bundler.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'app-dev',\n  mounted() {\n    this.set({\n      _debugPanel: localStorage.getItem('debugPanel') === '1',\n      _debug: localStorage.getItem('debug') === '1',\n      _mock: localStorage.getItem('mock') === '1'\n    });\n  },\n  computed: {\n    ...(0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(['get']),\n    isDev() {\n      return /^dev/.test(this.get('_version'));\n    }\n  },\n  methods: {\n    toggle(item) {\n      this.set({\n        ['_' + item]: !this.get(`_${item}`)\n      });\n      localStorage.setItem(item, this.get(`_${item}`) ? '1' : '0');\n    }\n  }\n});\n\n//# sourceURL=webpack://ui-vmm/./src/components/debug-panel.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-37.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-37.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/app.vue?vue&type=template&id=5ef48958&lang=pug":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-37.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/app.vue?vue&type=template&id=5ef48958&lang=pug ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_router_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"router-view\");\n  const _component_a_config_provider = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"a-config-provider\");\n  const _component_debug_panel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"debug-panel\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", {\n    id: \"wrapper\",\n    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({\n      auth: !_ctx.get(\"isLogged\")\n    })\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_a_config_provider, {\n    locale: _ctx.locales[_ctx.get(\"locale\")].data\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_view)]),\n    _: 1 /* STABLE */\n  }, 8 /* PROPS */, [\"locale\"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_debug_panel)], 2 /* CLASS */);\n}\n\n//# sourceURL=webpack://ui-vmm/./src/app.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-37.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-37.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/debug-panel.vue?vue&type=template&id=926849ac&lang=pug":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-37.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/debug-panel.vue?vue&type=template&id=926849ac&lang=pug ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  key: 0,\n  class: \"debug-panel\"\n};\nconst _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"br\", null, null, -1 /* HOISTED */);\nconst _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"br\", null, null, -1 /* HOISTED */);\nconst _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"br\", null, null, -1 /* HOISTED */);\nconst _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"br\", null, null, -1 /* HOISTED */);\nconst _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"br\", null, null, -1 /* HOISTED */);\nconst _hoisted_7 = {\n  key: 1,\n  id: \"toggle\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [_ctx.get(\"_debugPanel\") && $options.isDev ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"_loadingBar: \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.get('_loadingBar')), 1 /* TEXT */), _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"sending: \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.get('sending')), 1 /* TEXT */), _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$store.state), 1 /* TEXT */), _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"$route.name: \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$route.name), 1 /* TEXT */), _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"IS LOGGED: \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.get('isLogged')), 1 /* TEXT */), _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.translate('language')) + \" + \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$i18n.locale) + \" + \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.get('locale')), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true), $options.isDev ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n    onClick: _cache[0] || (_cache[0] = $event => $options.toggle(\"debugPanel\")),\n    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({\n      active: _ctx.get(\"_debugPanel\")\n    })\n  }, \"show panel\", 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n    onClick: _cache[1] || (_cache[1] = $event => $options.toggle(\"debug\")),\n    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({\n      active: _ctx.get(\"_debug\")\n    })\n  }, \"enable debug\", 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n    onClick: _cache[2] || (_cache[2] = $event => $options.toggle(\"mock\")),\n    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({\n      active: _ctx.get(\"_mock\")\n    })\n  }, \"mock\", 2 /* CLASS */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)]);\n}\n\n//# sourceURL=webpack://ui-vmm/./src/components/debug-panel.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-37.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _app_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app.vue */ \"./src/app.vue\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/router */ \"./src/router/index.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store */ \"./src/store/index.js\");\n/* harmony import */ var _mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/mixin */ \"./src/mixin/index.js\");\n/* harmony import */ var _plugins_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/plugins/i18n */ \"./src/plugins/i18n.js\");\n/* harmony import */ var ant_design_vue_dist_antd_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ant-design-vue/dist/antd.css */ \"./node_modules/ant-design-vue/dist/antd.css\");\n/* harmony import */ var ant_design_vue_dist_antd_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ant_design_vue_dist_antd_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var ant_design_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ant-design-vue */ \"./node_modules/ant-design-vue/es/index.js\");\n/* harmony import */ var vue_flag_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-flag-icon */ \"./node_modules/vue-flag-icon/index.js\");\n\n\n\n\n\n\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_app_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).use(ant_design_vue__WEBPACK_IMPORTED_MODULE_8__[\"default\"]).use(vue_flag_icon__WEBPACK_IMPORTED_MODULE_7__[\"default\"]).use(_plugins_i18n__WEBPACK_IMPORTED_MODULE_5__[\"default\"]).use(_router__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).use(_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"]).mixin(_mixin__WEBPACK_IMPORTED_MODULE_4__[\"default\"]).mount('#app');\n\n//# sourceURL=webpack://ui-vmm/./src/main.js?");

/***/ }),

/***/ "./src/mixin/certificate.js":
/*!**********************************!*\
  !*** ./src/mixin/certificate.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  computed: {},\n  methods: {\n    CertificateRevoke(fingerprint) {\n      const server = this.get('servers').find(item => item.id === parseInt(this.$route.params.server_id));\n      if (this.get('sending')) {\n        return false;\n      }\n      this.SendData('certificate.revoke', {\n        server_id: server.id,\n        certificate_fingerprint: fingerprint,\n        provider: server.provider\n      }, response => {\n        this.certificate_data.splice(this.certificate_data.findIndex(el => el.certificate_fingerprint === fingerprint), 1);\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack://ui-vmm/./src/mixin/certificate.js?");

/***/ }),

/***/ "./src/mixin/event.js":
/*!****************************!*\
  !*** ./src/mixin/event.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  computed: {},\n  methods: {\n    EventInit() {\n      if (true) return;\n      const es = new EventSource('/api/v1/event.subscribe?stream=' + this.get('stream'));\n      es.addEventListener('open', event => this.SendData('event.auth', {\n        stream: this.get('stream')\n      }, null, null, response => {\n        this.log('event auth result:', response);\n      }));\n      es.addEventListener('message', event => {\n        const data = JSON.parse(event.data);\n        const response = JSON.parse(data.body);\n        const taskID = `task_${data.type}_${data.request_id}`;\n        const callback = this.get(taskID);\n        if (response.errors) {\n          this.log('event errors:', response);\n          this.$message.error(this.listErrors(this._dataError(response.errors)), 5);\n        }\n        if (typeof callback === 'function') {\n          callback(response);\n        }\n      });\n      es.addEventListener('error', event => {\n        this.log(\"es.addEventListener('error', event => {\", event);\n        if (event.target.readyState === EventSource.CLOSED) {\n          this.$message.error(this.listErrors([{\n            detail: 'the server closed the connection'\n          }]), 5);\n        }\n      });\n      es.addEventListener('close', event => {\n        this.$message.warning(this.translate('the server closed the connection'));\n        es.close();\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack://ui-vmm/./src/mixin/event.js?");

/***/ }),

/***/ "./src/mixin/image.js":
/*!****************************!*\
  !*** ./src/mixin/image.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  computed: {},\n  methods: {\n    ImageDelete(fingerprint) {\n      const server = this.get('servers').find(item => item.id === parseInt(this.$route.params.server_id));\n      if (this.get('sending')) {\n        return false;\n      }\n      this.SendData('image.delete', {\n        server_id: server.server_id,\n        image_fingerprint: fingerprint,\n        provider: server.provider\n      }, response => this.image_data.splice(this.image_data.findIndex(el => el.image_fingerprint === fingerprint), 1));\n    },\n    ImageGetList(ImageServer) {\n      const server = this.get('servers').find(item => item.id === parseInt(this.$route.params.server_id));\n      if (this.get('sending')) {\n        return false;\n      }\n      this.image_data.splice(0, this.image_data.length);\n      this.SendData('image.list', {\n        server_id: server.server_id,\n        image_server_host: ImageServer || '',\n        provider: server.provider\n      }, response => {\n        response.image && Object.keys(response.image).forEach(item => {\n          response.image[item].key = item;\n          this.image_data.push(response.image[item]);\n        });\n      });\n    },\n    ImageServerList() {\n      const server = this.get('servers').find(item => item.id === parseInt(this.$route.params.server_id));\n      if (this.get('sending')) {\n        return false;\n      }\n      this.clear('image_server');\n      this.SendData('image.serverList', {\n        server_id: server.server_id,\n        provider: server.provider\n      }, response => {\n        if (this.get('simplestream_enabled')) {\n          response.image[0] = {\n            image_server_host: `${window.location.origin}/api/v1/simplestream.list`,\n            image_server_protocol: 'simplestreams'\n          };\n        }\n        Object.keys(response.image).forEach(i => {\n          this.add({\n            image_server: response.image[i]\n          });\n        });\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack://ui-vmm/./src/mixin/image.js?");

/***/ }),

/***/ "./src/mixin/index.js":
/*!****************************!*\
  !*** ./src/mixin/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-bundler.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nprogress/nprogress.css */ \"./node_modules/nprogress/nprogress.css\");\n/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _certificate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./certificate */ \"./src/mixin/certificate.js\");\n/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event */ \"./src/mixin/event.js\");\n/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image */ \"./src/mixin/image.js\");\n/* harmony import */ var _instance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./instance */ \"./src/mixin/instance.js\");\n/* harmony import */ var _misc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./misc */ \"./src/mixin/misc.js\");\n/* harmony import */ var _network__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./network */ \"./src/mixin/network.js\");\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile */ \"./src/mixin/profile.js\");\n/* harmony import */ var _send_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./send-data */ \"./src/mixin/send-data.js\");\n/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./server */ \"./src/mixin/server.js\");\n/* harmony import */ var _ssh_key__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ssh-key */ \"./src/mixin/ssh-key.js\");\n/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./token */ \"./src/mixin/token.js\");\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user */ \"./src/mixin/user.js\");\n/* harmony import */ var _webauth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./webauth */ \"./src/mixin/webauth.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  mixins: [_certificate__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _event__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _instance__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _misc__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _network__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _profile__WEBPACK_IMPORTED_MODULE_8__[\"default\"], _send_data__WEBPACK_IMPORTED_MODULE_9__[\"default\"], _server__WEBPACK_IMPORTED_MODULE_10__[\"default\"], _ssh_key__WEBPACK_IMPORTED_MODULE_11__[\"default\"], _token__WEBPACK_IMPORTED_MODULE_12__[\"default\"], _user__WEBPACK_IMPORTED_MODULE_13__[\"default\"], _webauth__WEBPACK_IMPORTED_MODULE_14__[\"default\"]],\n  computed: {\n    ...(0,vuex__WEBPACK_IMPORTED_MODULE_15__.mapGetters)(['get'])\n  },\n  methods: {\n    initialize() {\n      let fallback = sessionStorage.getItem('fallback');\n      if (fallback && fallback !== location.href) {\n        fallback = new URL(fallback);\n        const base = \"/demo/\".replace(/.$/, '');\n        const path = fallback.pathname.replace(base, '');\n        this.$router.push(path);\n        sessionStorage.removeItem('fallback');\n      }\n      this.$store.watch(state => state._loadingBar.length, loading => loading ? nprogress__WEBPACK_IMPORTED_MODULE_0___default().start() : nprogress__WEBPACK_IMPORTED_MODULE_0___default().done());\n      this.set({\n        isLogged: !!localStorage.getItem('token'),\n        collapsed: localStorage.getItem('collapsed') === 'true'\n      });\n      this.setLocale(localStorage.getItem('locale') || 'en');\n      this.prepareMethod([{\n        endpoint: 'config.get',\n        data: {}\n      }]);\n    }\n  }\n});\n\n//# sourceURL=webpack://ui-vmm/./src/mixin/index.js?");

/***/ }),

/***/ "./src/mixin/instance.js":
/*!*******************************!*\
  !*** ./src/mixin/instance.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  computed: {\n    instanceAddIsActive() {\n      if (this.get('disable_server_add')) {\n        return false;\n      }\n      if (this.get('user').group < 3) {\n        return true;\n      }\n      if (this.get('user').id === this.get('serverOwnerID')) {\n        return true;\n      }\n      return false;\n    }\n  },\n  methods: {\n    InstanceGetList(isForced = false) {\n      const server = this.get('servers').find(item => item.id === parseInt(this.$route.params.server_id));\n      if (server.server_id === this.get('server') && !isForced) {\n        return;\n      }\n      this.clear('instances');\n      this.set({\n        instance: -1\n      });\n      this.SendData('instance.list', {\n        server_id: server.id,\n        provider: server.provider\n      }, response => {\n        response.instance && Object.keys(response.instance).forEach(id => {\n          const instance = response.instance[id];\n          if (!server.server_protocol) {\n            return;\n          }\n          instance.icon = `fl-${instance.instance_image_os}`;\n          this.add({\n            instances: instance\n          });\n        });\n        if (this.$route.name !== 'instance-add') {\n          response.instance && this.information_block && this.information_block.forEach(item => item.key === 'instances' && (item.value = Object.keys(response.instance).length));\n        }\n      });\n    },\n    InstanceStatusName(status) {\n      switch (status) {\n        case 'operation created':\n        case 'starting':\n        case 'stopping':\n        case 'cancelling':\n        case 'aborting':\n        case 'freezing':\n          return 'processing';\n        default:\n          return 'default';\n      }\n    },\n    InstanceStatusColor(status) {\n      switch (status) {\n        case 'operation created':\n        case 'starting':\n        case 'stopping':\n        case 'cancelling':\n        case 'aborting':\n        case 'freezing':\n          return '#f3d500';\n        case 'started':\n        case 'running':\n        case 'success':\n          return '#87d068';\n        case 'stopped':\n          return '#c1c1c1';\n        case 'failure':\n        case 'cancelled':\n        case 'error':\n          return '#f50';\n        case 'pending':\n        case 'frozen':\n        case 'thawed':\n          return '#2db7f5';\n        default:\n          return 'default';\n      }\n    },\n    InstanceStatusSet(status, name) {\n      this.set({\n        object_key: 'instances',\n        object_idx: name,\n        object_idx_key: 'instance_name',\n        instance_status: status\n      });\n      this.information_data.forEach(item => item.key === 'status' && (item.value = status));\n      this.instance.instance_status = status;\n    },\n    InstanceStatusChange(action) {\n      const server = this.get('servers').find(item => item.id === parseInt(this.$route.params.server_id));\n      const currentStatus = this.instance.instance_status;\n      const instanceName = this.get('instance');\n      this.SendData('instance.action', {\n        server_id: server.id,\n        instance_name: this.$route.params.instance_name,\n        instance_status: action.key,\n        provider: this.instance.provider\n      }, response => {\n        this.InstanceStatusSet('operation created', instanceName);\n      }, () => {\n        this.InstanceStatusSet(currentStatus, instanceName);\n      }, response => {\n        let status = '';\n        switch (action.key.replace('-force', '')) {\n          case 'restart':\n          case 'start':\n            status = 'running';\n            break;\n          default:\n            status = 'stopped';\n            break;\n        }\n        this.InstanceStatusSet(status, instanceName);\n        this.log('InstanceStatusChange this', this);\n      });\n    },\n    InstanceGet() {\n      const server = this.get('servers').find(item => item.id === parseInt(this.$route.params.server_id));\n      const instance = this.get('instances').find(item => item.instance_name === this.$route.params.instance_name);\n      this.set({\n        instance: -1,\n        header_title: instance && instance.instance_name\n        // header_sub_title: instance && (`${instance.instance_image_os}, ${instance.instance_image_version}`)\n      });\n\n      this.instanceLoaded = false;\n      this.information_data.splice(0, this.information_data.length);\n      this.information_block.splice(0, this.information_block.length);\n      new Array(0).fill(3).forEach(() => this.information_block.push({\n        key: '',\n        value: ''\n      }));\n      this.SendData('instance.get', {\n        server_id: server.id,\n        instance_name: this.$route.params.instance_name,\n        provider: server.provider\n      }, response => {\n        this.set({\n          instance: response.instance_name,\n          header_title: response.instance_name\n          // header_sub_title: `${response.instance_image_os}, ${response.instance_image_version}`\n        });\n\n        this.instance = response;\n        this.instanceLoaded = true;\n        this.tabs_default = 'information';\n        this.information_block.splice(0, this.information_block.length);\n        if (this.instance.instance_profiles) {\n          this.information_block.push({\n            key: 'profiles',\n            value: this.instance.instance_profiles.split(',').length\n          });\n        }\n        if (this.instance.instance_devices) {\n          this.information_block.push({\n            key: 'devices',\n            value: Object.keys(this.instance.instance_devices).length\n          });\n        }\n        if (this.instance.instance_memory) {\n          this.information_block.push({\n            key: 'memory',\n            value: this.instance.instance_memory\n          });\n        }\n        if (this.instance.instance_cpu) {\n          this.information_block.push({\n            key: 'cpu',\n            value: this.instance.instance_cpu\n          });\n        }\n        this.information_data.push({\n          key: 'os',\n          value: `${this.instance.instance_image_os}, ${this.instance.instance_image_version}`\n        });\n        this.information_data.push({\n          key: 'arch',\n          value: this.instance.instance_arch\n        });\n        if (this.instance.instance_profiles) {\n          this.information_data.push({\n            key: 'profiles',\n            value: this.instance.instance_profiles.split(',').join(', ')\n          });\n        }\n        if (this.instance.instance_devices) {\n          this.information_data.push({\n            key: 'devices',\n            value: Object.keys(this.instance.instance_devices).join(', ')\n          });\n        }\n        this.information_data.push({\n          key: 'status',\n          value: this.instance.instance_status\n        });\n        this.information_data.push({\n          key: 'type',\n          value: this.instance.instance_type\n        });\n        this.information_data.push({\n          key: 'provider',\n          value: this.instance.provider\n        });\n      });\n    },\n    InstanceAdd() {\n      if (this.get('sending')) {\n        return false;\n      }\n      const server = this.get('servers').find(item => item.id === parseInt(this.$route.params.server_id));\n      const data = Object.assign({}, this.data);\n      data.instance_profiles = this.data.instance_profiles.join(',');\n      data.instance_memory = this.data.instance_memory.toString();\n      data.instance_cpu = this.data.instance_cpu.toString();\n      data.server_id = server.server_id;\n      data.provider = server.provider;\n      const success = this.translate('instance created successfully');\n      this.$refs.data.validate().then(() => {\n        this.SendData('instance.add', data, response => {\n          this.log('instance.add', response);\n          this.$message.success(this.translate('instance creation added to queue'));\n          this.$router.replace('/server/' + this.$route.params.server_id);\n        }, () => this.$refs.data.resetFields(), response => {\n          this.$message.success(success);\n          this.InstanceGetList(true);\n        });\n      }).catch(error => {\n        console.log('error', error);\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack://ui-vmm/./src/mixin/instance.js?");

/***/ }),

/***/ "./src/mixin/misc.js":
/*!***************************!*\
  !*** ./src/mixin/misc.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_typed_array_at_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.typed-array.at.js */ \"./node_modules/core-js/modules/es.typed-array.at.js\");\n/* harmony import */ var core_js_modules_es_typed_array_at_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_at_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_esnext_typed_array_find_last_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.typed-array.find-last.js */ \"./node_modules/core-js/modules/esnext.typed-array.find-last.js\");\n/* harmony import */ var core_js_modules_esnext_typed_array_find_last_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_typed_array_find_last_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_esnext_typed_array_find_last_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.typed-array.find-last-index.js */ \"./node_modules/core-js/modules/esnext.typed-array.find-last-index.js\");\n/* harmony import */ var core_js_modules_esnext_typed_array_find_last_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_typed_array_find_last_index_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.typed-array.set.js */ \"./node_modules/core-js/modules/es.typed-array.set.js\");\n/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var ant_design_vue_es_locale_en_US__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ant-design-vue/es/locale/en_US */ \"./node_modules/ant-design-vue/es/locale/en_US.js\");\n/* harmony import */ var ant_design_vue_es_locale_ru_RU__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ant-design-vue/es/locale/ru_RU */ \"./node_modules/ant-design-vue/es/locale/ru_RU.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _ant_design_icons_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons-vue */ \"./node_modules/@ant-design/icons-vue/es/components/Icon.js\");\n/* harmony import */ var bytes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bytes */ \"./node_modules/bytes/index.js\");\n/* harmony import */ var bytes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bytes__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n// import znCN from 'ant-design-vue/es/locale/zh_CN'\n\n\n\n\nconst ServerSvg = {\n  template: `\n    <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 1000 1000\" enable-background=\"new 0 0 1000 1000\" xml:space=\"preserve\">\n      <g>\n        <g transform=\"translate(0.000000,512.000000) scale(0.100000,-0.100000)\">\n          <path d=\"M1487.6,4995.9c-95.7-38.3-153.1-86.1-195.2-160.8c-23-40.2-296.7-872.8-612.5-1852.8L109.5,1202.2l-5.7-855.6c-3.8-696.7,0-869,23-932.2c21.1-67,23-90,0-149.3c-34.4-101.4-36.4-1724.6,0-1822.2c19.1-53.6,19.1-80.4,0-134C94.2-2783,90.3-4387,121-4501.8c28.7-99.5,156.9-227.8,256.5-256.5c109.1-30.6,9135.9-30.6,9245,0c99.5,28.7,227.8,157,256.5,256.5c30.6,114.8,26.8,1718.8-5.8,1810.7c-19.1,53.6-19.1,80.4,0,134c36.4,97.6,34.5,1720.8,0,1820.3c-21,61.2-21,84.2,0,143.6c19.1,57.4,24.9,260.3,26.8,909.2v838.4l-47.9,137.8c-24.9,76.6-285.2,890-576.1,1805C8985.1,4014,8730.5,4793,8709.4,4833.2c-45.9,78.5-111,132.1-204.8,164.6C8410.8,5030.3,1569.9,5028.4,1487.6,4995.9z M8874.1,3072.2c271.8-855.6,491.9-1560,486.2-1563.8c-5.7-5.7-1973.4-7.7-4371.8-5.7l-4364.1,5.7l490,1531.3c269.9,842.2,495.7,1546.6,503.4,1565.7c11.5,30.6,185.7,32.5,3386,28.7l3374.5-5.7L8874.1,3072.2z M9507.6,312.1v-775.2H5000H492.3L486.5,293c-1.9,415.4,0,767.5,5.7,780.9c5.7,19.1,914.9,23,4511.5,19.1l4503.8-5.7V312.1z M9507.6-1640.3v-775.2H5000H492.3l-5.7,756.1c-1.9,415.4,0,767.6,5.7,780.9c5.7,19.1,914.9,23,4511.5,19.1l4503.8-5.7V-1640.3z M9513.3-3590.7c1.9-539.8-1.9-761.8-17.2-779c-30.6-36.4-8954.1-40.2-8990.4-3.8c-17.2,17.2-23,214.4-23,771.4c0,413.4,5.7,756.1,13.4,761.8c5.7,7.7,2036.6,11.5,4511.5,9.6l4500-5.7L9513.3-3590.7z\"/>\n          <path d=\"M8408.9,685.4c-323.5-103.4-361.7-553.2-61.2-712.1c287.1-151.2,641.2,120.6,558.9,428.8C8845.3,627.9,8623.3,754.3,8408.9,685.4z\"/>\n          <path d=\"M8349.6-1299.6c-243.1-124.4-281.4-457.5-72.7-635.5c222-191.4,551.3-84.2,629.7,204.8c40.2,147.4-30.6,321.6-168.4,415.4C8638.6-1245.9,8464.4-1240.2,8349.6-1299.6z\"/>\n          <path d=\"M8378.3-3246.2c-302.4-135.9-315.8-553.2-23-700.5c168.4-84.2,342.6-49.8,467,91.9C9088.4-3550.5,8743.9-3079.7,8378.3-3246.2z\"/>\n        </g>\n      </g>\n    </svg>\n  `\n};\nconst VMSvg = {\n  template: `\n  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 1000 1000\" enable-background=\"new 0 0 1000 1000\" xml:space=\"preserve\">\n    <g>\n      <g transform=\"translate(0.000000,512.000000) scale(0.100000,-0.100000)\">\n        <path d=\"M713.4,5004.3c-283.5-55.5-544-323.7-597.6-612.9c-13.4-69-17.2-1078.4-15.3-2959.3l5.7-2852l44-111.1c59.4-143.7,172.4-285.4,298.8-369.7c183.9-120.7,227.9-128.3,850.4-137.9l559.3-7.7v203v203H1332c-432.9,0-540.1,5.7-599.5,28.7c-90,38.3-149.4,95.8-201.1,191.5l-42.1,76.6v2825.2c0,2269.7,5.7,2838.6,24.9,2896.1c32.6,93.9,172.4,220.3,266.2,239.4c40.2,7.7,1503.6,15.3,3252.3,15.3c2603,0,3192.9-3.8,3252.3-24.9c99.6-36.4,183.9-113,226-205c32.6-70.9,36.4-145.6,36.4-999.8v-925.1h203h201.1l-5.7,953.9c-7.7,1055.4-5.7,1042-137.9,1241.2c-84.3,126.4-226,239.4-369.7,298.8l-111.1,44l-3265.7,1.9C2264.8,5019.6,759.4,5013.8,713.4,5004.3z\"/>\n        <path d=\"M881.9,1491.5v-2748.6h488.4h488.4v201.1v201.1h-296.9H1265l3.8,2352.1l5.7,2350.2l2840.5,5.7l2838.6,3.8v-689.5v-689.5h201.1h201.1v881.1V4240h-3237h-3237V1491.5z\"/>\n        <path d=\"M2715,2267.2c-335.2-57.5-599.5-337.1-647.4-685.7c-11.5-78.5-15.3-1241.2-13.4-2924.8c5.7-2566.6,7.7-2804.1,38.3-2890.3c74.7-218.3,256.7-408,469.3-494.2l111.1-44.1l3244.6-5.7c2114.6-1.9,3283,1.9,3350,15.3c300.7,55.5,561.2,316,616.7,614.8c13.4,69,17.2,1078.4,15.3,2959.3l-5.7,2852l-44.1,111.1c-86.2,212.6-275.8,394.6-494.2,469.3c-86.2,30.6-346.7,32.6-3321.3,34.5C4258.7,2280.6,2764.7,2274.8,2715,2267.2z M9267.5,1855.4c90-38.3,149.4-95.8,201.1-191.5l42.1-76.6V-1238c0-2269.7-5.7-2838.6-24.9-2896.1c-32.6-93.8-172.4-220.3-266.3-239.4c-40.2-7.6-1503.6-15.3-3252.3-15.3c-3026.3,0-3183.4,1.9-3269.6,34.5c-105.3,40.2-197.3,136-226,237.5c-15.3,51.7-19.2,900.2-15.3,2907.5l5.7,2834.8l51.7,72.8c51.7,76.6,151.3,155.1,216.4,172.4c21.1,3.8,1484.4,9.6,3252.3,11.5C8842.2,1884.1,9204.3,1880.3,9267.5,1855.4z\"/>\n        <path d=\"M2849,1487.6c-7.7-5.7-13.4-1243.1-13.4-2748.6v-2735.2h3141.2h3141.2v2748.6V1501H5990.3C4268.3,1501,2854.8,1495.3,2849,1487.6z M8731.2-1251.4l-5.7-2352.1l-2742.8-5.7l-2744.7-3.8v2355.9v2355.9h2748.6H8735L8731.2-1251.4z\"/>\n      </g>\n    </g>\n  </svg>\n  `\n};\nconst SettingsSvg = {\n  template: `\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 1000 1000\" enable-background=\"new 0 0 1000 1000\" xml:space=\"preserve\">\n    <g>\n        <g>\n            <path d=\"M500,335c-92.8,0-168.4,74-168.4,165S407.1,665.1,500,665.1c92.8,0,168.3-74.1,168.3-165.1C668.3,409,592.8,335,500,335z M500,631.9c-74.6,0-135.2-59.2-135.2-131.9c0-72.7,60.6-131.8,135.2-131.8c74.5,0,135.1,59.2,135.1,131.8C635.1,572.8,574.5,631.9,500,631.9z\"/>\n            <path d=\"M860.2,382.2l-4.7-1.7L837.3,337l2-4.5c55.2-125.1,51.4-128.8,42.2-137.9l-73.6-71.8c-3-3-8.3-5.1-12.8-5.1c-4.1,0-16.7,0-125.3,49.2l-4.3,1.9l-44.8-18.1l-1.8-4.4C567.7,20,562.4,20,549.7,20H445.8c-12.7,0-18.4,0-65.8,126.7l-1.8,4.6l-44.6,18.2l-4.3-1.8c-73.5-31-116.5-46.7-127.7-46.7c-4.6,0-9.8,2-12.9,5l-73.6,72c-9.4,9.2-13.2,13.1,44.8,135.5l2.1,4.6L144,381.5l-4.5,1.7C10,433.3,10,438.1,10,451.2v101.8c0,13.1,0,18.5,129.7,65l4.6,1.6l18.2,43.3l-1.9,4.4c-55.2,125.1-51.7,128.5-42.3,137.8l73.5,71.9c3.1,3,8.4,5.1,12.9,5.1c4.1,0,16.6,0,125.3-49.2l4.3-2.1l44.9,18.1l1.8,4.5C432.2,980,437.5,980,450.2,980h103.9c13,0,18.4,0,65.8-126.8l1.8-4.6l44.7-18.1l4.3,1.8c73.5,31.1,116.4,46.8,127.5,46.8c4.5,0,9.9-2,12.9-5l73.8-72.1c9.3-9.3,13.1-13.1-45-135.4l-2.2-4.6l18.2-43.2l4.3-1.7C990,566.6,990,561.7,990,548.7V447C990,433.9,990,428.5,860.2,382.2z M828.1,599.2l-23.8,56.7c-1.8,4.3-1.7,9.3,0.3,13.6c16.8,35.1,39,83.9,48.1,108l2.6,6.8l-61.7,60.4l-6.5-2.2c-24.4-8.3-76.2-29.3-114-45.3c-3.9-1.6-8.7-1.8-12.9-0.1l-57.8,23.4c-4.3,1.8-7.7,5.3-9.3,9.6c-16.3,44-34.9,90.3-44.2,110.2l-3,6.5h-87.6l-3.1-6.1c-11.5-22.8-32.8-73.3-47.8-110.5c-1.6-4.1-5-7.5-9.2-9.3l-58-23.5c-3.9-1.6-9.2-1.4-13.1,0.3c-37.2,17-87.4,38.8-111.2,47.5l-6.6,2.5l-61.8-60.4l2.4-6.8c8.3-23.5,29.3-73.5,45.9-110.8c1.8-4.2,1.9-8.8,0.1-13.1l-23.8-56.6c-1.8-4.3-5.3-7.6-9.7-9.2c-37.7-13.5-89.1-32.8-112.6-43.3l-6.6-3v-85l6.4-3.1c22.9-10.8,74.1-31.6,112.8-46.6c4.3-1.6,7.6-4.8,9.4-9l23.9-56.7c1.8-4.4,1.7-9.3-0.3-13.6c-20-41.7-40.2-87.2-48.1-108l-2.6-6.8l61.7-60.3l6.4,2.2c23.9,8,75.5,28.8,114.2,45.3c4.1,1.7,8.6,1.7,12.8,0.1l57.8-23.5c4.2-1.8,7.6-5.3,9.2-9.6c13.7-36.8,33.4-87,44.2-110.2l3-6.5h87.6l3.1,6.2c11.3,22.7,32.7,73.3,47.7,110.6c1.7,4.1,5.1,7.5,9.2,9.2l57.9,23.4c4,1.7,9.3,1.5,13-0.2c37.5-17.1,87.9-38.9,111.4-47.5l6.7-2.3l61.7,60.2l-2.4,6.8c-8.4,23.7-29.4,73.7-45.9,110.8c-1.9,4.2-1.9,8.9-0.1,13.3l23.8,56.7c1.8,4.3,5.3,7.6,9.7,9.2c45.4,16.1,91.7,33.8,112.5,43.1l6.7,3v84.9l-6.3,3.1c-23.4,11.2-75,32-113,46.7C833.3,591.8,829.8,595.2,828.1,599.2z\"/>\n        </g>\n    </g>\n</svg>\n\n  `\n};\nconst ServerIcon = {\n  template: `\n    <Icon :component=\"Svg\" />\n  `,\n  components: {\n    Icon: _ant_design_icons_vue__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n  },\n  data() {\n    return {\n      Svg: (0,vue__WEBPACK_IMPORTED_MODULE_4__.markRaw)(ServerSvg),\n      Icon: (0,vue__WEBPACK_IMPORTED_MODULE_4__.markRaw)(_ant_design_icons_vue__WEBPACK_IMPORTED_MODULE_6__[\"default\"])\n    };\n  }\n};\nconst VMIcon = {\n  template: `\n    <Icon :component=\"Svg\" />\n  `,\n  components: {\n    Icon: _ant_design_icons_vue__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n  },\n  data() {\n    return {\n      Svg: (0,vue__WEBPACK_IMPORTED_MODULE_4__.markRaw)(VMSvg),\n      Icon: (0,vue__WEBPACK_IMPORTED_MODULE_4__.markRaw)(_ant_design_icons_vue__WEBPACK_IMPORTED_MODULE_6__[\"default\"])\n    };\n  }\n};\nconst SettingsIcon = {\n  template: `\n    <Icon :component=\"Svg\" />\n  `,\n  components: {\n    Icon: _ant_design_icons_vue__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n  },\n  data() {\n    return {\n      Svg: (0,vue__WEBPACK_IMPORTED_MODULE_4__.markRaw)(SettingsSvg),\n      Icon: (0,vue__WEBPACK_IMPORTED_MODULE_4__.markRaw)(_ant_design_icons_vue__WEBPACK_IMPORTED_MODULE_6__[\"default\"])\n    };\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    ServerIcon,\n    VMIcon,\n    SettingsIcon\n  },\n  data() {\n    return {\n      locales: {\n        en: {\n          data: ant_design_vue_es_locale_en_US__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n          country: 'us',\n          label: 'English'\n        },\n        ru: {\n          data: ant_design_vue_es_locale_ru_RU__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n          country: 'ru',\n          label: 'Русский'\n        }\n        // cn: { data: znCN, country: 'cn', label: '中文' }\n      }\n    };\n  },\n\n  methods: {\n    log() {\n      if (!this.get('_debug')) return;\n      if (window.console && console.log) {\n        const args = Array.prototype.slice.call(arguments);\n        if (this.get('_logFile') !== this.$options.__file) {\n          this.set({\n            _logFile: this.$options.__file\n          });\n          console.groupEnd();\n          console.group(['[', this.$options.__file, ']'].join(' '));\n        }\n        args.unshift(['[', (new Date().getTime() - this.$store.state._logTimer) / 1000, ']'].join(' '));\n        console.log.apply(console, args);\n      }\n    },\n    set(params) {\n      this.$store.dispatch('set', params);\n    },\n    add(params) {\n      this.$store.dispatch('add', params);\n    },\n    clear(key) {\n      this.$store.dispatch('clear', key);\n    },\n    delete(key) {\n      this.$store.dispatch('delete', key);\n    },\n    slice(state, el) {\n      setTimeout(() => {\n        const _loading = this.get(state);\n        const index = _loading.indexOf(el);\n        if (index > -1) {\n          this.log('slice store (' + state + '):', el);\n          _loading.splice(index, 1);\n        }\n      }, 300);\n    },\n    toggleLogo(icon) {\n      clearTimeout(this.logoTimer);\n      this.set({\n        robotIcon: icon\n      });\n      this.logoTimer = setTimeout(() => {\n        this.set({\n          robotIcon: 'main'\n        });\n      }, 1500);\n    },\n    blinkLogo() {\n      let state = 1;\n      const logo = ['main', 'love'];\n      const blinkLogo = setInterval(() => {\n        this.toggleLogo(logo[state ^= 1]);\n      }, 100);\n      setTimeout(() => {\n        clearInterval(blinkLogo);\n      }, 800);\n    },\n    prepareMethod(list) {\n      if (!list.length) {\n        return;\n      }\n      list.forEach(item => {\n        this.SendData(item.endpoint, item.data, response => {\n          if (item.store) {\n            this.set({\n              [item.store]: response\n            });\n          } else {\n            Object.keys(response).forEach(i => {\n              this.set({\n                [i]: response[i]\n              });\n            });\n          }\n          if (typeof item.callback === 'function') {\n            item.callback();\n          }\n        }, item.error);\n      });\n    },\n    translate(key, a) {\n      const string = this.$t(key);\n      if (a) this.log(string);\n      return string.replace(/[_-]/g, ' ').replace(/((^|([!?.]\\s))(.{1,1}))/g, i => {\n        return i.toUpperCase();\n      });\n    },\n    setLocale(locale) {\n      this.set({\n        locale\n      });\n      this.$i18n.locale = locale;\n      localStorage.setItem('locale', locale);\n    },\n    clearValidate() {\n      this.$store.watch((state, getters) => getters.get('locale'), locale => this.$refs.data && this.$refs.data.clearValidate());\n    },\n    timeFormat(timestamp) {\n      return timestamp > 0 ? new Date(timestamp * 1000).toLocaleString(this.get('locale')) : '-';\n    },\n    sizeFormat(size) {\n      return bytes__WEBPACK_IMPORTED_MODULE_5___default()(size, {\n        decimalPlaces: 2,\n        fixedDecimals: false\n      });\n    },\n    bufferDecode(value) {\n      return Uint8Array.from(atob(value), c => c.charCodeAt(0));\n    },\n    bufferEncode(value) {\n      return btoa(String.fromCharCode.apply(null, new Uint8Array(value))).replace(/\\+/g, '-').replace(/\\//g, '_').replace(/=/g, '');\n    },\n    getPlatform() {\n      return navigator?.userAgentData?.platform || navigator?.platform || 'unknown';\n    },\n    appleDevice() {\n      return ['mac', 'iphone', 'ipad'].findIndex(item => {\n        return !!this.getPlatform().toLowerCase().match(new RegExp(item));\n      }) !== -1;\n    }\n  }\n});\n\n//# sourceURL=webpack://ui-vmm/./src/mixin/misc.js?");

/***/ }),

/***/ "./src/mixin/network.js":
/*!******************************!*\
  !*** ./src/mixin/network.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  computed: {},\n  methods: {\n    NetworkGetList() {\n      const server = this.get('servers').find(item => item.id === parseInt(this.$route.params.server_id));\n      this.clear('networks');\n      this.SendData('network.list', {\n        server_id: server.server_id,\n        provider: server.provider\n      }, response => {\n        response.network && Object.keys(response.network).forEach(item => {\n          response.network[item].key = item;\n          response.network && Object.keys(response.network).forEach(i => this.add({\n            networks: response.network[i]\n          }));\n        });\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack://ui-vmm/./src/mixin/network.js?");

/***/ }),

/***/ "./src/mixin/profile.js":
/*!******************************!*\
  !*** ./src/mixin/profile.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  computed: {},\n  methods: {\n    ProfileDelete(name) {\n      const server = this.get('servers').find(item => item.id === parseInt(this.$route.params.server_id));\n      if (this.get('sending')) {\n        return false;\n      }\n      this.SendData('profile.delete', {\n        server_id: server.server_id,\n        provider: server.provider,\n        profile_name: name\n      }, response => {\n        const id = Object.keys(this.list).find(item => this.list[item].profile_name === name);\n        delete this.list[id];\n        const idx = Object.keys(this.list);\n        if (idx.length > 0) {\n          this.tabs_default = parseInt(idx[0]);\n        }\n      });\n    },\n    ProfileUpdate(name, body, rename) {\n      const server = this.get('servers').find(item => item.id === parseInt(this.$route.params.server_id));\n      if (this.get('sending')) {\n        return false;\n      }\n      const data = {\n        server_id: server.server_id,\n        provider: server.provider,\n        profile_name: name,\n        profile_body: body\n      };\n      if (name !== rename) {\n        data.profile_rename = rename;\n      }\n      this.SendData('profile.update', data, response => {\n        if (name !== rename) {\n          const id = Object.keys(this.list).find(item => this.list[item].profile_name === name);\n          this.list[id].profile_name = rename;\n        }\n        this.$message.success(this.translate('the profile has been ' + (name !== rename ? 'renamed' : 'updated')));\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack://ui-vmm/./src/mixin/profile.js?");

/***/ }),

/***/ "./src/mixin/resources.js":
/*!********************************!*\
  !*** ./src/mixin/resources.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadImages: function() { return /* binding */ loadImages; }\n/* harmony export */ });\nconst images = [__webpack_require__(/*! @/assets/envelope.svg */ \"./src/assets/envelope.svg\"), __webpack_require__(/*! @/assets/keywords.svg */ \"./src/assets/keywords.svg\"), __webpack_require__(/*! @/assets/padlock.svg */ \"./src/assets/padlock.svg\"), __webpack_require__(/*! @/assets/password.svg */ \"./src/assets/password.svg\"), __webpack_require__(/*! @/assets/pattern-lin.svg */ \"./src/assets/pattern-lin.svg\"), __webpack_require__(/*! @/assets/profile.svg */ \"./src/assets/profile.svg\"), __webpack_require__(/*! @/assets/roboter-01.svg */ \"./src/assets/roboter-01.svg\"), __webpack_require__(/*! @/assets/roboter-02.svg */ \"./src/assets/roboter-02.svg\"), __webpack_require__(/*! @/assets/roboter-03.svg */ \"./src/assets/roboter-03.svg\")];\nconst loadImages = () => {\n  images.forEach(item => {\n    const img = new Image();\n\n    // img.onload = (e) => {\n    //   console.log('preloaded:', e)\n    // }\n\n    img.src = item;\n  });\n};\n\n//# sourceURL=webpack://ui-vmm/./src/mixin/resources.js?");

/***/ }),

/***/ "./src/mixin/send-data.js":
/*!********************************!*\
  !*** ./src/mixin/send-data.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/mock */ \"./src/mock/index.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  methods: {\n    SendData(endpoint, data, handleResponse, handleFailure, handleEvent) {\n      // const methodSkipLoadingCheck = ['user.login', 'user.logout', 'user.get']\n\n      const token = localStorage.getItem('token');\n      const config = {\n        baseURL: '/api/v1/',\n        // timeout: 300,\n        headers: {},\n        validateStatus: status => {\n          if (status === 401) {\n            this.set({\n              isLogged: false\n            });\n            localStorage.setItem('token', '');\n            this.$router.replace('/auth/login');\n          }\n          return status >= 200 && status < 300;\n        }\n      };\n      config.headers['Content-Type'] = 'application/vnd.api+json';\n      if (token) {\n        config.headers.Authorization = 'Bearer ' + token;\n      }\n      this.add({\n        _loadingBar: endpoint\n      });\n      this.set({\n        sending: true\n      });\n      if (typeof handleEvent === 'function') {\n        data.request_id = (0,uuid__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n      }\n      axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(endpoint, data, config).then(response => {\n        this.slice('_loadingBar', endpoint);\n        this.set({\n          sending: false\n        });\n        if (typeof handleResponse === 'function') {\n          this.log('parse response', endpoint);\n          const _response = this._dataResponse(response.data);\n          handleResponse(_response);\n        }\n        if (typeof handleEvent === 'function') {\n          const taskID = 'task_' + endpoint + '_' + data.request_id;\n          this.set({\n            [taskID]: handleEvent\n          });\n          this.log('task id', taskID);\n        }\n      }).catch(output => {\n        this.slice('_loadingBar', endpoint);\n        this.set({\n          sending: false\n        });\n        this.log(JSON.stringify(output));\n        this.toggleLogo('angry');\n        this.log('.catch((output) => { ERROR', endpoint, data);\n        if (output.response === undefined) {\n          output.response = {\n            data: {\n              errors: [{\n                detail: output.message\n              }]\n            }\n          };\n        }\n        this.set({\n          _error: endpoint\n        });\n        this.$message.error(this.listErrors(this._dataError(output.response)), 5);\n        if (typeof handleFailure === 'function') {\n          handleFailure(output.response);\n        }\n      });\n    },\n    _dataResponse(response) {\n      let data = {};\n      this.log(Array(40).join('- '));\n      this.log('input:', JSON.stringify(response));\n      if (response.errors) {\n        data = response;\n      } else {\n        if (response.included && response.included.length) {\n          response.included.forEach(include => {\n            if (include.errors) {\n              this.$message.error(this.listErrors(include.errors));\n              return;\n            }\n            if (!data[include.type]) {\n              data[include.type] = {};\n            }\n            include.attributes.id = include.id;\n            data[include.type][include.id] = include.attributes;\n          });\n        }\n        if (typeof response.data.length !== 'undefined') {\n          /*\n           * {\"data\": [\n           *   {\"type\": string, \"id\": int, \"attributes\": object}\n           * ]}\n           */\n          response.data.forEach(line => {\n            const id = line.id || line.attributes[`${line.type}_id`];\n            line.attributes.id = id;\n            if (!data[line.type]) {\n              data[line.type] = {};\n            }\n            data[line.type][id] = line.attributes;\n            if (line.relationships) {\n              Object.keys(line.relationships).forEach(key => {\n                const relation = line.relationships[key];\n                data[line.type][id][key] = data[relation.data.type][relation.data.id];\n              });\n            }\n          });\n        } else {\n          /*\n           *{\"data\": {\n           *  \"type\": string, \"id\": int, \"attributes\": object\n           *}}\n           */\n          if (response.data.id) {\n            if (!response.data.attributes) {\n              response.data.attributes = {};\n            }\n            response.data.attributes.id = response.data.id;\n          }\n\n          // this.log\n\n          data = Object.assign(data, response.data.attributes);\n        }\n\n        // TODO: need to check work this block (!!!dont work on user login!!!)\n        // if (response.data.relationships) {\n        //   Object.keys(response.data.relationships).forEach((key) => {\n        //     const relation = response.data.relationships[key]\n        //     data[response.data.type][response.data.id][key] = data[relation.data.type][relation.data.id]\n        //   })\n        // }\n      }\n\n      this.log('output:', JSON.stringify(data));\n      this.log(Array(40).join('- '));\n      return data;\n    },\n    _dataError(response) {\n      let list = [];\n      this.log('_dataError(response) {', response);\n      if (response.data.errors === undefined) {\n        list.push({\n          status: response.status,\n          detail: response.statusText\n        });\n      } else {\n        list = response.data.errors;\n      }\n      return list;\n    },\n    listErrors(list) {\n      return this.translate('error') + ': ' + list.map(error => this.translate(error.detail)).join('; ');\n    },\n    loaded() {\n      return this.get('_loading').length < 1;\n    }\n  }\n});\n\n//# sourceURL=webpack://ui-vmm/./src/mixin/send-data.js?");

/***/ }),

/***/ "./src/mixin/server.js":
/*!*****************************!*\
  !*** ./src/mixin/server.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var bytes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bytes */ \"./node_modules/bytes/index.js\");\n/* harmony import */ var bytes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bytes__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  computed: {},\n  methods: {\n    ServerGetList() {\n      this.clear('servers');\n      this.set({\n        server: -1\n      });\n      this.SendData('server.list', {}, response => {\n        response.server && Object.keys(response.server).forEach(id => {\n          const server = response.server[id];\n          if (!server.server_protocol) {\n            return;\n          }\n          server.icon = server.server_protocol.match(/lxd/) ? 'fl-snappy' : 'fl-tux';\n          this.add({\n            servers: server\n          });\n        });\n\n        // for (let i = 10; i < 20; i++) {\n        //   this.add({ servers: { server_host: '192.168.88.230', server_id: i, server_port: 8443, server_protocol: 'lxd', icon: 'fl-snappy', id: i } })\n        // }\n      });\n    },\n\n    ServerGet() {\n      if (parseInt(this.$route.params.server_id) < 1) {\n        this.$message.error(this.translate('Invalid server ID specified'));\n        return false;\n      }\n      const server = this.get('servers').find(item => item.id === parseInt(this.$route.params.server_id));\n      this.clear('profiles');\n      this.clear('instances');\n      this.clear('supported_instance_types');\n      if (this.$route.name !== 'instance-add') {\n        this.set({\n          server: -1,\n          header_title: server.server_host,\n          header_sub_title: `:${server.server_port}, ${server.server_protocol}`\n        });\n        this.information_data.splice(0, this.information_data.length);\n        this.information_block.splice(0, this.information_block.length);\n        this.certificate_data.splice(0, this.certificate_data.length);\n        this.pool_data.splice(0, this.pool_data.length);\n        this.certificate_fingerprint = '';\n        this.expandedRowKeys = [];\n        this.volume_data = {};\n        new Array(7).fill(0).forEach(() => this.information_block.push({\n          key: '',\n          value: ''\n        }));\n      }\n      this.SendData('server.get', {\n        server_id: server.id,\n        provider: server.provider\n      }, response => {\n        this.ImageServerList();\n        this.InstanceGetList();\n        this.NetworkGetList();\n        this.server = response;\n        this.set({\n          server: server.id,\n          serverMemory: response.server_memory_total,\n          serverCpu: response.server_cpu_threads,\n          supported_instance_types: response.server_supported_instance_types.split(','),\n          serverOwnerID: response.user_id\n        });\n        response.profile && Object.keys(response.profile).forEach(i => this.add({\n          profiles: response.profile[i]\n        }));\n        if (this.$route.name !== 'instance-add') {\n          this.tabs_default = 'information';\n          // this.tabs_default = 'profiles'\n\n          this.information_block.splice(0, this.information_block.length);\n          this.information_block.push({\n            key: 'driver',\n            value: response.server_driver\n          });\n          this.information_block.push({\n            key: 'server',\n            value: response.server_server\n          });\n          this.information_block.push({\n            key: 'storage',\n            value: response.server_storage\n          });\n          this.information_block.push({\n            key: 'memory',\n            value: bytes__WEBPACK_IMPORTED_MODULE_0___default()(response.server_memory_total * 1024 * 1024, {\n              decimalPlaces: 2,\n              fixedDecimals: false\n            })\n          });\n          this.information_block.push({\n            key: 'cores',\n            value: response.server_cpu_cores\n          });\n          this.information_block.push({\n            key: 'threads',\n            value: response.server_cpu_threads\n          });\n          this.information_block.push({\n            key: 'instances',\n            value: 0\n          });\n          response.server_addresses && this.information_data.push({\n            key: 'ip address',\n            value: response.server_addresses.split(',').join(', ')\n          });\n          this.information_data.push({\n            key: 'cpu',\n            value: `${response.server_cpu_model}, ${response.server_cpu_vendor}`\n          });\n          this.information_data.push({\n            key: 'kernel',\n            value: `${response.server_kernel_version}, ${response.server_kernel_architecture}`\n          });\n          this.information_data.push({\n            key: 'driver version',\n            value: response.server_driver_version\n          });\n          this.information_data.push({\n            key: 'server version',\n            value: response.server_server_version\n          });\n          this.certificate_fingerprint = response.server_certificate_fingerprint;\n          response.certificate && Object.keys(response.certificate).forEach(i => {\n            response.certificate[i].key = i;\n            this.certificate_data.push(response.certificate[i]);\n          });\n          response.pool && Object.keys(response.pool).forEach(i => {\n            response.pool[i].key = i;\n            this.expandedRowKeys.push(i);\n            this.pool_data.push(response.pool[i]);\n          });\n          response.volume && Object.keys(response.volume).forEach(i => {\n            if (typeof this.volume_data[response.volume[i].pool_name] === 'undefined') {\n              this.volume_data[response.volume[i].pool_name] = new Array(0);\n            }\n            response.volume[i].key = i;\n            this.volume_data[response.volume[i].pool_name].push(response.volume[i]);\n          });\n        }\n        this.log('response', response);\n      });\n    },\n    ServerVerify() {\n      if (this.get('sending')) {\n        return false;\n      }\n      this.$refs.data.validate().then(() => {\n        this.SendData('server.verify', this.data, response => {\n          this.$message.success(this.translate('connection test is successfully. you can now add server'));\n          this.tested = true;\n        });\n      }).catch(error => {\n        console.log('error', error);\n      });\n    },\n    ServerAdd() {\n      if (this.get('sending')) {\n        return false;\n      }\n      this.$refs.data.validate().then(() => {\n        this.SendData('server.add', this.data, response => {\n          this.log('server.add', response);\n          this.ServerGetList();\n          this.$message.success(this.translate('server add successfully'));\n          this.$router.replace('/server/' + response.id);\n        }, () => this.$refs.data.resetFields());\n      }).catch(error => {\n        console.log('error', error);\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack://ui-vmm/./src/mixin/server.js?");

/***/ }),

/***/ "./src/mixin/ssh-key.js":
/*!******************************!*\
  !*** ./src/mixin/ssh-key.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  computed: {},\n  methods: {\n    SSHKeyDelete(id) {\n      this.SendData('ssh-key.delete', {\n        key_id: id\n      }, response => this.keys_data.splice(this.keys_data.findIndex(el => el.id === id), 1));\n    },\n    SSHKeyGetList() {\n      this.keys_data.splice(0, this.keys_data.length);\n      this.SendData('ssh-key.get', {}, response => {\n        response['ssh-key'] && Object.keys(response['ssh-key']).forEach(id => {\n          response['ssh-key'][id].key = id;\n          this.keys_data.push(response['ssh-key'][id]);\n        });\n      });\n    },\n    SSHKeyAdd() {\n      if (this.get('sending')) {\n        return false;\n      }\n      this.$refs.data.validate().then(() => {\n        this.SendData('ssh-key.add', this.data, response => {\n          this.SSHKeyGetList();\n          this.data.key_public = '';\n          this.data.key_name = '';\n          this.tabs_default = 'list';\n        }, () => this.$refs.data.resetFields());\n      }).catch(error => {\n        console.log('error', error);\n      });\n    },\n    SSHKeyParse() {\n      if (this.data.key_public.match(/^ssh-/)) {\n        const entry = this.data.key_public.split(' ');\n        if (entry.length === 3) {\n          this.data.key_name = entry.splice(2, 1)[0];\n          this.data.key_public = entry.join(' ');\n        }\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack://ui-vmm/./src/mixin/ssh-key.js?");

/***/ }),

/***/ "./src/mixin/token.js":
/*!****************************!*\
  !*** ./src/mixin/token.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  computed: {},\n  methods: {\n    TokenRevoke(name) {\n      this.SendData('token.revoke', {\n        token_name: name\n      }, response => {\n        const idx = this.token_data.findIndex(el => el.token_name === name);\n        this.token_data[idx].revoke_time = new Date() / 1000;\n        this.token_data[idx].token_state = 0;\n      });\n    },\n    TokenGetList() {\n      this.token_data.splice(0, this.token_data.length);\n      this.SendData('token.get', {}, response => {\n        response.token && Object.keys(response.token).forEach(id => {\n          response.token[id].key = id;\n          this.token_data.push(response.token[id]);\n        });\n      });\n    },\n    TokenCopy() {\n      this.$refs.token.$el.select();\n      this.$refs.token.$el.setSelectionRange(0, 99999);\n      if (document.execCommand('copy')) {\n        this.token = '';\n        this.visible = false;\n        this.$message.success(this.translate('the token was copied'));\n      } else {\n        this.$message.error(this.translate('failed to copy token'), 5);\n      }\n    },\n    TokenCreate() {\n      if (this.get('sending')) {\n        return false;\n      }\n      this.$refs.data.validate().then(() => {\n        this.SendData('token.create', this.data, response => {\n          this.TokenGetList();\n          this.data.token_lifetime = 60 * 60;\n          this.data.token_revoke_all = false;\n          this.tabs_default = 'list';\n          this.visible = true;\n          this.token = response.token;\n        }, () => this.reset());\n      }).catch(error => {\n        console.log('error', error);\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack://ui-vmm/./src/mixin/token.js?");

/***/ }),

/***/ "./src/mixin/user.js":
/*!***************************!*\
  !*** ./src/mixin/user.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  computed: {\n    // isLogged() {\n    //   console.log(':isLogged:', !!localStorage.getItem('token'), localStorage.getItem('token'))\n\n    //   return !!localStorage.getItem('token')\n    // }\n  },\n  methods: {\n    logout() {\n      this.SendData('user.logout', {}, response => {\n        this.set({\n          user: {},\n          isLogged: false\n        });\n        localStorage.setItem('token', '');\n        this.$router.replace('/auth/login');\n      });\n    },\n    UserGetCredentialList() {\n      this.credential_data.splice(0, this.credential_data.length);\n      this.SendData('user.credentialGet', {}, response => {\n        response.credential && Object.keys(response.credential).forEach(id => {\n          response.credential[id].key = id;\n          this.credential_data.push(response.credential[id]);\n        });\n      });\n    },\n    UserDeleteCredential(id) {\n      this.SendData('user.credentialDelete', {\n        key_id: id\n      }, response => this.credential_data.splice(this.credential_data.findIndex(el => el.key_id === id), 1));\n    }\n  }\n});\n\n//# sourceURL=webpack://ui-vmm/./src/mixin/user.js?");

/***/ }),

/***/ "./src/mixin/webauth.js":
/*!******************************!*\
  !*** ./src/mixin/webauth.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  computed: {\n    WebAuthIsAvailable() {\n      try {\n        return !!window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();\n      } catch {\n        return false;\n      }\n    }\n  },\n  methods: {\n    WebAuthAssertionGet() {\n      this.webauth = true;\n      this.$refs.data.validateFields(['user_login']).then(() => {\n        this.SendData('user.assertionGet', {\n          user_login: this.data.user_login\n        }, response => {\n          response.publicKey.challenge = this.bufferDecode(response.publicKey.challenge);\n          response.publicKey.allowCredentials.forEach(item => {\n            item.id = this.bufferDecode(item.id);\n          });\n          const _ = this;\n          navigator.credentials.get({\n            publicKey: response.publicKey\n          }).then(function (assertion) {\n            _.SendData('user.assertionVerify', {\n              user_login: _.data.user_login,\n              id: assertion.id,\n              rawId: _.bufferEncode(assertion.rawId),\n              type: assertion.type,\n              response: {\n                authenticatorData: _.bufferEncode(assertion.response.authenticatorData),\n                clientDataJSON: _.bufferEncode(assertion.response.clientDataJSON),\n                signature: _.bufferEncode(assertion.response.signature),\n                userHandle: _.bufferEncode(assertion.response.userHandle)\n              }\n            }, response => {\n              _.assertionVerified(response);\n              // TODO: после создания учетки высылать код проверки на почту\n              _.webauth = false;\n            }, () => {\n              this.webauth = false;\n            });\n          }).catch(error => {\n            _.log('error', error);\n            _.webauth = false;\n          });\n        }, () => {\n          this.webauth = false;\n        });\n      }).catch(error => {\n        console.log('error', error);\n        this.webauth = false;\n      });\n    },\n    WebAuthCredentialMake(userLogin, userEmail, actionType) {\n      this.webauth = true;\n      this.log('actionType', actionType === 'register');\n      this.SendData('user.credentialMake', {\n        user_login: userLogin,\n        user_email: userEmail,\n        user_register: actionType === 'register',\n        attestation_type: this.get('webauth_attestation_type'),\n        authenticator_attachment: this.appleDevice() ? 'platform' : 'cross-platform'\n      }, response => {\n        response.publicKey.challenge = this.bufferDecode(response.publicKey.challenge);\n        response.publicKey.user.id = this.bufferDecode(response.publicKey.user.id);\n        if (response.publicKey.excludeCredentials) {\n          for (let i = 0; i < response.publicKey.excludeCredentials.length; i++) {\n            response.publicKey.excludeCredentials[i].id = this.bufferDecode(response.publicKey.excludeCredentials[i].id);\n          }\n        }\n        const _ = this;\n        _.log('user.credentialMake response', response);\n        navigator.credentials.create({\n          publicKey: response.publicKey\n        }).then(function (credential) {\n          _.SendData('user.credentialMake', {\n            user_login: userLogin,\n            user_email: userEmail,\n            user_register: actionType === 'register',\n            id: credential.id,\n            rawId: _.bufferEncode(credential.rawId),\n            type: credential.type,\n            response: {\n              attestationObject: _.bufferEncode(credential.response.attestationObject),\n              clientDataJSON: _.bufferEncode(credential.response.clientDataJSON)\n            }\n          }, response => {\n            _.credentialCreated();\n            _.webauth = false;\n          }, () => {\n            this.webauth = false;\n          });\n        }).catch(error => {\n          _.$message.error(_.translate('error') + ': ' + _.translate(error.toString().replace(/(^(.*?): | See: .*)/g, '')));\n          _.webauth = false;\n        });\n      }, () => {\n        this.webauth = false;\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack://ui-vmm/./src/mixin/webauth.js?");

/***/ }),

/***/ "./src/mock/index.js":
/*!***************************!*\
  !*** ./src/mock/index.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mockjs */ \"./node_modules/mockjs/dist/mock.js\");\n/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mockjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mock_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock.config */ \"./src/mock/mock.config.js\");\n/* harmony import */ var _mock_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock.event */ \"./src/mock/mock.event.js\");\n/* harmony import */ var _mock_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mock.image */ \"./src/mock/mock.image.js\");\n/* harmony import */ var _mock_instance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mock.instance */ \"./src/mock/mock.instance.js\");\n/* harmony import */ var _mock_network__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mock.network */ \"./src/mock/mock.network.js\");\n/* harmony import */ var _mock_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mock.server */ \"./src/mock/mock.server.js\");\n/* harmony import */ var _mock_sshkey__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mock.sshkey */ \"./src/mock/mock.sshkey.js\");\n/* harmony import */ var _mock_token__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mock.token */ \"./src/mock/mock.token.js\");\n/* harmony import */ var _mock_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mock.user */ \"./src/mock/mock.user.js\");\n\n\n\n\n\n\n\n\n\n\nif (true) {\n  mockjs__WEBPACK_IMPORTED_MODULE_0___default().mock('/api/v1/config.get', _mock_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get);\n  mockjs__WEBPACK_IMPORTED_MODULE_0___default().mock('/api/v1/event.auth', _mock_event__WEBPACK_IMPORTED_MODULE_2__[\"default\"].auth);\n  mockjs__WEBPACK_IMPORTED_MODULE_0___default().mock('/api/v1/image.list', _mock_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"].list);\n  mockjs__WEBPACK_IMPORTED_MODULE_0___default().mock('/api/v1/image.serverList', _mock_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"].serverList);\n  mockjs__WEBPACK_IMPORTED_MODULE_0___default().mock('/api/v1/instance.get', _mock_instance__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get);\n  mockjs__WEBPACK_IMPORTED_MODULE_0___default().mock('/api/v1/instance.list', _mock_instance__WEBPACK_IMPORTED_MODULE_4__[\"default\"].list);\n  mockjs__WEBPACK_IMPORTED_MODULE_0___default().mock('/api/v1/network.list', _mock_network__WEBPACK_IMPORTED_MODULE_5__[\"default\"].list);\n  mockjs__WEBPACK_IMPORTED_MODULE_0___default().mock('/api/v1/server.get', _mock_server__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get);\n  mockjs__WEBPACK_IMPORTED_MODULE_0___default().mock('/api/v1/server.list', _mock_server__WEBPACK_IMPORTED_MODULE_6__[\"default\"].list);\n  mockjs__WEBPACK_IMPORTED_MODULE_0___default().mock('/api/v1/ssh-key.add', _mock_sshkey__WEBPACK_IMPORTED_MODULE_7__[\"default\"].add);\n  mockjs__WEBPACK_IMPORTED_MODULE_0___default().mock('/api/v1/ssh-key.delete', _mock_sshkey__WEBPACK_IMPORTED_MODULE_7__[\"default\"].delete);\n  mockjs__WEBPACK_IMPORTED_MODULE_0___default().mock('/api/v1/ssh-key.get', _mock_sshkey__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get);\n  mockjs__WEBPACK_IMPORTED_MODULE_0___default().mock('/api/v1/token.create', _mock_token__WEBPACK_IMPORTED_MODULE_8__[\"default\"].create);\n  mockjs__WEBPACK_IMPORTED_MODULE_0___default().mock('/api/v1/token.get', _mock_token__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get);\n  mockjs__WEBPACK_IMPORTED_MODULE_0___default().mock('/api/v1/token.revoke', _mock_token__WEBPACK_IMPORTED_MODULE_8__[\"default\"].revoke);\n  mockjs__WEBPACK_IMPORTED_MODULE_0___default().mock('/api/v1/user.credentialDelete', _mock_user__WEBPACK_IMPORTED_MODULE_9__[\"default\"].credentialDelete);\n  mockjs__WEBPACK_IMPORTED_MODULE_0___default().mock('/api/v1/user.credentialGet', _mock_user__WEBPACK_IMPORTED_MODULE_9__[\"default\"].credentialGet);\n  mockjs__WEBPACK_IMPORTED_MODULE_0___default().mock('/api/v1/user.emailChange', _mock_user__WEBPACK_IMPORTED_MODULE_9__[\"default\"].emailChange);\n  mockjs__WEBPACK_IMPORTED_MODULE_0___default().mock('/api/v1/user.get', _mock_user__WEBPACK_IMPORTED_MODULE_9__[\"default\"].get);\n  mockjs__WEBPACK_IMPORTED_MODULE_0___default().mock('/api/v1/user.login', _mock_user__WEBPACK_IMPORTED_MODULE_9__[\"default\"].login);\n  mockjs__WEBPACK_IMPORTED_MODULE_0___default().mock('/api/v1/user.logout', _mock_user__WEBPACK_IMPORTED_MODULE_9__[\"default\"].logout);\n  mockjs__WEBPACK_IMPORTED_MODULE_0___default().mock('/api/v1/user.passwordLock', _mock_user__WEBPACK_IMPORTED_MODULE_9__[\"default\"].passwordLock);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = ((mockjs__WEBPACK_IMPORTED_MODULE_0___default()));\n\n//# sourceURL=webpack://ui-vmm/./src/mock/index.js?");

/***/ }),

/***/ "./src/mock/mock.config.js":
/*!*********************************!*\
  !*** ./src/mock/mock.config.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mockjs */ \"./node_modules/mockjs/dist/mock.js\");\n/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mockjs__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  get: mockjs__WEBPACK_IMPORTED_MODULE_0___default().mock({\n    data: {\n      'id|1-100': 1,\n      type: 'config',\n      attributes: {\n        disable_user_recovery: true,\n        disable_user_registration: true,\n        disable_server_add: true,\n        disable_ssh_key_add: true,\n        stream: '@guid',\n        webauth_enabled: false,\n        simplestream_enabled: true\n      }\n    }\n  })\n});\n\n//# sourceURL=webpack://ui-vmm/./src/mock/mock.config.js?");

/***/ }),

/***/ "./src/mock/mock.event.js":
/*!********************************!*\
  !*** ./src/mock/mock.event.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mockjs */ \"./node_modules/mockjs/dist/mock.js\");\n/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mockjs__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  auth: mockjs__WEBPACK_IMPORTED_MODULE_0___default().mock({\n    data: {\n      type: 'event',\n      attributes: {\n        response: true\n      }\n    }\n  })\n});\n\n//# sourceURL=webpack://ui-vmm/./src/mock/mock.event.js?");

/***/ }),

/***/ "./src/mock/mock.image.js":
/*!********************************!*\
  !*** ./src/mock/mock.image.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mockjs */ \"./node_modules/mockjs/dist/mock.js\");\n/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mockjs__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  serverList: mockjs__WEBPACK_IMPORTED_MODULE_0___default().mock({\n    data: [{\n      id: 2152,\n      type: 'image',\n      attributes: {\n        image_server_host: 'https://images.linuxcontainers.org',\n        image_server_protocol: 'simplestreams'\n      }\n    }, {\n      id: 2312,\n      type: 'image',\n      attributes: {\n        image_server_host: 'https://cloud-images.ubuntu.com/releases',\n        image_server_protocol: 'simplestreams'\n      }\n    }]\n  }),\n  list: mockjs__WEBPACK_IMPORTED_MODULE_0___default().mock({\n    'data|3-50': [{\n      'id|1-100': 1,\n      type: 'image',\n      attributes: {\n        '_version|18-23.2': 1,\n        provider: 'lxd',\n        image_architecture: 'x86_64',\n        image_cached: true,\n        image_description: 'ubuntu @/_version LTS amd64 (release)',\n        image_expires_at: '@integer(1686873600, 1696873600)',\n        image_fingerprint: '@string(\"lower\", 64)',\n        image_instance_type: 'container',\n        image_last_used_at: '@integer(1500000000, 1686873600)'\n      }\n    }]\n  })\n});\n\n//# sourceURL=webpack://ui-vmm/./src/mock/mock.image.js?");

/***/ }),

/***/ "./src/mock/mock.instance.js":
/*!***********************************!*\
  !*** ./src/mock/mock.instance.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mockjs */ \"./node_modules/mockjs/dist/mock.js\");\n/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mockjs__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  get: req => {\n    const data = JSON.parse(req.body);\n    return mockjs__WEBPACK_IMPORTED_MODULE_0___default().mock({\n      data: {\n        id: '@integer(100, 200)',\n        type: 'instance',\n        attributes: {\n          provider: 'lxd',\n          instance_name: data.instance_name,\n          instance_type: 'container',\n          instance_memory: '@integer(100, 500)MB',\n          instance_cpu: '@integer(1, 4)',\n          'instance_profiles|1': ['default,net,dom,test', 'default,net,dom', 'default,net', 'default'],\n          instance_arch: 'amd64',\n          instance_devices: {\n            eth0: {\n              name: 'eth0',\n              network: 'lxdbr0',\n              type: 'nic'\n            },\n            root: {\n              path: '/',\n              pool: 'default',\n              type: 'disk'\n            }\n          },\n          'instance_status|1': ['running', 'stopped'],\n          'instance_image_os|1': ['alpine', 'archlinux', 'centos', 'coreos', 'debian', 'fedora', 'gentoo', 'ubuntu'],\n          instance_image_version: '22.04'\n        }\n      }\n    });\n  },\n  list: mockjs__WEBPACK_IMPORTED_MODULE_0___default().mock({\n    'data|5-15': [{\n      id: '@integer(100, 200)',\n      type: 'instance',\n      attributes: {\n        provider: 'lxd',\n        instance_name: '@string(\"lower\", 10)',\n        instance_type: 'container',\n        instance_arch: 'amd64',\n        'instance_status|1': ['operation created', 'running', 'stopped'],\n        'instance_image_os|1': ['alpine', 'archlinux', 'centos', 'coreos', 'debian', 'fedora', 'gentoo', 'ubuntu'],\n        instance_image_version: '22.04'\n      }\n    }]\n  })\n});\n\n//# sourceURL=webpack://ui-vmm/./src/mock/mock.instance.js?");

/***/ }),

/***/ "./src/mock/mock.network.js":
/*!**********************************!*\
  !*** ./src/mock/mock.network.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mockjs */ \"./node_modules/mockjs/dist/mock.js\");\n/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mockjs__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  list: mockjs__WEBPACK_IMPORTED_MODULE_0___default().mock({\n    data: [{\n      'id|1-100': 1,\n      type: 'network',\n      attributes: {\n        provider: 'lxd',\n        network_name: 'lxdbr0',\n        network_type: 'bridge',\n        network_addr: '@ip()/24'\n      }\n    }]\n  })\n});\n\n//# sourceURL=webpack://ui-vmm/./src/mock/mock.network.js?");

/***/ }),

/***/ "./src/mock/mock.server.js":
/*!*********************************!*\
  !*** ./src/mock/mock.server.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mockjs */ \"./node_modules/mockjs/dist/mock.js\");\n/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mockjs__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  get: mockjs__WEBPACK_IMPORTED_MODULE_0___default().mock({\n    data: {\n      'id|1-100': 1,\n      type: 'server',\n      attributes: {\n        provider: 'lxd',\n        user_id: 1,\n        server_addresses: '@/server_host',\n        server_certificate_fingerprint: '@string(\"lower\", 64)',\n        server_cpu_cores: 4,\n        server_cpu_model: 'AMD Ryzen 7 5800X3D 8-Core Processor',\n        server_cpu_threads: 8,\n        server_cpu_vendor: 'AuthenticAMD',\n        server_driver: 'lxc',\n        server_driver_version: '5.0.2',\n        server_host: '@ip',\n        server_id: '@../id',\n        server_kernel_architecture: 'x86_64',\n        server_kernel_version: '5.15.0-76-generic',\n        server_memory_total: '@integer(25000, 50000)',\n        server_memory_used: '@integer(10000, 20000)',\n        server_port: 8443,\n        server_protocol: 'lxd',\n        server_server: 'lxd',\n        server_server_version: '5.0.2',\n        server_storage: 'dir',\n        server_storage_version: '1',\n        server_supported_instance_types: 'container,virtual-machine'\n      },\n      relationships: {\n        certificate: {\n          data: [{\n            id: 2240,\n            type: 'certificate'\n          }, {\n            id: 2207,\n            type: 'certificate'\n          }]\n        },\n        instance: {\n          data: [{\n            id: 2166,\n            type: 'instance'\n          }]\n        },\n        profile: {\n          data: [{\n            id: 2491,\n            type: 'profile'\n          }, {\n            id: 2415,\n            type: 'profile'\n          }]\n        },\n        volume: {\n          data: [{\n            id: 2145,\n            type: 'volume'\n          }]\n        }\n      }\n    },\n    included: [{\n      id: 2166,\n      type: 'instance',\n      attributes: {\n        provider: 'lxd',\n        instance_name: 'test',\n        instance_type: 'container',\n        instance_arch: 'amd64',\n        instance_status: 'running',\n        instance_image_os: 'ubuntu',\n        instance_image_version: '22.04'\n      }\n    }, {\n      id: 2240,\n      type: 'certificate',\n      attributes: {\n        provider: 'lxd',\n        certificate_fingerprint: '6746f6e4e255d39522bdd502be95311d4080e8d08c3259ed22334f2b017b87ec',\n        certificate_name: 'root@lxd',\n        certificate_type: 'client'\n      }\n    }, {\n      id: 220111,\n      type: 'certificate',\n      attributes: {\n        provider: 'lxd',\n        certificate_fingerprint: 'a540bcc06cafb13db3e07788a2cf3bca380b12bb81c81cbc02c3cc429350c4ac',\n        certificate_name: 'provider-lxd',\n        certificate_type: 'client'\n      }\n    }, {\n      id: 2491,\n      type: 'profile',\n      attributes: {\n        provider: 'lxd',\n        profile_body: 'config: {}\\ndescription: Default LXD profiles\\ndevices:\\n  eth0:\\n    name: eth0\\n    network: lxdbr0\\n    type: nic\\n  root:\\n    path: /\\n    pool: default\\n    type: disk\\nname: default\\nused_by:\\n- /1.0/instances/test\\n',\n        profile_name: 'default'\n      }\n    }, {\n      id: 2415,\n      type: 'profile',\n      attributes: {\n        provider: 'lxd',\n        profile_body: 'config: {}\\ndescription: Network profile test 2\\ndevices:\\n  eth0:\\n    name: eth0\\n    network: lxdbr0\\n    type: nic\\nname: net\\nused_by: []\\n',\n        profile_name: 'net'\n      }\n    }, {\n      id: 2145,\n      type: 'volume',\n      attributes: {\n        provider: 'lxd',\n        pool_name: 'default',\n        volume_name: 'test',\n        volume_type: 'container',\n        volume_used_by: '/1.0/instances/test'\n      },\n      relationships: {\n        pool: {\n          data: [{\n            id: 2196,\n            type: 'pool'\n          }]\n        }\n      }\n    }, {\n      id: 2196,\n      type: 'pool',\n      attributes: {\n        provider: 'lxd',\n        pool_driver: 'dir',\n        pool_inodes_total: 1310720,\n        pool_inodes_used: 160440,\n        pool_name: 'default',\n        pool_source: '/var/snap/lxd/common/lxd/storage-pools/default',\n        pool_space_total: 20954300416,\n        pool_space_used: 8028934144,\n        pool_status: 'created'\n      }\n    }]\n  }),\n  list: mockjs__WEBPACK_IMPORTED_MODULE_0___default().mock({\n    'data|3-10': [{\n      type: 'server',\n      attributes: {\n        provider: 'lxd',\n        server_host: '@ip',\n        server_id: '@increment',\n        server_port: 8443,\n        server_protocol: '@provider'\n      }\n    }]\n  })\n});\n\n//# sourceURL=webpack://ui-vmm/./src/mock/mock.server.js?");

/***/ }),

/***/ "./src/mock/mock.sshkey.js":
/*!*********************************!*\
  !*** ./src/mock/mock.sshkey.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mockjs */ \"./node_modules/mockjs/dist/mock.js\");\n/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mockjs__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  add: mockjs__WEBPACK_IMPORTED_MODULE_0___default().mock({\n    data: {\n      id: '@integer(1, 100)',\n      type: 'ssh-key',\n      attributes: {\n        response: true\n      }\n    }\n  }),\n  delete: mockjs__WEBPACK_IMPORTED_MODULE_0___default().mock({\n    data: {\n      id: '@integer(1, 100)',\n      type: 'ssh-key',\n      attributes: {\n        response: true\n      }\n    }\n  }),\n  get: mockjs__WEBPACK_IMPORTED_MODULE_0___default().mock({\n    'data|5-15': [{\n      type: 'ssh-key',\n      id: '@integer(1, 100)',\n      attributes: {\n        key_type: 'ssh',\n        key_name: '@lower(@first)@@word(10).local',\n        key_public: 'SHA256:@word(43)',\n        key_timeadd: '@integer(1500000000, 1600000000)',\n        user_id: 1,\n        provider: 'internal'\n      }\n    }]\n  })\n});\n\n//# sourceURL=webpack://ui-vmm/./src/mock/mock.sshkey.js?");

/***/ }),

/***/ "./src/mock/mock.token.js":
/*!********************************!*\
  !*** ./src/mock/mock.token.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mockjs */ \"./node_modules/mockjs/dist/mock.js\");\n/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mockjs__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  create: mockjs__WEBPACK_IMPORTED_MODULE_0___default().mock({\n    data: {\n      id: '@integer(1, 100)',\n      type: 'token',\n      attributes: {\n        token: '@string(250)'\n      }\n    }\n  }),\n  get: mockjs__WEBPACK_IMPORTED_MODULE_0___default().mock({\n    'data|5-15': [{\n      type: 'token',\n      attributes: {\n        revoke_time: '@integer(1680000000, 1689000000)',\n        token_id: '@integer(1, 100)',\n        token_name: '@guid',\n        'token_state|0-1': 1,\n        token_time_expire: '@integer(1690000000, 1691000000)',\n        token_time_start: '@integer(1500000000, 1600000000)',\n        'token_type|+1': ['system.api', 'user.login'],\n        user_id: 1\n      }\n    }]\n  }),\n  revoke: mockjs__WEBPACK_IMPORTED_MODULE_0___default().mock({\n    data: {\n      id: '@integer(1, 100)',\n      type: 'token',\n      attributes: {\n        response: true\n      }\n    }\n  })\n});\n\n//# sourceURL=webpack://ui-vmm/./src/mock/mock.token.js?");

/***/ }),

/***/ "./src/mock/mock.user.js":
/*!*******************************!*\
  !*** ./src/mock/mock.user.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mockjs */ \"./node_modules/mockjs/dist/mock.js\");\n/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mockjs__WEBPACK_IMPORTED_MODULE_0__);\n\nconst attributes = {\n  user: {\n    email: '@email(\"gmail.com\")',\n    group: 4,\n    login: '@lower(@first)',\n    password_locked: true,\n    photo: 'https://secure.gravatar.com/avatar/912ac58cea32bded67420735e6b53d1c?d=identicon\\u0026s=200'\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  credentialDelete: mockjs__WEBPACK_IMPORTED_MODULE_0___default().mock({\n    data: {\n      type: 'user',\n      attributes: {\n        response: true\n      }\n    }\n  }),\n  credentialGet: mockjs__WEBPACK_IMPORTED_MODULE_0___default().mock({\n    'data|5-15': [{\n      'id|1-100': 1,\n      type: 'credential',\n      attributes: {\n        key_name: 'Mac; Mac OS X 10.15.7; Chrome 114.0.0',\n        key_timeadd: '@integer(1500000000, 1600000000)'\n      }\n    }]\n  }),\n  emailChange: mockjs__WEBPACK_IMPORTED_MODULE_0___default().mock({\n    data: {\n      type: 'user',\n      attributes: {\n        response: true\n      }\n    }\n  }),\n  get: mockjs__WEBPACK_IMPORTED_MODULE_0___default().mock({\n    data: {\n      'id|1-100': 1,\n      type: 'user',\n      attributes: attributes.user\n    }\n  }),\n  login: mockjs__WEBPACK_IMPORTED_MODULE_0___default().mock({\n    data: {\n      'id|1-100': 1,\n      type: 'user',\n      attributes: {\n        token: '@string(250)'\n      },\n      relationships: {\n        user: {\n          data: {\n            id: '@../../../id',\n            type: 'user'\n          }\n        }\n      }\n    },\n    included: [{\n      id: '@/data/id',\n      type: 'user',\n      attributes: attributes.user\n    }]\n  }),\n  logout: mockjs__WEBPACK_IMPORTED_MODULE_0___default().mock({\n    data: {\n      type: 'user',\n      attributes: {\n        response: true\n      }\n    }\n  }),\n  passwordLock: mockjs__WEBPACK_IMPORTED_MODULE_0___default().mock({\n    data: {\n      type: 'user',\n      attributes: {\n        response: true\n      }\n    }\n  })\n});\n\n//# sourceURL=webpack://ui-vmm/./src/mock/mock.user.js?");

/***/ }),

/***/ "./src/plugins/i18n.js":
/*!*****************************!*\
  !*** ./src/plugins/i18n.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   importLocale: function() { return /* binding */ importLocale; }\n/* harmony export */ });\n/* harmony import */ var vue_i18n_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-i18n/index */ \"./node_modules/vue-i18n/dist/vue-i18n.cjs.js\");\n\nconst i18n = new vue_i18n_index__WEBPACK_IMPORTED_MODULE_0__.createI18n({\n  // legacy: true,\n  locale: 'en',\n  fallbackLocale: 'en',\n  messages: {},\n  missingWarn: false,\n  fallbackWarn: false,\n  silentTranslationWarn: true,\n  silentFallbackWarn: true\n});\nasync function importLocale(locale) {\n  const messages = await __webpack_require__(\"./src/locales lazy recursive ^\\\\.\\\\/.*\\\\.json$\")(\"./\" + locale + \".json\");\n  i18n.global.setLocaleMessage(locale, messages);\n  // i18n.global.locale.value = locale\n}\n\n(async () => {\n  await importLocale('en');\n  await importLocale('ru');\n})();\n/* harmony default export */ __webpack_exports__[\"default\"] = (i18n);\n\n//# sourceURL=webpack://ui-vmm/./src/plugins/i18n.js?");

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm-bundler.js\");\n/* harmony import */ var _mixin_resources__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mixin/resources */ \"./src/mixin/resources.js\");\n\n\nconst routes = [{\n  path: '/',\n  name: 'home',\n  component: () => __webpack_require__.e(/*! import() */ \"src_components_home_vue\").then(__webpack_require__.bind(__webpack_require__, /*! @/components/home */ \"./src/components/home.vue\")),\n  children: [{\n    path: 'server/add',\n    name: 'server-add',\n    component: () => __webpack_require__.e(/*! import() */ \"src_components_server_add_vue\").then(__webpack_require__.bind(__webpack_require__, /*! @/components/server/add */ \"./src/components/server/add.vue\"))\n  }, {\n    path: 'server/:server_id',\n    name: 'server-get',\n    component: () => Promise.all(/*! import() */[__webpack_require__.e(\"node_modules_js-yaml_dist_js-yaml_mjs\"), __webpack_require__.e(\"src_components_server_get_vue\")]).then(__webpack_require__.bind(__webpack_require__, /*! @/components/server/get */ \"./src/components/server/get.vue\"))\n  }, {\n    path: 'server/:server_id/add',\n    name: 'instance-add',\n    component: () => Promise.all(/*! import() */[__webpack_require__.e(\"node_modules_js-yaml_dist_js-yaml_mjs\"), __webpack_require__.e(\"src_components_instance_add_vue\")]).then(__webpack_require__.bind(__webpack_require__, /*! @/components/instance/add */ \"./src/components/instance/add.vue\"))\n  }, {\n    path: 'server/:server_id/:instance_name',\n    name: 'instance-get',\n    component: () => __webpack_require__.e(/*! import() */ \"src_components_instance_get_vue\").then(__webpack_require__.bind(__webpack_require__, /*! @/components/instance/get */ \"./src/components/instance/get.vue\"))\n  }, {\n    path: 'settings',\n    name: 'settings',\n    component: () => __webpack_require__.e(/*! import() */ \"src_components_settings_index_vue\").then(__webpack_require__.bind(__webpack_require__, /*! @/components/settings */ \"./src/components/settings/index.vue\")),\n    children: [{\n      name: 'api-tokens',\n      path: 'api-tokens',\n      component: () => __webpack_require__.e(/*! import() */ \"src_components_settings_api-tokens_vue\").then(__webpack_require__.bind(__webpack_require__, /*! @/components/settings/api-tokens */ \"./src/components/settings/api-tokens.vue\"))\n    }, {\n      name: 'change-email',\n      path: 'change-email',\n      component: () => __webpack_require__.e(/*! import() */ \"src_components_settings_change-email_vue\").then(__webpack_require__.bind(__webpack_require__, /*! @/components/settings/change-email */ \"./src/components/settings/change-email.vue\"))\n    }, {\n      name: 'change-password',\n      path: 'change-password',\n      component: () => __webpack_require__.e(/*! import() */ \"src_components_settings_change-password_vue\").then(__webpack_require__.bind(__webpack_require__, /*! @/components/settings/change-password */ \"./src/components/settings/change-password.vue\"))\n    }, {\n      name: 'security-keys',\n      path: 'security-keys',\n      component: () => __webpack_require__.e(/*! import() */ \"src_components_settings_security-keys_vue\").then(__webpack_require__.bind(__webpack_require__, /*! @/components/settings/security-keys */ \"./src/components/settings/security-keys.vue\"))\n    }, {\n      name: 'ssh-keys',\n      path: 'ssh-keys',\n      component: () => __webpack_require__.e(/*! import() */ \"src_components_settings_ssh-keys_vue\").then(__webpack_require__.bind(__webpack_require__, /*! @/components/settings/ssh-keys */ \"./src/components/settings/ssh-keys.vue\"))\n    }]\n  }]\n}, {\n  path: '/auth',\n  name: 'auth',\n  component: () => __webpack_require__.e(/*! import() */ \"src_components_auth_index_vue\").then(__webpack_require__.bind(__webpack_require__, /*! @/components/auth */ \"./src/components/auth/index.vue\")),\n  children: [{\n    name: 'login',\n    path: 'login',\n    meta: {\n      NoAuth: true\n    },\n    component: () => __webpack_require__.e(/*! import() */ \"src_components_auth_login_vue\").then(__webpack_require__.bind(__webpack_require__, /*! @/components/auth/login */ \"./src/components/auth/login.vue\"))\n  }, {\n    name: 'register',\n    path: 'register',\n    meta: {\n      NoAuth: true\n    },\n    component: () => __webpack_require__.e(/*! import() */ \"src_components_auth_register_vue\").then(__webpack_require__.bind(__webpack_require__, /*! @/components/auth/register */ \"./src/components/auth/register.vue\"))\n  }, {\n    name: 'recovery',\n    path: 'recovery',\n    meta: {\n      NoAuth: true\n    },\n    component: () => __webpack_require__.e(/*! import() */ \"src_components_auth_recovery_vue\").then(__webpack_require__.bind(__webpack_require__, /*! @/components/auth/recovery */ \"./src/components/auth/recovery.vue\"))\n  }]\n}, {\n  path: '/:pathMatch(.*)*',\n  name: 'not-found',\n  component: () => __webpack_require__.e(/*! import() */ \"src_components_not-found_vue\").then(__webpack_require__.bind(__webpack_require__, /*! @/components/not-found */ \"./src/components/not-found.vue\"))\n}];\nconst router = (0,vue_router__WEBPACK_IMPORTED_MODULE_1__.createRouter)({\n  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_1__.createWebHistory)(\"/demo/\"),\n  scrollBehavior(to, from, savedPosition) {\n    return {\n      el: '#wrapper',\n      behavior: 'smooth'\n    };\n  },\n  routes\n});\nrouter.beforeEach((to, from, next) => {\n  const token = localStorage.getItem('token');\n\n  // TODO: need to add abort previos request\n\n  if (token && ['login', 'register', 'recovery'].includes(to.name)) {\n    next({\n      name: from.name || 'home'\n    });\n  } else if (to.meta.NoAuth || token) {\n    next();\n  } else {\n    const param = {\n      path: '/auth/login'\n    };\n    if (to.fullPath.length > 1) {\n      param.query = {\n        redirect: to.fullPath\n      };\n    }\n    next(param);\n  }\n});\n(0,_mixin_resources__WEBPACK_IMPORTED_MODULE_0__.loadImages)();\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack://ui-vmm/./src/router/index.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-bundler.js\");\n\nconst state = {\n  _debugPanel: false,\n  _debug: false,\n  _env: \"development\",\n  _error: false,\n  _loading: ['config.get', 'getLang'],\n  _loadingBar: [],\n  _loadingTimer: false,\n  _logFile: '',\n  _logTimer: new Date().getTime(),\n  _mock: false,\n  _mode: \"demo\",\n  _version: \"0.2.2-1ff36a7\" || 0,\n  authCurrentForm: 'login',\n  collapsed: false,\n  disable_user_recovery: false,\n  disable_user_registration: false,\n  header_sub_title: '',\n  header_title: '',\n  image_server: [],\n  instance: -1,\n  instance_configs_list: [],\n  instance_status: [],\n  instances: [],\n  isLogged: false,\n  locale: 'en',\n  menuSettings: -1,\n  networks: [],\n  profiles: [],\n  robotIcon: 'main',\n  sending: false,\n  server: -1,\n  serverCpu: 0,\n  serverIsLoaded: false,\n  serverMemory: 0,\n  servers: [],\n  sse: {},\n  supported_instance_types: [],\n  tabActiveName: 'server',\n  webauth_attestation_type: 'direct',\n  webauth_authenticator_attachment: 'platform',\n  webauth_enabled: true\n};\nconst mutations = {\n  set(state, params) {\n    if (typeof params.object_key !== 'undefined' && typeof params.object_idx !== 'undefined') {\n      const key = params.object_key;\n      const idx = state[key].findIndex(item => item[params.object_idx_key || 'id'] === params.object_idx);\n      if (idx >= 0) {\n        delete params.object_key;\n        delete params.object_idx;\n        state[key][idx] = Object.assign({}, state[key][idx], params);\n      }\n      return;\n    }\n    Object.keys(params).forEach(k => {\n      state[k] = params[k];\n    });\n  },\n  add(state, params) {\n    Object.keys(params).forEach(k => {\n      if (Array.isArray(params[k])) {\n        params[k].forEach(i => {\n          if (state[k] === undefined) {\n            state[k] = [];\n          }\n          state[k].push(i);\n        });\n      } else {\n        state[k].push(params[k]);\n      }\n    });\n  },\n  clear(state, key) {\n    state[key].splice(0, state[key].length);\n  },\n  delete(state, key) {\n    delete state[key];\n  }\n};\nconst actions = {\n  set({\n    commit\n  }, params) {\n    commit('set', params);\n  },\n  add({\n    commit\n  }, params) {\n    commit('add', params);\n  },\n  clear({\n    commit\n  }, key) {\n    commit('clear', key);\n  },\n  delete({\n    commit\n  }, key) {\n    commit('delete', key);\n  }\n};\nconst getters = {\n  get: state => key => {\n    return typeof state[key] !== 'undefined' ? state[key] : '';\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,vuex__WEBPACK_IMPORTED_MODULE_0__.createStore)({\n  state,\n  mutations,\n  actions,\n  getters,\n  modules: {}\n}));\n\n//# sourceURL=webpack://ui-vmm/./src/store/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/app.vue?vue&type=style&index=0&id=5ef48958&lang=scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/app.vue?vue&type=style&index=0&id=5ef48958&lang=scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/pattern-lin.svg */ \"./src/assets/pattern-lin.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/roboter-01.svg */ \"./src/assets/roboter-01.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/roboter-02.svg */ \"./src/assets/roboter-02.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/roboter-03.svg */ \"./src/assets/roboter-03.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"#wrapper {\\n  font-family: \\\"Avenir\\\", Helvetica, Arial, sans-serif;\\n  font-weight: 100;\\n  min-height: 100vh;\\n}\\n#wrapper.auth {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-size: 340px;\\n}\\n.robot {\\n  height: 55px;\\n  width: 55px;\\n}\\n.robot.main {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n}\\n.robot.love {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n}\\n.robot.angry {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n}\\n.flag-icon {\\n  line-height: 18px;\\n  margin-right: 10px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://ui-vmm/./src/app.vue?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use%5B2%5D!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/debug-panel.vue?vue&type=style&index=0&id=926849ac&lang=scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/debug-panel.vue?vue&type=style&index=0&id=926849ac&lang=scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".debug-panel {\\n  position: absolute;\\n  top: 0;\\n  background: black;\\n  color: white;\\n  z-index: 9999;\\n}\\n#toggle {\\n  background: #fff;\\n  bottom: 0;\\n  position: fixed;\\n  right: 0;\\n  text-align: center;\\n  z-index: 99999;\\n}\\n#toggle div {\\n  background: rgba(255, 0, 0, 0.2);\\n  padding: 5px 10px;\\n  cursor: pointer;\\n}\\n#toggle div.active {\\n  background: rgba(0, 255, 0, 0.4);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://ui-vmm/./src/components/debug-panel.vue?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use%5B2%5D!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./src/app.vue":
/*!*********************!*\
  !*** ./src/app.vue ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_vue_vue_type_template_id_5ef48958_lang_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.vue?vue&type=template&id=5ef48958&lang=pug */ \"./src/app.vue?vue&type=template&id=5ef48958&lang=pug\");\n/* harmony import */ var _app_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.vue?vue&type=script&lang=js */ \"./src/app.vue?vue&type=script&lang=js\");\n/* harmony import */ var _app_vue_vue_type_style_index_0_id_5ef48958_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.vue?vue&type=style&index=0&id=5ef48958&lang=scss */ \"./src/app.vue?vue&type=style&index=0&id=5ef48958&lang=scss\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_app_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_app_vue_vue_type_template_id_5ef48958_lang_pug__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/app.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://ui-vmm/./src/app.vue?");

/***/ }),

/***/ "./src/components/debug-panel.vue":
/*!****************************************!*\
  !*** ./src/components/debug-panel.vue ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _debug_panel_vue_vue_type_template_id_926849ac_lang_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debug-panel.vue?vue&type=template&id=926849ac&lang=pug */ \"./src/components/debug-panel.vue?vue&type=template&id=926849ac&lang=pug\");\n/* harmony import */ var _debug_panel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debug-panel.vue?vue&type=script&lang=js */ \"./src/components/debug-panel.vue?vue&type=script&lang=js\");\n/* harmony import */ var _debug_panel_vue_vue_type_style_index_0_id_926849ac_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./debug-panel.vue?vue&type=style&index=0&id=926849ac&lang=scss */ \"./src/components/debug-panel.vue?vue&type=style&index=0&id=926849ac&lang=scss\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_debug_panel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_debug_panel_vue_vue_type_template_id_926849ac_lang_pug__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/components/debug-panel.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://ui-vmm/./src/components/debug-panel.vue?");

/***/ }),

/***/ "./src/app.vue?vue&type=script&lang=js":
/*!*********************************************!*\
  !*** ./src/app.vue?vue&type=script&lang=js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_37_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_app_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_37_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_app_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-37.use[0]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-37.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/app.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ui-vmm/./src/app.vue?");

/***/ }),

/***/ "./src/components/debug-panel.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./src/components/debug-panel.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_37_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_debug_panel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_37_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_debug_panel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-37.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./debug-panel.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-37.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/debug-panel.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ui-vmm/./src/components/debug-panel.vue?");

/***/ }),

/***/ "./src/app.vue?vue&type=template&id=5ef48958&lang=pug":
/*!************************************************************!*\
  !*** ./src/app.vue?vue&type=template&id=5ef48958&lang=pug ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_37_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_app_vue_vue_type_template_id_5ef48958_lang_pug__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_37_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_app_vue_vue_type_template_id_5ef48958_lang_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-37.use[0]!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/pug-plain-loader/index.js!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app.vue?vue&type=template&id=5ef48958&lang=pug */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-37.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/app.vue?vue&type=template&id=5ef48958&lang=pug\");\n\n\n//# sourceURL=webpack://ui-vmm/./src/app.vue?");

/***/ }),

/***/ "./src/components/debug-panel.vue?vue&type=template&id=926849ac&lang=pug":
/*!*******************************************************************************!*\
  !*** ./src/components/debug-panel.vue?vue&type=template&id=926849ac&lang=pug ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_37_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_debug_panel_vue_vue_type_template_id_926849ac_lang_pug__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_37_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_debug_panel_vue_vue_type_template_id_926849ac_lang_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-37.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/pug-plain-loader/index.js!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./debug-panel.vue?vue&type=template&id=926849ac&lang=pug */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-37.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/debug-panel.vue?vue&type=template&id=926849ac&lang=pug\");\n\n\n//# sourceURL=webpack://ui-vmm/./src/components/debug-panel.vue?");

/***/ }),

/***/ "./src/app.vue?vue&type=style&index=0&id=5ef48958&lang=scss":
/*!******************************************************************!*\
  !*** ./src/app.vue?vue&type=style&index=0&id=5ef48958&lang=scss ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_19_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_19_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_19_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_19_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_app_vue_vue_type_style_index_0_id_5ef48958_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader/index.js??clonedRuleSet-19.use[0]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!../node_modules/vue-loader/dist/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app.vue?vue&type=style&index=0&id=5ef48958&lang=scss */ \"./node_modules/vue-style-loader/index.js??clonedRuleSet-19.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/app.vue?vue&type=style&index=0&id=5ef48958&lang=scss\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_19_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_19_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_19_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_19_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_app_vue_vue_type_style_index_0_id_5ef48958_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_19_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_19_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_19_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_19_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_app_vue_vue_type_style_index_0_id_5ef48958_lang_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_19_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_19_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_19_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_19_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_app_vue_vue_type_style_index_0_id_5ef48958_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_19_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_19_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_19_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_19_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_app_vue_vue_type_style_index_0_id_5ef48958_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://ui-vmm/./src/app.vue?");

/***/ }),

/***/ "./src/components/debug-panel.vue?vue&type=style&index=0&id=926849ac&lang=scss":
/*!*************************************************************************************!*\
  !*** ./src/components/debug-panel.vue?vue&type=style&index=0&id=926849ac&lang=scss ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_19_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_19_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_19_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_19_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_debug_panel_vue_vue_type_style_index_0_id_926849ac_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js??clonedRuleSet-19.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./debug-panel.vue?vue&type=style&index=0&id=926849ac&lang=scss */ \"./node_modules/vue-style-loader/index.js??clonedRuleSet-19.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/debug-panel.vue?vue&type=style&index=0&id=926849ac&lang=scss\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_19_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_19_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_19_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_19_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_debug_panel_vue_vue_type_style_index_0_id_926849ac_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_19_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_19_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_19_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_19_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_debug_panel_vue_vue_type_style_index_0_id_926849ac_lang_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_19_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_19_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_19_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_19_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_debug_panel_vue_vue_type_style_index_0_id_926849ac_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_19_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_19_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_19_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_19_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_debug_panel_vue_vue_type_style_index_0_id_926849ac_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://ui-vmm/./src/components/debug-panel.vue?");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-19.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/app.vue?vue&type=style&index=0&id=5ef48958&lang=scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-19.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/app.vue?vue&type=style&index=0&id=5ef48958&lang=scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!../node_modules/vue-loader/dist/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./app.vue?vue&type=style&index=0&id=5ef48958&lang=scss */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/app.vue?vue&type=style&index=0&id=5ef48958&lang=scss\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"06820966\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://ui-vmm/./src/app.vue?./node_modules/vue-style-loader/index.js??clonedRuleSet-19.use%5B0%5D!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use%5B2%5D!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-19.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/debug-panel.vue?vue&type=style&index=0&id=926849ac&lang=scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-19.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/debug-panel.vue?vue&type=style&index=0&id=926849ac&lang=scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./debug-panel.vue?vue&type=style&index=0&id=926849ac&lang=scss */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/debug-panel.vue?vue&type=style&index=0&id=926849ac&lang=scss\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"86512852\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://ui-vmm/./src/components/debug-panel.vue?./node_modules/vue-style-loader/index.js??clonedRuleSet-19.use%5B0%5D!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-19.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-19.use%5B2%5D!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-19.use%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./src/locales lazy recursive ^\\.\\/.*\\.json$":
/*!*************************************************************************************!*\
  !*** ./src/locales/ lazy ^\.\/.*\.json$ chunkName: lang-[request] namespace object ***!
  \*************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var map = {\n\t\"./en.json\": [\n\t\t\"./src/locales/en.json\",\n\t\t\"lang-en-json\"\n\t],\n\t\"./ru.json\": [\n\t\t\"./src/locales/ru.json\",\n\t\t\"lang-ru-json\"\n\t]\n};\nfunction webpackAsyncContext(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\treturn Promise.resolve().then(function() {\n\t\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\t\te.code = 'MODULE_NOT_FOUND';\n\t\t\tthrow e;\n\t\t});\n\t}\n\n\tvar ids = map[req], id = ids[0];\n\treturn __webpack_require__.e(ids[1]).then(function() {\n\t\treturn __webpack_require__.t(id, 3 | 16);\n\t});\n}\nwebpackAsyncContext.keys = function() { return Object.keys(map); };\nwebpackAsyncContext.id = \"./src/locales lazy recursive ^\\\\.\\\\/.*\\\\.json$\";\nmodule.exports = webpackAsyncContext;\n\n//# sourceURL=webpack://ui-vmm/./src/locales/_lazy_^\\.\\/.*\\.json$_chunkName:_lang-%5Brequest%5D_namespace_object?");

/***/ }),

/***/ "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4= ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module) {

"use strict";
eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=\";\n\n//# sourceURL=webpack://ui-vmm/data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=?");

/***/ }),

/***/ "./src/assets/envelope.svg":
/*!*********************************!*\
  !*** ./src/assets/envelope.svg ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/envelope.9341fa7d.svg\";\n\n//# sourceURL=webpack://ui-vmm/./src/assets/envelope.svg?");

/***/ }),

/***/ "./src/assets/keywords.svg":
/*!*********************************!*\
  !*** ./src/assets/keywords.svg ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/keywords.02b5b8ec.svg\";\n\n//# sourceURL=webpack://ui-vmm/./src/assets/keywords.svg?");

/***/ }),

/***/ "./src/assets/padlock.svg":
/*!********************************!*\
  !*** ./src/assets/padlock.svg ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/padlock.65e48261.svg\";\n\n//# sourceURL=webpack://ui-vmm/./src/assets/padlock.svg?");

/***/ }),

/***/ "./src/assets/password.svg":
/*!*********************************!*\
  !*** ./src/assets/password.svg ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/password.eee94f07.svg\";\n\n//# sourceURL=webpack://ui-vmm/./src/assets/password.svg?");

/***/ }),

/***/ "./src/assets/pattern-lin.svg":
/*!************************************!*\
  !*** ./src/assets/pattern-lin.svg ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/pattern-lin.0ce0061a.svg\";\n\n//# sourceURL=webpack://ui-vmm/./src/assets/pattern-lin.svg?");

/***/ }),

/***/ "./src/assets/profile.svg":
/*!********************************!*\
  !*** ./src/assets/profile.svg ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/profile.920bc32c.svg\";\n\n//# sourceURL=webpack://ui-vmm/./src/assets/profile.svg?");

/***/ }),

/***/ "./src/assets/roboter-01.svg":
/*!***********************************!*\
  !*** ./src/assets/roboter-01.svg ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/roboter-01.6ee7b6e0.svg\";\n\n//# sourceURL=webpack://ui-vmm/./src/assets/roboter-01.svg?");

/***/ }),

/***/ "./src/assets/roboter-02.svg":
/*!***********************************!*\
  !*** ./src/assets/roboter-02.svg ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/roboter-02.11dbce81.svg\";\n\n//# sourceURL=webpack://ui-vmm/./src/assets/roboter-02.svg?");

/***/ }),

/***/ "./src/assets/roboter-03.svg":
/*!***********************************!*\
  !*** ./src/assets/roboter-03.svg ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/roboter-03.60b5cf2d.svg\";\n\n//# sourceURL=webpack://ui-vmm/./src/assets/roboter-03.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	!function() {
/******/ 		var getProto = Object.getPrototypeOf ? function(obj) { return Object.getPrototypeOf(obj); } : function(obj) { return obj.__proto__; };
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach(function(key) { def[key] = function() { return value[key]; }; });
/******/ 			}
/******/ 			def['default'] = function() { return value; };
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "js/" + chunkId + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "ui-vmm:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "/demo/";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = function(chunkId, promises) {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise(function(resolve, reject) { installedChunkData = installedChunks[chunkId] = [resolve, reject]; });
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = function(event) {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkui_vmm"] = self["webpackChunkui_vmm"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["chunk-vendors"], function() { return __webpack_require__("./src/main.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;