<template>
	<div>

	<div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20240118/7a90d739918844fd901258271df346a4.jpg)","display":"flex","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","justifyContent":"center"}'>
		<el-form class='rgs-form' v-if="pageFlag=='register'" :style='{"border":"1px solid #8ac0e5","padding":"30px 20px 30px 0","boxShadow":"0px 26px 26px -30px #0c5588","margin":"20px auto","borderRadius":"20px","textAlign":"center","background":"linear-gradient(180deg, rgba(118,179,219,1) 0%, rgba(24,113,171,1) 100%)","width":"650px","position":"relative","height":"auto"}' ref="registerForm" :model="registerForm" :rules="rules">
			<div v-if="false" :style='{"width":"100%","margin":"0 0 10px 0","lineHeight":"44px","fontSize":"20px","color":"rgba(64, 158, 255, 1)","textAlign":"center"}'>USER / REGISTER</div>
			<div v-if="true" :style='{"margin":"0px auto 20px","-webkit-text-stroke":"8px transparent","color":"#fff","textAlign":"center","background":"linear-gradient(178deg, rgba(12,71,109,1) 0%, rgba(0,198,255,.1) 55%, rgba(12,71,109,1) 55%, rgba(0,198,255,.1) 100%)","-webkitTextFillColor":"#ffffff","width":"100%","letterSpacing":"6px","lineHeight":"44px","fontSize":"26px","-webkitBackgroundClip":"text"}'>基于php的摄影门户网站设计与实现注册</p></div>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","textAlign":"left","height":"auto"}' v-if="tableName=='yonghu'" prop="zhanghao">
				<div v-if="true" :style='{"padding":"0 10px 0 0","color":"#def1fe","textAlign":"right","background":"none","display":"inline-block","width":"120px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('zhanghao')?'required':''">账号：</div>
				<el-input v-model="registerForm.zhanghao"  placeholder="请输入账号" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","textAlign":"left","height":"auto"}' v-if="tableName=='yonghu'" prop="mima">
				<div v-if="true" :style='{"padding":"0 10px 0 0","color":"#def1fe","textAlign":"right","background":"none","display":"inline-block","width":"120px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('mima')?'required':''">密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","textAlign":"left","height":"auto"}' v-if="tableName=='yonghu'" prop="mima2">
				<div v-if="true" :style='{"padding":"0 10px 0 0","color":"#def1fe","textAlign":"right","background":"none","display":"inline-block","width":"120px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('mima')?'required':''">确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","textAlign":"left","height":"auto"}' v-if="tableName=='yonghu'" prop="xingming">
				<div v-if="true" :style='{"padding":"0 10px 0 0","color":"#def1fe","textAlign":"right","background":"none","display":"inline-block","width":"120px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('xingming')?'required':''">姓名：</div>
				<el-input v-model="registerForm.xingming"  placeholder="请输入姓名" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","textAlign":"left","height":"auto"}' v-if="tableName=='yonghu'" prop="xingbie">
				<div v-if="true" :style='{"padding":"0 10px 0 0","color":"#def1fe","textAlign":"right","background":"none","display":"inline-block","width":"120px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('xingbie')?'required':''">性别：</div>
                <el-select v-model="registerForm.xingbie" placeholder="请选择性别" >
                  <el-option
                      v-for="(item,index) in yonghuxingbieOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","textAlign":"left","height":"auto"}' v-if="tableName=='yonghu'" prop="shouji">
				<div v-if="true" :style='{"padding":"0 10px 0 0","color":"#def1fe","textAlign":"right","background":"none","display":"inline-block","width":"120px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('shouji')?'required':''">手机：</div>
				<el-input v-model="registerForm.shouji"  placeholder="请输入手机" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","textAlign":"left","height":"auto"}' v-if="tableName=='yonghu'" prop="youxiang">
				<div v-if="true" :style='{"padding":"0 10px 0 0","color":"#def1fe","textAlign":"right","background":"none","display":"inline-block","width":"120px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('youxiang')?'required':''">邮箱：</div>
				<el-input v-model="registerForm.youxiang"  placeholder="请输入邮箱" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","textAlign":"left","height":"auto"}' v-if="tableName=='yonghu'" prop="shenfenzheng">
				<div v-if="true" :style='{"padding":"0 10px 0 0","color":"#def1fe","textAlign":"right","background":"none","display":"inline-block","width":"120px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('shenfenzheng')?'required':''">身份证：</div>
				<el-input v-model="registerForm.shenfenzheng"  placeholder="请输入身份证" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","textAlign":"left","height":"auto"}' v-if="tableName=='yonghu'" prop="touxiang">
				<div v-if="true" :style='{"padding":"0 10px 0 0","color":"#def1fe","textAlign":"right","background":"none","display":"inline-block","width":"120px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('touxiang')?'required':''">头像：</div>
                <file-upload
					tip="点击上传头像"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="registerForm.touxiang?registerForm.touxiang:''"
					@change="yonghutouxiangUploadChange"
				></file-upload>
			</el-form-item>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 24px","margin":"20px 10px 20px 0","color":"#fff","borderRadius":"4px","background":"#00c6ff","display":"inline-block","width":"140px","letterSpacing":"4px","fontSize":"16px","height":"36px"}' type="primary" @click="submitForm('registerForm')">注册</el-button>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 24px","margin":"0","color":"#666","borderRadius":"4px","textAlign":"center","background":"#fff","display":"inline-block","width":"140px","fontSize":"16px","height":"36px"}' @click="resetForm('registerForm')">重置</el-button>
			<router-link :style='{"cursor":"pointer","padding":"6px 8px","margin":"40px 0 0 0","color":"#fff","textAlign":"right","display":"inline-block","textDecoration":"none","float":"right","borderRadius":"4px","background":"none","width":"auto","lineHeight":"20px","fontSize":"14px"}' to="/login">已有账户登录</router-link>
			<div class="idea1" :style='{"width":"100%","background":"red","display":"none","height":"40px"}'></div>
			<div class="idea2" :style='{"width":"100%","background":"blue","display":"none","height":"40px"}'></div>
		</el-form>
    </div>
  </div>
</div>
</template>

<script>

export default {
    //数据集合
    data() {
		return {
            pageFlag : '',
			tableName: '',
			registerForm: {},
			forgetForm: {},
			rules: {},
			requiredRules: {},
            yonghuxingbieOptions: [],
		}
    },
	mounted() {
		if(this.$route.query.pageFlag=='register'){
			
			this.tableName = this.$route.query.role;
			if(this.tableName=='yonghu'){
				this.registerForm = {
					zhanghao: '',
					mima: '',
					mima2: '',
					xingming: '',
					xingbie: '',
					shouji: '',
					youxiang: '',
					shenfenzheng: '',
					touxiang: '',
					money: '',
				}
			}
			if ('yonghu' == this.tableName) {
				this.requiredRules.zhanghao = [{ required: true, message: '请输入账号', trigger: 'blur' }]
			}
			if ('yonghu' == this.tableName) {
				this.requiredRules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
		}
	},
    created() {
		this.pageFlag = this.$route.query.pageFlag;
		if(this.$route.query.pageFlag=='register'){
		  if ('yonghu' == this.tableName) {
			this.rules.zhanghao = [{ required: true, message: '请输入账号', trigger: 'blur' }];
		  }
		  if ('yonghu' == this.tableName) {
			this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
		  }
			this.yonghuxingbieOptions = "男,女".split(',');
		  if ('yonghu' == this.tableName) {
			this.rules.shouji = [{ required: true, validator: this.$validate.isMobile, trigger: 'blur' }];
		  }
		  if ('yonghu' == this.tableName) {
			this.rules.money = [{ required: true, validator: this.$validate.isNumber, trigger: 'blur' }];
		  }
		}
    },
    //方法集合
    methods: {
		changeRules(name){
			if(this.requiredRules[name]){
				return true
			}
			return false
		},
      // 获取uuid
      getUUID () {
        return new Date().getTime();
      },
        // 下二随
      yonghutouxiangUploadChange(fileUrls) {
          this.registerForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },

        // 多级联动参数


      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var url=this.tableName+"/register";
				if((!this.registerForm.zhanghao) && `yonghu` == this.tableName){
					this.$message.error(`账号不能为空`);
					return
				}
               if(`yonghu` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
				if((!this.registerForm.mima) && `yonghu` == this.tableName){
					this.$message.error(`密码不能为空`);
					return
				}
					if(`yonghu` == this.tableName && this.registerForm.shouji &&(!this.$validate.isMobile2(this.registerForm.shouji))){
						this.$message.error(`手机应输入手机格式`);
						return
					}
            this.$http.post(url, this.registerForm).then(res => {
              if (res.data.code === 0) {
                this.$message({
                  message: '注册成功',
                  type: 'success',
                  duration: 1500,
                  onClose: () => {
                    this.$router.push('/login');
                  }
                });
              } else {
                this.$message.error(res.data.msg);
              }
            });
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.container {
		position: relative;
		background: url(http://codegen.caihongy.cn/20240118/7a90d739918844fd901258271df346a4.jpg);
		
		.el-input {
		  width: auto;
		}
		
		.el-date-editor.el-input {
			width: auto;
		}
		
		.el-form-item /deep/ .el-form-item__content {
						display: flex;
					}
		
		.rgs-form .el-input /deep/ .el-input__inner {
						border-radius: 4px;
						padding: 0 10px;
						color: #666;
						background: #fff;
						width: 100%;
						font-size: 14px;
						border-color: #be9a1b;
						border-width: 0 0 0px;
						border-style: solid;
						min-width: 350px;
						height: 36px;
					}
		
		.rgs-form .el-select /deep/ .el-input__inner {
						border-radius: 4px;
						padding: 0 10px;
						color: #666;
						background: #fff;
						width: auto;
						font-size: 14px;
						border-color: #be9a1b;
						border-width: 0 0 0px;
						border-style: solid;
						min-width: 350px;
						height: 36px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border-radius: 4px;
						padding: 0 10px 0 30px;
						color: #666;
						background: #fff;
						width: auto;
						font-size: 14px;
						border-color: #be9a1b;
						border-width: 0 0 0px;
						border-style: solid;
						min-width: 350px;
						height: 36px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border-radius: 4px;
						padding: 0 10px 0 30px;
						color: #666;
						background: #fff;
						width: auto;
						font-size: 14px;
						border-color: #be9a1b;
						border-width: 0 0 0px;
						border-style: solid;
						min-width: 350px;
						height: 36px;
					}
		
		.rgs-form /deep/ .el-upload--picture-card {
			background: transparent;
			border: 0;
			border-radius: 0;
			width: auto;
			height: auto;
			line-height: initial;
			vertical-align: middle;
		}
		
		.rgs-form /deep/ .upload .upload-img {
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: #999;
		  		  background: #fff;
		  		  width: 80px;
		  		  font-size: 24px;
		  		  border-color: #be9a1b60;
		  		  border-width: 0px;
		  		  line-height: 60px;
		  		  border-style: solid;
		  		  text-align: center;
		  		  height: 60px;
		  		}
		
		.rgs-form /deep/ .el-upload-list .el-upload-list__item {
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: #999;
		  		  background: #fff;
		  		  width: 80px;
		  		  font-size: 24px;
		  		  border-color: #be9a1b60;
		  		  border-width: 0px;
		  		  line-height: 60px;
		  		  border-style: solid;
		  		  text-align: center;
		  		  height: 60px;
		  		}
		
		.rgs-form /deep/ .el-upload .el-icon-plus {
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: #999;
		  		  background: #fff;
		  		  width: 80px;
		  		  font-size: 24px;
		  		  border-color: #be9a1b60;
		  		  border-width: 0px;
		  		  line-height: 60px;
		  		  border-style: solid;
		  		  text-align: center;
		  		  height: 60px;
		  		}
	}
	.required {
		position: relative;
	}
	.required::after{
				color: red;
				left: 108px;
				position: absolute;
				content: "*";
				order: 2;
			}
</style>
