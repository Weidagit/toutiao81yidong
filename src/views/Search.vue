<template>
  <div>
    <!-- 搜索框 -->
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action
      @search="onSearch(value)"
      @cancel="onCancel"
      @input="hangleInput"
      background="#3e9df8"
    />
    <!-- 搜索提示 -->
    <van-cell-group v-show="value">
      <van-cell
        v-for="item in suggestionList"
        @click="onSearch(item)"
        :title="item"
        :key="item"
        icon="search"
      />
    </van-cell-group>

    <!-- 历史记录 -->
    <van-cell-group v-show="!value">
      <van-cell title="历史记录">
        <!-- 自定义右侧内容 -->
        <div v-show="isEdit" style="display: inline-block">
          <span>全部删除</span>&nbsp;
          <span @click="isEdit=false">完成</span>&nbsp;
        </div>
        <van-icon v-show="!isEdit" @click="isEdit=true" name="delete" size="18px" />
      </van-cell>
      <van-cell v-for="(item,index) in histories" :key="item" :title="item">
        <!-- 自定义右侧内容 -->
       <van-icon v-show="isEdit" name="close" @click="handleDelete(index)" size="18px" />
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import { getSuggestion } from '../api/search'
import { mapState } from 'vuex'
import { getItem, setItem } from '../utils/localStorage'
// import { getUserHistories } from '../api/user'
export default {
  name: 'Search',
  data () {
    return {
      value: '',
      // 存储搜索建议
      suggestionList: [],
      // 编辑模式
      isEdit: false,
      // 历史记录
      histories: []
    }
  },
  computed: {
    ...mapState(['user'])
  },

  methods: {
    async onSearch (item) {
      console.log(item)
      // 判断histories中是否已经存在item
      if (this.histories.includes(item)) {
        return
      }
      // 记录搜索历史
      this.histories.push(item)
      // 判断是否登录
      if (this.user) {
        // 发送请求
        // const data = await getUserHistories()
        // console.log(data)
        // this.histories = data
        // return
      }
      setItem('history', this.histories)
    },
    onCancel () {},
    async hangleInput () {
      if (this.value.length === 0) {
        return
      }
      try {
        const data = await getSuggestion(this.value)
        this.suggestionList = data.options
      } catch (error) {
        console.log(error)
      }
    },
    // 点击历史记录的删除按钮
    handleDelete (index) {
      this.histories.splice(index, 1)
      setItem('history', this.histories)
    },
    created () {
      if (this.user) {
      // 发送请求
        //   const data = getUserHistories()
        //   console.log(data.keywords)
        //   this.histories = data
        //   return
      }
      this.histories = getItem('history') || []
    }
  }
}
</script>

<style>
</style>
