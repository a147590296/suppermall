<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="tabbar-img"></slot></div>
    <div v-else><slot name="tabbar-img-active"></slot></div>
    <div :style="ActiveColor"><slot name="tabbar-text"></slot></div>
<!--    <img src="../../assets/img/06.tabbar/home.svg">-->
<!--    <div>首页</div>-->
  </div>
</template>

<script>
export default {
  name: "Tabbaritem",
  props:{
    path: String,
    activecolor: {
      type: String,
      default: 'red'
    }
  },
  data(){
    return{
      //isActive: true
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) != -1
    },
    ActiveColor(){
      return this.isActive ? {color: this.activecolor} : {}
    }
  },
  methods: {
    itemClick(){
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}

</style>
