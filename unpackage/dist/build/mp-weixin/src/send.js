"use strict";const e=require("../common/vendor.js");exports.SwicthToPostPage=function(n){e.index.navigateTo({url:"/pages/post/post?post_id="+n})},exports.bringUp=function(n){e.index.$once("send",(e=>{n&&n(e)})),e.index.navigateTo({url:"/pages/send/send"})};
