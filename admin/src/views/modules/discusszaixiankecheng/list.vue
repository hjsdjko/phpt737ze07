<template>
	<div class="main-content" :style='{"color":"#666","padding":"20px 30px 30px","fontSize":"14px"}'>
		<!-- 列表页 -->
		<template v-if="showFlag">
			<el-form class="center-form-pv" :style='{"padding":"0px 10px 0","margin":"0px","fontSize":"inherit","overflow":"hidden","background":"none"}' :inline="true" :model="searchForm">
				<el-row :style='{"width":"100%","fontSize":"inherit","textAlign":"right","display":"block"}' >
					<div :style='{"margin":"0 10px 0 0","fontSize":"inherit","display":"inline-block"}'>
						<label :style='{"margin":"0 10px 0 0","color":"inherit","display":"inline-block","lineHeight":"40px","fontSize":"inherit","fontWeight":"500","height":"40px"}' class="item-label">用户名</label>
						<el-input v-model="searchForm.nickname" placeholder="用户名" @keydown.enter.native="search()" clearable></el-input>
					</div>
					<div :style='{"margin":"0 10px 0 0","fontSize":"inherit","display":"inline-block"}'>
						<label :style='{"margin":"0 10px 0 0","color":"inherit","display":"inline-block","lineHeight":"40px","fontSize":"inherit","fontWeight":"500","height":"40px"}' class="item-label">评论内容</label>
						<el-input v-model="searchForm.content" placeholder="评论内容" @keydown.enter.native="search()" clearable></el-input>
					</div>
					<el-button class="search" type="success" @click="search()">
						<span class="icon iconfont icon-chakan18" :style='{"margin":"0 2px","fontSize":"inherit","color":"inherit","height":"40px"}'></span>
						搜索
					</el-button>
				</el-row>
				<el-row :style='{"width":"100%","fontSize":"inherit","textAlign":"right","display":"block"}'>
					<el-button :style='{"border":"0","cursor":"pointer","padding":"0 24px","outline":"none","color":"#fff","borderRadius":"0px","background":"linear-gradient(180deg, rgba(160,8,8,1) 0%, rgba(222,40,40,1) 50%, rgba(160,8,8,1) 100%)","clipPath":"polygon(0% 0%, 95% 0, 100% 50%, 88% 100%, 0% 100%)","width":"auto","fontSize":"inherit","height":"40px"}' type="success" @click="backClick()">返回</el-button>
				</el-row>

				<el-row class="actions" :style='{"margin":"5px 0 5px","color":"rgba(126, 96, 16, 1)","flexWrap":"wrap","textAlign":"right","flexDirection":"row-reverse","display":"flex","width":"100%","fontSize":"inherit"}'>
					<el-button class="add" v-if="isAuth('discusszaixiankecheng','新增')" type="success" @click="addOrUpdateHandler()">
						<span class="icon iconfont icon-tianjia13" :style='{"color":"inherit","margin":"0 2px","fontSize":"inherit"}'></span>
						填充
					</el-button>
					<el-button class="del" v-if="isAuth('discusszaixiankecheng','删除')" :disabled="dataListSelections.length?false:true" type="danger" @click="deleteHandler()">
						<span class="icon iconfont icon-shanchu7" :style='{"margin":"0 2px","fontSize":"inherit","color":"inherit","height":"40px"}'></span>
						废除
					</el-button>



				</el-row>
			</el-form>
			<div :style='{"border":"10px solid rgba(126, 96, 16, .2)","width":"100%","padding":"0","borderRadius":"0px","background":"rgba(255,255,255,.9)"}'>
				<el-table class="tables"
					:stripe='false'
					:style='{"padding":"0","borderColor":"rgba(254,169,34,.3)","color":"inherit","borderRadius":"0px","borderWidth":"0","background":"none","width":"100%","fontSize":"inherit","borderStyle":"solid"}' 
					:border='false'
					:data="dataList"
					v-loading="dataListLoading"
				@selection-change="selectionChangeHandler">
					<el-table-column :resizable='true' type="selection" align="center" width="50"></el-table-column>
					<el-table-column :resizable='true' :sortable='true' label="序号" type="index" width="50" />
					<!-- refid -->
					<!-- 是 -->
					<!-- userid -->
					<!-- 是 -->
					<!-- avatarurl -->
					<!-- $column.hiden -->
					<!-- nickname -->
					<!-- $column.hiden -->
					<el-table-column :resizable='true' :sortable='true'  
						prop="nickname"
						label="用户名">
						<template slot-scope="scope">
							{{scope.row.nickname}}
						</template>
					</el-table-column>
					<!-- content -->
					<!-- $column.hiden -->
					<el-table-column :resizable='true' :sortable='true' prop="content" label="评论内容">
						<template slot-scope="scope">
                            <span v-html="scope.row.content"></span>
						</template>
					</el-table-column>
					<!-- reply -->
					<!-- 是 -->
					<el-table-column :resizable='true' :sortable='true' prop="reply" label="回复内容">
						<template slot-scope="scope">
                            <span v-html="scope.row.reply"></span>
						</template>
					</el-table-column>
					<el-table-column width="300" label="操作">
						<template slot-scope="scope">
							<el-button class="edit" v-if=" isAuth('discusszaixiankecheng','修改') " type="success" @click="addOrUpdateHandler(scope.row.id)">
								<span class="icon iconfont icon-xiugai10" :style='{"margin":"0 2px","fontSize":"inherit","color":"inherit","height":"40px"}'></span>
								调整
							</el-button>

							<el-button class="view" v-if="isAuth('discusszaixiankecheng','查看评论')" type="success" @click="disscussListHandler(scope.row.id)">
								<span class="icon iconfont icon-chakan14" :style='{"margin":"0 2px","fontSize":"inherit","color":"inherit","height":"40px"}'></span>
								查看评论
							</el-button>


							<el-button class="btn8" type="success" @click="addOrUpdateHandler(scope.row.id)">
								<span class="icon iconfont icon-yanziwancheng" :style='{"margin":"0 2px","fontSize":"inherit","color":"inherit","height":"40px"}'></span>
								回复
							</el-button>

							<el-button class="del" v-if="" type="primary" @click="deleteHandler(scope.row.id ,scope.row.refid )">
								<span class="icon iconfont icon-guanbi1" :style='{"margin":"0 2px","fontSize":"inherit","color":"inherit","height":"40px"}'></span>
								去除
							</el-button>
						</template>
					</el-table-column>
				</el-table>
			</div>
			<el-pagination
				@size-change="sizeChangeHandle"
				@current-change="currentChangeHandle"
				:current-page="pageIndex"
				background
				:page-sizes="[10, 50, 100, 200]"
				:page-size="pageSize"
				:layout="layouts.join()"
				:total="totalPage"
				prev-text="上一页 "
				next-text="下一页 "
				:hide-on-single-page="false"
				:style='{"padding":"0","margin":"20px 0 0","whiteSpace":"nowrap","color":"inherit","textAlign":"right","width":"100%","fontSize":"inherit","fontWeight":"500"}'
			></el-pagination>
		</template>
		
		<!-- 添加/修改页面  将父组件的search方法传递给子组件-->
		<add-or-update v-if="addOrUpdateFlag" :parent="this" ref="addOrUpdate"></add-or-update>





	</div>
</template>

<script>
import axios from 'axios'
import AddOrUpdate from "./add-or-update";
	export default {
		data() {
			return {
				searchForm: {
					key: ""
				},
				form:{},
				dataList: [],
				pageIndex: 1,
				pageSize: 10,
				totalPage: 0,
				dataListLoading: false,
				dataListSelections: [],
				showFlag: true,
				sfshVisiable: false,
				shForm: {},
				chartVisiable: false,
				chartVisiable1: false,
				chartVisiable2: false,
				chartVisiable3: false,
				chartVisiable4: false,
				chartVisiable5: false,
				addOrUpdateFlag:false,
				layouts: ["total","prev","pager","next","sizes","jumper"],
			};
		},
		created() {
			this.init();
			this.getDataList();
			this.contentStyleChange()
		},
		mounted() {
		},
		filters: {
			htmlfilter: function (val) {
				return val.replace(/<[^>]*>/g).replace(/undefined/g,'');
			}
		},
		computed: {
			tablename(){
				return this.$storage.get('sessionTable')
			},
		},
		components: {
			AddOrUpdate,
		},
		methods: {
			contentStyleChange() {
				this.contentPageStyleChange()
			},
			// 分页
			contentPageStyleChange(){
				let arr = []

				// if(this.contents.pageTotal) arr.push('total')
				// if(this.contents.pageSizes) arr.push('sizes')
				// if(this.contents.pagePrevNext){
				//   arr.push('prev')
				//   if(this.contents.pagePager) arr.push('pager')
				//   arr.push('next')
				// }
				// if(this.contents.pageJumper) arr.push('jumper')
				// this.layouts = arr.join()
				// this.contents.pageEachNum = 10
			},






    init () {
    },
    search() {
      this.pageIndex = 1;
      this.getDataList();
    },

    // 获取数据列表
    getDataList() {
      this.dataListLoading = true;
      let params = {
        page: this.pageIndex,
        limit: this.pageSize,
        sort: 'id',
        order: 'desc',
        refid : this.$route.query.refid,
      }
           if(this.searchForm.nickname!='' && this.searchForm.nickname!=undefined){
            params['nickname'] = '%' + this.searchForm.nickname + '%'
          }
           if(this.searchForm.content!='' && this.searchForm.content!=undefined){
            params['content'] = '%' + this.searchForm.content + '%'
          }
			this.$http({
				url: "discusszaixiankecheng/page",
				method: "get",
				params: params
			}).then(({ data }) => {
				if (data && data.code === 0) {
					this.dataList = data.data.list;
					this.totalPage = data.data.total;
				} else {
					this.dataList = [];
					this.totalPage = 0;
				}
				this.dataListLoading = false;
			});
    },
    // 每页数
    sizeChangeHandle(val) {
      this.pageSize = val;
      this.pageIndex = 1;
      this.getDataList();
    },
    // 当前页
    currentChangeHandle(val) {
      this.pageIndex = val;
      this.getDataList();
    },
    // 多选
    selectionChangeHandler(val) {
      this.dataListSelections = val;
    },
    // 添加/修改
    addOrUpdateHandler(id,type) {
      this.showFlag = false;
      this.addOrUpdateFlag = true;
      this.crossAddOrUpdateFlag = false;
      if(type!='info'){
        type = 'else';
      }
      this.$nextTick(() => {
        this.$refs.addOrUpdate.init(id,type);
      });
    },
    // 查看评论
    disscussListHandler(id,type) {
	this.$router.push({path:'/discussdiscusszaixiankecheng',query:{refid:id}});
    },
	backClick(){
		history.back()
	},
    // 下载
    download(file){
      let arr = file.replace(new RegExp('upload/', "g"), "")
      axios.get(this.$base.url + 'file/download?fileName=' + arr, {
      	headers: {
      		token: this.$storage.get('Token')
      	},
      	responseType: "blob"
      }).then(({
      	data
      }) => {
      	const binaryData = [];
      	binaryData.push(data);
      	const objectUrl = window.URL.createObjectURL(new Blob(binaryData, {
      		type: 'application/pdf;chartset=UTF-8'
      	}))
      	const a = document.createElement('a')
      	a.href = objectUrl
      	a.download = arr
      	// a.click()
      	// 下面这个写法兼容火狐
      	a.dispatchEvent(new MouseEvent('click', {
      		bubbles: true,
      		cancelable: true,
      		view: window
      	}))
      	window.URL.revokeObjectURL(data)
      },err=>{
		  axios.get((location.href.split(this.$base.name).length>1 ? location.href.split(this.$base.name)[0] :'') + this.$base.name + '/file/download?fileName=' + arr, {
		  	headers: {
		  		token: this.$storage.get('Token')
		  	},
		  	responseType: "blob"
		  }).then(({
		  	data
		  }) => {
		  	const binaryData = [];
		  	binaryData.push(data);
		  	const objectUrl = window.URL.createObjectURL(new Blob(binaryData, {
		  		type: 'application/pdf;chartset=UTF-8'
		  	}))
		  	const a = document.createElement('a')
		  	a.href = objectUrl
		  	a.download = arr
		  	// a.click()
		  	// 下面这个写法兼容火狐
		  	a.dispatchEvent(new MouseEvent('click', {
		  		bubbles: true,
		  		cancelable: true,
		  		view: window
		  	}))
		  	window.URL.revokeObjectURL(data)
		  })
	  })
    },
	// 预览
	preClick(file){
		if(!file){
			return false
		}
		window.open((location.href.split(this.$base.name).length>1 ? location.href.split(this.$base.name)[0] + this.$base.name + '/' + file :this.$base.url + file))
	},
	discusszaixiankechengstatusChange(e,row){
		if(row.status==0){
			row.passwordwrongnum = 0
		}
		this.$http({
			url:'discusszaixiankecheng/update',
			method:'post',
			data:row
		}).then(res=>{
			if(row.status==1){
				this.$message.error('该用户已锁定')
			}else{
				this.$message.success('该用户已解除锁定')
			}
		})
	},
    // 删除
    deleteHandler(id ,refid ) {
      var ids = id
        ? [Number(id)]
        : this.dataListSelections.map(item => {
            return Number(item.id);
          });
      this.$confirm(`确定进行[${id ? "删除" : "批量删除"}]操作?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$http({
          url: "discusszaixiankecheng/delete",
          method: "post",
          data: ids
        }).then(({ data }) => {
          if (data && data.code === 0) {
				this.$http({
					url: 'zaixiankecheng/info/' + refid,
					method: "get",
				}).then(res=>{
					if(res.data&&res.data.code==0){
						res.data.data.discussnum = res.data.data.discussnum - Number(ids.length)
						this.$http({
							url: 'zaixiankecheng/update',
							method: "post",
							data:res.data.data
						}).then(res1=>{
							if(res1.data&&res1.data.code==0){
								this.$message({
									message: "操作成功",
									type: "success",
									duration: 1500,
									onClose: () => {
										this.search();
									}
								});
							}
						})
					}
				})
            
          } else {
            this.$message.error(data.msg);
          }
        });
      });
    },


  }

};
</script>
<style lang="scss" scoped>
	
	.center-form-pv {
	  .el-date-editor.el-input {
	    width: auto;
	  }
	}
	
	.el-input {
	  width: auto;
	}
	
	// form
	.center-form-pv .el-input /deep/ .el-input__inner {
				border: 1px solid rgba(126, 96, 16, .2);
				border-radius: 4px;
				padding: 0 12px;
				outline: none;
				color: inherit;
				background: #fff;
				width: 170px;
				font-size: inherit;
				height: 40px;
			}
	
	.center-form-pv .el-select /deep/ .el-input__inner {
				border: 1px solid rgba(126, 96, 16, .2);
				border-radius: 4px;
				padding: 0 10px;
				box-shadow: 0 0 0px rgba(64, 158, 255, .5);
				outline: none;
				color: inherit;
				background: #fff;
				width: 170px;
				font-size: inherit;
				height: 40px;
			}
	
	.center-form-pv .el-date-editor /deep/ .el-input__inner {
				border: 1px solid rgba(126, 96, 16, .2);
				border-radius: 4px;
				padding: 0 10px 0 30px;
				box-shadow: 0 0 0px rgba(64, 158, 255, .5);
				outline: none;
				color: inherit;
				background: #fff;
				width: 170px;
				font-size: inherit;
				height: 40px;
			}
	
	.center-form-pv .search {
				border: 0;
				cursor: pointer;
				border-radius: 0px;
				padding: 0 24px;
				outline: none;
				clip-path: polygon(0% 0%, 95% 0, 100% 50%, 88% 100%, 0% 100%);
				color: #fff;
				background: linear-gradient(180deg, rgba(160,8,8,1) 0%, rgba(222,40,40,1) 50%, rgba(160,8,8,1) 100%);
				width: auto;
				font-size: inherit;
				height: 40px;
			}
	
	.center-form-pv .search:hover {
				color: #e6c83c;
				background: linear-gradient(180deg, rgba(160,8,8,1) 0%, rgba(222,40,40,1) 50%, rgba(160,8,8,1) 100%);
			}
	
	.center-form-pv .actions .add {
				border: 1px solid rgba(126, 96, 16, .2);
				cursor: pointer;
				border-radius: 4px;
				padding: 0 16px 0 10px;
				margin: 4px 4px 5px;
				outline: none;
				color: inherit;
				background: #fff;
				width: auto;
				font-size: inherit;
				height: 36px;
			}
	
	.center-form-pv .actions .add:hover {
				color: #fff;
				background: rgba(126, 96, 16, .6);
				opacity: 1;
			}
	
	.center-form-pv .actions .del {
				border: 1px solid rgba(126, 96, 16, .2);
				cursor: pointer;
				border-radius: 4px;
				padding: 0 16px 0 10px;
				margin: 4px 4px 5px;
				outline: none;
				color: inherit;
				background: rgba(255,255,255,1);
				width: auto;
				font-size: inherit;
				height: 36px;
			}
	
	.center-form-pv .actions .del:hover {
				color: #fff;
				background: rgba(126, 96, 16, .6);
				opacity: 1;
			}
	
	.center-form-pv .actions .statis {
				border: 1px solid rgba(126, 96, 16, .2);
				cursor: pointer;
				border-radius: 4px;
				padding: 0 16px 0 10px;
				margin: 4px 4px 5px;
				outline: none;
				color: inherit;
				background: rgba(255,255,255,1);
				width: auto;
				font-size: inherit;
				height: 36px;
			}
	
	.center-form-pv .actions .statis:hover {
				color: #fff;
				background: rgba(126, 96, 16, .6);
				opacity: 1;
			}
	
	.center-form-pv .actions .btn18 {
				border: 1px solid rgba(126, 96, 16, .2);
				cursor: pointer;
				border-radius: 4px;
				padding: 0 16px 0 10px;
				margin: 4px 4px 5px;
				outline: none;
				color: inherit;
				background: rgba(255,255,255,1);
				width: auto;
				font-size: inherit;
				height: 36px;
			}
	
	.center-form-pv .actions .btn18:hover {
				color: #fff;
				background: rgba(126, 96, 16, .6);
				opacity: 1;
			}
	
	// table
	.el-table /deep/ .el-table__header-wrapper thead {
				color: inherit;
				background: rgba(254,169,34,0);
				width: 100%;
			}
	
	.el-table /deep/ .el-table__header-wrapper thead tr {
				background: none;
			}
	
	.el-table /deep/ .el-table__header-wrapper thead tr th {
				padding: 6px 0;
				background: none;
				border-color: rgba(126, 96, 16, .2);
				border-width: 0 1px 4px 0;
				border-style: solid;
				text-align: left;
			}

	.el-table /deep/ .el-table__header-wrapper thead tr th .cell {
				padding: 0 10px;
				word-wrap: normal;
				word-break: break-all;
				white-space: normal;
				font-weight: 500;
				display: inline-block;
				vertical-align: middle;
				width: 100%;
				line-height: 24px;
				position: relative;
				text-overflow: ellipsis;
			}

	
	.el-table /deep/ .el-table__body-wrapper tbody {
				padding: 0;
				width: 100%;
			}

	.el-table /deep/ .el-table__body-wrapper tbody tr {
				background: none;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td {
				padding: 2px 0;
				color: inherit;
				background: none;
				font-size: inherit;
				border-color: rgba(126, 96, 16, .2);
				border-width: 0 1px 1px 0px;
				border-style: solid;
				text-align: left;
			}
	
		
	.el-table /deep/ .el-table__body-wrapper tbody tr:hover td {
				padding: 2px 0;
				color: #666;
				background: rgba(126, 96, 16, .05);
				border-color: rgba(126, 96, 16, .2);
				border-width: 0 1px 1px 0px;
				border-style: solid;
				text-align: left;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td {
				padding: 2px 0;
				color: inherit;
				background: none;
				font-size: inherit;
				border-color: rgba(126, 96, 16, .2);
				border-width: 0 1px 1px 0px;
				border-style: solid;
				text-align: left;
			}

	.el-table /deep/ .el-table__body-wrapper tbody tr td .cell {
				padding: 0 10px;
				overflow: hidden;
				color: inherit;
				word-break: break-all;
				white-space: normal;
				line-height: 24px;
				text-overflow: ellipsis;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td .view {
				border: 1px solid rgba(126, 96, 16, .2);
				cursor: pointer;
				border-radius: 20px;
				padding: 0 6px 0 4px;
				margin: 0 10px 5px 0;
				outline: none;
				color: rgba(126, 96, 16, .8);
				background: rgba(255,255,255,.0);
				width: auto;
				font-size: 14px;
				height: 32px;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td .view:hover {
				opacity: 0.8;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td .add {
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td .add:hover {
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td .edit {
				border: 1px solid rgba(254, 148, 34, .2);
				cursor: pointer;
				border-radius: 20px;
				padding: 0 6px 0 4px;
				margin: 0 10px 5px 0;
				outline: none;
				color: #fe9422;
				background: rgba(255,255,255,.0);
				width: auto;
				font-size: 14px;
				height: 32px;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td .edit:hover {
				opacity: 0.8;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td .del {
				border: 1px solid rgba(180, 52, 31, .2);
				cursor: pointer;
				border-radius: 20px;
				padding: 0 6px 0 4px;
				margin: 0 10px 5px 0;
				outline: none;
				color: #b4341f;
				background: rgba(255,255,255,.0);
				width: auto;
				font-size: 14px;
				height: 32px;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td .del:hover {
				opacity: 0.8;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td .btn8 {
				border: 1px solid rgba(31, 160, 180, .2);
				cursor: pointer;
				border-radius: 20px;
				padding: 0 6px 0 4px;
				margin: 0 10px 5px 0;
				outline: none;
				color: #1fa1b4;
				background: rgba(255,255,255,.0);
				width: auto;
				font-size: 14px;
				height: 32px;
			}
	
	.el-table /deep/ .el-table__body-wrapper tbody tr td .btn8:hover {
				opacity: 0.8;
			}
	
	// pagination
	.main-content .el-pagination /deep/ .el-pagination__total {
				margin: 0 10px 0 0;
				color: inherit;
				font-weight: 400;
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
				line-height: 28px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .btn-prev {
				border: none;
				border-radius: 2px;
				padding: 0 5px;
				margin: 0 5px;
				color: inherit;
				background: none;
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
				line-height: 28px;
				min-width: 35px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .btn-next {
				border: none;
				border-radius: 2px;
				padding: 0 5px;
				margin: 0 5px;
				color: inherit;
				background: none;
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
				line-height: 28px;
				min-width: 35px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .btn-prev:disabled {
				border: none;
				cursor: not-allowed;
				border-radius: 2px;
				padding: 0 5px;
				margin: 0 5px;
				color: #999;
				background: none;
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
				line-height: 28px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .btn-next:disabled {
				border: none;
				cursor: not-allowed;
				border-radius: 2px;
				padding: 0 5px;
				margin: 0 5px;
				color: #999;
				background: none;
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
				line-height: 28px;
				height: 28px;
			}

	.main-content .el-pagination /deep/ .el-pager {
				padding: 0;
				margin: 0;
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
			}

	.main-content .el-pagination /deep/ .el-pager .number {
				cursor: pointer;
				padding: 0 4px;
				margin: 0 5px;
				color: inherit;
				background: none;
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
				line-height: 24px;
				text-align: center;
				height: 24px;
			}
	
	.main-content .el-pagination /deep/ .el-pager .number:hover {
				cursor: pointer;
				padding: 0 4px;
				margin: 0 5px;
				color: #fff;
				background: rgba(126, 96, 16, .6);
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
				line-height: 24px;
				text-align: center;
				height: 24px;
			}
	
	.main-content .el-pagination /deep/ .el-pager .number.active {
				cursor: default;
				padding: 0 4px;
				margin: 0 5px;
				color: #fff;
				background: rgba(126, 96, 16, .6);
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
				line-height: 24px;
				text-align: center;
				height: 24px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes {
				color: inherit;
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
				line-height: 28px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes .el-input {
				margin: 0 5px;
				color: inherit;
				width: 100px;
				font-size: inherit;
				position: relative;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes .el-input .el-input__inner {
				border: 0px solid #ddd;
				cursor: pointer;
				padding: 0 25px 0 8px;
				color: inherit;
				display: inline-block;
				font-size: inherit;
				line-height: 28px;
				border-radius: 3px;
				outline: 0;
				background: none;
				width: 100%;
				text-align: center;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes .el-input span.el-input__suffix {
				top: 0;
				position: absolute;
				right: 0;
				height: 100%;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__sizes .el-input .el-input__suffix .el-select__caret {
				cursor: pointer;
				color: #C0C4CC;
				width: 25px;
				font-size: 14px;
				line-height: 28px;
				text-align: center;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__jump {
				margin: 0 0 0 24px;
				color: inherit;
				display: inline-block;
				vertical-align: top;
				font-size: inherit;
				line-height: 28px;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__jump .el-input {
				border-radius: 3px;
				padding: 0 2px;
				margin: 0 2px;
				color: inherit;
				display: inline-block;
				width: 50px;
				font-size: inherit;
				line-height: 18px;
				position: relative;
				text-align: center;
				height: 28px;
			}
	
	.main-content .el-pagination /deep/ .el-pagination__jump .el-input .el-input__inner {
				border: 1px solid rgba(126, 96, 16, .3);
				cursor: pointer;
				padding: 0 0px;
				color: inherit;
				display: inline-block;
				font-size: inherit;
				line-height: 24px;
				border-radius: 3px;
				outline: 0;
				background: none;
				width: auto;
				text-align: center;
				height: 24px;
			}
	
	// list one
	.one .list1-view {
				border: 1px solid rgba(126, 96, 16, .2);
				cursor: pointer;
				border-radius: 20px;
				padding: 0 6px 0 4px;
				margin: 0px 5px 5px 0;
				outline: none;
				color: rgba(126, 96, 16, .8);
				background: rgba(86,178,198,.0);
				width: auto;
				font-size: inherit;
				height: 32px;
			}
	
	.one .list1-view:hover {
				opacity: 0.8;
			}
	
	.one .list1-edit {
				border: 1px solid rgba(254, 148, 34, .2);
				cursor: pointer;
				border-radius: 20px;
				padding: 0 6px 0 4px;
				margin: 0px 5px 5px 0;
				outline: none;
				color: #fe9422;
				background: none;
				width: auto;
				font-size: inherit;
				height: 32px;
			}
	
	.one .list1-edit:hover {
				opacity: 0.8;
			}
	
	.one .list1-del {
				border: 1px solid rgba(180, 52, 31, .2);
				cursor: pointer;
				border-radius: 20px;
				padding: 0 6px 0 4px;
				margin: 0px 5px 5px 0;
				outline: none;
				color: #b4341f;
				background: rgba(255, 0, 0, 0);
				width: auto;
				font-size: inherit;
				height: 32px;
			}
	
	.one .list1-del:hover {
				opacity: 0.8;
			}
	
	.one .list1-btn8 {
				border: 1px solid rgba(31, 160, 180, .2);
				cursor: pointer;
				border-radius: 20px;
				padding: 0 6px 0 4px;
				margin: 0px 5px 5px 0;
				outline: none;
				color: #1fa1b4;
				background: rgba(255, 128, 0, 0);
				width: auto;
				font-size: inherit;
				height: 32px;
			}
	
	.one .list1-btn8:hover {
				opacity: 0.8;
			}
	
	.main-content .el-table .el-switch {
				display: inline-flex;
				vertical-align: middle;
				line-height: 30px;
				position: relative;
				align-items: center;
				height: 30px;
			}
	.main-content .el-table .el-switch /deep/ .el-switch__label--left {
				cursor: pointer;
				margin: 0 10px 0 0;
				color: #333;
				font-weight: 500;
				display: inline-block;
				vertical-align: middle;
				font-size: 16px;
				transition: .2s;
				height: 30px;
			}
	.main-content .el-table .el-switch /deep/ .el-switch__label--right {
				cursor: pointer;
				margin: 0 0 0 10px;
				color: #333;
				font-weight: 500;
				display: inline-block;
				vertical-align: middle;
				font-size: 16px;
				transition: .2s;
				height: 30px;
			}
	.main-content .el-table .el-switch /deep/ .el-switch__core {
				border: 1px solid rgba(126, 96, 16, .3);
				cursor: pointer;
				border-radius: 15px;
				margin: 0;
				outline: 0;
				background: rgba(126, 96, 16, .3);
				display: inline-block;
				width: 60px;
				box-sizing: border-box;
				transition: border-color .3s,background-color .3s;
				height: 30px;
			}
	.main-content .el-table .el-switch /deep/ .el-switch__core::after {
				border-radius: 100%;
				top: 1px;
				left: 1px;
				background: #FFF;
				width: 26px;
				position: absolute;
				transition: all .3s;
				height: 26px;
			}
	.main-content .el-table .el-switch.is-checked /deep/ .el-switch__core::after {
				margin: 0 0 0 -27px;
				left: 100%;
			}
	
	.main-content .el-table .el-rate /deep/ .el-rate__item {
				cursor: pointer;
				display: inline-block;
				vertical-align: middle;
				font-size: 0;
				position: relative;
			}
	.main-content .el-table .el-rate /deep/ .el-rate__item .el-rate__icon {
				margin: 0 3px;
				color: #c0c4cc;
				display: inline-block;
				font-size: 18px;
				position: relative;
				transition: .3s;
			}
</style>
