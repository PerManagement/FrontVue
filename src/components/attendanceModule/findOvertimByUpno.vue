<template>
  <div class>
    <el-table
      ref="multipleTable"
      :data="pageInfo.list"
      style="width: 100%"
      stripe
      border
      :default-sort="{prop: 'date', order: 'ascending'}"
    >
      <el-table-column
        v-for="item in props"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
        :width="item.widht"
      ></el-table-column>
      <!--操作-->
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="findOvertimByKey(scope.row)" type="text" size="small">详细信息</el-button>
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

    <el-dialog title="申请详细信息" :visible.sync="findOvertimById" width="60%" :before-close="handleClose">
      
        <el-row>          
          <el-col :span="3" class="font1">编号：</el-col>
          <el-col :span="10">
            {{overtim.overtimid}}
          </el-col>
        </el-row>
        <el-row>          
          <el-col :span="3" class="font1">申请人：</el-col>
          <el-col :span="10">
            
          </el-col>
        </el-row>

      
        <el-table-column label=""></el-table-column>
      <span slot="footer" class="dialog-footer">
        <el-button @click="findOvertimById = false">退 出</el-button>
        <el-button type="primary" @click="findOvertimById = false">审 批</el-button>
      </span>
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
      findOvertimById: false,
      props: [
        { prop: "user.realname", label: "申请人", widht: "100" },
        { prop: "overtimedatedString", label: "申请时间", widht: "200" }
      ]
    };
  },
  components: {},
  methods: {
    //分页查询
    findOvertimByUpno(page = 1, pageSize = 6) {
      let url = "overtim/findOvertimByUpno";
      this.overtimDto.upno = this.$store.state.login.users.userRoles[0].userid;
      this.overtimDto.page = page;
      this.overtimDto.pageSize = pageSize;

      this.$axios
        .post(url, this.overtimDto)
        .then(resp => {
          this.pageInfo = resp.data.data;
          console.log( resp.data.data);
        })
        .catch(ex => {
          console.log(ex);
        });
    },
    handleChangePage(page) {
      this.findOvertimByUpno(page, this.pageInfo.pageSize);
    },
    handleChangePageSize(pageSize) {
      this.findOvertimByUpno(this.pageInfo.pageNum, pageSize);
    },

    findOvertimByKey(row) {
      // console.log(row);

      this.findOvertimById=true;
      this.overtim=row;

    },
  },
  mounted() {
    this.findOvertimByUpno();
  }
};
</script>

<style  scoped>
</style>
