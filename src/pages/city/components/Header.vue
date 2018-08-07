<template>
  <div class="header">城市选择
    <router-link to="/">
    <div class="iconfont">&#xe624;</div>
    </router-link>
  </div>
</template>


<script>
export default {
  name: 'CityHeader'
  }
</script>


<style lang="stylus" scoped>
  .header{
    overflow hidden
    height .86rem
    line-height .86rem
    text-align center
    color #fff
    font-size .32rem
    background #00bcd4
    position relative
  }
  .iconfont{
    width .64rem
    text-align center
    font-size .4rem
    position absolute
    top: 0
    left: 0
    color #fff
  }


</style>
