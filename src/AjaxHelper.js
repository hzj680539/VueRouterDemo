/**
 * Created by hzj on 2017/2/28.
 */
import $ from "jquery"

function AjaxHelper() {
  this.ajax = function (url, type, dataType, data, callback) {
    $.ajax({
      url: url,
      type: type,
      dataType: dataType,
      data: JSON.stringify(data),
      contentType: 'application/json',
    }).done(function (data) {
      callback(JSON.parse(data).response)
    }).always(function () {
      console.log("loading...")
    }).fail(function (xhr, errorType, error) {
      console.warn("Ajax request error, errorType"+ errorType)
      console.warn("error"+ error)
    });
  }
}
AjaxHelper.prototype.get = function (url, data, callback) {
  this.ajax(url, 'GET', 'json', data, callback)
}
AjaxHelper.prototype.post = function (url, data, callback) {
  this.ajax(url, 'POST', 'json', data, callback)
}
AjaxHelper.prototype.postText = function (url, data, callback) {
  this.ajax(url, 'POST', 'text', data, callback)
}
AjaxHelper.prototype.put = function (url, data, callback) {
  this.ajax(url, 'PUT', 'json', data, callback)
}
AjaxHelper.prototype.delete = function (url, data, callback) {
  this.ajax(url, 'DELETE', 'json', data, callback)
}
AjaxHelper.prototype.jsonp = function (url, data, callback) {
  this.ajax(url, 'GET', 'jsonp', data, callback)
}
AjaxHelper.prototype.constructor = AjaxHelper

export default AjaxHelper;
