import request from '@/utils/request';

// 获取文章列表API
export const getNewsAPI = function() {
    return request.get('/api/news');
}
