import request from '@/utils/request';

export const  getArticleDetailAPI = (art_id) =>{
    return request.get(`/api/articles/${art_id}`,{
        params:{
            art_id
        }
    });
}
