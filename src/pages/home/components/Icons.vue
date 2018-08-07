<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide  v-for="(page, index) of pages" :key="index">
    <div class="icon" v-for="item of  page" :key="item.id">
      <div class="icon-img">
        <img class="icon-img-a" :src="item.imgUrl"/>
      </div>
      <p class="icon-p">{{item.desc}}</p>
    </div>
      </swiper-slide>
    </swiper>



  </div>
</template>
<script>
    export default {
      name: 'HomeIcons',
      props:{
        list:Array
      },
      data (){
        return {
      swiperOption:{
        autoplay:false
      }
        }
      },
      computed: {
        pages () {
          const pages = []
          this.list.forEach((item, index) => {
            const page = Math.floor(index / 8)
            if (!pages[page]) {
              pages[page] = []
            }
            pages[page].push(item)
          })
          return pages
        }
      }

    }
</script>
<style lang="stylus" scoped>
  .icons {
    height 0
    overflow hidden
    padding-bottom 50%
    margin-top .1rem

  }
  .icon{
    overflow hidden
    float left
    width 25%
    padding-bottom 25%
    height: 0

    position relative


  }
  .icon-img {
    position absolute
    top: 0
    left: 0
    right: 0
    bottom:.44rem

  }
  .icon-img-a {
    height 100%
    display block
    margin 0 auto
    box-sizing border-box
    padding .1rem
  }
  .icon-p {
    position absolute
    bottom: 0
    left: 0
    right: 0
    line-height .44rem
    height .44rem
    color #333
    text-align center

  }
</style>
