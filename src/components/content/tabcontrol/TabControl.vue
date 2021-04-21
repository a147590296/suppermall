<template>
  <div class="tab-control">
    <div v-for="(item,index) in tabcontrols" class="tab-control-item" :class="{active: index==activeindex }" @click="itemclick(index)"><span>{{item}}</span></div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props:{
    tabcontrols: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      activeindex: 0
    }
  },
  methods:{
    itemclick(index){
      this.activeindex = index
    }
  },
}
</script>

<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  background-color: #FFF;

}
.tab-control-item{
  flex: 1;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
}
.tab-control-item span{
  padding: 5px;
}
.active{
  color: var(--color-high-text);
}
.active span{
  border-bottom: 2px solid var(--color-high-text);
}
</style>
