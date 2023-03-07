"use strict";
const src_send = require("../../src/send.js");
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      session_key: src_send.session_key
    };
  },
  methods: {},
  onLoad() {
    src_send.login();
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.session_key)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/east_/Documents/HBuilderProjects/first/pages/user/user.vue"]]);
wx.createPage(MiniProgramPage);
