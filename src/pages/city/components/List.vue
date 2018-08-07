<template>
  <div class="list" ref="wrapper">
    <div>
    <div class="area">
      <div class="title  border-topbottom">当前城市</div>
      <div class="button-list">
        <div class="button-apper">
        <div class="button">{{this.current}}</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title  border-topbottom">热门城市</div>
      <div class="button-list">
        <div class="button-apper" v-for="item of hot" :key="item.id"
        @click="handleCityClick(item.name)">
          <div class="button">{{item.name}}</div>
        </div>
      </div>
    </div>
    <div class="area" v-for="(item , key) of cities" :key="key" :ref="key">
      <div class="title  border-topbottom">{{key}}</div>
      <div class="item-a ">
        <div class="item  border-topbottom" v-for="innerItem of item" :key="innerItem.id"
        @click="handleCityClick(innerItem.name)">{{innerItem.name}}</div>
      </div>

    </div>
    </div>

  </div>
</template>


<script>
import {mapState,mapMutations} from 'vuex'
  import Bscroll from 'better-scroll'
  export default {
    name: 'CityList',
    props:{
      hot: Array,
      cities:Object,
      letter:String

    },
    computed: {
      ...mapState({
        current: 'city'
      })
    },
    methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
      },
       ...mapMutations(['changeCity'])
    },
    watch:{
      letter(){
        if (this.letter) {
          const element=this.$refs[this.letter][0]
          this.scroll.scrollToElement(element)
        }
      }
    },
    mounted (){
      this.scroll=new Bscroll(this.$refs.wrapper)
    }
  }
</script>


<style lang="stylus" scoped>
  .border-topbottom
     &:before
       border-color: #ccc
      &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .title{
    line-height .54rem
    background #eee
    padding-left .2rem
    color #666
    font-size .26rem
  }
    .list{
      overflow hidden
      position absolute
      top 1.58rem
      right: 0
      bottom: 0
      left: 0
    }
  .button-list{
    padding .1rem .6rem .1rem .1rem
    overflow hidden
  }
  .button-apper{
    float: left
    width 33.33%
  }
  .button{
    margin .1rem
    text-align center
    border .02rem solid #ccc
    padding .1rem 0
    border-radius .06rem
   


  }
  .item-a{
    line-height .76rem
    padding-left .2rem

  }
  .item{
    line-height .76rem
    padding-left .2rem
  }
</style>
