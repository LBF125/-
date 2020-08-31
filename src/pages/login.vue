<template>
    <div class="main">
      <div class="backimg">
        <img src="../assets/2.jpg" alt="">
      </div>
      <div class="nav">
        <div>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0">
            <el-form-item label>
              <h2 class="text-align-center">登录</h2>
            </el-form-item>
            <el-form-item label prop="username">
              <el-input v-model="ruleForm.username" placeholder="请输入用户名"
                        prefix-icon="el-icon-user-solid">
              </el-input>
            </el-form-item>
            <el-form-item label prop="password">
              <el-input v-model="ruleForm.password" type="password" placeholder="请输入密码"
                        prefix-icon="el-icon-s-opportunity">
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" class="login--btn" @click="submit">登录</el-button>
              <el-button type="primary" class="login--btn">注册</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "login",
      data() {
        return {
          ruleForm: {
            username: '',
            password: ''
          },
          rules: {
            username: [
              {required: true, message: '请输入用户名', trigger: 'blur'}
            ],
            password: [{required: true, message: '请输入密码', trigger: 'blur'}]
          },
          rememberMe:true,
          resetPwdForm: {
            phone: '',
            code: '',
            newPwd: '',
            newPwdAgain: ''
          },
          resetPwdRules: {
            code: [{required: true, message: '请输入验证码', trigger: 'blur'}],
            newPwd: [
              {required: true, message: '请输入新密码', trigger: 'blur'},
              {
                min: 6,
                max: 16,
                message: '密码长度必须在6-16位之间',
                trigger: 'blur'
              }
            ],
          },
        }
      },
      methods:{
        submit(){
          console.log('登录成功')
          this.$router.push('/list')
        }
      },
    }
</script>

<style scoped>
  body{
    width: 100%;
    height: 100%;
  }
 .main{
   width: 800px;
   height: 600px;
   background-color: bisque;
   margin: 0 auto;
   display: flex;
 }
  .backimg{
    width: 40%;
    height: auto;
    margin: 15px;
    background-color: darkkhaki;
  }
  .backimg img{
    width: 100%;
    height: 100%;
  }
  .nav{
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .remember  button{
    padding-left: 10px;
  }
</style>
