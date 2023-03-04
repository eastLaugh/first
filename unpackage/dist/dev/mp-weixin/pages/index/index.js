"use strict";
const common_vendor = require("../../common/vendor.js");
const src_send = require("../../src/send.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    function SwicthToPostPage(post_id) {
      common_vendor.index.navigateTo({
        url: "/pages/post/post?post_id=" + post_id
      });
    }
    function SwicthToSendPage() {
      src_send.bringUp((data) => {
        common_vendor.index.showToast({
          title: "已发送",
          duration: 2e3
        });
        common_vendor.index.request({
          url: "http://localhost:8080/api/send",
          method: "POST",
          header: {
            "content-type": "application/x-www-form-urlencoded"
          },
          data,
          success(res) {
            common_vendor.index.startPullDownRefresh();
          },
          fail() {
            common_vendor.index.showToast({
              title: "出错了"
            });
          }
        });
      });
    }
    const newsInfo = common_vendor.ref();
    common_vendor.index.startPullDownRefresh();
    common_vendor.onPullDownRefresh(() => {
      refresh();
      common_vendor.index.showLoading();
    });
    function refresh() {
      common_vendor.index.request({
        url: "http://localhost:8080/api/getall",
        method: "GET",
        success(response) {
          newsInfo.value = response.data;
          common_vendor.index.hideLoading();
          common_vendor.index.stopPullDownRefresh();
        }
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(SwicthToSendPage),
        b: common_vendor.f(newsInfo.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name ? item.name : "[未留名]"),
            b: common_vendor.t(item.message),
            c: common_vendor.o(($event) => SwicthToPostPage(item.id))
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/east_/Documents/HBuilderProjects/first/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
