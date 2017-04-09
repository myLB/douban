<template>
  <div class="detail-evaluate">
    <div class="db-product-grade">
      <div class="db-grade-synthesis">
        综合评分<span class="db-bc-red">4.2</span>
        <i class="el-icon-star-on db-bc-red"></i>
        <i class="el-icon-star-on db-bc-red"></i>
        <i class="el-icon-star-on db-bc-red"></i>
        <i class="el-icon-star-on db-bc-red"></i>
      </div>
      <div class="db-grade-scale">
        <span>很好 <i class="db-bc-red">7</i></span>
        <span>较好 <i class="db-bc-red">3</i></span>
        <span>一般 <i class="db-bc-red">2</i></span>
        <span>差 <i class="db-bc-red">1</i></span>
        <span>极差 <i class="db-bc-red">0</i></span>
      </div>
    </div>
    <!--总的评价-->
    <div class="db-user-grade">
      <ul>
        <li v-for="grade in grades">
          <img :src="grade.img" alt="" />
          <span class="db-user-name">{{grade.name}}</span>
          <span class="db-user-time">{{grade.time}}</span>
          <i v-for="n in grade.i" class="el-icon-star-on db-bc-red"></i>
          <p>{{grade.content}}</p>
        </li>
      </ul>
    </div>
    <!--用户评价-->
  </div>
</template>
<script>
  export default {
      name:'detail-evaluate',
      data(){
          return {
            grades:[
              {name:'张三',time:'2017-04-01 16:23:44',i:3,img:'http://p1.bpimg.com/587986/c7ad269e33e3978f.jpg',content:'买的亚麻短裤，感觉板型、做工都还可以的，上身也比较舒适，就是不知道水洗后怎样~总体感觉性价比挺高'},
              {name:'张三',time:'2017-04-01 16:23:44',i:3,img:'http://p1.bpimg.com/587986/c7ad269e33e3978f.jpg',content:'买的亚麻短裤，感觉板型、做工都还可以的，上身也比较舒适，就是不知道水洗后怎样~总体感觉性价比挺高'},
              {name:'张三',time:'2017-04-01 16:23:44',i:3,img:'http://p1.bpimg.com/587986/c7ad269e33e3978f.jpg',content:'买的亚麻短裤，感觉板型、做工都还可以的，上身也比较舒适，就是不知道水洗后怎样~总体感觉性价比挺高'},
              {name:'张三',time:'2017-04-01 16:23:44',i:3,img:'http://p1.bpimg.com/587986/c7ad269e33e3978f.jpg',content:'买的亚麻短裤，感觉板型、做工都还可以的，上身也比较舒适，就是不知道水洗后怎样~总体感觉性价比挺高'},
              {name:'张三',time:'2017-04-01 16:23:44',i:3,img:'http://p1.bpimg.com/587986/c7ad269e33e3978f.jpg',content:'买的亚麻短裤，感觉板型、做工都还可以的，上身也比较舒适，就是不知道水洗后怎样~总体感觉性价比挺高'},
              {name:'张三',time:'2017-04-01 16:23:44',i:3,img:'http://p1.bpimg.com/587986/c7ad269e33e3978f.jpg',content:'买的亚麻短裤，感觉板型、做工都还可以的，上身也比较舒适，就是不知道水洗后怎样~总体感觉性价比挺高'}
            ]
          }
      }
  }
</script>
<style lang="less" scoped>
  .detail-evaluate{
    .db-bc-red{
      color: #eba887;
    }
    .db-product-grade{
      text-align: center;
      border-bottom: 1px solid #f0f0f0;
      padding: .4rem 0;
      .db-grade-synthesis{
        box-sizing: border-box;
        line-height: 1rem;
        font-size: .36rem;
        color:#9d9d9d;
      }
      .db-grade-scale{
        font-size: .34rem;
        color:#ccc;
        span{
          padding: .05rem;
        }
      }
    }
    /*总的评价*/
    .db-user-grade{
      margin-bottom: 4rem;
      li{
        box-sizing: border-box;
        padding: .4rem;
        font-size: .32rem;
        position:relative;
        img{
          width:.54rem;
          height:.54rem;
          border-radius: .54rem;
          vertical-align: top;
        }
        .db-user-name{
          color: #9d9d9d;
          font-size: .374rem;
        }
        .db-user-time{
          color:#ccc;
        }
        p{
          box-sizing: border-box;
          padding: .4rem 0 .4rem .6rem;
          line-height: 20px;
          font-size: .376rem;
          color:#4a4a4a;
        }
        &:after{
          content: '';
          position: absolute;
          left: -50%;
          bottom: 0;
          width: 200%;
          height:1px;
          background-color:#ccc;
          transform: scale(.5);
        }
      }
    }
    /*用户评价*/
  }
</style>
