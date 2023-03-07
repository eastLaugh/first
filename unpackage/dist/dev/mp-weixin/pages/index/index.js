"use strict";
const common_vendor = require("../../common/vendor.js");
const src_send = require("../../src/send.js");
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
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
            a: common_vendor.o(($event) => common_vendor.unref(src_send.SwicthToPostPage)(item.id), item.id),
            b: item.id,
            c: "9b9c2864-1-" + i0 + ",9b9c2864-0",
            d: common_vendor.p({
              title: item.message,
              note: item.name ? item.name : "未留名",
              link: true
            })
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/east_/Documents/HBuilderProjects/first/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
