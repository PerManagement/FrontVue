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
        :width="item.width"
      ></el-table-column>
    </el-table>

<el-button type="text" @click="clockinstate" >上班打卡</el-button>
<el-button type="text" @click="clockoutstate = true">下班打卡</el-button>

<el-dialog
  title="欢迎登录皇帝诏曰内部系统"
  :visible.sync="clockinstate"
  width="30%"
  :before-close="handleClose">
  <h1>2020年5月30日，上班打卡</h1>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="saveAttendance">打 卡</el-button>
  </span>
</el-dialog>

<el-dialog
  title="欢迎登录皇帝诏曰内部系统"
  :visible.sync="clockoutstate"
  width="30%"
  :before-close="handleClose2">
  <h1>2020年5月15日/星期五，下班打卡</h1>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="updateAttendance">确 定</el-button>
  </span>
</el-dialog>



    </div>
</template>

<script>
export default {
    name: "",
    data() {
        return {
          clockinstate: false,
          clockoutstate: false,
          affiche: [],
            attendance: {},
            props: [
                { prop: "title", label: "标题", width: "300" },
                { prop: "affichecontent", label: "内容", width: "300" },
                { prop: "user.description", label: "发布人职位", width: "218" },
                { prop: "user.realname", label: "发布人名字", width: "210" },
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
    },
    
      handleClose(done) {
        this.$confirm('您今日还没上班打卡哦！')
      },
      handleClose2(done) {
        this.$confirm('下班要打卡哦！')
      },
      saveAttendance(){          
        this.attendance.userid=this.$store.state.login.users.userRoles[0].userid;
      let url ="attendance/save";
      this.$axios.post(url,this.attendance).then(resp => {
          this.$message.success(resp.data.message);
          if(resp.data.data!=null){
            this.attendance=resp.data.data;
            this.clockinstate = false;
          }
        })
        .catch(ex => {
          console.log(ex);
        });
      },
      updateAttendance(){
      let url ="attendance/update";
      console.log(this.attendance);
      this.$axios.post(url,this.attendance).then(resp => {
          this.$message.success(resp.data.message);
          if(resp.data.data!=null){
            this.clockoutstate = false;
          }
        })
        .catch(ex => {
          console.log(ex);
        });
      },
      findAttendanceByUserId(){
        let userid=this.$store.state.login.users.userRoles[0].userid;
      let url ="attendance/findAttendanceByUserId?userid="+userid;
      
      this.$axios.get(url).then(resp => {
          // this.$message.success(resp.data.message);
          if(resp.data.data!=null){
            this.clockinstate = false;
          }else{
            this.clockinstate = true;
          }
        })
        .catch(ex => {
          console.log(ex);
        });
      },
  },
  mounted() {
    this.findAttendanceByUserId();
    this.findAfficheByDate();
  }
}
</script>

<style  scoped>
</style>
