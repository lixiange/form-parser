// /**
//  * 全站http配置
//  *
//  * axios参数说明
//  * isSerialize是否开启form表单提交
//  * isToken是否需要token
//  */
// import axios from 'axios'
// import store from '@/store/';
// import router from 'vue-router';
// import { serialize } from '@/util/util'
// import { getToken } from '@/util/auth'
// import { Notify } from 'vant';
// import NProgress from 'nprogress' // progress bar
// import 'nprogress/nprogress.css' // progress bar style
// // import { Base64 } from 'js-base64';

// axios.defaults.timeout = 10000;
// //返回其他状态码
// axios.defaults.validateStatus = function (status) {
//   return status >= 200 && status <= 500; // 默认的
// };
// //跨域请求，允许保存cookie
// axios.defaults.withCredentials = true;
// // NProgress Configuration
// NProgress.configure({
//   showSpinner: false
// });

// //HTTPrequest拦截
// axios.interceptors.request.use(config => {

//   NProgress.start() // start progress bar
//   const meta = (config.meta || {});
//   const isToken = meta.isToken === false;
//   config.headers['App-Key'] = "100001";
//   // config.headers['Authorization'] = `Basic ${Base64.encode(`${website.clientId}:${website.clientSecret}`)}`;
//   if (getToken() && !isToken) {
//     // console.log("????");

//     config.headers['X-Litemall-Token'] = getToken() // 让每个请求携带token--['Authorization']为自定义key 请根据实际情况自行修改
//   }
//   // console.log(getToken());
//   // console.log(isToken);

//   //headers中配置serialize为true开启序列化
//   if (config.method === 'post' && meta.isSerialize === true) {
//     config.data = serialize(config.data);
//   }
//   return config
// }, error => {
//   return Promise.reject(error)
// });



// //HTTPresponse拦截
// axios.interceptors.response.use(res => {
//   NProgress.done();
//   const status = res.data.code || 200;
//   const statusWhiteList = [];//http的status默认放行不才用统一处理的,
//   const message = res.data.msg || '未知错误';
//   const requestPath = res.config.url;
//   console.log("errorStatus = " + status + " &eMsg = " + message + " &requestURL = " + requestPath);
//   if (requestPath == "/api/blade-desk/process/leave/start-process" && parseInt(status) == 404) {
//     alert("后台服务(DestApplication)未启动，请联系我们的系统维护人员");
//     return Promise.reject(new Error(message))
//   }
//   //如果在白名单里则自行catch逻辑处理
//   if (statusWhiteList.includes(status)) return Promise.reject(res);
//   //如果是401则跳转到登录页面
//   if (status === 401) store.dispatch('FedLogOut').then(() => router.push({ path: '/login' }));
//   // 如果请求为非200否者默认统一处理
//   if (status !== 200) {
//     Notify({ type: 'danger', message: message });
//     return Promise.reject(new Error(message))
//   }
//   return res;
// }, error => {
//   NProgress.done();
//   return Promise.reject(new Error(error));
// });

// export default axios;
