<template>
  <div class="detail-discuss">
    <ul>
      <li v-for="discuss in discusses">
        <img :src="discuss.img" alt="" />
        <span class="detail-discuss-user-name">{{discuss.name}}</span>
        <span class="detail-discuss-user-time">{{discuss.time}}</span>
        <p>{{discuss.content}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
      name:'detail-discuss',
      data(){
          return {
            discusses:[
              {name:'张三',time:'2017-04-01 16:23:44',img:'http://p1.bpimg.com/587986/c7ad269e33e3978f.jpg',content:'180的偏瘦买XL还是XXL的？'},
              {name:'张三',time:'2017-04-01 16:23:44',img:'http://p1.bpimg.com/587986/c7ad269e33e3978f.jpg',content:'180的偏瘦买XL还是XXL的？'},
              {name:'张三',time:'2017-04-01 16:23:44',img:'http://p1.bpimg.com/587986/c7ad269e33e3978f.jpg',content:'180的偏瘦买XL还是XXL的？'},
              {name:'张三',time:'2017-04-01 16:23:44',img:'http://p1.bpimg.com/587986/c7ad269e33e3978f.jpg',content:'180的偏瘦买XL还是XXL的？'},
            ]
          }
      }
  }
</script>
<style lang="less" scoped>
 .detail-discuss{
   margin-bottom:3rem;
   ul{
     li{
       box-sizing: border-box;
       position: relative;
       padding: .4rem;
       img{
         width:.54rem;
         height:.54rem;
         border-radius: .54rem;
         vertical-align: top;
       }
       .detail-discuss-user-name{
         font-size: .374rem;
         color: #9d9d9d;
       }
       .detail-discuss-user-time{
         font-size: .32rem;
         color: #ccc;
       }
       p{
         box-sizing: border-box;
         padding: .4rem 0 .4rem .6rem;
         color: #4a4a4a;
         font-size: .374rem;
       }
       &:after{
          content: '';
          position: absolute;
          left:-50%;
          bottom: 0;
          width: 200%;
          height: 1px;
          background-color: #ccc;
          transform: scale(.5);
       }
     }
   }
 }
</style>
