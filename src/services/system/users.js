import request from '../../utils/request';

export function fetch({ pageSize,pageNum,keyWord }) {
  return request(`/api/user/getByPage?pageNum=${pageNum}&pageSize=${pageSize}&keyWord=${keyWord}`);
}