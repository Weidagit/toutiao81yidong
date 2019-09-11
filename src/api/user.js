import request from '@/utils/request'
/**
 *登陆
 *@param{*}登陆提交服务器数据，mobile,code
 *
 */
export const login = ({
  mobile,
  code
}) => {
  return request.post('/app/v1_0/authorizations', {
    mobile,
    code
  })
}
// 拉黑作者，id 作者的id
export const blacklists = (id) => {
  return request.post('/app/v1_0/user/blacklists', {
    target: id
  })
}
// 获取用户搜索历史
export const getUserHistories = () => {
  return request.get('/app/v1_0/search/histories')
}
// 关注作者
export const followUser = (id) => {
  return request.post('/app/v1_0/user/followings', {
    target: id
  })
}
// 取消关注作者
export const unfollowUser = (id) => {
  return request.delete(`/app/v1_0/user/followings/${id}`)
}

// 获取当前登录的用户的资料
export const getUserProfile = () => {
  return request.get('/app/v1_0/user/profile')
}
