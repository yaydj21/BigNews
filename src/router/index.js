import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入路由
import Home from '@/views/Home/Home';
import User from '@/views/User/User';
import ArticleDetail from '@/views/ArticleDetail/ArticleDetail';
import Login from '@/views/Login/Login';


Vue.use(VueRouter)

const routes = [
  {path:'/',component: Home},
  {path:'/user',component: User},
  {path:'/article/:id',component:ArticleDetail, props:true},
  {path:'/funArticle/:id',component:ArticleDetail, props:true},
  {path:'/GameArticle/:id',component:ArticleDetail, props:true},
  {path:'/sportsArticle/:id',component:ArticleDetail, props:true},
  {path:'/login',component:Login},
]

const router = new VueRouter({
  routes
})

// 路由守卫
router.beforeEach((to,from,next) =>{
  // 如果要访问用户页面 要先判断是否登录
  if(to.path === '/user'){
    const token = localStorage.getItem('state');
    // 没有token值就要求用户先去登录
    if(token){
      next();
    }else{
      next('/login');
    }
  }else{
    next();
  }
  next();
})

export default router
