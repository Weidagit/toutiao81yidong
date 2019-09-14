<template>
  <div>
    <van-nav-bar title="登陆" />
    <van-cell-group>
      <van-field
        v-validate="'required|digits:11'"
        name="mobile"
        :error-message="errors.first('mobile')"
        v-model="user.mobile"
        label="手机"
        required
        clearable
        left-icon="phone"
        placeholder="请输入手机号"

      />
      <van-field
      v-validate="'required|digits:6'"
        name="code"
        :error-message="errors.first('code')"
      v-model="user.code"
      left-icon="lock"
      placeholder="请输入密码">
        <van-button slot="button" type="default" size="small">发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <div class="login-btn">
      <van-button
      :loading=loading
      loading-type="spinner"
      loading-text="正在登陆..."
      class="btn"
      type="info"
      @click="onLogin" color="#f83ef8">登陆</van-button>
    </div>
  </div>
</template>

<script>

import { login } from '@/api/user'
import { mapMutations } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {

      user: {
        mobile: '13911111111',
        code: '246810'
      },
      loading: false
    }
  },
  created () {
    const dict = {
      custom: {
        mobile: {
          required: '请输入手机号码',
          digits: '手机号码必须是11位数字'
        },
        code: {
          required: '请输入验证码',
          digits: '验证码必须是6位数字'
        }
      }
    }
    this.$validator.localize('custom', dict)
  },
  methods: {
    ...mapMutations(['setUser']),
    async onLogin () {
      this.loading = true
      try {
        // 表单验证
        // validate() 返回的是promise对象，所以可以使用await调用
        const valid = await this.$validator.validate()
        // 验证失败
        if (!valid) {
          this.loading = false
          return
        }
        // 验证成功
        const data = await login(this.user)
        // 存储登录的状态
        this.setUser(data)
        // 跳转到首页

        // 获取url上查询字符串 redirect
        // 如果获取到redirect，跳转到redirect指向的地址
        // 如果没有redirect跳转到首页
        this.$router.push(this.$route.query.redirect || '/')
        this.$toast.success('登录成功')
      } catch (err) {
        console.log(err)
        this.$toast.fail('登录失败')
      }
      this.loading = false
    }
  }
}
</script>

<style lang="less" scoped>
.login-btn {
  padding: 20px;
  .btn {
    width: 100%;
  }
}
</style>
