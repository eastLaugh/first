"use strict";
const common_vendor = require("../../common/vendor.js");
const src_send = require("../../src/send.js");
const _sfc_main = {
  data() {
    return {
      postInfo: [],
      input: ""
    };
  },
  onLoad(e) {
    this.post_id = e.post_id;
    common_vendor.index.startPullDownRefresh();
  },
  post_id: -1,
  methods: {
    SwicthToPostPage: src_send.SwicthToPostPage,
    refresh(post_id) {
      common_vendor.index.showLoading();
      common_vendor.index.request({
        url: "http://localhost:8080/api/getdetails",
        method: "GET",
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        data: {
          post_id
        },
        success: (response) => {
          this.postInfo = response.data;
          common_vendor.index.stopPullDownRefresh();
          common_vendor.index.hideLoading();
        }
      });
    },
    review() {
      src_send.bringUp((data) => {
        console.log(data);
        common_vendor.index.request({
          url: "http://localhost:8080/api/review",
          method: "POST",
          header: {
            "content-type": "application/x-www-form-urlencoded"
          },
          data: {
            ...data,
            father_id: this.post_id
          },
          success: (response) => {
            common_vendor.index.showToast({
              title: "发送成功"
            });
            common_vendor.index.startPullDownRefresh();
          }
        });
      });
    }
  },
  onPullDownRefresh() {
    this.refresh(this.post_id);
  }
};
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_uni_fab2 = common_vendor.resolveComponent("uni-fab");
  (_easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_uni_fab2)();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_uni_fab = () => "../../uni_modules/uni-fab/components/uni-fab/uni-fab.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list + _easycom_uni_fab)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.postInfo, (item, index, i0) => {
      return {
        a: common_vendor.t(item.created_at),
        b: common_vendor.o(() => {
          if (index != 0)
            $options.SwicthToPostPage(item.id);
        }, item.id),
        c: item.id,
        d: "5d845330-1-" + i0 + ",5d845330-0",
        e: common_vendor.p({
          note: item.name ? item.name : "[未留名]",
          title: item.message,
          link: true
        })
      };
    }),
    b: common_vendor.o($options.review),
    c: common_vendor.p({
      horizontal: "right"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/east_/Documents/HBuilderProjects/first/pages/post/post.vue"]]);
wx.createPage(MiniProgramPage);
