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
const session_key = common_vendor.ref(common_vendor.index.getStorageSync("session_key"));
common_vendor.watch(session_key, (value, oldValue) => {
  common_vendor.index.setStorageSync("session_key", value);
});
function login() {
  if (session_key.value) {
    console.log("#1");
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
        console.log(res);
        if (res.success)
          ;
        else {
          session_key.value = "";
          login();
        }
      },
      fail() {
        common_vendor.index.showToast({
          title: "出错了"
        });
      }
    });
  } else {
    console.log("#2");
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
}
exports.SwicthToPostPage = SwicthToPostPage;
exports.bringUp = bringUp;
exports.login = login;
exports.session_key = session_key;
