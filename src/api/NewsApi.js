import request from '@/utils/request';

export const getNewsAPI = function() {
    return request.get('/api/news');
}
