<template>
  <div class="db-detail-buy">
    <div class="de-detail-p">
      <p class="de-detail-title">{{hot.title}}</p>
      <div class="db-detail-price">
        <span class="">{{hot.newPrice}}</span>
        <del>{{hot.oldPrice}}</del>
      </div>
      <div class="db-detail-logistics">
        <div class="db-logistics">
          <p>运费: {{hot.freight}} <span class="db-no-Pinkage">非包邮区域</span></p>
        </div>
        <div class="db-detail-icon">
          <i class="el-icon-star-off"></i>
          <i class="el-icon-message"></i>
        </div>
      </div>
    </div>
    <!--物品信息-->

    <div class="db-detail-choose">
      <div class="db-choose-color">
        <h4>颜色</h4>
        <ul>
          <li v-for="(item,index) in colors" class="db-choose-box" :class="{'db-choose-active':isColor==index}" @click="isColor=index" >{{item}}</li>
        </ul>
      </div>
      <div class="db-choose-size">
        <h4>尺寸</h4>
        <ul>
          <li v-for="(item,index) in sizes" class="db-choose-box" :class="{'db-choose-active':isSize==index}" @click="isSize=index" >{{item}}</li>
        </ul>
      </div>
    </div>
    <!--选择尺寸和颜色-->

    <div class="db-details-count">
      <h4>数量</h4>
      <div class="db-choose-count">
        <span class="bd-count-subtract" @click="count>0?count--:0" :class="{'db-count-bc':count>0}">-</span>
        <input type="text" v-model="count" />
        <span class="bd-count-add db-count-bc" @click="count++">+</span>
      </div>
    </div>
    <!--选择数量-->

    <div class="db-detail-assure">
      <span>豆瓣市集担保</span>
      <span>七天无理由退货</span>
      <span>正品保证</span>
      <span>独立品牌</span>
    </div>
    <!--担保-->
  </div>
</template>
<script>
  export default {
      name:'detail-section',
      data(){
          return {
              hot:{
                id:1,
                img:'http://p1.bqimg.com/587986/d610f2017722917d.jpg',
                title:'PISN 高贵冷淡 高领百搭针织打底衫加厚',
                newPrice: "￥229",
                oldPrice: "￥299",
                freight:"￥8.00"
              },
              colors:['白色','青色','紫色'],
              sizes:['S','M','L','XL'],
              isColor:0, //颜色选择
              isSize:0, //大小选择
              count:1   //数量
          }
      },
      watch:{
          count(newVal,oldVal){
              this.count=Number.isNaN(newVal)? 1:parseInt(newVal);  //判断是否能自动转化成数字，能返回false,否则是true
          }
      }
  }
</script>
<style lang="less" scoped>
  .db-detail-buy{
    box-sizing: border-box;
    .de-detail-p{
      padding: 0 .4rem;
      font-size: .4rem;
      .de-detail-title{
        font-size: .44rem;
        color:#4a4a4a;
      }
      .db-detail-price{
        font-weight: 600;
        margin:.3rem 0;
        font-size: .44rem;
        span{
          color:#e17c72;
        }
        del{
          color: #ccc;
        }
      }
      .db-detail-logistics{
        font-size:.38rem;
        div{
          display: inline-block;
        }
        .db-logistics{
          .db-no-Pinkage{
            color: #e17c72;
          }
        }
        .db-detail-icon{
          font-size: .46rem;
          float: right;
          .el-icon-star-off{
            padding-right:.2rem;
            vertical-align: top;
            color: #e17c72;
          }
          .el-icon-message{
            vertical-align: middle;
            color: #3ba94d;
          }
        }
      }
    }
    /*物品信息*/

    .db-detail-choose{
      margin:.4rem 0;
      border-top:1px solid #ccc;
      box-sizing: border-box;
      padding: .44rem;
      border-bottom:1px solid #ccc;
      .db-choose-box{
        width:30%;
        text-align: center;
        line-height:.8rem;
        background-color: #ccc;
        border-radius:.8rem;
        margin-right:.2rem;
        color:#fff;
        font-size:.4rem;
        margin-bottom:.2rem;
      }
      .db-choose-active{
        background-color: #68cb78;
      }
      .db-choose-color,.db-choose-size{
        h4{
          display: inline-block;
          font-size: .4rem;
          color: #9a9a9a;
          margin-right:.8rem;
          line-height: .8rem;
          vertical-align: top;
        }
        ul,li{
          display: inline-block;
        }
        ul{width:70%;}
      }
    }
    /*选择尺寸和颜色*/

    .db-details-count{
      padding:0  .4rem .4rem;
      box-sizing: border-box;
      border-bottom: 1px solid #ccc;
      h4{
        display: inline-block;
        font-size: .44rem;
        color: #9a9a9a;
        margin-right: .8rem;
      }
      .db-choose-count{
        display: inline-block;
        font-size:.44rem;
        input{
          line-height: .8rem;
          width:2.4rem;
          border:none;
          background-color: #ccc;
          border-radius: .8rem;
          text-align: center;
        }
        .bd-count-subtract,.bd-count-add{
          display: inline-block;;
          width: .8rem;
          height:.8rem;
          border-radius: .8rem;
          font-size: .6rem;
          line-height: .8rem;
          text-align: center;
          background-color: #ccc;
          color: #fff;
        }
        .db-count-bc{
          background-color:#68cb78;
        }
      }
    }
    /*选择数量*/

    .db-detail-assure{
      color: #9a9a9a;
      padding: .1rem 0;
      text-align: center;
      span{
        border-right: 1px solid #ccc;
        padding:0 .12rem;
      }
      span:last-child{
        border:none;
      }
    }
    /*担保*/
  }
</style>
