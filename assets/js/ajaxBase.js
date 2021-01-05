/*
 * @Author: your name
 * @Date: 2021-01-05 10:33:03
 * @LastEditTime: 2021-01-05 14:05:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bigevent\assets\js\ajaxBase.js
 */
$.ajaxPrefilter(function(options){
    // console.log(options);
    options.url= 'http://api-breakingnews-web.itheima.net'+options.url
})