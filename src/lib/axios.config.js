/**
 * 全局axios提前配置
 * @author CJH
 */
import axios from 'axios';

// 接口默认地址
const baseUrl = 'http://localhost:3000';

// 配置axios请求信息
let AX = axios.create({
    baseURL: baseUrl,
    timeout: 3000,
    responseType: 'json',
})

// todo 拦截器
// AX.interceptors.request.use()

export default AX;