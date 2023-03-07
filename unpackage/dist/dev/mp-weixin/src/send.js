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
console.log("test233");
const session_key = common_vendor.ref();
common_vendor.watch(session_key, (value, oldValue) => {
  console.log(value);
  common_vendor.index.setStorageSync("session_key", value);
});
function login() {
  common_vendor.wx$1.login({
    success(res) {
      console.log(res);
      common_vendor.wx$1.request({
        url: "http://localhost:8080/api/login",
        header: {
          code: res.code
        },
        success(res2) {
          console.log(res2);
          session_key.value = res2.data.session_key;
          console.log(session_key);
        }
      });
    }
  });
}
exports.SwicthToPostPage = SwicthToPostPage;
exports.bringUp = bringUp;
exports.login = login;
exports.session_key = session_key;
