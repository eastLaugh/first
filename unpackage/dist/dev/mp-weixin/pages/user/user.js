"use strict";
const common_vendor = require("../../common/vendor.js");
const src_send = require("../../src/send.js");
const _sfc_main = {
  data() {
    return {
      session_key: src_send.session_key,
      nickname: "",
      userInfo: src_send.userInfo,
      isLogin: src_send.isLogin
    };
  },
  methods: {
    login: src_send.login,
    saveNickName() {
      console.log(this);
      common_vendor.index.request({
        url: "http://localhost:8080/api/update",
        method: "POST",
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        data: {
          session_key: src_send.session_key.value,
          nickname: this.nickname
        },
        success() {
          src_send.verify();
        }
      });
    }
  },
  onLoad() {
  },
  onPullDownRefresh() {
    src_send.verify();
    common_vendor.index.stopPullDownRefresh();
  },
  watch: {
    userInfo: {
      handler(value, oldValue) {
        this.nickname = value == null ? void 0 : value.nickname;
        console.log(this);
      },
      immediate: true
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
    a: common_vendor.t($data.isLogin),
    b: common_vendor.o((...args) => $options.login && $options.login(...args)),
    c: common_vendor.t($data.userInfo),
    d: common_vendor.o(($event) => $data.nickname = $event),
    e: common_vendor.p({
      type: "nickname",
      placeholder: "",
      modelValue: $data.nickname
    }),
    f: common_vendor.o((...args) => $options.saveNickName && $options.saveNickName(...args)),
    g: common_vendor.t($data.session_key),
    h: common_vendor.o(() => {
      $data.session_key = "";
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/east_/Documents/HBuilderProjects/first/pages/user/user.vue"]]);
wx.createPage(MiniProgramPage);
