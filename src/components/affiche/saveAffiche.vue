<template>
  <div class>
    <form>
      <el-row>
        <el-col :span="3" class="font1">标题：</el-col>
        <el-col :span="10">
          <el-input placeholder="请输入内容" v-model="affiche.title" clearable></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3" class="font1">内容：</el-col>
        <el-col :span="10">
          <el-input
            type="textarea"
            placeholder="请输入内容"
            v-model="affiche.affichecontent"
            :autosize="{ minRows: 2, maxRows: 8}"
          ></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="9">
          <el-button type="success" round @click="saveAffiche">发布公告</el-button>
        </el-col>
      </el-row>
    </form>
  </div>
</template>

<script>


export default {
  name: "",
  data() {
    return {
      affiche: {},      
    };
  },
  components: {},
  methods: {
      saveAffiche(){
        
        this.affiche.userid=this.$store.state.login.users.userid;
         console.log(this.affiche);
      let url ="affiche/saveAffiche";
      this.$axios.post(url,this.affiche).then(resp => {
          this.$store.state.returnMessage = resp.data.data;
          console.log("msg:" + this.$store.state.returnMessage);
        })
        .catch(ex => {
          console.log(ex);
        });
        
      },
  }
};
</script>

<style  scoped>
</style>
