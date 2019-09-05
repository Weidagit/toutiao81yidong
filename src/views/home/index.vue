<template>
<div>
    <van-nav-bar
  title="黑马头条"
  fixed
/>
<!-- 频道列表 -->
<van-tabs animated v-model="activeIndex">
   <!-- 遍历标签页，显示频道列表 -->
  <van-tab
  v-for="channel in channels"
  :title="channel.name"
  :key="channel.id">
   <!-- 文章列表,不同的标签页下有不同的列表 -->
    <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <van-cell
    v-for="item in list"
    :key="item"
    :title="item"
  />
</van-list>
  </van-tab>
</van-tabs>
</div>
</template>

<script>
import { getDefaulOrUserChannels } from '../../api/channel'
export default {
  data () {
    return {
      // 列表用的数据
      list: [],
      loading: false,
      finished: false,
      // 频道列表
      channels: [],
      // tab是组件中默认显示的tab项的索引
      // 通过该index，可以找到当前的频道对象
      activeIndex: 0
    }
  },
  created () {
    this.loadChannels()
  },
  methods: {
    // 加载频道列表
    async loadChannels () {
      try {
        const data = await getDefaulOrUserChannels()
        this.channels = data.channels
      } catch (err) {
        console.log(err)
      }
    },
    onLoad () {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }
        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 500)
    }
  }
}
</script>

<style lang="less" scoped>
.van-tabs {
  /deep/ .van-tabs__wrap {
    position: fixed;
    top: 46px;
    left: 0;
    z-index: 100;
  }
  /deep/ .van-tabs__content {
    margin-top: 90px;
    margin-bottom: 50px;
  }
  }
</style>
