import request from '../utils/request';
import { PAGE_SIZE } from '../constants';

export function fetch({ page }) {
  return request(`https://cnodejs.org/api/v1/topics?page=${page}&limit=${PAGE_SIZE}`);
}
