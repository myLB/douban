import axios from 'axios'
import types from './mutation-type.js'

const actions={
  get_sliders({commit}){
    axios.get('/mock/home/sliders.json').then((res) => {
      if(res.data.code==0){
        commit(types.GET_SLIDERS,res.data.list);
      }
    })
  },
  /*获取首页轮播图*/
  get_detail_sliders({commit}){
    axios.get('/mock/detail/detail_slider.json').then((res) => {
      if(res.data.code==0){
        commit(types.GET_DETAIL_SLIDERS,res.data.list);
      }
    })
  },
  /*获取详情的轮播*/
  get_hot_product({commit}){
    axios.get('/mock/products/products.json').then((res) => {
      if(res.data.code==0){
        commit(types.GET_HOT_PRODUCT,res.data.list)
      }
    })
  },
  /*获取首页热单品*/
  get_hot_shops({commit,state}){
    state.disabled=true;
    state.loading=true;
    axios.get('/mock/home/hot_shop.json').then((res) => {
      if(res.data.code==0){
        const length=res.data.list.length-state.shops.length;
        const list=[];
        if(length<6){
          list.push(...res.data.list.slice(state.shops.length,res.data.list.length))
          commit(types.GET_HOT_SHOPS,list)
          state.disabled=true;//禁止无限滚动
          state.loading=false;//loading组件消失
          state.nothing=true;//nothing组件出现
        }else{
          list.push(...res.data.list.slice(state.shops.length,state.shops.length+6))
          commit(types.GET_HOT_SHOPS,list)
          state.disabled=false;
          state.loading=true;
        }
      }
    })
  },
  /*获取首页热商铺*/
  get_product({commit,state,dispatch}){
    dispatch('tp')//dispatch用来分发actions中方法
    state.busy=true;
    state.my_loading=true;
    axios.get('/mock/products/products.json').then((res) => {
      if(res.data.code==0){
        const length=res.data.list.length-state.products.length;
        const list=[];
        if(length<6){
          list.push(...res.data.list.slice(state.products.length,res.data.list.length))//获取最后几个数据
          commit(types.GET_PRODUCT,list)
          state.busy=true;//禁止无限滚动
          state.my_loading=false;//loading组件消失
          state.my_nothing=true;//nothing组件出现
        }else{
          list.push(...res.data.list.slice(state.products.length,state.products.length+6))
          commit(types.GET_PRODUCT,list)
          state.busy=false;
          state.my_loading=true;
        }
      }
    })
  },
  /*获取my的商品*/
  get_list_product({commit,state}){
    state.list_busy=true;
    state.list_loading=true;
    axios.get('/mock/products/products.json').then((res) => {
      if(res.data.code==0){
        const length=res.data.list.length-state.list_products.length;
        const list=[];
        if(length<6){
          list.push(...res.data.list.slice(state.list_products.length,res.data.list.length))
          commit(types.GET_LIST_PRODUCT,list)
          state.list_busy=true;//禁止无限滚动
          state.list_loading=false;//loading组件消失
          state.list_nothing=true;//nothing组件出现
        }else{
          list.push(...res.data.list.slice(state.list_products.length,state.list_products.length+6))
          commit(types.GET_LIST_PRODUCT,list)
          state.list_busy=false;
          state.list_loading=true;
        }
      }
    })
  },
  /*获取list的商品*/
  tp(){
    console.log(5)
  }
}
export default actions
