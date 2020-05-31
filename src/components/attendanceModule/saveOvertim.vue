<template>
  <div class>
    <el-row>
      <el-col :span="2" class="font1">
        <el-button type="primary" plain @click="dialogInsertVisible=true">编写申请</el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="overtimid" label="编号" width="100px"></el-table-column>
      <el-table-column prop="overtimedatedString" label="申请时间" width="200px"></el-table-column>
      <el-table-column prop="overtimtype" width="100px" label="申请状态"></el-table-column>

      <el-table-column prop="overtimtype" label="操作">
        <template slot-scope="scope">
          <el-button @click="findOvertimByKey(scope.row)" type="text" size="small">详细信息</el-button>
          <el-button @click="updateOvertimByOvertimIdPage(scope.row)" size="small" type="text" v-if="scope.row.overtimtype == '待修改'" >修改</el-button>
          <el-button @click="updateOvertimByOvertimtype(scope.row)" size="small" type="text"  v-else-if="scope.row.overtimtype == '待确认'">确认</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      layout="prev, pager, next, jumper"
      :page-size="5"
      :total="pageInfo.total"
      @current-change="handleChangePage"
      @size-change="handleChangePageSize"
    ></el-pagination>

    <el-dialog
      title="编辑申请"
      :visible.sync="dialogInsertVisible"
      width="40%"
      :before-close="handleInsertClose"
    >
      <form>
        <el-row>
          <el-col :span="4" class="font1">开始时间：</el-col>
          <el-col :span="5">
            <el-date-picker v-model="overtim.overtimedate" type="datetime" placeholder="选择日期时间"></el-date-picker>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4" class="font1">结束时间：</el-col>
          <el-col :span="5">
            <el-date-picker v-model="overtim.stopovertime" type="datetime" placeholder="选择日期时间"></el-date-picker>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4" class="font1">加班原因：</el-col>
          <el-col :span="20">
            <el-input
              type="textarea"
              placeholder="请输入内容"
              v-model="overtim.overtimreason"
              :autosize="{ minRows: 2, maxRows: 4}"
            ></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-button type="success" round @click="saveOvertim">提交申请</el-button>
          </el-col>
        </el-row>
      </form>
    </el-dialog>

    <el-dialog title="申请详细信息" :visible.sync="dialogFindByIdVisible" width="40%">
      <el-row>
        <el-col :span="4" class="font1">编号：</el-col>
        <el-col :span="10">{{overtim.overtimid}}</el-col>
      </el-row>
      <el-row>
        <el-col :span="4" class="font1">申请人：</el-col>
        <el-col :span="10"></el-col>
      </el-row>

      <el-table-column label></el-table-column>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFindByIdVisible = false">退 出</el-button>
        <el-button type="primary" @click="updateOvertimByUpnoPage = true">审批处理</el-button>
      </span>
    </el-dialog>


    <el-dialog
      title="修改申请"
      :visible.sync="dialogUpdateVisible"
      width="40%"
      :before-close="handleUpdateClose"
    >
      <form>
        <el-row>
          <el-col :span="4" class="font1">开始时间：</el-col>
          <el-col :span="5">
            <el-date-picker v-model="overtimUpdate.overtimedate" type="datetime" placeholder="选择日期时间"></el-date-picker>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4" class="font1">结束时间：</el-col>
          <el-col :span="5">
            <el-date-picker v-model="overtimUpdate.stopovertime" type="datetime" placeholder="选择日期时间"></el-date-picker>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4" class="font1">加班原因：</el-col>
          <el-col :span="20">
            <el-input
              type="textarea"
              placeholder="请输入内容"
              v-model="overtimUpdate.overtimreason"
              :autosize="{ minRows: 2, maxRows: 4}"
            ></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-button type="success" round @click="updateOvertimByOvertimId">提交申请</el-button>
          </el-col>
        </el-row>
      </form>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      page: 1,
      pageInfo: {},
      overtimDto: {},
      overtim: {},
      overtimUpdate: {},
      dialogInsertVisible: false,
      dialogFindByIdVisible: false,
      dialogUpdateVisible: false,
      tableData: [],
    };
  },
  components: {},
  methods: {


    updateOvertimByOvertimId() {
      this.overtimUpdate.userid = this.$store.state.login.users.userRoles[0].userid;
      let url = "overtim/updateOvertimByOvertimId";
      console.log(this.overtimUpdate);
      this.$axios
        .post(url, this.overtimUpdate)
        .then(resp => {
            this.dialogInsertVisible=false;
          this.$message.success(resp.data.message);
          this.overtimUpdate = {};
        })
        .catch(ex => {
          console.log(ex);
        });
    },

    saveOvertim() {
      this.overtim.userid = this.$store.state.login.users.userRoles[0].userid;
      let url = "overtim/saveOvertim";
      console.log(this.overtim);
      this.$axios
        .post(url, this.overtim)
        .then(resp => {
            this.dialogInsertVisible=false;
          this.$message.success(resp.data.message);
          this.overtim = {};
        })
        .catch(ex => {
          console.log(ex);
        });
    },

    //分页查询
    findOvertimByUserId(page = 1, pageSize = 6) {
      let url = "overtim/findOvertimByUserId";
      this.overtimDto.userid = this.$store.state.login.users.userRoles[0].userid;
      this.overtimDto.page = page;
      this.overtimDto.pageSize = pageSize;

      this.$axios
        .post(url, this.overtimDto)
        .then(resp => {
          console.log(resp.data.data);
          for (let i = 0; i < resp.data.data.list.length; i++) {
            this.tableData.push(resp.data.data.list[i]);
          }
        })
        .catch(ex => {
          console.log(ex);
        });
    },
    handleChangePage(page) {
      this.findOvertimByUserId(page, this.pageInfo.pageSize);
    },
    handleChangePageSize(pageSize) {
      this.findOvertimByUserId(this.pageInfo.pageNum, pageSize);
    },
    findOvertimByKey(row) {
      this.dialogFindByIdVisible = true;
      this.overtim = row;
    },
    updateOvertimByOvertimIdPage(){
      this.dialogUpdateVisible = true;
      this.overtimUpdate = row;
    },
    handleInsertClose() {
      this.$confirm("您确定要取消本次审批吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.dialogInsertVisible = false;
          this.overtim = {};
          this.$message({
            type: "success",
            message: "退出成功!"
          });
        })
        .catch(() => {});
    },
    updateOvertimByOvertimtype(row){
        // console.log(row);
        let url="overtim/updateOvertimByOvertimtype";
        this.overtim.overtimid=row.overtimid;

        // console.log(this.overtim);
        this.$axios.post(url,this.overtim).then(resp => {
            this.overtim={};
            this.findOvertimByUserId(1,6);
            this.tableData=[];
            this.$message.success(resp.data.message);
        }).catch(ex => {            
            this.$message.success(resp.data.message);
        });
    }
  },
  mounted() {
    this.findOvertimByUserId();
  }
};
</script>

<style  scoped>
</style>
