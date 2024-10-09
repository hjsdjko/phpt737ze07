import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Forum from '../pages/forum/list'
import ForumAdd from '../pages/forum/add'
import ForumDetail from '../pages/forum/detail'
import MyForumList from '../pages/forum/myForumList'
import Storeup from '../pages/storeup/list'
import AddrList from '../pages/shop-address/list'
import AddrAdd from '../pages/shop-address/addOrUpdate'
import Order from '../pages/shop-order/list'
import OrderConfirm from '../pages/shop-order/confirm'
import Cart from '../pages/shop-cart/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import zaixiankechengList from '../pages/zaixiankecheng/list'
import zaixiankechengDetail from '../pages/zaixiankecheng/detail'
import zaixiankechengAdd from '../pages/zaixiankecheng/add'
import kechengleibieList from '../pages/kechengleibie/list'
import kechengleibieDetail from '../pages/kechengleibie/detail'
import kechengleibieAdd from '../pages/kechengleibie/add'
import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import sheyingqicaiList from '../pages/sheyingqicai/list'
import sheyingqicaiDetail from '../pages/sheyingqicai/detail'
import sheyingqicaiAdd from '../pages/sheyingqicai/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'
import aboutusList from '../pages/aboutus/list'
import aboutusDetail from '../pages/aboutus/detail'
import aboutusAdd from '../pages/aboutus/add'
import systemintroList from '../pages/systemintro/list'
import systemintroDetail from '../pages/systemintro/detail'
import systemintroAdd from '../pages/systemintro/add'
import discusszaixiankechengList from '../pages/discusszaixiankecheng/list'
import discusszaixiankechengDetail from '../pages/discusszaixiankecheng/detail'
import discusszaixiankechengAdd from '../pages/discusszaixiankecheng/add'
import discusssheyingqicaiList from '../pages/discusssheyingqicai/list'
import discusssheyingqicaiDetail from '../pages/discusssheyingqicai/detail'
import discusssheyingqicaiAdd from '../pages/discusssheyingqicai/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'forum',
					component: Forum
				},
				{
					path: 'forumAdd',
					component: ForumAdd
				},
				{
					path: 'forumDetail',
					component: ForumDetail
				},
				{
					path: 'myForumList',
					component: MyForumList
				},
				{
					path: 'storeup',
					component: Storeup
				},
                {
                    path: 'shop-address/list',
                    component: AddrList
                },
                {
                    path: 'shop-address/addOrUpdate',
                    component: AddrAdd
                },
				{
					path: 'shop-order/order',
					component: Order
				},
				{
					path: 'cart',
					component: Cart
				},
				{
					path: 'shop-order/orderConfirm',
					component: OrderConfirm
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'zaixiankecheng',
					component: zaixiankechengList
				},
				{
					path: 'zaixiankechengDetail',
					component: zaixiankechengDetail
				},
				{
					path: 'zaixiankechengAdd',
					component: zaixiankechengAdd
				},
				{
					path: 'kechengleibie',
					component: kechengleibieList
				},
				{
					path: 'kechengleibieDetail',
					component: kechengleibieDetail
				},
				{
					path: 'kechengleibieAdd',
					component: kechengleibieAdd
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'sheyingqicai',
					component: sheyingqicaiList
				},
				{
					path: 'sheyingqicaiDetail',
					component: sheyingqicaiDetail
				},
				{
					path: 'sheyingqicaiAdd',
					component: sheyingqicaiAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
				{
					path: 'aboutus',
					component: aboutusList
				},
				{
					path: 'aboutusDetail',
					component: aboutusDetail
				},
				{
					path: 'aboutusAdd',
					component: aboutusAdd
				},
				{
					path: 'systemintro',
					component: systemintroList
				},
				{
					path: 'systemintroDetail',
					component: systemintroDetail
				},
				{
					path: 'systemintroAdd',
					component: systemintroAdd
				},
				{
					path: 'discusszaixiankecheng',
					component: discusszaixiankechengList
				},
				{
					path: 'discusszaixiankechengDetail',
					component: discusszaixiankechengDetail
				},
				{
					path: 'discusszaixiankechengAdd',
					component: discusszaixiankechengAdd
				},
				{
					path: 'discusssheyingqicai',
					component: discusssheyingqicaiList
				},
				{
					path: 'discusssheyingqicaiDetail',
					component: discusssheyingqicaiDetail
				},
				{
					path: 'discusssheyingqicaiAdd',
					component: discusssheyingqicaiAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
