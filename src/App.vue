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
    &:last-child{
      margin-bottom: 0;
    }
  }
  .font1{
    text-align:right;
    padding-right:10px;
    line-height:40px;
  }
  /* ::-webkit-scrollbar {
    width: 5px;
    height: 10px;
  }


::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(136, 136, 136, 0.3);
    background-color: transparent; 
}


::-webkit-scrollbar-thumb {
  -webkit-box-shadow:inset 0 0 6px rgba(138, 138, 138, 0.3);
  background-color:black;
} */
.test-5::-webkit-scrollbar {
  /*滚动条整体样式*/
  width : 10px;  /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
  }
  .test-5::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius   : 10px;
  background-color: skyblue;
  background-image: -webkit-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
  );
  }
  .test-5::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
  background   : #ededed;
  border-radius: 10px;
  }
</style>
