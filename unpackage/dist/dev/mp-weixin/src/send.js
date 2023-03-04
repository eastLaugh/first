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
exports.bringUp = bringUp;
