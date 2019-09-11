<template>
  <div>
    <van-nav-bar
      title="个人信息"
      right-text="保存"
      left-arrow
      @click-left="$router.back()"
    />
    <van-cell-group>
      <van-cell title="头像" is-link @click="showUploadFile=true">
        <div slot="default">
          <img width="30" height="30" :src="userProfile.photo" alt="">
        </div>
      </van-cell>
      <van-cell title="昵称" is-link :value="userProfile.name" />
    </van-cell-group>
    <van-cell-group>
      <van-cell title="性别" is-link :value="userProfile.gender? '女':'男'" />
      <van-cell title="生日" is-link :value="userProfile.birthday"/>
    </van-cell-group>
    <!-- 弹出上传文件的组件 -->
    <upload-file v-model="showUploadFile"></upload-file>
  </div>
</template>

<script>
import { getUserProfile } from '../../api/user'
import UploadFile from '../user-profile/components/UpLoadFile'
export default {

  data () {
    return {
      userProfile: {},
      showUploadFile: false
    }
  },
  components: {
    UploadFile
  },
  created () {
    this.loadUserProfile()
  },
  methods: {
    async loadUserProfile () {
      try {
        const data = await getUserProfile()
        this.userProfile = data
      } catch (error) {
        this.$toast.fail('获取用户资料失败')
      }
    }
  }
}
</script>

<style>
</style>
