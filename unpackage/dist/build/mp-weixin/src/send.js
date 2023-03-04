"use strict";const e=require("../common/vendor.js");exports.bringUp=function(n){e.index.$once("send",(e=>{n&&n(e)})),e.index.navigateTo({url:"/pages/send/send"})};
