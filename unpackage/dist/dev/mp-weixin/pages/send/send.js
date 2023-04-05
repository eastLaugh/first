"use strict";
const common_vendor = require("../../common/vendor.js");
const src_send = require("../../src/send.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  _easycom_uni_easyinput2();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
if (!Math) {
  _easycom_uni_easyinput();
}
const __default__ = {
  onUnload() {
    common_vendor.index.$off("send");
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
        c: common_vendor.o(($event) => content.value = $event),
        d: common_vendor.p({
          placeholder: "",
          type: "textarea",
          modelValue: content.value
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/east_/Documents/HBuilderProjects/first/pages/send/send.vue"]]);
wx.createPage(MiniProgramPage);
