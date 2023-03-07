"use strict";
const common_vendor = require("../common/vendor.js");
function bringUp(callback) {
  common_vendor.index.$once("send", (data) => {
    if (callback)
      callback(data);
  });
  common_vendor.index.navigateTo({
    url: "/pages/send/send"
  });
}
function SwicthToPostPage(post_id) {
  common_vendor.index.navigateTo({
    url: "/pages/post/post?post_id=" + post_id
  });
}
console.log(
  "http://localhost:8080/api/verify"
);
const session_key = common_vendor.ref();
common_vendor.watch(session_key, (value, oldValue) => {
  console.log(value);
  common_vendor.index.setStorageSync("session_key", value);
  if (value) {
    verify();
  }
});
session_key.value = common_vendor.index.getStorageSync("session_key");
const isLogin = common_vendor.computed(() => {
  return Boolean(userInfo.value);
});
function login() {
  console.log("#login");
  common_vendor.wx$1.login({
    success(res) {
      common_vendor.wx$1.request({
        url: "http://localhost:8080/api/login",
        header: {
          code: res.code
        },
        success(res2) {
          session_key.value = res2.data.session_key;
        },
        fail() {
          common_vendor.index.showToast({
            title: "出错了"
          });
        }
      });
    }
  });
}
const userInfo = common_vendor.ref();
function verify() {
  console.log("#verify");
  common_vendor.index.request({
    url: "http://localhost:8080/api/verify",
    method: "POST",
    header: {
      "content-type": "application/x-www-form-urlencoded"
    },
    data: {
      session_key: session_key.value
    },
    success: (res) => {
      if (res.data.success) {
        userInfo.value = res.data.data;
      } else {
        userInfo.value = "";
      }
    },
    fail() {
      common_vendor.index.showToast({
        title: "出错了"
      });
    }
  });
}
exports.SwicthToPostPage = SwicthToPostPage;
exports.bringUp = bringUp;
exports.isLogin = isLogin;
exports.login = login;
exports.session_key = session_key;
exports.userInfo = userInfo;
exports.verify = verify;
