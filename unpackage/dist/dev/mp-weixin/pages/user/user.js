"use strict";
const common_vendor = require("../../common/vendor.js");
const src_send = require("../../src/send.js");
const _sfc_main = {
  data() {
    return {
      session_key: src_send.session_key,
      nickname: ""
    };
  },
  methods: {},
  mounted() {
    console.log("mounted不被调用");
  },
  onLoad() {
    src_send.login();
  },
  onPullDownRefresh() {
    src_send.login();
    common_vendor.index.stopPullDownRefresh();
  },
  watch: {
    session_key(value, oldValue) {
      console.log(value);
    }
  }
};
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  _easycom_uni_easyinput2();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
if (!Math) {
  _easycom_uni_easyinput();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.nickname = $event),
    b: common_vendor.p({
      type: "nickname",
      placeholder: "",
      modelValue: $data.nickname
    }),
    c: common_vendor.t($data.session_key),
    d: common_vendor.o(() => {
      $data.session_key = "";
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/east_/Documents/HBuilderProjects/first/pages/user/user.vue"]]);
wx.createPage(MiniProgramPage);
