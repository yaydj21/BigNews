import request from '@/utils/request';

// 获取文章详情API
export const  getArticleDetailAPI = (art_id) =>{
    return request.get(`/api/articles/${art_id}`,{
        params:{
            art_id
        }
    });
}
