<template>
<div>
     <router-view></router-view>
 <van-tabbar route>
  <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
  <van-tabbar-item to="/qa" icon="search">问答</van-tabbar-item>
  <van-tabbar-item to="/video" icon="friends-o">视频</van-tabbar-item>
  <van-tabbar-item to="/user" icon="setting-o">我的</van-tabbar-item>
</van-tabbar>
</div>

</template>

<script>
export default {

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
