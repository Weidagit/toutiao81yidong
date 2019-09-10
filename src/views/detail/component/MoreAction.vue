<template>
  <div class="more-action">
  <!-- 用户对文章的态度, -1: 无态度，0-不喜欢，1-点赞 -->
    <van-button
      :icon="article.attitude === 1 ? 'good-job' : 'good-job-o' "
      round
      :loading="loading"
      type="danger"
      @click="handlepraise"
    >赞</van-button>

    <van-button
      :icon="article.attitude === 0 ? 'star-o' : 'star'"
      round
      :loading="false"
      type="danger"
     @click="handlelike"
    >不喜欢</van-button>
  </div>
</template>

<script>
import { likeArticle, unlikeArticle, unDislikeArticle, dislikeArticle } from '../../../api/article'
export default {
  props: ['article'],
  data () {
    return {
      loading: false
    }
  },
  methods: {
    // 点赞和取消点赞
    async handlepraise () {
      // 判断是否登录
      if (!this.$checkLogin()) {
        return
      }
      // 点赞或者取消点赞
      try {
        // 用户对文章的态度, -1: 无态度，0-不喜欢，1-点赞
        if (this.article.attitude === 1) {
          // 当前已经点赞，取消点赞
          await unlikeArticle(this.article.art_id)
          this.article.attitude = -1
        } else {
          await likeArticle(this.article.art_id)
          this.article.attitude = 1
        }
      } catch (err) {
        this.$toast.fail('操作失败')
      }
    },
    // 喜欢和取消喜欢
    async handlelike () {
      // 判断是否登录
      // 不喜欢或者取消不喜欢
      try {
        // 用户对文章的态度, -1: 无态度，0-不喜欢，1-点赞
        if (this.article.attitude === 0) {
          // 当前已经对文章不喜欢，取消不喜欢
          await unDislikeArticle(this.article.art_id)
          this.article.attitude = -1
        } else {
          await dislikeArticle(this.article.art_id)
          this.article.attitude = 0
        }
      } catch (err) {
        this.$toast.fail('操作失败')
      }
    }
  }
}

</script>

<style lang="less" scoped>
.more-action {
  padding: 20px;
  display: flex;
  justify-content: space-around;
}
</style>
