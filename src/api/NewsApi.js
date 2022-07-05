import request from '@/utils/request';

// 获取推荐文章列表API
export const getNewsAPI = function() {
    return request.get('/api/news');
}

// 获取娱乐文章列表API
export const getFunNewsAPI = function() {
    return request.get('/api/fun_news');
}

// 获取游戏文章列表API
export const getGameNewsAPI = function() {
    return request.get('/api/game_news');
}

// 获取体育文章列表API
export const getSportsNewsAPI = function() {
    return request.get('/api/sports_news');
}
