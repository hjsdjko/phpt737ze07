<template>
<div class="home-preview" :style='{"margin":"0 auto","flexWrap":"wrap","flexDirection":"row","background":"url(http://codegen.caihongy.cn/20240117/40df7b0ed9d446dc9e3412e83abd813d.jpg) no-repeat center bottom,#d4eeff","display":"flex","width":"100%","justifyContent":"center","height":"auto"}'>



		<!-- 关于我们 -->
		<div id="about" class="animate__animated" :style='{"padding":"40px 7% 20px","margin":"0","borderColor":"#f1635f","background":"none","borderWidth":"0px 0 0","width":"100%","position":"relative","borderStyle":"solid","height":"auto","order":"1"}'>
		  <div :style='{"margin":"0 0 20px","color":"#454545","textAlign":"center","background":"url(http://codegen.caihongy.cn/20240117/e2da3af842f44f9f86c61d0ff295414d.png) no-repeat center center / 35%","width":"100%","fontSize":"26px","lineHeight":"60px","fontWeight":"600","height":"60px"}'>{{aboutUsDetail.title}}</div>
		  <div :style='{"margin":"0 0 30px","color":"#888","textAlign":"left","display":"none","width":"100%","lineHeight":"1.5","fontSize":"16px"}'>{{aboutUsDetail.subtitle}}</div>
		  <div :style='{"padding":"0 0px","margin":"0","flexWrap":"wrap","display":"flex","width":"50%","float":"left","height":"236px"}'>
		    <img :style='{"width":"calc(25% - 10px)","margin":"0 10px 0 0","objectFit":"cover","flex":"1","display":"block","height":"100%"}' :src="baseUrl + aboutUsDetail.picture1">
		    <img :style='{"width":"calc(50% - 10px)","margin":"0 10px 0 0","objectFit":"cover","flex":"2","display":"block","height":"100%"}' :src="baseUrl + aboutUsDetail.picture2">
		    <img :style='{"width":"calc(25% - 10px)","margin":"0 10px 0 0","objectFit":"cover","flex":1,"display":"block","height":"100%"}' :src="baseUrl + aboutUsDetail.picture3">
		  </div>
		  <div :style='{"padding":"14px 12px 0","margin":"0","overflow":"hidden","color":"#333","background":"rgba(255,255,255,.5)","width":"50%","fontSize":"14px","lineHeight":"24px","textIndent":"2em","float":"right","height":"236px"}' v-html="aboutUsDetail.content"></div>
		  <div :style='{"top":"0","left":"52%","background":"url(http://codegen.caihongy.cn/20230920/8a35b5134ee644b8a9a87ea99a0f1490.png) no-repeat","display":"none","width":"200px","position":"absolute","height":"100%"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"border":"0px solid #eccc19","cursor":"pointer","padding":"0 20px","margin":"0","textAlign":"center","display":"block","right":"7%","float":"left","top":"50px","borderRadius":"20px","background":"none","width":"auto","lineHeight":"36px","position":"absolute"}' @click="toDetail('aboutusDetail',aboutUsDetail)">
		    <span :style='{"color":"#3389d7","fontSize":"22px"}'>MORE</span>
		    <span class="icon iconfont icon-jiantou25" :style='{"color":"#3389d7","fontSize":"22px","display":"inline-block"}'></span>
		  </div>
		</div>
		<!-- 关于我们 -->

		<!-- 系统简介 -->
		<div id="system" class="animate__animated" :style='{"padding":"20px 7%","margin":"0","borderColor":"#ffc652","background":"none","borderWidth":"0px 0 0","width":"100%","position":"relative","borderStyle":"solid","height":"auto","order":"3"}'>
		  <div :style='{"margin":"0 0 20px","color":"#454545","textAlign":"center","background":"url(http://codegen.caihongy.cn/20240117/e2da3af842f44f9f86c61d0ff295414d.png) no-repeat center center / 35%","width":"auto","fontSize":"26px","lineHeight":"60px","fontWeight":"600","height":"60px"}'>{{systemIntroductionDetail.title}}</div>
		  <div :style='{"margin":"0 0 30px","color":"#888","textAlign":"right","display":"none","width":"100%","lineHeight":"1.5","fontSize":"16px"}'>{{systemIntroductionDetail.subtitle}}</div>
		  <div :style='{"padding":"0 0px","margin":"0","display":"flex","width":"50%","float":"right","height":"236px","order":"2"}'>
		    <img :style='{"width":"calc(25% - 10px)","margin":"0 0 0 10px","objectFit":"cover","flex":"1","display":"block","height":"100%"}' :src="baseUrl + systemIntroductionDetail.picture1">
		    <img :style='{"width":"calc(25% - 10px)","margin":"0 0 0 10px","objectFit":"cover","flex":"1","display":"block","height":"100%"}' :src="baseUrl + systemIntroductionDetail.picture2">
		    <img :style='{"width":"calc(50% - 10px)","margin":"0 0 0 10px","objectFit":"cover","flex":"2","display":"block","height":"100%"}' :src="baseUrl + systemIntroductionDetail.picture3">
		  </div>
		  <div :style='{"padding":"14px 12px 0","margin":"0px 0 10px 0","overflow":"hidden","color":"#333","background":"rgba(255,255,255,.5)","width":"50%","lineHeight":"24px","fontSize":"14px","textIndent":"2em","float":"left","height":"236px","order":"1"}' v-html="systemIntroductionDetail.content"></div>
		  <div :style='{"transform":"rotate(180deg)","top":"0","background":"url(http://codegen.caihongy.cn/20230920/8a35b5134ee644b8a9a87ea99a0f1490.png) no-repeat","display":"none","width":"200px","position":"absolute","right":"52%","height":"100%"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"border":"0px solid #eccc19","cursor":"pointer","padding":"0 20px","margin":"0","textAlign":"left","display":"flex","right":"7%","justifyContent":"center","top":"30px","borderRadius":"20px","background":"MONE","width":"auto","lineHeight":"36px","position":"absolute","order":"8","height":"40px"}' @click="toDetail('systemintroDetail',systemIntroductionDetail)">
		    <span :style='{"padding":"0 0px 0 0","margin":"0","color":"#3389d7","background":"none","display":"inline-block","width":"auto","fontSize":"22px","lineHeight":"40px","height":"40px"}'>MORE</span>
		    <span class="icon iconfont icon-jiantou25" :style='{"padding":"0px","margin":"0","color":"#3389d7","background":"none","display":"inline-block","fontSize":"22px","lineHeight":"40px","height":"40px"}'></span>
		  </div>
		</div>
		<!-- 系统简介 -->
		
	<!-- 新闻资讯 -->
	<div id="animate_newsnews" class="news animate__animated" :style='{"padding":"40px 7%","margin":"0 auto","backgroundAttachment":"fixed","flexWrap":"wrap","background":"none","display":"flex","width":"100%","position":"relative","order":"4"}'>
		<div v-if="false" class="idea newsIdea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
			<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		</div>
		
		<div class="title" :style='{"width":"100%","padding":"0","margin":"0 auto","textAlign":"center","background":"url(http://codegen.caihongy.cn/20240117/e2da3af842f44f9f86c61d0ff295414d.png) no-repeat center center / 35%","height":"60px"}'>
			<span :style='{"fontSize":"26px","lineHeight":"60px","color":"#454545","fontWeight":"600"}'>摄影资讯</span>
		</div>
		
			
			<!-- 样式一 -->
		<div class="list list1 index-pv1" :style='{"padding":"0","margin":"20px 0 0","color":"#999","background":"none","width":"100%","fontSize":"14px","height":"auto","order":"3"}' v-if="newsList.length">
			<div :style='{"cursor":"pointer","padding":"0","margin":"0 2% 20px 0","background":"none","display":"inline-block","width":"23%","position":"relative","height":"auto"}' v-for="(item,index) in newsList" :key="index" @click="toDetail('newsDetail', item)" class="list-item animation-box">
				<img :style='{"width":"275px","margin":"0 auto","objectFit":"cover","borderRadius":"100%","display":"block","height":"275px"}' :src="baseUrl + item.picture" alt="" />
				<div class="name line1" :style='{"padding":"10px","margin":"0 auto","overflow":"hidden","whiteSpace":"nowrap","color":"#333","textAlign":"center","background":"none","width":"275px","lineHeight":"24px","fontSize":"14px","textOverflow":"ellipsis","height":"auto"}'>{{item.title}}</div>
				<div :style='{"padding":"0 10px","margin":"0 0 10px","display":"none"}'>
				  <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
				  <span class="text" :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.addtime}}</span>
				</div>
				<div :style='{"padding":"0 10px","display":"none"}'>
				  <span class="icon iconfont icon-geren16" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
				  <span class="text" :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.name}}</span>
				</div>
				<div :style='{"padding":"0 10px","display":"none"}'>
				  <span class="icon iconfont icon-zan10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
				  <span class="text" :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.thumbsupnum}}</span>
				</div>
				<div :style='{"padding":"0 10px","display":"none"}'>
				  <span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"inherit","fontSize":"12px","color":"inherit"}'></span>
				  <span class="text" :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.storeupnum}}</span>
				</div>
				<div :style='{"padding":"0 10px","display":"none"}'>
				  <span class="icon iconfont icon-chakan9" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"inherit","color":"inherit"}'></span>
				  <span class="text" :style='{"color":"inherit","lineHeight":"1.5","fontSize":"inherit"}'>{{item.clicknum}}</span>
				</div>
			</div>
		</div>
			
			
			
			
			
			
			
			
			
		











		<div @click="moreBtn('news')" :style='{"border":"0px solid #eccc19","cursor":"pointer","padding":"0 20px","margin":"0","borderRadius":"20px","textAlign":"center","background":"none","display":"block","width":"100%","lineHeight":"32px","order":"1"}'>
			<span :style='{"color":"#3389d7","fontSize":"22px"}'>MORE</span>
			<i :style='{"color":"#3389d7","fontSize":"22px","display":"inline-block"}' class="icon iconfont icon-jiantou25"></i>
		</div>
		
		</div>
	<!-- 新闻资讯 -->


<!-- 商品推荐 -->
<div id="animate_recommendzaixiankecheng" class="recommend animate__animated" :style='{"padding":"40px 7% 40px","margin":"0 auto","borderColor":"#ddd","flexWrap":"wrap","background":"none","borderWidth":"0px 0","display":"flex","width":"100%","position":"relative","borderStyle":"solid","order":"2"}'>
	<div v-if="false" class="idea recommendIdea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
    <div class="title" :style='{"width":"100%","margin":"0 auto","textAlign":"center","background":"url(http://codegen.caihongy.cn/20240117/e2da3af842f44f9f86c61d0ff295414d.png) no-repeat center center / 35%","height":"60px"}'>
		<span :style='{"padding":"0px 0 0","fontSize":"26px","lineHeight":"60px","color":"#454545","fontWeight":"600","display":"block"}'>在线课程推荐</span>
	</div>
	
	
	
	
	
	
	
	
	
	







		<div v-if="zaixiankechengRecommend.length" :style='{"padding":"0","flexWrap":"wrap","background":"none","display":"flex","width":"100%","height":"auto","order":"3"}' class="list list17 index-pv1">
		  <div v-for="item,index in zaixiankechengRecommend" :key="index"  @click="toDetail('zaixiankechengDetail', item)" :style='{"cursor":"pointer","width":"calc(25% - 20px)","margin":"20px 20px 0 0","position":"relative","background":"none","height":"auto"}' class="item">
				<img class="image" v-if="preHttp(item.fengmian)" :src="item.fengmian.split(',')[0]" alt="" />
				<img class="image" v-else :src="baseUrl + (item.fengmian?item.fengmian.split(',')[0]:'')" alt="" />
			<div class="content">
		      <div class="info">
				<div :style='{"overflow":"hidden","whiteSpace":"hidden","color":"#fff","textAlign":"left","width":"100%","lineHeight":"1.3","fontSize":"18px","textOverflow":"ellipsis","textShadow":"2px 2px 2px #000","fontWeight":"600"}' class="name ">{{item.kechengmingcheng}}</div>
				<div :style='{"padding":"0","display":"none"}'>
		          <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#fff"}'></span>
		          <span :style='{"color":"#fff","lineHeight":"1.5","fontSize":"12px"}'>{{item.addtime}}</span>
		        </div>
		        <div :style='{"padding":"0","display":"none"}'>
		          <span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#fff"}'></span>
		          <span :style='{"color":"#fff","lineHeight":"1.5","fontSize":"12px"}'>{{item.storeupnum}}</span>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
	
	<div @click="moreBtn('zaixiankecheng')" :style='{"border":"0px solid #eccc19","cursor":"pointer","padding":"0 20px","margin":"0","borderRadius":"20px","textAlign":"RIGHT","background":"none","display":"block","width":"100%","lineHeight":"32px"}'>
		<span :style='{"color":"#3389d7","fontSize":"22px"}'>MORE</span>
		<i :style='{"color":"#3389d7","fontSize":"22px","display":"inline-block"}' class="icon iconfont icon-jiantou25"></i>
	</div>
	
</div>
<!-- 商品推荐 -->

<!-- 商品推荐 -->
<div id="animate_recommendsheyingqicai" class="recommend animate__animated" :style='{"padding":"40px 7% 40px","margin":"0 auto","borderColor":"#ddd","flexWrap":"wrap","background":"none","borderWidth":"0px 0","display":"flex","width":"100%","position":"relative","borderStyle":"solid","order":"2"}'>
	<div v-if="false" class="idea recommendIdea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
    <div class="title" :style='{"width":"100%","margin":"0 auto","textAlign":"center","background":"url(http://codegen.caihongy.cn/20240117/e2da3af842f44f9f86c61d0ff295414d.png) no-repeat center center / 35%","height":"60px"}'>
		<span :style='{"padding":"0px 0 0","fontSize":"26px","lineHeight":"60px","color":"#454545","fontWeight":"600","display":"block"}'>摄影器材推荐</span>
	</div>
	
	
	
	
	
	
	
	
	
	







		<div v-if="sheyingqicaiRecommend.length" :style='{"padding":"0","flexWrap":"wrap","background":"none","display":"flex","width":"100%","height":"auto","order":"3"}' class="list list17 index-pv1">
		  <div v-for="item,index in sheyingqicaiRecommend" :key="index"  @click="toDetail('sheyingqicaiDetail', item)" :style='{"cursor":"pointer","width":"calc(25% - 20px)","margin":"20px 20px 0 0","position":"relative","background":"none","height":"auto"}' class="item">
				<img class="image" v-if="preHttp(item.tupian)" :src="item.tupian.split(',')[0]" alt="" />
				<img class="image" v-else :src="baseUrl + (item.tupian?item.tupian.split(',')[0]:'')" alt="" />
			<div class="content">
		      <div class="info">
				<div :style='{"overflow":"hidden","whiteSpace":"hidden","color":"#fff","textAlign":"left","width":"100%","lineHeight":"1.3","fontSize":"18px","textOverflow":"ellipsis","textShadow":"2px 2px 2px #000","fontWeight":"600"}' class="name ">{{item.qicaimingcheng}}</div>
				<div :style='{"padding":"0","display":"none"}'>
		          <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#fff"}'></span>
		          <span :style='{"color":"#fff","lineHeight":"1.5","fontSize":"12px"}'>{{item.addtime}}</span>
		        </div>
		        <div :style='{"padding":"0","display":"none"}'>
		          <span class="icon iconfont icon-zan10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#fff"}'></span>
		          <span :style='{"color":"#fff","lineHeight":"1.5","fontSize":"12px"}'>{{item.thumbsupnum}}</span>
		        </div>
		        <div :style='{"padding":"0","display":"none"}'>
		          <span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#fff"}'></span>
		          <span :style='{"color":"#fff","lineHeight":"1.5","fontSize":"12px"}'>{{item.storeupnum}}</span>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
	
	<div @click="moreBtn('sheyingqicai')" :style='{"border":"0px solid #eccc19","cursor":"pointer","padding":"0 20px","margin":"0","borderRadius":"20px","textAlign":"RIGHT","background":"none","display":"block","width":"100%","lineHeight":"32px"}'>
		<span :style='{"color":"#3389d7","fontSize":"22px"}'>MORE</span>
		<i :style='{"color":"#3389d7","fontSize":"22px","display":"inline-block"}' class="icon iconfont icon-jiantou25"></i>
	</div>
	
</div>
<!-- 商品推荐 -->


<!-- 特价商品 -->
<div id="animate_listzaixiankecheng" class="lists animate__animated" :style='{"width":"100%","padding":"30px 7% 40px","margin":"0 auto","position":"relative","background":"none","order":"1"}'>
	<div v-if="false" class="idea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
	<div class="title" :style='{"width":"auto","margin":"0 auto 40px","textAlign":"center","background":"url(http://codegen.caihongy.cn/20240117/e2da3af842f44f9f86c61d0ff295414d.png) no-repeat center center / 35%","height":"60px"}'>
	  <span :style='{"padding":"0","color":"#454545","display":"block","fontSize":"26px","lineHeight":"60px","fontWeight":"600","font":"\"宋体\""}'>在线课程展示</span>
	</div>
	
	
	
	
	<!-- 样式三 -->
	<div class="list list3 index-pv1">
		<div class="swiper-container" id="listszaixiankecheng" :style='{"width":"100%","padding":"0","background":"none","height":"auto"}'>
			<div class="swiper-wrapper">
				<div class="swiper-slide animation-box" :style='{"border":"1px solid #ddd","cursor":"pointer","padding":"0 0 6px","borderRadius":"0px","background":"#fff","fontSize":"0","position":"relative"}' v-for="(item,index) in zaixiankechengList" :key="index" @click="toDetail('zaixiankechengDetail', item)">
					<img :name="item.id" :style='{"objectFit":"cover","width":"100%","height":"280px"}' v-if="preHttp(item.fengmian)" :src="item.fengmian.split(',')[0]" alt="" />
					<img :name="item.id" :style='{"objectFit":"cover","width":"100%","height":"280px"}' v-else :src="baseUrl + (item.fengmian?item.fengmian.split(',')[0]:'')" alt="" />
					<div class="name line1" :style='{"padding":"0 10px","overflow":"hidden","whiteSpace":"nowrap","color":"#333","background":"none","width":"auto","fontSize":"14px","lineHeight":"32px","textOverflow":"ellipsis"}'>{{item.kechengmingcheng}}</div>
					<div :style='{"width":"100%","padding":"0 10px"}'>
					  <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#666"}'></span>
					  <span class="text" :style='{"color":"#666","lineHeight":"1.5","fontSize":"12px"}'>{{item.addtime}}</span>
					</div>
					<div :style='{"padding":"0 10px","display":"inline-block"}'>
					  <span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#666"}'></span>
					  <span class="text" :style='{"color":"#666","lineHeight":"1.5","fontSize":"12px"}'>{{item.storeupnum}}</span>
					</div>
				</div>
			</div>
			<!-- 如果需要导航按钮 -->
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>
		</div>
	</div>
	
	
	
	
	
	






	
	
	<div @click="moreBtn('zaixiankecheng')" :style='{"border":"0px solid #eccc19","cursor":"pointer","padding":"0 20px","margin":"0","textAlign":"center","display":"block","right":"7%","top":"80px","borderRadius":"16px","background":"none","width":"auto","lineHeight":"32px","position":"absolute"}'>
		<span :style='{"color":"#3389d7","fontSize":"22px"}'>MORE</span>
		<i :style='{"color":"#3389d7","fontSize":"22px","display":"inline-block"}' class="icon iconfont icon-jiantou25"></i>
	</div>
	

</div>
<!-- 特价商品 -->
	
</div>
</template>

<script>
import 'animate.css'
import Swiper from "swiper";

  export default {
    //数据集合
    data() {
      return {
        baseUrl: '',
        aboutUsDetail: {},
        systemIntroductionDetail: {},
        newsList: [],
        zaixiankechengRecommend: [],
        sheyingqicaiRecommend: [],

        zaixiankechengList: [],




      }
    },
    created() {
		this.baseUrl = this.$config.baseUrl;
		this.getNewsList();
		this.getAboutUs();
		this.getSystemIntroduction();
		this.getList();
    },
	mounted() {
		window.addEventListener('scroll', this.handleScroll)
		setTimeout(()=>{
			this.handleScroll()
		},100)
		
		this.swiperChanges()
	},
	beforeDestroy() {
	  window.removeEventListener('scroll', this.handleScroll)
	},
    //方法集合
    methods: {
		swiperChanges() {
			setTimeout(()=>{
			},750)
		},


		handleScroll() {
			let arr = [
				{id:'search',css:'animate__'},
				{id:'about',css:'animate__'},
				{id:'system',css:'animate__'},
				{id:'animate_recommendzaixiankecheng',css:'animate__'},
				{id:'animate_listzaixiankecheng',css:'animate__'},
				{id:'animate_recommendsheyingqicai',css:'animate__'},
				{id:'animate_newsnews',css:'animate__'},
				{id:'msgs',css:'animate__'},
				{id:'friendly',css:'animate__'}
			]
			
			for (let i in arr) {
				let doc = document.getElementById(arr[i].id)
				if (doc) {
					let top = doc.offsetTop
					let win_top = window.innerHeight + window.pageYOffset
					// console.log(top,win_top)
					if (win_top > top && doc.classList.value.indexOf(arr[i].css) < 0) {
						// console.log(doc)
						doc.classList.add(arr[i].css)
					}
				}
			}
		},
      preHttp(str) {
          return str && str.substr(0,4)=='http';
      },
      getAboutUs() {
          this.$http.get('aboutus/detail/1', {}).then(res => {
            if(res.data.code == 0) {
              this.aboutUsDetail = res.data.data;
            }
          })
      },
      getSystemIntroduction() {
          this.$http.get('systemintro/detail/1', {}).then(res => {
            if(res.data.code == 0) {
              this.systemIntroductionDetail = res.data.data;
            }
          })
      },
		getNewsList() {
			let data = {
				page: 1,
				limit: 4,
                sort: 'addtime',
				order: 'desc'
			}
			this.$http.get('news/list', {params: data}).then(res => {
				if (res.data.code == 0) {
					this.newsList = res.data.data.list;
					
					
				}
			});
		},
		getList() {
			let autoSortUrl = "";
			let data = {}
          autoSortUrl = "zaixiankecheng/autoSort";
          if(localStorage.getItem('frontToken')) {
              autoSortUrl = "zaixiankecheng/autoSort2";
          }
			data = {
				page: 1,
				limit: 8,
			}
			this.$http.get(autoSortUrl, {params: data}).then(res => {
				if (res.data.code == 0) {
					this.zaixiankechengRecommend = res.data.data.list;
					
					
					// 商品列表样式五
					
				}
			});
          autoSortUrl = "sheyingqicai/autoSort";
          if(localStorage.getItem('frontToken')) {
              autoSortUrl = "sheyingqicai/autoSort2";
          }
			data = {
				page: 1,
				limit: 8,
			}
			this.$http.get(autoSortUrl, {params: data}).then(res => {
				if (res.data.code == 0) {
					this.sheyingqicaiRecommend = res.data.data.list;
					
					
					// 商品列表样式五
					
				}
			});
			
			data = {
				page: 1,
				limit: 8,
			}
			this.$http.get('zaixiankecheng/list', {params: data}).then(res => {
				if (res.data.code == 0) {
					this.zaixiankechengList = res.data.data.list;
					let options = {"observer":true,"navigation":{"nextEl":".swiper-button-next","prevEl":".swiper-button-prev"},"observeParents":true,"loop":false,"slidesPerView":"5","speed":500,"spaceBetween":20,"autoplay":{"delay":3000,"disableOnInteraction":false}}
					options.pagination = {el:'null'}
					if(options.slidesPerView) {
						options.slidesPerView = Number(options.slidesPerView);
					}
					if(options.spaceBetween) {
						options.spaceBetween = Number(options.spaceBetween);
					}
					this.$nextTick(() => {
						new Swiper ('#listszaixiankecheng', options)
					})
					
					// 商品列表样式五
					
				}
			});
		},
		toDetail(path, item) {
			this.$router.push({path: '/index/' + path, query: {id: item.id}});
		},
		moreBtn(path) {
			this.$router.push({path: '/index/' + path});
		}
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.home-preview {
		// -------- search --------
		.search .select /deep/ .el-input__inner {
			border: 0px solid #ddd;
			border-radius: 2px;
			padding: 0 30px 0 10px;
			box-shadow: 0 0 0px rgba(64, 158, 255, .3);
			outline: none;
			color: rgba(64, 158, 255, 1);
			width: 180px;
			font-size: 14px;
			height: 32px;
		}
		
		.search .input /deep/ .el-input__inner {
			border-radius: 2px;
			padding: 0 10px;
			color: rgba(64, 158, 255, 1);
			width: 280px;
			font-size: 14px;
			border-color: #ddd;
			border-width: 0px;
			border-style: solid;
			height: 32px;
		}
		// -------- search --------
		.recommend {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
        }
        
        .list5 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				box-shadow: 0px 0px 0px 0px #e7e7e7;
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(0.98) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
		
		.news {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list6 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list6 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	
		.lists {
			.list3 .swiper-button-prev {
				left: 10px;
				font-weight: 600;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				font-weight: 600;
				right: 10px;
        }
        
        .list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-next {
            left: auto;
            right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	}
	








	.home-preview .recommend .list17 .item .image {
				border-radius: 0;
				object-fit: cover;
				display: block;
				width: 100%;
				transition: 0.3s;
				height: 230px;
			}

	.home-preview .recommend .list17 .item:hover .image {
				transform: scale(1);
			}
	
	.home-preview .recommend .list17 .item .content {
				border-radius: 0px;
				padding: 10px;
				left: 0;
				bottom: 0;
				background: rgba(0, 0, 0, 0);
				display: flex;
				width: 100%;
				position: absolute;
				transition: 0.3s;
				height: auto;
			}
	
	.home-preview .recommend .list17 .item:hover .content {
				bottom: 0;
			}


</style>
