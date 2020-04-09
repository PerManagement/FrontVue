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

</style>
