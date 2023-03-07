"use strict";
const common_vendor = require("../../common/vendor.js");
const src_send = require("../../src/send.js");
const __default__ = {
  onUnload() {
    common_vendor.index.$off("send");
  },
  onLoad() {
    console.log(userInfo.value);
    if (userInfo.value)
      ;
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "send",
  setup(__props) {
    const name = common_vendor.ref("");
    const content = common_vendor.ref("");
    function navigate(url) {
      if (url)
        ;
      else {
        common_vendor.index.navigateBack();
      }
    }
    function send() {
      common_vendor.index.$emit("send", {
        name: name.value,
        content: content.value,
        session_key: src_send.session_key.value
      });
      common_vendor.index.navigateBack();
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => navigate()),
        b: common_vendor.o(send),
        c: name.value,
        d: common_vendor.o(($event) => name.value = $event.detail.value),
        e: content.value,
        f: common_vendor.o(($event) => content.value = $event.detail.value)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/east_/Documents/HBuilderProjects/first/pages/send/send.vue"]]);
wx.createPage(MiniProgramPage);
