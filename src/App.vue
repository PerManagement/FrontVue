<template>
  <div>
   <component :is="$store.getters.getAppview"></component>
  </div>
</template>

 <script>
import login from '@/components/login'
import index from '@/components/index'
export default {
  name: 'App',
  components:{
    login,
    index,
  },
}
</script>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .font1{
    text-align:right;
    padding-right:10px;
    line-height:40px;
  }
</style>
