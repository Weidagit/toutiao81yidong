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
