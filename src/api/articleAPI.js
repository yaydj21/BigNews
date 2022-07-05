import request from '@/utils/request';

// 获取推荐文章详情API
export const  getArticleDetailAPI = (art_id) =>{
    return request.get(`/api/articles/${art_id}`,{
        params:{
            art_id
        }
    });
}

// 获取娱乐文章详情API
export const  getFunArticleDetailAPI = (art_id) =>{
    return request.get(`/api/funArticles/${art_id}`,{
        params:{
            art_id
        }
    });
}

// 获取游戏文章详情API
export const  getGameArticleDetailAPI = (art_id) =>{
    return request.get(`/api/gameArticles/${art_id}`,{
        params:{
            art_id
        }
    });
}

// 获取体育文章详情API
export const  getSportsArticleDetailAPI = (art_id) =>{
    return request.get(`/api/sportsArticles/${art_id}`,{
        params:{
            art_id
        }
    });
}
