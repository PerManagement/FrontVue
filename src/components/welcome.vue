<template>
    <div class="">
        <h1>今日通告</h1>
   <el-table
      ref="multipleTable"
      :data="affiche"
      style="width: 100%"   
      stripe
      border
    >
      <el-table-column
        v-for="item in props"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
        :width="item.widht"
      ></el-table-column>
    </el-table>
    </div>
</template>

<script>
export default {
    name: "",
    data() {
        return {
            affiche: {},
            props: [
                { prop: "title", label: "标题", widht: "300" },
                { prop: "affichecontent", label: "内容", widht: "300" },
                { prop: "user.description", label: "发布人职位", widht: "218" },
                { prop: "user.realname", label: "发布人名字", widht: "210" },
            ]
            }
    },
    components: {},
    methods: {
    //分页查询
    findAfficheByDate() {
        // console.log("aaaaaaaaaaaaaaaaaaaaa");
        
      let url ="affiche/findAfficheByDate";
      this.$axios
        .get(url)
        .then(resp => {
          this.affiche = resp.data.data;
          console.log(resp.data.data);          
        })
        .catch(ex => {
          console.log(ex);
        });
    }
  },
  mounted() {
    this.findAfficheByDate();
  }
}
</script>

<style  scoped>
</style>
