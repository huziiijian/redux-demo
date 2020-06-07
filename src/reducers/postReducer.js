import { FETCH_POSTS, NEW_POST } from '../actions/types';
// reducer的作用: 返回新的状态

const initialState = {
  itemss: [],
  item: {}
}

export default function (state = initialState, action) {//state形参默认赋值
  switch (action.type) {//根据类型返回对应新的state到store，再由store给component(view)
    case FETCH_POSTS:
      return {
        ...state,
        itemss: action.payload
      }
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      }
    default:
      return state;
  }
}