import request from '@/utils/request';
import qs from 'qs';
// 登录API
export const loginAPI = (data) =>{
    return request.post('/api/login',qs.stringify(data));
}

// 获取用户信息API
export const getUserInfoAPI = (token) =>{
    return request.get('/my/userinfo',{
        headers:{
        'Authorization':token
        }
    });
}

// 注册API
export const registerAPI = (data) =>{
    return request.post('/api/reguser',qs.stringify(data));
}