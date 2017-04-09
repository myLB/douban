import types from './mutation-type.js'

const mutations={
  [types.GET_SLIDERS](state,list){
    state.sliders=list;
    /*改变全局的sliders状态*/
  },
  [types.GET_DETAIL_SLIDERS](state,list){
    state.detail_sliders=list;
    /*改变全局的detail_sliders状态*/
  },
  [types.GET_HOT_PRODUCT](state,list){
    state.hots=list.slice(0,6);
    /*获取首页的热单品*/
  },
  [types.GET_HOT_SHOPS](state,list){
    state.shops.push(...list)
    /*获取首页热商铺*/
  },
  [types.GET_PRODUCT](state,list){
    state.products.push(...list)
    /*获取我的商品*/
  },
  [types.GET_LIST_PRODUCT](state,list){
    state.list_products.push(...list)
    /*获取list的商品*/
    for (let index of state.list_products.keys()){
      state.icons.push({id:index,class_name:true})
    }
  }
}
export default mutations
