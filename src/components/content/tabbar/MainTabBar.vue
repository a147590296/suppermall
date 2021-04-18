<template>
  <tabbar>
    <tabbaritem path="/home" activecolor="deepPink">
      <img slot="tabbar-img" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="tabbar-img-active" src="~assets/img/tabbar/home_active.svg" alt="">
      <div slot="tabbar-text">首页</div>
    </tabbaritem>
    <tabbaritem path="/category" activecolor="deepPink">
      <img slot="tabbar-img" src="~assets/img/tabbar/category.svg" alt="">
      <img slot="tabbar-img-active" src="~assets/img/tabbar/category_active.svg" alt="">
      <div slot="tabbar-text">分类</div>
    </tabbaritem>
    <tabbaritem path="/cart" activecolor="deepPink">
      <img slot="tabbar-img" src="~assets/img/tabbar/shopcart.svg" alt="">
      <img slot="tabbar-img-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
      <div slot="tabbar-text">购物车</div>
    </tabbaritem>
    <tabbaritem path="/profile" activecolor="deepPink">
      <img slot="tabbar-img" src="~assets/img/tabbar/profile.svg" alt="">
      <img slot="tabbar-img-active" src="~assets/img/tabbar/profile_active.svg" alt="">
      <div slot="tabbar-text">我的</div>
    </tabbaritem>
  </tabbar>
</template>

<script>
import tabbar from 'components/common/tabbar/Tabbar';
import tabbaritem from "components/common/tabbar/Tabbaritem";
export default {
name: "MainTabBar",
  components:{
    tabbar,
    tabbaritem
  }
}
</script>

<style scoped>

</style>
