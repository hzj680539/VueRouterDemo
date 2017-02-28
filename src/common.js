/**
 * Created by hzj on 2017/2/28.
 */
import Vue from 'vue'
import $ from "jquery"

Vue.prototype.ajax = function (postData, callback) {
  $.ajax({
    url: "http://api.dev/cgi?"+Math.random(),
    type: "post",
    contentType: 'application/json',
    dataType: "text",
    data: JSON.stringify(postData)
  }).done(function (data) {
    console.info("Response:");
    let _data = JSON.parse(data)
    console.dir(_data)
    callback(_data.response)
  });
}
