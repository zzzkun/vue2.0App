<template>
<div>
 <div class="banner" @click="hangdlebanner">
     <img  class="banner-img" :src="bannerImg" >
     <div class="banner-info">
         <div class="banner-title"> {{this.sightName}}</div>
         <div class="banner-nau">
             <span class="iconfont  icon">&#xe632;</span>
            {{this.bannerImgs.length}}</div>
     </div>
 </div>
 <common-gallary
  :imgs="bannerImgs"
   v-show="showgallary"
    @close='handleclose'>
  </common-gallary> 
 </div>
</template>
<script>
// import CommonGallary form 'common/gallary/Gallary'
import CommonGallary from 'common/gallary/Gallary'
export default {
    name: 'DetailBanner',
     props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
    data(){
        return {
            showgallary:false
           
    }},
    methods: {
        hangdlebanner () {
            this.showgallary=true
        
        },
        handleclose(){
            this.showgallary=false
        }
    },
    components: {
        CommonGallary
    }

}
</script>
<style lang="stylus" scoped>
.banner{
    overflow hidden
    height 0
    padding-bottom 55%
    position relative

}
.banner-img{
    width 100%
}
.banner-info{
    display flex
    position absolute
    left 0
    right 0
    bottom 0
    line-height .6rem
    color #fff
    background-image linear-gradient(top ,rgba(0, 0, 0, 0),rgba(0, 0, 0, .8))

}
.banner-title{
    flex 1
    font-size .36rem
    padding 0 .2rem
    line-height .4rem

}
.banner-nau{
    padding 0 .4rem
    height .4rem
    line-height .4rem
    border-radius .2rem
    font-size .24rem
    background rgba(0, 0, 0, .5)
    margin-top .14rem


}
  .icon{
      font-size .24rem
  }

</style>
